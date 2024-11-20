import React from "react";

interface AccountContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    username: string | null;
    setUsername: React.Dispatch<React.SetStateAction<string | null>>;
    password: string | null;
    setPassword: React.Dispatch<React.SetStateAction<string | null>>;
}

const initialAccount: AccountContextType = {
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    username: null,
    setUsername: () => {},
    password: null,
    setPassword: () => {},
};

export const AccountContext = React.createContext<AccountContextType>(initialAccount);

export const AccountContextProvider = (props: any) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
    const [username, setUsername] = React.useState<string | null>(null);
    const [password, setPassword] = React.useState<string | null>(null);

    return (
        <AccountContext.Provider value={{isLoggedIn, setIsLoggedIn, username, setUsername, password, setPassword}}>
            {props.children}
        </AccountContext.Provider>
    );
}