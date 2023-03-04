import PageWrapper from "@/components/layouts/PageWrapper"
import auth from "@/styles/Auth.module.css"

const LoginLayout = ({ children }) => {
    return (
            <div className={auth.background}>
                <PageWrapper>
                    <div className="flex justify-center lg:justify-between items-center login-form min-h-screen my-auto">
                        {children}
                    </div>
                </PageWrapper>
            </div>
    )
}

export default LoginLayout