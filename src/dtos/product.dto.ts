import { IsNotEmpty, IsNumber } from "class-validator"

export class Dproduct {
  @IsNotEmpty({message: 'id is missing from the product you sent!'})
  @IsNumber()
  id: number

  @IsNotEmpty({message: 'title is missing from the product you sent!'})
  title: string

  @IsNotEmpty({message: 'description is missing from the product you sent!'})
  description: string

  @IsNotEmpty({message: 'price is missing from the product you sent!'})
  @IsNumber()
  price: number

  @IsNotEmpty({message: 'discountPercentage is missing from the product you sent!'})
  @IsNumber()
  discountPercentage: number

  @IsNotEmpty({message: 'rating is missing from the product you sent!'})
  @IsNumber()
  rating: number

  @IsNotEmpty({message: 'stock is missing from the product you sent!'})
  @IsNumber()
  stock: number

  @IsNotEmpty({message: 'brand is missing from the product you sent!'})
  brand: string

  @IsNotEmpty({message: 'category is missing from the product you sent!'})
  category: string

  @IsNotEmpty({message: 'thumbnail is missing from the product you sent!'})
  thumbnail: string

  @IsNotEmpty({message: 'images is missing from the product you sent!'})
  images: string[]
}

export class DstoreResponse {
  @IsNotEmpty({message: 'storename is missing from the response object!'})
  storename: string

  @IsNotEmpty({message: 'products is missing from the response object!'})
  products: Dproduct[]
}

export class DaddProductReq {
  @IsNotEmpty({message: 'store is missing from the DaddProductReq object!'})
  store: string

  @IsNotEmpty({message: 'productData is missing from the DaddProductReq object!'})
  productData: Dproduct
}

export class DproductReqObj {
  @IsNotEmpty({message: 'productID is missing from the DproductReqObj object!'})
  @IsNumber()
  productID:number

  @IsNotEmpty({message: 'store is missing from the DproductReqObj object!'})
  store:string
}