import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Test In GifExpertApp', () => {
  test('should match snapshot', () => {
    let wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
