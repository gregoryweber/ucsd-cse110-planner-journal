import React, { useContext } from 'react';
import { TaskMenuContext } from '../TaskMenu/TaskMenuContext';
import TaskMenu from '../TaskMenu/TaskMenu';
import DisplayDayObjects from './DisplayDayObjects';
import { MonthChangeContext } from '../MonthChangeButton/MonthChangeContext';

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
        <h1 style={{
            textAlign: 'center',
            backgroundColor: '#D9D9D9',
            width: '500px', 
            height: '40px', 
            margin: '0 auto 16px auto', 
            borderRadius: '10px',
            fontWeight: 'normal',
            fontStyle: 'italic',
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'center',
        }}>
            {/* <button 
                onClick={onLogout}
                style={{
                marginLeft: '25%',
                marginTop: '20%',
                paddingTop: '7%',
                width: '100px',
                height: '25px',
                borderRadius: '10px',
                backgroundColor: '#FE7D7D',
                boxShadow: '0px 3px 3px #888888'
            }}>
                Logout
            </button> */}
                PLANNER
            </h1>
            <div style={flexContainer}>
                <button style={{
                    border: '0',
                    height: '32px',
                    marginTop: '16px',
                    backgroundColor: '#2BE0E9',
                    fontWeight: 'bold',
                    width: '32px',
                    borderRadius: '4px',
                }}>{'<'}
                </button>

            <h1 style={{
                textAlign: 'center',
                backgroundColor: '#D9D9D9',
                color: 'black',
                fontWeight: 'normal',
                fontSize: '24px',
                width: '300px', 
                height: '32px', 
                margin: '0 16px',
                display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
            }}>
                MONTH YEAR
            </h1>

                <button style={{
                    border: '0',
                    height: '32px',
                    marginTop: '16px',
                    backgroundColor: '#2BE0E9',
                    fontWeight: 'bold',
                    width: '32px',
                    borderRadius: '4px',
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
