type Status = "todo" | "doing" | "done";
interface ITask {
  id: string;
  title: string;
  status: Status;
}
interface IState {
  tasks: ITask[]
  draggableTask: string | null;
}
interface IAction {
  add(task: ITask): void;
  setDraggableTask(taskTitle: string | null): void;
  moveTask(taskId: string, status: Status): void;

  deleteTask(taskId: string): void;
  // update (id: number, status: Status): void;
}

interface ITheme {
  theme: "light" | "dark";
}
interface IThemeAction {
  changeTheme(): void;
}

interface IModal {
  isOpen: boolean;
}
interface IModalAction {
  openModal(): void;
  closeModal(): void;
}


export type { ITask, IState, Status, IAction, IThemeAction, ITheme, IModal, IModalAction }
