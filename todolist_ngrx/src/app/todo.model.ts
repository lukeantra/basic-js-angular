export interface Todo {
    userId: number;
    id?: number;
    title: string;
    completed: boolean;
  }

export interface TodoState {
  err?: string;
  todolist: Todo[];
}