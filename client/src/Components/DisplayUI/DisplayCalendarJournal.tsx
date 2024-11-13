import { useContext, useEffect } from "react";
import { JournalPageContext } from "../JournalPage/JournalPageContext";
import CalendarPage from "../CalendarPage/Calendar-Page";
import JournalPage from "../JournalPage/Journal-Page";
import { TaskMenuContextProvider } from "../TaskMenu/TaskMenuContext";

const DisplayCalendarJournal = () => {
    const journalPageContext = useContext(JournalPageContext);

    return (
        <>
            {journalPageContext.isOpen ? 
                <JournalPage /> 
                : <TaskMenuContextProvider>
                    <CalendarPage/>
                </TaskMenuContextProvider>
            }
        </>
    );
}

export default DisplayCalendarJournal;