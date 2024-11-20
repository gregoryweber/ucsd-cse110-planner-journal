import React from "react";

interface MonthChangeContextType {
    currentYear: number | null;
    setCurrentYear: React.Dispatch<React.SetStateAction<number | null>>;
    currentMonth: number | null;
    setCurrentMonth: React.Dispatch<React.SetStateAction<number | null>>;
}

const initialMonthChange: MonthChangeContextType = {
    currentYear: null,
    setCurrentYear: () => {},
    currentMonth: null,
    setCurrentMonth: () => {},
};

export const MonthChangeContext = React.createContext<MonthChangeContextType>(initialMonthChange);

export const MonthChangeContextProvider = (props: any) => {
    const [currentYear, setCurrentYear] = React.useState<number| null>(null);
    const [currentMonth, setCurrentMonth] = React.useState<number | null>(null);

    return (
        <MonthChangeContext.Provider value={{currentYear, setCurrentYear, currentMonth, setCurrentMonth}}>
            {props.children}
        </MonthChangeContext.Provider>
    );
}