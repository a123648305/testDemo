/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-08-25 18:03:43
 * @LastEditors: wujian
 * @LastEditTime: 2021-08-25 18:22:56
 */
const { app, BrowserWindow } = require('electron')
const path = require('path')

// 修改现有的 createWindow() 函数
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 应用关闭
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
