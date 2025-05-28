import AnimalsGridView from "./AnimalsGridView";

export default function FeaturesAnimals() {

  return (
    <div className="h-screen">
     <div className="flex flex-col">
      <h1 className="text-[60px]">Featured Animals</h1>
      <AnimalsGridView />
      </div>
     </div>
  );
}
