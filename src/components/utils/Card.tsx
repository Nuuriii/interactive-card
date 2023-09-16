interface CardProps {
   name: string;
   month: number;
   year: number;
   number: number;
}

export const Card = ({ name }: CardProps) => {
   return (
      <div>
         <div className='card'>
            <p>{name}</p>
         </div>
      </div>
   );
};
