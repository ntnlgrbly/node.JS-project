const indexR = require("./index");
const usersR = require("./users");
const categoriesR = require("./categories");
const productsR = require("./products");
const favsR = require("./favProducts");
const emailR = require("./email");




// פונקציה שנקרא לה באפ ומגדירה לפי הכתובת שהיוזר
// הגיע איזה ראוט להפעיל במידה והקובץ לא נמצא
// בתקיית פאבליק
exports.routesInit = (app) => {
  app.use("/", indexR);
  app.use("/users", usersR);
  // app.use("/currency", currencyR);
  app.use("/categories", categoriesR);
  app.use("/products", productsR);
  app.use("/favs", favsR);
  app.use("/email", emailR);


  // במידה ולא הגיע לעמוד נכון , נציג לו 404
  app.use((req, res) => {
    //.status(404) -> מה הסטטוס של הדף
    // קריטי כדי שהצד לקוח יזהה ישר שיש לו טעות בבקשה
    res.status(404).json({ msg_error: "Url not found , 404!" })
  })
}



// מאפשר לשרת בדומיין אחר לבצע בקשות לשרת שלנו דרך דפדפן
exports.corsAccessControl = (app) => {
  app.all('*', function (req, res, next) {
    if (!req.get('Origin')) return next();

    res.set('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE,PATCH,");
    res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,auth-token,x-api-key');
    next();
  });
}

