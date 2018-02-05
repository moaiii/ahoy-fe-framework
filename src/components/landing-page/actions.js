import * as types from './types';


export function dummy(something) {
  return {
    type: types.DUMMY,
    payload: something
  };
}