import PageWrapper from "@/components/Layouts/PageWrapper"
import auth from "@/styles/Auth.module.css"

const AuthLayout = ({ children }) => {
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

export default AuthLayout