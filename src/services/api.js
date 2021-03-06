import { post, get } from './request';

const URL = '/api';
const COLORS_URL = `${URL}/colors`;

// const transformToArray = obj => {
//   if(!obj) return [];
//   return Object.keys(obj).map(key => {
//     const each = obj[key];
//     each.key = key;
//     return each;
//   });
// };

export const loadColors = () => get(COLORS_URL);
export const addColor = data => post(`${COLORS_URL}`, data);

// {
//   return get(`${COLORS_URL}.json`)
//     .then(response => {
//       const colors =  transformToArray(response);
//       return colors;
//     });
// }