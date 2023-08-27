import foody from "../assets/images/foody.png";
import cartIcon from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "./elements/Button";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/usercontext";

export const Header = ({ cartCount }) => {
    const navigate = useNavigate();
    const {setCurrentUser}=useContext(UserContext)
    const {currentUser}=useContext(UserContext)
    const [isLoggedIn, setIsLoggedIn] = useState();

    const handleLogout = () => {
        sessionStorage.removeItem('Auth token');
        sessionStorage.removeItem('UserId');
        sessionStorage.removeItem("currentUser")
        window.dispatchEvent(new Event("storage"))
        window.location.reload()
        // navigate("/")
    }

    useEffect(() => {
        const uid=sessionStorage.getItem("UserId")
        if (uid) 
        {
            setIsLoggedIn(true)
            console.log(uid)
            fetch(`http://localhost:8080/api/user/${uid}`)
            .then(response=>response.json())
            .then(data=>setCurrentUser(data))
        }
        else setIsLoggedIn(false)
       
        // const checkAuthToken = () => {
        //     const token = sessionStorage.getItem('Auth token');
        //     if (token) {
        //         setIsLoggedIn(true);
        //     } else {
        //         setIsLoggedIn(false);
        //     }
        // }

        // window.addEventListener('storage', checkAuthToken);

        // return () => {
        //     window.removeEventListener('storage', checkAuthToken);
        // }
    }, [])

    return (
        <nav id="header" className="bg-black text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                        <img src={foody} alt="logo" className="w-40 h-40 object-cover" />
                    </Link>
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to="/" className="text-xl">Home</Link>
                    <Link to="#about" className="text-xl" onClick="scrollToSection(#about)">About</Link>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    {currentUser?.admin?<Link to="/adddish">Add Dish</Link>:"" }
                    <h2>{currentUser?.name}</h2>
                    <Link to="/cart" className="mr-4 relative">
                        <img src={cartIcon} alt="cart" />
                        {cartCount > 0 ? <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-full absolute -top-1 -right-1">{cartCount}</div> : null}
                    </Link>
                    {
                        isLoggedIn ?
                            <Button onClick={handleLogout}>Log Out</Button> :
                            (
                                <>
                                    <Link to="/login">Log In</Link>
                                    <Link to="/register">Sign Up</Link>
                                </>
                            )
                    }
                </div>
            </div>
        </nav>
    )
}