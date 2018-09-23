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
});