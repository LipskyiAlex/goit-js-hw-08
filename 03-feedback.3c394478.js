var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function v(e,t,n){var i,o,r,a,f,u,c=0,l=!1,v=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,f=setTimeout(w,t),l?y(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-c>=r}function w(){var e=m();if(h(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-u);return v?d(n,r-(e-c)):n}(e))}function O(e){return f=void 0,g&&i?y(e):(i=o=void 0,a)}function S(){var e=m(),n=h(e);if(i=arguments,o=this,u=e,n){if(void 0===f)return j(u);if(v)return f=setTimeout(w,t),y(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,r=(v="maxWait"in n)?s(b(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=u=o=f=void 0},S.flush=function(){return void 0===f?a:O(m())},S}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=o.test(e);return f||r.test(e)?a(e.slice(2),f?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};const g=document.querySelector(".feedback-form"),y=document.querySelector(".feedback-form input"),j=document.querySelector(".feedback-form textarea"),h=JSON.parse(localStorage.getItem("feedback-form-state"));function w(){localStorage.setItem("feedback-form-state",JSON.stringify({email:y.value,message:j.value}))}!function(){h.email&&(y.value=h.email);h.message&&(j.value=h.message)}(),y.addEventListener("input",t(w,500)),j.addEventListener("input",t(w,500)),g.addEventListener("submit",(function(e){e.preventDefault(),g.reset(),console.log(h)}));
//# sourceMappingURL=03-feedback.3c394478.js.map
