// ==UserScript==
// @name        Wide new reddit
// @namespace   Violentmonkey Scripts
// @match       https://www.reddit.com/*
// @grant       none
// @version     1.0
// @license     GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @icon        https://www.redditstatic.com/desktop2x/img/favicon/favicon-96x96.png
// @author      jxm
// @description Make new reddit layout fill screen width.
// ==/UserScript==
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
addGlobalStyle('div { max-width: none !important; }');
