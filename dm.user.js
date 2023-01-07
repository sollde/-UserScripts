// ==UserScript==
// @name         GM
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @updateURL    https://github.com/sollde/UserScripts/raw/main/dm.user.js
// @downloadURL  https://github.com/sollde/UserScripts/raw/main/dm.user.js
// @grant        unsafeWindow
// @grant        GM_addStyle
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_addValueChangeListener
// @grant        GM_removeValueChangeListener
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_log
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @grant        GM_getTab
// @grant        GM_saveTab
// @grant        GM_getTabs
// @grant        GM_notification
// @grant        GM_setClipboard
// @grant        GM_info
// @run-at       document-end
// @require      https://code.jquery.com/jquery-3.6.3.min.js
// ==/UserScript==

(function() {
    'use strict';
    unsafeWindow.GM_select=unsafeWindow;
    unsafeWindow.GM_setValue = GM_setValue;
    unsafeWindow.GM_getValue = GM_getValue;
    unsafeWindow.GM_addStyle = GM_addStyle;
    unsafeWindow.GM_deleteValue = GM_deleteValue;
    unsafeWindow.GM_listValues = GM_listValues;
    unsafeWindow.GM_addValueChangeListener = GM_addValueChangeListener;
    unsafeWindow.GM_removeValueChangeListener = GM_removeValueChangeListener;
    unsafeWindow.GM_log = GM_log;
    unsafeWindow.GM_getResourceText = GM_getResourceText;
    unsafeWindow.GM_getResourceURL = GM_getResourceURL;
    unsafeWindow.GM_registerMenuCommand = GM_registerMenuCommand;
    unsafeWindow.GM_unregisterMenuCommand = GM_unregisterMenuCommand;
    unsafeWindow.GM_openInTab = GM_openInTab;
    unsafeWindow.GM_xmlhttpRequest = GM_xmlhttpRequest;
    unsafeWindow.GM_download = GM_download;
    unsafeWindow.GM_getTab = GM_getTab;
    unsafeWindow.GM_saveTab = GM_saveTab;
    unsafeWindow.GM_getTabs = GM_getTabs;
    unsafeWindow.GM_notification = GM_notification;
    unsafeWindow.GM_setClipboard = GM_setClipboard;
    unsafeWindow.GM_info = GM_info;

    console.log('jquery已加载', $.fn.jquery)
    // Your code here...
})();
