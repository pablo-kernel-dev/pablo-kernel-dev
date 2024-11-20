import { FormEvent } from "react";
import { Button, ModalWindow } from "@/ui/components";
import { TaskProps } from "../types/task.types";

interface TaskFormRemoveProps {
  formData: TaskProps;
  onSubmit: (id: TaskProps["id"]) => void;
}

const TaskFormRemove: React.FC<TaskFormRemoveProps> = ({
  formData = { id: 0, name: "", status: false },
  onSubmit
}) => {

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    onSubmit(formData.id);
  };

  return (
    <ModalWindow
      actionButtonText={"Eliminar"}
      modalTitle={"Eliminar tarea"}
    >
      <section className="grid gap-6 p-4">
        <section>
          <h3>La siguiente información será eliminada:</h3>

          <div className="outline outline-sky-700 p-2">
            <p><strong className="uppercase border-b-2 border-sky-700">ID</strong>: {formData.id}</p>
            <p><strong className="uppercase border-b-2 border-sky-700">Nombre</strong>: {formData.name}</p>
            <p><strong className="uppercase border-b-2 border-sky-700">Estado</strong>: {formData.status ? "FINALIZADA" : "INCOMPLETA"}</p>
          </div>
        </section>

        <form className="flex justify-center gap-2 mt-4" onSubmit={handleSubmit}>
          <Button text={"eliminar tarea"} type="submit" aria-label="Eliminar tarea" />
        </form>
      </section>
    </ModalWindow>
  );
};

export { TaskFormRemove };
