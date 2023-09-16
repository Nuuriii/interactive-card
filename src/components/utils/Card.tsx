interface CardProps {
   name: string;
   month: number;
   year: number;
   number: number;
}

export const Card = ({ name, month, year, number }: CardProps) => {
   return (
      <div>
         <div className='card'>
            <p>{name !== "" ? name : "JANE APPLESEED"}</p>
            <p>{month > 0 ? month : "00"}</p>
            <p>{year > 0 ? year : "00"}</p>
            <p>{number > 0 ? number : "1111 2233 4499"}</p>
         </div>
      </div>
   );
};
