import React, { useState } from 'react';
import CreateSection from "./Create-Section";
import './Journal-Page.css';

interface Section {
  name: string;
  color: string;
}

const JournalPage: React.FC = () => {

  let [ sections, setSections ] = useState<Section[]>([]);
  const [ displayCreateSection, setDisplayCreateSection ] = useState(false);
  const [ textSize, setTextSize ] = useState(14);
  const [ sectionSelection, setSectionSelection ] = useState<String>()

  const handleAddSection = (newSection: Section) => {
    setSections([...sections, newSection]);
    setDisplayCreateSection(false);
  }

  const handleSectionSelection = (section: Section) => {
    setSectionSelection(section.name);
  }

  return (
    <div className="foundation">

      <div className='page-structure'>

        <button className='return-button'>
          Return to Planner
        </button>

        <div className='title-structure'>
          
          <div className='title-container'>
            <h1 className='title'>
              Journal Entry
            </h1>
          </div>

          <div className='text-size-container'>
            <h3 className='text-size'>
              Notes Text Size: 
            </h3>

            <form>
            <input
              required
              type="text"
              className="form-control"
              id="textSize"
              data-testid="textSize"
              value={textSize}
              onChange={(e) => {
                setTextSize(Number(e.target.value))
              }}
            ></input>
            </form>
          </div>
        </div>
      </div>

      <div className='body-structure'>
        
        {displayCreateSection && (
          <div className='create-section-container'>
            <CreateSection
                onCreateSection={handleAddSection} 
              />
          </div>
        )}
          
        <div className='journal-body'>

          <div className='journal-body-left'>
              
            <button
            className='create-section-button'
            onClick={() => setDisplayCreateSection(!displayCreateSection)}
            >
              +
            </button>

              <div className='section-column'>

                {sections.map((section, index) => (
                  <div
                    key={index}
                    className='sections'
                    style={{ backgroundColor: section.color }}
                    onClick={() => handleSectionSelection(section)}
                  >
                    {section.name}
                    </div>
                ))}
              </div>
            </div>
            <div> 
              <h2>{sectionSelection}</h2>
            </div>
            <div style={{
              fontSize: textSize
            }}>
              <form>
                <input>
                </input>
              </form>
            </div>
          </div>
      </div>
    </div>
  );
};

export default JournalPage;