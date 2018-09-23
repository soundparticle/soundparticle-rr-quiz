import {
  colors,
  COLORS_LOAD,
  COLORS_ADD,
  SELECT_COLOR
} from './reducers';

describe('Color reducers', () => {

  it('defaults to empty array', () => {
    const state = colors(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads colors', () => {
    const payload = [{}, {}, {}];

    const state = colors([], {
      type: COLORS_LOAD,
      payload
    });

    expect(state).toBe(payload);
  });

  it('adds a color', () => {
    const color1 = 'red';
    const color2 = 'white';
    const color3 = 'blue';

    const state = colors([color1, color2], {
      type: COLORS_ADD,
      payload: color3
    });

    expect(state).toEqual([color1, color2, color3]);
  });
});