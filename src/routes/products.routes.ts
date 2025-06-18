import { Router } from "express";
import { ProductsController } from "@/controllers/products-controller";
import { ensureAuthenticated } from "@/middlewares/ensureAuthenticated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";

const productsRoutes = Router();
const productsController = new ProductsController();

// quando eu quero aplicar verificacoes em todas as rotas a seguir
// productsRoutes.use(verifyUserAuthorization(["sale","admin"]))


//Autorização em uma rota específica
productsRoutes.get("/", productsController.index);
productsRoutes.post(
  "/",
  ensureAuthenticated,
  verifyUserAuthorization(["sale", "admin"]),
  productsController.create
);

export { productsRoutes };
