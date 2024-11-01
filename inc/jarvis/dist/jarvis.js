/**
 * jarvis -  Jarvis is your admin assistant, putting WordPress at your fingertips via a quicksearch interface.
 * @version v1.0.4
 * @link https://github.com/WDGDC/Jarvis#readme
 * @license MIT
 */

"use strict";function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var Jarvis=function(o,t,e){for(var n=0;n<arguments.length;n++)if(!/function|object/.test(_typeof(arguments[n])))return"object"===("undefined"==typeof console?"undefined":_typeof(console))&&"function"==typeof console.error&&console.error("Jarvis dependency is missing: ".concat(arguments[n])),function(){};function a(){return/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)||"true"===document.activeElement.contentEditable}var d={store:{attachment:{type:"dashicon",icon:"dashicons-admin-media"},category:{type:"dashicon",icon:"dashicons-category"},nav_menu:{type:"dashicon",icon:"dashicons-menu"},nav_menu_item:{type:"dashicon",icon:"dashicons-admin-appearance"},page:{type:"dashicon",icon:"dashicons-admin-page"},post:{type:"dashicon",icon:"dashicons-admin-post"},post_tag:{type:"dashicon",icon:"dashicons-tag"},post_format:{type:"dashicon",icon:"dashicons-format-standard"},term:{type:"dashicon",icon:"dashicons-category"},user:{type:"dashicon",icon:"dashicons-admin-users"}},add:function(t,e,n){return this.store[t]||(this.store[t]={type:e,icon:n}),this.store[t]},remove:function(t){this.store[t]&&delete this.store[t]},get:function(t){return"object"===_typeof(this.store[t])&&this.store[t]}},r=function(){function n(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};1<arguments.length&&void 0!==arguments[1]&&arguments[1];for(var e in _classCallCheck(this,n),this.attributes=[],this.classes=[],this.href="",this.icon=null,this.iconClasses=["jarvis__icon"],this.iconKey="",this.iconStyle="",this.iconType="dashicon",this.kind="",this.prefix="",this.section="",this.title="",this.type="",t)t.hasOwnProperty(e)&&(this[e]=t[e]);"string"==typeof this.type&&0<this.type.length&&-1===this.attributes.indexOf(this.type)&&this.attributes.push(this.type),this.iconKey&&this.iconType&&this.icon&&!d.get(this.iconKey)&&d.add(this.iconKey,this.iconType,this.icon),this.setIcon(this.iconKey)}return _createClass(n,[{key:"setIcon",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";if("image"!==this.iconType||!this.icon){if(!d.get(t)&&this.kind)switch(this.kind){case"term":t="post_tag";break;case"post":t="post";break;case"user":t="user"}var e=d.get(t);return!!e&&(this.iconKey=t,this.iconType=e.type,this.icon=e.icon,"dashicon"===this.iconType&&(this.iconClasses.push("dashicons-before"),-1===this.iconClasses.indexOf(this.icon)&&this.iconClasses.push(this.icon)),this.icon)}}}]),n}(),c=function(t){function u(t){var e;_classCallCheck(this,u),(e=_possibleConstructorReturn(this,_getPrototypeOf(u).call(this))).link=t,e.section=jQuery(e.link).closest("li.menu-top").first(),e.prefix=e.section.find(".wp-menu-name").clone().children().remove().end().text(),e.kind="menu",e.type=e.kind,e.href=t.href,e.attributes.push(e.type),e.classes.push("jarvis__suggestion--".concat(e.kind)),jQuery(e.link).is(".wp-submenu a")?e.title="".concat(e.prefix," » ").concat(jQuery(e.link).clone().children().remove().end().text()):e.title=e.prefix;var n=e.section.find(".wp-menu-image").first(),i=e.section.find("> a").first();if(0<i.length){var s=i.attr("href");if(-1<s.indexOf("?"))for(var o=s.substr(s.indexOf("?")+1).split("&"),a=0;a<o.length;a++){var r=o[a].split("=");if(2===r.length&&"post_type"===r[0]&&0<r[1].length){e.iconKey=r[1];break}}}if(e.iconKey||(e.iconKey=e.section.attr("id")),e.classes.push("jarvis__suggestion--".concat(e.iconKey)),0<n.length){if(!d.get(e.iconKey)){var c;switch(!0){case 0<e.section.find(".wp-menu-image img").length:e.iconType="image",e.icon=e.section.find(".wp-menu-image img").first().attr("src");break;case n.hasClass("svg"):c=window.getComputedStyle(n.get(0)),/^url\("data:image\/svg\+xml\;base64,/.test(c.backgroundImage)&&(e.iconType="svg",e.icon=atob(c.backgroundImage.replace(/^url\("data:image\/svg\+xml\;base64,/,"").replace(/\"\)$/,"")),e.icon=e.icon.replace(/<\?xml [^>]+\?>/g,"").replace(/\sid="[^\"]+"/g,"").replace(/<!--[\s\S]*?-->/g,"").replace(/<(title|desc|defs)>[^<]+?<\/(title|desc|defs)>/g,""));break;case n.hasClass("dashicons-before"):if("dashicons"===(c=window.getComputedStyle(n.get(0),":before")).fontFamily)e.iconType="dashicon",e.icon=n.attr("class").trim().split(" ").filter(function(t){return-1===["dashicons-before","wp-menu-image"].indexOf(t)}).shift(),e.iconClasses.push(e.icon),e.iconClasses.push("dashicons-before");else{var h=document.getElementById("jarvis_style");h||((h=document.createElement("style")).type="text/css",h.id="jarvis_style",document.head.appendChild(h));var l=".jarvis__suggestion--".concat(e.iconKey," .jarvis__icon::before { font-family: ").concat(c.fontFamily,"; content: ").concat(c.content,"; }")+"\n";h.appendChild(document.createTextNode(l))}}d.add(e.iconKey,e.iconType,e.icon)}e.setIcon(e.iconKey)}return e}return _inherits(u,r),u}(),i={suggestion:t.template('\n\t\t\t<span class="<% print( classes.join( \' \' ) ) %>">\n\t\t\t\t<a href="<%= href %>" data-type="<%= type %>">\n\t\t\t\t\t<span class="<% print( iconClasses.join( \' \' ) ) %>" style=\'<%= iconStyle %>\' title="<%= prefix %>">\n\t\t\t\t\t<% if ( iconType === \'image\' ) { %>\n\t\t\t\t\t\t<img src="<%= icon %>" alt="<%= title %>">\n\t\t\t\t\t<% } else if ( iconType === \'svg\' ) { %>\n\t\t\t\t\t\t<%= icon %>\n\t\t\t\t\t<% } %>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class="jarvis__title" title="<%- title %>"><%- title %></span>\n\t\t\t\t\t<% if ( attributes ) { %>\n\t\t\t\t\t\t<span class="jarvis__pills">\n\t\t\t\t\t\t\t<% _.each( attributes, function(attr) { %>\n\t\t\t\t\t\t\t\t<span class="jarvis__pill"><%= attr %></span>\n\t\t\t\t\t\t\t<% } ); %>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t<% } %>\n\t\t\t\t</a>\n\t\t\t</span>\n\t\t')};return function(){function s(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];for(var i in _classCallCheck(this,s),this.iconStore=d,this.settings={hotkey:"/",searchurl:"/wp-json/jarvis/v1/search"},e)e.hasOwnProperty(i)&&(this.settings[i]=e[i]);this.opened=!1,this.suggestions=[],this.instants=n,this.term="",this.ctrlKey=!1,this.node=document.createElement("div"),this.node.className="jarvis jarvis--".concat(this.settings.theme),this.node.id="jarvis",this.modal=document.createElement("div"),this.modal.className="jarvis__modal",this.overlay=document.createElement("div"),this.overlay.className="jarvis__overlay",this.overlay.addEventListener("click",function(){return t.close()}),this.search=document.createElement("input"),this.search.type="text",this.$search=o(this.search),this.node.appendChild(this.overlay),this.node.appendChild(this.modal),this.modal.appendChild(this.search),this.loading=document.createElement("i"),this.loading.className="jarvis__loading",this.isJarvisUrl=function(t){return-1<t.indexOf(this.settings.searchurl)},/complete|loaded/.test(document.readyState)?this.init():document.addEventListener("DOMContentLoaded",this.init.bind(this))}return _createClass(s,[{key:"init",value:function(){var i=this;o("#adminmenu a").each(function(t,e){i.suggestions.push(new c(e))}),Array.isArray(this.instants)&&(this.suggestions=this.suggestions.concat(this.instants.map(function(t){return new r(t)}))),document.addEventListener("keydown",function(t){t.key!==i.settings.hotkey||a()||(t.preventDefault(),t.stopPropagation())},!0),o(document).on("click","#wp-admin-bar-jarvis_menubar_icon a",function(t){t.preventDefault(),i.open()}),o(document).on("click",".jarvis__suggestion a",function(t){!0!==t.ctrlKey&&"ajax"!==t.currentTarget.getAttribute("data-type")||t.preventDefault()}),o(document).on("keydown keyup","#jarvis-search",function(t){i.ctrlKey=t.ctrlKey}),o(document).on("keyup",function(t){return i.opened&&"Escape"===t.key?(t.preventDefault(),t.stopPropagation(),void i.close()):a()?void 0:i.opened||t.key!==i.settings.hotkey?void 0:(t.preventDefault(),t.stopPropagation(),i.open())}),o(document).ajaxSend(function(t,e,n){i.opened&&i.isJarvisUrl(n.url)&&(i.modal.appendChild(i.loading),e.setRequestHeader("X-WP-Nonce",i.settings.nonce))}),o(document).ajaxComplete(function(t,e,n){i.opened&&i.isJarvisUrl(n.url)&&i.loading.parentNode&&i.loading.parentNode.removeChild(i.loading)})}},{key:"open",value:function(){var n=this;return this.opened=!0,document.body.appendChild(this.node),this.$search.typeahead({hint:!0,highlight:!0,minLength:1,classNames:{cursor:"jarvis__cursor",dataset:"jarvis__dataset",empty:"jarvis__empty",highlight:"jarvis__highlight",hint:"jarvis__hint",input:"jarvis__input",menu:"jarvis__menu",open:"jarvis__open",selectable:"jarvis__selectable",suggestion:"jarvis__suggestion",wrapper:"jarvis__wrap"}},{name:"results",limit:10,display:"title",source:new e({local:this.suggestions,datumTokenizer:e.tokenizers.obj.whitespace("title"),queryTokenizer:e.tokenizers.whitespace,remote:{url:"".concat(this.settings.searchurl,"?q=%s"),wildcard:"%s",transform:function(t){return Array.isArray(t)?t.map(function(t){return new r(t,"remote")}):t}}}),templates:{suggestion:function(t){return i.suggestion(t)}}}),this.$search.on("typeahead:select",function(t,e){if("ajax"===e.type)return n.ajax(e);n.ctrlKey?window.open(e.href,"_blank"):location.href=e.href}),this.$search.on("keyup",function(){n.term=n.search.value}),this.$search.typeahead("val",this.term),this.$search.focus().select(),this}},{key:"close",value:function(){return this.opened=!1,this.node.parentNode.removeChild(this.node),this.$search.typeahead("destroy"),this}},{key:"toggle",value:function(){return this.opened?this.close():this.open()}},{key:"ajax",value:function(t){var i=this;this.modal.appendChild(this.loading),o.ajax({url:t.href,success:function(t,e,n){i.term="",i.loading.parentNode&&i.modal.removeChild(i.loading),i.close()},error:function(t,e,n){i.loading.parentNode&&i.modal.removeChild(i.loading)}})}}]),s}()}(jQuery,_,Bloodhound);
//# sourceMappingURL=jarvis.js.map
