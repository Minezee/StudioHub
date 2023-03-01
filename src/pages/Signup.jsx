import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axiosInstance from "@/helpers/api";
import styles from "@/styles/Auth.module.css"
import LoginLayout from "@/components/Login/LoginLayout";
import SocialLogin from "@/components/Login/SocialLogin";
import { ReactComponent as SignupImg} from "@/assets/signup_img.svg";

const SignupForm = () => {
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
      <h3 className="font-extrabold text-[2rem]">WELCOME</h3>
      <p className="text-xl font-normal mt-2">Already have an account?, <Link to="/login" className={`${styles.link} font-bold`}>Login</Link></p>
      <div className="flex flex-col mt-[2.625rem]">
        <label htmlFor="username" className={styles.label}>Username</label>
        <input type="text" className={styles.input} />
        <label htmlFor="email" className={`${styles.label} mt-7`}>Email</label>
        <input type="email" className={styles.input} />
        <label htmlFor="password" className={`${styles.label} mt-7`}>Password</label>
        <input type="password" className={styles.input} />
      </div>
      <button className={styles.btn}>Signup</button>
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