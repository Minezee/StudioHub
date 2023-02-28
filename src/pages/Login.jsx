import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "@/helpers/api";
import styles from "@/styles/styles.module.css"
import LoginLayout from "@/components/Login/LoginLayout";
import SocialLogin from "@/components/Login/SocialLogin";
import { ReactComponent as LoginImg } from "@/assets/login_img.svg";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [isFetching, setIsFetching] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        axiosInstance.post(`/auth/login`, { email, password })
            .then((response) => {
                console.log(response?.data)
                setErrMsg("")
            })
            .catch((error) => {
                setErrMsg(error?.response?.data?.msg || "Terjadi kesalahan, coba lagi nanti")
            })
    };

    return (
        <form onSubmit={handleSubmit} className="text-gray-font my-16">
            <h3 className="font-extrabold text-[2rem]">WELCOME BACK!</h3>
            <p className="text-xl font-normal mt-2">Don't have a account?, <Link to="/signup" className={`${styles.link} font-bold`}>Sign up</Link></p>
            <div className="flex flex-col mt-20">
                <label htmlFor="email" className={styles.label}>Email</label>
                <input type="email" className={styles.input} />
                <label htmlFor="password" className={`${styles.label} mt-7`}>Password</label>
                <input type="password" className={styles.input} />
            </div>
            <div className="flex justify-between mt-[3.375rem]">
                <div className="flex gap-4 items-center">
                    <input type="radio" className="w-7 h-7" />
                    <label htmlFor="radio" className="text-base">Remember me</label>
                </div>
                <Link className={styles.link}>Forget password?</Link>
            </div>
            <button className={styles.btn}>Login</button>
            <SocialLogin />
        </form>
    );
}

const Login = () => {
    return (
        <LoginLayout>
            <LoginForm />
            <LoginImg className="my-svg"/>
        </LoginLayout>
    );
}

export default Login;