import FeaturesCard from "../components/FeaturesCard";

function Features() {
  return (
    <section className="w-3/4 mx-auto flex flex-col items-center mt-12">
      <h2 className="text-xl font-semibold mb-4">Features</h2>
      <h1 className="text-4xl font-bold mb-4">
        Manage your Brand in Every Way
      </h1>
      <p className="text-xl text-gray-700 mb-4">
        Online. In Person.{" "}
        <span className="text-blue-700 uppercase font-bold text-2xl">
          everywhere.
        </span>
      </p>
      <div className="my-8 grid grid-cols-3 gap-4">
        <FeaturesCard
          title={"Dashboard"}
          description={"This is the description of the first features card"}
        />
        <FeaturesCard
          title="Stats"
          description={"This is the description of the first features card"}
        />
        <FeaturesCard
          title="Numbers"
          description={"This is the description of the first features card"}
        />
      </div>
    </section>
  );
}

export default Features;
