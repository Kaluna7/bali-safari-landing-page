import GridViewFeatures from "../../components/layout/GridViewFeatures";
import FeaturesImg from "../../assets/images/5.jpg";



export default function FeaturesAnimals() {

  function handleClick(value : string){
    console.log(value);
  }

  return (
    <div className="h-screen">
     <div className="flex flex-row">
      <h1 className="text-[60px]">Featured Animals</h1>
      <div className="">
        <GridViewFeatures 
        img={FeaturesImg}
        label="test"
        description="Halo Halo"
        btnName="Test123"
        onChange={() => handleClick}
        />
      </div>
     </div>
        
    </div>
  );
}
