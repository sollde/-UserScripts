// ==UserScript==
// @name         请求重写
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  fetch和xhr请求重写
// @author       You
// @match        https://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    //fetch
    const originFetch = fetch;
    unsafeWindow.fetch = (url, options) => {
        return originFetch(url, options).then(async (response) => {
            if(url.match(/https:\/\/.*/)){
                console.log('请求重写', url)
                const responseClone = response.clone();
                const contentType = responseClone.headers.get('Content-Type')
                if(contentType.match(/json/)){
                    let res = await responseClone.json();
                    res.injected = '油猴脚本修改数据'
                    response = new Response(JSON.stringify(res), response);
                }else if(contentType.match(/text/)){
                    let res = await responseClone.text();
                    res = '油猴脚本修改数据' + res
                    response = new Response(JSON.stringify(res), response);
                }
                return response;
            }else{
                return response;
            }
        });
    };
    //XMLHttpRequest
    const originOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (_, url) {
        if (url.match(/https:\/\/.*/)) {
            console.log('请求重写', url)
            let xhr = this
            let getter = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, 'responseText').get
            Object.defineProperty(xhr, 'responseText', {
                get: function(){
                    let result = getter.call(xhr);
                    try{
                        const res = JSON.parse(result);
                        res.injected = '油猴脚本修改数据'
                        return res
                    }catch(e){
                        console.error(e)
                        return result
                    }

                }
            })
        }
        originOpen.apply(this, arguments);
    };
    // Your code here...
})();
