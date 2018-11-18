export interface TodoItem {
    id: string;
    title: string;
    completed: boolean;
}

export interface State {
    todoList: Array<TodoItem>;
}