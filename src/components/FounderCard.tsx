type FounderCardProps = {
  number: number;
  text: string;
};

function FounderCard({ number, text }: FounderCardProps) {
  return (
    <div className="p-4 m-4 text-center">
      <h1 className="text-6xl text-blue-700 font-bold mx-2">{number}+</h1>
      <p className="text-gray-400 text-2xl">{text}</p>
    </div>
  );
}

export default FounderCard;
