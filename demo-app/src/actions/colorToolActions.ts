import { Action } from 'redux';

import { NewColor } from '../models/colors';

export const APPEND_COLOR_ACTION = 'APPEND_COLOR';

export interface AppendColorAction
  extends Action<typeof APPEND_COLOR_ACTION> {
  payload: {
    newColor: NewColor;
  };
}

export type CreateAppendColorAction = (newColor: NewColor) => AppendColorAction;

export function isAppendColorAction(
  action: any,
): action is AppendColorAction {
  return action?.type === APPEND_COLOR_ACTION;
}

export const createAppendColorAction: CreateAppendColorAction = (
  newColor: NewColor,
) => ({
  type: APPEND_COLOR_ACTION,
  payload: { newColor },
});
