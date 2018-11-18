import { TodoItem } from '../../interfaces';
import { utilitiesService } from '../../services/utilities.service';
import { store } from '../../state/store';

export const todoListService = {

    addItem: (title: string) => {
        const item: TodoItem = {
            title,
            completed: false,
            id: utilitiesService.getUuid()
        }
        store.dispatch({
            type: 'ADD_TODO',
            payload: item
        });
    },

    removeItem: (item: TodoItem) => {
        store.dispatch({
            type: 'REMOVE_TODO',
            payload: item.id
        })
    },

    setCompleted: (item: TodoItem, state: boolean) => {
        store.dispatch({
            type: 'SET_TODO_COMPLETED',
            payload: {
                id:item.id, 
                completed: state
            }
        })
    }

}