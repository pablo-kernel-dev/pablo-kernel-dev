"use client";
import { useState } from "react";
import { InputSelect } from "@/ui/components";
import { CONFIG_UI } from "@/config/appConfig";
import useTasks from "./hooks/useTasks";
import { TaskCard, TaskForm, TaskFormRemove, TaskList, TaskTable } from "./components";
import { TaskProps } from "./types/task.types";
import { VIEW_OPTIONS } from "./config/const";

const ToDoListScreen: React.FC = () => {
  const { createTask, editTask, removeTask, error, isLoading, listTasks } = useTasks();
  const [viewOption, setViewOption] = useState(VIEW_OPTIONS[0]);

  const handleViewOptions = (data: string) => {
    setViewOption(data);
  };

  const handleSubmitForm = (taskData: TaskProps) => {
    if (taskData.id) {
      editTask(taskData);
    } else {
      createTask(taskData);
    }
  }

  const handleSubmitFormRemove = (id: TaskProps["id"]) => {
    removeTask(id)
  }

  const RenderViewComponent = () => {
    switch (viewOption) {
      case "lista":
        return (
          <TaskList
            list={listTasks.map((task) => ({
              ...task,
              options: [
                <TaskForm key={`form-${task.id}`} formData={task} onSubmit={handleSubmitForm} />,
                <TaskFormRemove key={`remove-${task.id}`} formData={task} onSubmit={handleSubmitFormRemove} />
              ]
            }))}
          />
        );
      case "tabla":
        return (
          <TaskTable
            headers={["Tarea", "Estado"]}
            columns={listTasks.map((task) => ({
              ...task,
              options: [
                <TaskForm key={`form-${task.id}`} formData={task} onSubmit={handleSubmitForm} />,
                <TaskFormRemove key={`remove-${task.id}`} formData={task} onSubmit={handleSubmitFormRemove} />
              ]
            }))}
          />
        );
      case "tarjeta":
        return (
          <div className="flex flex-wrap gap-4">
            {listTasks.map((task) =>
              <TaskCard
                key={task.id}
                data={{
                  ...task,
                  options: [
                    <TaskForm key={`form-${task.id}`} formData={task} onSubmit={handleSubmitForm} />,
                    <TaskFormRemove key={`remove-${task.id}`} formData={task} onSubmit={handleSubmitFormRemove} />
                  ]
                }}
              />
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className={`${CONFIG_UI} space-y-2`}>
      <header className="space-y-1">
        <h3 className="text-2xl">Administrador de Tareas</h3>
        <h4>Este proyecto básico de React presenta un CRUD completo (crear, leer, actualizar, eliminar) para administrar una lista de tareas.</h4>
      </header>

      <div className="flex justify-between items-end">
        <TaskForm onSubmit={handleSubmitForm} />

        <InputSelect
          placeholder="Ver:"
          name="viewOption"
          options={VIEW_OPTIONS}
          onChange={handleViewOptions}
          value={viewOption}
          disabled={isLoading}
        />
      </div>

      <section className="border-y-4 border-sky-700 py-6">
        {isLoading ? (
          <p>Cargando Tareas...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <RenderViewComponent />
        )}
      </section>

      <section>
        <p><span className="text-sky-700"><strong className="uppercase">Información</strong>:</span> Desarrollo de un CRUD de tareas, con visualización en tres formatos: lista, tabla y tarjetas.</p>
        <p><span className="text-sky-700"><strong className="uppercase">Detalles</strong>:</span> Las modificaciones y alteraciones realizadas en esta versión no afectan ninguna base de datos.</p>
        <p><span className="text-sky-700"><strong className="uppercase">Versión</strong>:</span> 1.0.0</p>
      </section>
    </section>
  );
};

export { ToDoListScreen };