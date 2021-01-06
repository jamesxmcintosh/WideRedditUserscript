// ==UserScript==
// @name        Wide new reddit | Userscript
// @namespace   Violentmonkey Scripts
// @match       https://www.reddit.com/*
// @grant       none
// @version     1.2
// @license     GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @icon        https://www.redditstatic.com/desktop2x/img/favicon/favicon-96x96.png
// @author      jxm
// @description Make new reddit layout fill screen width. 10/06/2020, 22:31:07
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
addGlobalStyle('._1OVBBWLtHoSPfGCRaPzpTf._3nSp9cdBpqL13CqjdMr2L_ { width: 90% !important;}')
addGlobalStyle('div { max-width: none !important; }');
