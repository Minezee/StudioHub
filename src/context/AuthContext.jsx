import { createContext, } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    const getUserData = async () => {
        try {
            const token = Cookies.get("token");
            if (token) {
                const response = await fetch("url/api/validate", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.ok) {
                    const userData = await response.json();
                    setUserData(userData);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <AuthContext.Provider value={{ userData }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;