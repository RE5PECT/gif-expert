import { getGifts } from '../../helpers/getGifs';

describe('Pruebas en getGifs', () => {
  test('should get 10 gifs', async() => {
    const gifs = await getGifts('One Punch');
    expect(gifs.length).toBe(10);      
  })  

  test('should get 0 gifs', async() => {
    const gifs = await getGifts('');
    expect(gifs.length).toBe(0);      
  })  
});
