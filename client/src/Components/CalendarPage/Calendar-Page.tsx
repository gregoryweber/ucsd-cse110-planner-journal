import React, { useContext } from 'react';
import DayObject from '../DayObject/DayObject';
import { TaskMenuContext } from '../TaskMenu/TaskMenuContext';
import TaskMenu from '../TaskMenu/TaskMenu';

const CalendarPage: React.FC = () => {
    const taskMenuContext = useContext(TaskMenuContext);

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
    const tempBoxes = {
        display: 'flex',
        margin: '0',
        gap: '0',
        width: '100%',
        height: '100%',
        border:'1px solid black',
        backgroundColor: '#D9D9D9'
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
            marginLeft: '30%',
            marginRight: '30%',
            borderRadius: '10px',
            fontWeight: 'normal',
            fontStyle: 'italic',
            marginBottom: '0'
        }}>
            <button 
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
            </button>
            <h1 style={{
                textAlign: 'center',
                backgroundColor: '#D9D9D9',
                marginLeft: '30%',
                marginRight: '30%',
                borderRadius: '10px',
                fontWeight: 'normal',
                fontStyle: 'italic',
                marginBottom: '0'
            }}>
                PLANNER
            </h1>
            <div></div>
            <div style={flexContainer}>
                <button style={{
                    border: '0',
                    height: '32px',
                    marginTop: '16px',
                    backgroundColor: '#2BE0E9',
                    fontWeight: 'bold',
                    width: '3%',
                    borderRadius: '0'
                }}>{'<'}</button>

                <h1 style={{
                    textAlign: 'center',
                    backgroundColor: '#D9D9D9',
                    color: 'black',
                    fontWeight: 'normal',
                    fontSize: '24px',
                    paddingLeft: '12%',
                    paddingRight: '12%',
                    width: '16%'
                }}>
                    MONTH YEAR
                </h1>

                <button style={{
                    border: '0',
                    height: '32px',
                    marginTop: '16px',
                    backgroundColor: '#2BE0E9',
                    fontWeight: 'bold'
                }}>{'>'}</button>
            </div><div style={{
                display: 'grid',
                gridTemplateRows: '1fr',
                gridTemplateColumns: '15% 85%'
            }}>
                <div>
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
                    <div>
                       <DayObject currentDate={new Date()}/>
                    </div>
                    <div style={tempBoxes}>2</div>
                    <div style={tempBoxes}>3</div>
                    <div style={tempBoxes}>4</div>
                    <div style={tempBoxes}>5</div>
                    <div style={tempBoxes}>6</div>
                    <div style={tempBoxes}>7</div>
                    <div style={tempBoxes}>8</div>
                    <div style={tempBoxes}>9</div>
                    <div style={tempBoxes}>10</div>
                    <div style={tempBoxes}>11</div>
                    <div style={tempBoxes}>12</div>
                    <div style={tempBoxes}>13</div>
                    <div style={tempBoxes}>14</div>
                    <div style={tempBoxes}>15</div>
                    <div style={tempBoxes}>16</div>
                    <div style={tempBoxes}>17</div>
                    <div style={tempBoxes}>18</div>
                    <div style={tempBoxes}>19</div>
                    <div style={tempBoxes}>20</div>
                    <div style={tempBoxes}>21</div>
                    <div style={tempBoxes}>22</div>
                    <div style={tempBoxes}>23</div>
                    <div style={tempBoxes}>24</div>
                    <div style={tempBoxes}>25</div>
                    <div style={tempBoxes}>26</div>
                    <div style={tempBoxes}>27</div>
                    <div style={tempBoxes}>28</div>
                    <div style={tempBoxes}>29</div>
                    <div style={tempBoxes}>30</div>
                    <div style={tempBoxes}>31</div>
                    <div style={tempBoxes}></div>
                    <div style={tempBoxes}></div>
                    <div style={tempBoxes}></div>
                    <div style={tempBoxes}></div>
                </div>
        </div>
        </>
    );
};

export default CalendarPage;
