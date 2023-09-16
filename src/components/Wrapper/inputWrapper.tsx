import { useState } from "react";
import { Input } from "../utils/Input";
import { Card } from "../utils/Card";

export const InputWrapper = () => {
   const [displayText, setDisplayText] = useState("");

   const handleInputChange = (text: string) => {
      setDisplayText(text);
   };
   return (
      <div className='App'>
         <h1>Interactive Card Form</h1>
         <Input onChange={handleInputChange} />
         <Card text={displayText} />
      </div>
   );
};
