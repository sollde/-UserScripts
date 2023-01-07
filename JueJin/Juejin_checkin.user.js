// ==UserScript==
// @name         掘金助手
// @namespace    https://github.com/sollde/
// @version      0.1.1
// @description  try to take over the world!
// @author       You
// @updateURL    https://github.com/sollde/UserScripts/raw/main/JueJin/Juejin_checkin.user.js
// @downloadURL  https://github.com/sollde/UserScripts/raw/main/JueJin/Juejin_checkin.user.js
// @icon         data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAzNiAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy41ODc1IDYuNzcyNjhMMjEuODIzMiAzLjQwNTA1TDE3LjU4NzUgMC4wMDc0ODIzN0wxNy41ODM3IDBMMTMuMzU1NSAzLjM5NzU3TDE3LjU4MzcgNi43Njg5NEwxNy41ODc1IDYuNzcyNjhaTTE3LjU4NjMgMTcuMzk1NUgxNy41OUwyOC41MTYxIDguNzc0MzJMMjUuNTUyNiA2LjM5NDUzTDE3LjU5IDEyLjY4MDhIMTcuNTg2M0wxNy41ODI1IDEyLjY4NDVMOS42MTk5MyA2LjQwMjAxTDYuNjYwMTYgOC43ODE4MUwxNy41ODI1IDE3LjM5OTJMMTcuNTg2MyAxNy4zOTU1Wk0xNy41ODI4IDIzLjI4OTFMMTcuNTg2NSAyMy4yODU0TDMyLjIxMzMgMTEuNzQ1NkwzNS4xNzY4IDE0LjEyNTRMMjguNTIzOCAxOS4zNzUyTDE3LjU4NjUgMjhMMC4yODQzNzYgMTQuMzU3NEwwIDE0LjEyOTFMMi45NTk3NyAxMS43NTMxTDE3LjU4MjggMjMuMjg5MVoiIGZpbGw9IiMxRTgwRkYiLz4KPC9zdmc+Cg==
// @match        http://*/*
// @match        https://*/*
// @grant        GM_xmlhttpRequest
// @grant        GM_log
// @run-at       document-end
// @connect      juejin.cn
// ==/UserScript==

(function() {
    'use strict';
    GM_log('开始签到')
    const storageKey = "last_sign_timestamp";
    // 获取上一次签到的日子
    const lastSignNumberOfDays = GM_getValue(storageKey, 0);
    // 计算现在所在的日子
    const currentNumberOfDays = Math.floor(
        new Date().valueOf() / 1000 / 60 / 60 / 24
    );

    // 如果今天已经请求过，不再请求
    if (currentNumberOfDays !== lastSignNumberOfDays) {
        GM_xmlhttpRequest({
            url: "https://api.juejin.cn/growth_api/v1/check_in",
            method: "POST",
            headers: {
                "content-type": "application/json",
                "user-agent": navigator.userAgent,
            },
            responseType: "json",
            onload(response) {
                if (response.status === 200) {
                    const data = response.response;
                    if (data.data === "success") {
                        alert("签到成功");
                    } else {
                        alert(data.err_msg);
                    }
                    // 更新最近一次签到的日子
                    GM_setValue(storageKey, currentNumberOfDays);
                }
            },
        });
    }
    // Your code here...
})();
