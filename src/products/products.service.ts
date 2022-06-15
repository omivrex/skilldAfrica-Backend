import { HttpException, HttpStatus, Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { readFileSync, writeFileSync } from "fs";
const productDB = JSON.parse(readFileSync('./src/db/products.json').toString())
import {DaddProductReq, Dproduct, DproductReqObj, DstoreResponse} from "../dtos/product.dto"

@Injectable()
export class ProductsService {
    @UsePipes(ValidationPipe)
    getProductsAllForStore(storename:string):DstoreResponse {
        const products =  productDB.products.sort(() => Math.random() - 0.5)
        .slice(0, 30)// sort array randomly and return 30 items
        const resObj = {storename, products}
        return resObj
    }

    @UsePipes(ValidationPipe)
    addAndEditProduct({productData, store}:DaddProductReq):string{
        try {
            let {data, index} = this.getProductByID({productID: productData.id, store}, true)
            const productInDb = {... data, ...productData}
            productDB.products[index] = productInDb
            return 'OK'
        } catch (error) {
            if (error.message = 'Resource Not Found') {
                productDB.products.push(productData)
                productDB.total+=1
                console.log(productDB.products.length)
                return 'OK'
            }
        }
    }

    @UsePipes(ValidationPipe)
    getProductByID({productID, store}:DproductReqObj, returnProductIndex?:boolean){
        const [requestedProduct]:any[] =  productDB.products.map((product:Dproduct, index:number) => {
            if(product.id===productID)
                console.log(product.id, productID)
                return returnProductIndex? {data:product, index}:product
        })
        if (requestedProduct) {
            return requestedProduct
        } else {
            throw new HttpException('Resource Not Found', HttpStatus.NOT_FOUND)
        }
    }

    @UsePipes(ValidationPipe)
    deleteProduct(productID:number, store:string):string{
        const {index} = this.getProductByID({productID, store}, true)
        productDB.products.splice(index, 1)
        console.log(productDB.products.length)
        return 'Deleted'
    }
}
