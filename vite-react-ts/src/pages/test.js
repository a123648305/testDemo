/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-12-16 09:31:56
 * @LastEditors: wujian
 * @LastEditTime: 2021-12-16 10:17:47
 */
   
//矩阵单选题
  {
    "type": "MATRIX_MULTIPLE_CHOICE",		
    "required": true,
    "visible": true,
    "jumpable": false,
     "rowNumber":2, // 矩阵行数
    "optionNumber":2, // 选项个数 
    "matrixLimit": [1, 20], // 矩阵行数 下拉选项
    "optionLimit": [1, 20],// 选项个数  下拉选项
    "questions": [
        {"title":"请选择一个选项1", "id": "ttwlaWkDMhJtnH1rUSEzZC2Z1wBsbhX1", "number":1，},
        {"title":"请选择一个选项2", "id": "ttwlaWkDMhJtnH1rUSEzZC2Z1wBsbhX2", "number":2}
    ],
    // 矩阵列表数据 
    "questionData":[
        {"id":16,"title":"矩阵行1","number":1,"colItems":[{"id":14,"title":"选项1","value":false},{"id":15,"title":"选项2","value":true}]},
        {"id":17,"title":"矩阵行2","number":2,"colItems":[{"id":14,"title":"选项1","value":false},{"id":15,"title":"选项2","value":false}]}
    ],
    "id": "ttwlaWkDMhJtnH1rUSEzZC2Z1wBsbhXv",
    "number": 4
},	

//矩阵多选题
{
    "type": "MATRIX_MULTIPLE_CHOICE",		
    "required": true,
    "visible": true,
    "jumpable": false,
    "rowNumber":2, // 矩阵行数
    "optionNumber":2, // 选项个数
    "choosedLimit"[0,0] // 最少 最多选择几项 
    "matrixLimit": [1, 20], // 矩阵行数 下拉选项
    "optionLimit": [1, 20],// 选项个数  下拉选项

    "questions": [
        {"title":"请选择最少一个选项1", "id": "ttwlaWkDMhJtnH1rUSEzZC2Z1wBsbhX1", "number":1},
        {"title":"请选择最少一个选项2", "id": "ttwlaWkDMhJtnH1rUSEzZC2Z1wBsbhX2", "number":2},
        {"title":"请选择最少一个选项3", "id": "ttwlaWkDMhJtnH1rUSEzZC2Z1wBsbhX3", "number":3},
    ],
    // 矩阵列表数据 
    "questionData":[
        {"id":16,"title":"矩阵行1","number":1,"colItems":[{"id":14,"title":"选项1","value":false},{"id":15,"title":"选项2","value":true}]},
        {"id":17,"title":"矩阵行2","number":2,"colItems":[{"id":14,"title":"选项1","value":false},{"id":15,"title":"选项2","value":false}]}
    ],
    "id": "ttwlaWkDMhJtnH1rUSEzZC2Z1wBsbhXv",
    "number": 5
},

//矩阵量表题
  {
    "type": "MATRIX_MULTIPLE_CHOICE",		
    "required": true,
    "visible": true,
    "jumpable": false,
    "rowNumber":2, // 矩阵行数
    "matrixLimit": [0, 20], // 矩阵行数 下拉选项
    "columnEditDisabled":true,// 列标题不可编辑
    "selectedStyle":'star',// 选中样式 默认为星星
    "styleOptions":['star','circle'], // 样式设置 下拉选项 
    "metrics": [0, 20],  // [量度起点,量度终点]
    "metricsOptions": [0, 20],  // 量度起点 量度终点 下拉选项
    "questions": [
        {"title":"请做一个测量选择1", "id": "ttwlaWkDMhJtnH1rUSEzZC2Z1wBsbhX1", "number":1},
        {"title":"请做一个测量选择2", "id": "ttwlaWkDMhJtnH1rUSEzZC2Z1wBsbhX2", "number":2},
        {"title":"请做一个测量选择3", "id": "ttwlaWkDMhJtnH1rUSEzZC2Z1wBsbhX3", "number":3},
    ],
    // 矩阵列表数据 
    "questionData":[
        {"id":16,"title":"矩阵行1","number":1,"colItems":[{"id":14,"title":"1分","value":false},{"id":15,"title":"2分","value":true}]},
        {"id":17,"title":"矩阵行2","number":2,"colItems":[{"id":14,"title":"1分","value":false},{"id":15,"title":"2分","value":false}]}
    ],
    "id": "ttwlaWkDMhJtnH1rUSEzZC2Z1wBsbhXv",
    "number": 6,
}
}