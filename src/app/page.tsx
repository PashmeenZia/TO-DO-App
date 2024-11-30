import type { NextPage } from "next";

import TodoList from "./components/Todolist";

const Home: NextPage = () => {
  return(
    <div>
      <TodoList/>
      </div>
  )
} 

export default Home;