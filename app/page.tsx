import CardItem from "./components/CardItem";
import Category from "./components/Category";
import ContentTable from "./components/ContentTable";
import Header from "./components/Header";
import Controls from "./components/Controls";

export default function Home() {
  return (
  <div className="bg-base-100">
    <div className="mx-auto md:w-4/5 shadow-lg min-h-screen rounded-t-md">
        <Header/>
      <div className="min-h-screen mb-5">
        <Controls />
        <ContentTable />
      </div> 
      <div className="bg-primary text-base-100 p-2 md:rounded-b-md">
            <p>Created by: Christian Carlo Alcazar</p>
            <p>Sample Works: <a href="https://ccfalcazar.github.io/Portfolio/">My Portfolio</a></p>
      </div>
    </div>
  </div>
  );
}
