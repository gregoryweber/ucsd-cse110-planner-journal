import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface CalendarPageProps {
    onLogout: () => void; // Accept the onLogout prop
}

const CalendarPage: React.FC<CalendarPageProps> = ({ onLogout }) => {
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
        width: 'auto',
        border:'1px solid black',
        backgroundColor: '#D9D9D9'
    };
    const flexContainer = {
        display: 'flex',
        justifyContent: 'center'
    };
    
    return (
        <>
        <div style={{
            display: 'grid',
            gridTemplateRows: 'auto',
            gridTemplateColumns: '5% 95%'
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
                    fontWeight: 'bold',
                    width: '3%',
                    borderRadius: '0'
                }}>
                    {'>'}
                </button>
            </div>
        </div>

        <div style={{
            display: 'grid',
            gridTemplateRows: '1fr',
            gridTemplateColumns: '15% 85%'
        }}>
            <div style={{
                backgroundColor: '#D9D9D9',
                borderRadius: '10px',
                marginLeft: '20px',
                marginBottom: '10rem'
            }}>
                <h3 style={{
                    textAlign: 'center'
                }}>
                    Create Task/Event
                </h3>

                <input style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '77%',
                    marginBottom: '10px'
                }}
                    name="taskName"
                    placeholder={'Task Name'} />

                <input style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '77%',
                    marginBottom: '10px'
                }}
                    name="taskStartTime"
                    placeholder={'Task Start Time'} />

                <input style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '77%',
                    marginBottom: '10px'
                }}
                    name="taskEndTime"
                    placeholder={'Task End Time'} />

                <select style={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '81%',
                    marginBottom: '10px'
                }}>
                    <option value="test">Select Time</option>
                </select>

                <input type='checkbox'style={{
                    display: 'flex',
                    marginLeft: '37%',
                    marginBottom: '1px'
                }}/>

                <button style={{
                    display: 'block',
                    marginTop: 'auto',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    marginBottom: '10px',
                    width: '100px',
                    backgroundColor: '#2BE0E9',
                    boxShadow: '0px 3px 3px #888888'
                }}>
                    Submit
                </button>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateRows: '2rem repeat(5, 6.9rem)',
                gridTemplateColumns: 'repeat(7, 1fr)',
                marginLeft: '1rem',
                marginRight: '3rem'
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
                <div style={tempBoxes}>1</div>
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
