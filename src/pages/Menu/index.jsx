import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "../../stores/menu/productsSlice";
import ProductDetailCard from "../../components/ProductDetailCard";
import { Tabs } from "../../components/Tabs";
import { addToCart } from "../../stores/cart/cartSlice";

const Menu = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const [activeTab, setActiveTab] = useState('');
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    useEffect(() => {
        dispatch(fetchProducts())
        onTabSwitch()
    }, [])

    const onAddProduct = (product) => {
        dispatch(addToCart(product))
    }

    const onTabSwitch = (newActiveTab) => {
        setActiveTab(newActiveTab);
        let categories = products?.products.map((product) => product.category);
        console.log(categories)
        let index = categories.findIndex(category => newActiveTab === category);
        console.log(index);
        if (index > -1) {
            setActiveTabIndex(index);
        } else {
            setActiveTabIndex(0);
        }
    }

    return (
        <div className="bg-white" style={{minHeight:"65vh",height:"100%"}}>
           {
            products.status !== 'fulfilled' ?
            <div>loading...</div> :
            <div className="menu-wrapper">
                {
                    products.products &&
                    <Tabs
                        // list={products.products.map((product) => product.name)}
                        list={products.products.map((product) => product.category)}
                        activeTab={activeTab}
                        onTabSwitch={onTabSwitch}
                        />
                }
                <div className="flex flex-row mx-3">
                {
                    products.products && products.products[activeTabIndex].products.map((product, index) => {
                        return (
                           <ProductDetailCard key={index} product={product} onAddProduct={onAddProduct} menu={true}/>
                        )
                    })
                }
                </div>
            </div>
           }
        </div>
    )
}

export default Menu;