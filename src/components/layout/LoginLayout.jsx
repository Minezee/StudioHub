import auth from "@/styles/Auth.module.css"

const LoginLayout = ({ children }) => {
    return (
            <div className={auth.background}>
                    <div className="flex justify-center lg:justify-between items-center login-form min-h-screen my-auto mx-auto lg:mx-[5rem] 2xl:mx-[6.5rem]">
                        {children}
                    </div>
            </div>
    )
}

export default LoginLayout