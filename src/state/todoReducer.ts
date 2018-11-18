import { 
  TodoItem, 
  ActionAddTodo, 
  ActionRemoveTodo, 
  ActionSetTodoCompleted 
} from '../interfaces';

export function todoReducer(
  state: Array<TodoItem> = [],
  action: ActionAddTodo | ActionRemoveTodo | ActionSetTodoCompleted
) {

  switch (action.type) {

    case 'ADD_TODO':
      return [action.payload, ...state]

    case 'REMOVE_TODO':
      return state.filter(item => {
        return item.id !== action.payload
      })

    case 'SET_TODO_COMPLETED':
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          todo.completed = action.payload.completed
        }
        return todo;
      })

    default:
      return state
  }
}