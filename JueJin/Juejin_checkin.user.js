// ==UserScript==
// @name         掘金助手
// @namespace    https://github.com/sollde/
// @version      0.1.1
// @description  try to take over the world!
// @author       You
// @updateURL    https://github.com/sollde/UserScripts/raw/main/JueJin/Juejin_checkin.user.js
// @downloadURL  https://github.com/sollde/UserScripts/raw/main/JueJin/Juejin_checkin.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=juejin.cn
// @match        http://*/*
// @match        https://*/*
// @grant        GM_xmlhttpRequest
// @grant        GM_log
// @grant        GM_getValue
// @grant        GM_setValue
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
