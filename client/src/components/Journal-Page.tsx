import { useState } from "react";
import CreateSection from "./Create-Section" 

interface Section {
  name: string;
  color: string;
}

const JournalPage: React.FC = () => {

  let [ sections, setSections ] = useState<Section[]>([]);
  const [ displayCreateSection, setDisplayCreateSection ] = useState(false);

  const handleAddSection = (newSection: Section) => {
    setSections([...sections, newSection]);
    setDisplayCreateSection(false);
  }

  return (
    <div style={{ 
      backgroundColor: "white", 
      color: "black",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      padding: '20px',
      boxSizing: 'border-box'
      }}>

       <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginBottom: '20px'
       }}>

        <button style={{
          backgroundColor: "#21e4e6", 
          color: "black",
          padding: '10px, 15px',
          borderRadius: '5px',
          border: 'none'
        }}>
          Return to Planner
        </button>
          
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: "#d8d8d8",
          borderRadius: '20px',
          padding: '10px 20px',
          width: "40%"
        }}>

          <h1 style={{ 
            fontSize: '20px',
            fontWeight: 'normal',
            margin: 0,
          }}>
            Journal Entry
          </h1>
        </div>
      </div>

      <div style={{
        display: 'flex',
        width: '90vw',
        height: '90vw',
        gap: '1%'
      }}>
        
        {displayCreateSection && (
          <div style={{
            display: 'flex',
            height: '20%',
            backgroundColor: "#d8d8d8", 
            borderRadius: '10px',
            padding: '10px',
            boxSizing: 'border-box',
            position: 'relative'
          }}>

            <div style={{ 
              display: 'flex',       
            }}>
              <CreateSection
                onCreateSection={handleAddSection} 
              />
            </div>
          </div>
        )}
          
        <div style={{ 
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: "#d8d8d8", 
          borderRadius: '10px',
          padding: '20px',
          boxSizing: 'border-box',
          position: 'relative',
        }}>

        <div style={{
          width: '20%',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginRight: '20px'
        }}>
            
          <button style={{
            backgroundColor: '#21e4e6',
            color: 'black',
            padding: '10px',
            borderRadius: '5px',
            border: 'none'
          }}
          onClick={() => setDisplayCreateSection(!displayCreateSection)}
          >
            +
          </button>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10ox',
              borderRadius: '5px'
            }}>

              {sections.map((section, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: section.color,
                    padding: '10px',
                    borderRadius: '5px',
                    textAlign: 'center',
                  }}
                >
                  {section.name}
                  </div>
              ))}

            {/* This div holds the different sections, assign later */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalPage;