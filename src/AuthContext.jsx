import { useContext, createContext, useState, useEffect } from "react";
import api from './api';
const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [key, setKey] = useState();

    const login = (key) => {
        setKey(key);
        localStorage.setItem('key', key);
    };

    const getUser = async () => {
        await api.get('/users/user')
        .then(res => {
            const data = res.data;
            localStorage.setItem('user', JSON.stringify(data));
            setUser(data);
        })
        .catch(err => { alert(err) });
    }

    useEffect(() => {
        const auth_key = localStorage.getItem('key');
        if (auth_key) {
            setKey(auth_key);    
            const user = localStorage.getItem('user');
            if (user) {
                setUser(JSON.parse(user));
            }
            else {
                getUser();
            }
        }
        
    }, []);

    return (<AuthContext.Provider value={{ user, login, key }}>
        {children}
        </AuthContext.Provider>);
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};