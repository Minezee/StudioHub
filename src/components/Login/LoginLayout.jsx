import Container from "../layouts/Container"
import styles from "@/styles/styles.module.css"

const LoginLayout = ({ children }) => {
    return (
        <div className={styles.background}>
            <Container>
                <div className="flex justify-between items-center login-form min-h-screen my-auto">
                    {children}
                </div>
            </Container>
        </div>
    )
}

export default LoginLayout