import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';
describe('Test on custom hoom useFetchGifs', () => {
  test('should return initial state', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch'));
    const { data, loading } = result.current;

    console.log(data, loading);

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
  test('should return a image array an loading in false', async() => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('One Punch')
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    console.log(data, loading);

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});