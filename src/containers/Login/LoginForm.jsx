import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "@/helpers/api";
import auth from "@/styles/Auth.module.css"
import SocialLogin from "@/containers/Login/SocialLogin";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useMutation } from "react-query";
import Cookies from "js-cookie";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberUser, setRememberUser] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const navigate = useNavigate();
    const { updateUserData } = useContext(AppContext);

    const { mutate: loginMutation, isLoading, error } = useMutation(
        async (body) => {
            const response = await axiosInstance.post('/user/login', body);
            return response.data;
        },
        {
            onSuccess: (data) => {
                if(rememberUser){
                    Cookies.set('auth_token', data.token);
                }else{
                    sessionStorage.setItem('auth_token', data.token)
                }

                updateUserData({
                    id: 2
                })

                if(sessionStorage.isPayment){
                    navigate(-1);
                }else{
                    navigate('/');
                }
            },
            onError: (error) => {
                setErrMsg(error.response.data.message);
            },
        }
    );


    function handleSubmit(e) {
        e.preventDefault();
        loginMutation({ email, password });
    };

    return (
        <form onSubmit={handleSubmit} className="text-white my-0 lg:my-16 w-4/5 sm:w-2/3 md:1/2 lg:w-[35%]">
            <h3 className="font-extrabold text-[2rem]">WELCOME BACK!</h3>
            <p className="text-xl font-normal mt-2">Don't have a account?, <Link to="/signup" className={`${auth.link} font-bold`}>Sign up</Link> or <Link to="/" className={`${auth.link} font-bold`}>Explore</Link></p>
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
                <div className="flex gap-3 items-center">
                    <span onClick={() => setRememberUser(!rememberUser)} className="border border-yellow-400 rounded-full h-6 w-6 flex justify-center items-center cursor-pointer">
                        {rememberUser && <span className='border bg-yellow-400 rounded-full h-1/2 aspect-square' />}
                    </span>
                    <span>
                        Ingat saya
                    </span>
                </div>
                <Link className={auth.link}>Forget password?</Link>
            </div>
            <button className={auth.btn}>
                {isLoading ?
                    (<svg className="animate-spin h-7 w-7  text-dark text-center mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4}></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>)
                    : "Login"}
            </button>
            {errMsg ? <p className="text-red-300 mt-3 text-center">{errMsg}</p> : null}
            <SocialLogin />
        </form>
    );
}

export default LoginForm;