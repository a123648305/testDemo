/*
 * @Author: chenwu
 * @Date: 2021-10-9 10:11:52
 * @Description: file content
 */
export const accounts = ['CREATOR', 'ASSIGNEE', 'UPDATER'];
export const dateTimes = ['DATE_TIME', 'CREATED_TIME', 'DUE_TIME', 'UPDATED_TIME', 'FINISHED_TIME'];
export const fieldEnum = {
  DATE_TIME: {
    enum: [
      {
        name: '等于',
        id: '1',
        value: 'eq',
      },
      {
        name: '早于',
        id: '2',
        value: 'ea',
      },
      {
        name: '晚于',
        id: '3',
        value: 'af',
      },
      {
        name: '介于',
        id: '4',
        value: 'be',
      },
    ],
    type: 'DatePicker',
  },
  CHECKBOX: {
    type: 'Select',
    mode: 'multiple',
  },
  PRIORITY: {
    type: 'Select',
  },
  RADIO: {
    type: 'Select',
  },
  NUMERIC: {
    type: 'InputNumber',
  },
  TEXT: {
    type: 'Input',
  },
  RICH_TEXT: {
    type: 'Input',
  },
  ASSIGNEE: {
    type: 'Select',
    mode: 'multiple',
  },
  STATE: {
    type: 'Select',
  },
  CREATOR: {
    type: 'Select',
    mode: 'multiple',
  },
  CREATED_TIME: {
    enum: [
      {
        name: '等于',
        id: '1',
        value: 'eq',
      },
      {
        name: '早于',
        id: '2',
        value: 'ea',
      },
      {
        name: '晚于',
        id: '3',
        value: 'af',
      },
      {
        name: '介于',
        id: '4',
        value: 'be',
      },
    ],
    type: 'DatePicker',
  },
  DUE_TIME: {
    enum: [
      {
        name: '等于',
        id: '1',
        value: 'eq',
      },
      {
        name: '早于',
        id: '2',
        value: 'ea',
      },
      {
        name: '晚于',
        id: '3',
        value: 'af',
      },
      {
        name: '介于',
        id: '4',
        value: 'be',
      },
    ],
    type: 'DatePicker',
  },
  UPDATER: {
    type: 'Select',
    mode: 'multiple',
  },
  UPDATED_TIME: {
    enum: [
      {
        name: '等于',
        id: '1',
        value: 'eq',
      },
      {
        name: '早于',
        id: '2',
        value: 'ea',
      },
      {
        name: '晚于',
        id: '3',
        value: 'af',
      },
      {
        name: '介于',
        id: '4',
        value: 'be',
      },
    ],
    type: 'DatePicker',
  },
  FINISHED_TIME: {
    enum: [
      {
        name: '等于',
        id: '1',
        value: 'eq',
      },
      {
        name: '早于',
        id: '2',
        value: 'ea',
      },
      {
        name: '晚于',
        id: '3',
        value: 'af',
      },
      {
        name: '介于',
        id: '4',
        value: 'be',
      },
    ],
    type: 'DatePicker',
  },
  DESCRIPTION: {
    type: 'Input',
  },
  REMARK: {
    type: 'Input',
  },
};
