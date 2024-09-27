import { useContext, useState } from "react";
import axios from "axios"
import toast from "react-toastify"

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useContext(Context);

    const handlelogout = async() => {
        await axios
        .get("http://localhost:3000/api/v1/user/patient/logout",
            {withCredentials: true}
        )
        .then((res)=>{
            toast.success(res.data.message);
            setIsAuthenticated(false)
        })
        .catch((err)=>{
            toast.error(err.response.data.message)
        })
    }

    const navigateTo = useNavigate();

    const goToLogin = () => {
        navigateTo("/login")
    }

    return (
        <>
            <nav className="container">
                <div className="logo">
                    <img src="#" alt="logo" className="logo-img"/>
                </div>
            </nav>
        </>
    )
}