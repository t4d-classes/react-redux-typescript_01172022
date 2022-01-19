import { Action } from 'redux';


export const ADD_ACTION = 'ADD';
export const SUBTRACT_ACTION = 'SUBTRACT';

export interface AddAction extends Action<typeof ADD_ACTION> {
  payload: {
    num: number;
  }
}

export type CreateAddAction = (value: number) => AddAction;

export function isAddAction(action: any): action is AddAction {
  return action?.type === ADD_ACTION;
}

export const createAddAction: CreateAddAction = (value) => ({
  type: ADD_ACTION,
  payload: { num: value },
});

export interface SubtractAction extends Action<typeof SUBTRACT_ACTION> {
  payload: {
    num: number;
  }
}

export type CreateSubtractAction = (value: number) => SubtractAction;

export function isSubtractAction(action: any): action is SubtractAction {
  return action?.type === SUBTRACT_ACTION;
}

export const createSubtractAction: CreateSubtractAction = (value) => ({
  type: SUBTRACT_ACTION,
  payload: { num: value },
});