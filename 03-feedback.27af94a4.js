!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return s.Date.now()};function g(e,t,n){var r,o,a,u,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function g(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function O(e){return l=e,f=setTimeout(j,t),d?g(e):u}function h(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function j(){var e=b();if(h(e))return w(e);f=setTimeout(j,function(e){var n=t-(e-c);return s?p(n,a-(e-l)):n}(e))}function w(e){return f=void 0,v&&r?g(e):(r=o=void 0,u)}function T(){var e=b(),n=h(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return O(c);if(s)return f=setTimeout(j,t),g(c)}return void 0===f&&(f=setTimeout(j,t)),u}return t=S(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},T.flush=function(){return void 0===f?u:w(b())},T}function y(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var i=u.test(e);return i||f.test(e)?c(e.slice(2),i?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};var O=document.querySelector(".feedback-form"),h=document.querySelector(".feedback-form input"),j=document.querySelector(".feedback-form textarea"),w=JSON.parse(localStorage.getItem("feedback-form-state"))||{};function T(){localStorage.setItem("feedback-form-state",JSON.stringify({email:h.value,message:j.value})),w=JSON.parse(localStorage.getItem("feedback-form-state"))}!function(){try{w=JSON.parse(localStorage.getItem("feedback-form-state"))||{}}catch(e){w={}}w&&w.email&&(h.value=w.email);w&&w.message&&(j.value=w.message)}(),h.addEventListener("input",n(T,500)),j.addEventListener("input",n(T,500)),O.addEventListener("submit",(function(e){if(e.preventDefault(),!h.value)return void alert("Email is required input field");if(!j.value)return void alert("Message filed can't be empty. Enter at least 1 character!");console.log(w),O.reset()}))}();
//# sourceMappingURL=03-feedback.27af94a4.js.map
