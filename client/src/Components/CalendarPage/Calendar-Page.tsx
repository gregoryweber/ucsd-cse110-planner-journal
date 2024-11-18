import React, { useContext } from 'react';
import { TaskMenuContext } from '../TaskMenu/TaskMenuContext';
import TaskMenu from '../TaskMenu/TaskMenu';
import DisplayDayObjects from './DisplayDayObjects';
import { MonthChangeContext } from '../MonthChangeButton/MonthChangeContext';
import { AccountContext } from '../LoginSignUpPage/AccountContext';

const CalendarPage: React.FC = () => {
    const taskMenuContext = useContext(TaskMenuContext);
    const monthChangeContext = useContext(MonthChangeContext);

    const dayStyle = {
        display: 'flex',
        border:'1px solid black',
        padding: '5px',
        justifyContent: 'center',
        margin: '0',
        gap: '0',
        width: 'auto',
        backgroundColor: '#78A1ED',
        fontWeight: 'bold'
    };
    const flexContainer = {
        display: 'flex',
        justifyContent: 'center'
    };
    
    return (
        <>
        <div style={{
            display: 'grid',
            gridTemplateColumns: '120px 1fr 120px',
            alignItems: 'center',
            padding: '2px',
            width: '100%',
        }}>
        <div style={{ width: '120px' }}> 
            <LogoutButton/>
        </div>
        <h1 style={{
            textAlign: 'center',
            backgroundColor: '#D9D9D9',
            width: '500px',  
            height: '40px', 
            margin: '0 auto', 
            borderRadius: '10px',
            fontWeight: 'normal',
            fontStyle: 'italic',
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'center',
            position: 'relative', 
        }}>
            <span style={{
                position: 'absolute',  
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)', 
                width: 'auto',  
                textAlign: 'center'
            }}>
                PLANNER
            </span>
            </h1>
            <div /> {/* Empty div to balance the space */}
        </div>
        <div style={flexContainer}>
    <button style={{
        border: '0',
        height: '32px',
        marginTop: '4px', // Reduced from 16px
        backgroundColor: '#2BE0E9',
        fontWeight: 'bold',
        width: '32px',
        borderRadius: '4px 0 0 4px', // Only round left corners
        marginRight: '0', // Remove right margin
    }}>{'<'}</button>

    <h1 style={{
        textAlign: 'center',
        backgroundColor: '#D9D9D9',
        color: 'black',
        fontWeight: 'normal',
        fontSize: '24px',
        width: '300px', 
        height: '32px', 
        margin: '4px 0', // Changed from '0 16px'
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
    }}>
        MONTH YEAR
    </h1>

    <button style={{
        border: '0',
        height: '32px',
        marginTop: '4px', // Reduced from 16px
        backgroundColor: '#2BE0E9',
        fontWeight: 'bold',
        width: '32px',
        borderRadius: '0 4px 4px 0', // Only round right corners
        marginLeft: '0', // Remove left margin
    }}>{'>'}</button>
</div>

            <div style={{
                display: 'grid',
                gridTemplateRows: 'auto repeat(5, 1fr)', // Changed to 1fr for equal sizing
                gridTemplateColumns: 'repeat(7, 1fr)',
                marginLeft: '1rem',
                marginRight: '0rem',
                height: "calc(100vh - 200px)", // Adjust based on header height
                gap: '4px', // Add consistent gap between cells
                minHeight: '600px' // Ensure minimum height
            }}>
                <div style={{
                
                width: '230px',
            }}>
                    {taskMenuContext.isOpen ? <TaskMenu/> : null}
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateRows: 'auto repeat(5, 6.9rem)',
                    gridTemplateColumns: 'repeat(7, 1fr)',
                    marginLeft: '1rem',
                    marginRight: '3rem',
                    height: "600px",
                }}>
                    <p style={dayStyle}>Sunday</p>
                    <p style={dayStyle}>Monday</p>
                    <p style={dayStyle}>Tuesday</p>
                    <p style={dayStyle}>Wednesday</p>
                    <p style={dayStyle}>Thursday</p>
                    <p style={dayStyle}>Friday</p>
                    <p style={dayStyle}>Saturday</p>
                    {/* where all the day objects go */}
                    {/* everything below to be replaced */}
                    <DisplayDayObjects/>
                </div>
        </div>
        </>
    );
};

export default CalendarPage;

const LogoutButton = () => {
    const accountContext = useContext(AccountContext);
    const taskMenuContext = useContext(TaskMenuContext);

    const onLogout = () => {
        taskMenuContext.setIsOpen(false);
        taskMenuContext.setCurrentDate(null);
        taskMenuContext.setTasks({});

        accountContext.setIsLoggedIn(false);
        accountContext.setUsername(null);
        accountContext.setPassword(null);
    };

    return (
            <button 
                onClick={onLogout}
                style={{
                    width: '120px',
                    height: '36px',
                    backgroundColor: '#78A1ED',
                    color: 'white',
                    borderRadius: '6px',
                    border: '1',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#6691dd'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#78A1ED'}
            >
                Logout
            </button>
    );
};
