type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key];
};

// Original Question
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
