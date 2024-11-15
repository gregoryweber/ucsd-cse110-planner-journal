import { useContext } from "react";
import { JournalPageContext } from "../JournalPage/JournalPageContext";
import CalendarPage from "../CalendarPage/Calendar-Page";
import JournalPage from "../JournalPage/Journal-Page";
import { TaskMenuContextProvider } from "../TaskMenu/TaskMenuContext";
import { MonthChangeContextProvider } from "../MonthChangeButton/MonthChangeContext";

const DisplayCalendarJournal = () => {
    const journalPageContext = useContext(JournalPageContext);

    return (
        <>
            {journalPageContext.isOpen ? 
                <JournalPage /> 
                : <MonthChangeContextProvider>
                        <TaskMenuContextProvider>
                            <CalendarPage />
                        </TaskMenuContextProvider>
                </MonthChangeContextProvider>
            }
        </>
    );
}

export default DisplayCalendarJournal;