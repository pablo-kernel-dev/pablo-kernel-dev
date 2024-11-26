import { FC, useState } from "react";
import { TaskProps } from "../types/task.types";
import { DEFAULT_STYLES } from "../config/const";

interface ItemProps {
  data: (TaskProps & { options: JSX.Element[] });
  index: number;
}

const ItemList: FC<ItemProps> = ({ data, index }) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <li className={`${DEFAULT_STYLES} p-2 rounded-xl cursor-pointer space-y-2`}>
      <p onClick={toggleShowMore}>
        {index}. {data.name} {data.status && <span className="text-green-500 font-bold "> FINALIZADA</span>}
      </p>

      {showMore &&
        <div className="flex gap-4">
          {data.options.map((value, index) =>
            <span key={index}>{value}</span>
          )}
        </div>
      }
    </li>
  );
};

interface TaskListProps {
  list: (TaskProps & { options: JSX.Element[] })[];
}

const TaskList: FC<TaskListProps> = ({ list }) => {
  return (
    <ul className="grid gap-4">
      {list.map((item, index) =>
        <ItemList key={item.id} data={item} index={index + 1} />
      )}
    </ul>
  );
};

export { TaskList };
