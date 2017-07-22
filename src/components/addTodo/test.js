/* global expect, it, describe */

import React from 'react';
import { shallow } from 'enzyme';
import AddTodo from '.';

describe('AddTodo component', () => {
  it('should render sucessfully', () => {
    const component = shallow(<AddTodo />);
    expect(component.exists()).toEqual(true);
  });

  it('should have one input', () => {
    const component = shallow(<AddTodo />);
    expect(component.find('todo-input').length).toEqual(1);
  });
});
