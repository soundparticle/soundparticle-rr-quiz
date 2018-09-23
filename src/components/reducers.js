export const COLORS_LOAD = 'COLORS_LOAD';
export const COLORS_ADD = 'COLORS_ADD';
// export const COLOR_UPDATE = 'COLOR_UPDATE';
// export const COLOR_REMOVE = 'COLOR_REMOVE';
export const SELECT_COLOR = 'SELECT_COLOR';

export const getColors = state => state.colors;
// colors reducers
export function colors(state = [], { type, payload  }) {
  switch(type) {
    case COLORS_LOAD:
      return payload;
    case COLORS_ADD:
      return [...state,
        payload
      ];
  }
}

//selectedColor reducers
export function selectedColor(state = 'white', { type, payload }) {
  switch(type) {
    case SELECT_COLOR:
      return [...state,
        payload
      ];
  }
}