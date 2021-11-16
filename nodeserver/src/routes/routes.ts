import { Express } from "express";
import App from "../App";
import AdminRoute from "./AdminRoute";
import BusinesRoute from "./BusinessRoute";
import BusinessPostRoute from "./BusinessPostRoute";
import GenericUserRoute from "./GenericUserRoute";
const Routes = (appServer: Express, app: App) => {
  AdminRoute(appServer, app);
  BusinesRoute(appServer, app);
  BusinessPostRoute(appServer, app);
  GenericUserRoute(appServer, app);
};

export default Routes;
