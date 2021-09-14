/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-08-14 09:49:11
 * @LastEditors: wujian
 * @LastEditTime: 2021-08-27 19:57:44
 */
import { ModelType } from './data';

export default {
  namespace: 'Index',
  state: {
    test: 100,
  },
  effects: {
    *test(_, { select, put }) {
      const { test } = yield select(({ Index }) => Index);
    },
  },
  reducers: {
    save(state: any, { payload }: any) {
      return { ...state, ...payload };
    },
  },
} as ModelType;
