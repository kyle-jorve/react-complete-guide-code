import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export function AuthContextProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
		if (localStorage.getItem('logged-in') === 'true') {
			setIsLoggedIn(true);
		}
	}, []);

    function logoutHandler() {
        localStorage.removeItem('logged-in');
        setIsLoggedIn(false);
    }

    function loginHandler() {
        localStorage.setItem('logged-in', 'true');
        setIsLoggedIn(true);
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;