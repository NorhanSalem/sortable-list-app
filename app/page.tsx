// pages/index.tsx
import type { NextPage } from "next";
import SortableList from "../components/SortableList";

const Home: NextPage = () => {
  return (
    <div className="max-w-lg mx-auto ">
      <h1 className="text-center text-5xl font-bold bg-gradient-to-b from-indigo-600 to-purple-400 text-transparent bg-clip-text my-7">
        Sortable List
      </h1>
      <SortableList />
    </div>
  );
};

export default Home;
