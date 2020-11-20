import { Request, Response } from "express";
import { NodesController as EmployesController } from "../controllers/employes.controller";

export class Routes {
  public employeController: EmployesController = new EmployesController();

  public routes(app): void {
    app.route("/").get(this.employeController.index);

    app.route("/employes").get(this.employeController.index);

    app.route('employes').post(this.employeController.create);

    app.route('employes').put(this.employeController.update);

    app.route('employes').delete(this.employeController.delete);

    app.route("/employes/:id").get(this.employeController.show);
  }
}
