import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';
import { GifGrid } from '../components/GifGrid';

describe('Test In GifExpertApp', () => {
  test('should match snapshot', () => {
    let wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
  test('should show a list of categories', () => {
    const categories = ['One Punch', 'The Simpsons'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories}></GifExpertApp>)
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  })
  
});
