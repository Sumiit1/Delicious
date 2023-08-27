import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment, useState } from 'react';
import Button from "../../components/elements/Button"
const defaultformFields = {
    name: "",
    imageUrl: "",
    price: Number,
    description: "",
    category: ""
}
const AddDish = () => {
    const [formFields, setFormFields] = useState(defaultformFields)
    const onChangeHandler = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }
    const onFormSubmitHandler = (event) => {
        event.preventDefault()
        const { name,
            imageUrl,
            price,
            description,
            category } = formFields
        fetch('http://localhost:8080/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                imageUrl,
                price,
                description,
                category
            })
        }).then((response) => {
            if (response.status === 200) {
                
                toast.success('Dish Added successfully!🎉', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                    });
                // navigate('/');
                setTimeout(()=>{
                    window.location.href="/"
                },2000)
                
            } else {
                console.log(response.json());
            }
        }).catch((error) => {
            
            console.log(error)
        })
    }
    return (
        <Fragment>
            <div className="min-h-screen bg-black flex  items-center justify-center">
                <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
                    <div className="absolute inset-0 transition duration-300 animate-pink blur  gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
                    <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
                        <h5 className="text-3xl text-center text-gray-200">New Dish</h5>
                        <form className="w-full space-y-6" onSubmit={onFormSubmitHandler}>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-lg font-medium text-gray-200">Dish Name</label>
                                <input
                                    onChange={onChangeHandler}
                                    id="name"
                                    type="text"
                                    name="name"
                                    className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="description"
                                    className="block text-lg font-medium text-gray-200">Description</label>
                                <textarea
                                    onChange={onChangeHandler}
                                    id="description"
                                    name="description"
                                    className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="photo"
                                    className="block text-lg font-medium text-gray-200">Dish Image URL</label>
                                <input
                                    onChange={onChangeHandler}
                                    id="photo"
                                    type="text"
                                    name="imageUrl"
                                    className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="category"
                                    className="block text-lg font-medium text-gray-200">Dish Category</label>
                                <select
                                    onChange={onChangeHandler}
                                    id="category"
                                    name="category"
                                    className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                                ><option selected disabled>Select a category</option>
                                    <option value="lunch">Lunch</option>
                                    <option value="drinks">Drinks</option>
                                    <option value="breakfast">Breakfast</option>
                                    <option value="dinner">Dinner</option>
                                </select>
                            </div>
                            <div>
                                <label
                                    htmlFor="price"
                                    className="block text-lg font-medium text-gray-200">Price</label>
                                <input
                                    onChange={onChangeHandler}
                                    id="price"
                                    type="number"
                                    min="50"
                                    max="500" name="price"
                                    className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                                />
                            </div>
                            <Button size="large">Add</Button>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default AddDish