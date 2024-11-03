import { useState } from "react";
import ColorPicker from "./ColorPicker" 

const CreateSection = () => {

  const [ sectionName, setSectionName ] = useState("");
  const [ hex, setHex ] = useState("#ffffff");
  const [ displayColorPicker, setDisplayColorPicker ] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <div>
      <div 
        className="create-section" 
        style={{ 
          backgroundColor: "#d8d8d8"
        }}
      >
        <form onSubmit={(event) => onSubmit(event)}>
          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems:'center', 
              gap: '10px', 
              width: '100%' 
            }}
          >
            <label>Create Section</label>
            <input
              required
              type="text"
              value={sectionName}
              onChange={(e) => {
                setSectionName(e.target.value);
              }}
              placeholder="Section Name"
            />
            <button
              type="button"
              onClick={() => setDisplayColorPicker(!displayColorPicker)}
              style={{ 
                backgroundColor: "#21e4e6", 
                color: "black", 
                width: '80%' 
              }}
            >
              Select Color
            </button>
            <button
              type="submit"
              style={{ backgroundColor: "#21e4e6", color: "black", width: '50%' }}
              onClick={() => console.log({sectionName, hex})}
            >
              Submit
            </button>
          </div>
        </form>
        {displayColorPicker && (
          <ColorPicker
            color={hex}
            onChangeColor={(newColor) => setHex(newColor)}
          />
        )}
      </div>
    </div>
  );
};

export default CreateSection;