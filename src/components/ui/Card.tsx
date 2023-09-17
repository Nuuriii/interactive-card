interface CardProps {
   name: string;
   month: number;
   year: number;
   number: number;
   cvc: number;
}

export const Card = ({ name, month, year, number, cvc }: CardProps) => {
   return (
      <div>
         <div className='card'>
            <p>{name !== "" ? name : "JANE APPLESEED"}</p>
            <p>{month > 0 ? month : "00"}</p>
            <p>{year > 0 ? year : "00"}</p>
            <p>{number > 0 ? number : "0000 0000 0000 0000"}</p>
            <p>{cvc > 0 ? cvc : "000"}</p>
         </div>
      </div>
   );
};
