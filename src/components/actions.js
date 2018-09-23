
import { COLORS_LOAD, COLORS_ADD, /*SELECT_COLOR*/ } from './reducers';
import { loadColors, addColor } from '../services/api';
export const load = () => ({
  type: COLORS_LOAD,
  payload: loadColors()
});

export const add = color => ({
  type: COLORS_ADD,
  payload: addColor(color)
});