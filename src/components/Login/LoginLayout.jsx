import Container from "../layouts/Container"
import auth from "@/styles/Auth.module.css"

const LoginLayout = ({ children }) => {
    return (
        <div className="bg-background">
            <div className={auth.background}>
                <Container>
                    <div className="flex justify-between items-center login-form min-h-screen my-auto">
                        {children}
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default LoginLayout