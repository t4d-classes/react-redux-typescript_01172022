import { HistoryEntry } from './history';

export type CalcToolState = {
  result: number;
  history: HistoryEntry[];
};

export type CalcToolActions = {
  add: (value: number) => void;
  subtract: (value: number) => void;
  multiply: (value: number) => void;
  divide: (value: number) => void;
}

export type CalcToolStore = CalcToolState & CalcToolActions;