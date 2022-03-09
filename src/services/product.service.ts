import { ProductRepository, ProductRequest } from "../repositories/product.repository";

export class ProductService {

    async create (productRequest: ProductRequest) {
        const repository = new ProductRepository();
        return await repository.create(productRequest);
    }
}