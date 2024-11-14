import { JournalPageContextProvider } from "../JournalPage/JournalPageContext";
import DisplayCalendarJournal from "./DisplayCalendarJournal";

const DisplayUI = () => {

    return (
        <>
            <JournalPageContextProvider>
                <DisplayCalendarJournal/>
            </JournalPageContextProvider>
        </>
    );
}

export default DisplayUI;