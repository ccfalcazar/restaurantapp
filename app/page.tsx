import CardItem from "./components/CardItem";
import Category from "./components/Category";
import Header from "./components/Header";

export default function Home() {
  return (
  <div className="container bg-base-100">
    <div className="flex-1 md:mx-auto md:w-4/5 shadow-lg min-h-screen rounded-t-md">
      <Header/>
      <div className="min-h-screen mb-5">
        <Category/>
        <div className="bg-base-200 w-11/12 rounded-lg mx-auto grid place-items-center grid-rows-3 grid-cols-5 gap-5 p-5">
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        
        </div>
      </div> 
      <div className="bg-primary text-base-100 p-2 md:rounded-b-md">
            <p>Created by: Christian Carlo Alcazar</p>
            <p>Sample Works: <a href="https://ccfalcazar.github.io/Portfolio/">My Portfolio</a></p>
      </div>
    </div>
  </div>
  );
}
