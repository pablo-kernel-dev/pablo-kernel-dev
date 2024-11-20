import { ToDoListScreen } from "../to-do-list";

const AppProjectsScreen = () => {
  return (
    <>
      <header>
        <h2 className="text-stone-100 text-5xl text-center uppercase">proyectos</h2>
      </header>

      <ToDoListScreen />
    </>
  );
}

export { AppProjectsScreen };