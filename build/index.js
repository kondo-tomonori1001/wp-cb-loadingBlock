(window.webpackJsonp_loadig_block=window.webpackJsonp_loadig_block||[]).push([[1],{5:function(e,t,o){}}]),function(e){function t(t){for(var n,a,c=t[0],s=t[1],i=t[2],p=0,d=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(l,a)&&l[a]&&d.push(l[a][0]),l[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);d.length;)d.shift()();return r.push.apply(r,i||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,c=1;c<o.length;c++){var s=o[c];0!==l[s]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},l={0:0},r=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window.webpackJsonp_loadig_block=window.webpackJsonp_loadig_block||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var u=s;r.push([6,1]),o()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blocks},,function(e,t,o){"use strict";o.r(t);var n=o(4),l=(o(5),o(0)),r=(o(3),o(1)),a=o(2);Object(n.registerBlockType)("create-block/loadig-block",{edit:function({attributes:e,setAttributes:t}){const o=Object(a.useBlockProps)(),{bgColor:n,squareColor:c,text:s,delay:i}=e;return console.log(n),Object(l.createElement)(l.Fragment,null,Object(l.createElement)(a.InspectorControls,null,Object(l.createElement)(r.PanelBody,{title:"背景色の設定",initialOpen:!1},Object(l.createElement)(r.ColorPicker,{disableAlpha:!0,color:e.bgColor,onChangeComplete:e=>t({bgColor:e.hex})})),Object(l.createElement)(r.PanelBody,{title:"回転する小さい四角形の色設定",initialOpen:!1},Object(l.createElement)(r.ColorPicker,{disableAlpha:!0,color:e.squareColor,onChangeComplete:e=>t({squareColor:e.hex})})),Object(l.createElement)(r.PanelBody,{title:"テキストの設定",initialOpen:!1},Object(l.createElement)(r.TextControl,{value:e.text,onChange:e=>t({text:e})})),Object(l.createElement)(r.PanelBody,{title:"ローディングの遅延時間（秒）",initialOpen:!1},Object(l.createElement)("p",null,"※半角数字で入力してください"),Object(l.createElement)(r.TextControl,{value:e.delay,onChange:e=>t({delay:e})}))),Object(l.createElement)("div",o,Object(l.createElement)("div",{className:"p-loading is-edit",style:{backgroundColor:n}},Object(l.createElement)("div",{class:"p-loading__square"},Object(l.createElement)("span",{class:"p-loading__square1",style:{backgroundColor:c}}),Object(l.createElement)("span",{class:"p-loading__square2",style:{backgroundColor:c}}),Object(l.createElement)("span",{class:"p-loading__square3",style:{backgroundColor:c}}),Object(l.createElement)("span",{class:"p-loading__square4",style:{backgroundColor:c}})),Object(l.createElement)("p",{class:"p-loading__text",style:{color:c}},s,Object(l.createElement)("span",{className:"p-loading__text__cover",style:{backgroundColor:n}})))))},save:function({attributes:e}){const{bgColor:t,squareColor:o,text:n,delay:r}=e;return Object(l.createElement)("div",{className:"p-loading is-loading","data-delay":r,style:{backgroundColor:t}},Object(l.createElement)("div",{class:"p-loading__square"},Object(l.createElement)("span",{class:"p-loading__square1",style:{backgroundColor:o}}),Object(l.createElement)("span",{class:"p-loading__square2",style:{backgroundColor:o}}),Object(l.createElement)("span",{class:"p-loading__square3",style:{backgroundColor:o}}),Object(l.createElement)("span",{class:"p-loading__square4",style:{backgroundColor:o}})),Object(l.createElement)("p",{class:"p-loading__text",style:{color:o}},n,Object(l.createElement)("span",{className:"p-loading__text__cover",style:{backgroundColor:t}})))}})}]);