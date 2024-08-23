import { createContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (!user) {
            const { data } = axios.get('/profile').then(({ data }) => {
                setUser(data);
                setReady(true);
            });
        }
    }, []);

    return (
        <div>
            <UserContext.Provider value={{ user, setUser, ready }}>
                { children }
            </UserContext.Provider>
        </div>
    );
}