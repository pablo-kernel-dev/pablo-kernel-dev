import { FC, useState } from "react";
import { TaskProps } from "../types/task.types";
import { DEFAULT_STYLES } from "../config/const";

interface ExpandRowProps {
  data: (TaskProps & { options: JSX.Element[] });
  theadLenght: number;
}

const ExpandRow: FC<ExpandRowProps> = ({ data, theadLenght }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <>
      <tr key={data.id} className={`${DEFAULT_STYLES} cursor-pointer`} onClick={toggleShowMore}>
        <td className="border-r-2 border-sky-700 p-2">{data.name}</td>
        <td className={`p-2 text-center ${data.status ? "text-green-500" : "text-red-500"}`}>{data.status ? "FINALIZADA" : "INCOMPLETA"}</td>
      </tr>

      {showMore &&
        <tr>
          <td colSpan={theadLenght} className="p-4">
            <div className="flex gap-4">
              {data.options.map((value, index) =>
                <span key={index}>{value}</span>
              )}
            </div>
          </td>
        </tr>
      }
    </>
  );
};

interface TaskTableProps {
  headers: string[];
  columns: (TaskProps & { options: JSX.Element[] })[];
}

const TaskTable: FC<TaskTableProps> = ({ headers, columns }) => {
  return (
    <table className="outline outline-sky-700 rounded-xl w-full overflow-hidden">
      <thead className="bg-sky-950">
        <tr>
          {headers.map((header, index) =>
            <th key={index} className="p-2">
              {header}
            </th>
          )}
        </tr>
      </thead>

      <tbody>
        {columns.map((data) =>
          <ExpandRow key={data.id} data={data} theadLenght={headers.length} />
        )}
      </tbody>
    </table>
  );
};

export { TaskTable };
