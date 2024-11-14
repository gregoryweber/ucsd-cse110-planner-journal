import React from "react";

//Create a context Type for the JournalPage component
interface JournalPageContextType {
    currentDate: Date | null;
    setCurrentDate: React.Dispatch<React.SetStateAction<Date | null>>;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

//Create a default object for the JournalPageContext
const initialJournalPage: JournalPageContextType = {
    currentDate: null,
    setCurrentDate: () => {},
    isOpen: false,
    setIsOpen: () => {}
};

//Create a context for the JournalPage component
export const JournalPageContext = React.createContext<JournalPageContextType>(initialJournalPage);

//Create a provider for the JournalPageContext
export const JournalPageContextProvider = (props: any) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [currentDate, setCurrentDate] = React.useState<Date | null>(null);

    return (
        <JournalPageContext.Provider value={{currentDate, setCurrentDate, isOpen, setIsOpen}}>
            {props.children}
        </JournalPageContext.Provider>
    );
}