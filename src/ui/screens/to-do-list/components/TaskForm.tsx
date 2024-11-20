import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Checkbox, InputField, ModalWindow } from "@/ui/components";
import { TaskProps } from "../types/task.types";

interface TaskFormProps {
  formData?: TaskProps;
  onSubmit: (task: TaskProps) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
  formData = { id: 0, name: "", status: false },
  onSubmit
}) => {
  const [name, setName] = useState(formData.name);
  const [status, setStatus] = useState(formData.status);

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeStatus = () => {
    setStatus(!status);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const taskData = {
      id: formData.id,
      name,
      status,
    };

    onSubmit(taskData);

    setName("");
    setStatus(false);
  };

  return (
    <ModalWindow
      actionButtonText={formData.id ? "Editar" : "Crear"}
      modalTitle={formData.id ? "Editar tarea" : "Crear Tarea"}
    >
      <form className="grid gap-6 p-4" onSubmit={handleSubmit}>
        <p><span className="uppercase border-b-2 border-sky-700">id</span>: {formData.id}</p>

        <InputField
          label="Nombre Tarea:"
          name="name"
          onChange={handleChangeName}
          placeholder="Introduce la tarea"
          type="text"
          value={name}
        />

        <Checkbox
          label="Estado Tarea"
          name="status"
          text={status ? "FINALIZADA" : "INCOMPLETA"}
          checked={status}
          onChange={handleChangeStatus}
        />

        <div className="flex justify-center gap-2 mt-4">
          <Button text={formData.id ? "Actualizar" : "Guardar"} type="submit" aria-label="Guardar tarea" />
        </div>
      </form>
    </ModalWindow>
  );
};

export { TaskForm };
