import { useReducer } from "react";
import "./App.css";
import tasksReducers from "./state-management/reducers/tasksReducer";

import AuthProvider from "./state-management/AuthProvider";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/contexts/tasksContext";

function App() {
  const [tasks, tasksDispatch] = useReducer(tasksReducers, []);

  return (
    <AuthProvider>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthProvider>
  );
}

export default App;
