/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-08-14 09:49:16
 * @LastEditors: wujian
 * @LastEditTime: 2021-08-20 15:19:39
 */
import { Effect, Reducer } from 'umi';

export type StateType = {};

export type Dispatch = {};

// module type
export type ModuleState = {
  test: number;
};
export type ModelType = {
  namespace: string;
  state: ModuleState;
  reducers: {
    save: Reducer;
  };
  effects: {};
};
