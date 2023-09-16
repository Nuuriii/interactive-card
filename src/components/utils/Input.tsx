import { useState } from "react";

interface InputProps {
   name: (name: string) => void;
   month: (month: string) => void;
   year: (year: number | string) => void;
   number: (number: number | string) => void;
}

export const Input = ({ name, month }: InputProps) => {
   const [inputName, setInputName] = useState("");
   const [inputMonth, setInputMonth] = useState(0);
   const [inputYear, setInputYear] = useState(0);
   const [inputNumber, setInputNumber] = useState(0);

   const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
      const text = event.target.value;
      setInputName(text);
      name(text);
   };
   const handleMonth = (event: React.ChangeEvent<HTMLInputElement>) => {
      const month = event.target.value;
      setInputMonth(parseFloat(month));
      month(month);
   };
   const handleYear = (event: React.ChangeEvent<HTMLInputElement>) => {
      const year = event.target.value;
      setInputYear(parseFloat(year));
      year(year);
   };
   const handleNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
      const number = event.target.value;
      setInputNumber(parseFloat(number));
      number(parseFloat(number));
   };

   return (
      <div>
         <input
            type='text'
            placeholder='Masukkan teks...'
            value={inputName}
            onChange={handleName}
         />
         <input
            type='text'
            placeholder='Masukkan teks...'
            value={inputMonth}
            onChange={handleMonth}
         />
         <input
            type='text'
            placeholder='Masukkan teks...'
            value={inputYear}
            onChange={handleYear}
         />
         <input
            type='text'
            placeholder='Masukkan teks...'
            value={inputNumber}
            onChange={handleNumber}
         />
      </div>
   );
};
