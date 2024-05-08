import FounderCard from "./components/FounderCard";

function FounderStats() {
  return (
    <section className="bg-black text-white py-16 my-4">
      <div className="w-3/4 mx-auto flex flex-col items-center justify-center">
        <h1 className="font-bold text-6xl ">Founder Stats</h1>
        <div className="flex justify-between mt-8">
          <FounderCard />
          <FounderCard />
          <FounderCard />
        </div>
      </div>
    </section>
  );
}

export default FounderStats;
