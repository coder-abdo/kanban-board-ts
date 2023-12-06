import type { FC } from "react";
import { clsx } from "clsx";
import { useStore } from "@/store";


type Props = {
  taskTitle: string;
  onDraggingStar: (title: string) => void;
  deleteTask: (taskId: string) => void;
}
export const Task: FC<Props> = ({ taskTitle, onDraggingStar, deleteTask }) => {
  const task = useStore((state) => state.tasks.find((task) => task.title === taskTitle));

  return (
    <div
      className={clsx("pt-5 pb-2 relative card px-3 bg-white flex flex-col border cursor-move", task?.status === "todo" && "border-warning", task?.status === "doing" && "border-info", task?.status === "done" && "border-success")}
      draggable
      onDragStart={() => onDraggingStar(task!.title)}
    >
      <h2 className="text-xl font-bold text-black">{taskTitle}</h2>
      <span className={clsx("badge uppercase text-white text-sm px-3 py-2 rounded self-end", task?.status === "todo" && "badge-warning", task?.status === "doing" && "badge-info", task?.status === "done" && "badge-success")}>{task ? task.status : "todo"}</span>
      <button
        onClick={() => deleteTask(task!.id)}
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </div>
  )
}
