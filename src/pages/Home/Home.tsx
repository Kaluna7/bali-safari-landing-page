import imghome from "../../assets/images/home.jpg";
import { Header } from "../../components/layout/Header";

export default function Home() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${imghome})` }}
    >
      <Header />
      <h1 className="text-[500px] text-white">Testing</h1>
      <div className=""></div>
    </div>
  );
}
