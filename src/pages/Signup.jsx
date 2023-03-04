import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "@/helpers/api";
import auth from "@/styles/Auth.module.css"
import LoginLayout from "@/components/Login/LoginLayout";
import SocialLogin from "@/components/Login/SocialLogin";
import { ReactComponent as SignupImg } from "@/assets/signup_img.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const [errMsg, setErrMsg] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   axiosInstance.post(`/auth/login`, { email, password })
  //     .then((response) => {
  //       console.log(response?.data)
  //       setErrMsg("")
  //     })
  //     .catch((error) => {
  //       setErrMsg(error?.response?.data?.msg || "Terjadi kesalahan, coba lagi nanti")
  //     })
  // };

  return (
    <form onSubmit={""} className="text-white my-16">
      <h3 className="font-extrabold text-[2rem]">WELCOME</h3>
      <p className="text-xl font-normal mt-2">Already have an account?, <Link to="/login" className={`${auth.link} font-bold`}>Login</Link></p>
      <div className="flex flex-col mt-[2.625rem]">
        <label htmlFor="username" className={auth.label}>Username</label>
        <input 
          type="text" 
          className={auth.input}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        <label htmlFor="email" className={`${auth.label} mt-7`}>Email</label>
        <input
          type="email"
          className={auth.input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className={`${auth.label} mt-7`}>Password</label>
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
      <button className={auth.btn}>Signup</button>
      <SocialLogin />
    </form>
  )
}

const Signup = () => {
  return (
    <LoginLayout>
      <SignupForm />
      <SignupImg />
    </LoginLayout>
  );
}

export default Signup