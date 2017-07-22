/* global expect, it, describe */

import React from 'react';
import { shallow } from 'enzymne';
import AddTodo from '.';

describe('AddTodo component', () => {
  it('should render sucessfully', () => {
    const component = shallow(<AddTodo />);
    expect(component.exists()).toEqual(true);
  });
});
