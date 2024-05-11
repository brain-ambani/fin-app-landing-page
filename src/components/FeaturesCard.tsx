type FeaturesCardProps = {
  title: string;
  description: string;
};

function FeaturesCard({ title, description }: FeaturesCardProps) {
  return (
    <div className="w-[350px] h-[300px] bg-gray-300 shadow-md rounded-xl flex flex-col items-center  text-center m-4 ">
      <h1 className="font-bold text-xl my-4 text-black">{title}</h1>
      <div className="w-2/3 h-0.5 bg-blue-400"></div>

      <p className="p-4">{description}</p>
    </div>
  );
}

export default FeaturesCard;
