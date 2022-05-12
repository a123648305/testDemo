/*
 * @Description:
 * @Author: linhongzhu
 * @Date: 2021-03-18 19:16:02
 * @LastEditors: wangshuzhao
 * @LastEditTime: 2021-06-10 12:19:54
 */
import { getDefaultValue, setDefaultValue } from './services';
import { QUICK_TIME_CHOICE, getQuickDateRange, getNumOfDays, regex } from './utils';
import { getIDBDefault } from '../Screening/Screening/dbUtils';
import moment from 'moment';
import { storage, types } from 'public/storage';
import names from 'public/dva/names';
const namespace = names.IDBHeaderScreening.timeScreening;

const initState = {
  type: '', // 模块
  hasHour: false, // 默认不带近x小时
  dateFilter: undefined,
  projectId: undefined,
  selectedDateRange: [],
  selectedQuickTimeChoice: 8, // 已选择的快捷时间选择器索引（默认为8，即近30天）
  staredQuickTimeChoice: -1, // 标为星标的快捷时间选择器索引（默认为-1）
  quickTime: '',
};

export default {
  namespace,
  state: Object.assign({}, initState),
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    clean(state, { payload }) {
      return JSON.parse(JSON.stringify(initState));
    },
  },
  effects: {
    // 日期组件初始化
    *init({ payload }, { call, put, select, take }) {
      const { type, params, hasHour } = payload;
      yield put({ type: 'save', payload: { type, projectId: storage.get(types.curProject).id } });
      const key = `default-time-${type}`;
      yield put({
        type: 'getDefaultValue',
        payload: {
          key,
          params, // 外部传入dateFilter
          formatStr: 'YYYY-MM-DD HH:mm:ss',
          defaultValue:
            (storage.getWidthProject(types.messageDateFilter) &&
              storage.getWidthProject(types.messageDateFilter)[type]) ||
            undefined, // 用户选择过的日期
          projectId: storage.get(types.curProject).id,
          hasHour,
        },
      });
      yield take(`getDefaultValue/@@end`);
      return;
    },
    // 获取默认时间
    *getDefaultValue({ payload }, { call, put, select }) {
      const { projectId, selectedQuickTimeChoice: selectedQuickChoice } = yield select(
        ({ ...store }) => store[namespace]
      );
      const { params, formatStr, defaultValue, key, hasHour } = payload;
      // const { data } = yield call(getDefaultValue, {
      //   projectId: payload.projectId || projectId,
      //   key,
      // });
      const { publicResource } = yield select(state => state[names.global]);
      const data = yield call(getIDBDefault, { type: key, publicResource });
      let dateFilter;
      // if (data.code === 20000) {
      const receivedData = data ? JSON.parse(data) : '';
      if (receivedData && receivedData.staredQuickTimeChoice !== -1) {
        // 有标星的时间
        const { currSelector, selectedQuickTimeChoice, staredQuickTimeChoice } = receivedData;
        // 先取外部传入的值，再获取标星
        const selectedQuickTimeChoiceResult =
          params && params.quickChoice.indexOf('-') === -1
            ? QUICK_TIME_CHOICE(hasHour).indexOf(params.quickChoice)
            : staredQuickTimeChoice > -1
            ? staredQuickTimeChoice
            : selectedQuickTimeChoice;
        const selectedDateRangeResult = params
          ? params.quickChoice.indexOf('-') === -1
            ? getQuickDateRange(selectedQuickTimeChoiceResult, formatStr, hasHour)
            : [params.from, params.to]
          : staredQuickTimeChoice > -1
          ? getQuickDateRange(staredQuickTimeChoice, formatStr, hasHour)
          : getQuickDateRange(selectedQuickTimeChoice, formatStr, hasHour);
        if (currSelector === 0) {
          dateFilter = {
            from: selectedDateRangeResult[0],
            to: selectedDateRangeResult[1],
            quickChoice:
              params && params.quickChoice.indexOf('-') > -1
                ? params.quickChoice
                : QUICK_TIME_CHOICE(hasHour)[selectedQuickTimeChoiceResult],
            dateGroupType: 'DAY',
            remoteName: 'cTime',
            numOfDays: getNumOfDays(selectedDateRangeResult),
            currSelector:
              params && regex.test(params.from.trim()) && regex.test(params.to.trim()) ? 1 : 0,
          };
          yield put({
            type: 'save',
            payload: {
              hasHour,
              selectedQuickTimeChoice: selectedQuickTimeChoiceResult,
              staredQuickTimeChoice,
              selectedDateRange: selectedDateRangeResult,
              dateFilter,
              quickTime:
                params && params.quickChoice.indexOf('-') > -1
                  ? ''
                  : QUICK_TIME_CHOICE(hasHour)[staredQuickTimeChoice],
            },
          });
        }
      } else {
        // 没有标星的时间：先取外部传入的params，再取用户之前选中的defaultValue
        const selectedQuickTimeChoiceResult = params
          ? params.quickChoice.indexOf('-') === -1
            ? QUICK_TIME_CHOICE(hasHour).indexOf(params.quickChoice)
            : -1
          : defaultValue
          ? defaultValue.quickChoice.indexOf('-') === -1
            ? QUICK_TIME_CHOICE(hasHour).indexOf(defaultValue.quickChoice)
            : -1
          : defaultValue;
        const sndSelectedDateRangeResult = params
          ? selectedQuickTimeChoiceResult > -1
            ? getQuickDateRange(selectedQuickTimeChoiceResult, formatStr, hasHour)
            : [params.from, params.to]
          : defaultValue
          ? selectedQuickTimeChoiceResult > -1
            ? getQuickDateRange(selectedQuickTimeChoiceResult, formatStr, hasHour)
            : [defaultValue.from, defaultValue.to]
          : [
              moment()
                .subtract(30, 'days')
                .format(formatStr),
              moment().format(formatStr),
            ];
        dateFilter = {
          from: sndSelectedDateRangeResult[0],
          to: sndSelectedDateRangeResult[1],
          quickChoice: params
            ? params.quickChoice
            : defaultValue
            ? defaultValue.quickChoice
            : QUICK_TIME_CHOICE(hasHour)[hasHour ? 11 : 8],
          dateGroupType: 'DAY',
          remoteName: 'cTime',
          numOfDays: getNumOfDays(sndSelectedDateRangeResult),
          currSelector:
            selectedQuickTimeChoiceResult > 0 ||
            !selectedQuickTimeChoiceResult ||
            (params && !regex.test(params.from.trim())) ||
            (params && !regex.test(params.to.trim()))
              ? 0
              : 1,
        };
        yield put({
          type: 'save',
          payload: {
            hasHour,
            selectedQuickTimeChoice: selectedQuickTimeChoiceResult,
            staredQuickTimeChoice: -1,
            selectedDateRange: sndSelectedDateRangeResult,
            dateFilter,
            quickTime: '',
          },
        });
      }
      // }
      return { dateFilter };
    },
    // 设置默认时间
    *setDefaultValue({ payload }, { call, put, select }) {
      const { projectId } = yield select(({ ...store }) => store[namespace]);
      try {
        const { key, value } = payload;
        yield call(setDefaultValue, {
          projectId: payload.projectId || projectId,
          key,
          value,
        });
        // 设置时间更新缓存
        yield put({
          type: `${names.global}/fetchPublicData`,
          payload: { types: ['DEFAULT_VALUE'] },
        });
      } catch (error) {
        //
      }
    },
  },
};
