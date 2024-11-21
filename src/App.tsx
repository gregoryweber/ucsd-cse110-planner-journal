// src/App.tsx
import DisplayUI from "./Components/DisplayUI/DisplayUI";
import { AccountContextProvider } from "./Components/LoginSignUpPage/AccountContext";

const App: React.FC = () => {
  return (
    <div>
        <AccountContextProvider>
            <DisplayUI/>
        </AccountContextProvider>
    </div>
  );
};


export default App;
