/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-07-27 17:09:59
 * @LastEditors: wujian
 * @LastEditTime: 2021-08-06 15:04:30
 */
import { getList } from "../services/example";
export default {
  namespace: "example",

  state: {
    test: "helloWorld",
    val: 1,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      try {
        const response = yield call(getList);
        console.log(response);
      } catch (error) {}

      yield put({ type: "add" });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    add(state, action) {
      console.log("add", state);
      state.val++;
      return { ...state };
    },
    sub(state, action) {
      console.log("sub", state);
      state.val--;
      return state;
    },
  },
};
