进入主目录 cd ..../nginx-1.0.2>  
1、启动：
start nginx

2、停止：
.\nginx -s stop 或
.\nginx -s quit
注：stop 是快速停止 nginx，可能并不保存相关信息；quit 是完整有序的停止 nginx，并保存相关信息。

3、重新载入 Nginx：
.\nginx -s reload
当配置信息修改，需要重新载入这些配置时使用此命令。

4、重新打开日志文件：
.\nginx -s reopen

5、查看 Nginx 版本：
nginx -v

6、彻底停用

taskkill /f /t /im nginx.exe
