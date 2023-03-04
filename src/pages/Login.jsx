import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "@/helpers/api";
import auth from "@/styles/Auth.module.css"
import LoginLayout from "@/components/layout/LoginLayout";
import SocialLogin from "@/containers/Login/SocialLogin";
import { ReactComponent as LoginImg } from "@/assets/login_img.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)
    const [errMsg, setErrMsg] = useState("");
    const [isFetching, setIsFetching] = useState(false);
    const navigate = useNavigate();

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     axiosInstance.post(`/auth/login`, { email, password })
    //         .then((response) => {
    //             console.log(response?.data)
    //             setErrMsg("")
    //         })
    //         .catch((error) => {
    //             setErrMsg(error?.response?.data?.msg || "Terjadi kesalahan, coba lagi nanti")
    //         })
    // };

    return (
        <form className="text-white my-0 lg:my-16 w-4/5 sm:w-2/3 md:1/2 lg:w-[35%]">
            <h3 className="font-extrabold text-[2rem]">WELCOME BACK!</h3>
            <p className="text-xl font-normal mt-2">Don't have a account?, <Link to="/signup" className={`${auth.link} font-bold`}>Sign up</Link></p>
            <div className="flex flex-col mt-10 lg:mt-20">
                <label htmlFor="email" className={auth.label}>Email</label>
                <input
                    type="email"
                    className={auth.input}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password" className={`${auth.label} mt-5 lg:mt-7`}>Password</label>
                <div className="relative flex items-center">
                    <input
                        type={showPassword ? "text" : "password"}
                        className={auth.input}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="absolute right-2 pr-3 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? (
                            <AiFillEyeInvisible className="h-7 w-7 text-orange-500" />
                        ) : (
                            <AiFillEye className="h-7 w-7 text-orange-500" />
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-10 lg:mt-[3.375rem]">
                <div className="flex gap-4 items-center">
                    <input type="radio" className="w-7 h-7" />
                    <label htmlFor="radio" className="text-base">Remember me</label>
                </div>
                <Link className={auth.link}>Forget password?</Link>
            </div>
            <button className={auth.btn}>Login</button>
            <SocialLogin />
        </form>
    );
}

const Login = () => {
    return (
        <LoginLayout>
            <LoginForm />
            <LoginImg />
        </LoginLayout>
    );
}

export default Login;