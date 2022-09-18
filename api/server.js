const express = require("express");
const cors = require("cors");
const app = express();
var session = require("express-session");
var MongoDBSession = require("connect-mongodb-session")(session);
const personnelRoutes = require("./routes/personnelRoutes");
const itemRoutes = require("./routes/itemRoutes");
const supplierRoutes = require("./routes/supplierRoutes");
const itemCategoryRoutes = require("./routes/itemCategoryRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const roleRoutes = require("./routes/roleRoutes");
const historyRoutes = require("./routes/historyRoutes");
const roomRoutes = require("./routes/roomRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const settingsRoutes = require("./routes/settingsRoutes");
const reportsRoutes = require("./routes/reportsRoutes");
const statusRoutes = require("./routes/statusRoutes");
const itemConsumablesRoutes = require("./routes/itemConsumablesRoutes");
const itemConsumablesStocksRoutes = require("./routes/itemConsumablesStocksRoutes");
const stockUnitRoutes = require("./routes/stockUnitRoutes");
const stockHistoryRoutes = require("./routes/stockHistoryRoutes");
const stockReportsRoutes = require("./routes/stockReportsRoutes");
const colorsRoutes = require("./routes/colorsRoutes");
const stockDashboardRoutes = require("./routes/stockDashboardRoutes");

require("dotenv").config();
require("./config/dbConnection");

/* Middel Wares */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://172.16.3.26", "http://localhost:3000"],
    credentials: true,
  })
);

/**
 * mongo db session setup
 */
var store = new MongoDBSession({
  uri: `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`,
  collection: "sessions",
  maxAge: 28800, // 28800 secs is 8 hours
});
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store,
    cookies: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
      maxAge: 28800, // 28800 secs is 8 hours
    },
  })
);

app.use((req, res, next) => {
  console.log(
    req.method.toUpperCase(),
    `${req.baseUrl}${req.url}`,
    "@",
    Date.now()
  );
  next();
});

/**
 * api routes
 */
// personnel
app.use("/api/personnel", personnelRoutes);
// auth
app.use("/api/department", departmentRoutes);
// auth
app.use("/api/role", roleRoutes);
// item
app.use("/api/item", itemRoutes);
// item category
app.use("/api/itemcategory", itemCategoryRoutes);
// supplier
app.use("/api/supplier", supplierRoutes);
// history
app.use("/api/history", historyRoutes);
// room
app.use("/api/room", roomRoutes);
// dashboard
app.use("/api/dashboard", dashboardRoutes);
// settings
app.use("/api/settings", settingsRoutes);
// status
app.use("/api/status", statusRoutes);
// reports
app.use("/api/reports", reportsRoutes);
// itemconsumables
app.use("/api/itemconsumables", itemConsumablesRoutes);
// item consumables stocks
app.use("/api/itemconsumablesstocks", itemConsumablesStocksRoutes);
// item consumables stock unit
app.use("/api/stockunit", stockUnitRoutes);
// item consumables stock histories
app.use("/api/stockhistory", stockHistoryRoutes);
// item consumables stock reports
app.use("/api/stockreports", stockReportsRoutes);
// item consumables stock reports
app.use("/api/colors", colorsRoutes);
// stock dashboard
app.use("/api/stockdashboard", stockDashboardRoutes);

/**
 * port
 */
const port = 3001 || process.env.PORT;
app.listen(port, () => console.log(`Running on port ${port}`));
