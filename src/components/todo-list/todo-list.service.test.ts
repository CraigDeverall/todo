import { todoListService } from './todo-list.service';
import { store } from '../../state/store';
import { utilitiesService } from '../../services/utilities.service';

jest.mock('../../state/store');
utilitiesService.getUuid = () => { return '12345' }

describe('todo-list-service', () => {

  it('should create an action to add a todo', () => {
    todoListService.addItem('my first todo')
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'ADD_TODO',
      payload: {
        title: 'my first todo',
        completed: false,
        id: '12345'
      }
    });
  });

  it('should create an action to remove a todo', () => {
    todoListService.removeItem({
      title: 'my todo',
      completed: false,
      id: '12345'
    });
    expect(store.dispatch).toBeCalledWith({
      type: 'REMOVE_TODO',
      payload: '12345'
    });
  })

  it('should create an action to set a todos completed state', () => {
    todoListService.setCompleted({
      title: 'my todo',
      completed: false,
      id: '12345'
    }, true);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'SET_TODO_COMPLETED',
      payload: {
        completed: true,
        id: '12345'
      }
    })
  })

})



