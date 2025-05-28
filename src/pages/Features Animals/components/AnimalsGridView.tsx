import { AnimalsGridViewData } from "./AnimalsGridViewData";
import GridView from "../../../components/layout/GridView";




export default function AnimalsGridView(){

    function handleClick(value : string){
    console.log(value);
  }

    return(
        <GridView {...AnimalsGridViewData[0]}><button onClick={() => handleClick}>Click me</button></GridView>
    );
}