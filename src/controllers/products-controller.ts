import { Request, Response } from "express"

class ProductsController {
  async index(request: Request, response: Response) {
    return response.json({ message: "Products" })
  }

  async create(request: Request, response: Response) {
    return response.json({ message: request.user?.role })

  }
}

export { ProductsController }
