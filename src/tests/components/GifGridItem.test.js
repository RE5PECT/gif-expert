import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en componente GifGridItem', () => {
  const title = 'Un titulo';
  const url = 'https://localhost/prueba';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('should show the component GifGridItem', () => {  
    expect(wrapper).toMatchSnapshot();
  });

  test('should tener un parrafo con el title', () => {
   const p = wrapper.find('p');
   expect(p.text().trim()).toBe(title);
  });

  test('should tener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
   });

   test('should have the class animate__bounceInRight', () => {
    const div = wrapper.find('div').at(0);
    expect(div.hasClass('animate__bounceInRight')).toBe(true);
   }); 
});
