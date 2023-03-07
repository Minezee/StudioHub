import { ReactComponent as LoginImg } from "@/assets/login_img.svg";
import LoginLayout from "@/components/layout/LoginLayout";
import LoginForm from "@/containers/Login/LoginForm";

const Login = () => {
    return (
        <LoginLayout>
            <LoginForm />
            <LoginImg />
        </LoginLayout>
    );
}

export default Login;