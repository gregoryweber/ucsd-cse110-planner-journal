import CreateSection from "./Create-Section" 

const JournalPage = () => {

  return (
    <div>
       <div>
        <button style={{backgroundColor: "#21e4e6", color: "black"}}>Return to Planner</button>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>Journal Entry</h1>
        </div>
      </div>

      <div style={{ display: 'flex'}}>
        <CreateSection />
        <textarea></textarea>
      </div>
      
    
    </div>
  );
};

export default JournalPage;