<!--
 * @Description:
 * @Author: wujian
 * @Date: 2022-02-11 12:17:26
 * @LastEditors: wujian
 * @LastEditTime: 2022-02-11 12:17:27
-->

// cd 到 nginx 所在目录，启动 nginx
start nginx

// 修改配置后重新加载生效
nginx -s reload

// 重新打开日志文件
nginx -s reopen

// 测试 nginx 配置文件是否正确
nginx -t -c /path/to/nginx.conf

// 快速停止 nginx
nginx -s stop

// 完整有序的停止 nginx
nginx -s quit
