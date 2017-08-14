/* global expect, it, describe */

import actions from '.';
import types from '../constants/';

describe('Actions', () => {
  const todoText = 'A todo';

  it('should create an action to add a todo', () => {
    const expectAction = {
      type: types.SUBMIT_TODO,
      id: 1,
      text: todoText,
    };

    expect(actions.submitTodo(todoText)).toEqual(expectAction);
  });
});
