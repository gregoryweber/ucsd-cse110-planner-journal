import React from 'react';
import ReactDOM from 'react-dom/client';
//import '../monthChangeButton.css';

import './monthChangeButton.css'

function MonthChangeButton()
{
   
  return(
   
   <div className="Table" id ='MonthChange'>
   
   <div className="Heading">
       <div className="Cell">
       <div className="arrow-container" >
        
        <button className="arrow-button left-arrow" >
        <span className="arrow" />
        </button>
        </div>

       </div>
       <div className="Cell">

       <div className="month">
         <p>November 2024</p>
         <div className="dropdown-calendar">
         <label htmlFor="month">Select Month: </label>
         {/* Dropdown selection for month */}
      <select id="month">
         <option value={0}>Jan</option>
         <option value={1}>Feb</option>
         <option value={2}>Mar</option>
         <option value={3}>Apr</option>
         <option value={4}>May</option>
         <option value={5}>Jun</option>
         <option value={6}>Jul</option>
         <option value={7}>Aug</option>
         <option value={8}>Sep</option>
         <option value={9}>Oct</option>
         <option value={10}>Nov</option>
         <option value={11}>Dec</option>
         </select>
      {/* Dropdown selection for years */}
         <label htmlFor="year">  Select Year: </label>
         <select id="year">
         <option value={2024}>2024</option>
         <option value={2023}>2023</option>
         <option value={2022}>2022</option>
         <option value={2021}>2021</option>
         <option value={2020}>2020</option>
         <option value={2019}>2019</option>
         <option value={2018}>2018</option>
         <option value={2017}>2017</option>
         <option value={2016}>2016</option>
         <option value={2015}>2015</option>
         <option value={2014}>2014</option>
      </select>
      </div>
      </div>

       </div>

       <div className="Cell">
       <div className="arrow-container" > 
      <button className="arrow-button right-arrow">
         <span className="arrow"/>
      </button>
      </div>

       </div>
   </div>
   
</div>   
   
   


  );

 
}


export default MonthChangeButton;




