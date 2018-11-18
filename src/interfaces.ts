export interface TodoItem {
    id: string;
    title: string;
    completed: boolean;
}

export interface State {
    todoList: Array<TodoItem>;
}

export interface ActionAddTodo {
    type: 'ADD_TODO';
    payload: TodoItem;
}

export interface ActionRemoveTodo {
    type: 'REMOVE_TODO',
    payload: string
}

export interface ActionSetTodoCompleted {
    type: 'SET_TODO_COMPLETED',
    payload: {
        id: string,
        completed: boolean
    }
}