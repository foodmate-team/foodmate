import * as actionTypes from './actionTypes';
import { saveResult } from '../utils/dataManager';

export const testAction = data => {
  return saveResult(data, actionTypes.TEST);
};