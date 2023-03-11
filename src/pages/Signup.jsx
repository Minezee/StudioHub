import LoginLayout from "@/components/layout/LoginLayout";
import { ReactComponent as SignupImg } from "@/assets/svg/signup_img.svg";
import SignupForm from "@/containers/Login/SignupForm";

const Signup = () => {
  return (
    <LoginLayout>
      <SignupForm />
      <SignupImg />
    </LoginLayout>
  );
}

export default Signup