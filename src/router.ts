import { Router } from "express";
import { ProductController } from "./controllers/product.controller";

const router = Router();

router.post("/product", new ProductController().create);

export { router }