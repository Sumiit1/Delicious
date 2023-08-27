import Button from "./elements/Button";
import { AddProduct } from "./AddProduct";
const ProductDetailCard = ({ product, onAddProduct,menu }) => {
    const addProduct = () => {
        onAddProduct(product)
    }
    return (
        <div className="p-4 m-4 rounded-lg bg-slate-50 w-96">
            <div className="flex flex-col items-center justify-between">
                <h2 className="text-2xl">{product.name}</h2>
                <p className="text-1xl text-gray-500">
                    {product.desciption}
                </p>
                <div className="flex items-center justify-between">
                    <div className="text-2xl text-black">Rs. {product.price}</div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <img src={product.imageUrl} className="w-40 h-40 rounded-xl object-cover" alt={product.name} />
            </div>
            {/* <div className="w-full flex items-center justify-center">
                <Button onClick={onAddProduct}>Add to Cart</Button>
            </div> */}
            <AddProduct onAddProduct={addProduct} product={product} />
        </div>
    )
}

export default ProductDetailCard;