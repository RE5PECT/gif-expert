import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test on GifGrid Component', () => {
  const category = 'RickandMorty';

  test('should show the component GifGrid', () => {
    useFetchGifs.mockReturnValue({
        data: [],
        loading: false,
      });
    let wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should de mostrar items cuando se cargan imagenes useFetchGifs', () => {
   
    const gifs = [
      {
        id: 'asdAsdadfa21',
        url: 'https://localhost/asdasd/img.jpg',
        title: 'Cualquier cosa',
      },
    ];
   
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    let wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
