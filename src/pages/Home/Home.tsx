import imghome from "../../assets/images/home.jpg";
import { Header } from "../../components/layout/Header";
import BlackBtn from "../../components/common/BlackBtn.tsx";
import WhiteBtn from "../../components/common/WhiteBtn.tsx";

export default function Home() {
  return (
    <div
      className="h-screen w-full bg-green-100 relative items-center"
    >
      <Header />
      <div className="flex flex-row space-x-200 items-center justify-center translate-y-[400px]">
        <div className="text-white justify-center items-center">
          <h1 className="text-[200px]">Discover the Wild at <br/> Bali-Safari</h1>
          <p className="text-[80px]">Explore a world of incredible animals, interactive exhibits, and <br/> unforgettable adventures.<br/> Perfect for families, schools, and wildlife enthusiasts.</p>
          <div className="flex flex-row gap-10 text-[100px] mt-20">
            <BlackBtn/>
            <WhiteBtn/>
          </div>
        </div>
        <img src={imghome} className="w-300 h-300 rounded-4xl"/>
      </div>
    </div>
  );
}
