!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return s.Date.now()};function y(e,t,n){var i,o,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,l=t,f=e.apply(r,n)}function O(e){return l=e,a=setTimeout(h,t),d?y(e):f}function S(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function h(){var e=b();if(S(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-c);return s?p(n,u-(e-l)):n}(e))}function w(e){return a=void 0,v&&i?y(e):(i=o=void 0,f)}function T(){var e=b(),n=S(e);if(i=arguments,o=this,c=e,n){if(void 0===a)return O(c);if(s)return a=setTimeout(h,t),y(c)}return void 0===a&&(a=setTimeout(h,t)),f}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=o=a=void 0},T.flush=function(){return void 0===a?f:w(b())},T}function g(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(g(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=f.test(e);return r||a.test(e)?c(e.slice(2),r?2:8):u.test(e)?NaN:+e}n=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form"),S=document.querySelector(".feedback-form input"),h=document.querySelector(".feedback-form textarea"),w=JSON.parse(localStorage.getItem("feedback-form-state"));function T(){localStorage.setItem("feedback-form-state",JSON.stringify({email:S.value,message:h.value}))}!function(){w.email&&(S.value=w.email);w.message&&(h.value=w.message)}(),S.addEventListener("input",n(T,500)),h.addEventListener("input",n(T,500)),O.addEventListener("submit",(function(e){e.preventDefault(),O.reset(),console.log(w)}))}();
//# sourceMappingURL=03-feedback.203fe849.js.map