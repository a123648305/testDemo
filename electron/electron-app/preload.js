/*
 * @Description:
 * @Author: wujian
 * @Date: 2021-08-25 18:21:02
 * @LastEditors: wujian
 * @LastEditTime: 2021-08-25 18:21:02
 */
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})
