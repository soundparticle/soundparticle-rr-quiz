jest.mock('../services/api', () => ({
  loadColors: jest.fn(),
  addColor: jest.fn(),
  selectColor: jest.fn(),
}));

import { load, add } from './actions';
import { COLORS_LOAD, COLORS_ADD, /*SELECT_COLOR*/ } from './reducers';
import { loadColors, addColor, /*selectColor*/ } from '../services/api';


describe('Actions tests', () => {
  
  it('loads a color', () => {
    const promise = Promise.resolve();
    loadColors.mockReturnValueOnce(promise);

    const { type, payload } = load();
    expect(type).toBe(COLORS_LOAD);
    expect(payload).toBe(promise);
    expect(loadColors.mock.calls.length).toBe(1);
  });

  it('adds a color', () => {
    const color = 'blue';
    const promise = Promise.resolve();
    addColor.mockReturnValueOnce(promise);

    const { type, payload } = add(color);
    expect(type).toBe(COLORS_ADD);
    expect(payload).toBe(promise);
    expect(addColor.mock.calls.length).toBe(1);
    expect(addColor.mock.calls[0][0]).toBe(color);
  });
});
