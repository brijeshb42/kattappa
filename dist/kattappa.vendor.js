/**
 * React (with addons) v0.13.3
 *
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.React=e()}}(function(){return function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";var r=e(25),o=e(31),i=e(42),a=e(34),s=e(67),u=e(95),l=e(97),c=e(124),p=e(119),d=e(165);o.addons={CSSTransitionGroup:a,LinkedStateMixin:r,PureRenderMixin:i,TransitionGroup:u,batchedUpdates:l.batchedUpdates,classSet:c,cloneWithProps:p,createFragment:s.create,update:d},t.exports=o},{119:119,124:124,165:165,25:25,31:31,34:34,42:42,67:67,95:95,97:97}],2:[function(e,t,n){"use strict";var r=e(131),o={componentDidMount:function(){this.props.autoFocus&&r(this.getDOMNode())}};t.exports=o},{131:131}],3:[function(e,t,n){"use strict";function r(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}function o(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}function i(e){switch(e){case P.topCompositionStart:return I.compositionStart;case P.topCompositionEnd:return I.compositionEnd;case P.topCompositionUpdate:return I.compositionUpdate}}function a(e,t){return e===P.topKeyDown&&t.keyCode===b}function s(e,t){switch(e){case P.topKeyUp:return-1!==E.indexOf(t.keyCode);case P.topKeyDown:return t.keyCode!==b;case P.topKeyPress:case P.topMouseDown:case P.topBlur:return!0;default:return!1}}function u(e){var t=e.detail;return"object"==typeof t&&"data"in t?t.data:null}function l(e,t,n,r){var o,l;if(_?o=i(e):w?s(e,r)&&(o=I.compositionEnd):a(e,r)&&(o=I.compositionStart),!o)return null;M&&(w||o!==I.compositionStart?o===I.compositionEnd&&w&&(l=w.getData()):w=v.getPooled(t));var c=g.getPooled(o,n,r);if(l)c.data=l;else{var p=u(r);null!==p&&(c.data=p)}return h.accumulateTwoPhaseDispatches(c),c}function c(e,t){switch(e){case P.topCompositionEnd:return u(t);case P.topKeyPress:var n=t.which;return n!==T?null:(R=!0,N);case P.topTextInput:var r=t.data;return r===N&&R?null:r;default:return null}}function p(e,t){if(w){if(e===P.topCompositionEnd||s(e,t)){var n=w.getData();return v.release(w),w=null,n}return null}switch(e){case P.topPaste:return null;case P.topKeyPress:return t.which&&!o(t)?String.fromCharCode(t.which):null;case P.topCompositionEnd:return M?null:t.data;default:return null}}function d(e,t,n,r){var o;if(o=D?c(e,r):p(e,r),!o)return null;var i=y.getPooled(I.beforeInput,n,r);return i.data=o,h.accumulateTwoPhaseDispatches(i),i}var f=e(16),h=e(21),m=e(22),v=e(23),g=e(103),y=e(107),C=e(154),E=[9,13,27,32],b=229,_=m.canUseDOM&&"CompositionEvent"in window,x=null;m.canUseDOM&&"documentMode"in document&&(x=document.documentMode);var D=m.canUseDOM&&"TextEvent"in window&&!x&&!r(),M=m.canUseDOM&&(!_||x&&x>8&&11>=x),T=32,N=String.fromCharCode(T),P=f.topLevelTypes,I={beforeInput:{phasedRegistrationNames:{bubbled:C({onBeforeInput:null}),captured:C({onBeforeInputCapture:null})},dependencies:[P.topCompositionEnd,P.topKeyPress,P.topTextInput,P.topPaste]},compositionEnd:{phasedRegistrationNames:{bubbled:C({onCompositionEnd:null}),captured:C({onCompositionEndCapture:null})},dependencies:[P.topBlur,P.topCompositionEnd,P.topKeyDown,P.topKeyPress,P.topKeyUp,P.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:C({onCompositionStart:null}),captured:C({onCompositionStartCapture:null})},dependencies:[P.topBlur,P.topCompositionStart,P.topKeyDown,P.topKeyPress,P.topKeyUp,P.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:C({onCompositionUpdate:null}),captured:C({onCompositionUpdateCapture:null})},dependencies:[P.topBlur,P.topCompositionUpdate,P.topKeyDown,P.topKeyPress,P.topKeyUp,P.topMouseDown]}},R=!1,w=null,O={eventTypes:I,extractEvents:function(e,t,n,r){return[l(e,t,n,r),d(e,t,n,r)]}};t.exports=O},{103:103,107:107,154:154,16:16,21:21,22:22,23:23}],4:[function(e,t,n){var r=e(147),o={addClass:function(e,t){return r(!/\s/.test(t)),t&&(e.classList?e.classList.add(t):o.hasClass(e,t)||(e.className=e.className+" "+t)),e},removeClass:function(e,t){return r(!/\s/.test(t)),t&&(e.classList?e.classList.remove(t):o.hasClass(e,t)&&(e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,""))),e},conditionClass:function(e,t,n){return(n?o.addClass:o.removeClass)(e,t)},hasClass:function(e,t){return r(!/\s/.test(t)),e.classList?!!t&&e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}};t.exports=o},{147:147}],5:[function(e,t,n){"use strict";function r(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var o={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0},i=["Webkit","ms","Moz","O"];Object.keys(o).forEach(function(e){i.forEach(function(t){o[r(t,e)]=o[e]})});var a={background:{backgroundImage:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundColor:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0}},s={isUnitlessNumber:o,shorthandPropertyExpansions:a};t.exports=s},{}],6:[function(e,t,n){"use strict";var r=e(5),o=e(22),i=(e(118),e(125)),a=e(145),s=e(156),u=(e(166),s(function(e){return a(e)})),l="cssFloat";o.canUseDOM&&void 0===document.documentElement.style.cssFloat&&(l="styleFloat");var c={createMarkupForStyles:function(e){var t="";for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];null!=r&&(t+=u(n)+":",t+=i(n,r)+";")}return t||null},setValueForStyles:function(e,t){var n=e.style;for(var o in t)if(t.hasOwnProperty(o)){var a=i(o,t[o]);if("float"===o&&(o=l),a)n[o]=a;else{var s=r.shorthandPropertyExpansions[o];if(s)for(var u in s)n[u]="";else n[o]=""}}}};t.exports=c},{118:118,125:125,145:145,156:156,166:166,22:22,5:5}],7:[function(e,t,n){"use strict";function r(){this._callbacks=null,this._contexts=null}var o=e(30),i=e(29),a=e(147);i(r.prototype,{enqueue:function(e,t){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(e),this._contexts.push(t)},notifyAll:function(){var e=this._callbacks,t=this._contexts;if(e){a(e.length===t.length),this._callbacks=null,this._contexts=null;for(var n=0,r=e.length;r>n;n++)e[n].call(t[n]);e.length=0,t.length=0}},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),o.addPoolingTo(r),t.exports=r},{147:147,29:29,30:30}],8:[function(e,t,n){"use strict";function r(e){return"SELECT"===e.nodeName||"INPUT"===e.nodeName&&"file"===e.type}function o(e){var t=x.getPooled(P.change,R,e);E.accumulateTwoPhaseDispatches(t),_.batchedUpdates(i,t)}function i(e){C.enqueueEvents(e),C.processEventQueue()}function a(e,t){I=e,R=t,I.attachEvent("onchange",o)}function s(){I&&(I.detachEvent("onchange",o),I=null,R=null)}function u(e,t,n){return e===N.topChange?n:void 0}function l(e,t,n){e===N.topFocus?(s(),a(t,n)):e===N.topBlur&&s()}function c(e,t){I=e,R=t,w=e.value,O=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value"),Object.defineProperty(I,"value",k),I.attachEvent("onpropertychange",d)}function p(){I&&(delete I.value,I.detachEvent("onpropertychange",d),I=null,R=null,w=null,O=null)}function d(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==w&&(w=t,o(e))}}function f(e,t,n){return e===N.topInput?n:void 0}function h(e,t,n){e===N.topFocus?(p(),c(t,n)):e===N.topBlur&&p()}function m(e,t,n){return e!==N.topSelectionChange&&e!==N.topKeyUp&&e!==N.topKeyDown||!I||I.value===w?void 0:(w=I.value,R)}function v(e){return"INPUT"===e.nodeName&&("checkbox"===e.type||"radio"===e.type)}function g(e,t,n){return e===N.topClick?n:void 0}var y=e(16),C=e(18),E=e(21),b=e(22),_=e(97),x=e(105),D=e(148),M=e(150),T=e(154),N=y.topLevelTypes,P={change:{phasedRegistrationNames:{bubbled:T({onChange:null}),captured:T({onChangeCapture:null})},dependencies:[N.topBlur,N.topChange,N.topClick,N.topFocus,N.topInput,N.topKeyDown,N.topKeyUp,N.topSelectionChange]}},I=null,R=null,w=null,O=null,S=!1;b.canUseDOM&&(S=D("change")&&(!("documentMode"in document)||document.documentMode>8));var A=!1;b.canUseDOM&&(A=D("input")&&(!("documentMode"in document)||document.documentMode>9));var k={get:function(){return O.get.call(this)},set:function(e){w=""+e,O.set.call(this,e)}},L={eventTypes:P,extractEvents:function(e,t,n,o){var i,a;if(r(t)?S?i=u:a=l:M(t)?A?i=f:(i=m,a=h):v(t)&&(i=g),i){var s=i(e,t,n);if(s){var c=x.getPooled(P.change,s,o);return E.accumulateTwoPhaseDispatches(c),c}}a&&a(e,t,n)}};t.exports=L},{105:105,148:148,150:150,154:154,16:16,18:18,21:21,22:22,97:97}],9:[function(e,t,n){"use strict";var r=0,o={createReactRootIndex:function(){return r++}};t.exports=o},{}],10:[function(e,t,n){"use strict";function r(e,t,n){e.insertBefore(t,e.childNodes[n]||null)}var o=e(13),i=e(77),a=e(160),s=e(147),u={dangerouslyReplaceNodeWithMarkup:o.dangerouslyReplaceNodeWithMarkup,updateTextContent:a,processUpdates:function(e,t){for(var n,u=null,l=null,c=0;c<e.length;c++)if(n=e[c],n.type===i.MOVE_EXISTING||n.type===i.REMOVE_NODE){var p=n.fromIndex,d=n.parentNode.childNodes[p],f=n.parentID;s(d),u=u||{},u[f]=u[f]||[],u[f][p]=d,l=l||[],l.push(d)}var h=o.dangerouslyRenderMarkup(t);if(l)for(var m=0;m<l.length;m++)l[m].parentNode.removeChild(l[m]);for(var v=0;v<e.length;v++)switch(n=e[v],n.type){case i.INSERT_MARKUP:r(n.parentNode,h[n.markupIndex],n.toIndex);break;case i.MOVE_EXISTING:r(n.parentNode,u[n.parentID][n.fromIndex],n.toIndex);break;case i.TEXT_CONTENT:a(n.parentNode,n.textContent);break;case i.REMOVE_NODE:}}};t.exports=u},{13:13,147:147,160:160,77:77}],11:[function(e,t,n){"use strict";function r(e,t){return(e&t)===t}var o=e(147),i={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_NUMERIC_VALUE:16,HAS_POSITIVE_NUMERIC_VALUE:48,HAS_OVERLOADED_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=e.Properties||{},n=e.DOMAttributeNames||{},a=e.DOMPropertyNames||{},u=e.DOMMutationMethods||{};e.isCustomAttribute&&s._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var l in t){o(!s.isStandardName.hasOwnProperty(l)),s.isStandardName[l]=!0;var c=l.toLowerCase();if(s.getPossibleStandardName[c]=l,n.hasOwnProperty(l)){var p=n[l];s.getPossibleStandardName[p]=l,s.getAttributeName[l]=p}else s.getAttributeName[l]=c;s.getPropertyName[l]=a.hasOwnProperty(l)?a[l]:l,u.hasOwnProperty(l)?s.getMutationMethod[l]=u[l]:s.getMutationMethod[l]=null;var d=t[l];s.mustUseAttribute[l]=r(d,i.MUST_USE_ATTRIBUTE),s.mustUseProperty[l]=r(d,i.MUST_USE_PROPERTY),s.hasSideEffects[l]=r(d,i.HAS_SIDE_EFFECTS),s.hasBooleanValue[l]=r(d,i.HAS_BOOLEAN_VALUE),s.hasNumericValue[l]=r(d,i.HAS_NUMERIC_VALUE),s.hasPositiveNumericValue[l]=r(d,i.HAS_POSITIVE_NUMERIC_VALUE),s.hasOverloadedBooleanValue[l]=r(d,i.HAS_OVERLOADED_BOOLEAN_VALUE),o(!s.mustUseAttribute[l]||!s.mustUseProperty[l]),o(s.mustUseProperty[l]||!s.hasSideEffects[l]),o(!!s.hasBooleanValue[l]+!!s.hasNumericValue[l]+!!s.hasOverloadedBooleanValue[l]<=1)}}},a={},s={ID_ATTRIBUTE_NAME:"data-reactid",isStandardName:{},getPossibleStandardName:{},getAttributeName:{},getPropertyName:{},getMutationMethod:{},mustUseAttribute:{},mustUseProperty:{},hasSideEffects:{},hasBooleanValue:{},hasNumericValue:{},hasPositiveNumericValue:{},hasOverloadedBooleanValue:{},_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<s._isCustomAttributeFunctions.length;t++){var n=s._isCustomAttributeFunctions[t];if(n(e))return!0}return!1},getDefaultValueForProperty:function(e,t){var n,r=a[e];return r||(a[e]=r={}),t in r||(n=document.createElement(e),r[t]=n[t]),r[t]},injection:i};t.exports=s},{147:147}],12:[function(e,t,n){"use strict";function r(e,t){return null==t||o.hasBooleanValue[e]&&!t||o.hasNumericValue[e]&&isNaN(t)||o.hasPositiveNumericValue[e]&&1>t||o.hasOverloadedBooleanValue[e]&&t===!1}var o=e(11),i=e(158),a=(e(166),{createMarkupForID:function(e){return o.ID_ATTRIBUTE_NAME+"="+i(e)},createMarkupForProperty:function(e,t){if(o.isStandardName.hasOwnProperty(e)&&o.isStandardName[e]){if(r(e,t))return"";var n=o.getAttributeName[e];return o.hasBooleanValue[e]||o.hasOverloadedBooleanValue[e]&&t===!0?n:n+"="+i(t)}return o.isCustomAttribute(e)?null==t?"":e+"="+i(t):null},setValueForProperty:function(e,t,n){if(o.isStandardName.hasOwnProperty(t)&&o.isStandardName[t]){var i=o.getMutationMethod[t];if(i)i(e,n);else if(r(t,n))this.deleteValueForProperty(e,t);else if(o.mustUseAttribute[t])e.setAttribute(o.getAttributeName[t],""+n);else{var a=o.getPropertyName[t];o.hasSideEffects[t]&&""+e[a]==""+n||(e[a]=n)}}else o.isCustomAttribute(t)&&(null==n?e.removeAttribute(t):e.setAttribute(t,""+n))},deleteValueForProperty:function(e,t){if(o.isStandardName.hasOwnProperty(t)&&o.isStandardName[t]){var n=o.getMutationMethod[t];if(n)n(e,void 0);else if(o.mustUseAttribute[t])e.removeAttribute(o.getAttributeName[t]);else{var r=o.getPropertyName[t],i=o.getDefaultValueForProperty(e.nodeName,r);o.hasSideEffects[t]&&""+e[r]===i||(e[r]=i)}}else o.isCustomAttribute(t)&&e.removeAttribute(t)}});t.exports=a},{11:11,158:158,166:166}],13:[function(e,t,n){"use strict";function r(e){return e.substring(1,e.indexOf(" "))}var o=e(22),i=e(123),a=e(126),s=e(139),u=e(147),l=/^(<[^ \/>]+)/,c="data-danger-index",p={dangerouslyRenderMarkup:function(e){u(o.canUseDOM);for(var t,n={},p=0;p<e.length;p++)u(e[p]),t=r(e[p]),t=s(t)?t:"*",n[t]=n[t]||[],n[t][p]=e[p];var d=[],f=0;for(t in n)if(n.hasOwnProperty(t)){var h,m=n[t];for(h in m)if(m.hasOwnProperty(h)){var v=m[h];m[h]=v.replace(l,"$1 "+c+'="'+h+'" ')}for(var g=i(m.join(""),a),y=0;y<g.length;++y){var C=g[y];C.hasAttribute&&C.hasAttribute(c)&&(h=+C.getAttribute(c),C.removeAttribute(c),u(!d.hasOwnProperty(h)),d[h]=C,f+=1)}}return u(f===d.length),u(d.length===e.length),d},dangerouslyReplaceNodeWithMarkup:function(e,t){u(o.canUseDOM),u(t),u("html"!==e.tagName.toLowerCase());var n=i(t,a)[0];e.parentNode.replaceChild(n,e)}};t.exports=p},{123:123,126:126,139:139,147:147,22:22}],14:[function(e,t,n){"use strict";var r=e(154),o=[r({ResponderEventPlugin:null}),r({SimpleEventPlugin:null}),r({TapEventPlugin:null}),r({EnterLeaveEventPlugin:null}),r({ChangeEventPlugin:null}),r({SelectEventPlugin:null}),r({BeforeInputEventPlugin:null}),r({AnalyticsEventPlugin:null}),r({MobileSafariClickEventPlugin:null})];t.exports=o},{154:154}],15:[function(e,t,n){"use strict";var r=e(16),o=e(21),i=e(109),a=e(75),s=e(154),u=r.topLevelTypes,l=a.getFirstReactDOM,c={mouseEnter:{registrationName:s({onMouseEnter:null}),dependencies:[u.topMouseOut,u.topMouseOver]},mouseLeave:{registrationName:s({onMouseLeave:null}),dependencies:[u.topMouseOut,u.topMouseOver]}},p=[null,null],d={eventTypes:c,extractEvents:function(e,t,n,r){if(e===u.topMouseOver&&(r.relatedTarget||r.fromElement))return null;if(e!==u.topMouseOut&&e!==u.topMouseOver)return null;var s;if(t.window===t)s=t;else{var d=t.ownerDocument;s=d?d.defaultView||d.parentWindow:window}var f,h;if(e===u.topMouseOut?(f=t,h=l(r.relatedTarget||r.toElement)||s):(f=s,h=t),f===h)return null;var m=f?a.getID(f):"",v=h?a.getID(h):"",g=i.getPooled(c.mouseLeave,m,r);g.type="mouseleave",g.target=f,g.relatedTarget=h;var y=i.getPooled(c.mouseEnter,v,r);return y.type="mouseenter",y.target=h,y.relatedTarget=f,o.accumulateEnterLeaveDispatches(g,y,m,v),p[0]=g,p[1]=y,p}};t.exports=d},{109:109,154:154,16:16,21:21,75:75}],16:[function(e,t,n){"use strict";var r=e(153),o=r({bubbled:null,captured:null}),i=r({topBlur:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topReset:null,topScroll:null,topSelectionChange:null,topSubmit:null,topTextInput:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topWheel:null}),a={topLevelTypes:i,PropagationPhases:o};t.exports=a},{153:153}],17:[function(e,t,n){var r=e(126),o={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!0),{remove:function(){e.removeEventListener(t,n,!0)}}):{remove:r}},registerDefault:function(){}};t.exports=o},{126:126}],18:[function(e,t,n){"use strict";var r=e(19),o=e(20),i=e(115),a=e(132),s=e(147),u={},l=null,c=function(e){if(e){var t=o.executeDispatch,n=r.getPluginModuleForEvent(e);n&&n.executeDispatch&&(t=n.executeDispatch),o.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e)}},p=null,d={injection:{injectMount:o.injection.injectMount,injectInstanceHandle:function(e){p=e},getInstanceHandle:function(){return p},injectEventPluginOrder:r.injectEventPluginOrder,injectEventPluginsByName:r.injectEventPluginsByName},eventNameDispatchConfigs:r.eventNameDispatchConfigs,registrationNameModules:r.registrationNameModules,putListener:function(e,t,n){s(!n||"function"==typeof n);var r=u[t]||(u[t]={});r[e]=n},getListener:function(e,t){var n=u[t];return n&&n[e]},deleteListener:function(e,t){var n=u[t];n&&delete n[e]},deleteAllListeners:function(e){for(var t in u)delete u[t][e]},extractEvents:function(e,t,n,o){for(var a,s=r.plugins,u=0,l=s.length;l>u;u++){var c=s[u];if(c){var p=c.extractEvents(e,t,n,o);p&&(a=i(a,p))}}return a},enqueueEvents:function(e){e&&(l=i(l,e))},processEventQueue:function(){var e=l;l=null,a(e,c),s(!l)},__purge:function(){u={}},__getListenerBank:function(){return u}};t.exports=d},{115:115,132:132,147:147,19:19,20:20}],19:[function(e,t,n){"use strict";function r(){if(s)for(var e in u){var t=u[e],n=s.indexOf(e);if(a(n>-1),!l.plugins[n]){a(t.extractEvents),l.plugins[n]=t;var r=t.eventTypes;for(var i in r)a(o(r[i],t,i))}}}function o(e,t,n){a(!l.eventNameDispatchConfigs.hasOwnProperty(n)),l.eventNameDispatchConfigs[n]=e;var r=e.phasedRegistrationNames;if(r){for(var o in r)if(r.hasOwnProperty(o)){var s=r[o];i(s,t,n)}return!0}return e.registrationName?(i(e.registrationName,t,n),!0):!1}function i(e,t,n){a(!l.registrationNameModules[e]),l.registrationNameModules[e]=t,l.registrationNameDependencies[e]=t.eventTypes[n].dependencies}var a=e(147),s=null,u={},l={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},injectEventPluginOrder:function(e){a(!s),s=Array.prototype.slice.call(e),r()},injectEventPluginsByName:function(e){var t=!1;for(var n in e)if(e.hasOwnProperty(n)){var o=e[n];u.hasOwnProperty(n)&&u[n]===o||(a(!u[n]),u[n]=o,t=!0)}t&&r()},getPluginModuleForEvent:function(e){var t=e.dispatchConfig;if(t.registrationName)return l.registrationNameModules[t.registrationName]||null;for(var n in t.phasedRegistrationNames)if(t.phasedRegistrationNames.hasOwnProperty(n)){var r=l.registrationNameModules[t.phasedRegistrationNames[n]];if(r)return r}return null},_resetEventPlugins:function(){s=null;for(var e in u)u.hasOwnProperty(e)&&delete u[e];l.plugins.length=0;var t=l.eventNameDispatchConfigs;for(var n in t)t.hasOwnProperty(n)&&delete t[n];var r=l.registrationNameModules;for(var o in r)r.hasOwnProperty(o)&&delete r[o]}};t.exports=l},{147:147}],20:[function(e,t,n){"use strict";function r(e){return e===v.topMouseUp||e===v.topTouchEnd||e===v.topTouchCancel}function o(e){return e===v.topMouseMove||e===v.topTouchMove}function i(e){return e===v.topMouseDown||e===v.topTouchStart}function a(e,t){var n=e._dispatchListeners,r=e._dispatchIDs;if(Array.isArray(n))for(var o=0;o<n.length&&!e.isPropagationStopped();o++)t(e,n[o],r[o]);else n&&t(e,n,r)}function s(e,t,n){e.currentTarget=m.Mount.getNode(n);var r=t(e,n);return e.currentTarget=null,r}function u(e,t){a(e,t),e._dispatchListeners=null,e._dispatchIDs=null}function l(e){var t=e._dispatchListeners,n=e._dispatchIDs;if(Array.isArray(t)){for(var r=0;r<t.length&&!e.isPropagationStopped();r++)if(t[r](e,n[r]))return n[r]}else if(t&&t(e,n))return n;return null}function c(e){var t=l(e);return e._dispatchIDs=null,e._dispatchListeners=null,t}function p(e){var t=e._dispatchListeners,n=e._dispatchIDs;h(!Array.isArray(t));var r=t?t(e,n):null;return e._dispatchListeners=null,e._dispatchIDs=null,r}function d(e){return!!e._dispatchListeners}var f=e(16),h=e(147),m={Mount:null,injectMount:function(e){m.Mount=e}},v=f.topLevelTypes,g={isEndish:r,isMoveish:o,isStartish:i,executeDirectDispatch:p,executeDispatch:s,executeDispatchesInOrder:u,executeDispatchesInOrderStopAtTrue:c,hasDispatches:d,injection:m,useTouchEvents:!1};t.exports=g},{147:147,16:16}],21:[function(e,t,n){"use strict";function r(e,t,n){var r=t.dispatchConfig.phasedRegistrationNames[n];return v(e,r)}function o(e,t,n){var o=t?m.bubbled:m.captured,i=r(e,n,o);i&&(n._dispatchListeners=f(n._dispatchListeners,i),n._dispatchIDs=f(n._dispatchIDs,e))}function i(e){e&&e.dispatchConfig.phasedRegistrationNames&&d.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker,o,e)}function a(e,t,n){if(n&&n.dispatchConfig.registrationName){var r=n.dispatchConfig.registrationName,o=v(e,r);o&&(n._dispatchListeners=f(n._dispatchListeners,o),n._dispatchIDs=f(n._dispatchIDs,e))}}function s(e){e&&e.dispatchConfig.registrationName&&a(e.dispatchMarker,null,e)}function u(e){h(e,i)}function l(e,t,n,r){d.injection.getInstanceHandle().traverseEnterLeave(n,r,a,e,t)}function c(e){h(e,s)}var p=e(16),d=e(18),f=e(115),h=e(132),m=p.PropagationPhases,v=d.getListener,g={accumulateTwoPhaseDispatches:u,accumulateDirectDispatches:c,accumulateEnterLeaveDispatches:l};t.exports=g},{115:115,132:132,16:16,18:18}],22:[function(e,t,n){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen,isInWorker:!r};t.exports=o},{}],23:[function(e,t,n){"use strict";function r(e){this._root=e,this._startText=this.getText(),this._fallbackText=null}var o=e(30),i=e(29),a=e(142);i(r.prototype,{getText:function(){return"value"in this._root?this._root.value:this._root[a()]},getData:function(){if(this._fallbackText)return this._fallbackText;var e,t,n=this._startText,r=n.length,o=this.getText(),i=o.length;for(e=0;r>e&&n[e]===o[e];e++);var a=r-e;for(t=1;a>=t&&n[r-t]===o[i-t];t++);var s=t>1?1-t:void 0;return this._fallbackText=o.slice(e,s),this._fallbackText}}),o.addPoolingTo(r),t.exports=r},{142:142,29:29,30:30}],24:[function(e,t,n){"use strict";var r,o=e(11),i=e(22),a=o.injection.MUST_USE_ATTRIBUTE,s=o.injection.MUST_USE_PROPERTY,u=o.injection.HAS_BOOLEAN_VALUE,l=o.injection.HAS_SIDE_EFFECTS,c=o.injection.HAS_NUMERIC_VALUE,p=o.injection.HAS_POSITIVE_NUMERIC_VALUE,d=o.injection.HAS_OVERLOADED_BOOLEAN_VALUE;if(i.canUseDOM){var f=document.implementation;r=f&&f.hasFeature&&f.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}var h={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,acceptCharset:null,accessKey:null,action:null,allowFullScreen:a|u,allowTransparency:a,alt:null,async:u,autoComplete:null,autoPlay:u,cellPadding:null,cellSpacing:null,charSet:a,checked:s|u,classID:a,className:r?a:s,cols:a|p,colSpan:null,content:null,contentEditable:null,contextMenu:a,controls:s|u,coords:null,crossOrigin:null,data:null,dateTime:a,defer:u,dir:null,disabled:a|u,download:d,draggable:null,encType:null,form:a,formAction:a,formEncType:a,formMethod:a,formNoValidate:u,formTarget:a,frameBorder:a,headers:null,height:a,hidden:a|u,high:null,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:s,label:null,lang:null,list:a,loop:s|u,low:null,manifest:a,marginHeight:null,marginWidth:null,max:null,maxLength:a,media:a,mediaGroup:null,method:null,min:null,multiple:s|u,muted:s|u,name:null,noValidate:u,open:u,optimum:null,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:s|u,rel:null,required:u,role:a,rows:a|p,rowSpan:null,sandbox:null,scope:null,scoped:u,scrolling:null,seamless:a|u,selected:s|u,shape:null,size:a|p,sizes:a,span:p,spellCheck:null,src:null,srcDoc:s,srcSet:a,start:c,step:null,style:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:s|l,width:a,wmode:a,autoCapitalize:null,autoCorrect:null,itemProp:a,itemScope:a|u,itemType:a,itemID:a,itemRef:a,property:null,unselectable:a},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",encType:"encoding",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"}};t.exports=h},{11:11,22:22}],25:[function(e,t,n){"use strict";var r=e(73),o=e(92),i={linkState:function(e){return new r(this.state[e],o.createStateKeySetter(this,e))}};t.exports=i},{73:73,92:92}],26:[function(e,t,n){"use strict";function r(e){l(null==e.props.checkedLink||null==e.props.valueLink)}function o(e){r(e),l(null==e.props.value&&null==e.props.onChange)}function i(e){r(e),l(null==e.props.checked&&null==e.props.onChange)}function a(e){this.props.valueLink.requestChange(e.target.value)}function s(e){this.props.checkedLink.requestChange(e.target.checked)}var u=e(84),l=e(147),c={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},p={Mixin:{propTypes:{value:function(e,t,n){return!e[t]||c[e.type]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t,n){return!e[t]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:u.func}},getValue:function(e){return e.props.valueLink?(o(e),e.props.valueLink.value):e.props.value},getChecked:function(e){return e.props.checkedLink?(i(e),e.props.checkedLink.value):e.props.checked},getOnChange:function(e){return e.props.valueLink?(o(e),a):e.props.checkedLink?(i(e),s):e.props.onChange}};t.exports=p},{147:147,84:84}],27:[function(e,t,n){"use strict";function r(e){e.remove()}var o=e(33),i=e(115),a=e(132),s=e(147),u={trapBubbledEvent:function(e,t){s(this.isMounted());var n=this.getDOMNode();s(n);var r=o.trapBubbledEvent(e,t,n);this._localEventListeners=i(this._localEventListeners,r)},componentWillUnmount:function(){this._localEventListeners&&a(this._localEventListeners,r)}};t.exports=u},{115:115,132:132,147:147,33:33}],28:[function(e,t,n){"use strict";var r=e(16),o=e(126),i=r.topLevelTypes,a={eventTypes:null,extractEvents:function(e,t,n,r){if(e===i.topTouchStart){var a=r.target;a&&!a.onclick&&(a.onclick=o)}}};t.exports=a},{126:126,16:16}],29:[function(e,t,n){"use strict";function r(e,t){if(null==e)throw new TypeError("Object.assign target cannot be null or undefined");for(var n=Object(e),r=Object.prototype.hasOwnProperty,o=1;o<arguments.length;o++){var i=arguments[o];if(null!=i){var a=Object(i);for(var s in a)r.call(a,s)&&(n[s]=a[s])}}return n}t.exports=r},{}],30:[function(e,t,n){"use strict";var r=e(147),o=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},i=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},a=function(e,t,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,n),o}return new r(e,t,n)},s=function(e,t,n,r,o){var i=this;if(i.instancePool.length){var a=i.instancePool.pop();return i.call(a,e,t,n,r,o),a}return new i(e,t,n,r,o)},u=function(e){var t=this;r(e instanceof t),e.destructor&&e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},l=10,c=o,p=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||c,n.poolSize||(n.poolSize=l),n.release=u,n},d={addPoolingTo:p,oneArgumentPooler:o,twoArgumentPooler:i,threeArgumentPooler:a,fiveArgumentPooler:s};t.exports=d},{147:147}],31:[function(e,t,n){"use strict";var r=e(20),o=e(37),i=e(39),a=e(38),s=e(44),u=e(45),l=e(61),c=(e(62),e(46)),p=e(57),d=e(60),f=e(70),h=e(75),m=e(80),v=e(84),g=e(87),y=e(90),C=e(29),E=e(129),b=e(157);d.inject();var _=l.createElement,x=l.createFactory,D=l.cloneElement,M=m.measure("React","render",h.render),T={Children:{map:o.map,forEach:o.forEach,count:o.count,only:b},Component:i,DOM:c,PropTypes:v,initializeTouchEvents:function(e){r.useTouchEvents=e},createClass:a.createClass,createElement:_,cloneElement:D,createFactory:x,createMixin:function(e){return e},constructAndRenderComponent:h.constructAndRenderComponent,constructAndRenderComponentByID:h.constructAndRenderComponentByID,findDOMNode:E,render:M,renderToString:y.renderToString,renderToStaticMarkup:y.renderToStaticMarkup,unmountComponentAtNode:h.unmountComponentAtNode,isValidElement:l.isValidElement,withContext:s.withContext,__spread:C};"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject&&__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({CurrentOwner:u,InstanceHandles:f,Mount:h,Reconciler:g,TextComponent:p});T.version="0.13.3",t.exports=T},{129:129,157:157,20:20,29:29,37:37,38:38,39:39,44:44,45:45,46:46,57:57,60:60,61:61,62:62,70:70,75:75,80:80,84:84,87:87,90:90}],32:[function(e,t,n){"use strict";var r=e(129),o={getDOMNode:function(){return r(this)}};t.exports=o},{129:129}],33:[function(e,t,n){"use strict";function r(e){return Object.prototype.hasOwnProperty.call(e,m)||(e[m]=f++,p[e[m]]={}),p[e[m]]}var o=e(16),i=e(18),a=e(19),s=e(65),u=e(114),l=e(29),c=e(148),p={},d=!1,f=0,h={topBlur:"blur",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topScroll:"scroll",topSelectionChange:"selectionchange",topTextInput:"textInput",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topWheel:"wheel"},m="_reactListenersID"+String(Math.random()).slice(2),v=l({},s,{ReactEventListener:null,injection:{injectReactEventListener:function(e){e.setHandleTopLevel(v.handleTopLevel),v.ReactEventListener=e;

}},setEnabled:function(e){v.ReactEventListener&&v.ReactEventListener.setEnabled(e)},isEnabled:function(){return!(!v.ReactEventListener||!v.ReactEventListener.isEnabled())},listenTo:function(e,t){for(var n=t,i=r(n),s=a.registrationNameDependencies[e],u=o.topLevelTypes,l=0,p=s.length;p>l;l++){var d=s[l];i.hasOwnProperty(d)&&i[d]||(d===u.topWheel?c("wheel")?v.ReactEventListener.trapBubbledEvent(u.topWheel,"wheel",n):c("mousewheel")?v.ReactEventListener.trapBubbledEvent(u.topWheel,"mousewheel",n):v.ReactEventListener.trapBubbledEvent(u.topWheel,"DOMMouseScroll",n):d===u.topScroll?c("scroll",!0)?v.ReactEventListener.trapCapturedEvent(u.topScroll,"scroll",n):v.ReactEventListener.trapBubbledEvent(u.topScroll,"scroll",v.ReactEventListener.WINDOW_HANDLE):d===u.topFocus||d===u.topBlur?(c("focus",!0)?(v.ReactEventListener.trapCapturedEvent(u.topFocus,"focus",n),v.ReactEventListener.trapCapturedEvent(u.topBlur,"blur",n)):c("focusin")&&(v.ReactEventListener.trapBubbledEvent(u.topFocus,"focusin",n),v.ReactEventListener.trapBubbledEvent(u.topBlur,"focusout",n)),i[u.topBlur]=!0,i[u.topFocus]=!0):h.hasOwnProperty(d)&&v.ReactEventListener.trapBubbledEvent(d,h[d],n),i[d]=!0)}},trapBubbledEvent:function(e,t,n){return v.ReactEventListener.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return v.ReactEventListener.trapCapturedEvent(e,t,n)},ensureScrollValueMonitoring:function(){if(!d){var e=u.refreshScrollValues;v.ReactEventListener.monitorScrollValue(e),d=!0}},eventNameDispatchConfigs:i.eventNameDispatchConfigs,registrationNameModules:i.registrationNameModules,putListener:i.putListener,getListener:i.getListener,deleteListener:i.deleteListener,deleteAllListeners:i.deleteAllListeners});t.exports=v},{114:114,148:148,16:16,18:18,19:19,29:29,65:65}],34:[function(e,t,n){"use strict";var r=e(31),o=e(29),i=r.createFactory(e(95)),a=r.createFactory(e(35)),s=r.createClass({displayName:"ReactCSSTransitionGroup",propTypes:{transitionName:r.PropTypes.string.isRequired,transitionAppear:r.PropTypes.bool,transitionEnter:r.PropTypes.bool,transitionLeave:r.PropTypes.bool},getDefaultProps:function(){return{transitionAppear:!1,transitionEnter:!0,transitionLeave:!0}},_wrapChild:function(e){return a({name:this.props.transitionName,appear:this.props.transitionAppear,enter:this.props.transitionEnter,leave:this.props.transitionLeave},e)},render:function(){return i(o({},this.props,{childFactory:this._wrapChild}))}});t.exports=s},{29:29,31:31,35:35,95:95}],35:[function(e,t,n){"use strict";var r=e(31),o=e(4),i=e(94),a=e(157),s=(e(166),17),u=r.createClass({displayName:"ReactCSSTransitionGroupChild",transition:function(e,t){var n=this.getDOMNode(),r=this.props.name+"-"+e,a=r+"-active",s=function(e){e&&e.target!==n||(o.removeClass(n,r),o.removeClass(n,a),i.removeEndEventListener(n,s),t&&t())};i.addEndEventListener(n,s),o.addClass(n,r),this.queueClass(a)},queueClass:function(e){this.classNameQueue.push(e),this.timeout||(this.timeout=setTimeout(this.flushClassNameQueue,s))},flushClassNameQueue:function(){this.isMounted()&&this.classNameQueue.forEach(o.addClass.bind(o,this.getDOMNode())),this.classNameQueue.length=0,this.timeout=null},componentWillMount:function(){this.classNameQueue=[]},componentWillUnmount:function(){this.timeout&&clearTimeout(this.timeout)},componentWillAppear:function(e){this.props.appear?this.transition("appear",e):e()},componentWillEnter:function(e){this.props.enter?this.transition("enter",e):e()},componentWillLeave:function(e){this.props.leave?this.transition("leave",e):e()},render:function(){return a(this.props.children)}});t.exports=u},{157:157,166:166,31:31,4:4,94:94}],36:[function(e,t,n){"use strict";var r=e(87),o=e(130),i=e(146),a=e(162),s={instantiateChildren:function(e,t,n){var r=o(e);for(var a in r)if(r.hasOwnProperty(a)){var s=r[a],u=i(s,null);r[a]=u}return r},updateChildren:function(e,t,n,s){var u=o(t);if(!u&&!e)return null;var l;for(l in u)if(u.hasOwnProperty(l)){var c=e&&e[l],p=c&&c._currentElement,d=u[l];if(a(p,d))r.receiveComponent(c,d,n,s),u[l]=c;else{c&&r.unmountComponent(c,l);var f=i(d,null);u[l]=f}}for(l in e)!e.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||r.unmountComponent(e[l]);return u},unmountChildren:function(e){for(var t in e){var n=e[t];r.unmountComponent(n)}}};t.exports=s},{130:130,146:146,162:162,87:87}],37:[function(e,t,n){"use strict";function r(e,t){this.forEachFunction=e,this.forEachContext=t}function o(e,t,n,r){var o=e;o.forEachFunction.call(o.forEachContext,t,r)}function i(e,t,n){if(null==e)return e;var i=r.getPooled(t,n);f(e,o,i),r.release(i)}function a(e,t,n){this.mapResult=e,this.mapFunction=t,this.mapContext=n}function s(e,t,n,r){var o=e,i=o.mapResult,a=!i.hasOwnProperty(n);if(a){var s=o.mapFunction.call(o.mapContext,t,r);i[n]=s}}function u(e,t,n){if(null==e)return e;var r={},o=a.getPooled(r,t,n);return f(e,s,o),a.release(o),d.create(r)}function l(e,t,n,r){return null}function c(e,t){return f(e,l,null)}var p=e(30),d=e(67),f=e(164),h=(e(166),p.twoArgumentPooler),m=p.threeArgumentPooler;p.addPoolingTo(r,h),p.addPoolingTo(a,m);var v={forEach:i,map:u,count:c};t.exports=v},{164:164,166:166,30:30,67:67}],38:[function(e,t,n){"use strict";function r(e,t){var n=D.hasOwnProperty(t)?D[t]:null;T.hasOwnProperty(t)&&y(n===_.OVERRIDE_BASE),e.hasOwnProperty(t)&&y(n===_.DEFINE_MANY||n===_.DEFINE_MANY_MERGED)}function o(e,t){if(t){y("function"!=typeof t),y(!d.isValidElement(t));var n=e.prototype;t.hasOwnProperty(b)&&M.mixins(e,t.mixins);for(var o in t)if(t.hasOwnProperty(o)&&o!==b){var i=t[o];if(r(n,o),M.hasOwnProperty(o))M[o](e,i);else{var a=D.hasOwnProperty(o),l=n.hasOwnProperty(o),c=i&&i.__reactDontBind,p="function"==typeof i,f=p&&!a&&!l&&!c;if(f)n.__reactAutoBindMap||(n.__reactAutoBindMap={}),n.__reactAutoBindMap[o]=i,n[o]=i;else if(l){var h=D[o];y(a&&(h===_.DEFINE_MANY_MERGED||h===_.DEFINE_MANY)),h===_.DEFINE_MANY_MERGED?n[o]=s(n[o],i):h===_.DEFINE_MANY&&(n[o]=u(n[o],i))}else n[o]=i}}}}function i(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in M;y(!o);var i=n in e;y(!i),e[n]=r}}}function a(e,t){y(e&&t&&"object"==typeof e&&"object"==typeof t);for(var n in t)t.hasOwnProperty(n)&&(y(void 0===e[n]),e[n]=t[n]);return e}function s(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return a(o,n),a(o,r),o}}function u(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function l(e,t){var n=t.bind(e);return n}function c(e){for(var t in e.__reactAutoBindMap)if(e.__reactAutoBindMap.hasOwnProperty(t)){var n=e.__reactAutoBindMap[t];e[t]=l(e,f.guard(n,e.constructor.displayName+"."+t))}}var p=e(39),d=(e(45),e(61)),f=e(64),h=e(71),m=e(72),v=(e(83),e(82),e(96)),g=e(29),y=e(147),C=e(153),E=e(154),b=(e(166),E({mixins:null})),_=C({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),x=[],D={mixins:_.DEFINE_MANY,statics:_.DEFINE_MANY,propTypes:_.DEFINE_MANY,contextTypes:_.DEFINE_MANY,childContextTypes:_.DEFINE_MANY,getDefaultProps:_.DEFINE_MANY_MERGED,getInitialState:_.DEFINE_MANY_MERGED,getChildContext:_.DEFINE_MANY_MERGED,render:_.DEFINE_ONCE,componentWillMount:_.DEFINE_MANY,componentDidMount:_.DEFINE_MANY,componentWillReceiveProps:_.DEFINE_MANY,shouldComponentUpdate:_.DEFINE_ONCE,componentWillUpdate:_.DEFINE_MANY,componentDidUpdate:_.DEFINE_MANY,componentWillUnmount:_.DEFINE_MANY,updateComponent:_.OVERRIDE_BASE},M={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)o(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=g({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=g({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=s(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=g({},e.propTypes,t)},statics:function(e,t){i(e,t)}},T={replaceState:function(e,t){v.enqueueReplaceState(this,e),t&&v.enqueueCallback(this,t)},isMounted:function(){var e=h.get(this);return e&&e!==m.currentlyMountingInstance},setProps:function(e,t){v.enqueueSetProps(this,e),t&&v.enqueueCallback(this,t)},replaceProps:function(e,t){v.enqueueReplaceProps(this,e),t&&v.enqueueCallback(this,t)}},N=function(){};g(N.prototype,p.prototype,T);var P={createClass:function(e){var t=function(e,t){this.__reactAutoBindMap&&c(this),this.props=e,this.context=t,this.state=null;var n=this.getInitialState?this.getInitialState():null;y("object"==typeof n&&!Array.isArray(n)),this.state=n};t.prototype=new N,t.prototype.constructor=t,x.forEach(o.bind(null,t)),o(t,e),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),y(t.prototype.render);for(var n in D)t.prototype[n]||(t.prototype[n]=null);return t.type=t,t},injection:{injectMixin:function(e){x.push(e)}}};t.exports=P},{147:147,153:153,154:154,166:166,29:29,39:39,45:45,61:61,64:64,71:71,72:72,82:82,83:83,96:96}],39:[function(e,t,n){"use strict";function r(e,t){this.props=e,this.context=t}{var o=e(96),i=e(147);e(166)}r.prototype.setState=function(e,t){i("object"==typeof e||"function"==typeof e||null==e),o.enqueueSetState(this,e),t&&o.enqueueCallback(this,t)},r.prototype.forceUpdate=function(e){o.enqueueForceUpdate(this),e&&o.enqueueCallback(this,e)};t.exports=r},{147:147,166:166,96:96}],40:[function(e,t,n){"use strict";var r=e(50),o=e(75),i={processChildrenUpdates:r.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkupByID:r.dangerouslyReplaceNodeWithMarkupByID,unmountIDFromEnvironment:function(e){o.purgeID(e)}};t.exports=i},{50:50,75:75}],41:[function(e,t,n){"use strict";var r=e(147),o=!1,i={unmountIDFromEnvironment:null,replaceNodeWithMarkupByID:null,processChildrenUpdates:null,injection:{injectEnvironment:function(e){r(!o),i.unmountIDFromEnvironment=e.unmountIDFromEnvironment,i.replaceNodeWithMarkupByID=e.replaceNodeWithMarkupByID,i.processChildrenUpdates=e.processChildrenUpdates,o=!0}}};t.exports=i},{147:147}],42:[function(e,t,n){"use strict";var r=e(161),o={shouldComponentUpdate:function(e,t){return!r(this.props,e)||!r(this.state,t)}};t.exports=o},{161:161}],43:[function(e,t,n){"use strict";function r(e){var t=e._currentElement._owner||null;if(t){var n=t.getName();if(n)return" Check the render method of `"+n+"`."}return""}var o=e(41),i=e(44),a=e(45),s=e(61),u=(e(62),e(71)),l=e(72),c=e(78),p=e(80),d=e(83),f=(e(82),e(87)),h=e(97),m=e(29),v=e(127),g=e(147),y=e(162),C=(e(166),1),E={construct:function(e){this._currentElement=e,this._rootNodeID=null,this._instance=null,this._pendingElement=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._renderedComponent=null,this._context=null,this._mountOrder=0,this._isTopLevel=!1,this._pendingCallbacks=null},mountComponent:function(e,t,n){this._context=n,this._mountOrder=C++,this._rootNodeID=e;var r=this._processProps(this._currentElement.props),o=this._processContext(this._currentElement._context),i=c.getComponentClassForElement(this._currentElement),a=new i(r,o);a.props=r,a.context=o,a.refs=v,this._instance=a,u.set(a,this);var s=a.state;void 0===s&&(a.state=s=null),g("object"==typeof s&&!Array.isArray(s)),this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1;var p,d,h=l.currentlyMountingInstance;l.currentlyMountingInstance=this;try{a.componentWillMount&&(a.componentWillMount(),this._pendingStateQueue&&(a.state=this._processPendingState(a.props,a.context))),p=this._getValidatedChildContext(n),d=this._renderValidatedComponent(p)}finally{l.currentlyMountingInstance=h}this._renderedComponent=this._instantiateReactComponent(d,this._currentElement.type);var m=f.mountComponent(this._renderedComponent,e,t,this._mergeChildContext(n,p));return a.componentDidMount&&t.getReactMountReady().enqueue(a.componentDidMount,a),m},unmountComponent:function(){var e=this._instance;if(e.componentWillUnmount){var t=l.currentlyUnmountingInstance;l.currentlyUnmountingInstance=this;try{e.componentWillUnmount()}finally{l.currentlyUnmountingInstance=t}}f.unmountComponent(this._renderedComponent),this._renderedComponent=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._pendingCallbacks=null,this._pendingElement=null,this._context=null,this._rootNodeID=null,u.remove(e)},_setPropsInternal:function(e,t){var n=this._pendingElement||this._currentElement;this._pendingElement=s.cloneAndReplaceProps(n,m({},n.props,e)),h.enqueueUpdate(this,t)},_maskContext:function(e){var t=null;if("string"==typeof this._currentElement.type)return v;var n=this._currentElement.type.contextTypes;if(!n)return v;t={};for(var r in n)t[r]=e[r];return t},_processContext:function(e){var t=this._maskContext(e);return t},_getValidatedChildContext:function(e){var t=this._instance,n=t.getChildContext&&t.getChildContext();if(n){g("object"==typeof t.constructor.childContextTypes);for(var r in n)g(r in t.constructor.childContextTypes);return n}return null},_mergeChildContext:function(e,t){return t?m({},e,t):e},_processProps:function(e){return e},_checkPropTypes:function(e,t,n){var o=this.getName();for(var i in e)if(e.hasOwnProperty(i)){var a;try{g("function"==typeof e[i]),a=e[i](t,i,o,n)}catch(s){a=s}a instanceof Error&&(r(this),n===d.prop)}},receiveComponent:function(e,t,n){var r=this._currentElement,o=this._context;this._pendingElement=null,this.updateComponent(t,r,e,o,n)},performUpdateIfNecessary:function(e){null!=this._pendingElement&&f.receiveComponent(this,this._pendingElement||this._currentElement,e,this._context),(null!==this._pendingStateQueue||this._pendingForceUpdate)&&this.updateComponent(e,this._currentElement,this._currentElement,this._context,this._context)},_warnIfContextsDiffer:function(e,t){e=this._maskContext(e),t=this._maskContext(t);for(var n=Object.keys(t).sort(),r=(this.getName()||"ReactCompositeComponent",0);r<n.length;r++)n[r]},updateComponent:function(e,t,n,r,o){var i=this._instance,a=i.context,s=i.props;t!==n&&(a=this._processContext(n._context),s=this._processProps(n.props),i.componentWillReceiveProps&&i.componentWillReceiveProps(s,a));var u=this._processPendingState(s,a),l=this._pendingForceUpdate||!i.shouldComponentUpdate||i.shouldComponentUpdate(s,u,a);l?(this._pendingForceUpdate=!1,this._performComponentUpdate(n,s,u,a,e,o)):(this._currentElement=n,this._context=o,i.props=s,i.state=u,i.context=a)},_processPendingState:function(e,t){var n=this._instance,r=this._pendingStateQueue,o=this._pendingReplaceState;if(this._pendingReplaceState=!1,this._pendingStateQueue=null,!r)return n.state;if(o&&1===r.length)return r[0];for(var i=m({},o?r[0]:n.state),a=o?1:0;a<r.length;a++){var s=r[a];m(i,"function"==typeof s?s.call(n,i,e,t):s)}return i},_performComponentUpdate:function(e,t,n,r,o,i){var a=this._instance,s=a.props,u=a.state,l=a.context;a.componentWillUpdate&&a.componentWillUpdate(t,n,r),this._currentElement=e,this._context=i,a.props=t,a.state=n,a.context=r,this._updateRenderedComponent(o,i),a.componentDidUpdate&&o.getReactMountReady().enqueue(a.componentDidUpdate.bind(a,s,u,l),a)},_updateRenderedComponent:function(e,t){var n=this._renderedComponent,r=n._currentElement,o=this._getValidatedChildContext(),i=this._renderValidatedComponent(o);if(y(r,i))f.receiveComponent(n,i,e,this._mergeChildContext(t,o));else{var a=this._rootNodeID,s=n._rootNodeID;f.unmountComponent(n),this._renderedComponent=this._instantiateReactComponent(i,this._currentElement.type);var u=f.mountComponent(this._renderedComponent,a,e,this._mergeChildContext(t,o));this._replaceNodeWithMarkupByID(s,u)}},_replaceNodeWithMarkupByID:function(e,t){o.replaceNodeWithMarkupByID(e,t)},_renderValidatedComponentWithoutOwnerOrContext:function(){var e=this._instance,t=e.render();return t},_renderValidatedComponent:function(e){var t,n=i.current;i.current=this._mergeChildContext(this._currentElement._context,e),a.current=this;try{t=this._renderValidatedComponentWithoutOwnerOrContext()}finally{i.current=n,a.current=null}return g(null===t||t===!1||s.isValidElement(t)),t},attachRef:function(e,t){var n=this.getPublicInstance(),r=n.refs===v?n.refs={}:n.refs;r[e]=t.getPublicInstance()},detachRef:function(e){var t=this.getPublicInstance().refs;delete t[e]},getName:function(){var e=this._currentElement.type,t=this._instance&&this._instance.constructor;return e.displayName||t&&t.displayName||e.name||t&&t.name||null},getPublicInstance:function(){return this._instance},_instantiateReactComponent:null};p.measureMethods(E,"ReactCompositeComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent",_renderValidatedComponent:"_renderValidatedComponent"});var b={Mixin:E};t.exports=b},{127:127,147:147,162:162,166:166,29:29,41:41,44:44,45:45,61:61,62:62,71:71,72:72,78:78,80:80,82:82,83:83,87:87,97:97}],44:[function(e,t,n){"use strict";var r=e(29),o=e(127),i=(e(166),{current:o,withContext:function(e,t){var n,o=i.current;i.current=r({},o,e);try{n=t()}finally{i.current=o}return n}});t.exports=i},{127:127,166:166,29:29}],45:[function(e,t,n){"use strict";var r={current:null};t.exports=r},{}],46:[function(e,t,n){"use strict";function r(e){return o.createFactory(e)}var o=e(61),i=(e(62),e(155)),a=i({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul","var":"var",video:"video",wbr:"wbr",circle:"circle",clipPath:"clipPath",defs:"defs",ellipse:"ellipse",g:"g",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},r);t.exports=a},{155:155,61:61,62:62}],47:[function(e,t,n){"use strict";var r=e(2),o=e(32),i=e(38),a=e(61),s=e(153),u=a.createFactory("button"),l=s({onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0}),c=i.createClass({displayName:"ReactDOMButton",tagName:"BUTTON",mixins:[r,o],render:function(){var e={};for(var t in this.props)!this.props.hasOwnProperty(t)||this.props.disabled&&l[t]||(e[t]=this.props[t]);return u(e,this.props.children)}});t.exports=c},{153:153,2:2,32:32,38:38,61:61}],48:[function(e,t,n){"use strict";function r(e){e&&(null!=e.dangerouslySetInnerHTML&&(g(null==e.children),g("object"==typeof e.dangerouslySetInnerHTML&&"__html"in e.dangerouslySetInnerHTML)),g(null==e.style||"object"==typeof e.style))}function o(e,t,n,r){var o=d.findReactContainerForID(e);if(o){var i=o.nodeType===D?o.ownerDocument:o;E(t,i)}r.getPutListenerQueue().enqueuePutListener(e,t,n)}function i(e){I.call(P,e)||(g(N.test(e)),P[e]=!0)}function a(e){i(e),this._tag=e,this._renderedChildren=null,this._previousStyleCopy=null,this._rootNodeID=null}var s=e(6),u=e(11),l=e(12),c=e(33),p=e(40),d=e(75),f=e(76),h=e(80),m=e(29),v=e(128),g=e(147),y=(e(148),e(154)),C=(e(166),c.deleteListener),E=c.listenTo,b=c.registrationNameModules,_={string:!0,number:!0},x=y({style:null}),D=1,M=null,T={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},N=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,P={},I={}.hasOwnProperty;a.displayName="ReactDOMComponent",a.Mixin={construct:function(e){this._currentElement=e},mountComponent:function(e,t,n){this._rootNodeID=e,r(this._currentElement.props);var o=T[this._tag]?"":"</"+this._tag+">";return this._createOpenTagMarkupAndPutListeners(t)+this._createContentMarkup(t,n)+o},_createOpenTagMarkupAndPutListeners:function(e){var t=this._currentElement.props,n="<"+this._tag;for(var r in t)if(t.hasOwnProperty(r)){var i=t[r];if(null!=i)if(b.hasOwnProperty(r))o(this._rootNodeID,r,i,e);else{r===x&&(i&&(i=this._previousStyleCopy=m({},t.style)),i=s.createMarkupForStyles(i));var a=l.createMarkupForProperty(r,i);a&&(n+=" "+a)}}if(e.renderToStaticMarkup)return n+">";var u=l.createMarkupForID(this._rootNodeID);return n+" "+u+">"},_createContentMarkup:function(e,t){var n="";("listing"===this._tag||"pre"===this._tag||"textarea"===this._tag)&&(n="\n");var r=this._currentElement.props,o=r.dangerouslySetInnerHTML;if(null!=o){if(null!=o.__html)return n+o.__html}else{var i=_[typeof r.children]?r.children:null,a=null!=i?null:r.children;if(null!=i)return n+v(i);if(null!=a){var s=this.mountChildren(a,e,t);return n+s.join("")}}return n},receiveComponent:function(e,t,n){var r=this._currentElement;this._currentElement=e,this.updateComponent(t,r,e,n)},updateComponent:function(e,t,n,o){r(this._currentElement.props),this._updateDOMProperties(t.props,e),this._updateDOMChildren(t.props,e,o)},_updateDOMProperties:function(e,t){var n,r,i,a=this._currentElement.props;for(n in e)if(!a.hasOwnProperty(n)&&e.hasOwnProperty(n))if(n===x){var s=this._previousStyleCopy;for(r in s)s.hasOwnProperty(r)&&(i=i||{},i[r]="");this._previousStyleCopy=null}else b.hasOwnProperty(n)?C(this._rootNodeID,n):(u.isStandardName[n]||u.isCustomAttribute(n))&&M.deletePropertyByID(this._rootNodeID,n);for(n in a){var l=a[n],c=n===x?this._previousStyleCopy:e[n];if(a.hasOwnProperty(n)&&l!==c)if(n===x)if(l?l=this._previousStyleCopy=m({},l):this._previousStyleCopy=null,c){for(r in c)!c.hasOwnProperty(r)||l&&l.hasOwnProperty(r)||(i=i||{},i[r]="");for(r in l)l.hasOwnProperty(r)&&c[r]!==l[r]&&(i=i||{},i[r]=l[r])}else i=l;else b.hasOwnProperty(n)?o(this._rootNodeID,n,l,t):(u.isStandardName[n]||u.isCustomAttribute(n))&&M.updatePropertyByID(this._rootNodeID,n,l)}i&&M.updateStylesByID(this._rootNodeID,i)},_updateDOMChildren:function(e,t,n){var r=this._currentElement.props,o=_[typeof e.children]?e.children:null,i=_[typeof r.children]?r.children:null,a=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,s=r.dangerouslySetInnerHTML&&r.dangerouslySetInnerHTML.__html,u=null!=o?null:e.children,l=null!=i?null:r.children,c=null!=o||null!=a,p=null!=i||null!=s;null!=u&&null==l?this.updateChildren(null,t,n):c&&!p&&this.updateTextContent(""),null!=i?o!==i&&this.updateTextContent(""+i):null!=s?a!==s&&M.updateInnerHTMLByID(this._rootNodeID,s):null!=l&&this.updateChildren(l,t,n)},unmountComponent:function(){this.unmountChildren(),c.deleteAllListeners(this._rootNodeID),p.unmountIDFromEnvironment(this._rootNodeID),this._rootNodeID=null}},h.measureMethods(a,"ReactDOMComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent"}),m(a.prototype,a.Mixin,f.Mixin),a.injection={injectIDOperations:function(e){a.BackendIDOperations=M=e}},t.exports=a},{11:11,12:12,128:128,147:147,148:148,154:154,166:166,29:29,33:33,40:40,6:6,75:75,76:76,80:80}],49:[function(e,t,n){"use strict";var r=e(16),o=e(27),i=e(32),a=e(38),s=e(61),u=s.createFactory("form"),l=a.createClass({displayName:"ReactDOMForm",tagName:"FORM",mixins:[i,o],render:function(){return u(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topReset,"reset"),this.trapBubbledEvent(r.topLevelTypes.topSubmit,"submit")}});t.exports=l},{16:16,27:27,32:32,38:38,61:61}],50:[function(e,t,n){"use strict";var r=e(6),o=e(10),i=e(12),a=e(75),s=e(80),u=e(147),l=e(159),c={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},p={updatePropertyByID:function(e,t,n){var r=a.getNode(e);u(!c.hasOwnProperty(t)),null!=n?i.setValueForProperty(r,t,n):i.deleteValueForProperty(r,t)},deletePropertyByID:function(e,t,n){var r=a.getNode(e);u(!c.hasOwnProperty(t)),i.deleteValueForProperty(r,t,n)},updateStylesByID:function(e,t){var n=a.getNode(e);r.setValueForStyles(n,t)},updateInnerHTMLByID:function(e,t){var n=a.getNode(e);l(n,t)},updateTextContentByID:function(e,t){var n=a.getNode(e);o.updateTextContent(n,t)},dangerouslyReplaceNodeWithMarkupByID:function(e,t){var n=a.getNode(e);o.dangerouslyReplaceNodeWithMarkup(n,t)},dangerouslyProcessChildrenUpdates:function(e,t){for(var n=0;n<e.length;n++)e[n].parentNode=a.getNode(e[n].parentID);o.processUpdates(e,t)}};s.measureMethods(p,"ReactDOMIDOperations",{updatePropertyByID:"updatePropertyByID",deletePropertyByID:"deletePropertyByID",updateStylesByID:"updateStylesByID",updateInnerHTMLByID:"updateInnerHTMLByID",updateTextContentByID:"updateTextContentByID",dangerouslyReplaceNodeWithMarkupByID:"dangerouslyReplaceNodeWithMarkupByID",dangerouslyProcessChildrenUpdates:"dangerouslyProcessChildrenUpdates"}),t.exports=p},{10:10,12:12,147:147,159:159,6:6,75:75,80:80}],51:[function(e,t,n){"use strict";var r=e(16),o=e(27),i=e(32),a=e(38),s=e(61),u=s.createFactory("iframe"),l=a.createClass({displayName:"ReactDOMIframe",tagName:"IFRAME",mixins:[i,o],render:function(){return u(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topLoad,"load")}});t.exports=l},{16:16,27:27,32:32,38:38,61:61}],52:[function(e,t,n){"use strict";var r=e(16),o=e(27),i=e(32),a=e(38),s=e(61),u=s.createFactory("img"),l=a.createClass({displayName:"ReactDOMImg",tagName:"IMG",mixins:[i,o],render:function(){return u(this.props)},componentDidMount:function(){this.trapBubbledEvent(r.topLevelTypes.topLoad,"load"),this.trapBubbledEvent(r.topLevelTypes.topError,"error")}});t.exports=l},{16:16,27:27,32:32,38:38,61:61}],53:[function(e,t,n){"use strict";function r(){this.isMounted()&&this.forceUpdate()}var o=e(2),i=e(12),a=e(26),s=e(32),u=e(38),l=e(61),c=e(75),p=e(97),d=e(29),f=e(147),h=l.createFactory("input"),m={},v=u.createClass({displayName:"ReactDOMInput",tagName:"INPUT",mixins:[o,a.Mixin,s],getInitialState:function(){var e=this.props.defaultValue;return{initialChecked:this.props.defaultChecked||!1,initialValue:null!=e?e:null}},render:function(){var e=d({},this.props);e.defaultChecked=null,e.defaultValue=null;var t=a.getValue(this);e.value=null!=t?t:this.state.initialValue;var n=a.getChecked(this);return e.checked=null!=n?n:this.state.initialChecked,e.onChange=this._handleChange,h(e,this.props.children)},componentDidMount:function(){var e=c.getID(this.getDOMNode());m[e]=this},componentWillUnmount:function(){var e=this.getDOMNode(),t=c.getID(e);delete m[t]},componentDidUpdate:function(e,t,n){var r=this.getDOMNode();null!=this.props.checked&&i.setValueForProperty(r,"checked",this.props.checked||!1);var o=a.getValue(this);null!=o&&i.setValueForProperty(r,"value",""+o)},_handleChange:function(e){var t,n=a.getOnChange(this);n&&(t=n.call(this,e)),p.asap(r,this);var o=this.props.name;if("radio"===this.props.type&&null!=o){for(var i=this.getDOMNode(),s=i;s.parentNode;)s=s.parentNode;for(var u=s.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),l=0,d=u.length;d>l;l++){var h=u[l];if(h!==i&&h.form===i.form){var v=c.getID(h);f(v);var g=m[v];f(g),p.asap(r,g)}}}return t}});t.exports=v},{12:12,147:147,2:2,26:26,29:29,32:32,38:38,61:61,75:75,97:97}],54:[function(e,t,n){"use strict";var r=e(32),o=e(38),i=e(61),a=(e(166),i.createFactory("option")),s=o.createClass({displayName:"ReactDOMOption",tagName:"OPTION",mixins:[r],componentWillMount:function(){},render:function(){return a(this.props,this.props.children)}});t.exports=s},{166:166,32:32,38:38,61:61}],55:[function(e,t,n){"use strict";function r(){if(this._pendingUpdate){this._pendingUpdate=!1;var e=s.getValue(this);null!=e&&this.isMounted()&&i(this,e)}}function o(e,t,n){if(null==e[t])return null;if(e.multiple){if(!Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be an array if `multiple` is true.")}else if(Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be a scalar value if `multiple` is false.")}function i(e,t){var n,r,o,i=e.getDOMNode().options;if(e.props.multiple){for(n={},r=0,o=t.length;o>r;r++)n[""+t[r]]=!0;for(r=0,o=i.length;o>r;r++){var a=n.hasOwnProperty(i[r].value);i[r].selected!==a&&(i[r].selected=a)}}else{for(n=""+t,r=0,o=i.length;o>r;r++)if(i[r].value===n)return void(i[r].selected=!0);i.length&&(i[0].selected=!0)}}var a=e(2),s=e(26),u=e(32),l=e(38),c=e(61),p=e(97),d=e(29),f=c.createFactory("select"),h=l.createClass({displayName:"ReactDOMSelect",tagName:"SELECT",mixins:[a,s.Mixin,u],propTypes:{defaultValue:o,value:o},render:function(){var e=d({},this.props);return e.onChange=this._handleChange,e.value=null,f(e,this.props.children)},componentWillMount:function(){this._pendingUpdate=!1},componentDidMount:function(){var e=s.getValue(this);null!=e?i(this,e):null!=this.props.defaultValue&&i(this,this.props.defaultValue)},componentDidUpdate:function(e){var t=s.getValue(this);null!=t?(this._pendingUpdate=!1,i(this,t)):!e.multiple!=!this.props.multiple&&(null!=this.props.defaultValue?i(this,this.props.defaultValue):i(this,this.props.multiple?[]:""))},_handleChange:function(e){var t,n=s.getOnChange(this);return n&&(t=n.call(this,e)),this._pendingUpdate=!0,p.asap(r,this),t}});t.exports=h},{2:2,26:26,29:29,32:32,38:38,61:61,97:97}],56:[function(e,t,n){"use strict";function r(e,t,n,r){return e===n&&t===r}function o(e){var t=document.selection,n=t.createRange(),r=n.text.length,o=n.duplicate();o.moveToElementText(e),o.setEndPoint("EndToStart",n);var i=o.text.length,a=i+r;return{start:i,end:a}}function i(e){var t=window.getSelection&&window.getSelection();if(!t||0===t.rangeCount)return null;var n=t.anchorNode,o=t.anchorOffset,i=t.focusNode,a=t.focusOffset,s=t.getRangeAt(0),u=r(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),l=u?0:s.toString().length,c=s.cloneRange();c.selectNodeContents(e),c.setEnd(s.startContainer,s.startOffset);var p=r(c.startContainer,c.startOffset,c.endContainer,c.endOffset),d=p?0:c.toString().length,f=d+l,h=document.createRange();h.setStart(n,o),h.setEnd(i,a);var m=h.collapsed;return{start:m?f:d,end:m?d:f}}function a(e,t){var n,r,o=document.selection.createRange().duplicate();"undefined"==typeof t.end?(n=t.start,r=n):t.start>t.end?(n=t.end,r=t.start):(n=t.start,r=t.end),o.moveToElementText(e),o.moveStart("character",n),o.setEndPoint("EndToStart",o),o.moveEnd("character",r-n),o.select()}function s(e,t){if(window.getSelection){var n=window.getSelection(),r=e[c()].length,o=Math.min(t.start,r),i="undefined"==typeof t.end?o:Math.min(t.end,r);if(!n.extend&&o>i){var a=i;i=o,o=a}var s=l(e,o),u=l(e,i);if(s&&u){var p=document.createRange();p.setStart(s.node,s.offset),n.removeAllRanges(),o>i?(n.addRange(p),n.extend(u.node,u.offset)):(p.setEnd(u.node,u.offset),n.addRange(p))}}}var u=e(22),l=e(140),c=e(142),p=u.canUseDOM&&"selection"in document&&!("getSelection"in window),d={getOffsets:p?o:i,setOffsets:p?a:s};t.exports=d},{140:140,142:142,22:22}],57:[function(e,t,n){"use strict";var r=e(12),o=e(40),i=e(48),a=e(29),s=e(128),u=function(e){};a(u.prototype,{construct:function(e){this._currentElement=e,this._stringText=""+e,this._rootNodeID=null,this._mountIndex=0},mountComponent:function(e,t,n){this._rootNodeID=e;var o=s(this._stringText);return t.renderToStaticMarkup?o:"<span "+r.createMarkupForID(e)+">"+o+"</span>"},receiveComponent:function(e,t){if(e!==this._currentElement){this._currentElement=e;var n=""+e;

n!==this._stringText&&(this._stringText=n,i.BackendIDOperations.updateTextContentByID(this._rootNodeID,n))}},unmountComponent:function(){o.unmountIDFromEnvironment(this._rootNodeID)}}),t.exports=u},{12:12,128:128,29:29,40:40,48:48}],58:[function(e,t,n){"use strict";function r(){this.isMounted()&&this.forceUpdate()}var o=e(2),i=e(12),a=e(26),s=e(32),u=e(38),l=e(61),c=e(97),p=e(29),d=e(147),f=(e(166),l.createFactory("textarea")),h=u.createClass({displayName:"ReactDOMTextarea",tagName:"TEXTAREA",mixins:[o,a.Mixin,s],getInitialState:function(){var e=this.props.defaultValue,t=this.props.children;null!=t&&(d(null==e),Array.isArray(t)&&(d(t.length<=1),t=t[0]),e=""+t),null==e&&(e="");var n=a.getValue(this);return{initialValue:""+(null!=n?n:e)}},render:function(){var e=p({},this.props);return d(null==e.dangerouslySetInnerHTML),e.defaultValue=null,e.value=null,e.onChange=this._handleChange,f(e,this.state.initialValue)},componentDidUpdate:function(e,t,n){var r=a.getValue(this);if(null!=r){var o=this.getDOMNode();i.setValueForProperty(o,"value",""+r)}},_handleChange:function(e){var t,n=a.getOnChange(this);return n&&(t=n.call(this,e)),c.asap(r,this),t}});t.exports=h},{12:12,147:147,166:166,2:2,26:26,29:29,32:32,38:38,61:61,97:97}],59:[function(e,t,n){"use strict";function r(){this.reinitializeTransaction()}var o=e(97),i=e(113),a=e(29),s=e(126),u={initialize:s,close:function(){d.isBatchingUpdates=!1}},l={initialize:s,close:o.flushBatchedUpdates.bind(o)},c=[l,u];a(r.prototype,i.Mixin,{getTransactionWrappers:function(){return c}});var p=new r,d={isBatchingUpdates:!1,batchedUpdates:function(e,t,n,r,o){var i=d.isBatchingUpdates;d.isBatchingUpdates=!0,i?e(t,n,r,o):p.perform(e,null,t,n,r,o)}};t.exports=d},{113:113,126:126,29:29,97:97}],60:[function(e,t,n){"use strict";function r(e){return h.createClass({tagName:e.toUpperCase(),render:function(){return new P(e,null,null,null,null,this.props)}})}function o(){R.EventEmitter.injectReactEventListener(I),R.EventPluginHub.injectEventPluginOrder(u),R.EventPluginHub.injectInstanceHandle(w),R.EventPluginHub.injectMount(O),R.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:L,EnterLeaveEventPlugin:l,ChangeEventPlugin:a,MobileSafariClickEventPlugin:d,SelectEventPlugin:A,BeforeInputEventPlugin:i}),R.NativeComponent.injectGenericComponentClass(g),R.NativeComponent.injectTextComponentClass(N),R.NativeComponent.injectAutoWrapper(r),R.Class.injectMixin(f),R.NativeComponent.injectComponentClasses({button:y,form:C,iframe:_,img:E,input:x,option:D,select:M,textarea:T,html:F("html"),head:F("head"),body:F("body")}),R.DOMProperty.injectDOMPropertyConfig(p),R.DOMProperty.injectDOMPropertyConfig(U),R.EmptyComponent.injectEmptyComponent("noscript"),R.Updates.injectReconcileTransaction(S),R.Updates.injectBatchingStrategy(v),R.RootIndex.injectCreateReactRootIndex(c.canUseDOM?s.createReactRootIndex:k.createReactRootIndex),R.Component.injectEnvironment(m),R.DOMComponent.injectIDOperations(b)}var i=e(3),a=e(8),s=e(9),u=e(14),l=e(15),c=e(22),p=e(24),d=e(28),f=e(32),h=e(38),m=e(40),v=e(59),g=e(48),y=e(47),C=e(49),E=e(52),b=e(50),_=e(51),x=e(53),D=e(54),M=e(55),T=e(58),N=e(57),P=e(61),I=e(66),R=e(68),w=e(70),O=e(75),S=e(86),A=e(99),k=e(100),L=e(101),U=e(98),F=e(122);t.exports={inject:o}},{100:100,101:101,122:122,14:14,15:15,22:22,24:24,28:28,3:3,32:32,38:38,40:40,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,57:57,58:58,59:59,61:61,66:66,68:68,70:70,75:75,8:8,86:86,9:9,98:98,99:99}],61:[function(e,t,n){"use strict";var r=e(44),o=e(45),i=e(29),a=(e(166),{key:!0,ref:!0}),s=function(e,t,n,r,o,i){this.type=e,this.key=t,this.ref=n,this._owner=r,this._context=o,this.props=i};s.prototype={_isReactElement:!0},s.createElement=function(e,t,n){var i,u={},l=null,c=null;if(null!=t){c=void 0===t.ref?null:t.ref,l=void 0===t.key?null:""+t.key;for(i in t)t.hasOwnProperty(i)&&!a.hasOwnProperty(i)&&(u[i]=t[i])}var p=arguments.length-2;if(1===p)u.children=n;else if(p>1){for(var d=Array(p),f=0;p>f;f++)d[f]=arguments[f+2];u.children=d}if(e&&e.defaultProps){var h=e.defaultProps;for(i in h)"undefined"==typeof u[i]&&(u[i]=h[i])}return new s(e,l,c,o.current,r.current,u)},s.createFactory=function(e){var t=s.createElement.bind(null,e);return t.type=e,t},s.cloneAndReplaceProps=function(e,t){var n=new s(e.type,e.key,e.ref,e._owner,e._context,t);return n},s.cloneElement=function(e,t,n){var r,u=i({},e.props),l=e.key,c=e.ref,p=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,p=o.current),void 0!==t.key&&(l=""+t.key);for(r in t)t.hasOwnProperty(r)&&!a.hasOwnProperty(r)&&(u[r]=t[r])}var d=arguments.length-2;if(1===d)u.children=n;else if(d>1){for(var f=Array(d),h=0;d>h;h++)f[h]=arguments[h+2];u.children=f}return new s(e.type,l,c,p,e._context,u)},s.isValidElement=function(e){var t=!(!e||!e._isReactElement);return t},t.exports=s},{166:166,29:29,44:44,45:45}],62:[function(e,t,n){"use strict";function r(){if(y.current){var e=y.current.getName();if(e)return" Check the render method of `"+e+"`."}return""}function o(e){var t=e&&e.getPublicInstance();if(!t)return void 0;var n=t.constructor;return n?n.displayName||n.name||void 0:void 0}function i(){var e=y.current;return e&&o(e)||void 0}function a(e,t){e._store.validated||null!=e.key||(e._store.validated=!0,u('Each child in an array or iterator should have a unique "key" prop.',e,t))}function s(e,t,n){D.test(e)&&u("Child objects should have non-numeric keys so ordering is preserved.",t,n)}function u(e,t,n){var r=i(),a="string"==typeof n?n:n.displayName||n.name,s=r||a,u=_[e]||(_[e]={});if(!u.hasOwnProperty(s)){u[s]=!0;var l="";if(t&&t._owner&&t._owner!==y.current){var c=o(t._owner);l=" It was passed a child from "+c+"."}}}function l(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];m.isValidElement(r)&&a(r,t)}else if(m.isValidElement(e))e._store.validated=!0;else if(e){var o=E(e);if(o){if(o!==e.entries)for(var i,u=o.call(e);!(i=u.next()).done;)m.isValidElement(i.value)&&a(i.value,t)}else if("object"==typeof e){var l=v.extractIfFragment(e);for(var c in l)l.hasOwnProperty(c)&&s(c,l[c],t)}}}function c(e,t,n,o){for(var i in t)if(t.hasOwnProperty(i)){var a;try{b("function"==typeof t[i]),a=t[i](n,i,e,o)}catch(s){a=s}a instanceof Error&&!(a.message in x)&&(x[a.message]=!0,r(this))}}function p(e,t){var n=t.type,r="string"==typeof n?n:n.displayName,o=t._owner?t._owner.getPublicInstance().constructor.displayName:null,i=e+"|"+r+"|"+o;if(!M.hasOwnProperty(i)){M[i]=!0;var a="";r&&(a=" <"+r+" />");var s="";o&&(s=" The element was created by "+o+".")}}function d(e,t){return e!==e?t!==t:0===e&&0===t?1/e===1/t:e===t}function f(e){if(e._store){var t=e._store.originalProps,n=e.props;for(var r in n)n.hasOwnProperty(r)&&(t.hasOwnProperty(r)&&d(t[r],n[r])||(p(r,e),t[r]=n[r]))}}function h(e){if(null!=e.type){var t=C.getComponentClassForElement(e),n=t.displayName||t.name;t.propTypes&&c(n,t.propTypes,e.props,g.prop),"function"==typeof t.getDefaultProps}}var m=e(61),v=e(67),g=e(83),y=(e(82),e(45)),C=e(78),E=e(138),b=e(147),_=(e(166),{}),x={},D=/^\d+$/,M={},T={checkAndWarnForMutatedProps:f,createElement:function(e,t,n){var r=m.createElement.apply(this,arguments);if(null==r)return r;for(var o=2;o<arguments.length;o++)l(arguments[o],e);return h(r),r},createFactory:function(e){var t=T.createElement.bind(null,e);return t.type=e,t},cloneElement:function(e,t,n){for(var r=m.cloneElement.apply(this,arguments),o=2;o<arguments.length;o++)l(arguments[o],r.type);return h(r),r}};t.exports=T},{138:138,147:147,166:166,45:45,61:61,67:67,78:78,82:82,83:83}],63:[function(e,t,n){"use strict";function r(e){c[e]=!0}function o(e){delete c[e]}function i(e){return!!c[e]}var a,s=e(61),u=e(71),l=e(147),c={},p={injectEmptyComponent:function(e){a=s.createFactory(e)}},d=function(){};d.prototype.componentDidMount=function(){var e=u.get(this);e&&r(e._rootNodeID)},d.prototype.componentWillUnmount=function(){var e=u.get(this);e&&o(e._rootNodeID)},d.prototype.render=function(){return l(a),a()};var f=s.createElement(d),h={emptyElement:f,injection:p,isNullComponentID:i};t.exports=h},{147:147,61:61,71:71}],64:[function(e,t,n){"use strict";var r={guard:function(e,t){return e}};t.exports=r},{}],65:[function(e,t,n){"use strict";function r(e){o.enqueueEvents(e),o.processEventQueue()}var o=e(18),i={handleTopLevel:function(e,t,n,i){var a=o.extractEvents(e,t,n,i);r(a)}};t.exports=i},{18:18}],66:[function(e,t,n){"use strict";function r(e){var t=p.getID(e),n=c.getReactRootIDFromNodeID(t),r=p.findReactContainerForID(n),o=p.getFirstReactDOM(r);return o}function o(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function i(e){for(var t=p.getFirstReactDOM(h(e.nativeEvent))||window,n=t;n;)e.ancestors.push(n),n=r(n);for(var o=0,i=e.ancestors.length;i>o;o++){t=e.ancestors[o];var a=p.getID(t)||"";v._handleTopLevel(e.topLevelType,t,a,e.nativeEvent)}}function a(e){var t=m(window);e(t)}var s=e(17),u=e(22),l=e(30),c=e(70),p=e(75),d=e(97),f=e(29),h=e(137),m=e(143);f(o.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),l.addPoolingTo(o,l.twoArgumentPooler);var v={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:u.canUseDOM?window:null,setHandleTopLevel:function(e){v._handleTopLevel=e},setEnabled:function(e){v._enabled=!!e},isEnabled:function(){return v._enabled},trapBubbledEvent:function(e,t,n){var r=n;return r?s.listen(r,t,v.dispatchEvent.bind(null,e)):null},trapCapturedEvent:function(e,t,n){var r=n;return r?s.capture(r,t,v.dispatchEvent.bind(null,e)):null},monitorScrollValue:function(e){var t=a.bind(null,e);s.listen(window,"scroll",t)},dispatchEvent:function(e,t){if(v._enabled){var n=o.getPooled(e,t);try{d.batchedUpdates(i,n)}finally{o.release(n)}}}};t.exports=v},{137:137,143:143,17:17,22:22,29:29,30:30,70:70,75:75,97:97}],67:[function(e,t,n){"use strict";var r=(e(61),e(166),{create:function(e){return e},extract:function(e){return e},extractIfFragment:function(e){return e}});t.exports=r},{166:166,61:61}],68:[function(e,t,n){"use strict";var r=e(11),o=e(18),i=e(41),a=e(38),s=e(63),u=e(33),l=e(78),c=e(48),p=e(80),d=e(89),f=e(97),h={Component:i.injection,Class:a.injection,DOMComponent:c.injection,DOMProperty:r.injection,EmptyComponent:s.injection,EventPluginHub:o.injection,EventEmitter:u.injection,NativeComponent:l.injection,Perf:p.injection,RootIndex:d.injection,Updates:f.injection};t.exports=h},{11:11,18:18,33:33,38:38,41:41,48:48,63:63,78:78,80:80,89:89,97:97}],69:[function(e,t,n){"use strict";function r(e){return i(document.documentElement,e)}var o=e(56),i=e(120),a=e(131),s=e(133),u={hasSelectionCapabilities:function(e){return e&&("INPUT"===e.nodeName&&"text"===e.type||"TEXTAREA"===e.nodeName||"true"===e.contentEditable)},getSelectionInformation:function(){var e=s();return{focusedElem:e,selectionRange:u.hasSelectionCapabilities(e)?u.getSelection(e):null}},restoreSelection:function(e){var t=s(),n=e.focusedElem,o=e.selectionRange;t!==n&&r(n)&&(u.hasSelectionCapabilities(n)&&u.setSelection(n,o),a(n))},getSelection:function(e){var t;if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&"INPUT"===e.nodeName){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=o.getOffsets(e);return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,r=t.end;if("undefined"==typeof r&&(r=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length);else if(document.selection&&"INPUT"===e.nodeName){var i=e.createTextRange();i.collapse(!0),i.moveStart("character",n),i.moveEnd("character",r-n),i.select()}else o.setOffsets(e,t)}};t.exports=u},{120:120,131:131,133:133,56:56}],70:[function(e,t,n){"use strict";function r(e){return f+e.toString(36)}function o(e,t){return e.charAt(t)===f||t===e.length}function i(e){return""===e||e.charAt(0)===f&&e.charAt(e.length-1)!==f}function a(e,t){return 0===t.indexOf(e)&&o(t,e.length)}function s(e){return e?e.substr(0,e.lastIndexOf(f)):""}function u(e,t){if(d(i(e)&&i(t)),d(a(e,t)),e===t)return e;var n,r=e.length+h;for(n=r;n<t.length&&!o(t,n);n++);return t.substr(0,n)}function l(e,t){var n=Math.min(e.length,t.length);if(0===n)return"";for(var r=0,a=0;n>=a;a++)if(o(e,a)&&o(t,a))r=a;else if(e.charAt(a)!==t.charAt(a))break;var s=e.substr(0,r);return d(i(s)),s}function c(e,t,n,r,o,i){e=e||"",t=t||"",d(e!==t);var l=a(t,e);d(l||a(e,t));for(var c=0,p=l?s:u,f=e;;f=p(f,t)){var h;if(o&&f===e||i&&f===t||(h=n(f,l,r)),h===!1||f===t)break;d(c++<m)}}var p=e(89),d=e(147),f=".",h=f.length,m=100,v={createReactRootID:function(){return r(p.createReactRootIndex())},createReactID:function(e,t){return e+t},getReactRootIDFromNodeID:function(e){if(e&&e.charAt(0)===f&&e.length>1){var t=e.indexOf(f,1);return t>-1?e.substr(0,t):e}return null},traverseEnterLeave:function(e,t,n,r,o){var i=l(e,t);i!==e&&c(e,i,n,r,!1,!0),i!==t&&c(i,t,n,o,!0,!1)},traverseTwoPhase:function(e,t,n){e&&(c("",e,t,n,!0,!1),c(e,"",t,n,!1,!0))},traverseAncestors:function(e,t,n){c("",e,t,n,!0,!1)},_getFirstCommonAncestorID:l,_getNextDescendantID:u,isAncestorIDOf:a,SEPARATOR:f};t.exports=v},{147:147,89:89}],71:[function(e,t,n){"use strict";var r={remove:function(e){e._reactInternalInstance=void 0},get:function(e){return e._reactInternalInstance},has:function(e){return void 0!==e._reactInternalInstance},set:function(e,t){e._reactInternalInstance=t}};t.exports=r},{}],72:[function(e,t,n){"use strict";var r={currentlyMountingInstance:null,currentlyUnmountingInstance:null};t.exports=r},{}],73:[function(e,t,n){"use strict";function r(e,t){this.value=e,this.requestChange=t}function o(e){var t={value:"undefined"==typeof e?i.PropTypes.any.isRequired:e.isRequired,requestChange:i.PropTypes.func.isRequired};return i.PropTypes.shape(t)}var i=e(31);r.PropTypes={link:o},t.exports=r},{31:31}],74:[function(e,t,n){"use strict";var r=e(116),o={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var t=r(e);return e.replace(">"," "+o.CHECKSUM_ATTR_NAME+'="'+t+'">')},canReuseMarkup:function(e,t){var n=t.getAttribute(o.CHECKSUM_ATTR_NAME);n=n&&parseInt(n,10);var i=r(e);return i===n}};t.exports=o},{116:116}],75:[function(e,t,n){"use strict";function r(e,t){for(var n=Math.min(e.length,t.length),r=0;n>r;r++)if(e.charAt(r)!==t.charAt(r))return r;return e.length===t.length?-1:n}function o(e){var t=I(e);return t&&K.getID(t)}function i(e){var t=a(e);if(t)if(L.hasOwnProperty(t)){var n=L[t];n!==e&&(w(!c(n,t)),L[t]=e)}else L[t]=e;return t}function a(e){return e&&e.getAttribute&&e.getAttribute(k)||""}function s(e,t){var n=a(e);n!==t&&delete L[n],e.setAttribute(k,t),L[t]=e}function u(e){return L.hasOwnProperty(e)&&c(L[e],e)||(L[e]=K.findReactNodeByID(e)),L[e]}function l(e){var t=b.get(e)._rootNodeID;return C.isNullComponentID(t)?null:(L.hasOwnProperty(t)&&c(L[t],t)||(L[t]=K.findReactNodeByID(t)),L[t])}function c(e,t){if(e){w(a(e)===t);var n=K.findReactContainerForID(t);if(n&&P(n,e))return!0}return!1}function p(e){delete L[e]}function d(e){var t=L[e];return t&&c(t,e)?void(W=t):!1}function f(e){W=null,E.traverseAncestors(e,d);var t=W;return W=null,t}function h(e,t,n,r,o){var i=D.mountComponent(e,t,r,N);e._isTopLevel=!0,K._mountImageIntoNode(i,n,o)}function m(e,t,n,r){var o=T.ReactReconcileTransaction.getPooled();o.perform(h,null,e,t,n,o,r),T.ReactReconcileTransaction.release(o)}var v=e(11),g=e(33),y=(e(45),e(61)),C=(e(62),e(63)),E=e(70),b=e(71),_=e(74),x=e(80),D=e(87),M=e(96),T=e(97),N=e(127),P=e(120),I=e(141),R=e(146),w=e(147),O=e(159),S=e(162),A=(e(166),E.SEPARATOR),k=v.ID_ATTRIBUTE_NAME,L={},U=1,F=9,B={},j={},V=[],W=null,K={_instancesByReactRootID:B,scrollMonitor:function(e,t){t()},_updateRootComponent:function(e,t,n,r){return K.scrollMonitor(n,function(){M.enqueueElementInternal(e,t),r&&M.enqueueCallbackInternal(e,r)}),e},_registerComponent:function(e,t){w(t&&(t.nodeType===U||t.nodeType===F)),g.ensureScrollValueMonitoring();var n=K.registerContainer(t);return B[n]=e,n},_renderNewRootComponent:function(e,t,n){var r=R(e,null),o=K._registerComponent(r,t);return T.batchedUpdates(m,r,o,t,n),r},render:function(e,t,n){w(y.isValidElement(e));var r=B[o(t)];if(r){var i=r._currentElement;if(S(i,e))return K._updateRootComponent(r,e,t,n).getPublicInstance();K.unmountComponentAtNode(t)}var a=I(t),s=a&&K.isRenderedByReact(a),u=s&&!r,l=K._renderNewRootComponent(e,t,u).getPublicInstance();return n&&n.call(l),l},constructAndRenderComponent:function(e,t,n){var r=y.createElement(e,t);return K.render(r,n)},constructAndRenderComponentByID:function(e,t,n){var r=document.getElementById(n);return w(r),K.constructAndRenderComponent(e,t,r)},registerContainer:function(e){var t=o(e);return t&&(t=E.getReactRootIDFromNodeID(t)),t||(t=E.createReactRootID()),j[t]=e,t},unmountComponentAtNode:function(e){w(e&&(e.nodeType===U||e.nodeType===F));var t=o(e),n=B[t];return n?(K.unmountComponentFromNode(n,e),delete B[t],delete j[t],!0):!1},unmountComponentFromNode:function(e,t){for(D.unmountComponent(e),t.nodeType===F&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)},findReactContainerForID:function(e){var t=E.getReactRootIDFromNodeID(e),n=j[t];return n},findReactNodeByID:function(e){var t=K.findReactContainerForID(e);return K.findComponentRoot(t,e)},isRenderedByReact:function(e){if(1!==e.nodeType)return!1;var t=K.getID(e);return t?t.charAt(0)===A:!1},getFirstReactDOM:function(e){for(var t=e;t&&t.parentNode!==t;){if(K.isRenderedByReact(t))return t;t=t.parentNode}return null},findComponentRoot:function(e,t){var n=V,r=0,o=f(t)||e;for(n[0]=o.firstChild,n.length=1;r<n.length;){for(var i,a=n[r++];a;){var s=K.getID(a);s?t===s?i=a:E.isAncestorIDOf(s,t)&&(n.length=r=0,n.push(a.firstChild)):n.push(a.firstChild),a=a.nextSibling}if(i)return n.length=0,i}n.length=0,w(!1)},_mountImageIntoNode:function(e,t,n){if(w(t&&(t.nodeType===U||t.nodeType===F)),n){var o=I(t);if(_.canReuseMarkup(e,o))return;var i=o.getAttribute(_.CHECKSUM_ATTR_NAME);o.removeAttribute(_.CHECKSUM_ATTR_NAME);var a=o.outerHTML;o.setAttribute(_.CHECKSUM_ATTR_NAME,i);var s=r(e,a);" (client) "+e.substring(s-20,s+20)+"\n (server) "+a.substring(s-20,s+20),w(t.nodeType!==F)}w(t.nodeType!==F),O(t,e)},getReactRootID:o,getID:i,setID:s,getNode:u,getNodeFromInstance:l,purgeID:p};x.measureMethods(K,"ReactMount",{_renderNewRootComponent:"_renderNewRootComponent",_mountImageIntoNode:"_mountImageIntoNode"}),t.exports=K},{11:11,120:120,127:127,141:141,146:146,147:147,159:159,162:162,166:166,33:33,45:45,61:61,62:62,63:63,70:70,71:71,74:74,80:80,87:87,96:96,97:97}],76:[function(e,t,n){"use strict";function r(e,t,n){h.push({parentID:e,parentNode:null,type:c.INSERT_MARKUP,markupIndex:m.push(t)-1,textContent:null,fromIndex:null,toIndex:n})}function o(e,t,n){h.push({parentID:e,parentNode:null,type:c.MOVE_EXISTING,markupIndex:null,textContent:null,fromIndex:t,toIndex:n})}function i(e,t){h.push({parentID:e,parentNode:null,type:c.REMOVE_NODE,markupIndex:null,textContent:null,fromIndex:t,toIndex:null})}function a(e,t){h.push({parentID:e,parentNode:null,type:c.TEXT_CONTENT,markupIndex:null,textContent:t,fromIndex:null,toIndex:null})}function s(){h.length&&(l.processChildrenUpdates(h,m),u())}function u(){h.length=0,m.length=0}var l=e(41),c=e(77),p=e(87),d=e(36),f=0,h=[],m=[],v={Mixin:{mountChildren:function(e,t,n){var r=d.instantiateChildren(e,t,n);this._renderedChildren=r;var o=[],i=0;for(var a in r)if(r.hasOwnProperty(a)){var s=r[a],u=this._rootNodeID+a,l=p.mountComponent(s,u,t,n);s._mountIndex=i,o.push(l),i++}return o},updateTextContent:function(e){f++;var t=!0;try{var n=this._renderedChildren;d.unmountChildren(n);for(var r in n)n.hasOwnProperty(r)&&this._unmountChildByName(n[r],r);this.setTextContent(e),t=!1}finally{f--,f||(t?u():s())}},updateChildren:function(e,t,n){f++;var r=!0;try{this._updateChildren(e,t,n),r=!1}finally{f--,f||(r?u():s())}},_updateChildren:function(e,t,n){var r=this._renderedChildren,o=d.updateChildren(r,e,t,n);if(this._renderedChildren=o,o||r){var i,a=0,s=0;for(i in o)if(o.hasOwnProperty(i)){var u=r&&r[i],l=o[i];u===l?(this.moveChild(u,s,a),a=Math.max(u._mountIndex,a),u._mountIndex=s):(u&&(a=Math.max(u._mountIndex,a),this._unmountChildByName(u,i)),this._mountChildByNameAtIndex(l,i,s,t,n)),s++}for(i in r)!r.hasOwnProperty(i)||o&&o.hasOwnProperty(i)||this._unmountChildByName(r[i],i)}},unmountChildren:function(){var e=this._renderedChildren;d.unmountChildren(e),this._renderedChildren=null},moveChild:function(e,t,n){e._mountIndex<n&&o(this._rootNodeID,e._mountIndex,t)},createChild:function(e,t){r(this._rootNodeID,t,e._mountIndex)},removeChild:function(e){i(this._rootNodeID,e._mountIndex)},setTextContent:function(e){a(this._rootNodeID,e)},_mountChildByNameAtIndex:function(e,t,n,r,o){var i=this._rootNodeID+t,a=p.mountComponent(e,i,r,o);e._mountIndex=n,this.createChild(e,a)},_unmountChildByName:function(e,t){this.removeChild(e),e._mountIndex=null}}};t.exports=v},{36:36,41:41,77:77,87:87}],77:[function(e,t,n){"use strict";var r=e(153),o=r({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,TEXT_CONTENT:null});t.exports=o},{153:153}],78:[function(e,t,n){"use strict";function r(e){if("function"==typeof e.type)return e.type;var t=e.type,n=p[t];return null==n&&(p[t]=n=l(t)),n}function o(e){return u(c),new c(e.type,e.props)}function i(e){return new d(e)}function a(e){return e instanceof d}var s=e(29),u=e(147),l=null,c=null,p={},d=null,f={injectGenericComponentClass:function(e){c=e},injectTextComponentClass:function(e){d=e},injectComponentClasses:function(e){s(p,e)},injectAutoWrapper:function(e){l=e}},h={getComponentClassForElement:r,createInternalComponent:o,createInstanceForText:i,isTextComponent:a,injection:f};t.exports=h},{147:147,29:29}],79:[function(e,t,n){"use strict";var r=e(147),o={isValidOwner:function(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)},addComponentAsRefTo:function(e,t,n){r(o.isValidOwner(n)),n.attachRef(t,e)},removeComponentAsRefFrom:function(e,t,n){r(o.isValidOwner(n)),n.getPublicInstance().refs[t]===e.getPublicInstance()&&n.detachRef(t)}};t.exports=o},{147:147}],80:[function(e,t,n){"use strict";function r(e,t,n){return n}var o={enableMeasure:!1,storedMeasure:r,measureMethods:function(e,t,n){},measure:function(e,t,n){return n},injection:{injectMeasure:function(e){o.storedMeasure=e}}};t.exports=o},{}],81:[function(e,t,n){"use strict";function r(e){return function(t,n,r){t.hasOwnProperty(n)?t[n]=e(t[n],r):t[n]=r}}function o(e,t){for(var n in t)if(t.hasOwnProperty(n)){var r=l[n];r&&l.hasOwnProperty(n)?r(e,n,t[n]):e.hasOwnProperty(n)||(e[n]=t[n])}return e}var i=e(29),a=e(126),s=e(152),u=r(function(e,t){return i({},t,e)}),l={children:a,className:r(s),style:u},c={mergeProps:function(e,t){return o(i({},e),t)}};t.exports=c},{126:126,152:152,29:29}],82:[function(e,t,n){"use strict";var r={};t.exports=r},{}],83:[function(e,t,n){"use strict";var r=e(153),o=r({prop:null,context:null,childContext:null});t.exports=o},{153:153}],84:[function(e,t,n){"use strict";function r(e){function t(t,n,r,o,i){if(o=o||b,null==n[r]){var a=C[i];return t?new Error("Required "+a+" `"+r+"` was not specified in "+("`"+o+"`.")):null}return e(n,r,o,i)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function o(e){function t(t,n,r,o){var i=t[n],a=m(i);if(a!==e){var s=C[o],u=v(i);return new Error("Invalid "+s+" `"+n+"` of type `"+u+"` "+("supplied to `"+r+"`, expected `"+e+"`."))}return null}return r(t)}function i(){return r(E.thatReturns(null))}function a(e){function t(t,n,r,o){var i=t[n];if(!Array.isArray(i)){var a=C[o],s=m(i);return new Error("Invalid "+a+" `"+n+"` of type "+("`"+s+"` supplied to `"+r+"`, expected an array."))}for(var u=0;u<i.length;u++){var l=e(i,u,r,o);if(l instanceof Error)return l}return null}return r(t)}function s(){function e(e,t,n,r){if(!g.isValidElement(e[t])){var o=C[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactElement."))}return null}return r(e)}function u(e){function t(t,n,r,o){if(!(t[n]instanceof e)){var i=C[o],a=e.name||b;return new Error("Invalid "+i+" `"+n+"` supplied to "+("`"+r+"`, expected instance of `"+a+"`."))}return null}return r(t)}function l(e){function t(t,n,r,o){for(var i=t[n],a=0;a<e.length;a++)if(i===e[a])return null;var s=C[o],u=JSON.stringify(e);return new Error("Invalid "+s+" `"+n+"` of value `"+i+"` "+("supplied to `"+r+"`, expected one of "+u+"."))}return r(t)}function c(e){function t(t,n,r,o){var i=t[n],a=m(i);if("object"!==a){var s=C[o];return new Error("Invalid "+s+" `"+n+"` of type "+("`"+a+"` supplied to `"+r+"`, expected an object."))}for(var u in i)if(i.hasOwnProperty(u)){var l=e(i,u,r,o);if(l instanceof Error)return l}return null}return r(t)}function p(e){function t(t,n,r,o){for(var i=0;i<e.length;i++){var a=e[i];if(null==a(t,n,r,o))return null}var s=C[o];return new Error("Invalid "+s+" `"+n+"` supplied to "+("`"+r+"`."))}return r(t)}function d(){function e(e,t,n,r){if(!h(e[t])){var o=C[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return r(e)}function f(e){function t(t,n,r,o){var i=t[n],a=m(i);if("object"!==a){var s=C[o];return new Error("Invalid "+s+" `"+n+"` of type `"+a+"` "+("supplied to `"+r+"`, expected `object`."))}for(var u in e){var l=e[u];if(l){var c=l(i,u,r,o);if(c)return c}}return null}return r(t)}function h(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(h);if(null===e||g.isValidElement(e))return!0;e=y.extractIfFragment(e);for(var t in e)if(!h(e[t]))return!1;return!0;default:return!1}}function m(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function v(e){var t=m(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}var g=e(61),y=e(67),C=e(82),E=e(126),b="<<anonymous>>",_=s(),x=d(),D={array:o("array"),bool:o("boolean"),func:o("function"),number:o("number"),object:o("object"),string:o("string"),any:i(),arrayOf:a,element:_,instanceOf:u,node:x,objectOf:c,oneOf:l,oneOfType:p,shape:f};t.exports=D},{126:126,61:61,67:67,82:82}],85:[function(e,t,n){"use strict";function r(){this.listenersToPut=[]}var o=e(30),i=e(33),a=e(29);a(r.prototype,{enqueuePutListener:function(e,t,n){this.listenersToPut.push({rootNodeID:e,propKey:t,propValue:n})},putListeners:function(){for(var e=0;e<this.listenersToPut.length;e++){var t=this.listenersToPut[e];i.putListener(t.rootNodeID,t.propKey,t.propValue)}},reset:function(){this.listenersToPut.length=0},destructor:function(){this.reset()}}),o.addPoolingTo(r),t.exports=r},{29:29,30:30,33:33}],86:[function(e,t,n){"use strict";function r(){this.reinitializeTransaction(),this.renderToStaticMarkup=!1,this.reactMountReady=o.getPooled(null),this.putListenerQueue=u.getPooled()}var o=e(7),i=e(30),a=e(33),s=e(69),u=e(85),l=e(113),c=e(29),p={initialize:s.getSelectionInformation,close:s.restoreSelection},d={initialize:function(){var e=a.isEnabled();return a.setEnabled(!1),e},close:function(e){a.setEnabled(e)}},f={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},h={initialize:function(){this.putListenerQueue.reset()},close:function(){this.putListenerQueue.putListeners()}},m=[h,p,d,f],v={getTransactionWrappers:function(){return m},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){o.release(this.reactMountReady),this.reactMountReady=null,u.release(this.putListenerQueue),this.putListenerQueue=null}};c(r.prototype,l.Mixin,v),i.addPoolingTo(r),t.exports=r},{113:113,29:29,30:30,33:33,69:69,7:7,85:85}],87:[function(e,t,n){"use strict";function r(){o.attachRefs(this,this._currentElement)}var o=e(88),i=(e(62),{mountComponent:function(e,t,n,o){var i=e.mountComponent(t,n,o);return n.getReactMountReady().enqueue(r,e),i},unmountComponent:function(e){o.detachRefs(e,e._currentElement),e.unmountComponent()},receiveComponent:function(e,t,n,i){var a=e._currentElement;if(t!==a||null==t._owner){var s=o.shouldUpdateRefs(a,t);s&&o.detachRefs(e,a),e.receiveComponent(t,n,i),s&&n.getReactMountReady().enqueue(r,e)}},performUpdateIfNecessary:function(e,t){e.performUpdateIfNecessary(t)}});t.exports=i},{62:62,88:88}],88:[function(e,t,n){"use strict";function r(e,t,n){"function"==typeof e?e(t.getPublicInstance()):i.addComponentAsRefTo(t,e,n)}function o(e,t,n){"function"==typeof e?e(null):i.removeComponentAsRefFrom(t,e,n)}var i=e(79),a={};a.attachRefs=function(e,t){var n=t.ref;null!=n&&r(n,e,t._owner)},a.shouldUpdateRefs=function(e,t){return t._owner!==e._owner||t.ref!==e.ref},a.detachRefs=function(e,t){var n=t.ref;null!=n&&o(n,e,t._owner)},t.exports=a},{79:79}],89:[function(e,t,n){"use strict";var r={injectCreateReactRootIndex:function(e){o.createReactRootIndex=e}},o={createReactRootIndex:null,injection:r};t.exports=o},{}],90:[function(e,t,n){"use strict";function r(e){p(i.isValidElement(e));var t;try{var n=a.createReactRootID();return t=u.getPooled(!1),t.perform(function(){var r=c(e,null),o=r.mountComponent(n,t,l);return s.addChecksumToMarkup(o)},null)}finally{u.release(t)}}function o(e){p(i.isValidElement(e));var t;try{var n=a.createReactRootID();return t=u.getPooled(!0),t.perform(function(){var r=c(e,null);return r.mountComponent(n,t,l)},null)}finally{u.release(t)}}var i=e(61),a=e(70),s=e(74),u=e(91),l=e(127),c=e(146),p=e(147);t.exports={renderToString:r,renderToStaticMarkup:o}},{127:127,146:146,147:147,61:61,70:70,74:74,91:91}],91:[function(e,t,n){"use strict";function r(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.reactMountReady=i.getPooled(null),this.putListenerQueue=a.getPooled()}var o=e(30),i=e(7),a=e(85),s=e(113),u=e(29),l=e(126),c={initialize:function(){this.reactMountReady.reset()},close:l},p={initialize:function(){this.putListenerQueue.reset()},close:l},d=[p,c],f={getTransactionWrappers:function(){return d},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){i.release(this.reactMountReady),this.reactMountReady=null,a.release(this.putListenerQueue),this.putListenerQueue=null}};u(r.prototype,s.Mixin,f),o.addPoolingTo(r),t.exports=r},{113:113,126:126,29:29,30:30,7:7,85:85}],92:[function(e,t,n){"use strict";function r(e,t){var n={};return function(r){n[t]=r,e.setState(n)}}var o={createStateSetter:function(e,t){return function(n,r,o,i,a,s){var u=t.call(e,n,r,o,i,a,s);u&&e.setState(u)}},createStateKeySetter:function(e,t){var n=e.__keySetters||(e.__keySetters={});return n[t]||(n[t]=r(e,t))}};o.Mixin={createStateSetter:function(e){return o.createStateSetter(this,e)},createStateKeySetter:function(e){return o.createStateKeySetter(this,e)}},t.exports=o},{}],93:[function(e,t,n){"use strict";var r=e(37),o=e(67),i={getChildMapping:function(e){return e?o.extract(r.map(e,function(e){return e})):e},mergeChildMappings:function(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var r={},o=[];for(var i in e)t.hasOwnProperty(i)?o.length&&(r[i]=o,o=[]):o.push(i);var a,s={};for(var u in t){if(r.hasOwnProperty(u))for(a=0;a<r[u].length;a++){var l=r[u][a];s[r[u][a]]=n(l)}s[u]=n(u)}for(a=0;a<o.length;a++)s[o[a]]=n(o[a]);return s}};t.exports=i},{37:37,67:67}],94:[function(e,t,n){"use strict";function r(){var e=document.createElement("div"),t=e.style;"AnimationEvent"in window||delete s.animationend.animation,"TransitionEvent"in window||delete s.transitionend.transition;for(var n in s){var r=s[n];for(var o in r)if(o in t){u.push(r[o]);break}}}function o(e,t,n){e.addEventListener(t,n,!1)}function i(e,t,n){e.removeEventListener(t,n,!1)}var a=e(22),s={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},u=[];a.canUseDOM&&r();var l={addEndEventListener:function(e,t){
return 0===u.length?void window.setTimeout(t,0):void u.forEach(function(n){o(e,n,t)})},removeEndEventListener:function(e,t){0!==u.length&&u.forEach(function(n){i(e,n,t)})}};t.exports=l},{22:22}],95:[function(e,t,n){"use strict";var r=e(31),o=e(93),i=e(29),a=e(119),s=e(126),u=r.createClass({displayName:"ReactTransitionGroup",propTypes:{component:r.PropTypes.any,childFactory:r.PropTypes.func},getDefaultProps:function(){return{component:"span",childFactory:s.thatReturnsArgument}},getInitialState:function(){return{children:o.getChildMapping(this.props.children)}},componentWillMount:function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},componentDidMount:function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t)},componentWillReceiveProps:function(e){var t=o.getChildMapping(e.children),n=this.state.children;this.setState({children:o.mergeChildMappings(n,t)});var r;for(r in t){var i=n&&n.hasOwnProperty(r);!t[r]||i||this.currentlyTransitioningKeys[r]||this.keysToEnter.push(r)}for(r in n){var a=t&&t.hasOwnProperty(r);!n[r]||a||this.currentlyTransitioningKeys[r]||this.keysToLeave.push(r)}},componentDidUpdate:function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave)},performAppear:function(e){this.currentlyTransitioningKeys[e]=!0;var t=this.refs[e];t.componentWillAppear?t.componentWillAppear(this._handleDoneAppearing.bind(this,e)):this._handleDoneAppearing(e)},_handleDoneAppearing:function(e){var t=this.refs[e];t.componentDidAppear&&t.componentDidAppear(),delete this.currentlyTransitioningKeys[e];var n=o.getChildMapping(this.props.children);n&&n.hasOwnProperty(e)||this.performLeave(e)},performEnter:function(e){this.currentlyTransitioningKeys[e]=!0;var t=this.refs[e];t.componentWillEnter?t.componentWillEnter(this._handleDoneEntering.bind(this,e)):this._handleDoneEntering(e)},_handleDoneEntering:function(e){var t=this.refs[e];t.componentDidEnter&&t.componentDidEnter(),delete this.currentlyTransitioningKeys[e];var n=o.getChildMapping(this.props.children);n&&n.hasOwnProperty(e)||this.performLeave(e)},performLeave:function(e){this.currentlyTransitioningKeys[e]=!0;var t=this.refs[e];t.componentWillLeave?t.componentWillLeave(this._handleDoneLeaving.bind(this,e)):this._handleDoneLeaving(e)},_handleDoneLeaving:function(e){var t=this.refs[e];t.componentDidLeave&&t.componentDidLeave(),delete this.currentlyTransitioningKeys[e];var n=o.getChildMapping(this.props.children);if(n&&n.hasOwnProperty(e))this.performEnter(e);else{var r=i({},this.state.children);delete r[e],this.setState({children:r})}},render:function(){var e=[];for(var t in this.state.children){var n=this.state.children[t];n&&e.push(a(this.props.childFactory(n),{ref:t,key:t}))}return r.createElement(this.props.component,this.props,e)}});t.exports=u},{119:119,126:126,29:29,31:31,93:93}],96:[function(e,t,n){"use strict";function r(e){e!==i.currentlyMountingInstance&&l.enqueueUpdate(e)}function o(e,t){p(null==a.current);var n=u.get(e);return n?n===i.currentlyUnmountingInstance?null:n:null}var i=e(72),a=e(45),s=e(61),u=e(71),l=e(97),c=e(29),p=e(147),d=(e(166),{enqueueCallback:function(e,t){p("function"==typeof t);var n=o(e);return n&&n!==i.currentlyMountingInstance?(n._pendingCallbacks?n._pendingCallbacks.push(t):n._pendingCallbacks=[t],void r(n)):null},enqueueCallbackInternal:function(e,t){p("function"==typeof t),e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t],r(e)},enqueueForceUpdate:function(e){var t=o(e,"forceUpdate");t&&(t._pendingForceUpdate=!0,r(t))},enqueueReplaceState:function(e,t){var n=o(e,"replaceState");n&&(n._pendingStateQueue=[t],n._pendingReplaceState=!0,r(n))},enqueueSetState:function(e,t){var n=o(e,"setState");if(n){var i=n._pendingStateQueue||(n._pendingStateQueue=[]);i.push(t),r(n)}},enqueueSetProps:function(e,t){var n=o(e,"setProps");if(n){p(n._isTopLevel);var i=n._pendingElement||n._currentElement,a=c({},i.props,t);n._pendingElement=s.cloneAndReplaceProps(i,a),r(n)}},enqueueReplaceProps:function(e,t){var n=o(e,"replaceProps");if(n){p(n._isTopLevel);var i=n._pendingElement||n._currentElement;n._pendingElement=s.cloneAndReplaceProps(i,t),r(n)}},enqueueElementInternal:function(e,t){e._pendingElement=t,r(e)}});t.exports=d},{147:147,166:166,29:29,45:45,61:61,71:71,72:72,97:97}],97:[function(e,t,n){"use strict";function r(){v(T.ReactReconcileTransaction&&E)}function o(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=c.getPooled(),this.reconcileTransaction=T.ReactReconcileTransaction.getPooled()}function i(e,t,n,o,i){r(),E.batchedUpdates(e,t,n,o,i)}function a(e,t){return e._mountOrder-t._mountOrder}function s(e){var t=e.dirtyComponentsLength;v(t===g.length),g.sort(a);for(var n=0;t>n;n++){var r=g[n],o=r._pendingCallbacks;if(r._pendingCallbacks=null,f.performUpdateIfNecessary(r,e.reconcileTransaction),o)for(var i=0;i<o.length;i++)e.callbackQueue.enqueue(o[i],r.getPublicInstance())}}function u(e){return r(),E.isBatchingUpdates?void g.push(e):void E.batchedUpdates(u,e)}function l(e,t){v(E.isBatchingUpdates),y.enqueue(e,t),C=!0}var c=e(7),p=e(30),d=(e(45),e(80)),f=e(87),h=e(113),m=e(29),v=e(147),g=(e(166),[]),y=c.getPooled(),C=!1,E=null,b={initialize:function(){this.dirtyComponentsLength=g.length},close:function(){this.dirtyComponentsLength!==g.length?(g.splice(0,this.dirtyComponentsLength),D()):g.length=0}},_={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}},x=[b,_];m(o.prototype,h.Mixin,{getTransactionWrappers:function(){return x},destructor:function(){this.dirtyComponentsLength=null,c.release(this.callbackQueue),this.callbackQueue=null,T.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(e,t,n){return h.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,n)}}),p.addPoolingTo(o);var D=function(){for(;g.length||C;){if(g.length){var e=o.getPooled();e.perform(s,null,e),o.release(e)}if(C){C=!1;var t=y;y=c.getPooled(),t.notifyAll(),c.release(t)}}};D=d.measure("ReactUpdates","flushBatchedUpdates",D);var M={injectReconcileTransaction:function(e){v(e),T.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){v(e),v("function"==typeof e.batchedUpdates),v("boolean"==typeof e.isBatchingUpdates),E=e}},T={ReactReconcileTransaction:null,batchedUpdates:i,enqueueUpdate:u,flushBatchedUpdates:D,injection:M,asap:l};t.exports=T},{113:113,147:147,166:166,29:29,30:30,45:45,7:7,80:80,87:87}],98:[function(e,t,n){"use strict";var r=e(11),o=r.injection.MUST_USE_ATTRIBUTE,i={Properties:{clipPath:o,cx:o,cy:o,d:o,dx:o,dy:o,fill:o,fillOpacity:o,fontFamily:o,fontSize:o,fx:o,fy:o,gradientTransform:o,gradientUnits:o,markerEnd:o,markerMid:o,markerStart:o,offset:o,opacity:o,patternContentUnits:o,patternUnits:o,points:o,preserveAspectRatio:o,r:o,rx:o,ry:o,spreadMethod:o,stopColor:o,stopOpacity:o,stroke:o,strokeDasharray:o,strokeLinecap:o,strokeOpacity:o,strokeWidth:o,textAnchor:o,transform:o,version:o,viewBox:o,x1:o,x2:o,x:o,y1:o,y2:o,y:o},DOMAttributeNames:{clipPath:"clip-path",fillOpacity:"fill-opacity",fontFamily:"font-family",fontSize:"font-size",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",patternContentUnits:"patternContentUnits",patternUnits:"patternUnits",preserveAspectRatio:"preserveAspectRatio",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeLinecap:"stroke-linecap",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",viewBox:"viewBox"}};t.exports=i},{11:11}],99:[function(e,t,n){"use strict";function r(e){if("selectionStart"in e&&s.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange();return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}function o(e){if(y||null==m||m!==l())return null;var t=r(m);if(!g||!d(g,t)){g=t;var n=u.getPooled(h.select,v,e);return n.type="select",n.target=m,a.accumulateTwoPhaseDispatches(n),n}}var i=e(16),a=e(21),s=e(69),u=e(105),l=e(133),c=e(150),p=e(154),d=e(161),f=i.topLevelTypes,h={select:{phasedRegistrationNames:{bubbled:p({onSelect:null}),captured:p({onSelectCapture:null})},dependencies:[f.topBlur,f.topContextMenu,f.topFocus,f.topKeyDown,f.topMouseDown,f.topMouseUp,f.topSelectionChange]}},m=null,v=null,g=null,y=!1,C={eventTypes:h,extractEvents:function(e,t,n,r){switch(e){case f.topFocus:(c(t)||"true"===t.contentEditable)&&(m=t,v=n,g=null);break;case f.topBlur:m=null,v=null,g=null;break;case f.topMouseDown:y=!0;break;case f.topContextMenu:case f.topMouseUp:return y=!1,o(r);case f.topSelectionChange:case f.topKeyDown:case f.topKeyUp:return o(r)}}};t.exports=C},{105:105,133:133,150:150,154:154,16:16,161:161,21:21,69:69}],100:[function(e,t,n){"use strict";var r=Math.pow(2,53),o={createReactRootIndex:function(){return Math.ceil(Math.random()*r)}};t.exports=o},{}],101:[function(e,t,n){"use strict";var r=e(16),o=e(20),i=e(21),a=e(102),s=e(105),u=e(106),l=e(108),c=e(109),p=e(104),d=e(110),f=e(111),h=e(112),m=e(134),v=e(147),g=e(154),y=(e(166),r.topLevelTypes),C={blur:{phasedRegistrationNames:{bubbled:g({onBlur:!0}),captured:g({onBlurCapture:!0})}},click:{phasedRegistrationNames:{bubbled:g({onClick:!0}),captured:g({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:g({onContextMenu:!0}),captured:g({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:g({onCopy:!0}),captured:g({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:g({onCut:!0}),captured:g({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:g({onDoubleClick:!0}),captured:g({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:g({onDrag:!0}),captured:g({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:g({onDragEnd:!0}),captured:g({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:g({onDragEnter:!0}),captured:g({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:g({onDragExit:!0}),captured:g({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:g({onDragLeave:!0}),captured:g({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:g({onDragOver:!0}),captured:g({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:g({onDragStart:!0}),captured:g({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:g({onDrop:!0}),captured:g({onDropCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:g({onFocus:!0}),captured:g({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:g({onInput:!0}),captured:g({onInputCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:g({onKeyDown:!0}),captured:g({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:g({onKeyPress:!0}),captured:g({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:g({onKeyUp:!0}),captured:g({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:g({onLoad:!0}),captured:g({onLoadCapture:!0})}},error:{phasedRegistrationNames:{bubbled:g({onError:!0}),captured:g({onErrorCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:g({onMouseDown:!0}),captured:g({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:g({onMouseMove:!0}),captured:g({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:g({onMouseOut:!0}),captured:g({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:g({onMouseOver:!0}),captured:g({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:g({onMouseUp:!0}),captured:g({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:g({onPaste:!0}),captured:g({onPasteCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:g({onReset:!0}),captured:g({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:g({onScroll:!0}),captured:g({onScrollCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:g({onSubmit:!0}),captured:g({onSubmitCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:g({onTouchCancel:!0}),captured:g({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:g({onTouchEnd:!0}),captured:g({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:g({onTouchMove:!0}),captured:g({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:g({onTouchStart:!0}),captured:g({onTouchStartCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:g({onWheel:!0}),captured:g({onWheelCapture:!0})}}},E={topBlur:C.blur,topClick:C.click,topContextMenu:C.contextMenu,topCopy:C.copy,topCut:C.cut,topDoubleClick:C.doubleClick,topDrag:C.drag,topDragEnd:C.dragEnd,topDragEnter:C.dragEnter,topDragExit:C.dragExit,topDragLeave:C.dragLeave,topDragOver:C.dragOver,topDragStart:C.dragStart,topDrop:C.drop,topError:C.error,topFocus:C.focus,topInput:C.input,topKeyDown:C.keyDown,topKeyPress:C.keyPress,topKeyUp:C.keyUp,topLoad:C.load,topMouseDown:C.mouseDown,topMouseMove:C.mouseMove,topMouseOut:C.mouseOut,topMouseOver:C.mouseOver,topMouseUp:C.mouseUp,topPaste:C.paste,topReset:C.reset,topScroll:C.scroll,topSubmit:C.submit,topTouchCancel:C.touchCancel,topTouchEnd:C.touchEnd,topTouchMove:C.touchMove,topTouchStart:C.touchStart,topWheel:C.wheel};for(var b in E)E[b].dependencies=[b];var _={eventTypes:C,executeDispatch:function(e,t,n){var r=o.executeDispatch(e,t,n);r===!1&&(e.stopPropagation(),e.preventDefault())},extractEvents:function(e,t,n,r){var o=E[e];if(!o)return null;var g;switch(e){case y.topInput:case y.topLoad:case y.topError:case y.topReset:case y.topSubmit:g=s;break;case y.topKeyPress:if(0===m(r))return null;case y.topKeyDown:case y.topKeyUp:g=l;break;case y.topBlur:case y.topFocus:g=u;break;case y.topClick:if(2===r.button)return null;case y.topContextMenu:case y.topDoubleClick:case y.topMouseDown:case y.topMouseMove:case y.topMouseOut:case y.topMouseOver:case y.topMouseUp:g=c;break;case y.topDrag:case y.topDragEnd:case y.topDragEnter:case y.topDragExit:case y.topDragLeave:case y.topDragOver:case y.topDragStart:case y.topDrop:g=p;break;case y.topTouchCancel:case y.topTouchEnd:case y.topTouchMove:case y.topTouchStart:g=d;break;case y.topScroll:g=f;break;case y.topWheel:g=h;break;case y.topCopy:case y.topCut:case y.topPaste:g=a}v(g);var C=g.getPooled(o,n,r);return i.accumulateTwoPhaseDispatches(C),C}};t.exports=_},{102:102,104:104,105:105,106:106,108:108,109:109,110:110,111:111,112:112,134:134,147:147,154:154,16:16,166:166,20:20,21:21}],102:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(105),i={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}};o.augmentClass(r,i),t.exports=r},{105:105}],103:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(105),i={data:null};o.augmentClass(r,i),t.exports=r},{105:105}],104:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(109),i={dataTransfer:null};o.augmentClass(r,i),t.exports=r},{109:109}],105:[function(e,t,n){"use strict";function r(e,t,n){this.dispatchConfig=e,this.dispatchMarker=t,this.nativeEvent=n;var r=this.constructor.Interface;for(var o in r)if(r.hasOwnProperty(o)){var i=r[o];i?this[o]=i(n):this[o]=n[o]}var s=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1;s?this.isDefaultPrevented=a.thatReturnsTrue:this.isDefaultPrevented=a.thatReturnsFalse,this.isPropagationStopped=a.thatReturnsFalse}var o=e(30),i=e(29),a=e(126),s=e(137),u={type:null,target:s,currentTarget:a.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};i(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e.preventDefault?e.preventDefault():e.returnValue=!1,this.isDefaultPrevented=a.thatReturnsTrue},stopPropagation:function(){var e=this.nativeEvent;e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,this.isPropagationStopped=a.thatReturnsTrue},persist:function(){this.isPersistent=a.thatReturnsTrue},isPersistent:a.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface;for(var t in e)this[t]=null;this.dispatchConfig=null,this.dispatchMarker=null,this.nativeEvent=null}}),r.Interface=u,r.augmentClass=function(e,t){var n=this,r=Object.create(n.prototype);i(r,e.prototype),e.prototype=r,e.prototype.constructor=e,e.Interface=i({},n.Interface,t),e.augmentClass=n.augmentClass,o.addPoolingTo(e,o.threeArgumentPooler)},o.addPoolingTo(r,o.threeArgumentPooler),t.exports=r},{126:126,137:137,29:29,30:30}],106:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(111),i={relatedTarget:null};o.augmentClass(r,i),t.exports=r},{111:111}],107:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(105),i={data:null};o.augmentClass(r,i),t.exports=r},{105:105}],108:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(111),i=e(134),a=e(135),s=e(136),u={key:a,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:s,charCode:function(e){return"keypress"===e.type?i(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?i(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};o.augmentClass(r,u),t.exports=r},{111:111,134:134,135:135,136:136}],109:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(111),i=e(114),a=e(136),s={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:a,button:function(e){var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+i.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+i.currentScrollTop}};o.augmentClass(r,s),t.exports=r},{111:111,114:114,136:136}],110:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(111),i=e(136),a={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:i};o.augmentClass(r,a),t.exports=r},{111:111,136:136}],111:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(105),i=e(137),a={view:function(e){if(e.view)return e.view;var t=i(e);if(null!=t&&t.window===t)return t;var n=t.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};o.augmentClass(r,a),t.exports=r},{105:105,137:137}],112:[function(e,t,n){"use strict";function r(e,t,n){o.call(this,e,t,n)}var o=e(109),i={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null};o.augmentClass(r,i),t.exports=r},{109:109}],113:[function(e,t,n){"use strict";var r=e(147),o={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(e,t,n,o,i,a,s,u){r(!this.isInTransaction());var l,c;try{this._isInTransaction=!0,l=!0,this.initializeAll(0),c=e.call(t,n,o,i,a,s,u),l=!1}finally{try{if(l)try{this.closeAll(0)}catch(p){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return c},initializeAll:function(e){for(var t=this.transactionWrappers,n=e;n<t.length;n++){var r=t[n];try{this.wrapperInitData[n]=i.OBSERVED_ERROR,this.wrapperInitData[n]=r.initialize?r.initialize.call(this):null}finally{if(this.wrapperInitData[n]===i.OBSERVED_ERROR)try{this.initializeAll(n+1)}catch(o){}}}},closeAll:function(e){r(this.isInTransaction());for(var t=this.transactionWrappers,n=e;n<t.length;n++){var o,a=t[n],s=this.wrapperInitData[n];try{o=!0,s!==i.OBSERVED_ERROR&&a.close&&a.close.call(this,s),o=!1}finally{if(o)try{this.closeAll(n+1)}catch(u){}}}this.wrapperInitData.length=0}},i={Mixin:o,OBSERVED_ERROR:{}};t.exports=i},{147:147}],114:[function(e,t,n){"use strict";var r={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(e){r.currentScrollLeft=e.x,r.currentScrollTop=e.y}};t.exports=r},{}],115:[function(e,t,n){"use strict";function r(e,t){if(o(null!=t),null==e)return t;var n=Array.isArray(e),r=Array.isArray(t);return n&&r?(e.push.apply(e,t),e):n?(e.push(t),e):r?[e].concat(t):[e,t]}var o=e(147);t.exports=r},{147:147}],116:[function(e,t,n){"use strict";function r(e){for(var t=1,n=0,r=0;r<e.length;r++)t=(t+e.charCodeAt(r))%o,n=(n+t)%o;return t|n<<16}var o=65521;t.exports=r},{}],117:[function(e,t,n){function r(e){return e.replace(o,function(e,t){return t.toUpperCase()})}var o=/-(.)/g;t.exports=r},{}],118:[function(e,t,n){"use strict";function r(e){return o(e.replace(i,"ms-"))}var o=e(117),i=/^-ms-/;t.exports=r},{117:117}],119:[function(e,t,n){"use strict";function r(e,t){var n=i.mergeProps(t,e.props);return!n.hasOwnProperty(s)&&e.props.hasOwnProperty(s)&&(n.children=e.props.children),o.createElement(e.type,n)}var o=e(61),i=e(81),a=e(154),s=(e(166),a({children:null}));t.exports=r},{154:154,166:166,61:61,81:81}],120:[function(e,t,n){function r(e,t){return e&&t?e===t?!0:o(e)?!1:o(t)?r(e,t.parentNode):e.contains?e.contains(t):e.compareDocumentPosition?!!(16&e.compareDocumentPosition(t)):!1:!1}var o=e(151);t.exports=r},{151:151}],121:[function(e,t,n){function r(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"length"in e&&!("setInterval"in e)&&"number"!=typeof e.nodeType&&(Array.isArray(e)||"callee"in e||"item"in e)}function o(e){return r(e)?Array.isArray(e)?e.slice():i(e):[e]}var i=e(163);t.exports=o},{163:163}],122:[function(e,t,n){"use strict";function r(e){var t=i.createFactory(e),n=o.createClass({tagName:e.toUpperCase(),displayName:"ReactFullPageComponent"+e,componentWillUnmount:function(){a(!1)},render:function(){return t(this.props)}});return n}var o=e(38),i=e(61),a=e(147);t.exports=r},{147:147,38:38,61:61}],123:[function(e,t,n){function r(e){var t=e.match(c);return t&&t[1].toLowerCase()}function o(e,t){var n=l;u(!!l);var o=r(e),i=o&&s(o);if(i){n.innerHTML=i[1]+e+i[2];for(var c=i[0];c--;)n=n.lastChild}else n.innerHTML=e;var p=n.getElementsByTagName("script");p.length&&(u(t),a(p).forEach(t));for(var d=a(n.childNodes);n.lastChild;)n.removeChild(n.lastChild);return d}var i=e(22),a=e(121),s=e(139),u=e(147),l=i.canUseDOM?document.createElement("div"):null,c=/^\s*<(\w+)/;t.exports=o},{121:121,139:139,147:147,22:22}],124:[function(e,t,n){"use strict";function r(e){return"object"==typeof e?Object.keys(e).filter(function(t){return e[t]}).join(" "):Array.prototype.join.call(arguments," ")}e(166);t.exports=r},{166:166}],125:[function(e,t,n){"use strict";function r(e,t){var n=null==t||"boolean"==typeof t||""===t;if(n)return"";var r=isNaN(t);return r||0===t||i.hasOwnProperty(e)&&i[e]?""+t:("string"==typeof t&&(t=t.trim()),t+"px")}var o=e(5),i=o.isUnitlessNumber;t.exports=r},{5:5}],126:[function(e,t,n){function r(e){return function(){return e}}function o(){}o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},t.exports=o},{}],127:[function(e,t,n){"use strict";var r={};t.exports=r},{}],128:[function(e,t,n){"use strict";function r(e){return i[e]}function o(e){return(""+e).replace(a,r)}var i={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},a=/[&><"']/g;t.exports=o},{}],129:[function(e,t,n){"use strict";function r(e){return null==e?null:s(e)?e:o.has(e)?i.getNodeFromInstance(e):(a(null==e.render||"function"!=typeof e.render),void a(!1))}{var o=(e(45),e(71)),i=e(75),a=e(147),s=e(149);e(166)}t.exports=r},{147:147,149:149,166:166,45:45,71:71,75:75}],130:[function(e,t,n){"use strict";function r(e,t,n){var r=e,o=!r.hasOwnProperty(n);o&&null!=t&&(r[n]=t)}function o(e){if(null==e)return e;var t={};return i(e,r,t),t}{var i=e(164);e(166)}t.exports=o},{164:164,166:166}],131:[function(e,t,n){"use strict";function r(e){try{e.focus()}catch(t){}}t.exports=r},{}],132:[function(e,t,n){"use strict";var r=function(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)};t.exports=r},{}],133:[function(e,t,n){function r(){try{return document.activeElement||document.body}catch(e){return document.body}}t.exports=r},{}],134:[function(e,t,n){"use strict";function r(e){var t,n=e.keyCode;return"charCode"in e?(t=e.charCode,0===t&&13===n&&(t=13)):t=n,t>=32||13===t?t:0}t.exports=r},{}],135:[function(e,t,n){"use strict";function r(e){if(e.key){var t=i[e.key]||e.key;if("Unidentified"!==t)return t}if("keypress"===e.type){var n=o(e);return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?a[e.keyCode]||"Unidentified":""}var o=e(134),i={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};t.exports=r},{134:134}],136:[function(e,t,n){"use strict";function r(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=i[e];return r?!!n[r]:!1}function o(e){return r}var i={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};t.exports=o},{}],137:[function(e,t,n){"use strict";function r(e){var t=e.target||e.srcElement||window;return 3===t.nodeType?t.parentNode:t}t.exports=r},{}],138:[function(e,t,n){"use strict";function r(e){var t=e&&(o&&e[o]||e[i]);return"function"==typeof t?t:void 0}var o="function"==typeof Symbol&&Symbol.iterator,i="@@iterator";t.exports=r},{}],139:[function(e,t,n){function r(e){return i(!!a),d.hasOwnProperty(e)||(e="*"),s.hasOwnProperty(e)||("*"===e?a.innerHTML="<link />":a.innerHTML="<"+e+"></"+e+">",s[e]=!a.firstChild),s[e]?d[e]:null}var o=e(22),i=e(147),a=o.canUseDOM?document.createElement("div"):null,s={circle:!0,clipPath:!0,defs:!0,ellipse:!0,g:!0,line:!0,linearGradient:!0,path:!0,polygon:!0,polyline:!0,radialGradient:!0,rect:!0,stop:!0,text:!0},u=[1,'<select multiple="true">',"</select>"],l=[1,"<table>","</table>"],c=[3,"<table><tbody><tr>","</tr></tbody></table>"],p=[1,"<svg>","</svg>"],d={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:u,option:u,caption:l,colgroup:l,tbody:l,tfoot:l,thead:l,td:c,th:c,circle:p,clipPath:p,defs:p,ellipse:p,g:p,line:p,linearGradient:p,path:p,polygon:p,polyline:p,radialGradient:p,rect:p,stop:p,text:p};t.exports=r},{147:147,22:22}],140:[function(e,t,n){"use strict";function r(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function o(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function i(e,t){for(var n=r(e),i=0,a=0;n;){if(3===n.nodeType){if(a=i+n.textContent.length,t>=i&&a>=t)return{node:n,offset:t-i};i=a}n=r(o(n))}}t.exports=i},{}],141:[function(e,t,n){"use strict";function r(e){return e?e.nodeType===o?e.documentElement:e.firstChild:null}var o=9;t.exports=r},{}],142:[function(e,t,n){"use strict";function r(){return!i&&o.canUseDOM&&(i="textContent"in document.documentElement?"textContent":"innerText"),i}var o=e(22),i=null;t.exports=r},{22:22}],143:[function(e,t,n){"use strict";function r(e){return e===window?{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}:{x:e.scrollLeft,y:e.scrollTop}}t.exports=r},{}],144:[function(e,t,n){function r(e){return e.replace(o,"-$1").toLowerCase()}var o=/([A-Z])/g;t.exports=r},{}],145:[function(e,t,n){"use strict";function r(e){return o(e).replace(i,"-ms-")}var o=e(144),i=/^ms-/;t.exports=r},{144:144}],146:[function(e,t,n){"use strict";function r(e){return"function"==typeof e&&"undefined"!=typeof e.prototype&&"function"==typeof e.prototype.mountComponent&&"function"==typeof e.prototype.receiveComponent}function o(e,t){var n;if((null===e||e===!1)&&(e=a.emptyElement),"object"==typeof e){var o=e;n=t===o.type&&"string"==typeof o.type?s.createInternalComponent(o):r(o.type)?new o.type(o):new c}else"string"==typeof e||"number"==typeof e?n=s.createInstanceForText(e):l(!1);return n.construct(e),n._mountIndex=0,n._mountImage=null,n}var i=e(43),a=e(63),s=e(78),u=e(29),l=e(147),c=(e(166),function(){});u(c.prototype,i.Mixin,{_instantiateReactComponent:o}),t.exports=o},{147:147,166:166,29:29,43:43,63:63,78:78}],147:[function(e,t,n){"use strict";var r=function(e,t,n,r,o,i,a,s){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,i,a,s],c=0;u=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return l[c++]}))}throw u.framesToPop=1,u}};t.exports=r},{}],148:[function(e,t,n){"use strict";function r(e,t){if(!i.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,r=n in document;if(!r){var a=document.createElement("div");a.setAttribute(n,"return;"),r="function"==typeof a[n]}return!r&&o&&"wheel"===e&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}var o,i=e(22);i.canUseDOM&&(o=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),t.exports=r},{22:22}],149:[function(e,t,n){function r(e){return!(!e||!("function"==typeof Node?e instanceof Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}t.exports=r},{}],150:[function(e,t,n){"use strict";function r(e){return e&&("INPUT"===e.nodeName&&o[e.type]||"TEXTAREA"===e.nodeName)}var o={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};t.exports=r},{}],151:[function(e,t,n){function r(e){return o(e)&&3==e.nodeType}var o=e(149);t.exports=r},{149:149}],152:[function(e,t,n){"use strict";function r(e){e||(e="");var t,n=arguments.length;if(n>1)for(var r=1;n>r;r++)t=arguments[r],t&&(e=(e?e+" ":"")+t);return e}t.exports=r},{}],153:[function(e,t,n){"use strict";var r=e(147),o=function(e){var t,n={};r(e instanceof Object&&!Array.isArray(e));for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};t.exports=o},{147:147}],154:[function(e,t,n){var r=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return t;return null};t.exports=r},{}],155:[function(e,t,n){"use strict";function r(e,t,n){if(!e)return null;var r={};for(var i in e)o.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],156:[function(e,t,n){"use strict";function r(e){var t={};return function(n){return t.hasOwnProperty(n)||(t[n]=e.call(this,n)),t[n]}}t.exports=r},{}],157:[function(e,t,n){"use strict";function r(e){return i(o.isValidElement(e)),e}var o=e(61),i=e(147);t.exports=r},{147:147,61:61}],158:[function(e,t,n){"use strict";function r(e){return'"'+o(e)+'"'}var o=e(128);t.exports=r},{128:128}],159:[function(e,t,n){"use strict";var r=e(22),o=/^[ \r\n\t\f]/,i=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,a=function(e,t){
e.innerHTML=t};if("undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction&&(a=function(e,t){MSApp.execUnsafeLocalFunction(function(){e.innerHTML=t})}),r.canUseDOM){var s=document.createElement("div");s.innerHTML=" ",""===s.innerHTML&&(a=function(e,t){if(e.parentNode&&e.parentNode.replaceChild(e,e),o.test(t)||"<"===t[0]&&i.test(t)){e.innerHTML="\ufeff"+t;var n=e.firstChild;1===n.data.length?e.removeChild(n):n.deleteData(0,1)}else e.innerHTML=t})}t.exports=a},{22:22}],160:[function(e,t,n){"use strict";var r=e(22),o=e(128),i=e(159),a=function(e,t){e.textContent=t};r.canUseDOM&&("textContent"in document.documentElement||(a=function(e,t){i(e,o(t))})),t.exports=a},{128:128,159:159,22:22}],161:[function(e,t,n){"use strict";function r(e,t){if(e===t)return!0;var n;for(n in e)if(e.hasOwnProperty(n)&&(!t.hasOwnProperty(n)||e[n]!==t[n]))return!1;for(n in t)if(t.hasOwnProperty(n)&&!e.hasOwnProperty(n))return!1;return!0}t.exports=r},{}],162:[function(e,t,n){"use strict";function r(e,t){if(null!=e&&null!=t){var n=typeof e,r=typeof t;if("string"===n||"number"===n)return"string"===r||"number"===r;if("object"===r&&e.type===t.type&&e.key===t.key){var o=e._owner===t._owner;return o}}return!1}e(166);t.exports=r},{166:166}],163:[function(e,t,n){function r(e){var t=e.length;if(o(!Array.isArray(e)&&("object"==typeof e||"function"==typeof e)),o("number"==typeof t),o(0===t||t-1 in e),e.hasOwnProperty)try{return Array.prototype.slice.call(e)}catch(n){}for(var r=Array(t),i=0;t>i;i++)r[i]=e[i];return r}var o=e(147);t.exports=r},{147:147}],164:[function(e,t,n){"use strict";function r(e){return v[e]}function o(e,t){return e&&null!=e.key?a(e.key):t.toString(36)}function i(e){return(""+e).replace(g,r)}function a(e){return"$"+i(e)}function s(e,t,n,r,i){var u=typeof e;if(("undefined"===u||"boolean"===u)&&(e=null),null===e||"string"===u||"number"===u||l.isValidElement(e))return r(i,e,""===t?h+o(e,0):t,n),1;var p,v,g,y=0;if(Array.isArray(e))for(var C=0;C<e.length;C++)p=e[C],v=(""!==t?t+m:h)+o(p,C),g=n+y,y+=s(p,v,g,r,i);else{var E=d(e);if(E){var b,_=E.call(e);if(E!==e.entries)for(var x=0;!(b=_.next()).done;)p=b.value,v=(""!==t?t+m:h)+o(p,x++),g=n+y,y+=s(p,v,g,r,i);else for(;!(b=_.next()).done;){var D=b.value;D&&(p=D[1],v=(""!==t?t+m:h)+a(D[0])+m+o(p,0),g=n+y,y+=s(p,v,g,r,i))}}else if("object"===u){f(1!==e.nodeType);var M=c.extract(e);for(var T in M)M.hasOwnProperty(T)&&(p=M[T],v=(""!==t?t+m:h)+a(T)+m+o(p,0),g=n+y,y+=s(p,v,g,r,i))}}return y}function u(e,t,n){return null==e?0:s(e,"",0,t,n)}var l=e(61),c=e(67),p=e(70),d=e(138),f=e(147),h=(e(166),p.SEPARATOR),m=":",v={"=":"=0",".":"=1",":":"=2"},g=/[=.:]/g;t.exports=u},{138:138,147:147,166:166,61:61,67:67,70:70}],165:[function(e,t,n){"use strict";function r(e){return Array.isArray(e)?e.concat():e&&"object"==typeof e?a(new e.constructor,e):e}function o(e,t,n){u(Array.isArray(e));var r=t[n];u(Array.isArray(r))}function i(e,t){if(u("object"==typeof t),l.call(t,f))return u(1===Object.keys(t).length),t[f];var n=r(e);if(l.call(t,h)){var s=t[h];u(s&&"object"==typeof s),u(n&&"object"==typeof n),a(n,t[h])}l.call(t,c)&&(o(e,t,c),t[c].forEach(function(e){n.push(e)})),l.call(t,p)&&(o(e,t,p),t[p].forEach(function(e){n.unshift(e)})),l.call(t,d)&&(u(Array.isArray(e)),u(Array.isArray(t[d])),t[d].forEach(function(e){u(Array.isArray(e)),n.splice.apply(n,e)})),l.call(t,m)&&(u("function"==typeof t[m]),n=t[m](n));for(var v in t)g.hasOwnProperty(v)&&g[v]||(n[v]=i(e[v],t[v]));return n}var a=e(29),s=e(154),u=e(147),l={}.hasOwnProperty,c=s({$push:null}),p=s({$unshift:null}),d=s({$splice:null}),f=s({$set:null}),h=s({$merge:null}),m=s({$apply:null}),v=[c,p,d,f,h,m],g={};v.forEach(function(e){g[e]=!0}),t.exports=i},{147:147,154:154,29:29}],166:[function(e,t,n){"use strict";var r=e(126),o=r;t.exports=o},{126:126}]},{},[1])(1)});
/*! Quill Editor v0.20.0
 *  https://quilljs.com/
 *  Copyright (c) 2014, Jason Chen
 *  Copyright (c) 2013, salesforce.com
 */
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.Quill=a()}}(function(){var a;return function b(a,c,d){function e(g,h){if(!c[g]){if(!a[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};a[g][0].call(k.exports,function(b){var c=a[g][1][b];return e(c?c:b)},k,k.exports,b,a,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(b,c,d){(function(b){(function(){function e(a,b,c){for(var d=a.length,e=c?d:-1;c?e--:++e<d;)if(b(a[e],e,a))return e;return-1}function f(a,b,c){if(b!==b)return i(a,c);for(var d=c-1,e=a.length;++d<e;)if(a[d]===b)return d;return-1}function g(a){return"function"==typeof a||!1}function h(a){return"string"==typeof a?a:null==a?"":a+""}function i(a,b,c){for(var d=a.length,e=b+(c?0:-1);c?e--:++e<d;){var f=a[e];if(f!==f)return e}return-1}function j(a){return!!a&&"object"==typeof a}function k(a,b){for(var c=-1,d=a.length,e=-1,f=[];++c<d;)a[c]===b&&(a[c]=yb,f[++e]=c);return f}function l(){}function m(){}function n(a){this.__wrapped__=a,this.__actions__=null,this.__dir__=1,this.__dropCount__=0,this.__filtered__=!1,this.__iteratees__=null,this.__takeCount__=Ic,this.__views__=null}function o(a){var b=a?a.length:0;for(this.data={hash:Cc(null),set:new yc};b--;)this.push(a[b])}function p(a,b){var c=a.data,d="string"==typeof b||Wa(b)?c.set.has(b):c.hash[b];return d?0:-1}function q(a){var b=this.data;"string"==typeof a||Wa(a)?b.set.add(a):b.hash[a]=!0}function r(a,b){var c=-1,d=a.length;for(b||(b=Array(d));++c<d;)b[c]=a[c];return b}function s(a,b){for(var c=-1,d=a.length;++c<d&&b(a[c],c,a)!==!1;);return a}function t(a,b){for(var c=-1,d=a.length;++c<d;)if(!b(a[c],c,a))return!1;return!0}function u(a,b){for(var c=-1,d=a.length,e=Array(d);++c<d;)e[c]=b(a[c],c,a);return e}function v(a,b,c,d){var e=-1,f=a.length;for(d&&f&&(c=a[++e]);++e<f;)c=b(c,a[e],e,a);return c}function w(a,b){for(var c=-1,d=a.length;++c<d;)if(b(a[c],c,a))return!0;return!1}function x(a,b){return a===kb?b:a}function y(a,b,c){for(var d=-1,e=md(b),f=e.length;++d<f;){var g=e[d],h=a[g],i=c(h,b[g],g,a,b);(i===i?i===h:h!==h)&&(h!==kb||g in a)||(a[g]=i)}return a}function z(a,b){return null==b?a:A(b,md(b),a)}function A(a,b,c){c||(c={});for(var d=-1,e=b.length;++d<e;){var f=b[d];c[f]=a[f]}return c}function B(a,b,c){var d=typeof a;return"function"==d?b===kb?a:Y(a,b,c):null==a?fb:"object"==d?P(a):b===kb?ib(a):Q(a,b)}function C(a,b,c,d,e,f,g){var h;if(c&&(h=e?c(a,d,e):c(a)),h!==kb)return h;if(!Wa(a))return a;var i=hd(a);if(i){if(h=ua(a),!b)return r(a,h)}else{var j=sc.call(a),k=j==Eb;if(j!=Hb&&j!=zb&&(!k||e))return ec[j]?wa(a,j,b):e?a:{};if(h=va(k?{}:a),!b)return z(h,a)}f||(f=[]),g||(g=[]);for(var l=f.length;l--;)if(f[l]==a)return g[l];return f.push(a),g.push(h),(i?s:J)(a,function(d,e){h[e]=C(d,b,c,e,a,f,g)}),h}function D(a,b,c){if("function"!=typeof a)throw new TypeError(xb);return setTimeout(function(){a.apply(kb,c)},b)}function E(a,b){var c=a?a.length:0,d=[];if(!c)return d;var e=-1,g=ra(),h=g==f,i=h&&b.length>=200?Vc(b):null,j=b.length;i&&(g=p,h=!1,b=i);a:for(;++e<c;){var k=a[e];if(h&&k===k){for(var l=j;l--;)if(b[l]===k)continue a;d.push(k)}else g(b,k,0)<0&&d.push(k)}return d}function F(a,b){var c=!0;return Sc(a,function(a,d,e){return c=!!b(a,d,e)}),c}function G(a,b,c,d){var e;return c(a,function(a,c,f){return b(a,c,f)?(e=d?c:a,!1):void 0}),e}function H(a,b,c){for(var d=-1,e=a.length,f=-1,g=[];++d<e;){var h=a[d];if(j(h)&&ya(h)&&(c||hd(h)||Ta(h))){b&&(h=H(h,b,c));for(var i=-1,k=h.length;++i<k;)g[++f]=h[i]}else c||(g[++f]=h)}return g}function I(a,b){return Tc(a,b,_a)}function J(a,b){return Tc(a,b,md)}function K(a,b,c){if(null!=a){c!==kb&&c in La(a)&&(b=[c]);for(var d=0,e=b.length;null!=a&&e>d;)a=a[b[d++]];return d&&d==e?a:kb}}function L(a,b,c,d,e,f){return a===b?!0:null==a||null==b||!Wa(a)&&!j(b)?a!==a&&b!==b:M(a,b,L,c,d,e,f)}function M(a,b,c,d,e,f,g){var h=hd(a),i=hd(b),j=Ab,k=Ab;h||(j=sc.call(a),j==zb?j=Hb:j!=Hb&&(h=$a(a))),i||(k=sc.call(b),k==zb?k=Hb:k!=Hb&&(i=$a(b)));var l=j==Hb,m=k==Hb,n=j==k;if(n&&!h&&!l)return na(a,b,j);if(!e){var o=l&&qc.call(a,"__wrapped__"),p=m&&qc.call(b,"__wrapped__");if(o||p)return c(o?a.value():a,p?b.value():b,d,e,f,g)}if(!n)return!1;f||(f=[]),g||(g=[]);for(var q=f.length;q--;)if(f[q]==a)return g[q]==b;f.push(a),g.push(b);var r=(h?ma:oa)(a,b,c,d,e,f,g);return f.pop(),g.pop(),r}function N(a,b,c){var d=b.length,e=d,f=!c;if(null==a)return!e;for(a=La(a);d--;){var g=b[d];if(f&&g[2]?g[1]!==a[g[0]]:!(g[0]in a))return!1}for(;++d<e;){g=b[d];var h=g[0],i=a[h],j=g[1];if(f&&g[2]){if(i===kb&&!(h in a))return!1}else{var k=c?c(i,j,h):kb;if(!(k===kb?L(j,i,c,!0):k))return!1}}return!0}function O(a,b){var c=-1,d=ya(a)?Array(a.length):[];return Sc(a,function(a,e,f){d[++c]=b(a,e,f)}),d}function P(a){var b=sa(a);if(1==b.length&&b[0][2]){var c=b[0][0],d=b[0][1];return function(a){return null==a?!1:a[c]===d&&(d!==kb||c in La(a))}}return function(a){return N(a,b)}}function Q(a,b){var c=hd(a),d=Ba(a)&&Ea(b),e=a+"";return a=Ma(a),function(f){if(null==f)return!1;var g=e;if(f=La(f),!(!c&&d||g in f)){if(f=1==a.length?f:K(f,U(a,0,-1)),null==f)return!1;g=Oa(a),f=La(f)}return f[g]===b?b!==kb||g in f:L(b,f[g],kb,!0)}}function R(a){return function(b){return null==b?kb:b[a]}}function S(a){var b=a+"";return a=Ma(a),function(c){return K(c,a,b)}}function T(a,b,c,d,e){return e(a,function(a,e,f){c=d?(d=!1,a):b(c,a,e,f)}),c}function U(a,b,c){var d=-1,e=a.length;b=null==b?0:+b||0,0>b&&(b=-b>e?0:e+b),c=c===kb||c>e?e:+c||0,0>c&&(c+=e),e=b>c?0:c-b>>>0,b>>>=0;for(var f=Array(e);++d<e;)f[d]=a[d+b];return f}function V(a,b){for(var c=-1,d=b.length,e=Array(d);++c<d;)e[c]=a[b[c]];return e}function W(a,b,c){var d=0,e=a?a.length:d;if("number"==typeof b&&b===b&&Lc>=e){for(;e>d;){var f=d+e>>>1,g=a[f];(c?b>=g:b>g)&&null!==g?d=f+1:e=f}return e}return X(a,b,fb,c)}function X(a,b,c,d){b=c(b);for(var e=0,f=a?a.length:0,g=b!==b,h=null===b,i=b===kb;f>e;){var j=wc((e+f)/2),k=c(a[j]),l=k!==kb,m=k===k;if(g)var n=m||d;else n=h?m&&l&&(d||null!=k):i?m&&(d||l):null==k?!1:d?b>=k:b>k;n?e=j+1:f=j}return Gc(f,Kc)}function Y(a,b,c){if("function"!=typeof a)return fb;if(b===kb)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 3:return function(c,d,e){return a.call(b,c,d,e)};case 4:return function(c,d,e,f){return a.call(b,c,d,e,f)};case 5:return function(c,d,e,f,g){return a.call(b,c,d,e,f,g)}}return function(){return a.apply(b,arguments)}}function Z(a){return vc.call(a,0)}function $(a,b,c){for(var d=c.length,e=-1,f=Fc(a.length-d,0),g=-1,h=b.length,i=Array(f+h);++g<h;)i[g]=b[g];for(;++e<d;)i[c[e]]=a[e];for(;f--;)i[g++]=a[e++];return i}function _(a,b,c){for(var d=-1,e=c.length,f=-1,g=Fc(a.length-e,0),h=-1,i=b.length,j=Array(g+i);++f<g;)j[f]=a[f];for(var k=f;++h<i;)j[k+h]=b[h];for(;++d<e;)j[k+c[d]]=a[f++];return j}function aa(a){return Ra(function(b,c){var d=-1,e=null==b?0:c.length,f=e>2?c[e-2]:kb,g=e>2?c[2]:kb,h=e>1?c[e-1]:kb;for("function"==typeof f?(f=Y(f,h,5),e-=2):(f="function"==typeof h?h:kb,e-=f?1:0),g&&Aa(c[0],c[1],g)&&(f=3>e?kb:f,e=1);++d<e;){var i=c[d];i&&a(b,i,f)}return b})}function ba(a,b){return function(c,d){var e=c?Xc(c):0;if(!Da(e))return a(c,d);for(var f=b?e:-1,g=La(c);(b?f--:++f<e)&&d(g[f],f,g)!==!1;);return c}}function ca(a){return function(b,c,d){for(var e=La(b),f=d(b),g=f.length,h=a?g:-1;a?h--:++h<g;){var i=f[h];if(c(e[i],i,e)===!1)break}return b}}function da(a,b){function c(){var e=this&&this!==mc&&this instanceof c?d:a;return e.apply(b,arguments)}var d=ea(a);return c}function ea(a){return function(){var b=arguments;switch(b.length){case 0:return new a;case 1:return new a(b[0]);case 2:return new a(b[0],b[1]);case 3:return new a(b[0],b[1],b[2]);case 4:return new a(b[0],b[1],b[2],b[3]);case 5:return new a(b[0],b[1],b[2],b[3],b[4])}var c=Rc(a.prototype),d=a.apply(c,b);return Wa(d)?d:c}}function fa(a,b){return function(c,d,f){if(d=pa(d,f,3),hd(c)){var g=e(c,d,b);return g>-1?c[g]:kb}return G(c,d,a)}}function ga(a,b){return function(c,d,e){return"function"==typeof d&&e===kb&&hd(c)?a(c,d):b(c,Y(d,e,3))}}function ha(a){var b=Ra(function(c,d){var e=k(d,b.placeholder);return la(c,a,null,d,e)});return b}function ia(a,b){return function(c,d,e,f){var g=arguments.length<3;return"function"==typeof d&&f===kb&&hd(c)?a(c,d,e,g):T(c,pa(d,f,4),e,g,b)}}function ja(a,b,c,d,e,f,g,h,i,j){function l(){for(var u=arguments.length,v=u,w=Array(u);v--;)w[v]=arguments[v];if(d&&(w=$(w,d,e)),f&&(w=_(w,f,g)),p||s){var x=l.placeholder,y=k(w,x);if(u-=y.length,j>u){var z=h?r(h):null,A=Fc(j-u,0),B=p?y:null,C=p?null:y,D=p?w:null,E=p?null:w;b|=p?rb:sb,b&=~(p?sb:rb),q||(b&=~(mb|nb));var F=[a,b,c,D,B,E,C,z,i,A],G=ja.apply(kb,F);return Ca(a)&&Yc(G,F),G.placeholder=x,G}}var H=n?c:this,I=o?H[a]:a;return h&&(w=Ia(w,h)),m&&i<w.length&&(w.length=i),this&&this!==mc&&this instanceof l&&(I=t||ea(a)),I.apply(H,w)}var m=b&tb,n=b&mb,o=b&nb,p=b&pb,q=b&ob,s=b&qb,t=o?null:ea(a);return l}function ka(a,b,c,d){function e(){for(var b=-1,h=arguments.length,i=-1,j=d.length,k=Array(h+j);++i<j;)k[i]=d[i];for(;h--;)k[i++]=arguments[++b];var l=this&&this!==mc&&this instanceof e?g:a;return l.apply(f?c:this,k)}var f=b&mb,g=ea(a);return e}function la(a,b,c,d,e,f,g,h){var i=b&nb;if(!i&&"function"!=typeof a)throw new TypeError(xb);var j=d?d.length:0;if(j||(b&=~(rb|sb),d=e=null),j-=e?e.length:0,b&sb){var k=d,l=e;d=e=null}var m=i?null:Wc(a),n=[a,b,c,d,e,k,l,f,g,h];if(m&&(Fa(n,m),b=n[1],h=n[9]),n[9]=null==h?i?0:a.length:Fc(h-j,0)||0,b==mb)var o=da(n[0],n[2]);else o=b!=rb&&b!=(mb|rb)||n[4].length?ja.apply(kb,n):ka.apply(kb,n);var p=m?Uc:Yc;return p(o,n)}function ma(a,b,c,d,e,f,g){var h=-1,i=a.length,j=b.length;if(i!=j&&!(e&&j>i))return!1;for(;++h<i;){var k=a[h],l=b[h],m=d?d(e?l:k,e?k:l,h):kb;if(m!==kb){if(m)continue;return!1}if(e){if(!w(b,function(a){return k===a||c(k,a,d,e,f,g)}))return!1}else if(k!==l&&!c(k,l,d,e,f,g))return!1}return!0}function na(a,b,c){switch(c){case Bb:case Cb:return+a==+b;case Db:return a.name==b.name&&a.message==b.message;case Gb:return a!=+a?b!=+b:a==+b;case Ib:case Kb:return a==b+""}return!1}function oa(a,b,c,d,e,f,g){var h=md(a),i=h.length,j=md(b),k=j.length;if(i!=k&&!e)return!1;for(var l=i;l--;){var m=h[l];if(!(e?m in b:qc.call(b,m)))return!1}for(var n=e;++l<i;){m=h[l];var o=a[m],p=b[m],q=d?d(e?p:o,e?o:p,m):kb;if(!(q===kb?c(o,p,d,e,f,g):q))return!1;n||(n="constructor"==m)}if(!n){var r=a.constructor,s=b.constructor;if(r!=s&&"constructor"in a&&"constructor"in b&&!("function"==typeof r&&r instanceof r&&"function"==typeof s&&s instanceof s))return!1}return!0}function pa(a,b,c){var d=l.callback||db;return d=d===db?B:d,c?d(a,b,c):d}function qa(a){for(var b=a.name,c=Pc[b],d=c?c.length:0;d--;){var e=c[d],f=e.func;if(null==f||f==a)return e.name}return b}function ra(a,b,c){var d=l.indexOf||Na;return d=d===Na?f:d,a?d(a,b,c):d}function sa(a){for(var b=ab(a),c=b.length;c--;)b[c][2]=Ea(b[c][1]);return b}function ta(a,b){var c=null==a?kb:a[b];return Xa(c)?c:kb}function ua(a){var b=a.length,c=new a.constructor(b);return b&&"string"==typeof a[0]&&qc.call(a,"index")&&(c.index=a.index,c.input=a.input),c}function va(a){var b=a.constructor;return"function"==typeof b&&b instanceof b||(b=Object),new b}function wa(a,b,c){var d=a.constructor;switch(b){case Mb:return Z(a);case Bb:case Cb:return new d(+a);case Nb:case Ob:case Pb:case Qb:case Rb:case Sb:case Tb:case Ub:case Vb:var e=a.buffer;return new d(c?Z(e):e,a.byteOffset,a.length);case Gb:case Kb:return new d(a);case Ib:var f=new d(a.source,ac.exec(a));f.lastIndex=a.lastIndex}return f}function xa(a,b,c){null==a||Ba(b,a)||(b=Ma(b),a=1==b.length?a:K(a,U(b,0,-1)),b=Oa(b));var d=null==a?a:a[b];return null==d?kb:d.apply(a,c)}function ya(a){return null!=a&&Da(Xc(a))}function za(a,b){return a="number"==typeof a||cc.test(a)?+a:-1,b=null==b?Nc:b,a>-1&&a%1==0&&b>a}function Aa(a,b,c){if(!Wa(c))return!1;var d=typeof b;if("number"==d?ya(c)&&za(b,c.length):"string"==d&&b in c){var e=c[b];return a===a?a===e:e!==e}return!1}function Ba(a,b){var c=typeof a;if("string"==c&&Xb.test(a)||"number"==c)return!0;if(hd(a))return!1;var d=!Wb.test(a);return d||null!=b&&a in La(b)}function Ca(a){var b=qa(a);if(!(b in n.prototype))return!1;var c=l[b];if(a===c)return!0;var d=Wc(c);return!!d&&a===d[0]}function Da(a){return"number"==typeof a&&a>-1&&a%1==0&&Nc>=a}function Ea(a){return a===a&&!Wa(a)}function Fa(a,b){var c=a[1],d=b[1],e=c|d,f=tb>e,g=d==tb&&c==pb||d==tb&&c==ub&&a[7].length<=b[8]||d==(tb|ub)&&c==pb;if(!f&&!g)return a;d&mb&&(a[2]=b[2],e|=c&mb?0:ob);var h=b[3];if(h){var i=a[3];a[3]=i?$(i,h,b[4]):r(h),a[4]=i?k(a[3],yb):r(b[4])}return h=b[5],h&&(i=a[5],a[5]=i?_(i,h,b[6]):r(h),a[6]=i?k(a[5],yb):r(b[6])),h=b[7],h&&(a[7]=r(h)),d&tb&&(a[8]=null==a[8]?b[8]:Gc(a[8],b[8])),null==a[9]&&(a[9]=b[9]),a[0]=b[0],a[1]=e,a}function Ga(a,b){a=La(a);for(var c=-1,d=b.length,e={};++c<d;){var f=b[c];f in a&&(e[f]=a[f])}return e}function Ha(a,b){var c={};return I(a,function(a,d,e){b(a,d,e)&&(c[d]=a)}),c}function Ia(a,b){for(var c=a.length,d=Gc(b.length,c),e=r(a);d--;){var f=b[d];a[d]=za(f,c)?e[f]:kb}return a}function Ja(a){var b;l.support;if(!j(a)||sc.call(a)!=Hb||!qc.call(a,"constructor")&&(b=a.constructor,"function"==typeof b&&!(b instanceof b)))return!1;var c;return I(a,function(a,b){c=b}),c===kb||qc.call(a,c)}function Ka(a){for(var b=_a(a),c=b.length,d=c&&a.length,e=!!d&&Da(d)&&(hd(a)||Ta(a)),f=-1,g=[];++f<c;){var h=b[f];(e&&za(h,d)||qc.call(a,h))&&g.push(h)}return g}function La(a){return Wa(a)?a:Object(a)}function Ma(a){if(hd(a))return a;var b=[];return h(a).replace(Yb,function(a,c,d,e){b.push(d?e.replace(_b,"$1"):c||a)}),b}function Na(a,b,c){var d=a?a.length:0;if(!d)return-1;if("number"==typeof c)c=0>c?Fc(d+c,0):c;else if(c){var e=W(a,b),g=a[e];return(b===b?b===g:g!==g)?e:-1}return f(a,b,c||0)}function Oa(a){var b=a?a.length:0;return b?a[b-1]:kb}function Pa(a,b,c){var d=hd(a)?t:F;return c&&Aa(a,b,c)&&(b=null),("function"!=typeof b||c!==kb)&&(b=pa(b,c,3)),d(a,b)}function Qa(a,b,c){var d=hd(a)?u:O;return b=pa(b,c,3),d(a,b)}function Ra(a,b){if("function"!=typeof a)throw new TypeError(xb);return b=Fc(b===kb?a.length-1:+b||0,0),function(){for(var c=arguments,d=-1,e=Fc(c.length-b,0),f=Array(e);++d<e;)f[d]=c[b+d];switch(b){case 0:return a.call(this,f);case 1:return a.call(this,c[0],f);case 2:return a.call(this,c[0],c[1],f)}var g=Array(b+1);for(d=-1;++d<b;)g[d]=c[d];return g[b]=f,a.apply(this,g)}}function Sa(a,b,c,d){return b&&"boolean"!=typeof b&&Aa(a,b,c)?b=!1:"function"==typeof b&&(d=c,c=b,b=!1),"function"==typeof c?C(a,b,Y(c,d,1)):C(a,b)}function Ta(a){return j(a)&&ya(a)&&sc.call(a)==zb}function Ua(a){return!!a&&1===a.nodeType&&j(a)&&sc.call(a).indexOf("Element")>-1}function Va(a,b,c,d){c="function"==typeof c?Y(c,d,3):kb;var e=c?c(a,b):kb;return e===kb?L(a,b,c):!!e}function Wa(a){var b=typeof a;return!!a&&("object"==b||"function"==b)}function Xa(a){return null==a?!1:sc.call(a)==Eb?tc.test(pc.call(a)):j(a)&&bc.test(a)}function Ya(a){return"number"==typeof a||j(a)&&sc.call(a)==Gb}function Za(a){return"string"==typeof a||j(a)&&sc.call(a)==Kb}function $a(a){return j(a)&&Da(a.length)&&!!dc[sc.call(a)]}function _a(a){if(null==a)return[];Wa(a)||(a=Object(a));var b=a.length;b=b&&Da(b)&&(hd(a)||Ta(a))&&b||0;for(var c=a.constructor,d=-1,e="function"==typeof c&&c.prototype===a,f=Array(b),g=b>0;++d<b;)f[d]=d+"";for(var h in a)g&&za(h,b)||"constructor"==h&&(e||!qc.call(a,h))||f.push(h);return f}function ab(a){a=La(a);for(var b=-1,c=md(a),d=c.length,e=Array(d);++b<d;){var f=c[b];e[b]=[f,a[f]]}return e}function bb(a){return V(a,md(a))}function cb(a){return a=h(a),a&&$b.test(a)?a.replace(Zb,"\\$&"):a}function db(a,b,c){return c&&Aa(a,b,c)&&(b=null),j(a)?gb(a):B(a,b)}function eb(a){return function(){return a}}function fb(a){return a}function gb(a){return P(C(a,!0))}function hb(){}function ib(a){return Ba(a)?R(a):S(a)}function jb(a){var b=++rc;return h(a)+b}var kb,lb="3.9.3",mb=1,nb=2,ob=4,pb=8,qb=16,rb=32,sb=64,tb=128,ub=256,vb=150,wb=16,xb="Expected a function",yb="__lodash_placeholder__",zb="[object Arguments]",Ab="[object Array]",Bb="[object Boolean]",Cb="[object Date]",Db="[object Error]",Eb="[object Function]",Fb="[object Map]",Gb="[object Number]",Hb="[object Object]",Ib="[object RegExp]",Jb="[object Set]",Kb="[object String]",Lb="[object WeakMap]",Mb="[object ArrayBuffer]",Nb="[object Float32Array]",Ob="[object Float64Array]",Pb="[object Int8Array]",Qb="[object Int16Array]",Rb="[object Int32Array]",Sb="[object Uint8Array]",Tb="[object Uint8ClampedArray]",Ub="[object Uint16Array]",Vb="[object Uint32Array]",Wb=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,Xb=/^\w*$/,Yb=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,Zb=/[.*+?^${}()|[\]\/\\]/g,$b=RegExp(Zb.source),_b=/\\(\\)?/g,ac=/\w*$/,bc=/^\[object .+?Constructor\]$/,cc=/^\d+$/,dc={};dc[Nb]=dc[Ob]=dc[Pb]=dc[Qb]=dc[Rb]=dc[Sb]=dc[Tb]=dc[Ub]=dc[Vb]=!0,dc[zb]=dc[Ab]=dc[Mb]=dc[Bb]=dc[Cb]=dc[Db]=dc[Eb]=dc[Fb]=dc[Gb]=dc[Hb]=dc[Ib]=dc[Jb]=dc[Kb]=dc[Lb]=!1;var ec={};ec[zb]=ec[Ab]=ec[Mb]=ec[Bb]=ec[Cb]=ec[Nb]=ec[Ob]=ec[Pb]=ec[Qb]=ec[Rb]=ec[Gb]=ec[Hb]=ec[Ib]=ec[Kb]=ec[Sb]=ec[Tb]=ec[Ub]=ec[Vb]=!0,ec[Db]=ec[Eb]=ec[Fb]=ec[Jb]=ec[Lb]=!1;var fc={"function":!0,object:!0},gc=fc[typeof d]&&d&&!d.nodeType&&d,hc=fc[typeof c]&&c&&!c.nodeType&&c,ic=gc&&hc&&"object"==typeof b&&b&&b.Object&&b,jc=fc[typeof self]&&self&&self.Object&&self,kc=fc[typeof window]&&window&&window.Object&&window,lc=hc&&hc.exports===gc&&gc,mc=ic||kc!==(this&&this.window)&&kc||jc||this,nc=Object.prototype,oc=(oc=mc.window)?oc.document:null,pc=Function.prototype.toString,qc=nc.hasOwnProperty,rc=0,sc=nc.toString,tc=RegExp("^"+cb(pc.call(qc)).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),uc=ta(mc,"ArrayBuffer"),vc=ta(uc&&new uc(0),"slice"),wc=Math.floor,xc=ta(Object,"getPrototypeOf"),yc=ta(mc,"Set"),zc=ta(mc,"Uint8Array"),Ac=ta(mc,"WeakMap"),Bc=function(){try{var a=ta(mc,"Float64Array"),b=new a(new uc(10),0,1)&&a}catch(c){}return b||null}(),Cc=ta(Object,"create"),Dc=ta(Array,"isArray"),Ec=ta(Object,"keys"),Fc=Math.max,Gc=Math.min,Hc=ta(Date,"now"),Ic=Number.POSITIVE_INFINITY,Jc=4294967295,Kc=Jc-1,Lc=Jc>>>1,Mc=Bc?Bc.BYTES_PER_ELEMENT:0,Nc=9007199254740991,Oc=Ac&&new Ac,Pc={},Qc=l.support={};!function(a){var b=function(){this.x=a},c=[];b.prototype={valueOf:a,y:a};for(var d in new b)c.push(d);try{Qc.dom=11===oc.createDocumentFragment().nodeType}catch(e){Qc.dom=!1}}(1,0);var Rc=function(){function a(){}return function(b){if(Wa(b)){a.prototype=b;var c=new a;a.prototype=null}return c||{}}}(),Sc=ba(J),Tc=ca(),Uc=Oc?function(a,b){return Oc.set(a,b),a}:fb;vc||(Z=uc&&zc?function(a){var b=a.byteLength,c=Bc?wc(b/Mc):0,d=c*Mc,e=new uc(b);if(c){var f=new Bc(e,0,c);f.set(new Bc(a,0,c))}return b!=d&&(f=new zc(e,d),f.set(new zc(a,d))),e}:eb(null));var Vc=Cc&&yc?function(a){return new o(a)}:eb(null),Wc=Oc?function(a){return Oc.get(a)}:hb,Xc=R("length"),Yc=function(){var a=0,b=0;return function(c,d){var e=dd(),f=wb-(e-b);if(b=e,f>0){if(++a>=vb)return c}else a=0;return Uc(c,d)}}(),Zc=Ra(function(a,b){return ya(a)?E(a,H(b,!1,!0)):[]}),$c=Ra(function(a){for(var b=a.length,c=b,d=Array(l),e=ra(),g=e==f,h=[];c--;){var i=a[c]=ya(i=a[c])?i:[];d[c]=g&&i.length>=120?Vc(c&&i):null}var j=a[0],k=-1,l=j?j.length:0,m=d[0];a:for(;++k<l;)if(i=j[k],(m?p(m,i):e(h,i,0))<0){for(var c=b;--c;){var n=d[c];if((n?p(n,i):e(a[c],i,0))<0)continue a}m&&m.push(i),h.push(i)}return h}),_c=fa(Sc),ad=ga(s,Sc),bd=Ra(function(a,b,c){var d=-1,e="function"==typeof b,f=Ba(b),g=ya(a)?Array(a.length):[];return Sc(a,function(a){var h=e?b:f&&null!=a?a[b]:null;g[++d]=h?h.apply(a,c):xa(a,b,c)}),g}),cd=ia(v,Sc),dd=Hc||function(){return(new Date).getTime()},ed=Ra(function(a,b,c){var d=mb;if(c.length){var e=k(c,ed.placeholder);d|=rb}return la(a,d,b,c,e)}),fd=Ra(function(a,b){return D(a,1,b)}),gd=ha(rb),hd=Dc||function(a){return j(a)&&Da(a.length)&&sc.call(a)==Ab};Qc.dom||(Ua=function(a){return!!a&&1===a.nodeType&&j(a)&&!jd(a)});var id=g(/x/)||zc&&!g(zc)?function(a){return sc.call(a)==Eb}:g,jd=xc?function(a){if(!a||sc.call(a)!=Hb)return!1;var b=ta(a,"valueOf"),c=b&&(c=xc(b))&&xc(c);return c?a==c||xc(a)==c:Ja(a)}:Ja,kd=aa(function(a,b,c){return c?y(a,b,c):z(a,b)}),ld=Ra(function(a){var b=a[0];return null==b?b:(a.push(x),kd.apply(kb,a))}),md=Ec?function(a){var b=null==a?null:a.constructor;return"function"==typeof b&&b.prototype===a||"function"!=typeof a&&ya(a)?Ka(a):Wa(a)?Ec(a):[]}:Ka,nd=Ra(function(a,b){if(null==a)return{};if("function"!=typeof b[0]){var b=u(H(b),String);return Ga(a,E(_a(a),b))}var c=Y(b[0],b[1],3);return Ha(a,function(a,b,d){return!c(a,b,d)})});n.prototype=Rc(m.prototype),n.prototype.constructor=n,o.prototype.push=q,l.assign=kd,l.bind=ed,l.callback=db,l.constant=eb,l.defaults=ld,l.defer=fd,l.difference=Zc,l.forEach=ad,l.intersection=$c,l.invoke=bd,l.keys=md,l.keysIn=_a,l.map=Qa,l.matches=gb,l.omit=nd,l.pairs=ab,l.partial=gd,l.property=ib,l.restParam=Ra,l.values=bb,l.collect=Qa,l.each=ad,l.extend=kd,l.iteratee=db,l.clone=Sa,l.escapeRegExp=cb,l.every=Pa,l.find=_c,l.identity=fb,l.indexOf=Na,l.isArguments=Ta,l.isArray=hd,l.isElement=Ua,l.isEqual=Va,l.isFunction=id,l.isNative=Xa,l.isNumber=Ya,l.isObject=Wa,l.isPlainObject=jd,l.isString=Za,l.isTypedArray=$a,l.last=Oa,l.noop=hb,l.now=dd,l.reduce=cd,l.uniqueId=jb,l.all=Pa,l.eq=Va,l.detect=_c,l.foldl=cd,l.inject=cd,l.VERSION=lb,s(["bind","partial"],function(a){l[a].placeholder=l}),"function"==typeof a&&"object"==typeof a.amd&&a.amd?(mc._=l,a(function(){return l})):gc&&hc?lc?(hc.exports=l)._=l:gc._=l:mc._=l}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(b,c,d){!function(b){function c(){this._events={},this._conf&&e.call(this,this._conf)}function e(a){a&&(this._conf=a,a.delimiter&&(this.delimiter=a.delimiter),a.maxListeners&&(this._events.maxListeners=a.maxListeners),a.wildcard&&(this.wildcard=a.wildcard),a.newListener&&(this.newListener=a.newListener),this.wildcard&&(this.listenerTree={}))}function f(a){this._events={},this.newListener=!1,e.call(this,a)}function g(a,b,c,d){if(!c)return[];var e,f,h,i,j,k,l,m=[],n=b.length,o=b[d],p=b[d+1];if(d===n&&c._listeners){if("function"==typeof c._listeners)return a&&a.push(c._listeners),[c];for(e=0,f=c._listeners.length;f>e;e++)a&&a.push(c._listeners[e]);return[c]}if("*"===o||"**"===o||c[o]){if("*"===o){for(h in c)"_listeners"!==h&&c.hasOwnProperty(h)&&(m=m.concat(g(a,b,c[h],d+1)));return m}if("**"===o){l=d+1===n||d+2===n&&"*"===p,l&&c._listeners&&(m=m.concat(g(a,b,c,n)));for(h in c)"_listeners"!==h&&c.hasOwnProperty(h)&&("*"===h||"**"===h?(c[h]._listeners&&!l&&(m=m.concat(g(a,b,c[h],n))),m=m.concat(g(a,b,c[h],d))):m=h===p?m.concat(g(a,b,c[h],d+2)):m.concat(g(a,b,c[h],d)));return m}m=m.concat(g(a,b,c[o],d+1))}if(i=c["*"],i&&g(a,b,i,d+1),j=c["**"])if(n>d){j._listeners&&g(a,b,j,n);for(h in j)"_listeners"!==h&&j.hasOwnProperty(h)&&(h===p?g(a,b,j[h],d+2):h===o?g(a,b,j[h],d+1):(k={},k[h]=j[h],g(a,b,{"**":k},d+1)))}else j._listeners?g(a,b,j,n):j["*"]&&j["*"]._listeners&&g(a,b,j["*"],n);return m}function h(a,b){a="string"==typeof a?a.split(this.delimiter):a.slice();for(var c=0,d=a.length;d>c+1;c++)if("**"===a[c]&&"**"===a[c+1])return;for(var e=this.listenerTree,f=a.shift();f;){if(e[f]||(e[f]={}),e=e[f],0===a.length){if(e._listeners){if("function"==typeof e._listeners)e._listeners=[e._listeners,b];else if(i(e._listeners)&&(e._listeners.push(b),!e._listeners.warned)){var g=j;"undefined"!=typeof this._events.maxListeners&&(g=this._events.maxListeners),g>0&&e._listeners.length>g&&(e._listeners.warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",e._listeners.length),console.trace())}}else e._listeners=b;return!0}f=a.shift()}return!0}var i=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},j=10;f.prototype.delimiter=".",f.prototype.setMaxListeners=function(a){this._events||c.call(this),this._events.maxListeners=a,this._conf||(this._conf={}),this._conf.maxListeners=a},f.prototype.event="",f.prototype.once=function(a,b){return this.many(a,1,b),this},f.prototype.many=function(a,b,c){function d(){0===--b&&e.off(a,d),c.apply(this,arguments)}var e=this;if("function"!=typeof c)throw new Error("many only accepts instances of Function");return d._origin=c,this.on(a,d),e},f.prototype.emit=function(){this._events||c.call(this);var a=arguments[0];if("newListener"===a&&!this.newListener&&!this._events.newListener)return!1;if(this._all){for(var b=arguments.length,d=new Array(b-1),e=1;b>e;e++)d[e-1]=arguments[e];for(e=0,b=this._all.length;b>e;e++)this.event=a,this._all[e].apply(this,d)}if("error"===a&&!(this._all||this._events.error||this.wildcard&&this.listenerTree.error))throw arguments[1]instanceof Error?arguments[1]:new Error("Uncaught, unspecified 'error' event.");var f;if(this.wildcard){f=[];var h="string"==typeof a?a.split(this.delimiter):a.slice();g.call(this,f,h,this.listenerTree,0)}else f=this._events[a];if("function"==typeof f){if(this.event=a,1===arguments.length)f.call(this);else if(arguments.length>1)switch(arguments.length){case 2:f.call(this,arguments[1]);break;case 3:f.call(this,arguments[1],arguments[2]);break;default:for(var b=arguments.length,d=new Array(b-1),e=1;b>e;e++)d[e-1]=arguments[e];f.apply(this,d)}return!0}if(f){for(var b=arguments.length,d=new Array(b-1),e=1;b>e;e++)d[e-1]=arguments[e];for(var i=f.slice(),e=0,b=i.length;b>e;e++)this.event=a,i[e].apply(this,d);return i.length>0||!!this._all}return!!this._all},f.prototype.on=function(a,b){if("function"==typeof a)return this.onAny(a),this;if("function"!=typeof b)throw new Error("on only accepts instances of Function");if(this._events||c.call(this),this.emit("newListener",a,b),this.wildcard)return h.call(this,a,b),this;if(this._events[a]){if("function"==typeof this._events[a])this._events[a]=[this._events[a],b];else if(i(this._events[a])&&(this._events[a].push(b),!this._events[a].warned)){var d=j;"undefined"!=typeof this._events.maxListeners&&(d=this._events.maxListeners),d>0&&this._events[a].length>d&&(this._events[a].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[a].length),console.trace())}}else this._events[a]=b;return this},f.prototype.onAny=function(a){if("function"!=typeof a)throw new Error("onAny only accepts instances of Function");return this._all||(this._all=[]),this._all.push(a),this},f.prototype.addListener=f.prototype.on,f.prototype.off=function(a,b){if("function"!=typeof b)throw new Error("removeListener only takes instances of Function");var c,d=[];if(this.wildcard){var e="string"==typeof a?a.split(this.delimiter):a.slice();d=g.call(this,null,e,this.listenerTree,0)}else{if(!this._events[a])return this;c=this._events[a],d.push({_listeners:c})}for(var f=0;f<d.length;f++){var h=d[f];if(c=h._listeners,i(c)){for(var j=-1,k=0,l=c.length;l>k;k++)if(c[k]===b||c[k].listener&&c[k].listener===b||c[k]._origin&&c[k]._origin===b){j=k;break}if(0>j)continue;return this.wildcard?h._listeners.splice(j,1):this._events[a].splice(j,1),0===c.length&&(this.wildcard?delete h._listeners:delete this._events[a]),this}(c===b||c.listener&&c.listener===b||c._origin&&c._origin===b)&&(this.wildcard?delete h._listeners:delete this._events[a])}return this},f.prototype.offAny=function(a){var b,c=0,d=0;if(a&&this._all&&this._all.length>0){for(b=this._all,c=0,d=b.length;d>c;c++)if(a===b[c])return b.splice(c,1),this}else this._all=[];return this},f.prototype.removeListener=f.prototype.off,f.prototype.removeAllListeners=function(a){if(0===arguments.length)return!this._events||c.call(this),this;if(this.wildcard)for(var b="string"==typeof a?a.split(this.delimiter):a.slice(),d=g.call(this,null,b,this.listenerTree,0),e=0;e<d.length;e++){var f=d[e];f._listeners=null}else{if(!this._events[a])return this;this._events[a]=null}return this},f.prototype.listeners=function(a){if(this.wildcard){var b=[],d="string"==typeof a?a.split(this.delimiter):a.slice();return g.call(this,b,d,this.listenerTree,0),b}return this._events||c.call(this),this._events[a]||(this._events[a]=[]),i(this._events[a])||(this._events[a]=[this._events[a]]),this._events[a]},f.prototype.listenersAny=function(){return this._all?this._all:[]},"function"==typeof a&&a.amd?a(function(){return f}):"object"==typeof d?d.EventEmitter2=f:window.EventEmitter2=f}()},{}],3:[function(a,b,c){var d=a("fast-diff"),e=a("./is"),f=a("./op"),g=String.fromCharCode(0),h=function(a){e.array(a)?this.ops=a:e.object(a)&&e.array(a.ops)?this.ops=a.ops:this.ops=[]};h.prototype.insert=function(a,b){var c={};return 0===a.length?this:(c.insert=a,e.object(b)&&Object.keys(b).length>0&&(c.attributes=b),this.push(c))},h.prototype["delete"]=function(a){return 0>=a?this:this.push({"delete":a})},h.prototype.retain=function(a,b){if(0>=a)return this;var c={retain:a};return e.object(b)&&Object.keys(b).length>0&&(c.attributes=b),this.push(c)},h.prototype.push=function(a){var b=this.ops.length,c=this.ops[b-1];if(a=f.clone(a),e.object(c)){if(e.number(a["delete"])&&e.number(c["delete"]))return this.ops[b-1]={"delete":c["delete"]+a["delete"]},this;if(e.number(c["delete"])&&null!=a.insert&&(b-=1,c=this.ops[b-1],!e.object(c)))return this.ops.unshift(a),this;if(e.equal(a.attributes,c.attributes)){if(e.string(a.insert)&&e.string(c.insert))return this.ops[b-1]={insert:c.insert+a.insert},e.object(a.attributes)&&(this.ops[b-1].attributes=a.attributes),this;if(e.number(a.retain)&&e.number(c.retain))return this.ops[b-1]={retain:c.retain+a.retain},e.object(a.attributes)&&(this.ops[b-1].attributes=a.attributes),this}}return b===this.ops.length?this.ops.push(a):this.ops.splice(b,0,a),this},h.prototype.chop=function(){var a=this.ops[this.ops.length-1];return a&&a.retain&&!a.attributes&&this.ops.pop(),this},h.prototype.length=function(){return this.ops.reduce(function(a,b){return a+f.length(b)},0)},h.prototype.slice=function(a,b){a=a||0,e.number(b)||(b=1/0);for(var c=new h,d=f.iterator(this.ops),g=0;b>g&&d.hasNext();){var i;a>g?i=d.next(a-g):(i=d.next(b-g),c.push(i)),g+=f.length(i)}return c},h.prototype.compose=function(a){for(var b=f.iterator(this.ops),c=f.iterator(a.ops),d=new h;b.hasNext()||c.hasNext();)if("insert"===c.peekType())d.push(c.next());else if("delete"===b.peekType())d.push(b.next());else{var g=Math.min(b.peekLength(),c.peekLength()),i=b.next(g),j=c.next(g);if(e.number(j.retain)){var k={};e.number(i.retain)?k.retain=g:k.insert=i.insert;var l=f.attributes.compose(i.attributes,j.attributes,e.number(i.retain));l&&(k.attributes=l),d.push(k)}else e.number(j["delete"])&&e.number(i.retain)&&d.push(j)}return d.chop()},h.prototype.diff=function(a){var b=new h;if(this.ops===a.ops)return b;var c=[this.ops,a.ops].map(function(b){return b.map(function(c){if(null!=c.insert)return e.string(c.insert)?c.insert:g;var d=b===a.ops?"on":"with";throw new Error("diff() called "+d+" non-document")}).join("")}),i=d(c[0],c[1]),j=f.iterator(this.ops),k=f.iterator(a.ops);return i.forEach(function(a){for(var c=a[1].length;c>0;){var g=0;switch(a[0]){case d.INSERT:g=Math.min(k.peekLength(),c),b.push(k.next(g));break;case d.DELETE:g=Math.min(c,j.peekLength()),j.next(g),b["delete"](g);break;case d.EQUAL:g=Math.min(j.peekLength(),k.peekLength(),c);var h=j.next(g),i=k.next(g);e.equal(h.insert,i.insert)?b.retain(g,f.attributes.diff(h.attributes,i.attributes)):b.push(i)["delete"](g)}c-=g}}),b.chop()},h.prototype.transform=function(a,b){if(b=!!b,e.number(a))return this.transformPosition(a,b);for(var c=f.iterator(this.ops),d=f.iterator(a.ops),g=new h;c.hasNext()||d.hasNext();)if("insert"!==c.peekType()||!b&&"insert"===d.peekType())if("insert"===d.peekType())g.push(d.next());else{var i=Math.min(c.peekLength(),d.peekLength()),j=c.next(i),k=d.next(i);if(j["delete"])continue;
k["delete"]?g.push(k):g.retain(i,f.attributes.transform(j.attributes,k.attributes,b))}else g.retain(f.length(c.next()));return g.chop()},h.prototype.transformPosition=function(a,b){b=!!b;for(var c=f.iterator(this.ops),d=0;c.hasNext()&&a>=d;){var e=c.peekLength(),g=c.peekType();c.next(),"delete"!==g?("insert"===g&&(a>d||!b)&&(a+=e),d+=e):a-=Math.min(e,a-d)}return a},b.exports=h},{"./is":4,"./op":5,"fast-diff":6}],4:[function(a,b,c){b.exports={equal:function(a,b){if(a===b)return!0;if(null==a&&null==b)return!0;if(null==a||null==b)return!1;if(!this.object(a)||!this.object(b))return!1;if(Object.keys(a).length!=Object.keys(b).length)return!1;for(var c in a)if(a[c]!==b[c])return!1;return!0},array:function(a){return Array.isArray(a)},number:function(a){return"number"==typeof a?!0:"object"==typeof a&&"[object Number]"===Object.prototype.toString.call(a)?!0:!1},object:function(a){return a?"function"==typeof a||"object"==typeof a:!1},string:function(a){return"string"==typeof a?!0:"object"==typeof a&&"[object String]"===Object.prototype.toString.call(a)?!0:!1}}},{}],5:[function(a,b,c){function d(a){this.ops=a,this.index=0,this.offset=0}var e=a("./is"),f={attributes:{clone:function(a,b){return e.object(a)?Object.keys(a).reduce(function(c,d){return void 0===a[d]||null===a[d]&&!b||(c[d]=a[d]),c},{}):{}},compose:function(a,b,c){e.object(a)||(a={}),e.object(b)||(b={});var d=this.clone(b,c);for(var f in a)void 0!==a[f]&&void 0===b[f]&&(d[f]=a[f]);return Object.keys(d).length>0?d:void 0},diff:function(a,b){e.object(a)||(a={}),e.object(b)||(b={});var c=Object.keys(a).concat(Object.keys(b)).reduce(function(c,d){return a[d]!==b[d]&&(c[d]=void 0===b[d]?null:b[d]),c},{});return Object.keys(c).length>0?c:void 0},transform:function(a,b,c){if(!e.object(a))return b;if(!e.object(b))return void 0;if(!c)return b;var d=Object.keys(b).reduce(function(c,d){return void 0===a[d]&&(c[d]=b[d]),c},{});return Object.keys(d).length>0?d:void 0}},clone:function(a){var b=this.attributes.clone(a);return e.object(b.attributes)&&(b.attributes=this.attributes.clone(b.attributes,!0)),b},iterator:function(a){return new d(a)},length:function(a){return e.number(a["delete"])?a["delete"]:e.number(a.retain)?a.retain:e.string(a.insert)?a.insert.length:1}};d.prototype.hasNext=function(){return this.peekLength()<1/0},d.prototype.next=function(a){a||(a=1/0);var b=this.ops[this.index];if(b){var c=this.offset,d=f.length(b);if(a>=d-c?(a=d-c,this.index+=1,this.offset=0):this.offset+=a,e.number(b["delete"]))return{"delete":a};var g={};return b.attributes&&(g.attributes=b.attributes),e.number(b.retain)?g.retain=a:e.string(b.insert)?g.insert=b.insert.substr(c,a):g.insert=b.insert,g}return{retain:1/0}},d.prototype.peekLength=function(){return this.ops[this.index]?f.length(this.ops[this.index])-this.offset:1/0},d.prototype.peekType=function(){return this.ops[this.index]?e.number(this.ops[this.index]["delete"])?"delete":e.number(this.ops[this.index].retain)?"retain":"insert":"retain"},b.exports=f},{"./is":4}],6:[function(a,b,c){function d(a,b){if(a==b)return a?[[n,a]]:[];var c=h(a,b),d=a.substring(0,c);a=a.substring(c),b=b.substring(c),c=i(a,b);var f=a.substring(a.length-c);a=a.substring(0,a.length-c),b=b.substring(0,b.length-c);var g=e(a,b);return d&&g.unshift([n,d]),f&&g.push([n,f]),k(g),g}function e(a,b){var c;if(!a)return[[m,b]];if(!b)return[[l,a]];var e=a.length>b.length?a:b,g=a.length>b.length?b:a,h=e.indexOf(g);if(-1!=h)return c=[[m,e.substring(0,h)],[n,g],[m,e.substring(h+g.length)]],a.length>b.length&&(c[0][0]=c[2][0]=l),c;if(1==g.length)return[[l,a],[m,b]];var i=j(a,b);if(i){var k=i[0],o=i[1],p=i[2],q=i[3],r=i[4],s=d(k,p),t=d(o,q);return s.concat([[n,r]],t)}return f(a,b)}function f(a,b){for(var c=a.length,d=b.length,e=Math.ceil((c+d)/2),f=e,h=2*e,i=new Array(h),j=new Array(h),k=0;h>k;k++)i[k]=-1,j[k]=-1;i[f+1]=0,j[f+1]=0;for(var n=c-d,o=n%2!=0,p=0,q=0,r=0,s=0,t=0;e>t;t++){for(var u=-t+p;t-q>=u;u+=2){var v,w=f+u;v=u==-t||u!=t&&i[w-1]<i[w+1]?i[w+1]:i[w-1]+1;for(var x=v-u;c>v&&d>x&&a.charAt(v)==b.charAt(x);)v++,x++;if(i[w]=v,v>c)q+=2;else if(x>d)p+=2;else if(o){var y=f+n-u;if(y>=0&&h>y&&-1!=j[y]){var z=c-j[y];if(v>=z)return g(a,b,v,x)}}}for(var A=-t+r;t-s>=A;A+=2){var z,y=f+A;z=A==-t||A!=t&&j[y-1]<j[y+1]?j[y+1]:j[y-1]+1;for(var B=z-A;c>z&&d>B&&a.charAt(c-z-1)==b.charAt(d-B-1);)z++,B++;if(j[y]=z,z>c)s+=2;else if(B>d)r+=2;else if(!o){var w=f+n-A;if(w>=0&&h>w&&-1!=i[w]){var v=i[w],x=f+v-w;if(z=c-z,v>=z)return g(a,b,v,x)}}}}return[[l,a],[m,b]]}function g(a,b,c,e){var f=a.substring(0,c),g=b.substring(0,e),h=a.substring(c),i=b.substring(e),j=d(f,g),k=d(h,i);return j.concat(k)}function h(a,b){if(!a||!b||a.charAt(0)!=b.charAt(0))return 0;for(var c=0,d=Math.min(a.length,b.length),e=d,f=0;e>c;)a.substring(f,e)==b.substring(f,e)?(c=e,f=c):d=e,e=Math.floor((d-c)/2+c);return e}function i(a,b){if(!a||!b||a.charAt(a.length-1)!=b.charAt(b.length-1))return 0;for(var c=0,d=Math.min(a.length,b.length),e=d,f=0;e>c;)a.substring(a.length-e,a.length-f)==b.substring(b.length-e,b.length-f)?(c=e,f=c):d=e,e=Math.floor((d-c)/2+c);return e}function j(a,b){function c(a,b,c){for(var d,e,f,g,j=a.substring(c,c+Math.floor(a.length/4)),k=-1,l="";-1!=(k=b.indexOf(j,k+1));){var m=h(a.substring(c),b.substring(k)),n=i(a.substring(0,c),b.substring(0,k));l.length<n+m&&(l=b.substring(k-n,k)+b.substring(k,k+m),d=a.substring(0,c-n),e=a.substring(c+m),f=b.substring(0,k-n),g=b.substring(k+m))}return 2*l.length>=a.length?[d,e,f,g,l]:null}var d=a.length>b.length?a:b,e=a.length>b.length?b:a;if(d.length<4||2*e.length<d.length)return null;var f,g=c(d,e,Math.ceil(d.length/4)),j=c(d,e,Math.ceil(d.length/2));if(!g&&!j)return null;f=j?g&&g[4].length>j[4].length?g:j:g;var k,l,m,n;a.length>b.length?(k=f[0],l=f[1],m=f[2],n=f[3]):(m=f[0],n=f[1],k=f[2],l=f[3]);var o=f[4];return[k,l,m,n,o]}function k(a){a.push([n,""]);for(var b,c=0,d=0,e=0,f="",g="";c<a.length;)switch(a[c][0]){case m:e++,g+=a[c][1],c++;break;case l:d++,f+=a[c][1],c++;break;case n:d+e>1?(0!==d&&0!==e&&(b=h(g,f),0!==b&&(c-d-e>0&&a[c-d-e-1][0]==n?a[c-d-e-1][1]+=g.substring(0,b):(a.splice(0,0,[n,g.substring(0,b)]),c++),g=g.substring(b),f=f.substring(b)),b=i(g,f),0!==b&&(a[c][1]=g.substring(g.length-b)+a[c][1],g=g.substring(0,g.length-b),f=f.substring(0,f.length-b))),0===d?a.splice(c-e,d+e,[m,g]):0===e?a.splice(c-d,d+e,[l,f]):a.splice(c-d-e,d+e,[l,f],[m,g]),c=c-d-e+(d?1:0)+(e?1:0)+1):0!==c&&a[c-1][0]==n?(a[c-1][1]+=a[c][1],a.splice(c,1)):c++,e=0,d=0,f="",g=""}""===a[a.length-1][1]&&a.pop();var j=!1;for(c=1;c<a.length-1;)a[c-1][0]==n&&a[c+1][0]==n&&(a[c][1].substring(a[c][1].length-a[c-1][1].length)==a[c-1][1]?(a[c][1]=a[c-1][1]+a[c][1].substring(0,a[c][1].length-a[c-1][1].length),a[c+1][1]=a[c-1][1]+a[c+1][1],a.splice(c-1,1),j=!0):a[c][1].substring(0,a[c+1][1].length)==a[c+1][1]&&(a[c-1][1]+=a[c+1][1],a[c][1]=a[c][1].substring(a[c+1][1].length)+a[c+1][1],a.splice(c+1,1),j=!0)),c++;j&&k(a)}var l=-1,m=1,n=0,o=d;o.INSERT=m,o.DELETE=l,o.EQUAL=n,b.exports=o},{}],7:[function(a,b,c){b.exports={version:"0.20.0"}},{}],8:[function(a,b,c){var d,e,f,g,h,i,j,k;j=a("lodash"),d=a("rich-text/lib/delta"),k=a("../lib/dom"),f=a("./format"),g=a("./line"),h=a("../lib/linked-list"),i=a("./normalizer"),e=function(){function a(a,b){this.root=a,null==b&&(b={}),this.normalizer=new i,this.formats={},j.each(b.formats,j.bind(this.addFormat,this)),this.setHTML(this.root.innerHTML)}return a.prototype.addFormat=function(a,b){return j.isObject(b)||(b=f.FORMATS[a]),null!=this.formats[a]&&console.warn("Overwriting format",a,this.formats[a]),this.formats[a]=new f(b),this.normalizer.addFormat(b)},a.prototype.appendLine=function(a){return this.insertLineBefore(a,null)},a.prototype.findLeafAt=function(a,b){var c,d,e;return e=this.findLineAt(a),c=e[0],d=e[1],null!=c?c.findLeafAt(d,b):[void 0,d]},a.prototype.findLine=function(a){for(var b;null!=a&&null==k.BLOCK_TAGS[a.tagName];)a=a.parentNode;return b=null!=a?k(a).data(g.DATA_KEY):void 0,(null!=b?b.node:void 0)===a?b:void 0},a.prototype.findLineAt=function(a){var b,c;if(!(this.lines.length>0))return[void 0,a];if(c=this.toDelta().length(),a===c)return[this.lines.last,this.lines.last.length];if(a>c)return[void 0,a-c];for(b=this.lines.first;null!=b;){if(a<b.length)return[b,a];a-=b.length,b=b.next}return[void 0,a]},a.prototype.getHTML=function(){return this.root.innerHTML.replace(/\>\s+\</g,">&nbsp;<")},a.prototype.insertLineBefore=function(a,b){var c;return c=new g(this,a),null!=b?(k(a.parentNode).isElement()||this.root.insertBefore(a,b.node),this.lines.insertAfter(b.prev,c)):(k(a.parentNode).isElement()||this.root.appendChild(a),this.lines.append(c)),c},a.prototype.mergeLines=function(a,b){return b.length>1&&(1===a.length&&k(a.leaves.last.node).remove(),j.each(k(b.node).childNodes(),function(b){return b.tagName!==k.DEFAULT_BREAK_TAG?a.node.appendChild(b):void 0})),this.removeLine(b),a.rebuild()},a.prototype.optimizeLines=function(){return j.each(this.lines.toArray(),function(a,b){return a.optimize(),!0})},a.prototype.rebuild=function(){var a,b,c;for(b=this.lines.toArray(),a=this.root.firstChild,null!=a&&null!=k.LIST_TAGS[a.tagName]&&(a=a.firstChild),j.each(b,function(b){return function(c,d){for(var e,f;c.node!==a;){if(c.node.parentNode!==b.root&&(null!=(f=c.node.parentNode)?f.parentNode:void 0)!==b.root)return b.removeLine(c);a=b.normalizer.normalizeLine(a),e=b.insertLineBefore(a,c),a=k(a).nextLineNode(b.root)}return c.outerHTML!==a.outerHTML&&(c.node=b.normalizer.normalizeLine(c.node),c.rebuild()),a=k(a).nextLineNode(b.root)}}(this)),c=[];null!=a;)a=this.normalizer.normalizeLine(a),this.appendLine(a),c.push(a=k(a).nextLineNode(this.root));return c},a.prototype.removeLine=function(a){return null!=a.node.parentNode&&(k.LIST_TAGS[a.node.parentNode.tagName]&&1===a.node.parentNode.childNodes.length?k(a.node.parentNode).remove():k(a.node).remove()),this.lines.remove(a)},a.prototype.setHTML=function(a){return a=i.stripComments(a),a=i.stripWhitespace(a),this.root.innerHTML=a,this.lines=new h,this.rebuild()},a.prototype.splitLine=function(a,b){var c,d,e,f;return b=Math.min(b,a.length-1),f=k(a.node).split(b,!0),c=f[0],d=f[1],a.node=c,a.rebuild(),e=this.insertLineBefore(d,a.next),e.formats=j.clone(a.formats),e.resetContent(),e},a.prototype.toDelta=function(){var a,b;return b=this.lines.toArray(),a=new d,j.each(b,function(b){return j.each(b.delta.ops,function(b){return a.push(b)})}),a},a}(),b.exports=e},{"../lib/dom":17,"../lib/linked-list":18,"./format":10,"./line":12,"./normalizer":13,lodash:1,"rich-text/lib/delta":3}],9:[function(a,b,c){var d,e,f,g,h,i,j;i=a("lodash"),d=a("rich-text/lib/delta"),j=a("../lib/dom"),e=a("./document"),g=a("./line"),h=a("./selection"),f=function(){function a(a,b,c){this.root=a,this.quill=b,this.options=null!=c?c:{},this.root.setAttribute("id",this.options.id),this.doc=new e(this.root,this.options),this.delta=this.doc.toDelta(),this.length=this.delta.length(),this.selection=new h(this.doc,this.quill),this.timer=setInterval(i.bind(this.checkUpdate,this),this.options.pollInterval),this.savedRange=null,this.quill.on("selection-change",function(a){return function(b){return a.savedRange=b}}(this)),this.options.readOnly||this.enable()}return a.sources={API:"api",SILENT:"silent",USER:"user"},a.prototype.destroy=function(){return clearInterval(this.timer)},a.prototype.disable=function(){return this.enable(!1)},a.prototype.enable=function(a){return null==a&&(a=!0),this.root.setAttribute("contenteditable",a)},a.prototype.applyDelta=function(b,c){var d;return d=this._update(),d&&(b=d.transform(b,!0),d=b.transform(d,!1)),b.ops.length>0&&(b=this._trackDelta(function(a){return function(){var c;return c=0,i.each(b.ops,function(b){return i.isString(b.insert)?(a._insertAt(c,b.insert,b.attributes),c+=b.insert.length):i.isNumber(b.insert)?(a._insertEmbed(c,b.attributes),c+=1):i.isNumber(b["delete"])?a._deleteAt(c,b["delete"]):i.isNumber(b.retain)?(i.each(b.attributes,function(d,e){return a._formatAt(c,b.retain,e,d)}),c+=b.retain):void 0}),a.selection.shiftAfter(0,0,i.bind(a.doc.optimizeLines,a.doc))}}(this)),this.delta=this.doc.toDelta(),this.length=this.delta.length(),this.innerHTML=this.root.innerHTML,b&&c!==a.sources.SILENT&&this.quill.emit(this.quill.constructor.events.TEXT_CHANGE,b,c)),d&&d.ops.length>0&&c!==a.sources.SILENT?this.quill.emit(this.quill.constructor.events.TEXT_CHANGE,d,a.sources.USER):void 0},a.prototype.checkUpdate=function(b){var c;return null==b&&(b="user"),null==this.root.parentNode?clearInterval(this.timer):(c=this._update(),c&&(this.delta=this.delta.compose(c),this.length=this.delta.length(),this.quill.emit(this.quill.constructor.events.TEXT_CHANGE,c,b)),c&&(b=a.sources.SILENT),this.selection.update(b))},a.prototype.focus=function(){return null!=this.selection.range?this.selection.setRange(this.selection.range):this.root.focus()},a.prototype.getBounds=function(a){var b,c,d,e,f,g,h;return this.checkUpdate(),g=this.doc.findLeafAt(a,!0),d=g[0],e=g[1],null==d?null:(c=this.root.parentNode.getBoundingClientRect(),h="left",0===d.length?b=d.node.parentNode.getBoundingClientRect():j.VOID_TAGS[d.node.tagName]?(b=d.node.getBoundingClientRect(),1===e&&(h="right")):(f=document.createRange(),e<d.length?(f.setStart(d.node,e),f.setEnd(d.node,e+1)):(f.setStart(d.node,e-1),f.setEnd(d.node,e),h="right"),b=f.getBoundingClientRect()),{height:b.height,left:b[h]-c.left,top:b.top-c.top})},a.prototype._deleteAt=function(a,b){return 0>=b?void 0:this.selection.shiftAfter(a,-1*b,function(c){return function(){var d,e,f,g,h,i,j;for(j=c.doc.findLineAt(a),f=j[0],i=j[1],d=f,g=f.length-i<=b&&i>0;null!=d&&b>0;)h=d.next,e=Math.min(d.length-i,b),0===i&&b>=d.length?c.doc.removeLine(d):d.deleteText(i,e),b-=e,d=h,i=0;return g&&f.next?c.doc.mergeLines(f,f.next):void 0}}(this))},a.prototype._formatAt=function(a,b,c,d){return this.selection.shiftAfter(a,0,function(e){return function(){var f,g,h,i,j;for(i=e.doc.findLineAt(a),g=i[0],h=i[1],j=[];null!=g&&b>0;)f=Math.min(b,g.length-h-1),g.formatText(h,f,c,d),b-=f,b>0&&g.format(c,d),b-=1,h=0,j.push(g=g.next);return j}}(this))},a.prototype._insertEmbed=function(a,b){return this.selection.shiftAfter(a,1,function(c){return function(){var d,e,f;return f=c.doc.findLineAt(a),d=f[0],e=f[1],d.insertEmbed(e,b)}}(this))},a.prototype._insertAt=function(a,b,c){return null==c&&(c={}),this.selection.shiftAfter(a,b.length,function(d){return function(){var e,f,g,h;return b=b.replace(/\r\n?/g,"\n"),f=b.split("\n"),h=d.doc.findLineAt(a),e=h[0],g=h[1],i.each(f,function(a,b){var h;return null==e||e.length<=g?(b<f.length-1||a.length>0)&&(e=d.doc.appendLine(document.createElement(j.DEFAULT_BLOCK_TAG)),g=0,e.insertText(g,a,c),e.format(c),h=null):(e.insertText(g,a,c),b<f.length-1&&(h=d.doc.splitLine(e,g+a.length),i.each(i.defaults({},c,e.formats),function(a,b){return e.format(b,c[b])}),g=0)),e=h})}}(this))},a.prototype._trackDelta=function(a){var b,c,d,e,f,g,h,j,k,l;g=null!=(k=this.savedRange)?k.start:void 0,a(),c=this.doc.toDelta(),this.savedRange=this.selection.getRange(),d=null!=(l=this.savedRange)?l.start:void 0;try{if(null!=g&&null!=d&&g<=this.delta.length()&&d<=c.length()&&(j=this.delta.slice(g),f=c.slice(d),i.isEqual(j.ops,f.ops)))return h=this.delta.slice(0,g),e=c.slice(0,d),h.diff(e)}catch(m){b=m}return this.delta.diff(c)},a.prototype._update=function(){var a;return this.innerHTML===this.root.innerHTML?!1:(a=this._trackDelta(function(a){return function(){return a.selection.preserve(i.bind(a.doc.rebuild,a.doc)),a.selection.shiftAfter(0,0,i.bind(a.doc.optimizeLines,a.doc))}}(this)),this.innerHTML=this.root.innerHTML,a.ops.length>0?a:!1)},a}(),b.exports=f},{"../lib/dom":17,"./document":8,"./line":12,"./selection":14,lodash:1,"rich-text/lib/delta":3}],10:[function(a,b,c){var d,e,f;e=a("lodash"),f=a("../lib/dom"),d=function(){function a(a){this.config=a}return a.types={LINE:"line",EMBED:"embed"},a.FORMATS={bold:{tag:"B",prepare:"bold"},italic:{tag:"I",prepare:"italic"},underline:{tag:"U",prepare:"underline"},strike:{tag:"S",prepare:"strikeThrough"},color:{style:"color","default":"rgb(0, 0, 0)",prepare:"foreColor"},background:{style:"backgroundColor","default":"rgb(255, 255, 255)",prepare:"backColor"},font:{style:"fontFamily","default":"'Helvetica', 'Arial', sans-serif",prepare:"fontName"},size:{style:"fontSize","default":"13px",prepare:function(a){return document.execCommand("fontSize",!1,f.convertFontSize(a))}},link:{tag:"A",add:function(a,b){return a.setAttribute("href",b),a},remove:function(a){return a.removeAttribute("href"),a},value:function(a){return a.getAttribute("href")}},image:{type:a.types.EMBED,tag:"IMG",attribute:"src"},align:{type:a.types.LINE,style:"textAlign","default":"left"},bullet:{type:a.types.LINE,exclude:"list",parentTag:"UL",tag:"LI"},list:{type:a.types.LINE,exclude:"bullet",parentTag:"OL",tag:"LI"}},a.prototype.add=function(b,c){var d,g,h,i,j;return c?this.value(b)===c?b:(e.isString(this.config.parentTag)&&(h=b.parentNode,h.tagName!==this.config.parentTag&&(h=document.createElement(this.config.parentTag),f(b).wrap(h)),b.parentNode.tagName===(null!=(i=b.parentNode.previousSibling)?i.tagName:void 0)&&f(b.parentNode.previousSibling).merge(b.parentNode),b.parentNode.tagName===(null!=(j=b.parentNode.nextSibling)?j.tagName:void 0)&&f(b.parentNode).merge(b.parentNode.nextSibling)),e.isString(this.config.tag)&&b.tagName!==this.config.tag&&(d=document.createElement(this.config.tag),null!=f.VOID_TAGS[d.tagName]?(null!=b.parentNode&&f(b).replace(d),b=d):this.isType(a.types.LINE)?b=f(b).switchTag(this.config.tag).get():(f(b).wrap(d),b=d)),(e.isString(this.config.style)||e.isString(this.config.attribute)||e.isString(this.config["class"]))&&(e.isString(this.config["class"])&&(b=this.remove(b)),f(b).isTextNode()&&(g=document.createElement(f.DEFAULT_INLINE_TAG),f(b).wrap(g),b=g),e.isString(this.config.style)&&c!==this.config["default"]&&(b.style[this.config.style]=c),e.isString(this.config.attribute)&&b.setAttribute(this.config.attribute,c),e.isString(this.config["class"])&&f(b).addClass(this.config["class"]+c)),e.isFunction(this.config.add)&&(b=this.config.add(b,c)),b):this.remove(b)},a.prototype.isType=function(a){return a===this.config.type},a.prototype.match=function(a){var b,c,d,g,h;if(!f(a).isElement())return!1;if(e.isString(this.config.parentTag)&&(null!=(g=a.parentNode)?g.tagName:void 0)!==this.config.parentTag)return!1;if(e.isString(this.config.tag)&&a.tagName!==this.config.tag)return!1;if(e.isString(this.config.style)&&(!a.style[this.config.style]||a.style[this.config.style]===this.config["default"]))return!1;if(e.isString(this.config.attribute)&&!a.hasAttribute(this.config.attribute))return!1;if(e.isString(this.config["class"])){for(h=f(a).classes(),c=0,d=h.length;d>c;c++)if(b=h[c],0===b.indexOf(this.config["class"]))return!0;return!1}return!0},a.prototype.prepare=function(a){return e.isString(this.config.prepare)?document.execCommand(this.config.prepare,!1,a):e.isFunction(this.config.prepare)?this.config.prepare(a):void 0},a.prototype.remove=function(b){var c,d,g,h;if(!this.match(b))return b;if(e.isString(this.config.style)&&(b.style[this.config.style]="",b.getAttribute("style")||b.removeAttribute("style")),e.isString(this.config.attribute)&&b.removeAttribute(this.config.attribute),e.isString(this.config["class"]))for(h=f(b).classes(),d=0,g=h.length;g>d;d++)c=h[d],0===c.indexOf(this.config["class"])&&f(b).removeClass(c);if(e.isString(this.config.tag))if(this.isType(a.types.LINE))e.isString(this.config.parentTag)&&(null!=b.previousSibling&&f(b).splitBefore(b.parentNode.parentNode),null!=b.nextSibling&&f(b.nextSibling).splitBefore(b.parentNode.parentNode)),b=f(b).switchTag(f.DEFAULT_BLOCK_TAG).get();else{if(this.isType(a.types.EMBED))return void f(b).remove();b=f(b).switchTag(f.DEFAULT_INLINE_TAG).get()}return e.isString(this.config.parentTag)&&f(b.parentNode).unwrap(),e.isFunction(this.config.remove)&&(b=this.config.remove(b)),b.tagName!==f.DEFAULT_INLINE_TAG||b.hasAttributes()||(b=f(b).unwrap()),b},a.prototype.value=function(a){var b,c,d,g;if(!this.match(a))return void 0;if(this.config.value)return this.config.value(a);if(e.isString(this.config.attribute))return a.getAttribute(this.config.attribute)||void 0;if(e.isString(this.config.style))return a.style[this.config.style]||void 0;if(e.isString(this.config["class"])){for(g=f(a).classes(),c=0,d=g.length;d>c;c++)if(b=g[c],0===b.indexOf(this.config["class"]))return b.slice(this.config["class"].length)}else if(e.isString(this.config.tag))return!0;return void 0},a}(),b.exports=d},{"../lib/dom":17,lodash:1}],11:[function(a,b,c){var d,e,f,g,h,i=function(a,b){function c(){this.constructor=a}for(var d in b)j.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},j={}.hasOwnProperty;g=a("lodash"),h=a("../lib/dom"),d=a("./format"),f=a("../lib/linked-list"),e=function(a){function b(a,c){this.node=a,this.formats=g.clone(c),this.text=h(this.node).text(),this.length=this.text.length,h(this.node).data(b.DATA_KEY,this)}return i(b,a),b.DATA_KEY="leaf",b.isLeafNode=function(a){return h(a).isTextNode()||null==a.firstChild},b.prototype.deleteText=function(a,c){var d;if(c>0)return this.text=this.text.slice(0,a)+this.text.slice(a+c),this.length=this.text.length,null!=h.EMBED_TAGS[this.node.tagName]?(d=document.createTextNode(this.text),h(d).data(b.DATA_KEY,this),this.node=h(this.node).replace(d).get()):h(this.node).text(this.text)},b.prototype.insertText=function(a,c){var d;return this.text=this.text.slice(0,a)+c+this.text.slice(a),h(this.node).isTextNode()?h(this.node).text(this.text):(d=document.createTextNode(c),h(d).data(b.DATA_KEY,this),this.node.tagName===h.DEFAULT_BREAK_TAG?this.node=h(this.node).replace(d).get():(this.node.appendChild(d),this.node=d)),this.length=this.text.length},b}(f.Node),b.exports=e},{"../lib/dom":17,"../lib/linked-list":18,"./format":10,lodash:1}],12:[function(a,b,c){var d,e,f,g,h,i,j,k,l=function(a,b){function c(){this.constructor=a}for(var d in b)m.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},m={}.hasOwnProperty;j=a("lodash"),d=a("rich-text/lib/delta"),k=a("../lib/dom"),e=a("./format"),f=a("./leaf"),g=a("./line"),h=a("../lib/linked-list"),i=a("./normalizer"),g=function(a){function b(a,c){this.doc=a,this.node=c,this.formats={},this.rebuild(),b.__super__.constructor.call(this,this.node)}return l(b,a),b.DATA_KEY="line",b.prototype.buildLeaves=function(a,b){return j.each(k(a).childNodes(),function(a){return function(c){var d;return c=a.doc.normalizer.normalizeNode(c),d=j.clone(b),j.each(a.doc.formats,function(a,b){return!a.isType(e.types.LINE)&&a.match(c)?d[b]=a.value(c):void 0}),f.isLeafNode(c)?a.leaves.append(new f(c,d)):a.buildLeaves(c,d)}}(this))},b.prototype.deleteText=function(a,b){var c,d,e;if(b>0){for(e=this.findLeafAt(a),d=e[0],a=e[1];null!=d&&b>0;)c=Math.min(b,d.length-a),d.deleteText(a,c),b-=c,d=d.next,a=0;return this.rebuild()}},b.prototype.findLeaf=function(a){return null!=a?k(a).data(f.DATA_KEY):void 0},b.prototype.findLeafAt=function(a,b){var c;if(null==b&&(b=!1),a>=this.length-1)return[this.leaves.last,this.leaves.last.length];for(c=this.leaves.first;null!=c;){if(a<c.length||a===c.length&&b)return[c,a];a-=c.length,c=c.next}return[this.leaves.last,a-this.leaves.last.length]},b.prototype.format=function(a,b){var c;return j.isObject(a)?c=a:(c={},c[a]=b),j.each(c,function(a){return function(b,c){var d,f;return f=a.doc.formats[c],null!=f?(f.isType(e.types.LINE)&&(f.config.exclude&&a.formats[f.config.exclude]&&(d=a.doc.formats[f.config.exclude],null!=d&&(a.node=d.remove(a.node),delete a.formats[f.config.exclude])),a.node=f.add(a.node,b)),b?a.formats[c]=b:delete a.formats[c]):void 0}}(this)),this.resetContent()},b.prototype.formatText=function(a,b,c,d){var f,g,h,i,j,l,m,n,o,p;if(l=this.findLeafAt(a),g=l[0],h=l[1],f=this.doc.formats[c],null!=f&&f.config.type!==e.types.LINE){for(;null!=g&&b>0;){if(j=g.next,d&&g.formats[c]!==d||!d&&null!=g.formats[c]){if(p=g.node,null!=g.formats[c]){for(k(p).splitBefore(this.node);!f.match(p);)p=p.parentNode;k(p).split(g.length)}h>0&&(m=k(p).split(h),i=m[0],p=m[1]),g.length>h+b&&(n=k(p).split(b),p=n[0],o=n[1]),f.add(p,d)}b-=g.length-h,h=0,g=j}return this.rebuild()}},b.prototype._insert=function(a,b,c){var d,e,f,g,h,i;return h=this.findLeafAt(a),d=h[0],e=h[1],b=j.reduce(c,function(a){return function(b,c,d){var e;return e=a.doc.formats[d],null!=e&&(b=e.add(b,c)),b}}(this),b),i=k(d.node).split(e),g=i[0],f=i[1],f&&(f=k(f).splitBefore(this.node).get()),this.node.insertBefore(b,f),this.rebuild()},b.prototype.insertEmbed=function(a,b){var c,d,f,g,h,i,l,m;return l=this.findLeafAt(a),d=l[0],f=l[1],m=k(d.node).split(f),i=m[0],g=m[1],c=j.find(Object.keys(b),function(a){return function(b){return a.doc.formats[b].isType(e.types.EMBED)}}(this)),h=this.doc.formats[c].add({},b[c]),b=j.clone(b),delete b[c],this._insert(a,h,b)},b.prototype.insertText=function(a,b,c){var d,e,f;return null==c&&(c={}),b.length>0?(f=this.findLeafAt(a),d=f[0],e=f[1],j.isEqual(d.formats,c)?(d.insertText(e,b),this.resetContent()):this._insert(a,document.createTextNode(b),c)):void 0},b.prototype.optimize=function(){return i.optimizeLine(this.node),this.rebuild()},b.prototype.rebuild=function(a){return null==a&&(a=!1),!a&&null!=this.outerHTML&&this.outerHTML===this.node.outerHTML&&j.all(this.leaves.toArray(),function(a){return function(b){return k(b.node).isAncestor(a.node)}}(this))?!1:(this.node=this.doc.normalizer.normalizeNode(this.node),0!==k(this.node).length()||this.node.querySelector(k.DEFAULT_BREAK_TAG)||this.node.appendChild(document.createElement(k.DEFAULT_BREAK_TAG)),this.leaves=new h,this.formats=j.reduce(this.doc.formats,function(a){return function(b,c,d){return c.isType(e.types.LINE)&&(c.match(a.node)?b[d]=c.value(a.node):delete b[d]),b}}(this),this.formats),this.buildLeaves(this.node,{}),this.resetContent(),!0)},b.prototype.resetContent=function(){return k(this.node).data(b.DATA_KEY,this),this.outerHTML=this.node.outerHTML,this.length=1,this.delta=new d,j.each(this.leaves.toArray(),function(a){return function(b){return a.length+=b.length,null!=k.EMBED_TAGS[b.node.tagName]?a.delta.insert(1,b.formats):a.delta.insert(b.text,b.formats)}}(this)),this.delta.insert("\n",this.formats)},b}(h.Node),b.exports=g},{"../lib/dom":17,"../lib/linked-list":18,"./format":10,"./leaf":11,"./line":12,"./normalizer":13,lodash:1,"rich-text/lib/delta":3}],13:[function(a,b,c){var d,e,f,g;e=a("lodash"),g=a("../lib/dom"),f=function(a){return a=a.replace(/(?:^|[-_])(\w)/g,function(a,b){return b?b.toUpperCase():""}),a.charAt(0).toLowerCase()+a.slice(1)},d=function(){function a(){this.whitelist={styles:{},tags:{}},this.whitelist.tags[g.DEFAULT_BREAK_TAG]=!0,this.whitelist.tags[g.DEFAULT_BLOCK_TAG]=!0,this.whitelist.tags[g.DEFAULT_INLINE_TAG]=!0}return a.ALIASES={STRONG:"B",EM:"I",DEL:"S",STRIKE:"S"},a.ATTRIBUTES={color:"color",face:"fontFamily",size:"fontSize"},a.prototype.addFormat=function(a){return null!=a.tag&&(this.whitelist.tags[a.tag]=!0),null!=a.parentTag&&(this.whitelist.tags[a.parentTag]=!0),null!=a.style?this.whitelist.styles[a.style]=!0:void 0},a.prototype.normalizeLine=function(b){return b=a.wrapInline(b),b=a.handleBreaks(b),"LI"===b.tagName&&a.flattenList(b),b=a.pullBlocks(b),b=this.normalizeNode(b),a.unwrapText(b),null!=b&&null!=g.LIST_TAGS[b.tagName]&&(b=b.firstChild),b},a.prototype.normalizeNode=function(b){return g(b).isTextNode()?b:(e.each(a.ATTRIBUTES,function(a,c){var d;return b.hasAttribute(c)?(d=b.getAttribute(c),"size"===c&&(d=g.convertFontSize(d)),b.style[a]=d,b.removeAttribute(c)):void 0}),"bold"===b.style.fontWeight&&(b.style.fontWeight="",g(b).wrap(document.createElement("b"))),this.whitelistStyles(b),this.whitelistTags(b))},a.prototype.whitelistStyles=function(a){var b,c;return b=g(a).styles(),c=e.omit(b,function(a){return function(b,c){return null==a.whitelist.styles[f(c)]}}(this)),Object.keys(c).length<Object.keys(b).length?Object.keys(c).length>0?g(a).styles(c,!0):a.removeAttribute("style"):void 0},a.prototype.whitelistTags=function(b){return g(b).isElement()?(null!=a.ALIASES[b.tagName]?b=g(b).switchTag(a.ALIASES[b.tagName]).get():null==this.whitelist.tags[b.tagName]&&(b=null!=g.BLOCK_TAGS[b.tagName]?g(b).switchTag(g.DEFAULT_BLOCK_TAG).get():b.hasAttributes()||null==b.firstChild?g(b).switchTag(g.DEFAULT_INLINE_TAG).get():g(b).unwrap()),b):b},a.flattenList=function(a){var b,c,d;return d=a.nextSibling,b=e.map(a.querySelectorAll("li")),b.forEach(function(b){return a.parentNode.insertBefore(b,d),d=b.nextSibling}),c=e.map(a.querySelectorAll(Object.keys(g.LIST_TAGS).join(","))),c.forEach(function(a){return g(a).remove()})},a.handleBreaks=function(a){var b;return b=e.map(a.querySelectorAll(g.DEFAULT_BREAK_TAG)),e.each(b,function(b){return function(b){return null==b.nextSibling||g.isIE(10)&&null==b.previousSibling?void 0:g(b.nextSibling).splitBefore(a.parentNode)}}(this)),a},a.optimizeLine=function(a){var b,c,d,f;for(a.normalize(),b=g(a).length(),d=g(a).descendants(),f=[];d.length>0;)c=d.pop(),null!=(null!=c?c.parentNode:void 0)&&null==g.EMBED_TAGS[c.tagName]&&(c.tagName===g.DEFAULT_BREAK_TAG?0!==b?f.push(g(c).remove()):f.push(void 0):0===g(c).length()?(d.push(c.nextSibling),f.push(g(c).unwrap())):null!=c.previousSibling&&c.tagName===c.previousSibling.tagName&&e.isEqual(g(c).attributes(),g(c.previousSibling).attributes())?(d.push(c.firstChild),f.push(g(c.previousSibling).merge(c))):f.push(void 0));return f},a.pullBlocks=function(b){var c;for(c=b.firstChild;null!=c;){if(null!=g.BLOCK_TAGS[c.tagName]&&"LI"!==c.tagName){g(c).isolate(b.parentNode),null!=g.LIST_TAGS[c.tagName]&&c.firstChild?(g(c.parentNode).unwrap(),null==b.parentNode&&(b=c)):(g(c).unwrap(),a.pullBlocks(b));break}c=c.nextSibling}return b},a.stripComments=function(a){return a.replace(/<!--[\s\S]*?-->/g,"")},a.stripWhitespace=function(a){return a=a.trim(),a=a.replace(/(\r?\n|\r)+/g," "),a=a.replace(/\>\s+\</g,"><")},a.wrapInline=function(a){var b,c;if(null!=g.BLOCK_TAGS[a.tagName])return a;for(b=document.createElement(g.DEFAULT_BLOCK_TAG),a.parentNode.insertBefore(b,a);null!=a&&null==g.BLOCK_TAGS[a.tagName];)c=a.nextSibling,b.appendChild(a),a=c;return b},a.unwrapText=function(a){var b;return b=e.map(a.querySelectorAll(g.DEFAULT_INLINE_TAG)),e.each(b,function(a){return a.hasAttributes()?void 0:g(a).unwrap()})},a}(),b.exports=d},{"../lib/dom":17,lodash:1}],14:[function(a,b,c){var d,e,f,g,h,i;h=a("lodash"),i=a("../lib/dom"),d=a("./leaf"),e=a("./normalizer"),f=a("../lib/range"),g=function(){function a(a,b){this.doc=a,this.emitter=b,this.focus=!1,this.range=new f(0,0),this.nullDelay=!1,this.update("silent")}return a.prototype.checkFocus=function(){return document.activeElement===this.doc.root},a.prototype.getRange=function(a){var b,c,d;return null==a&&(a=!1),this.checkFocus()?(c=this._getNativeRange(),null==c?null:(d=this._positionToIndex(c.startContainer,c.startOffset),b=c.startContainer===c.endContainer&&c.startOffset===c.endOffset?d:this._positionToIndex(c.endContainer,c.endOffset),new f(Math.min(d,b),Math.max(d,b)))):a?this.range:null},a.prototype.preserve=function(a){var b,c,d,e,f,g,h,i,j;return d=this._getNativeRange(),null!=d&&this.checkFocus()?(e=this._encodePosition(d.startContainer,d.startOffset),i=e[0],j=e[1],f=this._encodePosition(d.endContainer,d.endOffset),b=f[0],c=f[1],a(),g=this._decodePosition(i,j),i=g[0],j=g[1],h=this._decodePosition(b,c),b=h[0],c=h[1],this._setNativeRange(i,j,b,c)):a()},a.prototype.setRange=function(a,b){var c,d,e,f,g,h,i;return null!=a?(e=this._indexToPosition(a.start),h=e[0],i=e[1],a.isCollapsed()?(f=[h,i],c=f[0],d=f[1]):(g=this._indexToPosition(a.end),c=g[0],d=g[1]),this._setNativeRange(h,i,c,d)):this._setNativeRange(null),this.update(b)},a.prototype.shiftAfter=function(a,b,c){var d;return d=this.getRange(),c(),null!=d?(d.shift(a,b),this.setRange(d,"silent")):void 0},a.prototype.update=function(a){var b,c,d,e;return c=this.checkFocus(),d=this.getRange(!0),b="silent"!==a&&(!f.compare(d,this.range)||c!==this.focus),e=c?d:null,null!==e||"user"!==a||this.nullDelay?(this.nullDelay=!1,this.range=d,this.focus=c,b?this.emitter.emit(this.emitter.constructor.events.SELECTION_CHANGE,e,a):void 0):this.nullDelay=!0;
},a.prototype._decodePosition=function(a,b){var c;return i(a).isElement()&&(c=i(a.parentNode).childNodes().indexOf(a),b+=c,a=a.parentNode),[a,b]},a.prototype._encodePosition=function(a,b){for(var c;;){if(i(a).isTextNode()||a.tagName===i.DEFAULT_BREAK_TAG||null!=i.EMBED_TAGS[a.tagName])return[a,b];if(b<a.childNodes.length)a=a.childNodes[b],b=0;else{if(0===a.childNodes.length)return null==this.doc.normalizer.whitelist.tags[a.tagName]&&(c=document.createTextNode(""),a.appendChild(c),a=c),[a,0];if(a=a.lastChild,!i(a).isElement())return[a,i(a).length()];if(a.tagName===i.DEFAULT_BREAK_TAG||null!=i.EMBED_TAGS[a.tagName])return[a,1];b=a.childNodes.length}}},a.prototype._getNativeRange=function(){var a,b;return b=document.getSelection(),(null!=b?b.rangeCount:void 0)>0&&(a=b.getRangeAt(0),i(a.startContainer).isAncestor(this.doc.root,!0)&&(a.startContainer===a.endContainer||i(a.endContainer).isAncestor(this.doc.root,!0)))?a:null},a.prototype._indexToPosition=function(a){var b,c,d;return 0===this.doc.lines.length?[this.doc.root,0]:(d=this.doc.findLeafAt(a,!0),b=d[0],c=d[1],this._decodePosition(b.node,c))},a.prototype._positionToIndex=function(a,b){var c,d,e,f,g,h;if(i.isIE(10)&&"BR"===a.tagName&&1===b&&(b=0),h=this._encodePosition(a,b),d=h[0],b=h[1],f=this.doc.findLine(d),null==f)return 0;for(c=f.findLeaf(d),g=0;null!=f.prev;)f=f.prev,g+=f.length;if(null==c)return g;for(e=0;null!=c.prev;)c=c.prev,e+=c.length;return g+e+b},a.prototype._setNativeRange=function(a,b,c,d){var e,f;if(f=document.getSelection())if(null!=a){if(this.checkFocus()||this.doc.root.focus(),e=this._getNativeRange(),null==e||a!==e.startContainer||b!==e.startOffset||c!==e.endContainer||d!==e.endOffset)return f.removeAllRanges(),e=document.createRange(),e.setStart(a,b),e.setEnd(c,d),f.addRange(e)}else if(f.removeAllRanges(),this.doc.root.blur(),i.isIE(11)&&!i.isIE(9))return document.body.focus()},a}(),b.exports=g},{"../lib/dom":17,"../lib/range":20,"./leaf":11,"./normalizer":13,lodash:1}],15:[function(a,b,c){a("./modules/authorship"),a("./modules/image-tooltip"),a("./modules/keyboard"),a("./modules/link-tooltip"),a("./modules/multi-cursor"),a("./modules/paste-manager"),a("./modules/toolbar"),a("./modules/tooltip"),a("./modules/undo-manager"),b.exports=a("./quill")},{"./modules/authorship":21,"./modules/image-tooltip":22,"./modules/keyboard":23,"./modules/link-tooltip":24,"./modules/multi-cursor":25,"./modules/paste-manager":26,"./modules/toolbar":27,"./modules/tooltip":28,"./modules/undo-manager":29,"./quill":30}],16:[function(a,b,c){var d,e,f,g=function(a,b){function c(){this.constructor=a}for(var d in b)h.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},h={}.hasOwnProperty;f=a("./dom"),e=a("./picker"),d=function(a){function b(){b.__super__.constructor.apply(this,arguments),f(this.container).addClass("ql-color-picker")}return g(b,a),b.prototype.buildItem=function(a,c,d){var e;return e=b.__super__.buildItem.call(this,a,c,d),e.style.backgroundColor=c.value,e},b}(e),b.exports=d},{"./dom":17,"./picker":19}],17:[function(a,b,c){var d,e,f,g,h,i=function(a,b){return function(){return a.apply(b,arguments)}},j=function(a,b){function c(){this.constructor=a}for(var d in b)k.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},k={}.hasOwnProperty;f=a("lodash"),h=null,e=function(){function a(a){this.node=a,this.trigger=i(this.trigger,this)}return a.prototype.addClass=function(a){return this.hasClass(a)?void 0:(null!=this.node.classList?this.node.classList.add(a):null!=this.node.className&&(this.node.className=(this.node.className+" "+a).trim()),this)},a.prototype.attributes=function(a){var b,c,d,e,g,h;if(a)return f.each(a,function(a){return function(b,c){return a.node.setAttribute(c,b)}}(this)),this;if(null==this.node.attributes)return{};for(a={},g=this.node.attributes,c=d=0,e=g.length;e>d;c=++d)h=g[c],b=this.node.attributes[c],a[b.name]=b.value;return a},a.prototype.child=function(a){var b,c;for(b=this.node.firstChild,c=g(b).length();null!=b&&!(c>a);)a-=c,b=b.nextSibling,c=g(b).length();return null==b&&(b=this.node.lastChild,a=g(b).length()),[b,a]},a.prototype.childNodes=function(){return f.map(this.node.childNodes)},a.prototype.classes=function(){return this.node.className.split(/\s+/)},a.prototype.data=function(a,b){var c;return null!=b?(null==this.node["ql-data"]&&(this.node["ql-data"]={}),this.node["ql-data"][a]=b,this):null!=(c=this.node["ql-data"])?c[a]:void 0},a.prototype.descendants=function(){return f.map(this.node.getElementsByTagName("*"))},a.prototype.get=function(){return this.node},a.prototype.hasClass=function(a){return null!=this.node.classList?this.node.classList.contains(a):null!=this.node.className?this.classes().indexOf(a)>-1:!1},a.prototype.isAncestor=function(a,b){var c;if(null==b&&(b=!1),a===this.node)return b;for(c=this.node;c;){if(c===a)return!0;c=c.parentNode}return!1},a.prototype.isElement=function(){var a;return(null!=(a=this.node)?a.nodeType:void 0)===g.ELEMENT_NODE},a.prototype.isTextNode=function(){var a;return(null!=(a=this.node)?a.nodeType:void 0)===g.TEXT_NODE},a.prototype.isolate=function(a){return null!=this.node.nextSibling&&g(this.node.nextSibling).splitBefore(a),this.splitBefore(a),this},a.prototype.length=function(){var a;return null==this.node?0:(a=this.text().length,this.isElement()&&(a+=this.node.querySelectorAll(Object.keys(g.EMBED_TAGS).join(",")).length),a)},a.prototype.merge=function(a){var b;return b=g(a),this.isElement()?(b.moveChildren(this.node),this.normalize()):this.text(this.text()+b.text()),b.remove(),this},a.prototype.moveChildren=function(a){return f.each(this.childNodes(),function(b){return a.appendChild(b)}),this},a.prototype.nextLineNode=function(a){var b;return b=this.node.nextSibling,null==b&&this.node.parentNode!==a&&(b=this.node.parentNode.nextSibling),null!=b&&null!=g.LIST_TAGS[b.tagName]&&(b=b.firstChild),b},a.prototype.normalize=function(){var a,b,c,d;for(b=this.node.firstChild;null!=b;)d=b.nextSibling,a=g(b),null!=d&&g(d).isTextNode()&&(0===a.text().length?a.remove():a.isTextNode()&&(c=d.nextSibling,a.merge(d),d=c)),b=d;return this},a.prototype.on=function(a,b){return this.node.addEventListener(a,function(c){return function(d){var e,f;return e=!h||"keydown"!==a&&"keyup"!==a?d:h,f=b.call(c.node,e),f||(d.preventDefault(),d.stopPropagation()),f}}(this)),this},a.prototype.remove=function(){var a;return null!=(a=this.node.parentNode)&&a.removeChild(this.node),this.node=null,null},a.prototype.removeClass=function(a){var b;if(this.hasClass(a))return null!=this.node.classList?this.node.classList.remove(a):null!=this.node.className&&(b=this.classes(),b.splice(b.indexOf(a),1),this.node.className=b.join(" ")),this.node.getAttribute("class")||this.node.removeAttribute("class"),this},a.prototype.replace=function(a){return this.node.parentNode.replaceChild(a,this.node),this.node=a,this},a.prototype.splitBefore=function(a,b){var c,d,e,f;if(null==b&&(b=!1),this.node===a||this.node.parentNode===a)return this;if(null!=this.node.previousSibling||b){for(e=this.node.parentNode,d=e.cloneNode(!1),e.parentNode.insertBefore(d,e.nextSibling),f=this.node;null!=f;)c=f.nextSibling,d.appendChild(f),f=c;return g(d).splitBefore(a)}return g(this.node.parentNode).splitBefore(a)},a.prototype.split=function(a,b){var c,d,e,f,h,i,j,k,l,m;if(null==b&&(b=!1),j=this.length(),a=Math.max(0,a),a=Math.min(a,j),!b&&0===a)return[this.node.previousSibling,this.node,!1];if(!b&&a===j)return[this.node,this.node.nextSibling,!1];if(this.node.nodeType===g.TEXT_NODE)return c=this.node.splitText(a),[this.node,c,!0];for(h=this.node,m=this.node.cloneNode(!1),this.node.parentNode.insertBefore(m,h.nextSibling),k=this.child(a),d=k[0],a=k[1],l=g(d).split(a),e=l[0],f=l[1];null!==f;)i=f.nextSibling,m.appendChild(f),f=i;return[h,m,!0]},a.prototype.styles=function(a,b){var c,d;return null==b&&(b=!1),a?(b||(a=f.defaults(a,this.styles())),d=f.map(a,function(a,b){return b+": "+a}).join("; ")+";",this.node.setAttribute("style",d),this):(d=this.node.getAttribute("style")||"",c=f.reduce(d.split(";"),function(a,b){var c,d,e;return d=b.split(":"),c=d[0],e=d[1],c&&e&&(c=c.trim(),e=e.trim(),a[c.toLowerCase()]=e),a},{}))},a.prototype.switchTag=function(a){var b,c;return a=a.toUpperCase(),this.node.tagName===a?this:(c=document.createElement(a),b=this.attributes(),null==g.VOID_TAGS[a]&&this.moveChildren(c),this.replace(c),this.node=c,this.attributes(b))},a.prototype.text=function(a){if(null!=a){switch(this.node.nodeType){case g.ELEMENT_NODE:this.node.textContent=a;break;case g.TEXT_NODE:this.node.data=a}return this}switch(this.node.nodeType){case g.ELEMENT_NODE:return this.node.tagName===g.DEFAULT_BREAK_TAG?"":null!=g.EMBED_TAGS[this.node.tagName]?g.EMBED_TEXT:null!=this.node.textContent?this.node.textContent:"";case g.TEXT_NODE:return this.node.data||"";default:return""}},a.prototype.textNodes=function(){var a,b,c;for(c=document.createTreeWalker(this.node,NodeFilter.SHOW_TEXT,null,!1),b=[];a=c.nextNode();)b.push(a);return b},a.prototype.toggleClass=function(a,b){return null==b&&(b=!this.hasClass(a)),b?this.addClass(a):this.removeClass(a),this},a.prototype.trigger=function(a,b){var c,d,e;return null==b&&(b={}),["keypress","keydown","keyup"].indexOf(a)<0?(c=document.createEvent("Event"),c.initEvent(a,b.bubbles,b.cancelable)):(c=document.createEvent("KeyboardEvent"),h=f.clone(b),f.isNumber(b.key)?h.which=b.key:f.isString(b.key)?h.which=b.key.toUpperCase().charCodeAt(0):h.which=0,g.isIE(10)?(e=[],b.altKey&&e.push("Alt"),b.ctrlKey&&e.push("Control"),b.metaKey&&e.push("Meta"),b.shiftKey&&e.push("Shift"),c.initKeyboardEvent(a,b.bubbles,b.cancelable,window,0,0,e.join(" "),null,null)):(d=f.isFunction(c.initKeyboardEvent)?"initKeyboardEvent":"initKeyEvent",c[d](a,b.bubbles,b.cancelable,window,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,0,0))),this.node.dispatchEvent(c),h=null,this},a.prototype.unwrap=function(){var a,b;return b=this.node.firstChild,a=this.node.nextSibling,f.each(this.childNodes(),function(b){return function(c){return b.node.parentNode.insertBefore(c,a)}}(this)),this.remove(),b},a.prototype.wrap=function(a){var b;for(null!=this.node.parentNode&&this.node.parentNode.insertBefore(a,this.node),b=a;null!=b.firstChild;)b=a.firstChild;return b.appendChild(this.node),this},a}(),d=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return j(b,a),b.prototype["default"]=function(){return this.node.querySelector("option[selected]")},b.prototype.option=function(a,b){var c,d,e,g,h,i;if(null==b&&(b=!0),i=f.isElement(a)?a.value:a){for(i=i.replace(/[^\w]+/g,""),h=this.node.children,d=e=0,g=h.length;g>e;d=++e)if(c=h[d],c.value.replace(/[^\w]+/g,"")===i){this.node.selectedIndex=d;break}}else this.node.selectedIndex=-1;return b&&this.trigger("change"),this},b.prototype.reset=function(a){var b;return null==a&&(a=!0),b=this["default"](),null!=b?b.selected=!0:this.node.selectedIndex=0,a&&this.trigger("change"),this},b.prototype.value=function(){return this.node.selectedIndex>-1?this.node.options[this.node.selectedIndex].value:""},b}(e),g=function(a){return"SELECT"===(null!=a?a.tagName:void 0)?new d(a):new e(a)},g=f.extend(g,{ELEMENT_NODE:1,NOBREAK_SPACE:"&nbsp;",TEXT_NODE:3,ZERO_WIDTH_NOBREAK_SPACE:"\ufeff",DEFAULT_BLOCK_TAG:"DIV",DEFAULT_BREAK_TAG:"BR",DEFAULT_INLINE_TAG:"SPAN",EMBED_TEXT:"!",FONT_SIZES:{"10px":1,"13px":2,"16px":3,"18px":4,"24px":5,"32px":6,"48px":7},KEYS:{BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},BLOCK_TAGS:{ADDRESS:"ADDRESS",ARTICLE:"ARTICLE",ASIDE:"ASIDE",AUDIO:"AUDIO",BLOCKQUOTE:"BLOCKQUOTE",CANVAS:"CANVAS",DD:"DD",DIV:"DIV",DL:"DL",FIGCAPTION:"FIGCAPTION",FIGURE:"FIGURE",FOOTER:"FOOTER",FORM:"FORM",H1:"H1",H2:"H2",H3:"H3",H4:"H4",H5:"H5",H6:"H6",HEADER:"HEADER",HGROUP:"HGROUP",LI:"LI",OL:"OL",OUTPUT:"OUTPUT",P:"P",PRE:"PRE",SECTION:"SECTION",TABLE:"TABLE",TBODY:"TBODY",TD:"TD",TFOOT:"TFOOT",TH:"TH",THEAD:"THEAD",TR:"TR",UL:"UL",VIDEO:"VIDEO"},EMBED_TAGS:{IMG:"IMG"},LINE_TAGS:{DIV:"DIV",LI:"LI"},LIST_TAGS:{OL:"OL",UL:"UL"},VOID_TAGS:{AREA:"AREA",BASE:"BASE",BR:"BR",COL:"COL",COMMAND:"COMMAND",EMBED:"EMBED",HR:"HR",IMG:"IMG",INPUT:"INPUT",KEYGEN:"KEYGEN",LINK:"LINK",META:"META",PARAM:"PARAM",SOURCE:"SOURCE",TRACK:"TRACK",WBR:"WBR"},convertFontSize:function(a){var b,c,d,e;f.isString(a)&&a.indexOf("px")>-1?(d=Object.keys(g.FONT_SIZES),e=f.values(g.FONT_SIZES)):(e=Object.keys(g.FONT_SIZES),d=f.values(g.FONT_SIZES));for(b in d)if(c=d[b],parseInt(a)<=parseInt(c))return e[b];return f.last(e)},isIE:function(a){var b;return b=document.documentMode,b&&a>=b},isIOS:function(){return/iPhone|iPad/i.test(navigator.userAgent)},isMac:function(){return/Mac/i.test(navigator.platform)}}),b.exports=g},{lodash:1}],18:[function(a,b,c){var d,e;e=function(){function a(a){this.data=a,this.prev=this.next=null}return a}(),d=function(){function a(){this.length=0,this.first=this.last=null}return a.Node=e,a.prototype.append=function(a){return null!=this.first?(a.next=null,this.last.next=a):this.first=a,a.prev=this.last,this.last=a,this.length+=1},a.prototype.insertAfter=function(a,b){return b.prev=a,null!=a?(b.next=a.next,null!=a.next&&(a.next.prev=b),a.next=b,a===this.last&&(this.last=b)):(b.next=this.first,this.first.prev=b,this.first=b),this.length+=1},a.prototype.remove=function(a){return this.length>1?(null!=a.prev&&(a.prev.next=a.next),null!=a.next&&(a.next.prev=a.prev),a===this.first&&(this.first=a.next),a===this.last&&(this.last=a.prev)):this.first=this.last=null,a.prev=a.next=null,this.length-=1},a.prototype.toArray=function(){var a,b;for(a=[],b=this.first;null!=b;)a.push(b),b=b.next;return a},a}(),b.exports=d},{}],19:[function(a,b,c){var d,e,f;e=a("lodash"),f=a("./dom"),d=function(){function a(a){this.select=a,this.container=document.createElement("span"),this.buildPicker(),f(this.container).addClass("ql-picker"),this.select.style.display="none",this.select.parentNode.insertBefore(this.container,this.select),f(document).on("click",function(a){return function(){return a.close(),!0}}(this)),f(this.label).on("click",function(a){return function(){return e.defer(function(){return f(a.container).toggleClass("ql-expanded")}),!1}}(this)),f(this.select).on("change",function(a){return function(){var b,c;return a.select.selectedIndex>-1&&(b=a.container.querySelectorAll(".ql-picker-item")[a.select.selectedIndex],c=a.select.options[a.select.selectedIndex]),a.selectItem(b,!1),f(a.label).toggleClass("ql-active",c!==f(a.select)["default"]())}}(this))}return a.TEMPLATE='<span class="ql-picker-label"></span><span class="ql-picker-options"></span>',a.prototype.buildItem=function(a,b,c){var d;return d=document.createElement("span"),d.setAttribute("data-value",b.getAttribute("value")),f(d).addClass("ql-picker-item").text(f(b).text()).on("click",function(a){return function(){return a.selectItem(d,!0),a.close()}}(this)),this.select.selectedIndex===c&&this.selectItem(d,!1),d},a.prototype.buildPicker=function(){var b;return e.each(f(this.select).attributes(),function(a){return function(b,c){return a.container.setAttribute(c,b)}}(this)),this.container.innerHTML=a.TEMPLATE,this.label=this.container.querySelector(".ql-picker-label"),b=this.container.querySelector(".ql-picker-options"),e.each(this.select.options,function(a){return function(c,d){var e;return e=a.buildItem(b,c,d),b.appendChild(e)}}(this))},a.prototype.close=function(){return f(this.container).removeClass("ql-expanded")},a.prototype.selectItem=function(a,b){var c,d;return c=this.container.querySelector(".ql-selected"),null!=c&&f(c).removeClass("ql-selected"),null!=a?(d=a.getAttribute("data-value"),f(a).addClass("ql-selected"),f(this.label).text(f(a).text()),f(this.select).option(d,b),this.label.setAttribute("data-value",d)):(this.label.innerHTML="&nbsp;",this.label.removeAttribute("data-value"))},a}(),b.exports=d},{"./dom":17,lodash:1}],20:[function(a,b,c){var d,e;e=a("lodash"),d=function(){function a(a,b){this.start=a,this.end=b}return a.compare=function(a,b){return a===b?!0:null==a||null==b?!1:a.equals(b)},a.prototype.equals=function(a){return null==a?!1:this.start===a.start&&this.end===a.end},a.prototype.shift=function(a,b){var c;return c=e.map([this.start,this.end],function(c){return a>c?c:b>=0?c+b:Math.max(a,c+b)}),this.start=c[0],this.end=c[1],c},a.prototype.isCollapsed=function(){return this.start===this.end},a}(),b.exports=d},{lodash:1}],21:[function(a,b,c){var d,e,f,g,h;f=a("../quill"),g=f.require("lodash"),h=f.require("dom"),e=f.require("delta"),d=function(){function a(a,b){this.quill=a,this.options=b,null!=this.options.button&&this.attachButton(this.options.button),this.options.enabled&&this.enable(),this.quill.addFormat("author",{"class":"author-"}),null!=this.options.authorId&&(this.quill.on(this.quill.constructor.events.PRE_EVENT,function(a){return function(b,c,d){var h,i;return b===a.quill.constructor.events.TEXT_CHANGE&&"user"===d?(h=new e,i={author:a.options.authorId},g.each(c.ops,function(b){return null==b["delete"]?null!=b.insert||null!=b.retain&&null!=b.attributes?(b.attributes||(b.attributes={}),b.attributes.author=a.options.authorId,h.retain(b.retain||b.insert.length||1,i)):h.retain(b.retain):void 0}),a.quill.updateContents(h,f.sources.SILENT)):void 0}}(this)),this.addAuthor(this.options.authorId,this.options.color))}return a.DEFAULTS={authorId:null,color:"transparent",enabled:!1},a.prototype.addAuthor=function(a,b){var c;return c={},c[".authorship .author-"+a]={"background-color":""+b},this.quill.theme.addStyles(c)},a.prototype.attachButton=function(a){var b;return b=h(a),b.on("click",function(a){return function(){return b.toggleClass("ql-on"),a.enable($dom.hasClass("ql-on"))}}(this))},a.prototype.enable=function(a){return null==a&&(a=!0),h(this.quill.root).toggleClass("authorship",a)},a.prototype.disable=function(){return this.enable(!1)},a}(),f.registerModule("authorship",d),b.exports=d},{"../quill":30}],22:[function(a,b,c){var d,e,f,g,h,i,j,k=function(a,b){function c(){this.constructor=a}for(var d in b)l.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},l={}.hasOwnProperty;f=a("../quill"),h=a("./tooltip"),i=f.require("lodash"),j=f.require("dom"),d=f.require("delta"),g=f.require("range"),e=function(a){function b(a,c){this.quill=a,this.options=c,this.options=i.defaults(this.options,h.DEFAULTS),b.__super__.constructor.call(this,this.quill,this.options),this.preview=this.container.querySelector(".preview"),this.textbox=this.container.querySelector(".input"),j(this.container).addClass("ql-image-tooltip"),this.initListeners()}return k(b,a),b.DEFAULTS={template:'<input class="input" type="textbox"> <div class="preview"> <span>Preview</span> </div> <a href="javascript:;" class="cancel">Cancel</a> <a href="javascript:;" class="insert">Insert</a>'},b.prototype.initListeners=function(){return j(this.quill.root).on("focus",i.bind(this.hide,this)),j(this.container.querySelector(".insert")).on("click",i.bind(this.insertImage,this)),j(this.container.querySelector(".cancel")).on("click",i.bind(this.hide,this)),j(this.textbox).on("input",i.bind(this._preview,this)),this.initTextbox(this.textbox,this.insertImage,this.hide),this.quill.onModuleLoad("toolbar",function(a){return function(b){return a.toolbar=b,b.initFormat("image",i.bind(a._onToolbar,a))}}(this))},b.prototype.insertImage=function(){var a,b;return b=this._normalizeURL(this.textbox.value),null==this.range&&(this.range=new g(0,0)),this.range&&(this.preview.innerHTML="<span>Preview</span>",this.textbox.value="",a=this.range.end,this.quill.insertEmbed(a,"image",b,"user"),this.quill.setSelection(a+1,a+1)),this.hide()},b.prototype._onToolbar=function(a,b){return b?(this.textbox.value||(this.textbox.value="http://"),this.show(),this.textbox.focus(),i.defer(function(a){return function(){return a.textbox.setSelectionRange(a.textbox.value.length,a.textbox.value.length)}}(this))):(this.quill.deleteText(a,"user"),this.toolbar.setActive("image",!1))},b.prototype._preview=function(){var a;if(this._matchImageURL(this.textbox.value))return"IMG"===this.preview.firstChild.tagName?this.preview.firstChild.setAttribute("src",this.textbox.value):(a=document.createElement("img"),a.setAttribute("src",this.textbox.value),this.preview.replaceChild(a,this.preview.firstChild))},b.prototype._matchImageURL=function(a){return/^https?:\/\/.+\.(jpe?g|gif|png)$/.test(a)},b.prototype._normalizeURL=function(a){return/^https?:\/\//.test(a)||(a="http://"+a),a},b}(h),f.registerModule("image-tooltip",e),b.exports=e},{"../quill":30,"./tooltip":28}],23:[function(a,b,c){var d,e,f,g,h;f=a("../quill"),g=f.require("lodash"),h=f.require("dom"),d=f.require("delta"),e=function(){function a(a,b){this.quill=a,this.hotkeys={},this._initListeners(),this._initHotkeys(),this.quill.onModuleLoad("toolbar",function(a){return function(b){return a.toolbar=b}}(this))}return a.hotkeys={BOLD:{key:"B",metaKey:!0},INDENT:{key:h.KEYS.TAB},ITALIC:{key:"I",metaKey:!0},OUTDENT:{key:h.KEYS.TAB,shiftKey:!0},UNDERLINE:{key:"U",metaKey:!0}},a.prototype.addHotkey=function(a,b){return Array.isArray(a)||(a=[a]),g.each(a,function(a){return function(c){var d,e;return c=g.isObject(c)?g.clone(c):{key:c},c.callback=b,e=g.isNumber(c.key)?c.key:c.key.toUpperCase().charCodeAt(0),null==(d=a.hotkeys)[e]&&(d[e]=[]),a.hotkeys[e].push(c)}}(this))},a.prototype.toggleFormat=function(a,b){var c,d;return c=a.isCollapsed()?this.quill.getContents(Math.max(0,a.start-1),a.end):this.quill.getContents(a),d=0===c.ops.length||!g.all(c.ops,function(a){var c;return null!=(c=a.attributes)?c[b]:void 0}),a.isCollapsed()?this.quill.prepareFormat(b,d,f.sources.USER):this.quill.formatText(a,b,d,f.sources.USER),null!=this.toolbar?this.toolbar.setActive(b,d):void 0},a.prototype._initEnter=function(){var a;return a=[{key:h.KEYS.ENTER},{key:h.KEYS.ENTER,shiftKey:!0}],this.addHotkey(a,function(a){return function(b,c){var e,h,i,j,k,l;return null==b?!0:(k=a.quill.editor.doc.findLineAt(b.start),i=k[0],j=k[1],l=i.findLeafAt(j),h=l[0],j=l[1],e=(new d).retain(b.start).insert("\n",i.formats)["delete"](b.end-b.start),a.quill.updateContents(e,f.sources.USER),g.each(h.formats,function(b,c){a.quill.prepareFormat(c,b),null!=a.toolbar&&a.toolbar.setActive(c,b)}),!1)}}(this))},a.prototype._initDeletes=function(){return this.addHotkey([h.KEYS.DELETE,h.KEYS.BACKSPACE],function(a){return function(b,c){var d,e,g,i;return null!=b&&a.quill.getLength()>0&&(b.start!==b.end?a.quill.deleteText(b.start,b.end,f.sources.USER):c.key===h.KEYS.BACKSPACE?(i=a.quill.editor.doc.findLineAt(b.start),e=i[0],g=i[1],0===g&&(e.formats.bullet||e.formats.list)?(d=e.formats.bullet?"bullet":"list",a.quill.formatLine(b.start,b.start,d,!1)):b.start>0&&a.quill.deleteText(b.start-1,b.start,f.sources.USER)):b.start<a.quill.getLength()-1&&a.quill.deleteText(b.start,b.start+1,f.sources.USER)),!1}}(this))},a.prototype._initHotkeys=function(){return this.addHotkey(a.hotkeys.INDENT,function(a){return function(b){return a._onTab(b,!1),!1}}(this)),this.addHotkey(a.hotkeys.OUTDENT,function(a){return function(a){return!1}}(this)),g.each(["bold","italic","underline"],function(b){return function(c){return b.addHotkey(a.hotkeys[c.toUpperCase()],function(a){return b.toggleFormat(a,c),!1})}}(this)),this._initDeletes(),this._initEnter()},a.prototype._initListeners=function(){return h(this.quill.root).on("keydown",function(a){return function(b){var c;return c=!1,g.each(a.hotkeys[b.which],function(d){var e;return e=h.isMac()?b.metaKey:b.metaKey||b.ctrlKey,!!d.metaKey==!!e&&!!d.shiftKey==!!b.shiftKey&&!!d.altKey==!!b.altKey?(c=d.callback(a.quill.getSelection(),d,b)===!1||c,!0):void 0}),!c}}(this))},a.prototype._onTab=function(a,b){var c;return null==b&&(b=!1),c=(new d).retain(a.start).insert("	")["delete"](a.end-a.start).retain(this.quill.getLength()-a.end),this.quill.updateContents(c,f.sources.USER),this.quill.setSelection(a.start+1,a.start+1)},a}(),f.registerModule("keyboard",e),b.exports=e},{"../quill":30}],24:[function(a,b,c){var d,e,f,g,h,i=function(a,b){function c(){this.constructor=a}for(var d in b)j.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},j={}.hasOwnProperty;e=a("../quill"),f=a("./tooltip"),g=e.require("lodash"),h=e.require("dom"),d=function(a){function b(a,c){this.quill=a,this.options=c,this.options=g.defaults(this.options,f.DEFAULTS),b.__super__.constructor.call(this,this.quill,this.options),h(this.container).addClass("ql-link-tooltip"),this.textbox=this.container.querySelector(".input"),this.link=this.container.querySelector(".url"),this.initListeners()}return i(b,a),b.DEFAULTS={maxLength:50,template:'<span class="title">Visit URL:&nbsp;</span> <a href="#" class="url" target="_blank" href="about:blank"></a> <input class="input" type="text"> <span>&nbsp;&#45;&nbsp;</span> <a href="javascript:;" class="change">Change</a> <a href="javascript:;" class="remove">Remove</a> <a href="javascript:;" class="done">Done</a>'},b.hotkeys={LINK:{key:"K",metaKey:!0}},b.prototype.initListeners=function(){return this.quill.on(this.quill.constructor.events.SELECTION_CHANGE,function(a){return function(b){var c;if(null!=b&&b.isCollapsed())return c=a._findAnchor(b),c?(a.setMode(c.href,!1),a.show(c)):a.container.style.left!==f.HIDE_MARGIN?(a.range=null,a.hide()):void 0}}(this)),h(this.container.querySelector(".done")).on("click",g.bind(this.saveLink,this)),h(this.container.querySelector(".remove")).on("click",function(a){return function(){return a.removeLink(a.range)}}(this)),h(this.container.querySelector(".change")).on("click",function(a){return function(){return a.setMode(a.link.href,!0)}}(this)),this.initTextbox(this.textbox,this.saveLink,this.hide),this.quill.onModuleLoad("toolbar",function(a){return function(b){return a.toolbar=b,b.initFormat("link",g.bind(a._onToolbar,a))}}(this)),this.quill.onModuleLoad("keyboard",function(a){return function(c){return c.addHotkey(b.hotkeys.LINK,g.bind(a._onKeyboard,a))}}(this))},b.prototype.saveLink=function(){var a,b,c;return c=this._normalizeURL(this.textbox.value),null!=this.range&&(b=this.range.end,this.range.isCollapsed()?(a=this._findAnchor(this.range),null!=a&&(a.href=c)):this.quill.formatText(this.range,"link",c,"user"),this.quill.setSelection(b,b)),this.setMode(c,!1)},b.prototype.removeLink=function(a){return a.isCollapsed()&&(a=this._expandRange(a)),this.hide(),this.quill.formatText(a,"link",!1,"user"),null!=this.toolbar?this.toolbar.setActive("link",!1):void 0},b.prototype.setMode=function(a,b){var c;return null==b&&(b=!1),b?(this.textbox.value=a,g.defer(function(b){return function(){return b.textbox.focus(),b.textbox.setSelectionRange(0,a.length)}}(this))):(this.link.href=a,a=this.link.href,c=a.length>this.options.maxLength?a.slice(0,this.options.maxLength)+"...":a,h(this.link).text(c)),h(this.container).toggleClass("editing",b)},b.prototype._findAnchor=function(a){var b,c,d,e;for(e=this.quill.editor.doc.findLeafAt(a.start,!0),b=e[0],d=e[1],null!=b&&(c=b.node);null!=c&&c!==this.quill.root;){if("A"===c.tagName)return c;c=c.parentNode}return null},b.prototype._expandRange=function(a){var b,c,d,e,f;return e=this.quill.editor.doc.findLeafAt(a.start,!0),c=e[0],d=e[1],f=a.start-d,b=f+c.length,{start:f,end:b}},b.prototype._onToolbar=function(a,b){return this._toggle(a,b)},b.prototype._onKeyboard=function(){var a;return a=this.quill.getSelection(),this._toggle(a,!this._findAnchor(a))},b.prototype._toggle=function(a,b){var c;if(a)return b?a.isCollapsed()?void 0:(this.setMode(this._suggestURL(a),!0),c=this.quill.editor.selection._getNativeRange(),this.show(c)):this.removeLink(a)},b.prototype._normalizeURL=function(a){return/^(https?:\/\/|mailto:)/.test(a)||(a="http://"+a),a},b.prototype._suggestURL=function(a){var b;return b=this.quill.getText(a),this._normalizeURL(b)},b}(f),e.registerModule("link-tooltip",d),b.exports=d},{"../quill":30,"./tooltip":28}],25:[function(a,b,c){var d,e,f,g,h,i=function(a,b){function c(){this.constructor=a}for(var d in b)j.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},j={}.hasOwnProperty;f=a("../quill"),d=a("eventemitter2").EventEmitter2,g=f.require("lodash"),h=f.require("dom"),e=function(a){function b(a,b){this.quill=a,this.options=b,this.cursors={},this.container=this.quill.addContainer("ql-multi-cursor",!0),this.quill.on(this.quill.constructor.events.TEXT_CHANGE,g.bind(this._applyDelta,this))}return i(b,a),b.DEFAULTS={template:'<span class="cursor-flag"> <span class="cursor-name"></span> </span> <span class="cursor-caret"></span>',timeout:2500},b.events={CURSOR_ADDED:"cursor-addded",CURSOR_MOVED:"cursor-moved",CURSOR_REMOVED:"cursor-removed"},b.prototype.clearCursors=function(){return g.each(Object.keys(this.cursors),g.bind(this.removeCursor,this)),this.cursors={}},b.prototype.moveCursor=function(a,b){var c;return c=this.cursors[a],c.index=b,h(c.elem).removeClass("hidden"),clearTimeout(c.timer),c.timer=setTimeout(function(a){return function(){return h(c.elem).addClass("hidden"),c.timer=null}}(this),this.options.timeout),this._updateCursor(c),c},b.prototype.removeCursor=function(a){var c;return c=this.cursors[a],this.emit(b.events.CURSOR_REMOVED,c),null!=c&&c.elem.parentNode.removeChild(c.elem),delete this.cursors[a]},b.prototype.setCursor=function(a,c,d,e){var f;return null==this.cursors[a]&&(this.cursors[a]=f={userId:a,index:c,color:e,elem:this._buildCursor(d,e)},this.emit(b.events.CURSOR_ADDED,f)),g.defer(function(b){return function(){return b.moveCursor(a,c)}}(this)),this.cursors[a]},b.prototype.shiftCursors=function(a,b,c){return null==c&&(c=null),g.each(this.cursors,function(d){return function(d,e){return d&&(d.index>a||d.userId===c)?d.index+=Math.max(b,a-d.index):void 0}}(this))},b.prototype.update=function(){return g.each(this.cursors,function(a){return function(b,c){return null!=b?(a._updateCursor(b),!0):void 0}}(this))},b.prototype._applyDelta=function(a){var b;return b=0,g.each(a.ops,function(a){return function(c){var d,e;return d=0,null!=c.insert?(d=c.insert.length||1,a.shiftCursors(b,d,null!=(e=c.attributes)?e.author:void 0)):null!=c["delete"]?a.shiftCursors(b,-1*c["delete"],null):null!=c.retain&&(a.shiftCursors(b,0,null),d=c.retain),b+=d}}(this)),this.update()},b.prototype._buildCursor=function(a,b){var c,d,e,f;return c=document.createElement("span"),h(c).addClass("cursor"),c.innerHTML=this.options.template,e=c.querySelector(".cursor-flag"),f=c.querySelector(".cursor-name"),h(f).text(a),d=c.querySelector(".cursor-caret"),d.style.backgroundColor=f.style.backgroundColor=b,this.container.appendChild(c),c},b.prototype._updateCursor=function(a){var c,d;return c=this.quill.getBounds(a.index),null==c?this.removeCursor(a.userId):(a.elem.style.top=c.top+this.quill.container.scrollTop+"px",a.elem.style.left=c.left+"px",a.elem.style.height=c.height+"px",d=a.elem.querySelector(".cursor-flag"),h(a.elem).toggleClass("top",parseInt(a.elem.style.top)<=d.offsetHeight).toggleClass("left",parseInt(a.elem.style.left)<=d.offsetWidth).toggleClass("right",this.quill.root.offsetWidth-parseInt(a.elem.style.left)<=d.offsetWidth),this.emit(b.events.CURSOR_MOVED,a))},b}(d),f.registerModule("multi-cursor",e),b.exports=e},{"../quill":30,eventemitter2:2}],26:[function(a,b,c){var d,e,f,g,h,i,j=function(a,b){return function(){return a.apply(b,arguments)}};g=a("../quill"),e=a("../core/document"),h=g.require("lodash"),i=g.require("dom"),d=g.require("delta"),f=function(){function a(b,c){var d;this.quill=b,this._onConvert=j(this._onConvert,this),this.container=this.quill.addContainer("ql-paste-manager"),this.container.setAttribute("contenteditable",!0),i(this.quill.root).on("paste",h.bind(this._paste,this)),this.options=h.defaults(c,a.DEFAULTS),null==(d=this.options).onConvert&&(d.onConvert=this._onConvert)}return a.DEFAULTS={onConvert:null},a.prototype._onConvert=function(a){var b,c,f;return c=new e(a,this.quill.options),b=c.toDelta(),f=b.length(),0===f?b:b.compose((new d).retain(f-1)["delete"](1))},a.prototype._paste=function(){var a,b;return a=this.quill.getLength(),b=this.quill.getSelection(),
null!=b?(this.container.focus(),h.defer(function(a){return function(){var c,d,e,f,g,h,i;return c=a.options.onConvert(a.container),d=c.length(),d>0&&(b.start>0&&c.ops.unshift({retain:b.start}),c["delete"](b.end-b.start),a.quill.updateContents(c,"user")),a.quill.setSelection(b.start+d,b.start+d),h=a.quill.editor.doc.findLineAt(b.start+d),e=h[0],g=h[1],f=e.node.getBoundingClientRect().bottom,i=document.documentElement.clientHeight,f>i&&e.node.scrollIntoView(!1),a.container.innerHTML=""}}(this))):void 0},a}(),g.registerModule("paste-manager",f),b.exports=f},{"../core/document":8,"../quill":30}],27:[function(a,b,c){var d,e,f,g;d=a("../quill"),f=d.require("lodash"),g=d.require("dom"),e=function(){function a(b,c){if(this.quill=b,this.options=c,(f.isString(this.options)||f.isElement(this.options))&&(this.options={container:this.options}),null==this.options.container)throw new Error("container required for toolbar",this.options);this.container=f.isString(this.options.container)?document.querySelector(this.options.container):this.options.container,this.inputs={},this.preventUpdate=!1,this.triggering=!1,f.each(this.quill.options.formats,function(b){return function(c){return null==a.formats.TOOLTIP[c]?b.initFormat(c,f.bind(b._applyFormat,b,c)):void 0}}(this)),this.quill.on(d.events.FORMAT_INIT,function(b){return function(c){return null==a.formats.TOOLTIP[c]?b.initFormat(c,f.bind(b._applyFormat,b,c)):void 0}}(this)),this.quill.on(d.events.SELECTION_CHANGE,function(a){return function(b){return null!=b?a.updateActive(b):void 0}}(this)),this.quill.on(d.events.TEXT_CHANGE,function(a){return function(){return a.updateActive()}}(this)),this.quill.onModuleLoad("keyboard",function(a){return function(b){return b.addHotkey([g.KEYS.BACKSPACE,g.KEYS.DELETE],function(){return f.defer(f.bind(a.updateActive,a))})}}(this)),g(this.container).addClass("ql-toolbar"),g.isIOS()&&g(this.container).addClass("ios")}return a.DEFAULTS={container:null},a.formats={LINE:{align:"align",bullet:"bullet",list:"list"},SELECT:{align:"align",background:"background",color:"color",font:"font",size:"size"},TOGGLE:{bold:"bold",bullet:"bullet",image:"image",italic:"italic",link:"link",list:"list",strike:"strike",underline:"underline"},TOOLTIP:{image:"image",link:"link"}},a.prototype.initFormat=function(b,c){var d,e,f;return f=".ql-"+b,null!=a.formats.SELECT[b]?(f="select"+f,d="change"):d="click",e=this.container.querySelector(f),null!=e?(this.inputs[b]=e,g(e).on(d,function(a){return function(){var b,f;return f="change"===d?g(e).value():!g(e).hasClass("ql-active"),a.preventUpdate=!0,a.quill.focus(),b=a.quill.getSelection(),null!=b&&c(b,f),a.preventUpdate=!1,!0}}(this))):void 0},a.prototype.setActive=function(a,b){var c,d,e,f;return"image"===a&&(b=!1),d=this.inputs[a],null!=d?(c=g(d),"SELECT"===d.tagName?(this.triggering=!0,f=c.value(d),null==b&&(b=null!=(e=c["default"]())?e.value:void 0),Array.isArray(b)&&(b=""),b!==f&&(null!=b?c.option(b):c.reset()),this.triggering=!1):c.toggleClass("ql-active",b||!1)):void 0},a.prototype.updateActive=function(a,b){var c;return null==b&&(b=null),a||(a=this.quill.getSelection()),null==a||this.preventUpdate?void 0:(c=this._getActive(a),f.each(this.inputs,function(a){return function(d,e){return(!Array.isArray(b)||b.indexOf(e)>-1)&&a.setActive(e,c[e]),!0}}(this)))},a.prototype._applyFormat=function(b,c,d){return this.triggering?void 0:(c.isCollapsed()?this.quill.prepareFormat(b,d,"user"):null!=a.formats.LINE[b]?this.quill.formatLine(c,b,d,"user"):this.quill.formatText(c,b,d,"user"),f.defer(function(a){return function(){return a.updateActive(c,["bullet","list"]),a.setActive(b,d)}}(this)))},a.prototype._getActive=function(a){var b,c;return b=this._getLeafActive(a),c=this._getLineActive(a),f.defaults({},b,c)},a.prototype._getLeafActive=function(a){var b,c,d,e,g;return a.isCollapsed()?(g=this.quill.editor.doc.findLineAt(a.start),d=g[0],e=g[1],b=0===e?this.quill.getContents(a.start,a.end+1):this.quill.getContents(a.start-1,a.end)):b=this.quill.getContents(a),c=f.map(b.ops,"attributes"),this._intersectFormats(c)},a.prototype._getLineActive=function(a){var b,c,d,e,g,h;for(c=[],g=this.quill.editor.doc.findLineAt(a.start),b=g[0],e=g[1],h=this.quill.editor.doc.findLineAt(a.end),d=h[0],e=h[1],null!=d&&d===b&&(d=d.next);null!=b&&b!==d;)c.push(f.clone(b.formats)),b=b.next;return this._intersectFormats(c)},a.prototype._intersectFormats=function(b){return f.reduce(b.slice(1),function(b,c){var d,e,g,h,i;return null==c&&(c={}),d=Object.keys(b),g=null!=c?Object.keys(c):{},h=f.intersection(d,g),i=f.difference(d,g),e=f.difference(g,d),f.each(h,function(d){if(null!=a.formats.SELECT[d])if(Array.isArray(b[d])){if(b[d].indexOf(c[d])<0)return b[d].push(c[d])}else if(b[d]!==c[d])return b[d]=[b[d],c[d]]}),f.each(i,function(c){return null!=a.formats.TOGGLE[c]?delete b[c]:null==a.formats.SELECT[c]||Array.isArray(b[c])?void 0:b[c]=[b[c]]}),f.each(e,function(d){return null!=a.formats.SELECT[d]?b[d]=[c[d]]:void 0}),b},b[0]||{})},a}(),d.registerModule("toolbar",e),b.exports=e},{"../quill":30}],28:[function(a,b,c){var d,e,f,g;d=a("../quill"),f=d.require("lodash"),g=d.require("dom"),e=function(){function a(b,c){this.quill=b,this.options=c,this.container=this.quill.addContainer("ql-tooltip"),this.container.innerHTML=this.options.template,this.hide(),this.quill.on(this.quill.constructor.events.TEXT_CHANGE,function(b){return function(c,d){return b.container.style.left!==a.HIDE_MARGIN?(b.range=null,b.hide()):void 0}}(this))}return a.DEFAULTS={offset:10,template:""},a.HIDE_MARGIN="-10000px",a.prototype.initTextbox=function(a,b,c){return g(a).on("keydown",function(a){return function(d){switch(d.which){case g.KEYS.ENTER:return d.preventDefault(),b.call(a);case g.KEYS.ESCAPE:return d.preventDefault(),c.call(a);default:return!0}}}(this))},a.prototype.hide=function(){return this.container.style.left=a.HIDE_MARGIN,this.range&&this.quill.setSelection(this.range),this.range=null},a.prototype.position=function(a){var b,c,d,e,f,g,h;return null!=a?(g=a.getBoundingClientRect(),f=this.quill.container.getBoundingClientRect(),d=g.left-f.left,e=g.top-f.top,c=g.bottom-f.bottom,b=d+g.width/2-this.container.offsetWidth/2,h=e+g.height+this.options.offset,h+this.container.offsetHeight>this.quill.container.offsetHeight&&(h=e-this.container.offsetHeight-this.options.offset),b=Math.max(0,Math.min(b,this.quill.container.offsetWidth-this.container.offsetWidth)),h=Math.max(0,Math.min(h,this.quill.container.offsetHeight-this.container.offsetHeight))):(b=this.quill.container.offsetWidth/2-this.container.offsetWidth/2,h=this.quill.container.offsetHeight/2-this.container.offsetHeight/2),h+=this.quill.container.scrollTop,[b,h]},a.prototype.show=function(a){var b,c,d;return this.range=this.quill.getSelection(),c=this.position(a),b=c[0],d=c[1],this.container.style.left=b+"px",this.container.style.top=d+"px",this.container.focus()},a}(),d.registerModule("tooltip",e),b.exports=e},{"../quill":30}],29:[function(a,b,c){var d,e,f,g;e=a("../quill"),g=e.require("lodash"),d=e.require("delta"),f=function(){function a(a,b){this.quill=a,this.options=null!=b?b:{},this.lastRecorded=0,this.ignoreChange=!1,this.clear(),this.initListeners()}return a.DEFAULTS={delay:1e3,maxStack:100,userOnly:!1},a.hotkeys={UNDO:{key:"Z",metaKey:!0},REDO:{key:"Z",metaKey:!0,shiftKey:!0}},a.prototype.initListeners=function(){return this.quill.onModuleLoad("keyboard",function(b){return function(c){return c.addHotkey(a.hotkeys.UNDO,function(){return b.quill.editor.checkUpdate(),b.undo(),!1}),c.addHotkey(a.hotkeys.REDO,function(){return b.quill.editor.checkUpdate(),b.redo(),!1})}}(this)),this.quill.on(this.quill.constructor.events.TEXT_CHANGE,function(a){return function(b,c){return a.ignoreChange?void 0:(a.options.userOnly&&c!==e.sources.USER?a._transform(b):a.record(b,a.oldDelta),a.oldDelta=a.quill.getContents())}}(this))},a.prototype.clear=function(){return this.stack={undo:[],redo:[]},this.oldDelta=this.quill.getContents()},a.prototype.record=function(a,b){var c,d,e,f;if(a.ops.length>0){this.stack.redo=[];try{if(f=this.quill.getContents().diff(this.oldDelta),e=(new Date).getTime(),this.lastRecorded+this.options.delay>e&&this.stack.undo.length>0?(c=this.stack.undo.pop(),f=f.compose(c.undo),a=c.redo.compose(a)):this.lastRecorded=e,this.stack.undo.push({redo:a,undo:f}),this.stack.undo.length>this.options.maxStack)return this.stack.undo.unshift()}catch(g){return d=g,console.warn("Could not record change... clearing undo stack."),this.clear()}}},a.prototype.redo=function(){return this._change("redo","undo")},a.prototype.undo=function(){return this._change("undo","redo")},a.prototype._getLastChangeIndex=function(a){var b,c;return c=0,b=0,g.each(a.ops,function(a){return null!=a.insert?c=Math.max(b+(a.insert.length||1),c):null!=a["delete"]?c=Math.max(b,c):null!=a.retain?(null!=a.attributes&&(c=Math.max(b+a.retain,c)),b+=a.retain):void 0}),c},a.prototype._change=function(a,b){var c,d;return this.stack[a].length>0?(c=this.stack[a].pop(),this.lastRecorded=0,this.ignoreChange=!0,this.quill.updateContents(c[a],e.sources.USER),this.ignoreChange=!1,d=this._getLastChangeIndex(c[a]),this.quill.setSelection(d,d),this.oldDelta=this.quill.getContents(),this.stack[b].push(c)):void 0},a.prototype._transform=function(a){var b,c,d,e,f,g,h,i;for(this.oldDelta=a.transform(this.oldDelta,!0),g=this.stack.undo,c=0,e=g.length;e>c;c++)b=g[c],b.undo=a.transform(b.undo,!0),b.redo=a.transform(b.redo,!0);for(h=this.stack.redo,i=[],d=0,f=h.length;f>d;d++)b=h[d],b.undo=a.transform(b.undo,!0),i.push(b.redo=a.transform(b.redo,!0));return i},a}(),e.registerModule("undo-manager",f),b.exports=f},{"../quill":30}],30:[function(a,b,c){var d,e,f,g,h,i,j,k,l,m,n,o=function(a,b){function c(){this.constructor=a}for(var d in b)p.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},p={}.hasOwnProperty,q=[].slice;l=a("lodash"),n=a("../package.json"),d=a("rich-text/lib/delta"),g=a("eventemitter2").EventEmitter2,m=a("./lib/dom"),e=a("./core/document"),f=a("./core/editor"),h=a("./core/format"),i=a("./core/normalizer"),k=a("./lib/range"),j=function(a){function b(a,c){var d,e,g;if(this.container=a,null==c&&(c={}),l.isString(this.container)&&(this.container=document.querySelector(this.container)),null==this.container)throw new Error("Invalid Quill container");if(e=l.defaults(c.modules||{},b.DEFAULTS.modules),d=this.container.innerHTML,this.container.innerHTML="",this.options=l.defaults(c,b.DEFAULTS),this.options.modules=e,this.options.id=this.id="ql-editor-"+(b.editors.length+1),this.modules={},this.root=this.addContainer("ql-editor"),this.editor=new f(this.root,this,this.options),b.editors.push(this),this.setHTML(d,b.sources.SILENT),g=b.themes[this.options.theme],null==g)throw new Error("Cannot load "+this.options.theme+" theme. Are you sure you registered it?");this.theme=new g(this,this.options),l.each(this.options.modules,function(a){return function(b,c){return a.addModule(c,b)}}(this))}return o(b,a),b.version=n.version,b.editors=[],b.modules=[],b.themes=[],b.DEFAULTS={formats:["align","bold","italic","strike","underline","color","background","font","size","link","image","bullet","list"],modules:{keyboard:!0,"paste-manager":!0,"undo-manager":!0},pollInterval:100,readOnly:!1,styles:{},theme:"base"},b.events={FORMAT_INIT:"format-init",MODULE_INIT:"module-init",POST_EVENT:"post-event",PRE_EVENT:"pre-event",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change"},b.sources=f.sources,b.registerModule=function(a,c){return null!=b.modules[a]&&console.warn("Overwriting "+a+" module"),b.modules[a]=c},b.registerTheme=function(a,c){return null!=b.themes[a]&&console.warn("Overwriting "+a+" theme"),b.themes[a]=c},b.require=function(a){switch(a){case"lodash":return l;case"delta":return d;case"format":return h;case"normalizer":return i;case"dom":return m;case"document":return e;case"range":return k;default:return null}},b.prototype.destroy=function(){var a;return a=this.getHTML(),l.each(this.modules,function(a,b){return l.isFunction(a.destroy)?a.destroy():void 0}),this.editor.destroy(),this.removeAllListeners(),b.editors.splice(l.indexOf(b.editors,this),1),this.container.innerHTML=a},b.prototype.addContainer=function(a,b){var c,d;return null==b&&(b=!1),d=b?this.root:null,c=document.createElement("div"),m(c).addClass(a),this.container.insertBefore(c,d),c},b.prototype.addFormat=function(a,c){return this.editor.doc.addFormat(a,c),this.emit(b.events.FORMAT_INIT,a)},b.prototype.addModule=function(a,c){var d;if(d=b.modules[a],null==d)throw new Error("Cannot load "+a+" module. Are you sure you registered it?");return c===!0&&(c={}),c=l.defaults(c,this.theme.constructor.OPTIONS[a]||{},d.DEFAULTS||{}),this.modules[a]=new d(this,c),this.emit(b.events.MODULE_INIT,a,this.modules[a]),this.modules[a]},b.prototype.deleteText=function(a,c,e){var f,g,h;return null==e&&(e=b.sources.API),h=this._buildParams(a,c,{},e),a=h[0],c=h[1],g=h[2],e=h[3],c>a?(f=(new d).retain(a)["delete"](c-a),this.editor.applyDelta(f,e)):void 0},b.prototype.emit=function(){var a,c;return c=arguments[0],a=2<=arguments.length?q.call(arguments,1):[],b.__super__.emit.apply(this,[b.events.PRE_EVENT,c].concat(q.call(a))),b.__super__.emit.apply(this,[c].concat(q.call(a))),b.__super__.emit.apply(this,[b.events.POST_EVENT,c].concat(q.call(a)))},b.prototype.focus=function(){return this.editor.focus()},b.prototype.formatLine=function(a,b,c,d,e){var f,g,h,i,j;return i=this._buildParams(a,b,c,d,e),a=i[0],b=i[1],f=i[2],e=i[3],j=this.editor.doc.findLineAt(b),g=j[0],h=j[1],null!=g&&(b+=g.length-h),this.formatText(a,b,f,e)},b.prototype.formatText=function(a,b,c,e,f){var g,h,i;return i=this._buildParams(a,b,c,e,f),a=i[0],b=i[1],h=i[2],f=i[3],h=l.reduce(h,function(a){return function(b,c,d){var e;return e=a.editor.doc.formats[d],c&&c!==e.config["default"]||(b[d]=null),b}}(this),h),g=(new d).retain(a).retain(b-a,h),this.editor.applyDelta(g,f)},b.prototype.getBounds=function(a){return this.editor.getBounds(a)},b.prototype.getContents=function(a,b){return null==a&&(a=0),null==b&&(b=null),l.isObject(a)&&(b=a.end,a=a.start),this.editor.delta.slice(a,b)},b.prototype.getHTML=function(){return this.editor.doc.getHTML()},b.prototype.getLength=function(){return this.editor.length},b.prototype.getModule=function(a){return this.modules[a]},b.prototype.getSelection=function(){return this.editor.checkUpdate(),this.editor.selection.getRange()},b.prototype.getText=function(a,b){return null==a&&(a=0),null==b&&(b=null),l.map(this.getContents(a,b).ops,function(a){return l.isString(a.insert)?a.insert:""}).join("")},b.prototype.insertEmbed=function(a,b,c,e){var f,g,h,i;return i=this._buildParams(a,0,b,c,e),a=i[0],g=i[1],h=i[2],e=i[3],f=(new d).retain(a).insert(1,h),this.editor.applyDelta(f,e)},b.prototype.insertText=function(a,b,c,e,f){var g,h,i,j;return j=this._buildParams(a,0,c,e,f),a=j[0],h=j[1],i=j[2],f=j[3],b.length>0?(g=(new d).retain(a).insert(b,i),this.editor.applyDelta(g,f)):void 0},b.prototype.onModuleLoad=function(a,c){return this.modules[a]?c(this.modules[a]):this.on(b.events.MODULE_INIT,function(b,d){return b===a?c(d):void 0})},b.prototype.prepareFormat=function(a,c,d){var e,f;return null==d&&(d=b.sources.API),e=this.editor.doc.formats[a],null!=e&&(f=this.getSelection(),null!=f?f.isCollapsed():void 0)?e.isType(h.types.LINE)?this.formatLine(f,a,c,d):e.prepare(c):void 0},b.prototype.setContents=function(a,c){var e;return null==c&&(c=b.sources.API),a=new d(Array.isArray(a)?a.slice():a.ops.slice()),e=l.last(a.slice(a.length()-1).ops),a["delete"](this.getLength()-1),null!=e&&l.isString(e.insert)&&"\n"===l.last(e.insert)&&a["delete"](1),this.updateContents(a,c)},b.prototype.setHTML=function(a,c){return null==c&&(c=b.sources.API),a.trim()||(a="<"+m.DEFAULT_BLOCK_TAG+"><"+m.DEFAULT_BREAK_TAG+"></"+m.DEFAULT_BLOCK_TAG+">"),this.editor.doc.setHTML(a),this.editor.checkUpdate(c)},b.prototype.setSelection=function(a,c,d){var e;return null==d&&(d=b.sources.API),l.isNumber(a)&&l.isNumber(c)?e=new k(a,c):(e=a,d=c||d),this.editor.selection.setRange(e,d)},b.prototype.setText=function(a,c){var e;return null==c&&(c=b.sources.API),e=(new d).insert(a),this.setContents(e,c)},b.prototype.updateContents=function(a,c){return null==c&&(c=b.sources.API),Array.isArray(a)&&(a={ops:a}),this.editor.applyDelta(a,c)},b.prototype._buildParams=function(){var a,c;return c=1<=arguments.length?q.call(arguments,0):[],l.isObject(c[0])&&c.splice(0,1,c[0].start,c[0].end),l.isString(c[2])&&(a={},a[c[2]]=c[3],c.splice(2,2,a)),null==c[3]&&(c[3]=b.sources.API),c},b}(g),j.registerTheme("base",a("./themes/base")),j.registerTheme("snow",a("./themes/snow")),b.exports=j},{"../package.json":7,"./core/document":8,"./core/editor":9,"./core/format":10,"./core/normalizer":13,"./lib/dom":17,"./lib/range":20,"./themes/base":32,"./themes/snow":33,eventemitter2:2,lodash:1,"rich-text/lib/delta":3}],31:[function(a,b,c){b.exports='.ql-image-tooltip{padding:10px;width:300px}.ql-image-tooltip:after{clear:both;content:"";display:table}.ql-image-tooltip a{border:1px solid #000;box-sizing:border-box;display:inline-block;float:left;padding:5px;text-align:center;width:50%}.ql-image-tooltip img{bottom:0;left:0;margin:auto;max-height:100%;max-width:100%;position:absolute;right:0;top:0}.ql-image-tooltip .input{box-sizing:border-box;width:100%}.ql-image-tooltip .preview{margin:10px 0;position:relative;border:1px dashed #000;height:200px}.ql-image-tooltip .preview span{display:inline-block;position:absolute;text-align:center;top:40%;width:100%}.ql-link-tooltip{padding:5px 10px}.ql-link-tooltip input.input{width:170px}.ql-link-tooltip a.done,.ql-link-tooltip input.input{display:none}.ql-link-tooltip a.change{margin-right:4px}.ql-link-tooltip.editing a.done,.ql-link-tooltip.editing input.input{display:inline-block}.ql-link-tooltip.editing a.change,.ql-link-tooltip.editing a.remove,.ql-link-tooltip.editing a.url{display:none}.ql-multi-cursor{position:absolute;left:0;top:0;z-index:1000}.ql-multi-cursor .cursor{margin-left:-1px;position:absolute}.ql-multi-cursor .cursor-flag{bottom:100%;position:absolute;white-space:nowrap}.ql-multi-cursor .cursor-name{display:inline-block;color:#fff;padding:2px 8px}.ql-multi-cursor .cursor-caret{height:100%;position:absolute;width:2px}.ql-multi-cursor .cursor.hidden .cursor-flag{display:none}.ql-multi-cursor .cursor.top .cursor-flag{bottom:auto;top:100%}.ql-multi-cursor .cursor.right .cursor-flag{right:-2px}.ql-paste-manager{left:-100000px;position:absolute;top:50%}.ql-toolbar{box-sizing:border-box}.ql-tooltip{background-color:#fff;border:1px solid #000;box-sizing:border-box;position:absolute;top:0;white-space:nowrap;z-index:2000}.ql-tooltip a{cursor:pointer;text-decoration:none}.ql-container{box-sizing:border-box;cursor:text;font-family:Helvetica,Arial,sans-serif;font-size:13px;height:100%;line-height:1.42;margin:0;overflow-x:hidden;overflow-y:auto;padding:12px 15px;position:relative}.ql-editor{box-sizing:border-box;min-height:100%;outline:0;tab-size:4;white-space:pre-wrap}.ql-editor div{margin:0;padding:0}.ql-editor a{text-decoration:underline}.ql-editor b{font-weight:700}.ql-editor i{font-style:italic}.ql-editor s{text-decoration:line-through}.ql-editor u{text-decoration:underline}.ql-editor a,.ql-editor b,.ql-editor i,.ql-editor s,.ql-editor span,.ql-editor u{background-color:inherit}.ql-editor img{max-width:100%}.ql-editor blockquote,.ql-editor ol,.ql-editor ul{margin:0 0 0 2em;padding:0}.ql-editor ol{list-style-type:decimal}.ql-editor ul{list-style-type:disc}.ql-editor.ql-ie-10 br,.ql-editor.ql-ie-9 br{display:none}'},{}],32:[function(a,b,c){var d,e,f,g;e=a("lodash"),g=a("../../lib/dom"),f=a("./base.styl"),d=function(){function a(b,c){var d;this.quill=b,this.options=c,g(this.quill.container).addClass("ql-container"),this.options.styles&&this.addStyles(f+a.objToCss(this.options.styles)),g.isIE(10)&&(d=g.isIE(9)?"9":"10",g(this.quill.root).addClass("ql-ie-"+d))}return a.OPTIONS={},a.objToCss=function(a){return e.map(a,function(a,b){var c;return c=e.map(a,function(a,b){return b+": "+a+";"}).join(" "),b+" { "+c+" }"}).join("\n")},a.prototype.addStyles=function(b){var c;return e.isObject(b)&&(b=a.objToCss(b)),c=document.createElement("style"),c.type="text/css",c.appendChild(document.createTextNode(b)),document.head.appendChild(c)},a}(),b.exports=d},{"../../lib/dom":17,"./base.styl":31,lodash:1}],33:[function(a,b,c){var d,e,f,g,h,i,j=function(a,b){function c(){this.constructor=a}for(var d in b)k.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},k={}.hasOwnProperty;h=a("lodash"),e=a("../../lib/color-picker"),d=a("../base"),i=a("../../lib/dom"),f=a("../../lib/picker"),g=function(a){function b(a,c){this.quill=a,this.options=c,b.__super__.constructor.apply(this,arguments),i(this.quill.container).addClass("ql-snow"),this.pickers=[],this.quill.on(this.quill.constructor.events.SELECTION_CHANGE,function(a){return function(b){return null!=b?h.invoke(a.pickers,"close"):void 0}}(this)),this.quill.onModuleLoad("multi-cursor",h.bind(this.extendMultiCursor,this)),this.quill.onModuleLoad("toolbar",h.bind(this.extendToolbar,this))}return j(b,a),b.COLORS=["#000000","#e60000","#ff9900","#ffff00","#008A00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"],b.OPTIONS={"multi-cursor":{template:'<span class="cursor-flag"> <span class="cursor-triangle top"></span> <span class="cursor-name"></span> <span class="cursor-triangle bottom"></span> </span> <span class="cursor-caret"></span>'}},b.prototype.extendMultiCursor=function(a){return a.on(a.constructor.events.CURSOR_ADDED,function(a){var b,c;return b=a.elem.querySelector(".cursor-triangle.bottom"),c=a.elem.querySelector(".cursor-triangle.top"),b.style.borderTopColor=c.style.borderBottomColor=a.color})},b.prototype.extendToolbar=function(a){return i(a.container).addClass("ql-snow"),h.each(["color","background","font","size","align"],function(b){return function(c){var d,g;if(g=a.container.querySelector(".ql-"+c),null!=g){switch(c){case"font":case"size":case"align":d=new f(g);break;case"color":case"background":d=new e(g),h.each(d.container.querySelectorAll(".ql-picker-item"),function(a,b){return 7>b?i(a).addClass("ql-primary-color"):void 0})}return null!=d?b.pickers.push(d):void 0}}}(this)),h.each(i(a.container).textNodes(),function(a){return 0===i(a).text().trim().length?i(a).remove():void 0})},b}(d),b.exports=g},{"../../lib/color-picker":16,"../../lib/dom":17,"../../lib/picker":19,"../base":32,lodash:1}]},{},[15])(15)});
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.toMarkdown = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 * to-markdown - an HTML to Markdown converter
 *
 * Copyright 2011-15, Dom Christie
 * Licenced under the MIT licence
 *
 */

'use strict';

var toMarkdown;
var converters;
var mdConverters = require('./lib/md-converters');
var gfmConverters = require('./lib/gfm-converters');
var collapse = require('collapse-whitespace');

/*
 * Set up window and document for Node.js
 */

var _window = (typeof window !== 'undefined' ? window : this), _document;
if (typeof document === 'undefined') {
  _document = require('jsdom').jsdom();
}
else {
  _document = document;
}

/*
 * Utilities
 */

function trim(string) {
  return string.replace(/^[ \r\n\t]+|[ \r\n\t]+$/g, '');
}

var blocks = ['address', 'article', 'aside', 'audio', 'blockquote', 'body',
  'canvas', 'center', 'dd', 'dir', 'div', 'dl', 'dt', 'fieldset', 'figcaption',
  'figure', 'footer', 'form', 'frameset', 'h1', 'h2', 'h3', 'h4','h5', 'h6',
  'header', 'hgroup', 'hr', 'html', 'isindex', 'li', 'main', 'menu', 'nav',
  'noframes', 'noscript', 'ol', 'output', 'p', 'pre', 'section', 'table',
  'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'ul'
];

function isBlock(node) {
  return blocks.indexOf(node.nodeName.toLowerCase()) !== -1;
}

var voids = [
  'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input',
  'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'
];

function isVoid(node) {
  return voids.indexOf(node.nodeName.toLowerCase()) !== -1;
}

/*
 * Parsing HTML strings
 */

function canParseHtml() {
  var Parser = _window.DOMParser, canParse = false;

  // Adapted from https://gist.github.com/1129031
  // Firefox/Opera/IE throw errors on unsupported types
  try {
    // WebKit returns null on unsupported types
    if (new Parser().parseFromString('', 'text/html')) {
      canParse = true;
    }
  } catch (e) {}
  return canParse;
}

function createHtmlParser() {
  var Parser = function () {};

  Parser.prototype.parseFromString = function (string) {
    var newDoc = _document.implementation.createHTMLDocument('');

    if (string.toLowerCase().indexOf('<!doctype') > -1) {
      newDoc.documentElement.innerHTML = string;
    }
    else {
      newDoc.body.innerHTML = string;
    }
    return newDoc;
  };
  return Parser;
}

var HtmlParser = canParseHtml() ? _window.DOMParser : createHtmlParser();

function htmlToDom(string) {
  var tree = new HtmlParser().parseFromString(string, 'text/html');
  collapse(tree, isBlock);
  return tree;
}

/*
 * Flattens DOM tree into single array
 */

function bfsOrder(node) {
  var inqueue = [node],
      outqueue = [],
      elem, children, i;

  while (inqueue.length > 0) {
    elem = inqueue.shift();
    outqueue.push(elem);
    children = elem.childNodes;
    for (i = 0 ; i < children.length; i++) {
      if (children[i].nodeType === 1) { inqueue.push(children[i]); }
    }
  }
  outqueue.shift();
  return outqueue;
}

/*
 * Contructs a Markdown string of replacement text for a given node
 */

function getContent(node) {
  var text = '';
  for (var i = 0; i < node.childNodes.length; i++) {
    if (node.childNodes[i].nodeType === 1) {
      text += node.childNodes[i]._replacement;
    }
    else if (node.childNodes[i].nodeType === 3) {
      text += node.childNodes[i].data;
    }
    else { continue; }
  }
  return text;
}

/*
 * Returns the HTML string of an element with its contents converted
 */

function outer(node, content) {
  return node.cloneNode(false).outerHTML.replace('><', '>'+ content +'<');
}

function canConvert(node, filter) {
  if (typeof filter === 'string') {
    return filter === node.nodeName.toLowerCase();
  }
  if (Array.isArray(filter)) {
    return filter.indexOf(node.nodeName.toLowerCase()) !== -1;
  }
  else if (typeof filter === 'function') {
    return filter.call(toMarkdown, node);
  }
  else {
    throw new TypeError('`filter` needs to be a string, array, or function');
  }
}

function isFlankedByWhitespace(side, node) {
  var sibling, regExp, isFlanked;

  if (side === 'left') {
    sibling = node.previousSibling;
    regExp = / $/;
  }
  else {
    sibling = node.nextSibling;
    regExp = /^ /;
  }

  if (sibling) {
    if (sibling.nodeType === 3) {
      isFlanked = regExp.test(sibling.nodeValue);
    }
    else if(sibling.nodeType === 1 && !isBlock(sibling)) {
      isFlanked = regExp.test(sibling.textContent);
    }
  }
  return isFlanked;
}

function flankingWhitespace(node) {
  var leading = '', trailing = '';

  if (!isBlock(node)) {
    var hasLeading = /^[ \r\n\t]/.test(node.innerHTML),
        hasTrailing = /[ \r\n\t]$/.test(node.innerHTML);

    if (hasLeading && !isFlankedByWhitespace('left', node)) {
      leading = ' ';
    }
    if (hasTrailing && !isFlankedByWhitespace('right', node)) {
      trailing = ' ';
    }
  }

  return { leading: leading, trailing: trailing };
}

/*
 * Finds a Markdown converter, gets the replacement, and sets it on
 * `_replacement`
 */

function process(node) {
  var replacement, content = getContent(node);

  for (var i = 0; i < converters.length; i++) {
    var converter = converters[i];

    if (canConvert(node, converter.filter)) {
      if (typeof converter.replacement !== 'function') {
        throw new TypeError(
          '`replacement` needs to be a function that returns a string'
        );
      }

      var whitespace = flankingWhitespace(node);

      if (whitespace.leading || whitespace.trailing) {
        content = trim(content);
      }
      replacement = whitespace.leading +
                    converter.replacement.call(toMarkdown, content, node) +
                    whitespace.trailing;
      break;
    }
  }

  // Remove blank nodes
  if (!isVoid(node) && !/A/.test(node.nodeName) && /^\s*$/i.test(content)) {
    replacement = '';
  }

  node._replacement = replacement;
}

toMarkdown = function (input, options) {
  options = options || {};

  if (typeof input !== 'string') {
    throw new TypeError(input + ' is not a string');
  }

  // Escape potential ol triggers
  input = input.replace(/(\d+)\. /g, '$1\\. ');

  var clone = htmlToDom(input).body,
      nodes = bfsOrder(clone),
      output;

  converters = mdConverters.slice(0);
  if (options.gfm) {
    converters = gfmConverters.concat(converters);
  }

  if (options.converters) {
    converters = options.converters.concat(converters);
  }

  // Process through nodes in reverse (so deepest child elements are first).
  for (var i = nodes.length - 1; i >= 0; i--) {
    process(nodes[i]);
  }
  output = getContent(clone);

  return output.replace(/^[\t\r\n]+|[\t\r\n\s]+$/g, '')
               .replace(/\n\s+\n/g, '\n\n')
               .replace(/\n{3,}/g, '\n\n');
};

toMarkdown.isBlock = isBlock;
toMarkdown.isVoid = isVoid;
toMarkdown.trim = trim;
toMarkdown.outer = outer;

module.exports = toMarkdown;

},{"./lib/gfm-converters":2,"./lib/md-converters":3,"collapse-whitespace":5,"jsdom":6}],2:[function(require,module,exports){
'use strict';

function cell(content, node) {
  var index = Array.prototype.indexOf.call(node.parentNode.childNodes, node);
  var prefix = ' ';
  if (index === 0) { prefix = '| '; }
  return prefix + content + ' |';
}

var highlightRegEx = /highlight highlight-(\S+)/;

module.exports = [
  {
    filter: 'br',
    replacement: function () {
      return '\n';
    }
  },
  {
    filter: ['del', 's', 'strike'],
    replacement: function (content) {
      return '~~' + content + '~~';
    }
  },

  {
    filter: function (node) {
      return node.type === 'checkbox' && node.parentNode.nodeName === 'LI';
    },
    replacement: function (content, node) {
      return (node.checked ? '[x]' : '[ ]') + ' ';
    }
  },

  {
    filter: ['th', 'td'],
    replacement: function (content, node) {
      return cell(content, node);
    }
  },

  {
    filter: 'tr',
    replacement: function (content, node) {
      var borderCells = '';
      var alignMap = { left: ':--', right: '--:', center: ':-:' };

      if (node.parentNode.nodeName === 'THEAD') {
        for (var i = 0; i < node.childNodes.length; i++) {
          var align = node.childNodes[i].attributes.align;
          var border = '---';

          if (align) { border = alignMap[align.value] || border; }

          borderCells += cell(border, node.childNodes[i]);
        }
      }
      return '\n' + content + (borderCells ? '\n' + borderCells : '');
    }
  },

  {
    filter: 'table',
    replacement: function (content) {
      return '\n\n' + content + '\n\n';
    }
  },

  {
    filter: ['thead', 'tbody', 'tfoot'],
    replacement: function (content) {
      return content;
    }
  },

  // Fenced code blocks
  {
    filter: function (node) {
      return node.nodeName === 'PRE' &&
             node.firstChild &&
             node.firstChild.nodeName === 'CODE';
    },
    replacement: function(content, node) {
      return '\n\n```\n' + node.firstChild.textContent + '\n```\n\n';
    }
  },

  // Syntax-highlighted code blocks
  {
    filter: function (node) {
      return node.nodeName === 'PRE' &&
             node.parentNode.nodeName === 'DIV' &&
             highlightRegEx.test(node.parentNode.className);
    },
    replacement: function (content, node) {
      var language = node.parentNode.className.match(highlightRegEx)[1];
      return '\n\n```' + language + '\n' + node.textContent + '\n```\n\n';
    }
  },

  {
    filter: function (node) {
      return node.nodeName === 'DIV' &&
             highlightRegEx.test(node.className);
    },
    replacement: function (content) {
      return '\n\n' + content + '\n\n';
    }
  }
];

},{}],3:[function(require,module,exports){
'use strict';

module.exports = [
  {
    filter: 'p',
    replacement: function (content) {
      return '\n\n' + content + '\n\n';
    }
  },

  {
    filter: 'br',
    replacement: function () {
      return '  \n';
    }
  },

  {
    filter: ['h1', 'h2', 'h3', 'h4','h5', 'h6'],
    replacement: function(content, node) {
      var hLevel = node.nodeName.charAt(1);
      var hPrefix = '';
      for(var i = 0; i < hLevel; i++) {
        hPrefix += '#';
      }
      return '\n\n' + hPrefix + ' ' + content + '\n\n';
    }
  },

  {
    filter: 'hr',
    replacement: function () {
      return '\n\n* * *\n\n';
    }
  },

  {
    filter: ['em', 'i'],
    replacement: function (content) {
      return '_' + content + '_';
    }
  },

  {
    filter: ['strong', 'b'],
    replacement: function (content) {
      return '**' + content + '**';
    }
  },

  // Inline code
  {
    filter: function (node) {
      var hasSiblings = node.previousSibling || node.nextSibling;
      var isCodeBlock = node.parentNode.nodeName === 'PRE' && !hasSiblings;

      return node.nodeName === 'CODE' && !isCodeBlock;
    },
    replacement: function(content) {
      return '`' + content + '`';
    }
  },

  {
    filter: function (node) {
      return node.nodeName === 'A' && node.getAttribute('href');
    },
    replacement: function(content, node) {
      var titlePart = node.title ? ' "'+ node.title +'"' : '';
      return '[' + content + '](' + node.getAttribute('href') + titlePart + ')';
    }
  },

  {
    filter: 'img',
    replacement: function(content, node) {
      var alt = node.alt || '';
      var src = node.getAttribute('src') || '';
      var title = node.title || '';
      var titlePart = title ? ' "'+ title +'"' : '';
      return src ? '![' + alt + ']' + '(' + src + titlePart + ')' : '';
    }
  },

  // Code blocks
  {
    filter: function (node) {
      return node.nodeName === 'PRE' && node.firstChild.nodeName === 'CODE';
    },
    replacement: function(content, node) {
      return '\n\n    ' + node.firstChild.textContent.replace(/\n/g, '\n    ') + '\n\n';
    }
  },

  {
    filter: 'blockquote',
    replacement: function (content) {
      content = this.trim(content);
      content = content.replace(/\n{3,}/g, '\n\n');
      content = content.replace(/^/gm, '> ');
      return '\n\n' + content + '\n\n';
    }
  },

  {
    filter: 'li',
    replacement: function (content, node) {
      content = content.replace(/^\s+/, '').replace(/\n/gm, '\n    ');
      var prefix = '*   ';
      var parent = node.parentNode;
      var index = Array.prototype.indexOf.call(parent.children, node) + 1;

      prefix = /ol/i.test(parent.nodeName) ? index + '.  ' : '*   ';
      return prefix + content;
    }
  },

  {
    filter: ['ul', 'ol'],
    replacement: function (content, node) {
      var strings = [];
      for (var i = 0; i < node.childNodes.length; i++) {
        strings.push(node.childNodes[i]._replacement);
      }

      if (/li/i.test(node.parentNode.nodeName)) {
        return '\n' + strings.join('\n');
      }
      return '\n\n' + strings.join('\n') + '\n\n';
    }
  },

  {
    filter: function (node) {
      return this.isBlock(node);
    },
    replacement: function (content, node) {
      return '\n\n' + this.outer(node, content) + '\n\n';
    }
  },

  // Anything else!
  {
    filter: function () {
      return true;
    },
    replacement: function (content, node) {
      return this.outer(node, content);
    }
  }
];
},{}],4:[function(require,module,exports){
/**
 * This file automatically generated from `build.js`.
 * Do not manually edit.
 */

module.exports = [
  "address",
  "article",
  "aside",
  "audio",
  "blockquote",
  "canvas",
  "dd",
  "div",
  "dl",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "hr",
  "noscript",
  "ol",
  "output",
  "p",
  "pre",
  "section",
  "table",
  "tfoot",
  "ul",
  "video"
];

},{}],5:[function(require,module,exports){
'use strict';

var blocks = require('block-elements').map(function (name) {
  return name.toUpperCase()
})

function defaultBlockTest (node) {
  return isElem(node) && blocks.indexOf(node.nodeName) >= 0
}

function isText (node) {
  return node && node.nodeType === 3 // Node.TEXT_NODE
}

function isElem (node) {
  return node && node.nodeType === 1 // Node.ELEMENT_NODE
}

/**
 * whitespace(elem [, isBlock]) removes extraneous whitespace from an
 * the given element. The function isBlock may optionally be passed in
 * to determine whether or not an element is a block element; if none
 * is provided, defaults to using the list of block elements provided
 * by the `block-elements` module.
 *
 * @param {Element} root
 * @param {Function} isBlock
 */
function whitespace (root, isBlock) {
  var startSpace = /^ /,
      endSpace = / $/,
      nextNode,
      prevNode,
      prevText,
      node,
      text

  if (typeof isBlock !== 'function')
    isBlock = defaultBlockTest

  function next (node) {
    while (node && node !== root) {
      if (node.nextSibling)
        return node.nextSibling

      node = node.parentNode
      if (prevText && isBlock(node)) {
        prevText.data = prevText.data.replace(/[ \r\n\t]$/, '')
        prevText = null
      }
    }

    return null
  }

  function first (node) {
    return node.firstChild ? node.firstChild : next(node)
  }

  function remove (node) {
    var nextNode = next(node)

    node.parentNode.removeChild(node)
    return nextNode
  }

  if (root.nodeName === 'PRE') return

  // Join adjacent text nodes and whatnot.
  root.normalize()

  node = first(root)
  while (node) {
    prevNode = node.previousSibling
    nextNode = node.nextSibling

    if (isText(node)) {
      text = node.data.replace(/[ \r\n\t]+/g, ' ')

      if (!prevText || prevNode && isBlock(prevNode))
        text = text.replace(startSpace, '')
      if (nextNode && isBlock(nextNode))
        text = text.replace(endSpace, '')

      if (prevText && endSpace.test(prevText.data) &&
          startSpace.test(text))
        text = text.substr(1)

      if (text) {
        node.data = text
        prevText = node
        node = next(node)
      } else {
        node = remove(node)
      }
    } else if (isElem(node)) {
      if (node.nodeName === 'PRE') {
        node = next(node)
        continue
      }

      if (prevText && isBlock(node)) {
        prevText.data = prevText.data.replace(endSpace, '')
        prevText = null
      }

      node = first(node)
    } else {
      node = remove(node)
    }
  }

  // Trim trailing space from last text node
  if (prevText)
    prevText.data = prevText.data.replace(endSpace, '')
}

module.exports = whitespace

},{"block-elements":4}],6:[function(require,module,exports){

},{}]},{},[1])(1)
});
/*
 * Undo.js - A undo/redo framework for JavaScript
 * 
 * http://jzaefferer.github.com/undo
 *
 * Copyright (c) 2011 Jörn Zaefferer
 * 
 * MIT licensed.
 */
(function() {

// based on Backbone.js' inherits	
var ctor = function(){};
var inherits = function(parent, protoProps) {
	var child;

	if (protoProps && protoProps.hasOwnProperty('constructor')) {
		child = protoProps.constructor;
	} else {
		child = function(){ return parent.apply(this, arguments); };
	}

	ctor.prototype = parent.prototype;
	child.prototype = new ctor();
	
	if (protoProps) extend(child.prototype, protoProps);
	
	child.prototype.constructor = child;
	child.__super__ = parent.prototype;
	return child;
};

function extend(target, ref) {
	var name, value;
	for ( name in ref ) {
		value = ref[name];
		if (value !== undefined) {
			target[ name ] = value;
		}
	}
	return target;
};

var Undo = {
	version: '0.1.15'
};

Undo.Stack = function() {
	this.commands = [];
	this.stackPosition = -1;
	this.savePosition = -1;
};

extend(Undo.Stack.prototype, {
	execute: function(command) {
		this._clearRedo();
		command.execute();
		this.commands.push(command);
		this.stackPosition++;
		this.changed();
	},
	undo: function() {
		this.commands[this.stackPosition].undo();
		this.stackPosition--;
		this.changed();
	},
	canUndo: function() {
		return this.stackPosition >= 0;
	},
	redo: function() {
		this.stackPosition++;
		this.commands[this.stackPosition].redo();
		this.changed();
	},
	canRedo: function() {
		return this.stackPosition < this.commands.length - 1;
	},
	save: function() {
		this.savePosition = this.stackPosition;
		this.changed();
	},
	dirty: function() {
		return this.stackPosition != this.savePosition;
	},
	_clearRedo: function() {
		// TODO there's probably a more efficient way for this
		this.commands = this.commands.slice(0, this.stackPosition + 1);
	},
	changed: function() {
		// do nothing, override
	}
});

Undo.Command = function(name) {
	this.name = name;
}

var up = new Error("override me!");

extend(Undo.Command.prototype, {
	execute: function() {
		throw up;
	},
	undo: function() {
		throw up;
	},
	redo: function() {
		this.execute();
	}
});

Undo.Command.extend = function(protoProps) {
	var child = inherits(this, protoProps);
	child.extend = Undo.Command.extend;
	return child;
};
	
// AMD support
if (typeof define === "function" && define.amd) {
	// Define as an anonymous module
	define(Undo);
} else if(typeof module != "undefined" && module.exports){
	module.exports = Undo 
}else {
	this.Undo = Undo;
}
}).call(this);

/**
 * Rangy, a cross-browser JavaScript range and selection library
 * https://github.com/timdown/rangy
 *
 * Copyright 2015, Tim Down
 * Licensed under the MIT license.
 * Version: 1.3.0
 * Build date: 10 May 2015
 */

(function(factory, root) {
    if (typeof define == "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof module != "undefined" && typeof exports == "object") {
        // Node/CommonJS style
        module.exports = factory();
    } else {
        // No AMD or CommonJS support so we place Rangy in (probably) the global variable
        root.rangy = factory();
    }
})(function() {

    var OBJECT = "object", FUNCTION = "function", UNDEFINED = "undefined";

    // Minimal set of properties required for DOM Level 2 Range compliance. Comparison constants such as START_TO_START
    // are omitted because ranges in KHTML do not have them but otherwise work perfectly well. See issue 113.
    var domRangeProperties = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed",
        "commonAncestorContainer"];

    // Minimal set of methods required for DOM Level 2 Range compliance
    var domRangeMethods = ["setStart", "setStartBefore", "setStartAfter", "setEnd", "setEndBefore",
        "setEndAfter", "collapse", "selectNode", "selectNodeContents", "compareBoundaryPoints", "deleteContents",
        "extractContents", "cloneContents", "insertNode", "surroundContents", "cloneRange", "toString", "detach"];

    var textRangeProperties = ["boundingHeight", "boundingLeft", "boundingTop", "boundingWidth", "htmlText", "text"];

    // Subset of TextRange's full set of methods that we're interested in
    var textRangeMethods = ["collapse", "compareEndPoints", "duplicate", "moveToElementText", "parentElement", "select",
        "setEndPoint", "getBoundingClientRect"];

    /*----------------------------------------------------------------------------------------------------------------*/

    // Trio of functions taken from Peter Michaux's article:
    // http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting
    function isHostMethod(o, p) {
        var t = typeof o[p];
        return t == FUNCTION || (!!(t == OBJECT && o[p])) || t == "unknown";
    }

    function isHostObject(o, p) {
        return !!(typeof o[p] == OBJECT && o[p]);
    }

    function isHostProperty(o, p) {
        return typeof o[p] != UNDEFINED;
    }

    // Creates a convenience function to save verbose repeated calls to tests functions
    function createMultiplePropertyTest(testFunc) {
        return function(o, props) {
            var i = props.length;
            while (i--) {
                if (!testFunc(o, props[i])) {
                    return false;
                }
            }
            return true;
        };
    }

    // Next trio of functions are a convenience to save verbose repeated calls to previous two functions
    var areHostMethods = createMultiplePropertyTest(isHostMethod);
    var areHostObjects = createMultiplePropertyTest(isHostObject);
    var areHostProperties = createMultiplePropertyTest(isHostProperty);

    function isTextRange(range) {
        return range && areHostMethods(range, textRangeMethods) && areHostProperties(range, textRangeProperties);
    }

    function getBody(doc) {
        return isHostObject(doc, "body") ? doc.body : doc.getElementsByTagName("body")[0];
    }

    var forEach = [].forEach ?
        function(arr, func) {
            arr.forEach(func);
        } :
        function(arr, func) {
            for (var i = 0, len = arr.length; i < len; ++i) {
                func(arr[i], i);
            }
        };

    var modules = {};

    var isBrowser = (typeof window != UNDEFINED && typeof document != UNDEFINED);

    var util = {
        isHostMethod: isHostMethod,
        isHostObject: isHostObject,
        isHostProperty: isHostProperty,
        areHostMethods: areHostMethods,
        areHostObjects: areHostObjects,
        areHostProperties: areHostProperties,
        isTextRange: isTextRange,
        getBody: getBody,
        forEach: forEach
    };

    var api = {
        version: "1.3.0",
        initialized: false,
        isBrowser: isBrowser,
        supported: true,
        util: util,
        features: {},
        modules: modules,
        config: {
            alertOnFail: false,
            alertOnWarn: false,
            preferTextRange: false,
            autoInitialize: (typeof rangyAutoInitialize == UNDEFINED) ? true : rangyAutoInitialize
        }
    };

    function consoleLog(msg) {
        if (typeof console != UNDEFINED && isHostMethod(console, "log")) {
            console.log(msg);
        }
    }

    function alertOrLog(msg, shouldAlert) {
        if (isBrowser && shouldAlert) {
            alert(msg);
        } else  {
            consoleLog(msg);
        }
    }

    function fail(reason) {
        api.initialized = true;
        api.supported = false;
        alertOrLog("Rangy is not supported in this environment. Reason: " + reason, api.config.alertOnFail);
    }

    api.fail = fail;

    function warn(msg) {
        alertOrLog("Rangy warning: " + msg, api.config.alertOnWarn);
    }

    api.warn = warn;

    // Add utility extend() method
    var extend;
    if ({}.hasOwnProperty) {
        util.extend = extend = function(obj, props, deep) {
            var o, p;
            for (var i in props) {
                if (props.hasOwnProperty(i)) {
                    o = obj[i];
                    p = props[i];
                    if (deep && o !== null && typeof o == "object" && p !== null && typeof p == "object") {
                        extend(o, p, true);
                    }
                    obj[i] = p;
                }
            }
            // Special case for toString, which does not show up in for...in loops in IE <= 8
            if (props.hasOwnProperty("toString")) {
                obj.toString = props.toString;
            }
            return obj;
        };

        util.createOptions = function(optionsParam, defaults) {
            var options = {};
            extend(options, defaults);
            if (optionsParam) {
                extend(options, optionsParam);
            }
            return options;
        };
    } else {
        fail("hasOwnProperty not supported");
    }

    // Test whether we're in a browser and bail out if not
    if (!isBrowser) {
        fail("Rangy can only run in a browser");
    }

    // Test whether Array.prototype.slice can be relied on for NodeLists and use an alternative toArray() if not
    (function() {
        var toArray;

        if (isBrowser) {
            var el = document.createElement("div");
            el.appendChild(document.createElement("span"));
            var slice = [].slice;
            try {
                if (slice.call(el.childNodes, 0)[0].nodeType == 1) {
                    toArray = function(arrayLike) {
                        return slice.call(arrayLike, 0);
                    };
                }
            } catch (e) {}
        }

        if (!toArray) {
            toArray = function(arrayLike) {
                var arr = [];
                for (var i = 0, len = arrayLike.length; i < len; ++i) {
                    arr[i] = arrayLike[i];
                }
                return arr;
            };
        }

        util.toArray = toArray;
    })();

    // Very simple event handler wrapper function that doesn't attempt to solve issues such as "this" handling or
    // normalization of event properties
    var addListener;
    if (isBrowser) {
        if (isHostMethod(document, "addEventListener")) {
            addListener = function(obj, eventType, listener) {
                obj.addEventListener(eventType, listener, false);
            };
        } else if (isHostMethod(document, "attachEvent")) {
            addListener = function(obj, eventType, listener) {
                obj.attachEvent("on" + eventType, listener);
            };
        } else {
            fail("Document does not have required addEventListener or attachEvent method");
        }

        util.addListener = addListener;
    }

    var initListeners = [];

    function getErrorDesc(ex) {
        return ex.message || ex.description || String(ex);
    }

    // Initialization
    function init() {
        if (!isBrowser || api.initialized) {
            return;
        }
        var testRange;
        var implementsDomRange = false, implementsTextRange = false;

        // First, perform basic feature tests

        if (isHostMethod(document, "createRange")) {
            testRange = document.createRange();
            if (areHostMethods(testRange, domRangeMethods) && areHostProperties(testRange, domRangeProperties)) {
                implementsDomRange = true;
            }
        }

        var body = getBody(document);
        if (!body || body.nodeName.toLowerCase() != "body") {
            fail("No body element found");
            return;
        }

        if (body && isHostMethod(body, "createTextRange")) {
            testRange = body.createTextRange();
            if (isTextRange(testRange)) {
                implementsTextRange = true;
            }
        }

        if (!implementsDomRange && !implementsTextRange) {
            fail("Neither Range nor TextRange are available");
            return;
        }

        api.initialized = true;
        api.features = {
            implementsDomRange: implementsDomRange,
            implementsTextRange: implementsTextRange
        };

        // Initialize modules
        var module, errorMessage;
        for (var moduleName in modules) {
            if ( (module = modules[moduleName]) instanceof Module ) {
                module.init(module, api);
            }
        }

        // Call init listeners
        for (var i = 0, len = initListeners.length; i < len; ++i) {
            try {
                initListeners[i](api);
            } catch (ex) {
                errorMessage = "Rangy init listener threw an exception. Continuing. Detail: " + getErrorDesc(ex);
                consoleLog(errorMessage);
            }
        }
    }

    function deprecationNotice(deprecated, replacement, module) {
        if (module) {
            deprecated += " in module " + module.name;
        }
        api.warn("DEPRECATED: " + deprecated + " is deprecated. Please use " +
        replacement + " instead.");
    }

    function createAliasForDeprecatedMethod(owner, deprecated, replacement, module) {
        owner[deprecated] = function() {
            deprecationNotice(deprecated, replacement, module);
            return owner[replacement].apply(owner, util.toArray(arguments));
        };
    }

    util.deprecationNotice = deprecationNotice;
    util.createAliasForDeprecatedMethod = createAliasForDeprecatedMethod;

    // Allow external scripts to initialize this library in case it's loaded after the document has loaded
    api.init = init;

    // Execute listener immediately if already initialized
    api.addInitListener = function(listener) {
        if (api.initialized) {
            listener(api);
        } else {
            initListeners.push(listener);
        }
    };

    var shimListeners = [];

    api.addShimListener = function(listener) {
        shimListeners.push(listener);
    };

    function shim(win) {
        win = win || window;
        init();

        // Notify listeners
        for (var i = 0, len = shimListeners.length; i < len; ++i) {
            shimListeners[i](win);
        }
    }

    if (isBrowser) {
        api.shim = api.createMissingNativeApi = shim;
        createAliasForDeprecatedMethod(api, "createMissingNativeApi", "shim");
    }

    function Module(name, dependencies, initializer) {
        this.name = name;
        this.dependencies = dependencies;
        this.initialized = false;
        this.supported = false;
        this.initializer = initializer;
    }

    Module.prototype = {
        init: function() {
            var requiredModuleNames = this.dependencies || [];
            for (var i = 0, len = requiredModuleNames.length, requiredModule, moduleName; i < len; ++i) {
                moduleName = requiredModuleNames[i];

                requiredModule = modules[moduleName];
                if (!requiredModule || !(requiredModule instanceof Module)) {
                    throw new Error("required module '" + moduleName + "' not found");
                }

                requiredModule.init();

                if (!requiredModule.supported) {
                    throw new Error("required module '" + moduleName + "' not supported");
                }
            }

            // Now run initializer
            this.initializer(this);
        },

        fail: function(reason) {
            this.initialized = true;
            this.supported = false;
            throw new Error(reason);
        },

        warn: function(msg) {
            api.warn("Module " + this.name + ": " + msg);
        },

        deprecationNotice: function(deprecated, replacement) {
            api.warn("DEPRECATED: " + deprecated + " in module " + this.name + " is deprecated. Please use " +
                replacement + " instead");
        },

        createError: function(msg) {
            return new Error("Error in Rangy " + this.name + " module: " + msg);
        }
    };

    function createModule(name, dependencies, initFunc) {
        var newModule = new Module(name, dependencies, function(module) {
            if (!module.initialized) {
                module.initialized = true;
                try {
                    initFunc(api, module);
                    module.supported = true;
                } catch (ex) {
                    var errorMessage = "Module '" + name + "' failed to load: " + getErrorDesc(ex);
                    consoleLog(errorMessage);
                    if (ex.stack) {
                        consoleLog(ex.stack);
                    }
                }
            }
        });
        modules[name] = newModule;
        return newModule;
    }

    api.createModule = function(name) {
        // Allow 2 or 3 arguments (second argument is an optional array of dependencies)
        var initFunc, dependencies;
        if (arguments.length == 2) {
            initFunc = arguments[1];
            dependencies = [];
        } else {
            initFunc = arguments[2];
            dependencies = arguments[1];
        }

        var module = createModule(name, dependencies, initFunc);

        // Initialize the module immediately if the core is already initialized
        if (api.initialized && api.supported) {
            module.init();
        }
    };

    api.createCoreModule = function(name, dependencies, initFunc) {
        createModule(name, dependencies, initFunc);
    };

    /*----------------------------------------------------------------------------------------------------------------*/

    // Ensure rangy.rangePrototype and rangy.selectionPrototype are available immediately

    function RangePrototype() {}
    api.RangePrototype = RangePrototype;
    api.rangePrototype = new RangePrototype();

    function SelectionPrototype() {}
    api.selectionPrototype = new SelectionPrototype();

    /*----------------------------------------------------------------------------------------------------------------*/

    // DOM utility methods used by Rangy
    api.createCoreModule("DomUtil", [], function(api, module) {
        var UNDEF = "undefined";
        var util = api.util;
        var getBody = util.getBody;

        // Perform feature tests
        if (!util.areHostMethods(document, ["createDocumentFragment", "createElement", "createTextNode"])) {
            module.fail("document missing a Node creation method");
        }

        if (!util.isHostMethod(document, "getElementsByTagName")) {
            module.fail("document missing getElementsByTagName method");
        }

        var el = document.createElement("div");
        if (!util.areHostMethods(el, ["insertBefore", "appendChild", "cloneNode"] ||
                !util.areHostObjects(el, ["previousSibling", "nextSibling", "childNodes", "parentNode"]))) {
            module.fail("Incomplete Element implementation");
        }

        // innerHTML is required for Range's createContextualFragment method
        if (!util.isHostProperty(el, "innerHTML")) {
            module.fail("Element is missing innerHTML property");
        }

        var textNode = document.createTextNode("test");
        if (!util.areHostMethods(textNode, ["splitText", "deleteData", "insertData", "appendData", "cloneNode"] ||
                !util.areHostObjects(el, ["previousSibling", "nextSibling", "childNodes", "parentNode"]) ||
                !util.areHostProperties(textNode, ["data"]))) {
            module.fail("Incomplete Text Node implementation");
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        // Removed use of indexOf because of a bizarre bug in Opera that is thrown in one of the Acid3 tests. I haven't been
        // able to replicate it outside of the test. The bug is that indexOf returns -1 when called on an Array that
        // contains just the document as a single element and the value searched for is the document.
        var arrayContains = /*Array.prototype.indexOf ?
            function(arr, val) {
                return arr.indexOf(val) > -1;
            }:*/

            function(arr, val) {
                var i = arr.length;
                while (i--) {
                    if (arr[i] === val) {
                        return true;
                    }
                }
                return false;
            };

        // Opera 11 puts HTML elements in the null namespace, it seems, and IE 7 has undefined namespaceURI
        function isHtmlNamespace(node) {
            var ns;
            return typeof node.namespaceURI == UNDEF || ((ns = node.namespaceURI) === null || ns == "http://www.w3.org/1999/xhtml");
        }

        function parentElement(node) {
            var parent = node.parentNode;
            return (parent.nodeType == 1) ? parent : null;
        }

        function getNodeIndex(node) {
            var i = 0;
            while( (node = node.previousSibling) ) {
                ++i;
            }
            return i;
        }

        function getNodeLength(node) {
            switch (node.nodeType) {
                case 7:
                case 10:
                    return 0;
                case 3:
                case 8:
                    return node.length;
                default:
                    return node.childNodes.length;
            }
        }

        function getCommonAncestor(node1, node2) {
            var ancestors = [], n;
            for (n = node1; n; n = n.parentNode) {
                ancestors.push(n);
            }

            for (n = node2; n; n = n.parentNode) {
                if (arrayContains(ancestors, n)) {
                    return n;
                }
            }

            return null;
        }

        function isAncestorOf(ancestor, descendant, selfIsAncestor) {
            var n = selfIsAncestor ? descendant : descendant.parentNode;
            while (n) {
                if (n === ancestor) {
                    return true;
                } else {
                    n = n.parentNode;
                }
            }
            return false;
        }

        function isOrIsAncestorOf(ancestor, descendant) {
            return isAncestorOf(ancestor, descendant, true);
        }

        function getClosestAncestorIn(node, ancestor, selfIsAncestor) {
            var p, n = selfIsAncestor ? node : node.parentNode;
            while (n) {
                p = n.parentNode;
                if (p === ancestor) {
                    return n;
                }
                n = p;
            }
            return null;
        }

        function isCharacterDataNode(node) {
            var t = node.nodeType;
            return t == 3 || t == 4 || t == 8 ; // Text, CDataSection or Comment
        }

        function isTextOrCommentNode(node) {
            if (!node) {
                return false;
            }
            var t = node.nodeType;
            return t == 3 || t == 8 ; // Text or Comment
        }

        function insertAfter(node, precedingNode) {
            var nextNode = precedingNode.nextSibling, parent = precedingNode.parentNode;
            if (nextNode) {
                parent.insertBefore(node, nextNode);
            } else {
                parent.appendChild(node);
            }
            return node;
        }

        // Note that we cannot use splitText() because it is bugridden in IE 9.
        function splitDataNode(node, index, positionsToPreserve) {
            var newNode = node.cloneNode(false);
            newNode.deleteData(0, index);
            node.deleteData(index, node.length - index);
            insertAfter(newNode, node);

            // Preserve positions
            if (positionsToPreserve) {
                for (var i = 0, position; position = positionsToPreserve[i++]; ) {
                    // Handle case where position was inside the portion of node after the split point
                    if (position.node == node && position.offset > index) {
                        position.node = newNode;
                        position.offset -= index;
                    }
                    // Handle the case where the position is a node offset within node's parent
                    else if (position.node == node.parentNode && position.offset > getNodeIndex(node)) {
                        ++position.offset;
                    }
                }
            }
            return newNode;
        }

        function getDocument(node) {
            if (node.nodeType == 9) {
                return node;
            } else if (typeof node.ownerDocument != UNDEF) {
                return node.ownerDocument;
            } else if (typeof node.document != UNDEF) {
                return node.document;
            } else if (node.parentNode) {
                return getDocument(node.parentNode);
            } else {
                throw module.createError("getDocument: no document found for node");
            }
        }

        function getWindow(node) {
            var doc = getDocument(node);
            if (typeof doc.defaultView != UNDEF) {
                return doc.defaultView;
            } else if (typeof doc.parentWindow != UNDEF) {
                return doc.parentWindow;
            } else {
                throw module.createError("Cannot get a window object for node");
            }
        }

        function getIframeDocument(iframeEl) {
            if (typeof iframeEl.contentDocument != UNDEF) {
                return iframeEl.contentDocument;
            } else if (typeof iframeEl.contentWindow != UNDEF) {
                return iframeEl.contentWindow.document;
            } else {
                throw module.createError("getIframeDocument: No Document object found for iframe element");
            }
        }

        function getIframeWindow(iframeEl) {
            if (typeof iframeEl.contentWindow != UNDEF) {
                return iframeEl.contentWindow;
            } else if (typeof iframeEl.contentDocument != UNDEF) {
                return iframeEl.contentDocument.defaultView;
            } else {
                throw module.createError("getIframeWindow: No Window object found for iframe element");
            }
        }

        // This looks bad. Is it worth it?
        function isWindow(obj) {
            return obj && util.isHostMethod(obj, "setTimeout") && util.isHostObject(obj, "document");
        }

        function getContentDocument(obj, module, methodName) {
            var doc;

            if (!obj) {
                doc = document;
            }

            // Test if a DOM node has been passed and obtain a document object for it if so
            else if (util.isHostProperty(obj, "nodeType")) {
                doc = (obj.nodeType == 1 && obj.tagName.toLowerCase() == "iframe") ?
                    getIframeDocument(obj) : getDocument(obj);
            }

            // Test if the doc parameter appears to be a Window object
            else if (isWindow(obj)) {
                doc = obj.document;
            }

            if (!doc) {
                throw module.createError(methodName + "(): Parameter must be a Window object or DOM node");
            }

            return doc;
        }

        function getRootContainer(node) {
            var parent;
            while ( (parent = node.parentNode) ) {
                node = parent;
            }
            return node;
        }

        function comparePoints(nodeA, offsetA, nodeB, offsetB) {
            // See http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Comparing
            var nodeC, root, childA, childB, n;
            if (nodeA == nodeB) {
                // Case 1: nodes are the same
                return offsetA === offsetB ? 0 : (offsetA < offsetB) ? -1 : 1;
            } else if ( (nodeC = getClosestAncestorIn(nodeB, nodeA, true)) ) {
                // Case 2: node C (container B or an ancestor) is a child node of A
                return offsetA <= getNodeIndex(nodeC) ? -1 : 1;
            } else if ( (nodeC = getClosestAncestorIn(nodeA, nodeB, true)) ) {
                // Case 3: node C (container A or an ancestor) is a child node of B
                return getNodeIndex(nodeC) < offsetB  ? -1 : 1;
            } else {
                root = getCommonAncestor(nodeA, nodeB);
                if (!root) {
                    throw new Error("comparePoints error: nodes have no common ancestor");
                }

                // Case 4: containers are siblings or descendants of siblings
                childA = (nodeA === root) ? root : getClosestAncestorIn(nodeA, root, true);
                childB = (nodeB === root) ? root : getClosestAncestorIn(nodeB, root, true);

                if (childA === childB) {
                    // This shouldn't be possible
                    throw module.createError("comparePoints got to case 4 and childA and childB are the same!");
                } else {
                    n = root.firstChild;
                    while (n) {
                        if (n === childA) {
                            return -1;
                        } else if (n === childB) {
                            return 1;
                        }
                        n = n.nextSibling;
                    }
                }
            }
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        // Test for IE's crash (IE 6/7) or exception (IE >= 8) when a reference to garbage-collected text node is queried
        var crashyTextNodes = false;

        function isBrokenNode(node) {
            var n;
            try {
                n = node.parentNode;
                return false;
            } catch (e) {
                return true;
            }
        }

        (function() {
            var el = document.createElement("b");
            el.innerHTML = "1";
            var textNode = el.firstChild;
            el.innerHTML = "<br />";
            crashyTextNodes = isBrokenNode(textNode);

            api.features.crashyTextNodes = crashyTextNodes;
        })();

        /*----------------------------------------------------------------------------------------------------------------*/

        function inspectNode(node) {
            if (!node) {
                return "[No node]";
            }
            if (crashyTextNodes && isBrokenNode(node)) {
                return "[Broken node]";
            }
            if (isCharacterDataNode(node)) {
                return '"' + node.data + '"';
            }
            if (node.nodeType == 1) {
                var idAttr = node.id ? ' id="' + node.id + '"' : "";
                return "<" + node.nodeName + idAttr + ">[index:" + getNodeIndex(node) + ",length:" + node.childNodes.length + "][" + (node.innerHTML || "[innerHTML not supported]").slice(0, 25) + "]";
            }
            return node.nodeName;
        }

        function fragmentFromNodeChildren(node) {
            var fragment = getDocument(node).createDocumentFragment(), child;
            while ( (child = node.firstChild) ) {
                fragment.appendChild(child);
            }
            return fragment;
        }

        var getComputedStyleProperty;
        if (typeof window.getComputedStyle != UNDEF) {
            getComputedStyleProperty = function(el, propName) {
                return getWindow(el).getComputedStyle(el, null)[propName];
            };
        } else if (typeof document.documentElement.currentStyle != UNDEF) {
            getComputedStyleProperty = function(el, propName) {
                return el.currentStyle ? el.currentStyle[propName] : "";
            };
        } else {
            module.fail("No means of obtaining computed style properties found");
        }

        function createTestElement(doc, html, contentEditable) {
            var body = getBody(doc);
            var el = doc.createElement("div");
            el.contentEditable = "" + !!contentEditable;
            if (html) {
                el.innerHTML = html;
            }

            // Insert the test element at the start of the body to prevent scrolling to the bottom in iOS (issue #292)
            var bodyFirstChild = body.firstChild;
            if (bodyFirstChild) {
                body.insertBefore(el, bodyFirstChild);
            } else {
                body.appendChild(el);
            }

            return el;
        }

        function removeNode(node) {
            return node.parentNode.removeChild(node);
        }

        function NodeIterator(root) {
            this.root = root;
            this._next = root;
        }

        NodeIterator.prototype = {
            _current: null,

            hasNext: function() {
                return !!this._next;
            },

            next: function() {
                var n = this._current = this._next;
                var child, next;
                if (this._current) {
                    child = n.firstChild;
                    if (child) {
                        this._next = child;
                    } else {
                        next = null;
                        while ((n !== this.root) && !(next = n.nextSibling)) {
                            n = n.parentNode;
                        }
                        this._next = next;
                    }
                }
                return this._current;
            },

            detach: function() {
                this._current = this._next = this.root = null;
            }
        };

        function createIterator(root) {
            return new NodeIterator(root);
        }

        function DomPosition(node, offset) {
            this.node = node;
            this.offset = offset;
        }

        DomPosition.prototype = {
            equals: function(pos) {
                return !!pos && this.node === pos.node && this.offset == pos.offset;
            },

            inspect: function() {
                return "[DomPosition(" + inspectNode(this.node) + ":" + this.offset + ")]";
            },

            toString: function() {
                return this.inspect();
            }
        };

        function DOMException(codeName) {
            this.code = this[codeName];
            this.codeName = codeName;
            this.message = "DOMException: " + this.codeName;
        }

        DOMException.prototype = {
            INDEX_SIZE_ERR: 1,
            HIERARCHY_REQUEST_ERR: 3,
            WRONG_DOCUMENT_ERR: 4,
            NO_MODIFICATION_ALLOWED_ERR: 7,
            NOT_FOUND_ERR: 8,
            NOT_SUPPORTED_ERR: 9,
            INVALID_STATE_ERR: 11,
            INVALID_NODE_TYPE_ERR: 24
        };

        DOMException.prototype.toString = function() {
            return this.message;
        };

        api.dom = {
            arrayContains: arrayContains,
            isHtmlNamespace: isHtmlNamespace,
            parentElement: parentElement,
            getNodeIndex: getNodeIndex,
            getNodeLength: getNodeLength,
            getCommonAncestor: getCommonAncestor,
            isAncestorOf: isAncestorOf,
            isOrIsAncestorOf: isOrIsAncestorOf,
            getClosestAncestorIn: getClosestAncestorIn,
            isCharacterDataNode: isCharacterDataNode,
            isTextOrCommentNode: isTextOrCommentNode,
            insertAfter: insertAfter,
            splitDataNode: splitDataNode,
            getDocument: getDocument,
            getWindow: getWindow,
            getIframeWindow: getIframeWindow,
            getIframeDocument: getIframeDocument,
            getBody: getBody,
            isWindow: isWindow,
            getContentDocument: getContentDocument,
            getRootContainer: getRootContainer,
            comparePoints: comparePoints,
            isBrokenNode: isBrokenNode,
            inspectNode: inspectNode,
            getComputedStyleProperty: getComputedStyleProperty,
            createTestElement: createTestElement,
            removeNode: removeNode,
            fragmentFromNodeChildren: fragmentFromNodeChildren,
            createIterator: createIterator,
            DomPosition: DomPosition
        };

        api.DOMException = DOMException;
    });

    /*----------------------------------------------------------------------------------------------------------------*/

    // Pure JavaScript implementation of DOM Range
    api.createCoreModule("DomRange", ["DomUtil"], function(api, module) {
        var dom = api.dom;
        var util = api.util;
        var DomPosition = dom.DomPosition;
        var DOMException = api.DOMException;

        var isCharacterDataNode = dom.isCharacterDataNode;
        var getNodeIndex = dom.getNodeIndex;
        var isOrIsAncestorOf = dom.isOrIsAncestorOf;
        var getDocument = dom.getDocument;
        var comparePoints = dom.comparePoints;
        var splitDataNode = dom.splitDataNode;
        var getClosestAncestorIn = dom.getClosestAncestorIn;
        var getNodeLength = dom.getNodeLength;
        var arrayContains = dom.arrayContains;
        var getRootContainer = dom.getRootContainer;
        var crashyTextNodes = api.features.crashyTextNodes;

        var removeNode = dom.removeNode;

        /*----------------------------------------------------------------------------------------------------------------*/

        // Utility functions

        function isNonTextPartiallySelected(node, range) {
            return (node.nodeType != 3) &&
                   (isOrIsAncestorOf(node, range.startContainer) || isOrIsAncestorOf(node, range.endContainer));
        }

        function getRangeDocument(range) {
            return range.document || getDocument(range.startContainer);
        }

        function getRangeRoot(range) {
            return getRootContainer(range.startContainer);
        }

        function getBoundaryBeforeNode(node) {
            return new DomPosition(node.parentNode, getNodeIndex(node));
        }

        function getBoundaryAfterNode(node) {
            return new DomPosition(node.parentNode, getNodeIndex(node) + 1);
        }

        function insertNodeAtPosition(node, n, o) {
            var firstNodeInserted = node.nodeType == 11 ? node.firstChild : node;
            if (isCharacterDataNode(n)) {
                if (o == n.length) {
                    dom.insertAfter(node, n);
                } else {
                    n.parentNode.insertBefore(node, o == 0 ? n : splitDataNode(n, o));
                }
            } else if (o >= n.childNodes.length) {
                n.appendChild(node);
            } else {
                n.insertBefore(node, n.childNodes[o]);
            }
            return firstNodeInserted;
        }

        function rangesIntersect(rangeA, rangeB, touchingIsIntersecting) {
            assertRangeValid(rangeA);
            assertRangeValid(rangeB);

            if (getRangeDocument(rangeB) != getRangeDocument(rangeA)) {
                throw new DOMException("WRONG_DOCUMENT_ERR");
            }

            var startComparison = comparePoints(rangeA.startContainer, rangeA.startOffset, rangeB.endContainer, rangeB.endOffset),
                endComparison = comparePoints(rangeA.endContainer, rangeA.endOffset, rangeB.startContainer, rangeB.startOffset);

            return touchingIsIntersecting ? startComparison <= 0 && endComparison >= 0 : startComparison < 0 && endComparison > 0;
        }

        function cloneSubtree(iterator) {
            var partiallySelected;
            for (var node, frag = getRangeDocument(iterator.range).createDocumentFragment(), subIterator; node = iterator.next(); ) {
                partiallySelected = iterator.isPartiallySelectedSubtree();
                node = node.cloneNode(!partiallySelected);
                if (partiallySelected) {
                    subIterator = iterator.getSubtreeIterator();
                    node.appendChild(cloneSubtree(subIterator));
                    subIterator.detach();
                }

                if (node.nodeType == 10) { // DocumentType
                    throw new DOMException("HIERARCHY_REQUEST_ERR");
                }
                frag.appendChild(node);
            }
            return frag;
        }

        function iterateSubtree(rangeIterator, func, iteratorState) {
            var it, n;
            iteratorState = iteratorState || { stop: false };
            for (var node, subRangeIterator; node = rangeIterator.next(); ) {
                if (rangeIterator.isPartiallySelectedSubtree()) {
                    if (func(node) === false) {
                        iteratorState.stop = true;
                        return;
                    } else {
                        // The node is partially selected by the Range, so we can use a new RangeIterator on the portion of
                        // the node selected by the Range.
                        subRangeIterator = rangeIterator.getSubtreeIterator();
                        iterateSubtree(subRangeIterator, func, iteratorState);
                        subRangeIterator.detach();
                        if (iteratorState.stop) {
                            return;
                        }
                    }
                } else {
                    // The whole node is selected, so we can use efficient DOM iteration to iterate over the node and its
                    // descendants
                    it = dom.createIterator(node);
                    while ( (n = it.next()) ) {
                        if (func(n) === false) {
                            iteratorState.stop = true;
                            return;
                        }
                    }
                }
            }
        }

        function deleteSubtree(iterator) {
            var subIterator;
            while (iterator.next()) {
                if (iterator.isPartiallySelectedSubtree()) {
                    subIterator = iterator.getSubtreeIterator();
                    deleteSubtree(subIterator);
                    subIterator.detach();
                } else {
                    iterator.remove();
                }
            }
        }

        function extractSubtree(iterator) {
            for (var node, frag = getRangeDocument(iterator.range).createDocumentFragment(), subIterator; node = iterator.next(); ) {

                if (iterator.isPartiallySelectedSubtree()) {
                    node = node.cloneNode(false);
                    subIterator = iterator.getSubtreeIterator();
                    node.appendChild(extractSubtree(subIterator));
                    subIterator.detach();
                } else {
                    iterator.remove();
                }
                if (node.nodeType == 10) { // DocumentType
                    throw new DOMException("HIERARCHY_REQUEST_ERR");
                }
                frag.appendChild(node);
            }
            return frag;
        }

        function getNodesInRange(range, nodeTypes, filter) {
            var filterNodeTypes = !!(nodeTypes && nodeTypes.length), regex;
            var filterExists = !!filter;
            if (filterNodeTypes) {
                regex = new RegExp("^(" + nodeTypes.join("|") + ")$");
            }

            var nodes = [];
            iterateSubtree(new RangeIterator(range, false), function(node) {
                if (filterNodeTypes && !regex.test(node.nodeType)) {
                    return;
                }
                if (filterExists && !filter(node)) {
                    return;
                }
                // Don't include a boundary container if it is a character data node and the range does not contain any
                // of its character data. See issue 190.
                var sc = range.startContainer;
                if (node == sc && isCharacterDataNode(sc) && range.startOffset == sc.length) {
                    return;
                }

                var ec = range.endContainer;
                if (node == ec && isCharacterDataNode(ec) && range.endOffset == 0) {
                    return;
                }

                nodes.push(node);
            });
            return nodes;
        }

        function inspect(range) {
            var name = (typeof range.getName == "undefined") ? "Range" : range.getName();
            return "[" + name + "(" + dom.inspectNode(range.startContainer) + ":" + range.startOffset + ", " +
                    dom.inspectNode(range.endContainer) + ":" + range.endOffset + ")]";
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        // RangeIterator code partially borrows from IERange by Tim Ryan (http://github.com/timcameronryan/IERange)

        function RangeIterator(range, clonePartiallySelectedTextNodes) {
            this.range = range;
            this.clonePartiallySelectedTextNodes = clonePartiallySelectedTextNodes;


            if (!range.collapsed) {
                this.sc = range.startContainer;
                this.so = range.startOffset;
                this.ec = range.endContainer;
                this.eo = range.endOffset;
                var root = range.commonAncestorContainer;

                if (this.sc === this.ec && isCharacterDataNode(this.sc)) {
                    this.isSingleCharacterDataNode = true;
                    this._first = this._last = this._next = this.sc;
                } else {
                    this._first = this._next = (this.sc === root && !isCharacterDataNode(this.sc)) ?
                        this.sc.childNodes[this.so] : getClosestAncestorIn(this.sc, root, true);
                    this._last = (this.ec === root && !isCharacterDataNode(this.ec)) ?
                        this.ec.childNodes[this.eo - 1] : getClosestAncestorIn(this.ec, root, true);
                }
            }
        }

        RangeIterator.prototype = {
            _current: null,
            _next: null,
            _first: null,
            _last: null,
            isSingleCharacterDataNode: false,

            reset: function() {
                this._current = null;
                this._next = this._first;
            },

            hasNext: function() {
                return !!this._next;
            },

            next: function() {
                // Move to next node
                var current = this._current = this._next;
                if (current) {
                    this._next = (current !== this._last) ? current.nextSibling : null;

                    // Check for partially selected text nodes
                    if (isCharacterDataNode(current) && this.clonePartiallySelectedTextNodes) {
                        if (current === this.ec) {
                            (current = current.cloneNode(true)).deleteData(this.eo, current.length - this.eo);
                        }
                        if (this._current === this.sc) {
                            (current = current.cloneNode(true)).deleteData(0, this.so);
                        }
                    }
                }

                return current;
            },

            remove: function() {
                var current = this._current, start, end;

                if (isCharacterDataNode(current) && (current === this.sc || current === this.ec)) {
                    start = (current === this.sc) ? this.so : 0;
                    end = (current === this.ec) ? this.eo : current.length;
                    if (start != end) {
                        current.deleteData(start, end - start);
                    }
                } else {
                    if (current.parentNode) {
                        removeNode(current);
                    } else {
                    }
                }
            },

            // Checks if the current node is partially selected
            isPartiallySelectedSubtree: function() {
                var current = this._current;
                return isNonTextPartiallySelected(current, this.range);
            },

            getSubtreeIterator: function() {
                var subRange;
                if (this.isSingleCharacterDataNode) {
                    subRange = this.range.cloneRange();
                    subRange.collapse(false);
                } else {
                    subRange = new Range(getRangeDocument(this.range));
                    var current = this._current;
                    var startContainer = current, startOffset = 0, endContainer = current, endOffset = getNodeLength(current);

                    if (isOrIsAncestorOf(current, this.sc)) {
                        startContainer = this.sc;
                        startOffset = this.so;
                    }
                    if (isOrIsAncestorOf(current, this.ec)) {
                        endContainer = this.ec;
                        endOffset = this.eo;
                    }

                    updateBoundaries(subRange, startContainer, startOffset, endContainer, endOffset);
                }
                return new RangeIterator(subRange, this.clonePartiallySelectedTextNodes);
            },

            detach: function() {
                this.range = this._current = this._next = this._first = this._last = this.sc = this.so = this.ec = this.eo = null;
            }
        };

        /*----------------------------------------------------------------------------------------------------------------*/

        var beforeAfterNodeTypes = [1, 3, 4, 5, 7, 8, 10];
        var rootContainerNodeTypes = [2, 9, 11];
        var readonlyNodeTypes = [5, 6, 10, 12];
        var insertableNodeTypes = [1, 3, 4, 5, 7, 8, 10, 11];
        var surroundNodeTypes = [1, 3, 4, 5, 7, 8];

        function createAncestorFinder(nodeTypes) {
            return function(node, selfIsAncestor) {
                var t, n = selfIsAncestor ? node : node.parentNode;
                while (n) {
                    t = n.nodeType;
                    if (arrayContains(nodeTypes, t)) {
                        return n;
                    }
                    n = n.parentNode;
                }
                return null;
            };
        }

        var getDocumentOrFragmentContainer = createAncestorFinder( [9, 11] );
        var getReadonlyAncestor = createAncestorFinder(readonlyNodeTypes);
        var getDocTypeNotationEntityAncestor = createAncestorFinder( [6, 10, 12] );

        function assertNoDocTypeNotationEntityAncestor(node, allowSelf) {
            if (getDocTypeNotationEntityAncestor(node, allowSelf)) {
                throw new DOMException("INVALID_NODE_TYPE_ERR");
            }
        }

        function assertValidNodeType(node, invalidTypes) {
            if (!arrayContains(invalidTypes, node.nodeType)) {
                throw new DOMException("INVALID_NODE_TYPE_ERR");
            }
        }

        function assertValidOffset(node, offset) {
            if (offset < 0 || offset > (isCharacterDataNode(node) ? node.length : node.childNodes.length)) {
                throw new DOMException("INDEX_SIZE_ERR");
            }
        }

        function assertSameDocumentOrFragment(node1, node2) {
            if (getDocumentOrFragmentContainer(node1, true) !== getDocumentOrFragmentContainer(node2, true)) {
                throw new DOMException("WRONG_DOCUMENT_ERR");
            }
        }

        function assertNodeNotReadOnly(node) {
            if (getReadonlyAncestor(node, true)) {
                throw new DOMException("NO_MODIFICATION_ALLOWED_ERR");
            }
        }

        function assertNode(node, codeName) {
            if (!node) {
                throw new DOMException(codeName);
            }
        }

        function isValidOffset(node, offset) {
            return offset <= (isCharacterDataNode(node) ? node.length : node.childNodes.length);
        }

        function isRangeValid(range) {
            return (!!range.startContainer && !!range.endContainer &&
                    !(crashyTextNodes && (dom.isBrokenNode(range.startContainer) || dom.isBrokenNode(range.endContainer))) &&
                    getRootContainer(range.startContainer) == getRootContainer(range.endContainer) &&
                    isValidOffset(range.startContainer, range.startOffset) &&
                    isValidOffset(range.endContainer, range.endOffset));
        }

        function assertRangeValid(range) {
            if (!isRangeValid(range)) {
                throw new Error("Range error: Range is not valid. This usually happens after DOM mutation. Range: (" + range.inspect() + ")");
            }
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        // Test the browser's innerHTML support to decide how to implement createContextualFragment
        var styleEl = document.createElement("style");
        var htmlParsingConforms = false;
        try {
            styleEl.innerHTML = "<b>x</b>";
            htmlParsingConforms = (styleEl.firstChild.nodeType == 3); // Opera incorrectly creates an element node
        } catch (e) {
            // IE 6 and 7 throw
        }

        api.features.htmlParsingConforms = htmlParsingConforms;

        var createContextualFragment = htmlParsingConforms ?

            // Implementation as per HTML parsing spec, trusting in the browser's implementation of innerHTML. See
            // discussion and base code for this implementation at issue 67.
            // Spec: http://html5.org/specs/dom-parsing.html#extensions-to-the-range-interface
            // Thanks to Aleks Williams.
            function(fragmentStr) {
                // "Let node the context object's start's node."
                var node = this.startContainer;
                var doc = getDocument(node);

                // "If the context object's start's node is null, raise an INVALID_STATE_ERR
                // exception and abort these steps."
                if (!node) {
                    throw new DOMException("INVALID_STATE_ERR");
                }

                // "Let element be as follows, depending on node's interface:"
                // Document, Document Fragment: null
                var el = null;

                // "Element: node"
                if (node.nodeType == 1) {
                    el = node;

                // "Text, Comment: node's parentElement"
                } else if (isCharacterDataNode(node)) {
                    el = dom.parentElement(node);
                }

                // "If either element is null or element's ownerDocument is an HTML document
                // and element's local name is "html" and element's namespace is the HTML
                // namespace"
                if (el === null || (
                    el.nodeName == "HTML" &&
                    dom.isHtmlNamespace(getDocument(el).documentElement) &&
                    dom.isHtmlNamespace(el)
                )) {

                // "let element be a new Element with "body" as its local name and the HTML
                // namespace as its namespace.""
                    el = doc.createElement("body");
                } else {
                    el = el.cloneNode(false);
                }

                // "If the node's document is an HTML document: Invoke the HTML fragment parsing algorithm."
                // "If the node's document is an XML document: Invoke the XML fragment parsing algorithm."
                // "In either case, the algorithm must be invoked with fragment as the input
                // and element as the context element."
                el.innerHTML = fragmentStr;

                // "If this raises an exception, then abort these steps. Otherwise, let new
                // children be the nodes returned."

                // "Let fragment be a new DocumentFragment."
                // "Append all new children to fragment."
                // "Return fragment."
                return dom.fragmentFromNodeChildren(el);
            } :

            // In this case, innerHTML cannot be trusted, so fall back to a simpler, non-conformant implementation that
            // previous versions of Rangy used (with the exception of using a body element rather than a div)
            function(fragmentStr) {
                var doc = getRangeDocument(this);
                var el = doc.createElement("body");
                el.innerHTML = fragmentStr;

                return dom.fragmentFromNodeChildren(el);
            };

        function splitRangeBoundaries(range, positionsToPreserve) {
            assertRangeValid(range);

            var sc = range.startContainer, so = range.startOffset, ec = range.endContainer, eo = range.endOffset;
            var startEndSame = (sc === ec);

            if (isCharacterDataNode(ec) && eo > 0 && eo < ec.length) {
                splitDataNode(ec, eo, positionsToPreserve);
            }

            if (isCharacterDataNode(sc) && so > 0 && so < sc.length) {
                sc = splitDataNode(sc, so, positionsToPreserve);
                if (startEndSame) {
                    eo -= so;
                    ec = sc;
                } else if (ec == sc.parentNode && eo >= getNodeIndex(sc)) {
                    eo++;
                }
                so = 0;
            }
            range.setStartAndEnd(sc, so, ec, eo);
        }

        function rangeToHtml(range) {
            assertRangeValid(range);
            var container = range.commonAncestorContainer.parentNode.cloneNode(false);
            container.appendChild( range.cloneContents() );
            return container.innerHTML;
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        var rangeProperties = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed",
            "commonAncestorContainer"];

        var s2s = 0, s2e = 1, e2e = 2, e2s = 3;
        var n_b = 0, n_a = 1, n_b_a = 2, n_i = 3;

        util.extend(api.rangePrototype, {
            compareBoundaryPoints: function(how, range) {
                assertRangeValid(this);
                assertSameDocumentOrFragment(this.startContainer, range.startContainer);

                var nodeA, offsetA, nodeB, offsetB;
                var prefixA = (how == e2s || how == s2s) ? "start" : "end";
                var prefixB = (how == s2e || how == s2s) ? "start" : "end";
                nodeA = this[prefixA + "Container"];
                offsetA = this[prefixA + "Offset"];
                nodeB = range[prefixB + "Container"];
                offsetB = range[prefixB + "Offset"];
                return comparePoints(nodeA, offsetA, nodeB, offsetB);
            },

            insertNode: function(node) {
                assertRangeValid(this);
                assertValidNodeType(node, insertableNodeTypes);
                assertNodeNotReadOnly(this.startContainer);

                if (isOrIsAncestorOf(node, this.startContainer)) {
                    throw new DOMException("HIERARCHY_REQUEST_ERR");
                }

                // No check for whether the container of the start of the Range is of a type that does not allow
                // children of the type of node: the browser's DOM implementation should do this for us when we attempt
                // to add the node

                var firstNodeInserted = insertNodeAtPosition(node, this.startContainer, this.startOffset);
                this.setStartBefore(firstNodeInserted);
            },

            cloneContents: function() {
                assertRangeValid(this);

                var clone, frag;
                if (this.collapsed) {
                    return getRangeDocument(this).createDocumentFragment();
                } else {
                    if (this.startContainer === this.endContainer && isCharacterDataNode(this.startContainer)) {
                        clone = this.startContainer.cloneNode(true);
                        clone.data = clone.data.slice(this.startOffset, this.endOffset);
                        frag = getRangeDocument(this).createDocumentFragment();
                        frag.appendChild(clone);
                        return frag;
                    } else {
                        var iterator = new RangeIterator(this, true);
                        clone = cloneSubtree(iterator);
                        iterator.detach();
                    }
                    return clone;
                }
            },

            canSurroundContents: function() {
                assertRangeValid(this);
                assertNodeNotReadOnly(this.startContainer);
                assertNodeNotReadOnly(this.endContainer);

                // Check if the contents can be surrounded. Specifically, this means whether the range partially selects
                // no non-text nodes.
                var iterator = new RangeIterator(this, true);
                var boundariesInvalid = (iterator._first && (isNonTextPartiallySelected(iterator._first, this)) ||
                        (iterator._last && isNonTextPartiallySelected(iterator._last, this)));
                iterator.detach();
                return !boundariesInvalid;
            },

            surroundContents: function(node) {
                assertValidNodeType(node, surroundNodeTypes);

                if (!this.canSurroundContents()) {
                    throw new DOMException("INVALID_STATE_ERR");
                }

                // Extract the contents
                var content = this.extractContents();

                // Clear the children of the node
                if (node.hasChildNodes()) {
                    while (node.lastChild) {
                        node.removeChild(node.lastChild);
                    }
                }

                // Insert the new node and add the extracted contents
                insertNodeAtPosition(node, this.startContainer, this.startOffset);
                node.appendChild(content);

                this.selectNode(node);
            },

            cloneRange: function() {
                assertRangeValid(this);
                var range = new Range(getRangeDocument(this));
                var i = rangeProperties.length, prop;
                while (i--) {
                    prop = rangeProperties[i];
                    range[prop] = this[prop];
                }
                return range;
            },

            toString: function() {
                assertRangeValid(this);
                var sc = this.startContainer;
                if (sc === this.endContainer && isCharacterDataNode(sc)) {
                    return (sc.nodeType == 3 || sc.nodeType == 4) ? sc.data.slice(this.startOffset, this.endOffset) : "";
                } else {
                    var textParts = [], iterator = new RangeIterator(this, true);
                    iterateSubtree(iterator, function(node) {
                        // Accept only text or CDATA nodes, not comments
                        if (node.nodeType == 3 || node.nodeType == 4) {
                            textParts.push(node.data);
                        }
                    });
                    iterator.detach();
                    return textParts.join("");
                }
            },

            // The methods below are all non-standard. The following batch were introduced by Mozilla but have since
            // been removed from Mozilla.

            compareNode: function(node) {
                assertRangeValid(this);

                var parent = node.parentNode;
                var nodeIndex = getNodeIndex(node);

                if (!parent) {
                    throw new DOMException("NOT_FOUND_ERR");
                }

                var startComparison = this.comparePoint(parent, nodeIndex),
                    endComparison = this.comparePoint(parent, nodeIndex + 1);

                if (startComparison < 0) { // Node starts before
                    return (endComparison > 0) ? n_b_a : n_b;
                } else {
                    return (endComparison > 0) ? n_a : n_i;
                }
            },

            comparePoint: function(node, offset) {
                assertRangeValid(this);
                assertNode(node, "HIERARCHY_REQUEST_ERR");
                assertSameDocumentOrFragment(node, this.startContainer);

                if (comparePoints(node, offset, this.startContainer, this.startOffset) < 0) {
                    return -1;
                } else if (comparePoints(node, offset, this.endContainer, this.endOffset) > 0) {
                    return 1;
                }
                return 0;
            },

            createContextualFragment: createContextualFragment,

            toHtml: function() {
                return rangeToHtml(this);
            },

            // touchingIsIntersecting determines whether this method considers a node that borders a range intersects
            // with it (as in WebKit) or not (as in Gecko pre-1.9, and the default)
            intersectsNode: function(node, touchingIsIntersecting) {
                assertRangeValid(this);
                if (getRootContainer(node) != getRangeRoot(this)) {
                    return false;
                }

                var parent = node.parentNode, offset = getNodeIndex(node);
                if (!parent) {
                    return true;
                }

                var startComparison = comparePoints(parent, offset, this.endContainer, this.endOffset),
                    endComparison = comparePoints(parent, offset + 1, this.startContainer, this.startOffset);

                return touchingIsIntersecting ? startComparison <= 0 && endComparison >= 0 : startComparison < 0 && endComparison > 0;
            },

            isPointInRange: function(node, offset) {
                assertRangeValid(this);
                assertNode(node, "HIERARCHY_REQUEST_ERR");
                assertSameDocumentOrFragment(node, this.startContainer);

                return (comparePoints(node, offset, this.startContainer, this.startOffset) >= 0) &&
                       (comparePoints(node, offset, this.endContainer, this.endOffset) <= 0);
            },

            // The methods below are non-standard and invented by me.

            // Sharing a boundary start-to-end or end-to-start does not count as intersection.
            intersectsRange: function(range) {
                return rangesIntersect(this, range, false);
            },

            // Sharing a boundary start-to-end or end-to-start does count as intersection.
            intersectsOrTouchesRange: function(range) {
                return rangesIntersect(this, range, true);
            },

            intersection: function(range) {
                if (this.intersectsRange(range)) {
                    var startComparison = comparePoints(this.startContainer, this.startOffset, range.startContainer, range.startOffset),
                        endComparison = comparePoints(this.endContainer, this.endOffset, range.endContainer, range.endOffset);

                    var intersectionRange = this.cloneRange();
                    if (startComparison == -1) {
                        intersectionRange.setStart(range.startContainer, range.startOffset);
                    }
                    if (endComparison == 1) {
                        intersectionRange.setEnd(range.endContainer, range.endOffset);
                    }
                    return intersectionRange;
                }
                return null;
            },

            union: function(range) {
                if (this.intersectsOrTouchesRange(range)) {
                    var unionRange = this.cloneRange();
                    if (comparePoints(range.startContainer, range.startOffset, this.startContainer, this.startOffset) == -1) {
                        unionRange.setStart(range.startContainer, range.startOffset);
                    }
                    if (comparePoints(range.endContainer, range.endOffset, this.endContainer, this.endOffset) == 1) {
                        unionRange.setEnd(range.endContainer, range.endOffset);
                    }
                    return unionRange;
                } else {
                    throw new DOMException("Ranges do not intersect");
                }
            },

            containsNode: function(node, allowPartial) {
                if (allowPartial) {
                    return this.intersectsNode(node, false);
                } else {
                    return this.compareNode(node) == n_i;
                }
            },

            containsNodeContents: function(node) {
                return this.comparePoint(node, 0) >= 0 && this.comparePoint(node, getNodeLength(node)) <= 0;
            },

            containsRange: function(range) {
                var intersection = this.intersection(range);
                return intersection !== null && range.equals(intersection);
            },

            containsNodeText: function(node) {
                var nodeRange = this.cloneRange();
                nodeRange.selectNode(node);
                var textNodes = nodeRange.getNodes([3]);
                if (textNodes.length > 0) {
                    nodeRange.setStart(textNodes[0], 0);
                    var lastTextNode = textNodes.pop();
                    nodeRange.setEnd(lastTextNode, lastTextNode.length);
                    return this.containsRange(nodeRange);
                } else {
                    return this.containsNodeContents(node);
                }
            },

            getNodes: function(nodeTypes, filter) {
                assertRangeValid(this);
                return getNodesInRange(this, nodeTypes, filter);
            },

            getDocument: function() {
                return getRangeDocument(this);
            },

            collapseBefore: function(node) {
                this.setEndBefore(node);
                this.collapse(false);
            },

            collapseAfter: function(node) {
                this.setStartAfter(node);
                this.collapse(true);
            },

            getBookmark: function(containerNode) {
                var doc = getRangeDocument(this);
                var preSelectionRange = api.createRange(doc);
                containerNode = containerNode || dom.getBody(doc);
                preSelectionRange.selectNodeContents(containerNode);
                var range = this.intersection(preSelectionRange);
                var start = 0, end = 0;
                if (range) {
                    preSelectionRange.setEnd(range.startContainer, range.startOffset);
                    start = preSelectionRange.toString().length;
                    end = start + range.toString().length;
                }

                return {
                    start: start,
                    end: end,
                    containerNode: containerNode
                };
            },

            moveToBookmark: function(bookmark) {
                var containerNode = bookmark.containerNode;
                var charIndex = 0;
                this.setStart(containerNode, 0);
                this.collapse(true);
                var nodeStack = [containerNode], node, foundStart = false, stop = false;
                var nextCharIndex, i, childNodes;

                while (!stop && (node = nodeStack.pop())) {
                    if (node.nodeType == 3) {
                        nextCharIndex = charIndex + node.length;
                        if (!foundStart && bookmark.start >= charIndex && bookmark.start <= nextCharIndex) {
                            this.setStart(node, bookmark.start - charIndex);
                            foundStart = true;
                        }
                        if (foundStart && bookmark.end >= charIndex && bookmark.end <= nextCharIndex) {
                            this.setEnd(node, bookmark.end - charIndex);
                            stop = true;
                        }
                        charIndex = nextCharIndex;
                    } else {
                        childNodes = node.childNodes;
                        i = childNodes.length;
                        while (i--) {
                            nodeStack.push(childNodes[i]);
                        }
                    }
                }
            },

            getName: function() {
                return "DomRange";
            },

            equals: function(range) {
                return Range.rangesEqual(this, range);
            },

            isValid: function() {
                return isRangeValid(this);
            },

            inspect: function() {
                return inspect(this);
            },

            detach: function() {
                // In DOM4, detach() is now a no-op.
            }
        });

        function copyComparisonConstantsToObject(obj) {
            obj.START_TO_START = s2s;
            obj.START_TO_END = s2e;
            obj.END_TO_END = e2e;
            obj.END_TO_START = e2s;

            obj.NODE_BEFORE = n_b;
            obj.NODE_AFTER = n_a;
            obj.NODE_BEFORE_AND_AFTER = n_b_a;
            obj.NODE_INSIDE = n_i;
        }

        function copyComparisonConstants(constructor) {
            copyComparisonConstantsToObject(constructor);
            copyComparisonConstantsToObject(constructor.prototype);
        }

        function createRangeContentRemover(remover, boundaryUpdater) {
            return function() {
                assertRangeValid(this);

                var sc = this.startContainer, so = this.startOffset, root = this.commonAncestorContainer;

                var iterator = new RangeIterator(this, true);

                // Work out where to position the range after content removal
                var node, boundary;
                if (sc !== root) {
                    node = getClosestAncestorIn(sc, root, true);
                    boundary = getBoundaryAfterNode(node);
                    sc = boundary.node;
                    so = boundary.offset;
                }

                // Check none of the range is read-only
                iterateSubtree(iterator, assertNodeNotReadOnly);

                iterator.reset();

                // Remove the content
                var returnValue = remover(iterator);
                iterator.detach();

                // Move to the new position
                boundaryUpdater(this, sc, so, sc, so);

                return returnValue;
            };
        }

        function createPrototypeRange(constructor, boundaryUpdater) {
            function createBeforeAfterNodeSetter(isBefore, isStart) {
                return function(node) {
                    assertValidNodeType(node, beforeAfterNodeTypes);
                    assertValidNodeType(getRootContainer(node), rootContainerNodeTypes);

                    var boundary = (isBefore ? getBoundaryBeforeNode : getBoundaryAfterNode)(node);
                    (isStart ? setRangeStart : setRangeEnd)(this, boundary.node, boundary.offset);
                };
            }

            function setRangeStart(range, node, offset) {
                var ec = range.endContainer, eo = range.endOffset;
                if (node !== range.startContainer || offset !== range.startOffset) {
                    // Check the root containers of the range and the new boundary, and also check whether the new boundary
                    // is after the current end. In either case, collapse the range to the new position
                    if (getRootContainer(node) != getRootContainer(ec) || comparePoints(node, offset, ec, eo) == 1) {
                        ec = node;
                        eo = offset;
                    }
                    boundaryUpdater(range, node, offset, ec, eo);
                }
            }

            function setRangeEnd(range, node, offset) {
                var sc = range.startContainer, so = range.startOffset;
                if (node !== range.endContainer || offset !== range.endOffset) {
                    // Check the root containers of the range and the new boundary, and also check whether the new boundary
                    // is after the current end. In either case, collapse the range to the new position
                    if (getRootContainer(node) != getRootContainer(sc) || comparePoints(node, offset, sc, so) == -1) {
                        sc = node;
                        so = offset;
                    }
                    boundaryUpdater(range, sc, so, node, offset);
                }
            }

            // Set up inheritance
            var F = function() {};
            F.prototype = api.rangePrototype;
            constructor.prototype = new F();

            util.extend(constructor.prototype, {
                setStart: function(node, offset) {
                    assertNoDocTypeNotationEntityAncestor(node, true);
                    assertValidOffset(node, offset);

                    setRangeStart(this, node, offset);
                },

                setEnd: function(node, offset) {
                    assertNoDocTypeNotationEntityAncestor(node, true);
                    assertValidOffset(node, offset);

                    setRangeEnd(this, node, offset);
                },

                /**
                 * Convenience method to set a range's start and end boundaries. Overloaded as follows:
                 * - Two parameters (node, offset) creates a collapsed range at that position
                 * - Three parameters (node, startOffset, endOffset) creates a range contained with node starting at
                 *   startOffset and ending at endOffset
                 * - Four parameters (startNode, startOffset, endNode, endOffset) creates a range starting at startOffset in
                 *   startNode and ending at endOffset in endNode
                 */
                setStartAndEnd: function() {
                    var args = arguments;
                    var sc = args[0], so = args[1], ec = sc, eo = so;

                    switch (args.length) {
                        case 3:
                            eo = args[2];
                            break;
                        case 4:
                            ec = args[2];
                            eo = args[3];
                            break;
                    }

                    boundaryUpdater(this, sc, so, ec, eo);
                },

                setBoundary: function(node, offset, isStart) {
                    this["set" + (isStart ? "Start" : "End")](node, offset);
                },

                setStartBefore: createBeforeAfterNodeSetter(true, true),
                setStartAfter: createBeforeAfterNodeSetter(false, true),
                setEndBefore: createBeforeAfterNodeSetter(true, false),
                setEndAfter: createBeforeAfterNodeSetter(false, false),

                collapse: function(isStart) {
                    assertRangeValid(this);
                    if (isStart) {
                        boundaryUpdater(this, this.startContainer, this.startOffset, this.startContainer, this.startOffset);
                    } else {
                        boundaryUpdater(this, this.endContainer, this.endOffset, this.endContainer, this.endOffset);
                    }
                },

                selectNodeContents: function(node) {
                    assertNoDocTypeNotationEntityAncestor(node, true);

                    boundaryUpdater(this, node, 0, node, getNodeLength(node));
                },

                selectNode: function(node) {
                    assertNoDocTypeNotationEntityAncestor(node, false);
                    assertValidNodeType(node, beforeAfterNodeTypes);

                    var start = getBoundaryBeforeNode(node), end = getBoundaryAfterNode(node);
                    boundaryUpdater(this, start.node, start.offset, end.node, end.offset);
                },

                extractContents: createRangeContentRemover(extractSubtree, boundaryUpdater),

                deleteContents: createRangeContentRemover(deleteSubtree, boundaryUpdater),

                canSurroundContents: function() {
                    assertRangeValid(this);
                    assertNodeNotReadOnly(this.startContainer);
                    assertNodeNotReadOnly(this.endContainer);

                    // Check if the contents can be surrounded. Specifically, this means whether the range partially selects
                    // no non-text nodes.
                    var iterator = new RangeIterator(this, true);
                    var boundariesInvalid = (iterator._first && isNonTextPartiallySelected(iterator._first, this) ||
                            (iterator._last && isNonTextPartiallySelected(iterator._last, this)));
                    iterator.detach();
                    return !boundariesInvalid;
                },

                splitBoundaries: function() {
                    splitRangeBoundaries(this);
                },

                splitBoundariesPreservingPositions: function(positionsToPreserve) {
                    splitRangeBoundaries(this, positionsToPreserve);
                },

                normalizeBoundaries: function() {
                    assertRangeValid(this);

                    var sc = this.startContainer, so = this.startOffset, ec = this.endContainer, eo = this.endOffset;

                    var mergeForward = function(node) {
                        var sibling = node.nextSibling;
                        if (sibling && sibling.nodeType == node.nodeType) {
                            ec = node;
                            eo = node.length;
                            node.appendData(sibling.data);
                            removeNode(sibling);
                        }
                    };

                    var mergeBackward = function(node) {
                        var sibling = node.previousSibling;
                        if (sibling && sibling.nodeType == node.nodeType) {
                            sc = node;
                            var nodeLength = node.length;
                            so = sibling.length;
                            node.insertData(0, sibling.data);
                            removeNode(sibling);
                            if (sc == ec) {
                                eo += so;
                                ec = sc;
                            } else if (ec == node.parentNode) {
                                var nodeIndex = getNodeIndex(node);
                                if (eo == nodeIndex) {
                                    ec = node;
                                    eo = nodeLength;
                                } else if (eo > nodeIndex) {
                                    eo--;
                                }
                            }
                        }
                    };

                    var normalizeStart = true;
                    var sibling;

                    if (isCharacterDataNode(ec)) {
                        if (eo == ec.length) {
                            mergeForward(ec);
                        } else if (eo == 0) {
                            sibling = ec.previousSibling;
                            if (sibling && sibling.nodeType == ec.nodeType) {
                                eo = sibling.length;
                                if (sc == ec) {
                                    normalizeStart = false;
                                }
                                sibling.appendData(ec.data);
                                removeNode(ec);
                                ec = sibling;
                            }
                        }
                    } else {
                        if (eo > 0) {
                            var endNode = ec.childNodes[eo - 1];
                            if (endNode && isCharacterDataNode(endNode)) {
                                mergeForward(endNode);
                            }
                        }
                        normalizeStart = !this.collapsed;
                    }

                    if (normalizeStart) {
                        if (isCharacterDataNode(sc)) {
                            if (so == 0) {
                                mergeBackward(sc);
                            } else if (so == sc.length) {
                                sibling = sc.nextSibling;
                                if (sibling && sibling.nodeType == sc.nodeType) {
                                    if (ec == sibling) {
                                        ec = sc;
                                        eo += sc.length;
                                    }
                                    sc.appendData(sibling.data);
                                    removeNode(sibling);
                                }
                            }
                        } else {
                            if (so < sc.childNodes.length) {
                                var startNode = sc.childNodes[so];
                                if (startNode && isCharacterDataNode(startNode)) {
                                    mergeBackward(startNode);
                                }
                            }
                        }
                    } else {
                        sc = ec;
                        so = eo;
                    }

                    boundaryUpdater(this, sc, so, ec, eo);
                },

                collapseToPoint: function(node, offset) {
                    assertNoDocTypeNotationEntityAncestor(node, true);
                    assertValidOffset(node, offset);
                    this.setStartAndEnd(node, offset);
                }
            });

            copyComparisonConstants(constructor);
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        // Updates commonAncestorContainer and collapsed after boundary change
        function updateCollapsedAndCommonAncestor(range) {
            range.collapsed = (range.startContainer === range.endContainer && range.startOffset === range.endOffset);
            range.commonAncestorContainer = range.collapsed ?
                range.startContainer : dom.getCommonAncestor(range.startContainer, range.endContainer);
        }

        function updateBoundaries(range, startContainer, startOffset, endContainer, endOffset) {
            range.startContainer = startContainer;
            range.startOffset = startOffset;
            range.endContainer = endContainer;
            range.endOffset = endOffset;
            range.document = dom.getDocument(startContainer);

            updateCollapsedAndCommonAncestor(range);
        }

        function Range(doc) {
            this.startContainer = doc;
            this.startOffset = 0;
            this.endContainer = doc;
            this.endOffset = 0;
            this.document = doc;
            updateCollapsedAndCommonAncestor(this);
        }

        createPrototypeRange(Range, updateBoundaries);

        util.extend(Range, {
            rangeProperties: rangeProperties,
            RangeIterator: RangeIterator,
            copyComparisonConstants: copyComparisonConstants,
            createPrototypeRange: createPrototypeRange,
            inspect: inspect,
            toHtml: rangeToHtml,
            getRangeDocument: getRangeDocument,
            rangesEqual: function(r1, r2) {
                return r1.startContainer === r2.startContainer &&
                    r1.startOffset === r2.startOffset &&
                    r1.endContainer === r2.endContainer &&
                    r1.endOffset === r2.endOffset;
            }
        });

        api.DomRange = Range;
    });

    /*----------------------------------------------------------------------------------------------------------------*/

    // Wrappers for the browser's native DOM Range and/or TextRange implementation
    api.createCoreModule("WrappedRange", ["DomRange"], function(api, module) {
        var WrappedRange, WrappedTextRange;
        var dom = api.dom;
        var util = api.util;
        var DomPosition = dom.DomPosition;
        var DomRange = api.DomRange;
        var getBody = dom.getBody;
        var getContentDocument = dom.getContentDocument;
        var isCharacterDataNode = dom.isCharacterDataNode;


        /*----------------------------------------------------------------------------------------------------------------*/

        if (api.features.implementsDomRange) {
            // This is a wrapper around the browser's native DOM Range. It has two aims:
            // - Provide workarounds for specific browser bugs
            // - provide convenient extensions, which are inherited from Rangy's DomRange

            (function() {
                var rangeProto;
                var rangeProperties = DomRange.rangeProperties;

                function updateRangeProperties(range) {
                    var i = rangeProperties.length, prop;
                    while (i--) {
                        prop = rangeProperties[i];
                        range[prop] = range.nativeRange[prop];
                    }
                    // Fix for broken collapsed property in IE 9.
                    range.collapsed = (range.startContainer === range.endContainer && range.startOffset === range.endOffset);
                }

                function updateNativeRange(range, startContainer, startOffset, endContainer, endOffset) {
                    var startMoved = (range.startContainer !== startContainer || range.startOffset != startOffset);
                    var endMoved = (range.endContainer !== endContainer || range.endOffset != endOffset);
                    var nativeRangeDifferent = !range.equals(range.nativeRange);

                    // Always set both boundaries for the benefit of IE9 (see issue 35)
                    if (startMoved || endMoved || nativeRangeDifferent) {
                        range.setEnd(endContainer, endOffset);
                        range.setStart(startContainer, startOffset);
                    }
                }

                var createBeforeAfterNodeSetter;

                WrappedRange = function(range) {
                    if (!range) {
                        throw module.createError("WrappedRange: Range must be specified");
                    }
                    this.nativeRange = range;
                    updateRangeProperties(this);
                };

                DomRange.createPrototypeRange(WrappedRange, updateNativeRange);

                rangeProto = WrappedRange.prototype;

                rangeProto.selectNode = function(node) {
                    this.nativeRange.selectNode(node);
                    updateRangeProperties(this);
                };

                rangeProto.cloneContents = function() {
                    return this.nativeRange.cloneContents();
                };

                // Due to a long-standing Firefox bug that I have not been able to find a reliable way to detect,
                // insertNode() is never delegated to the native range.

                rangeProto.surroundContents = function(node) {
                    this.nativeRange.surroundContents(node);
                    updateRangeProperties(this);
                };

                rangeProto.collapse = function(isStart) {
                    this.nativeRange.collapse(isStart);
                    updateRangeProperties(this);
                };

                rangeProto.cloneRange = function() {
                    return new WrappedRange(this.nativeRange.cloneRange());
                };

                rangeProto.refresh = function() {
                    updateRangeProperties(this);
                };

                rangeProto.toString = function() {
                    return this.nativeRange.toString();
                };

                // Create test range and node for feature detection

                var testTextNode = document.createTextNode("test");
                getBody(document).appendChild(testTextNode);
                var range = document.createRange();

                /*--------------------------------------------------------------------------------------------------------*/

                // Test for Firefox 2 bug that prevents moving the start of a Range to a point after its current end and
                // correct for it

                range.setStart(testTextNode, 0);
                range.setEnd(testTextNode, 0);

                try {
                    range.setStart(testTextNode, 1);

                    rangeProto.setStart = function(node, offset) {
                        this.nativeRange.setStart(node, offset);
                        updateRangeProperties(this);
                    };

                    rangeProto.setEnd = function(node, offset) {
                        this.nativeRange.setEnd(node, offset);
                        updateRangeProperties(this);
                    };

                    createBeforeAfterNodeSetter = function(name) {
                        return function(node) {
                            this.nativeRange[name](node);
                            updateRangeProperties(this);
                        };
                    };

                } catch(ex) {

                    rangeProto.setStart = function(node, offset) {
                        try {
                            this.nativeRange.setStart(node, offset);
                        } catch (ex) {
                            this.nativeRange.setEnd(node, offset);
                            this.nativeRange.setStart(node, offset);
                        }
                        updateRangeProperties(this);
                    };

                    rangeProto.setEnd = function(node, offset) {
                        try {
                            this.nativeRange.setEnd(node, offset);
                        } catch (ex) {
                            this.nativeRange.setStart(node, offset);
                            this.nativeRange.setEnd(node, offset);
                        }
                        updateRangeProperties(this);
                    };

                    createBeforeAfterNodeSetter = function(name, oppositeName) {
                        return function(node) {
                            try {
                                this.nativeRange[name](node);
                            } catch (ex) {
                                this.nativeRange[oppositeName](node);
                                this.nativeRange[name](node);
                            }
                            updateRangeProperties(this);
                        };
                    };
                }

                rangeProto.setStartBefore = createBeforeAfterNodeSetter("setStartBefore", "setEndBefore");
                rangeProto.setStartAfter = createBeforeAfterNodeSetter("setStartAfter", "setEndAfter");
                rangeProto.setEndBefore = createBeforeAfterNodeSetter("setEndBefore", "setStartBefore");
                rangeProto.setEndAfter = createBeforeAfterNodeSetter("setEndAfter", "setStartAfter");

                /*--------------------------------------------------------------------------------------------------------*/

                // Always use DOM4-compliant selectNodeContents implementation: it's simpler and less code than testing
                // whether the native implementation can be trusted
                rangeProto.selectNodeContents = function(node) {
                    this.setStartAndEnd(node, 0, dom.getNodeLength(node));
                };

                /*--------------------------------------------------------------------------------------------------------*/

                // Test for and correct WebKit bug that has the behaviour of compareBoundaryPoints round the wrong way for
                // constants START_TO_END and END_TO_START: https://bugs.webkit.org/show_bug.cgi?id=20738

                range.selectNodeContents(testTextNode);
                range.setEnd(testTextNode, 3);

                var range2 = document.createRange();
                range2.selectNodeContents(testTextNode);
                range2.setEnd(testTextNode, 4);
                range2.setStart(testTextNode, 2);

                if (range.compareBoundaryPoints(range.START_TO_END, range2) == -1 &&
                        range.compareBoundaryPoints(range.END_TO_START, range2) == 1) {
                    // This is the wrong way round, so correct for it

                    rangeProto.compareBoundaryPoints = function(type, range) {
                        range = range.nativeRange || range;
                        if (type == range.START_TO_END) {
                            type = range.END_TO_START;
                        } else if (type == range.END_TO_START) {
                            type = range.START_TO_END;
                        }
                        return this.nativeRange.compareBoundaryPoints(type, range);
                    };
                } else {
                    rangeProto.compareBoundaryPoints = function(type, range) {
                        return this.nativeRange.compareBoundaryPoints(type, range.nativeRange || range);
                    };
                }

                /*--------------------------------------------------------------------------------------------------------*/

                // Test for IE deleteContents() and extractContents() bug and correct it. See issue 107.

                var el = document.createElement("div");
                el.innerHTML = "123";
                var textNode = el.firstChild;
                var body = getBody(document);
                body.appendChild(el);

                range.setStart(textNode, 1);
                range.setEnd(textNode, 2);
                range.deleteContents();

                if (textNode.data == "13") {
                    // Behaviour is correct per DOM4 Range so wrap the browser's implementation of deleteContents() and
                    // extractContents()
                    rangeProto.deleteContents = function() {
                        this.nativeRange.deleteContents();
                        updateRangeProperties(this);
                    };

                    rangeProto.extractContents = function() {
                        var frag = this.nativeRange.extractContents();
                        updateRangeProperties(this);
                        return frag;
                    };
                } else {
                }

                body.removeChild(el);
                body = null;

                /*--------------------------------------------------------------------------------------------------------*/

                // Test for existence of createContextualFragment and delegate to it if it exists
                if (util.isHostMethod(range, "createContextualFragment")) {
                    rangeProto.createContextualFragment = function(fragmentStr) {
                        return this.nativeRange.createContextualFragment(fragmentStr);
                    };
                }

                /*--------------------------------------------------------------------------------------------------------*/

                // Clean up
                getBody(document).removeChild(testTextNode);

                rangeProto.getName = function() {
                    return "WrappedRange";
                };

                api.WrappedRange = WrappedRange;

                api.createNativeRange = function(doc) {
                    doc = getContentDocument(doc, module, "createNativeRange");
                    return doc.createRange();
                };
            })();
        }

        if (api.features.implementsTextRange) {
            /*
            This is a workaround for a bug where IE returns the wrong container element from the TextRange's parentElement()
            method. For example, in the following (where pipes denote the selection boundaries):

            <ul id="ul"><li id="a">| a </li><li id="b"> b |</li></ul>

            var range = document.selection.createRange();
            alert(range.parentElement().id); // Should alert "ul" but alerts "b"

            This method returns the common ancestor node of the following:
            - the parentElement() of the textRange
            - the parentElement() of the textRange after calling collapse(true)
            - the parentElement() of the textRange after calling collapse(false)
            */
            var getTextRangeContainerElement = function(textRange) {
                var parentEl = textRange.parentElement();
                var range = textRange.duplicate();
                range.collapse(true);
                var startEl = range.parentElement();
                range = textRange.duplicate();
                range.collapse(false);
                var endEl = range.parentElement();
                var startEndContainer = (startEl == endEl) ? startEl : dom.getCommonAncestor(startEl, endEl);

                return startEndContainer == parentEl ? startEndContainer : dom.getCommonAncestor(parentEl, startEndContainer);
            };

            var textRangeIsCollapsed = function(textRange) {
                return textRange.compareEndPoints("StartToEnd", textRange) == 0;
            };

            // Gets the boundary of a TextRange expressed as a node and an offset within that node. This function started
            // out as an improved version of code found in Tim Cameron Ryan's IERange (http://code.google.com/p/ierange/)
            // but has grown, fixing problems with line breaks in preformatted text, adding workaround for IE TextRange
            // bugs, handling for inputs and images, plus optimizations.
            var getTextRangeBoundaryPosition = function(textRange, wholeRangeContainerElement, isStart, isCollapsed, startInfo) {
                var workingRange = textRange.duplicate();
                workingRange.collapse(isStart);
                var containerElement = workingRange.parentElement();

                // Sometimes collapsing a TextRange that's at the start of a text node can move it into the previous node, so
                // check for that
                if (!dom.isOrIsAncestorOf(wholeRangeContainerElement, containerElement)) {
                    containerElement = wholeRangeContainerElement;
                }


                // Deal with nodes that cannot "contain rich HTML markup". In practice, this means form inputs, images and
                // similar. See http://msdn.microsoft.com/en-us/library/aa703950%28VS.85%29.aspx
                if (!containerElement.canHaveHTML) {
                    var pos = new DomPosition(containerElement.parentNode, dom.getNodeIndex(containerElement));
                    return {
                        boundaryPosition: pos,
                        nodeInfo: {
                            nodeIndex: pos.offset,
                            containerElement: pos.node
                        }
                    };
                }

                var workingNode = dom.getDocument(containerElement).createElement("span");

                // Workaround for HTML5 Shiv's insane violation of document.createElement(). See Rangy issue 104 and HTML5
                // Shiv issue 64: https://github.com/aFarkas/html5shiv/issues/64
                if (workingNode.parentNode) {
                    dom.removeNode(workingNode);
                }

                var comparison, workingComparisonType = isStart ? "StartToStart" : "StartToEnd";
                var previousNode, nextNode, boundaryPosition, boundaryNode;
                var start = (startInfo && startInfo.containerElement == containerElement) ? startInfo.nodeIndex : 0;
                var childNodeCount = containerElement.childNodes.length;
                var end = childNodeCount;

                // Check end first. Code within the loop assumes that the endth child node of the container is definitely
                // after the range boundary.
                var nodeIndex = end;

                while (true) {
                    if (nodeIndex == childNodeCount) {
                        containerElement.appendChild(workingNode);
                    } else {
                        containerElement.insertBefore(workingNode, containerElement.childNodes[nodeIndex]);
                    }
                    workingRange.moveToElementText(workingNode);
                    comparison = workingRange.compareEndPoints(workingComparisonType, textRange);
                    if (comparison == 0 || start == end) {
                        break;
                    } else if (comparison == -1) {
                        if (end == start + 1) {
                            // We know the endth child node is after the range boundary, so we must be done.
                            break;
                        } else {
                            start = nodeIndex;
                        }
                    } else {
                        end = (end == start + 1) ? start : nodeIndex;
                    }
                    nodeIndex = Math.floor((start + end) / 2);
                    containerElement.removeChild(workingNode);
                }


                // We've now reached or gone past the boundary of the text range we're interested in
                // so have identified the node we want
                boundaryNode = workingNode.nextSibling;

                if (comparison == -1 && boundaryNode && isCharacterDataNode(boundaryNode)) {
                    // This is a character data node (text, comment, cdata). The working range is collapsed at the start of
                    // the node containing the text range's boundary, so we move the end of the working range to the
                    // boundary point and measure the length of its text to get the boundary's offset within the node.
                    workingRange.setEndPoint(isStart ? "EndToStart" : "EndToEnd", textRange);

                    var offset;

                    if (/[\r\n]/.test(boundaryNode.data)) {
                        /*
                        For the particular case of a boundary within a text node containing rendered line breaks (within a
                        <pre> element, for example), we need a slightly complicated approach to get the boundary's offset in
                        IE. The facts:

                        - Each line break is represented as \r in the text node's data/nodeValue properties
                        - Each line break is represented as \r\n in the TextRange's 'text' property
                        - The 'text' property of the TextRange does not contain trailing line breaks

                        To get round the problem presented by the final fact above, we can use the fact that TextRange's
                        moveStart() and moveEnd() methods return the actual number of characters moved, which is not
                        necessarily the same as the number of characters it was instructed to move. The simplest approach is
                        to use this to store the characters moved when moving both the start and end of the range to the
                        start of the document body and subtracting the start offset from the end offset (the
                        "move-negative-gazillion" method). However, this is extremely slow when the document is large and
                        the range is near the end of it. Clearly doing the mirror image (i.e. moving the range boundaries to
                        the end of the document) has the same problem.

                        Another approach that works is to use moveStart() to move the start boundary of the range up to the
                        end boundary one character at a time and incrementing a counter with the value returned by the
                        moveStart() call. However, the check for whether the start boundary has reached the end boundary is
                        expensive, so this method is slow (although unlike "move-negative-gazillion" is largely unaffected
                        by the location of the range within the document).

                        The approach used below is a hybrid of the two methods above. It uses the fact that a string
                        containing the TextRange's 'text' property with each \r\n converted to a single \r character cannot
                        be longer than the text of the TextRange, so the start of the range is moved that length initially
                        and then a character at a time to make up for any trailing line breaks not contained in the 'text'
                        property. This has good performance in most situations compared to the previous two methods.
                        */
                        var tempRange = workingRange.duplicate();
                        var rangeLength = tempRange.text.replace(/\r\n/g, "\r").length;

                        offset = tempRange.moveStart("character", rangeLength);
                        while ( (comparison = tempRange.compareEndPoints("StartToEnd", tempRange)) == -1) {
                            offset++;
                            tempRange.moveStart("character", 1);
                        }
                    } else {
                        offset = workingRange.text.length;
                    }
                    boundaryPosition = new DomPosition(boundaryNode, offset);
                } else {

                    // If the boundary immediately follows a character data node and this is the end boundary, we should favour
                    // a position within that, and likewise for a start boundary preceding a character data node
                    previousNode = (isCollapsed || !isStart) && workingNode.previousSibling;
                    nextNode = (isCollapsed || isStart) && workingNode.nextSibling;
                    if (nextNode && isCharacterDataNode(nextNode)) {
                        boundaryPosition = new DomPosition(nextNode, 0);
                    } else if (previousNode && isCharacterDataNode(previousNode)) {
                        boundaryPosition = new DomPosition(previousNode, previousNode.data.length);
                    } else {
                        boundaryPosition = new DomPosition(containerElement, dom.getNodeIndex(workingNode));
                    }
                }

                // Clean up
                dom.removeNode(workingNode);

                return {
                    boundaryPosition: boundaryPosition,
                    nodeInfo: {
                        nodeIndex: nodeIndex,
                        containerElement: containerElement
                    }
                };
            };

            // Returns a TextRange representing the boundary of a TextRange expressed as a node and an offset within that
            // node. This function started out as an optimized version of code found in Tim Cameron Ryan's IERange
            // (http://code.google.com/p/ierange/)
            var createBoundaryTextRange = function(boundaryPosition, isStart) {
                var boundaryNode, boundaryParent, boundaryOffset = boundaryPosition.offset;
                var doc = dom.getDocument(boundaryPosition.node);
                var workingNode, childNodes, workingRange = getBody(doc).createTextRange();
                var nodeIsDataNode = isCharacterDataNode(boundaryPosition.node);

                if (nodeIsDataNode) {
                    boundaryNode = boundaryPosition.node;
                    boundaryParent = boundaryNode.parentNode;
                } else {
                    childNodes = boundaryPosition.node.childNodes;
                    boundaryNode = (boundaryOffset < childNodes.length) ? childNodes[boundaryOffset] : null;
                    boundaryParent = boundaryPosition.node;
                }

                // Position the range immediately before the node containing the boundary
                workingNode = doc.createElement("span");

                // Making the working element non-empty element persuades IE to consider the TextRange boundary to be within
                // the element rather than immediately before or after it
                workingNode.innerHTML = "&#feff;";

                // insertBefore is supposed to work like appendChild if the second parameter is null. However, a bug report
                // for IERange suggests that it can crash the browser: http://code.google.com/p/ierange/issues/detail?id=12
                if (boundaryNode) {
                    boundaryParent.insertBefore(workingNode, boundaryNode);
                } else {
                    boundaryParent.appendChild(workingNode);
                }

                workingRange.moveToElementText(workingNode);
                workingRange.collapse(!isStart);

                // Clean up
                boundaryParent.removeChild(workingNode);

                // Move the working range to the text offset, if required
                if (nodeIsDataNode) {
                    workingRange[isStart ? "moveStart" : "moveEnd"]("character", boundaryOffset);
                }

                return workingRange;
            };

            /*------------------------------------------------------------------------------------------------------------*/

            // This is a wrapper around a TextRange, providing full DOM Range functionality using rangy's DomRange as a
            // prototype

            WrappedTextRange = function(textRange) {
                this.textRange = textRange;
                this.refresh();
            };

            WrappedTextRange.prototype = new DomRange(document);

            WrappedTextRange.prototype.refresh = function() {
                var start, end, startBoundary;

                // TextRange's parentElement() method cannot be trusted. getTextRangeContainerElement() works around that.
                var rangeContainerElement = getTextRangeContainerElement(this.textRange);

                if (textRangeIsCollapsed(this.textRange)) {
                    end = start = getTextRangeBoundaryPosition(this.textRange, rangeContainerElement, true,
                        true).boundaryPosition;
                } else {
                    startBoundary = getTextRangeBoundaryPosition(this.textRange, rangeContainerElement, true, false);
                    start = startBoundary.boundaryPosition;

                    // An optimization used here is that if the start and end boundaries have the same parent element, the
                    // search scope for the end boundary can be limited to exclude the portion of the element that precedes
                    // the start boundary
                    end = getTextRangeBoundaryPosition(this.textRange, rangeContainerElement, false, false,
                        startBoundary.nodeInfo).boundaryPosition;
                }

                this.setStart(start.node, start.offset);
                this.setEnd(end.node, end.offset);
            };

            WrappedTextRange.prototype.getName = function() {
                return "WrappedTextRange";
            };

            DomRange.copyComparisonConstants(WrappedTextRange);

            var rangeToTextRange = function(range) {
                if (range.collapsed) {
                    return createBoundaryTextRange(new DomPosition(range.startContainer, range.startOffset), true);
                } else {
                    var startRange = createBoundaryTextRange(new DomPosition(range.startContainer, range.startOffset), true);
                    var endRange = createBoundaryTextRange(new DomPosition(range.endContainer, range.endOffset), false);
                    var textRange = getBody( DomRange.getRangeDocument(range) ).createTextRange();
                    textRange.setEndPoint("StartToStart", startRange);
                    textRange.setEndPoint("EndToEnd", endRange);
                    return textRange;
                }
            };

            WrappedTextRange.rangeToTextRange = rangeToTextRange;

            WrappedTextRange.prototype.toTextRange = function() {
                return rangeToTextRange(this);
            };

            api.WrappedTextRange = WrappedTextRange;

            // IE 9 and above have both implementations and Rangy makes both available. The next few lines sets which
            // implementation to use by default.
            if (!api.features.implementsDomRange || api.config.preferTextRange) {
                // Add WrappedTextRange as the Range property of the global object to allow expression like Range.END_TO_END to work
                var globalObj = (function(f) { return f("return this;")(); })(Function);
                if (typeof globalObj.Range == "undefined") {
                    globalObj.Range = WrappedTextRange;
                }

                api.createNativeRange = function(doc) {
                    doc = getContentDocument(doc, module, "createNativeRange");
                    return getBody(doc).createTextRange();
                };

                api.WrappedRange = WrappedTextRange;
            }
        }

        api.createRange = function(doc) {
            doc = getContentDocument(doc, module, "createRange");
            return new api.WrappedRange(api.createNativeRange(doc));
        };

        api.createRangyRange = function(doc) {
            doc = getContentDocument(doc, module, "createRangyRange");
            return new DomRange(doc);
        };

        util.createAliasForDeprecatedMethod(api, "createIframeRange", "createRange");
        util.createAliasForDeprecatedMethod(api, "createIframeRangyRange", "createRangyRange");

        api.addShimListener(function(win) {
            var doc = win.document;
            if (typeof doc.createRange == "undefined") {
                doc.createRange = function() {
                    return api.createRange(doc);
                };
            }
            doc = win = null;
        });
    });

    /*----------------------------------------------------------------------------------------------------------------*/

    // This module creates a selection object wrapper that conforms as closely as possible to the Selection specification
    // in the HTML Editing spec (http://dvcs.w3.org/hg/editing/raw-file/tip/editing.html#selections)
    api.createCoreModule("WrappedSelection", ["DomRange", "WrappedRange"], function(api, module) {
        api.config.checkSelectionRanges = true;

        var BOOLEAN = "boolean";
        var NUMBER = "number";
        var dom = api.dom;
        var util = api.util;
        var isHostMethod = util.isHostMethod;
        var DomRange = api.DomRange;
        var WrappedRange = api.WrappedRange;
        var DOMException = api.DOMException;
        var DomPosition = dom.DomPosition;
        var getNativeSelection;
        var selectionIsCollapsed;
        var features = api.features;
        var CONTROL = "Control";
        var getDocument = dom.getDocument;
        var getBody = dom.getBody;
        var rangesEqual = DomRange.rangesEqual;


        // Utility function to support direction parameters in the API that may be a string ("backward", "backwards",
        // "forward" or "forwards") or a Boolean (true for backwards).
        function isDirectionBackward(dir) {
            return (typeof dir == "string") ? /^backward(s)?$/i.test(dir) : !!dir;
        }

        function getWindow(win, methodName) {
            if (!win) {
                return window;
            } else if (dom.isWindow(win)) {
                return win;
            } else if (win instanceof WrappedSelection) {
                return win.win;
            } else {
                var doc = dom.getContentDocument(win, module, methodName);
                return dom.getWindow(doc);
            }
        }

        function getWinSelection(winParam) {
            return getWindow(winParam, "getWinSelection").getSelection();
        }

        function getDocSelection(winParam) {
            return getWindow(winParam, "getDocSelection").document.selection;
        }

        function winSelectionIsBackward(sel) {
            var backward = false;
            if (sel.anchorNode) {
                backward = (dom.comparePoints(sel.anchorNode, sel.anchorOffset, sel.focusNode, sel.focusOffset) == 1);
            }
            return backward;
        }

        // Test for the Range/TextRange and Selection features required
        // Test for ability to retrieve selection
        var implementsWinGetSelection = isHostMethod(window, "getSelection"),
            implementsDocSelection = util.isHostObject(document, "selection");

        features.implementsWinGetSelection = implementsWinGetSelection;
        features.implementsDocSelection = implementsDocSelection;

        var useDocumentSelection = implementsDocSelection && (!implementsWinGetSelection || api.config.preferTextRange);

        if (useDocumentSelection) {
            getNativeSelection = getDocSelection;
            api.isSelectionValid = function(winParam) {
                var doc = getWindow(winParam, "isSelectionValid").document, nativeSel = doc.selection;

                // Check whether the selection TextRange is actually contained within the correct document
                return (nativeSel.type != "None" || getDocument(nativeSel.createRange().parentElement()) == doc);
            };
        } else if (implementsWinGetSelection) {
            getNativeSelection = getWinSelection;
            api.isSelectionValid = function() {
                return true;
            };
        } else {
            module.fail("Neither document.selection or window.getSelection() detected.");
            return false;
        }

        api.getNativeSelection = getNativeSelection;

        var testSelection = getNativeSelection();

        // In Firefox, the selection is null in an iframe with display: none. See issue #138.
        if (!testSelection) {
            module.fail("Native selection was null (possibly issue 138?)");
            return false;
        }

        var testRange = api.createNativeRange(document);
        var body = getBody(document);

        // Obtaining a range from a selection
        var selectionHasAnchorAndFocus = util.areHostProperties(testSelection,
            ["anchorNode", "focusNode", "anchorOffset", "focusOffset"]);

        features.selectionHasAnchorAndFocus = selectionHasAnchorAndFocus;

        // Test for existence of native selection extend() method
        var selectionHasExtend = isHostMethod(testSelection, "extend");
        features.selectionHasExtend = selectionHasExtend;

        // Test if rangeCount exists
        var selectionHasRangeCount = (typeof testSelection.rangeCount == NUMBER);
        features.selectionHasRangeCount = selectionHasRangeCount;

        var selectionSupportsMultipleRanges = false;
        var collapsedNonEditableSelectionsSupported = true;

        var addRangeBackwardToNative = selectionHasExtend ?
            function(nativeSelection, range) {
                var doc = DomRange.getRangeDocument(range);
                var endRange = api.createRange(doc);
                endRange.collapseToPoint(range.endContainer, range.endOffset);
                nativeSelection.addRange(getNativeRange(endRange));
                nativeSelection.extend(range.startContainer, range.startOffset);
            } : null;

        if (util.areHostMethods(testSelection, ["addRange", "getRangeAt", "removeAllRanges"]) &&
                typeof testSelection.rangeCount == NUMBER && features.implementsDomRange) {

            (function() {
                // Previously an iframe was used but this caused problems in some circumstances in IE, so tests are
                // performed on the current document's selection. See issue 109.

                // Note also that if a selection previously existed, it is wiped and later restored by these tests. This
                // will result in the selection direction begin reversed if the original selection was backwards and the
                // browser does not support setting backwards selections (Internet Explorer, I'm looking at you).
                var sel = window.getSelection();
                if (sel) {
                    // Store the current selection
                    var originalSelectionRangeCount = sel.rangeCount;
                    var selectionHasMultipleRanges = (originalSelectionRangeCount > 1);
                    var originalSelectionRanges = [];
                    var originalSelectionBackward = winSelectionIsBackward(sel);
                    for (var i = 0; i < originalSelectionRangeCount; ++i) {
                        originalSelectionRanges[i] = sel.getRangeAt(i);
                    }

                    // Create some test elements
                    var testEl = dom.createTestElement(document, "", false);
                    var textNode = testEl.appendChild( document.createTextNode("\u00a0\u00a0\u00a0") );

                    // Test whether the native selection will allow a collapsed selection within a non-editable element
                    var r1 = document.createRange();

                    r1.setStart(textNode, 1);
                    r1.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(r1);
                    collapsedNonEditableSelectionsSupported = (sel.rangeCount == 1);
                    sel.removeAllRanges();

                    // Test whether the native selection is capable of supporting multiple ranges.
                    if (!selectionHasMultipleRanges) {
                        // Doing the original feature test here in Chrome 36 (and presumably later versions) prints a
                        // console error of "Discontiguous selection is not supported." that cannot be suppressed. There's
                        // nothing we can do about this while retaining the feature test so we have to resort to a browser
                        // sniff. I'm not happy about it. See
                        // https://code.google.com/p/chromium/issues/detail?id=399791
                        var chromeMatch = window.navigator.appVersion.match(/Chrome\/(.*?) /);
                        if (chromeMatch && parseInt(chromeMatch[1]) >= 36) {
                            selectionSupportsMultipleRanges = false;
                        } else {
                            var r2 = r1.cloneRange();
                            r1.setStart(textNode, 0);
                            r2.setEnd(textNode, 3);
                            r2.setStart(textNode, 2);
                            sel.addRange(r1);
                            sel.addRange(r2);
                            selectionSupportsMultipleRanges = (sel.rangeCount == 2);
                        }
                    }

                    // Clean up
                    dom.removeNode(testEl);
                    sel.removeAllRanges();

                    for (i = 0; i < originalSelectionRangeCount; ++i) {
                        if (i == 0 && originalSelectionBackward) {
                            if (addRangeBackwardToNative) {
                                addRangeBackwardToNative(sel, originalSelectionRanges[i]);
                            } else {
                                api.warn("Rangy initialization: original selection was backwards but selection has been restored forwards because the browser does not support Selection.extend");
                                sel.addRange(originalSelectionRanges[i]);
                            }
                        } else {
                            sel.addRange(originalSelectionRanges[i]);
                        }
                    }
                }
            })();
        }

        features.selectionSupportsMultipleRanges = selectionSupportsMultipleRanges;
        features.collapsedNonEditableSelectionsSupported = collapsedNonEditableSelectionsSupported;

        // ControlRanges
        var implementsControlRange = false, testControlRange;

        if (body && isHostMethod(body, "createControlRange")) {
            testControlRange = body.createControlRange();
            if (util.areHostProperties(testControlRange, ["item", "add"])) {
                implementsControlRange = true;
            }
        }
        features.implementsControlRange = implementsControlRange;

        // Selection collapsedness
        if (selectionHasAnchorAndFocus) {
            selectionIsCollapsed = function(sel) {
                return sel.anchorNode === sel.focusNode && sel.anchorOffset === sel.focusOffset;
            };
        } else {
            selectionIsCollapsed = function(sel) {
                return sel.rangeCount ? sel.getRangeAt(sel.rangeCount - 1).collapsed : false;
            };
        }

        function updateAnchorAndFocusFromRange(sel, range, backward) {
            var anchorPrefix = backward ? "end" : "start", focusPrefix = backward ? "start" : "end";
            sel.anchorNode = range[anchorPrefix + "Container"];
            sel.anchorOffset = range[anchorPrefix + "Offset"];
            sel.focusNode = range[focusPrefix + "Container"];
            sel.focusOffset = range[focusPrefix + "Offset"];
        }

        function updateAnchorAndFocusFromNativeSelection(sel) {
            var nativeSel = sel.nativeSelection;
            sel.anchorNode = nativeSel.anchorNode;
            sel.anchorOffset = nativeSel.anchorOffset;
            sel.focusNode = nativeSel.focusNode;
            sel.focusOffset = nativeSel.focusOffset;
        }

        function updateEmptySelection(sel) {
            sel.anchorNode = sel.focusNode = null;
            sel.anchorOffset = sel.focusOffset = 0;
            sel.rangeCount = 0;
            sel.isCollapsed = true;
            sel._ranges.length = 0;
        }

        function getNativeRange(range) {
            var nativeRange;
            if (range instanceof DomRange) {
                nativeRange = api.createNativeRange(range.getDocument());
                nativeRange.setEnd(range.endContainer, range.endOffset);
                nativeRange.setStart(range.startContainer, range.startOffset);
            } else if (range instanceof WrappedRange) {
                nativeRange = range.nativeRange;
            } else if (features.implementsDomRange && (range instanceof dom.getWindow(range.startContainer).Range)) {
                nativeRange = range;
            }
            return nativeRange;
        }

        function rangeContainsSingleElement(rangeNodes) {
            if (!rangeNodes.length || rangeNodes[0].nodeType != 1) {
                return false;
            }
            for (var i = 1, len = rangeNodes.length; i < len; ++i) {
                if (!dom.isAncestorOf(rangeNodes[0], rangeNodes[i])) {
                    return false;
                }
            }
            return true;
        }

        function getSingleElementFromRange(range) {
            var nodes = range.getNodes();
            if (!rangeContainsSingleElement(nodes)) {
                throw module.createError("getSingleElementFromRange: range " + range.inspect() + " did not consist of a single element");
            }
            return nodes[0];
        }

        // Simple, quick test which only needs to distinguish between a TextRange and a ControlRange
        function isTextRange(range) {
            return !!range && typeof range.text != "undefined";
        }

        function updateFromTextRange(sel, range) {
            // Create a Range from the selected TextRange
            var wrappedRange = new WrappedRange(range);
            sel._ranges = [wrappedRange];

            updateAnchorAndFocusFromRange(sel, wrappedRange, false);
            sel.rangeCount = 1;
            sel.isCollapsed = wrappedRange.collapsed;
        }

        function updateControlSelection(sel) {
            // Update the wrapped selection based on what's now in the native selection
            sel._ranges.length = 0;
            if (sel.docSelection.type == "None") {
                updateEmptySelection(sel);
            } else {
                var controlRange = sel.docSelection.createRange();
                if (isTextRange(controlRange)) {
                    // This case (where the selection type is "Control" and calling createRange() on the selection returns
                    // a TextRange) can happen in IE 9. It happens, for example, when all elements in the selected
                    // ControlRange have been removed from the ControlRange and removed from the document.
                    updateFromTextRange(sel, controlRange);
                } else {
                    sel.rangeCount = controlRange.length;
                    var range, doc = getDocument(controlRange.item(0));
                    for (var i = 0; i < sel.rangeCount; ++i) {
                        range = api.createRange(doc);
                        range.selectNode(controlRange.item(i));
                        sel._ranges.push(range);
                    }
                    sel.isCollapsed = sel.rangeCount == 1 && sel._ranges[0].collapsed;
                    updateAnchorAndFocusFromRange(sel, sel._ranges[sel.rangeCount - 1], false);
                }
            }
        }

        function addRangeToControlSelection(sel, range) {
            var controlRange = sel.docSelection.createRange();
            var rangeElement = getSingleElementFromRange(range);

            // Create a new ControlRange containing all the elements in the selected ControlRange plus the element
            // contained by the supplied range
            var doc = getDocument(controlRange.item(0));
            var newControlRange = getBody(doc).createControlRange();
            for (var i = 0, len = controlRange.length; i < len; ++i) {
                newControlRange.add(controlRange.item(i));
            }
            try {
                newControlRange.add(rangeElement);
            } catch (ex) {
                throw module.createError("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)");
            }
            newControlRange.select();

            // Update the wrapped selection based on what's now in the native selection
            updateControlSelection(sel);
        }

        var getSelectionRangeAt;

        if (isHostMethod(testSelection, "getRangeAt")) {
            // try/catch is present because getRangeAt() must have thrown an error in some browser and some situation.
            // Unfortunately, I didn't write a comment about the specifics and am now scared to take it out. Let that be a
            // lesson to us all, especially me.
            getSelectionRangeAt = function(sel, index) {
                try {
                    return sel.getRangeAt(index);
                } catch (ex) {
                    return null;
                }
            };
        } else if (selectionHasAnchorAndFocus) {
            getSelectionRangeAt = function(sel) {
                var doc = getDocument(sel.anchorNode);
                var range = api.createRange(doc);
                range.setStartAndEnd(sel.anchorNode, sel.anchorOffset, sel.focusNode, sel.focusOffset);

                // Handle the case when the selection was selected backwards (from the end to the start in the
                // document)
                if (range.collapsed !== this.isCollapsed) {
                    range.setStartAndEnd(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset);
                }

                return range;
            };
        }

        function WrappedSelection(selection, docSelection, win) {
            this.nativeSelection = selection;
            this.docSelection = docSelection;
            this._ranges = [];
            this.win = win;
            this.refresh();
        }

        WrappedSelection.prototype = api.selectionPrototype;

        function deleteProperties(sel) {
            sel.win = sel.anchorNode = sel.focusNode = sel._ranges = null;
            sel.rangeCount = sel.anchorOffset = sel.focusOffset = 0;
            sel.detached = true;
        }

        var cachedRangySelections = [];

        function actOnCachedSelection(win, action) {
            var i = cachedRangySelections.length, cached, sel;
            while (i--) {
                cached = cachedRangySelections[i];
                sel = cached.selection;
                if (action == "deleteAll") {
                    deleteProperties(sel);
                } else if (cached.win == win) {
                    if (action == "delete") {
                        cachedRangySelections.splice(i, 1);
                        return true;
                    } else {
                        return sel;
                    }
                }
            }
            if (action == "deleteAll") {
                cachedRangySelections.length = 0;
            }
            return null;
        }

        var getSelection = function(win) {
            // Check if the parameter is a Rangy Selection object
            if (win && win instanceof WrappedSelection) {
                win.refresh();
                return win;
            }

            win = getWindow(win, "getNativeSelection");

            var sel = actOnCachedSelection(win);
            var nativeSel = getNativeSelection(win), docSel = implementsDocSelection ? getDocSelection(win) : null;
            if (sel) {
                sel.nativeSelection = nativeSel;
                sel.docSelection = docSel;
                sel.refresh();
            } else {
                sel = new WrappedSelection(nativeSel, docSel, win);
                cachedRangySelections.push( { win: win, selection: sel } );
            }
            return sel;
        };

        api.getSelection = getSelection;

        util.createAliasForDeprecatedMethod(api, "getIframeSelection", "getSelection");

        var selProto = WrappedSelection.prototype;

        function createControlSelection(sel, ranges) {
            // Ensure that the selection becomes of type "Control"
            var doc = getDocument(ranges[0].startContainer);
            var controlRange = getBody(doc).createControlRange();
            for (var i = 0, el, len = ranges.length; i < len; ++i) {
                el = getSingleElementFromRange(ranges[i]);
                try {
                    controlRange.add(el);
                } catch (ex) {
                    throw module.createError("setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layout?)");
                }
            }
            controlRange.select();

            // Update the wrapped selection based on what's now in the native selection
            updateControlSelection(sel);
        }

        // Selecting a range
        if (!useDocumentSelection && selectionHasAnchorAndFocus && util.areHostMethods(testSelection, ["removeAllRanges", "addRange"])) {
            selProto.removeAllRanges = function() {
                this.nativeSelection.removeAllRanges();
                updateEmptySelection(this);
            };

            var addRangeBackward = function(sel, range) {
                addRangeBackwardToNative(sel.nativeSelection, range);
                sel.refresh();
            };

            if (selectionHasRangeCount) {
                selProto.addRange = function(range, direction) {
                    if (implementsControlRange && implementsDocSelection && this.docSelection.type == CONTROL) {
                        addRangeToControlSelection(this, range);
                    } else {
                        if (isDirectionBackward(direction) && selectionHasExtend) {
                            addRangeBackward(this, range);
                        } else {
                            var previousRangeCount;
                            if (selectionSupportsMultipleRanges) {
                                previousRangeCount = this.rangeCount;
                            } else {
                                this.removeAllRanges();
                                previousRangeCount = 0;
                            }
                            // Clone the native range so that changing the selected range does not affect the selection.
                            // This is contrary to the spec but is the only way to achieve consistency between browsers. See
                            // issue 80.
                            var clonedNativeRange = getNativeRange(range).cloneRange();
                            try {
                                this.nativeSelection.addRange(clonedNativeRange);
                            } catch (ex) {
                            }

                            // Check whether adding the range was successful
                            this.rangeCount = this.nativeSelection.rangeCount;

                            if (this.rangeCount == previousRangeCount + 1) {
                                // The range was added successfully

                                // Check whether the range that we added to the selection is reflected in the last range extracted from
                                // the selection
                                if (api.config.checkSelectionRanges) {
                                    var nativeRange = getSelectionRangeAt(this.nativeSelection, this.rangeCount - 1);
                                    if (nativeRange && !rangesEqual(nativeRange, range)) {
                                        // Happens in WebKit with, for example, a selection placed at the start of a text node
                                        range = new WrappedRange(nativeRange);
                                    }
                                }
                                this._ranges[this.rangeCount - 1] = range;
                                updateAnchorAndFocusFromRange(this, range, selectionIsBackward(this.nativeSelection));
                                this.isCollapsed = selectionIsCollapsed(this);
                            } else {
                                // The range was not added successfully. The simplest thing is to refresh
                                this.refresh();
                            }
                        }
                    }
                };
            } else {
                selProto.addRange = function(range, direction) {
                    if (isDirectionBackward(direction) && selectionHasExtend) {
                        addRangeBackward(this, range);
                    } else {
                        this.nativeSelection.addRange(getNativeRange(range));
                        this.refresh();
                    }
                };
            }

            selProto.setRanges = function(ranges) {
                if (implementsControlRange && implementsDocSelection && ranges.length > 1) {
                    createControlSelection(this, ranges);
                } else {
                    this.removeAllRanges();
                    for (var i = 0, len = ranges.length; i < len; ++i) {
                        this.addRange(ranges[i]);
                    }
                }
            };
        } else if (isHostMethod(testSelection, "empty") && isHostMethod(testRange, "select") &&
                   implementsControlRange && useDocumentSelection) {

            selProto.removeAllRanges = function() {
                // Added try/catch as fix for issue #21
                try {
                    this.docSelection.empty();

                    // Check for empty() not working (issue #24)
                    if (this.docSelection.type != "None") {
                        // Work around failure to empty a control selection by instead selecting a TextRange and then
                        // calling empty()
                        var doc;
                        if (this.anchorNode) {
                            doc = getDocument(this.anchorNode);
                        } else if (this.docSelection.type == CONTROL) {
                            var controlRange = this.docSelection.createRange();
                            if (controlRange.length) {
                                doc = getDocument( controlRange.item(0) );
                            }
                        }
                        if (doc) {
                            var textRange = getBody(doc).createTextRange();
                            textRange.select();
                            this.docSelection.empty();
                        }
                    }
                } catch(ex) {}
                updateEmptySelection(this);
            };

            selProto.addRange = function(range) {
                if (this.docSelection.type == CONTROL) {
                    addRangeToControlSelection(this, range);
                } else {
                    api.WrappedTextRange.rangeToTextRange(range).select();
                    this._ranges[0] = range;
                    this.rangeCount = 1;
                    this.isCollapsed = this._ranges[0].collapsed;
                    updateAnchorAndFocusFromRange(this, range, false);
                }
            };

            selProto.setRanges = function(ranges) {
                this.removeAllRanges();
                var rangeCount = ranges.length;
                if (rangeCount > 1) {
                    createControlSelection(this, ranges);
                } else if (rangeCount) {
                    this.addRange(ranges[0]);
                }
            };
        } else {
            module.fail("No means of selecting a Range or TextRange was found");
            return false;
        }

        selProto.getRangeAt = function(index) {
            if (index < 0 || index >= this.rangeCount) {
                throw new DOMException("INDEX_SIZE_ERR");
            } else {
                // Clone the range to preserve selection-range independence. See issue 80.
                return this._ranges[index].cloneRange();
            }
        };

        var refreshSelection;

        if (useDocumentSelection) {
            refreshSelection = function(sel) {
                var range;
                if (api.isSelectionValid(sel.win)) {
                    range = sel.docSelection.createRange();
                } else {
                    range = getBody(sel.win.document).createTextRange();
                    range.collapse(true);
                }

                if (sel.docSelection.type == CONTROL) {
                    updateControlSelection(sel);
                } else if (isTextRange(range)) {
                    updateFromTextRange(sel, range);
                } else {
                    updateEmptySelection(sel);
                }
            };
        } else if (isHostMethod(testSelection, "getRangeAt") && typeof testSelection.rangeCount == NUMBER) {
            refreshSelection = function(sel) {
                if (implementsControlRange && implementsDocSelection && sel.docSelection.type == CONTROL) {
                    updateControlSelection(sel);
                } else {
                    sel._ranges.length = sel.rangeCount = sel.nativeSelection.rangeCount;
                    if (sel.rangeCount) {
                        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                            sel._ranges[i] = new api.WrappedRange(sel.nativeSelection.getRangeAt(i));
                        }
                        updateAnchorAndFocusFromRange(sel, sel._ranges[sel.rangeCount - 1], selectionIsBackward(sel.nativeSelection));
                        sel.isCollapsed = selectionIsCollapsed(sel);
                    } else {
                        updateEmptySelection(sel);
                    }
                }
            };
        } else if (selectionHasAnchorAndFocus && typeof testSelection.isCollapsed == BOOLEAN && typeof testRange.collapsed == BOOLEAN && features.implementsDomRange) {
            refreshSelection = function(sel) {
                var range, nativeSel = sel.nativeSelection;
                if (nativeSel.anchorNode) {
                    range = getSelectionRangeAt(nativeSel, 0);
                    sel._ranges = [range];
                    sel.rangeCount = 1;
                    updateAnchorAndFocusFromNativeSelection(sel);
                    sel.isCollapsed = selectionIsCollapsed(sel);
                } else {
                    updateEmptySelection(sel);
                }
            };
        } else {
            module.fail("No means of obtaining a Range or TextRange from the user's selection was found");
            return false;
        }

        selProto.refresh = function(checkForChanges) {
            var oldRanges = checkForChanges ? this._ranges.slice(0) : null;
            var oldAnchorNode = this.anchorNode, oldAnchorOffset = this.anchorOffset;

            refreshSelection(this);
            if (checkForChanges) {
                // Check the range count first
                var i = oldRanges.length;
                if (i != this._ranges.length) {
                    return true;
                }

                // Now check the direction. Checking the anchor position is the same is enough since we're checking all the
                // ranges after this
                if (this.anchorNode != oldAnchorNode || this.anchorOffset != oldAnchorOffset) {
                    return true;
                }

                // Finally, compare each range in turn
                while (i--) {
                    if (!rangesEqual(oldRanges[i], this._ranges[i])) {
                        return true;
                    }
                }
                return false;
            }
        };

        // Removal of a single range
        var removeRangeManually = function(sel, range) {
            var ranges = sel.getAllRanges();
            sel.removeAllRanges();
            for (var i = 0, len = ranges.length; i < len; ++i) {
                if (!rangesEqual(range, ranges[i])) {
                    sel.addRange(ranges[i]);
                }
            }
            if (!sel.rangeCount) {
                updateEmptySelection(sel);
            }
        };

        if (implementsControlRange && implementsDocSelection) {
            selProto.removeRange = function(range) {
                if (this.docSelection.type == CONTROL) {
                    var controlRange = this.docSelection.createRange();
                    var rangeElement = getSingleElementFromRange(range);

                    // Create a new ControlRange containing all the elements in the selected ControlRange minus the
                    // element contained by the supplied range
                    var doc = getDocument(controlRange.item(0));
                    var newControlRange = getBody(doc).createControlRange();
                    var el, removed = false;
                    for (var i = 0, len = controlRange.length; i < len; ++i) {
                        el = controlRange.item(i);
                        if (el !== rangeElement || removed) {
                            newControlRange.add(controlRange.item(i));
                        } else {
                            removed = true;
                        }
                    }
                    newControlRange.select();

                    // Update the wrapped selection based on what's now in the native selection
                    updateControlSelection(this);
                } else {
                    removeRangeManually(this, range);
                }
            };
        } else {
            selProto.removeRange = function(range) {
                removeRangeManually(this, range);
            };
        }

        // Detecting if a selection is backward
        var selectionIsBackward;
        if (!useDocumentSelection && selectionHasAnchorAndFocus && features.implementsDomRange) {
            selectionIsBackward = winSelectionIsBackward;

            selProto.isBackward = function() {
                return selectionIsBackward(this);
            };
        } else {
            selectionIsBackward = selProto.isBackward = function() {
                return false;
            };
        }

        // Create an alias for backwards compatibility. From 1.3, everything is "backward" rather than "backwards"
        selProto.isBackwards = selProto.isBackward;

        // Selection stringifier
        // This is conformant to the old HTML5 selections draft spec but differs from WebKit and Mozilla's implementation.
        // The current spec does not yet define this method.
        selProto.toString = function() {
            var rangeTexts = [];
            for (var i = 0, len = this.rangeCount; i < len; ++i) {
                rangeTexts[i] = "" + this._ranges[i];
            }
            return rangeTexts.join("");
        };

        function assertNodeInSameDocument(sel, node) {
            if (sel.win.document != getDocument(node)) {
                throw new DOMException("WRONG_DOCUMENT_ERR");
            }
        }

        // No current browser conforms fully to the spec for this method, so Rangy's own method is always used
        selProto.collapse = function(node, offset) {
            assertNodeInSameDocument(this, node);
            var range = api.createRange(node);
            range.collapseToPoint(node, offset);
            this.setSingleRange(range);
            this.isCollapsed = true;
        };

        selProto.collapseToStart = function() {
            if (this.rangeCount) {
                var range = this._ranges[0];
                this.collapse(range.startContainer, range.startOffset);
            } else {
                throw new DOMException("INVALID_STATE_ERR");
            }
        };

        selProto.collapseToEnd = function() {
            if (this.rangeCount) {
                var range = this._ranges[this.rangeCount - 1];
                this.collapse(range.endContainer, range.endOffset);
            } else {
                throw new DOMException("INVALID_STATE_ERR");
            }
        };

        // The spec is very specific on how selectAllChildren should be implemented and not all browsers implement it as
        // specified so the native implementation is never used by Rangy.
        selProto.selectAllChildren = function(node) {
            assertNodeInSameDocument(this, node);
            var range = api.createRange(node);
            range.selectNodeContents(node);
            this.setSingleRange(range);
        };

        selProto.deleteFromDocument = function() {
            // Sepcial behaviour required for IE's control selections
            if (implementsControlRange && implementsDocSelection && this.docSelection.type == CONTROL) {
                var controlRange = this.docSelection.createRange();
                var element;
                while (controlRange.length) {
                    element = controlRange.item(0);
                    controlRange.remove(element);
                    dom.removeNode(element);
                }
                this.refresh();
            } else if (this.rangeCount) {
                var ranges = this.getAllRanges();
                if (ranges.length) {
                    this.removeAllRanges();
                    for (var i = 0, len = ranges.length; i < len; ++i) {
                        ranges[i].deleteContents();
                    }
                    // The spec says nothing about what the selection should contain after calling deleteContents on each
                    // range. Firefox moves the selection to where the final selected range was, so we emulate that
                    this.addRange(ranges[len - 1]);
                }
            }
        };

        // The following are non-standard extensions
        selProto.eachRange = function(func, returnValue) {
            for (var i = 0, len = this._ranges.length; i < len; ++i) {
                if ( func( this.getRangeAt(i) ) ) {
                    return returnValue;
                }
            }
        };

        selProto.getAllRanges = function() {
            var ranges = [];
            this.eachRange(function(range) {
                ranges.push(range);
            });
            return ranges;
        };

        selProto.setSingleRange = function(range, direction) {
            this.removeAllRanges();
            this.addRange(range, direction);
        };

        selProto.callMethodOnEachRange = function(methodName, params) {
            var results = [];
            this.eachRange( function(range) {
                results.push( range[methodName].apply(range, params || []) );
            } );
            return results;
        };

        function createStartOrEndSetter(isStart) {
            return function(node, offset) {
                var range;
                if (this.rangeCount) {
                    range = this.getRangeAt(0);
                    range["set" + (isStart ? "Start" : "End")](node, offset);
                } else {
                    range = api.createRange(this.win.document);
                    range.setStartAndEnd(node, offset);
                }
                this.setSingleRange(range, this.isBackward());
            };
        }

        selProto.setStart = createStartOrEndSetter(true);
        selProto.setEnd = createStartOrEndSetter(false);

        // Add select() method to Range prototype. Any existing selection will be removed.
        api.rangePrototype.select = function(direction) {
            getSelection( this.getDocument() ).setSingleRange(this, direction);
        };

        selProto.changeEachRange = function(func) {
            var ranges = [];
            var backward = this.isBackward();

            this.eachRange(function(range) {
                func(range);
                ranges.push(range);
            });

            this.removeAllRanges();
            if (backward && ranges.length == 1) {
                this.addRange(ranges[0], "backward");
            } else {
                this.setRanges(ranges);
            }
        };

        selProto.containsNode = function(node, allowPartial) {
            return this.eachRange( function(range) {
                return range.containsNode(node, allowPartial);
            }, true ) || false;
        };

        selProto.getBookmark = function(containerNode) {
            return {
                backward: this.isBackward(),
                rangeBookmarks: this.callMethodOnEachRange("getBookmark", [containerNode])
            };
        };

        selProto.moveToBookmark = function(bookmark) {
            var selRanges = [];
            for (var i = 0, rangeBookmark, range; rangeBookmark = bookmark.rangeBookmarks[i++]; ) {
                range = api.createRange(this.win);
                range.moveToBookmark(rangeBookmark);
                selRanges.push(range);
            }
            if (bookmark.backward) {
                this.setSingleRange(selRanges[0], "backward");
            } else {
                this.setRanges(selRanges);
            }
        };

        selProto.saveRanges = function() {
            return {
                backward: this.isBackward(),
                ranges: this.callMethodOnEachRange("cloneRange")
            };
        };

        selProto.restoreRanges = function(selRanges) {
            this.removeAllRanges();
            for (var i = 0, range; range = selRanges.ranges[i]; ++i) {
                this.addRange(range, (selRanges.backward && i == 0));
            }
        };

        selProto.toHtml = function() {
            var rangeHtmls = [];
            this.eachRange(function(range) {
                rangeHtmls.push( DomRange.toHtml(range) );
            });
            return rangeHtmls.join("");
        };

        if (features.implementsTextRange) {
            selProto.getNativeTextRange = function() {
                var sel, textRange;
                if ( (sel = this.docSelection) ) {
                    var range = sel.createRange();
                    if (isTextRange(range)) {
                        return range;
                    } else {
                        throw module.createError("getNativeTextRange: selection is a control selection");
                    }
                } else if (this.rangeCount > 0) {
                    return api.WrappedTextRange.rangeToTextRange( this.getRangeAt(0) );
                } else {
                    throw module.createError("getNativeTextRange: selection contains no range");
                }
            };
        }

        function inspect(sel) {
            var rangeInspects = [];
            var anchor = new DomPosition(sel.anchorNode, sel.anchorOffset);
            var focus = new DomPosition(sel.focusNode, sel.focusOffset);
            var name = (typeof sel.getName == "function") ? sel.getName() : "Selection";

            if (typeof sel.rangeCount != "undefined") {
                for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                    rangeInspects[i] = DomRange.inspect(sel.getRangeAt(i));
                }
            }
            return "[" + name + "(Ranges: " + rangeInspects.join(", ") +
                    ")(anchor: " + anchor.inspect() + ", focus: " + focus.inspect() + "]";
        }

        selProto.getName = function() {
            return "WrappedSelection";
        };

        selProto.inspect = function() {
            return inspect(this);
        };

        selProto.detach = function() {
            actOnCachedSelection(this.win, "delete");
            deleteProperties(this);
        };

        WrappedSelection.detachAll = function() {
            actOnCachedSelection(null, "deleteAll");
        };

        WrappedSelection.inspect = inspect;
        WrappedSelection.isDirectionBackward = isDirectionBackward;

        api.Selection = WrappedSelection;

        api.selectionPrototype = selProto;

        api.addShimListener(function(win) {
            if (typeof win.getSelection == "undefined") {
                win.getSelection = function() {
                    return getSelection(win);
                };
            }
            win = null;
        });
    });
    

    /*----------------------------------------------------------------------------------------------------------------*/

    // Wait for document to load before initializing
    var docReady = false;

    var loadHandler = function(e) {
        if (!docReady) {
            docReady = true;
            if (!api.initialized && api.config.autoInitialize) {
                init();
            }
        }
    };

    if (isBrowser) {
        // Test whether the document has already been loaded and initialize immediately if so
        if (document.readyState == "complete") {
            loadHandler();
        } else {
            if (isHostMethod(document, "addEventListener")) {
                document.addEventListener("DOMContentLoaded", loadHandler, false);
            }

            // Add a fallback in case the DOMContentLoaded event isn't supported
            addListener(window, "load", loadHandler);
        }
    }

    return api;
}, this);
/**
 * Class Applier module for Rangy.
 * Adds, removes and toggles classes on Ranges and Selections
 *
 * Part of Rangy, a cross-browser JavaScript range and selection library
 * https://github.com/timdown/rangy
 *
 * Depends on Rangy core.
 *
 * Copyright 2015, Tim Down
 * Licensed under the MIT license.
 * Version: 1.3.0
 * Build date: 10 May 2015
 */
(function(factory, root) {
    if (typeof define == "function" && define.amd) {
        // AMD. Register as an anonymous module with a dependency on Rangy.
        define(["./rangy-core"], factory);
    } else if (typeof module != "undefined" && typeof exports == "object") {
        // Node/CommonJS style
        module.exports = factory( require("rangy") );
    } else {
        // No AMD or CommonJS support so we use the rangy property of root (probably the global variable)
        factory(root.rangy);
    }
})(function(rangy) {
    rangy.createModule("ClassApplier", ["WrappedSelection"], function(api, module) {
        var dom = api.dom;
        var DomPosition = dom.DomPosition;
        var contains = dom.arrayContains;
        var util = api.util;
        var forEach = util.forEach;


        var defaultTagName = "span";
        var createElementNSSupported = util.isHostMethod(document, "createElementNS");

        function each(obj, func) {
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    if (func(i, obj[i]) === false) {
                        return false;
                    }
                }
            }
            return true;
        }

        function trim(str) {
            return str.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        }

        function classNameContainsClass(fullClassName, className) {
            return !!fullClassName && new RegExp("(?:^|\\s)" + className + "(?:\\s|$)").test(fullClassName);
        }

        // Inefficient, inelegant nonsense for IE's svg element, which has no classList and non-HTML className implementation
        function hasClass(el, className) {
            if (typeof el.classList == "object") {
                return el.classList.contains(className);
            } else {
                var classNameSupported = (typeof el.className == "string");
                var elClass = classNameSupported ? el.className : el.getAttribute("class");
                return classNameContainsClass(elClass, className);
            }
        }

        function addClass(el, className) {
            if (typeof el.classList == "object") {
                el.classList.add(className);
            } else {
                var classNameSupported = (typeof el.className == "string");
                var elClass = classNameSupported ? el.className : el.getAttribute("class");
                if (elClass) {
                    if (!classNameContainsClass(elClass, className)) {
                        elClass += " " + className;
                    }
                } else {
                    elClass = className;
                }
                if (classNameSupported) {
                    el.className = elClass;
                } else {
                    el.setAttribute("class", elClass);
                }
            }
        }

        var removeClass = (function() {
            function replacer(matched, whiteSpaceBefore, whiteSpaceAfter) {
                return (whiteSpaceBefore && whiteSpaceAfter) ? " " : "";
            }

            return function(el, className) {
                if (typeof el.classList == "object") {
                    el.classList.remove(className);
                } else {
                    var classNameSupported = (typeof el.className == "string");
                    var elClass = classNameSupported ? el.className : el.getAttribute("class");
                    elClass = elClass.replace(new RegExp("(^|\\s)" + className + "(\\s|$)"), replacer);
                    if (classNameSupported) {
                        el.className = elClass;
                    } else {
                        el.setAttribute("class", elClass);
                    }
                }
            };
        })();

        function getClass(el) {
            var classNameSupported = (typeof el.className == "string");
            return classNameSupported ? el.className : el.getAttribute("class");
        }

        function sortClassName(className) {
            return className && className.split(/\s+/).sort().join(" ");
        }

        function getSortedClassName(el) {
            return sortClassName( getClass(el) );
        }

        function haveSameClasses(el1, el2) {
            return getSortedClassName(el1) == getSortedClassName(el2);
        }

        function hasAllClasses(el, className) {
            var classes = className.split(/\s+/);
            for (var i = 0, len = classes.length; i < len; ++i) {
                if (!hasClass(el, trim(classes[i]))) {
                    return false;
                }
            }
            return true;
        }

        function canTextBeStyled(textNode) {
            var parent = textNode.parentNode;
            return (parent && parent.nodeType == 1 && !/^(textarea|style|script|select|iframe)$/i.test(parent.nodeName));
        }

        function movePosition(position, oldParent, oldIndex, newParent, newIndex) {
            var posNode = position.node, posOffset = position.offset;
            var newNode = posNode, newOffset = posOffset;

            if (posNode == newParent && posOffset > newIndex) {
                ++newOffset;
            }

            if (posNode == oldParent && (posOffset == oldIndex  || posOffset == oldIndex + 1)) {
                newNode = newParent;
                newOffset += newIndex - oldIndex;
            }

            if (posNode == oldParent && posOffset > oldIndex + 1) {
                --newOffset;
            }

            position.node = newNode;
            position.offset = newOffset;
        }

        function movePositionWhenRemovingNode(position, parentNode, index) {
            if (position.node == parentNode && position.offset > index) {
                --position.offset;
            }
        }

        function movePreservingPositions(node, newParent, newIndex, positionsToPreserve) {
            // For convenience, allow newIndex to be -1 to mean "insert at the end".
            if (newIndex == -1) {
                newIndex = newParent.childNodes.length;
            }

            var oldParent = node.parentNode;
            var oldIndex = dom.getNodeIndex(node);

            forEach(positionsToPreserve, function(position) {
                movePosition(position, oldParent, oldIndex, newParent, newIndex);
            });

            // Now actually move the node.
            if (newParent.childNodes.length == newIndex) {
                newParent.appendChild(node);
            } else {
                newParent.insertBefore(node, newParent.childNodes[newIndex]);
            }
        }

        function removePreservingPositions(node, positionsToPreserve) {

            var oldParent = node.parentNode;
            var oldIndex = dom.getNodeIndex(node);

            forEach(positionsToPreserve, function(position) {
                movePositionWhenRemovingNode(position, oldParent, oldIndex);
            });

            dom.removeNode(node);
        }

        function moveChildrenPreservingPositions(node, newParent, newIndex, removeNode, positionsToPreserve) {
            var child, children = [];
            while ( (child = node.firstChild) ) {
                movePreservingPositions(child, newParent, newIndex++, positionsToPreserve);
                children.push(child);
            }
            if (removeNode) {
                removePreservingPositions(node, positionsToPreserve);
            }
            return children;
        }

        function replaceWithOwnChildrenPreservingPositions(element, positionsToPreserve) {
            return moveChildrenPreservingPositions(element, element.parentNode, dom.getNodeIndex(element), true, positionsToPreserve);
        }

        function rangeSelectsAnyText(range, textNode) {
            var textNodeRange = range.cloneRange();
            textNodeRange.selectNodeContents(textNode);

            var intersectionRange = textNodeRange.intersection(range);
            var text = intersectionRange ? intersectionRange.toString() : "";

            return text != "";
        }

        function getEffectiveTextNodes(range) {
            var nodes = range.getNodes([3]);

            // Optimization as per issue 145

            // Remove non-intersecting text nodes from the start of the range
            var start = 0, node;
            while ( (node = nodes[start]) && !rangeSelectsAnyText(range, node) ) {
                ++start;
            }

            // Remove non-intersecting text nodes from the start of the range
            var end = nodes.length - 1;
            while ( (node = nodes[end]) && !rangeSelectsAnyText(range, node) ) {
                --end;
            }

            return nodes.slice(start, end + 1);
        }

        function elementsHaveSameNonClassAttributes(el1, el2) {
            if (el1.attributes.length != el2.attributes.length) return false;
            for (var i = 0, len = el1.attributes.length, attr1, attr2, name; i < len; ++i) {
                attr1 = el1.attributes[i];
                name = attr1.name;
                if (name != "class") {
                    attr2 = el2.attributes.getNamedItem(name);
                    if ( (attr1 === null) != (attr2 === null) ) return false;
                    if (attr1.specified != attr2.specified) return false;
                    if (attr1.specified && attr1.nodeValue !== attr2.nodeValue) return false;
                }
            }
            return true;
        }

        function elementHasNonClassAttributes(el, exceptions) {
            for (var i = 0, len = el.attributes.length, attrName; i < len; ++i) {
                attrName = el.attributes[i].name;
                if ( !(exceptions && contains(exceptions, attrName)) && el.attributes[i].specified && attrName != "class") {
                    return true;
                }
            }
            return false;
        }

        var getComputedStyleProperty = dom.getComputedStyleProperty;
        var isEditableElement = (function() {
            var testEl = document.createElement("div");
            return typeof testEl.isContentEditable == "boolean" ?
                function (node) {
                    return node && node.nodeType == 1 && node.isContentEditable;
                } :
                function (node) {
                    if (!node || node.nodeType != 1 || node.contentEditable == "false") {
                        return false;
                    }
                    return node.contentEditable == "true" || isEditableElement(node.parentNode);
                };
        })();

        function isEditingHost(node) {
            var parent;
            return node && node.nodeType == 1 &&
                (( (parent = node.parentNode) && parent.nodeType == 9 && parent.designMode == "on") ||
                (isEditableElement(node) && !isEditableElement(node.parentNode)));
        }

        function isEditable(node) {
            return (isEditableElement(node) || (node.nodeType != 1 && isEditableElement(node.parentNode))) && !isEditingHost(node);
        }

        var inlineDisplayRegex = /^inline(-block|-table)?$/i;

        function isNonInlineElement(node) {
            return node && node.nodeType == 1 && !inlineDisplayRegex.test(getComputedStyleProperty(node, "display"));
        }

        // White space characters as defined by HTML 4 (http://www.w3.org/TR/html401/struct/text.html)
        var htmlNonWhiteSpaceRegex = /[^\r\n\t\f \u200B]/;

        function isUnrenderedWhiteSpaceNode(node) {
            if (node.data.length == 0) {
                return true;
            }
            if (htmlNonWhiteSpaceRegex.test(node.data)) {
                return false;
            }
            var cssWhiteSpace = getComputedStyleProperty(node.parentNode, "whiteSpace");
            switch (cssWhiteSpace) {
                case "pre":
                case "pre-wrap":
                case "-moz-pre-wrap":
                    return false;
                case "pre-line":
                    if (/[\r\n]/.test(node.data)) {
                        return false;
                    }
            }

            // We now have a whitespace-only text node that may be rendered depending on its context. If it is adjacent to a
            // non-inline element, it will not be rendered. This seems to be a good enough definition.
            return isNonInlineElement(node.previousSibling) || isNonInlineElement(node.nextSibling);
        }

        function getRangeBoundaries(ranges) {
            var positions = [], i, range;
            for (i = 0; range = ranges[i++]; ) {
                positions.push(
                    new DomPosition(range.startContainer, range.startOffset),
                    new DomPosition(range.endContainer, range.endOffset)
                );
            }
            return positions;
        }

        function updateRangesFromBoundaries(ranges, positions) {
            for (var i = 0, range, start, end, len = ranges.length; i < len; ++i) {
                range = ranges[i];
                start = positions[i * 2];
                end = positions[i * 2 + 1];
                range.setStartAndEnd(start.node, start.offset, end.node, end.offset);
            }
        }

        function isSplitPoint(node, offset) {
            if (dom.isCharacterDataNode(node)) {
                if (offset == 0) {
                    return !!node.previousSibling;
                } else if (offset == node.length) {
                    return !!node.nextSibling;
                } else {
                    return true;
                }
            }

            return offset > 0 && offset < node.childNodes.length;
        }

        function splitNodeAt(node, descendantNode, descendantOffset, positionsToPreserve) {
            var newNode, parentNode;
            var splitAtStart = (descendantOffset == 0);

            if (dom.isAncestorOf(descendantNode, node)) {
                return node;
            }

            if (dom.isCharacterDataNode(descendantNode)) {
                var descendantIndex = dom.getNodeIndex(descendantNode);
                if (descendantOffset == 0) {
                    descendantOffset = descendantIndex;
                } else if (descendantOffset == descendantNode.length) {
                    descendantOffset = descendantIndex + 1;
                } else {
                    throw module.createError("splitNodeAt() should not be called with offset in the middle of a data node (" +
                        descendantOffset + " in " + descendantNode.data);
                }
                descendantNode = descendantNode.parentNode;
            }

            if (isSplitPoint(descendantNode, descendantOffset)) {
                // descendantNode is now guaranteed not to be a text or other character node
                newNode = descendantNode.cloneNode(false);
                parentNode = descendantNode.parentNode;
                if (newNode.id) {
                    newNode.removeAttribute("id");
                }
                var child, newChildIndex = 0;

                while ( (child = descendantNode.childNodes[descendantOffset]) ) {
                    movePreservingPositions(child, newNode, newChildIndex++, positionsToPreserve);
                }
                movePreservingPositions(newNode, parentNode, dom.getNodeIndex(descendantNode) + 1, positionsToPreserve);
                return (descendantNode == node) ? newNode : splitNodeAt(node, parentNode, dom.getNodeIndex(newNode), positionsToPreserve);
            } else if (node != descendantNode) {
                newNode = descendantNode.parentNode;

                // Work out a new split point in the parent node
                var newNodeIndex = dom.getNodeIndex(descendantNode);

                if (!splitAtStart) {
                    newNodeIndex++;
                }
                return splitNodeAt(node, newNode, newNodeIndex, positionsToPreserve);
            }
            return node;
        }

        function areElementsMergeable(el1, el2) {
            return el1.namespaceURI == el2.namespaceURI &&
                el1.tagName.toLowerCase() == el2.tagName.toLowerCase() &&
                haveSameClasses(el1, el2) &&
                elementsHaveSameNonClassAttributes(el1, el2) &&
                getComputedStyleProperty(el1, "display") == "inline" &&
                getComputedStyleProperty(el2, "display") == "inline";
        }

        function createAdjacentMergeableTextNodeGetter(forward) {
            var siblingPropName = forward ? "nextSibling" : "previousSibling";

            return function(textNode, checkParentElement) {
                var el = textNode.parentNode;
                var adjacentNode = textNode[siblingPropName];
                if (adjacentNode) {
                    // Can merge if the node's previous/next sibling is a text node
                    if (adjacentNode && adjacentNode.nodeType == 3) {
                        return adjacentNode;
                    }
                } else if (checkParentElement) {
                    // Compare text node parent element with its sibling
                    adjacentNode = el[siblingPropName];
                    if (adjacentNode && adjacentNode.nodeType == 1 && areElementsMergeable(el, adjacentNode)) {
                        var adjacentNodeChild = adjacentNode[forward ? "firstChild" : "lastChild"];
                        if (adjacentNodeChild && adjacentNodeChild.nodeType == 3) {
                            return adjacentNodeChild;
                        }
                    }
                }
                return null;
            };
        }

        var getPreviousMergeableTextNode = createAdjacentMergeableTextNodeGetter(false),
            getNextMergeableTextNode = createAdjacentMergeableTextNodeGetter(true);

    
        function Merge(firstNode) {
            this.isElementMerge = (firstNode.nodeType == 1);
            this.textNodes = [];
            var firstTextNode = this.isElementMerge ? firstNode.lastChild : firstNode;
            if (firstTextNode) {
                this.textNodes[0] = firstTextNode;
            }
        }

        Merge.prototype = {
            doMerge: function(positionsToPreserve) {
                var textNodes = this.textNodes;
                var firstTextNode = textNodes[0];
                if (textNodes.length > 1) {
                    var firstTextNodeIndex = dom.getNodeIndex(firstTextNode);
                    var textParts = [], combinedTextLength = 0, textNode, parent;
                    forEach(textNodes, function(textNode, i) {
                        parent = textNode.parentNode;
                        if (i > 0) {
                            parent.removeChild(textNode);
                            if (!parent.hasChildNodes()) {
                                dom.removeNode(parent);
                            }
                            if (positionsToPreserve) {
                                forEach(positionsToPreserve, function(position) {
                                    // Handle case where position is inside the text node being merged into a preceding node
                                    if (position.node == textNode) {
                                        position.node = firstTextNode;
                                        position.offset += combinedTextLength;
                                    }
                                    // Handle case where both text nodes precede the position within the same parent node
                                    if (position.node == parent && position.offset > firstTextNodeIndex) {
                                        --position.offset;
                                        if (position.offset == firstTextNodeIndex + 1 && i < len - 1) {
                                            position.node = firstTextNode;
                                            position.offset = combinedTextLength;
                                        }
                                    }
                                });
                            }
                        }
                        textParts[i] = textNode.data;
                        combinedTextLength += textNode.data.length;
                    });
                    firstTextNode.data = textParts.join("");
                }
                return firstTextNode.data;
            },

            getLength: function() {
                var i = this.textNodes.length, len = 0;
                while (i--) {
                    len += this.textNodes[i].length;
                }
                return len;
            },

            toString: function() {
                var textParts = [];
                forEach(this.textNodes, function(textNode, i) {
                    textParts[i] = "'" + textNode.data + "'";
                });
                return "[Merge(" + textParts.join(",") + ")]";
            }
        };

        var optionProperties = ["elementTagName", "ignoreWhiteSpace", "applyToEditableOnly", "useExistingElements",
            "removeEmptyElements", "onElementCreate"];

        // TODO: Populate this with every attribute name that corresponds to a property with a different name. Really??
        var attrNamesForProperties = {};

        function ClassApplier(className, options, tagNames) {
            var normalize, i, len, propName, applier = this;
            applier.cssClass = applier.className = className; // cssClass property is for backward compatibility

            var elementPropertiesFromOptions = null, elementAttributes = {};

            // Initialize from options object
            if (typeof options == "object" && options !== null) {
                if (typeof options.elementTagName !== "undefined") {
                    options.elementTagName = options.elementTagName.toLowerCase();
                }
                tagNames = options.tagNames;
                elementPropertiesFromOptions = options.elementProperties;
                elementAttributes = options.elementAttributes;

                for (i = 0; propName = optionProperties[i++]; ) {
                    if (options.hasOwnProperty(propName)) {
                        applier[propName] = options[propName];
                    }
                }
                normalize = options.normalize;
            } else {
                normalize = options;
            }

            // Backward compatibility: the second parameter can also be a Boolean indicating to normalize after unapplying
            applier.normalize = (typeof normalize == "undefined") ? true : normalize;

            // Initialize element properties and attribute exceptions
            applier.attrExceptions = [];
            var el = document.createElement(applier.elementTagName);
            applier.elementProperties = applier.copyPropertiesToElement(elementPropertiesFromOptions, el, true);
            each(elementAttributes, function(attrName, attrValue) {
                applier.attrExceptions.push(attrName);
                // Ensure each attribute value is a string
                elementAttributes[attrName] = "" + attrValue;
            });
            applier.elementAttributes = elementAttributes;

            applier.elementSortedClassName = applier.elementProperties.hasOwnProperty("className") ?
                sortClassName(applier.elementProperties.className + " " + className) : className;

            // Initialize tag names
            applier.applyToAnyTagName = false;
            var type = typeof tagNames;
            if (type == "string") {
                if (tagNames == "*") {
                    applier.applyToAnyTagName = true;
                } else {
                    applier.tagNames = trim(tagNames.toLowerCase()).split(/\s*,\s*/);
                }
            } else if (type == "object" && typeof tagNames.length == "number") {
                applier.tagNames = [];
                for (i = 0, len = tagNames.length; i < len; ++i) {
                    if (tagNames[i] == "*") {
                        applier.applyToAnyTagName = true;
                    } else {
                        applier.tagNames.push(tagNames[i].toLowerCase());
                    }
                }
            } else {
                applier.tagNames = [applier.elementTagName];
            }
        }

        ClassApplier.prototype = {
            elementTagName: defaultTagName,
            elementProperties: {},
            elementAttributes: {},
            ignoreWhiteSpace: true,
            applyToEditableOnly: false,
            useExistingElements: true,
            removeEmptyElements: true,
            onElementCreate: null,

            copyPropertiesToElement: function(props, el, createCopy) {
                var s, elStyle, elProps = {}, elPropsStyle, propValue, elPropValue, attrName;

                for (var p in props) {
                    if (props.hasOwnProperty(p)) {
                        propValue = props[p];
                        elPropValue = el[p];

                        // Special case for class. The copied properties object has the applier's class as well as its own
                        // to simplify checks when removing styling elements
                        if (p == "className") {
                            addClass(el, propValue);
                            addClass(el, this.className);
                            el[p] = sortClassName(el[p]);
                            if (createCopy) {
                                elProps[p] = propValue;
                            }
                        }

                        // Special case for style
                        else if (p == "style") {
                            elStyle = elPropValue;
                            if (createCopy) {
                                elProps[p] = elPropsStyle = {};
                            }
                            for (s in props[p]) {
                                if (props[p].hasOwnProperty(s)) {
                                    elStyle[s] = propValue[s];
                                    if (createCopy) {
                                        elPropsStyle[s] = elStyle[s];
                                    }
                                }
                            }
                            this.attrExceptions.push(p);
                        } else {
                            el[p] = propValue;
                            // Copy the property back from the dummy element so that later comparisons to check whether
                            // elements may be removed are checking against the right value. For example, the href property
                            // of an element returns a fully qualified URL even if it was previously assigned a relative
                            // URL.
                            if (createCopy) {
                                elProps[p] = el[p];

                                // Not all properties map to identically-named attributes
                                attrName = attrNamesForProperties.hasOwnProperty(p) ? attrNamesForProperties[p] : p;
                                this.attrExceptions.push(attrName);
                            }
                        }
                    }
                }

                return createCopy ? elProps : "";
            },

            copyAttributesToElement: function(attrs, el) {
                for (var attrName in attrs) {
                    if (attrs.hasOwnProperty(attrName) && !/^class(?:Name)?$/i.test(attrName)) {
                        el.setAttribute(attrName, attrs[attrName]);
                    }
                }
            },

            appliesToElement: function(el) {
                return contains(this.tagNames, el.tagName.toLowerCase());
            },

            getEmptyElements: function(range) {
                var applier = this;
                return range.getNodes([1], function(el) {
                    return applier.appliesToElement(el) && !el.hasChildNodes();
                });
            },

            hasClass: function(node) {
                return node.nodeType == 1 &&
                    (this.applyToAnyTagName || this.appliesToElement(node)) &&
                    hasClass(node, this.className);
            },

            getSelfOrAncestorWithClass: function(node) {
                while (node) {
                    if (this.hasClass(node)) {
                        return node;
                    }
                    node = node.parentNode;
                }
                return null;
            },

            isModifiable: function(node) {
                return !this.applyToEditableOnly || isEditable(node);
            },

            // White space adjacent to an unwrappable node can be ignored for wrapping
            isIgnorableWhiteSpaceNode: function(node) {
                return this.ignoreWhiteSpace && node && node.nodeType == 3 && isUnrenderedWhiteSpaceNode(node);
            },

            // Normalizes nodes after applying a class to a Range.
            postApply: function(textNodes, range, positionsToPreserve, isUndo) {
                var firstNode = textNodes[0], lastNode = textNodes[textNodes.length - 1];

                var merges = [], currentMerge;

                var rangeStartNode = firstNode, rangeEndNode = lastNode;
                var rangeStartOffset = 0, rangeEndOffset = lastNode.length;

                var textNode, precedingTextNode;

                // Check for every required merge and create a Merge object for each
                forEach(textNodes, function(textNode) {
                    precedingTextNode = getPreviousMergeableTextNode(textNode, !isUndo);
                    if (precedingTextNode) {
                        if (!currentMerge) {
                            currentMerge = new Merge(precedingTextNode);
                            merges.push(currentMerge);
                        }
                        currentMerge.textNodes.push(textNode);
                        if (textNode === firstNode) {
                            rangeStartNode = currentMerge.textNodes[0];
                            rangeStartOffset = rangeStartNode.length;
                        }
                        if (textNode === lastNode) {
                            rangeEndNode = currentMerge.textNodes[0];
                            rangeEndOffset = currentMerge.getLength();
                        }
                    } else {
                        currentMerge = null;
                    }
                });

                // Test whether the first node after the range needs merging
                var nextTextNode = getNextMergeableTextNode(lastNode, !isUndo);

                if (nextTextNode) {
                    if (!currentMerge) {
                        currentMerge = new Merge(lastNode);
                        merges.push(currentMerge);
                    }
                    currentMerge.textNodes.push(nextTextNode);
                }

                // Apply the merges
                if (merges.length) {
                    for (i = 0, len = merges.length; i < len; ++i) {
                        merges[i].doMerge(positionsToPreserve);
                    }

                    // Set the range boundaries
                    range.setStartAndEnd(rangeStartNode, rangeStartOffset, rangeEndNode, rangeEndOffset);
                }
            },

            createContainer: function(parentNode) {
                var doc = dom.getDocument(parentNode);
                var namespace;
                var el = createElementNSSupported && !dom.isHtmlNamespace(parentNode) && (namespace = parentNode.namespaceURI) ?
                    doc.createElementNS(parentNode.namespaceURI, this.elementTagName) :
                    doc.createElement(this.elementTagName);

                this.copyPropertiesToElement(this.elementProperties, el, false);
                this.copyAttributesToElement(this.elementAttributes, el);
                addClass(el, this.className);
                if (this.onElementCreate) {
                    this.onElementCreate(el, this);
                }
                return el;
            },

            elementHasProperties: function(el, props) {
                var applier = this;
                return each(props, function(p, propValue) {
                    if (p == "className") {
                        // For checking whether we should reuse an existing element, we just want to check that the element
                        // has all the classes specified in the className property. When deciding whether the element is
                        // removable when unapplying a class, there is separate special handling to check whether the
                        // element has extra classes so the same simple check will do.
                        return hasAllClasses(el, propValue);
                    } else if (typeof propValue == "object") {
                        if (!applier.elementHasProperties(el[p], propValue)) {
                            return false;
                        }
                    } else if (el[p] !== propValue) {
                        return false;
                    }
                });
            },

            elementHasAttributes: function(el, attrs) {
                return each(attrs, function(name, value) {
                    if (el.getAttribute(name) !== value) {
                        return false;
                    }
                });
            },

            applyToTextNode: function(textNode, positionsToPreserve) {

                // Check whether the text node can be styled. Text within a <style> or <script> element, for example,
                // should not be styled. See issue 283.
                if (canTextBeStyled(textNode)) {
                    var parent = textNode.parentNode;
                    if (parent.childNodes.length == 1 &&
                        this.useExistingElements &&
                        this.appliesToElement(parent) &&
                        this.elementHasProperties(parent, this.elementProperties) &&
                        this.elementHasAttributes(parent, this.elementAttributes)) {

                        addClass(parent, this.className);
                    } else {
                        var textNodeParent = textNode.parentNode;
                        var el = this.createContainer(textNodeParent);
                        textNodeParent.insertBefore(el, textNode);
                        el.appendChild(textNode);
                    }
                }

            },

            isRemovable: function(el) {
                return el.tagName.toLowerCase() == this.elementTagName &&
                    getSortedClassName(el) == this.elementSortedClassName &&
                    this.elementHasProperties(el, this.elementProperties) &&
                    !elementHasNonClassAttributes(el, this.attrExceptions) &&
                    this.elementHasAttributes(el, this.elementAttributes) &&
                    this.isModifiable(el);
            },

            isEmptyContainer: function(el) {
                var childNodeCount = el.childNodes.length;
                return el.nodeType == 1 &&
                    this.isRemovable(el) &&
                    (childNodeCount == 0 || (childNodeCount == 1 && this.isEmptyContainer(el.firstChild)));
            },

            removeEmptyContainers: function(range) {
                var applier = this;
                var nodesToRemove = range.getNodes([1], function(el) {
                    return applier.isEmptyContainer(el);
                });

                var rangesToPreserve = [range];
                var positionsToPreserve = getRangeBoundaries(rangesToPreserve);

                forEach(nodesToRemove, function(node) {
                    removePreservingPositions(node, positionsToPreserve);
                });

                // Update the range from the preserved boundary positions
                updateRangesFromBoundaries(rangesToPreserve, positionsToPreserve);
            },

            undoToTextNode: function(textNode, range, ancestorWithClass, positionsToPreserve) {
                if (!range.containsNode(ancestorWithClass)) {
                    // Split out the portion of the ancestor from which we can remove the class
                    //var parent = ancestorWithClass.parentNode, index = dom.getNodeIndex(ancestorWithClass);
                    var ancestorRange = range.cloneRange();
                    ancestorRange.selectNode(ancestorWithClass);
                    if (ancestorRange.isPointInRange(range.endContainer, range.endOffset)) {
                        splitNodeAt(ancestorWithClass, range.endContainer, range.endOffset, positionsToPreserve);
                        range.setEndAfter(ancestorWithClass);
                    }
                    if (ancestorRange.isPointInRange(range.startContainer, range.startOffset)) {
                        ancestorWithClass = splitNodeAt(ancestorWithClass, range.startContainer, range.startOffset, positionsToPreserve);
                    }
                }

                if (this.isRemovable(ancestorWithClass)) {
                    replaceWithOwnChildrenPreservingPositions(ancestorWithClass, positionsToPreserve);
                } else {
                    removeClass(ancestorWithClass, this.className);
                }
            },

            splitAncestorWithClass: function(container, offset, positionsToPreserve) {
                var ancestorWithClass = this.getSelfOrAncestorWithClass(container);
                if (ancestorWithClass) {
                    splitNodeAt(ancestorWithClass, container, offset, positionsToPreserve);
                }
            },

            undoToAncestor: function(ancestorWithClass, positionsToPreserve) {
                if (this.isRemovable(ancestorWithClass)) {
                    replaceWithOwnChildrenPreservingPositions(ancestorWithClass, positionsToPreserve);
                } else {
                    removeClass(ancestorWithClass, this.className);
                }
            },

            applyToRange: function(range, rangesToPreserve) {
                var applier = this;
                rangesToPreserve = rangesToPreserve || [];

                // Create an array of range boundaries to preserve
                var positionsToPreserve = getRangeBoundaries(rangesToPreserve || []);

                range.splitBoundariesPreservingPositions(positionsToPreserve);

                // Tidy up the DOM by removing empty containers
                if (applier.removeEmptyElements) {
                    applier.removeEmptyContainers(range);
                }

                var textNodes = getEffectiveTextNodes(range);

                if (textNodes.length) {
                    forEach(textNodes, function(textNode) {
                        if (!applier.isIgnorableWhiteSpaceNode(textNode) && !applier.getSelfOrAncestorWithClass(textNode) &&
                                applier.isModifiable(textNode)) {
                            applier.applyToTextNode(textNode, positionsToPreserve);
                        }
                    });
                    var lastTextNode = textNodes[textNodes.length - 1];
                    range.setStartAndEnd(textNodes[0], 0, lastTextNode, lastTextNode.length);
                    if (applier.normalize) {
                        applier.postApply(textNodes, range, positionsToPreserve, false);
                    }

                    // Update the ranges from the preserved boundary positions
                    updateRangesFromBoundaries(rangesToPreserve, positionsToPreserve);
                }

                // Apply classes to any appropriate empty elements
                var emptyElements = applier.getEmptyElements(range);

                forEach(emptyElements, function(el) {
                    addClass(el, applier.className);
                });
            },

            applyToRanges: function(ranges) {

                var i = ranges.length;
                while (i--) {
                    this.applyToRange(ranges[i], ranges);
                }


                return ranges;
            },

            applyToSelection: function(win) {
                var sel = api.getSelection(win);
                sel.setRanges( this.applyToRanges(sel.getAllRanges()) );
            },

            undoToRange: function(range, rangesToPreserve) {
                var applier = this;
                // Create an array of range boundaries to preserve
                rangesToPreserve = rangesToPreserve || [];
                var positionsToPreserve = getRangeBoundaries(rangesToPreserve);


                range.splitBoundariesPreservingPositions(positionsToPreserve);

                // Tidy up the DOM by removing empty containers
                if (applier.removeEmptyElements) {
                    applier.removeEmptyContainers(range, positionsToPreserve);
                }

                var textNodes = getEffectiveTextNodes(range);
                var textNode, ancestorWithClass;
                var lastTextNode = textNodes[textNodes.length - 1];

                if (textNodes.length) {
                    applier.splitAncestorWithClass(range.endContainer, range.endOffset, positionsToPreserve);
                    applier.splitAncestorWithClass(range.startContainer, range.startOffset, positionsToPreserve);
                    for (var i = 0, len = textNodes.length; i < len; ++i) {
                        textNode = textNodes[i];
                        ancestorWithClass = applier.getSelfOrAncestorWithClass(textNode);
                        if (ancestorWithClass && applier.isModifiable(textNode)) {
                            applier.undoToAncestor(ancestorWithClass, positionsToPreserve);
                        }
                    }
                    // Ensure the range is still valid
                    range.setStartAndEnd(textNodes[0], 0, lastTextNode, lastTextNode.length);


                    if (applier.normalize) {
                        applier.postApply(textNodes, range, positionsToPreserve, true);
                    }

                    // Update the ranges from the preserved boundary positions
                    updateRangesFromBoundaries(rangesToPreserve, positionsToPreserve);
                }

                // Remove class from any appropriate empty elements
                var emptyElements = applier.getEmptyElements(range);

                forEach(emptyElements, function(el) {
                    removeClass(el, applier.className);
                });
            },

            undoToRanges: function(ranges) {
                // Get ranges returned in document order
                var i = ranges.length;

                while (i--) {
                    this.undoToRange(ranges[i], ranges);
                }

                return ranges;
            },

            undoToSelection: function(win) {
                var sel = api.getSelection(win);
                var ranges = api.getSelection(win).getAllRanges();
                this.undoToRanges(ranges);
                sel.setRanges(ranges);
            },

            isAppliedToRange: function(range) {
                if (range.collapsed || range.toString() == "") {
                    return !!this.getSelfOrAncestorWithClass(range.commonAncestorContainer);
                } else {
                    var textNodes = range.getNodes( [3] );
                    if (textNodes.length)
                    for (var i = 0, textNode; textNode = textNodes[i++]; ) {
                        if (!this.isIgnorableWhiteSpaceNode(textNode) && rangeSelectsAnyText(range, textNode) &&
                                this.isModifiable(textNode) && !this.getSelfOrAncestorWithClass(textNode)) {
                            return false;
                        }
                    }
                    return true;
                }
            },

            isAppliedToRanges: function(ranges) {
                var i = ranges.length;
                if (i == 0) {
                    return false;
                }
                while (i--) {
                    if (!this.isAppliedToRange(ranges[i])) {
                        return false;
                    }
                }
                return true;
            },

            isAppliedToSelection: function(win) {
                var sel = api.getSelection(win);
                return this.isAppliedToRanges(sel.getAllRanges());
            },

            toggleRange: function(range) {
                if (this.isAppliedToRange(range)) {
                    this.undoToRange(range);
                } else {
                    this.applyToRange(range);
                }
            },

            toggleSelection: function(win) {
                if (this.isAppliedToSelection(win)) {
                    this.undoToSelection(win);
                } else {
                    this.applyToSelection(win);
                }
            },

            getElementsWithClassIntersectingRange: function(range) {
                var elements = [];
                var applier = this;
                range.getNodes([3], function(textNode) {
                    var el = applier.getSelfOrAncestorWithClass(textNode);
                    if (el && !contains(elements, el)) {
                        elements.push(el);
                    }
                });
                return elements;
            },

            detach: function() {}
        };

        function createClassApplier(className, options, tagNames) {
            return new ClassApplier(className, options, tagNames);
        }

        ClassApplier.util = {
            hasClass: hasClass,
            addClass: addClass,
            removeClass: removeClass,
            getClass: getClass,
            hasSameClasses: haveSameClasses,
            hasAllClasses: hasAllClasses,
            replaceWithOwnChildren: replaceWithOwnChildrenPreservingPositions,
            elementsHaveSameNonClassAttributes: elementsHaveSameNonClassAttributes,
            elementHasNonClassAttributes: elementHasNonClassAttributes,
            splitNodeAt: splitNodeAt,
            isEditableElement: isEditableElement,
            isEditingHost: isEditingHost,
            isEditable: isEditable
        };

        api.CssClassApplier = api.ClassApplier = ClassApplier;
        api.createClassApplier = createClassApplier;
        util.createAliasForDeprecatedMethod(api, "createCssClassApplier", "createClassApplier", module);
    });
    
    return rangy;
}, this);

/*
 * Medium.js
 *
 * Copyright 2013-2014, Jacob Kelley - http://jakiestfu.com/
 * Released under the MIT Licence
 * http://opensource.org/licenses/MIT
 *
 * Github:  http://github.com/jakiestfu/Medium.js/
 * Version: master
 */

(function (w, d) {

	'use strict';

	var Medium = (function () {

		var //two modes, wild (native) or domesticated (rangy + undo.js)
			rangy = w['rangy'] || null,
			undo = w['Undo'] || null,
			wild = (!rangy || !undo),
			domesticated = (!wild),
			key = w.Key = {
				'backspace': 8,
				'tab': 9,
				'enter': 13,
				'shift': 16,
				'ctrl': 17,
				'alt': 18,
				'pause': 19,
				'capsLock': 20,
				'escape': 27,
				'pageUp': 33,
				'pageDown': 34,
				'end': 35,
				'home': 36,
				'leftArrow': 37,
				'upArrow': 38,
				'rightArrow': 39,
				'downArrow': 40,
				'insert': 45,
				'delete': 46,
				'0': 48,
				'1': 49,
				'2': 50,
				'3': 51,
				'4': 52,
				'5': 53,
				'6': 54,
				'7': 55,
				'8': 56,
				'9': 57,
				'a': 65,
				'b': 66,
				'c': 67,
				'd': 68,
				'e': 69,
				'f': 70,
				'g': 71,
				'h': 72,
				'i': 73,
				'j': 74,
				'k': 75,
				'l': 76,
				'm': 77,
				'n': 78,
				'o': 79,
				'p': 80,
				'q': 81,
				'r': 82,
				's': 83,
				't': 84,
				'u': 85,
				'v': 86,
				'w': 87,
				'x': 88,
				'y': 89,
				'z': 90,
				'leftWindow': 91,
				'rightWindowKey': 92,
				'select': 93,
				'numpad0': 96,
				'numpad1': 97,
				'numpad2': 98,
				'numpad3': 99,
				'numpad4': 100,
				'numpad5': 101,
				'numpad6': 102,
				'numpad7': 103,
				'numpad8': 104,
				'numpad9': 105,
				'multiply': 106,
				'add': 107,
				'subtract': 109,
				'decimalPoint': 110,
				'divide': 111,
				'f1': 112,
				'f2': 113,
				'f3': 114,
				'f4': 115,
				'f5': 116,
				'f6': 117,
				'f7': 118,
				'f8': 119,
				'f9': 120,
				'f10': 121,
				'f11': 122,
				'f12': 123,
				'numLock': 144,
				'scrollLock': 145,
				'semiColon': 186,
				'equalSign': 187,
				'comma': 188,
				'dash': 189,
				'period': 190,
				'forwardSlash': 191,
				'graveAccent': 192,
				'openBracket': 219,
				'backSlash': 220,
				'closeBraket': 221,
				'singleQuote': 222
			},

			/**
			 * Medium.js - Taking control of content editable
			 * @constructor
			 * @param {Object} [userSettings] user options
			 */
			Medium = function (userSettings) {
				var medium = this,
					action = new Medium.Action(),
					cache = new Medium.Cache(),
					cursor = new Medium.Cursor(),
					selection = new Medium.Selection(),
					intercept = {
						focus: function (e) {
							e = e || w.event;
							Medium.activeElement = el;
							medium.placeholders();
						},
						blur: function (e) {
							e = e || w.event;
							if (Medium.activeElement === el) {
								Medium.activeElement = null;
							}

							medium.placeholders();
						},
						down: function (e) {
							e = e || w.event;

							var keepEvent = true;

							//in Chrome it sends out this event before every regular event, not sure why
							if (e.keyCode === 229) return;

							utils.isCommand(settings, e, function () {
								cache.cmd = true;
							}, function () {
								cache.cmd = false;
							});

							utils.isShift(e, function () {
								cache.shift = true;
							}, function () {
								cache.shift = false;
							});

							utils.isModifier(settings, e, function (cmd) {
								if (cache.cmd) {

									if (( (settings.mode === Medium.inlineMode) || (settings.mode === Medium.partialMode) ) && cmd !== "paste") {
										utils.preventDefaultEvent(e);
										return;
									}

									var cmdType = typeof cmd;
									var fn = null;
									if (cmdType === "function") {
										fn = cmd;
									} else {
										fn = intercept.command[cmd];
									}

									keepEvent = fn.call(medium, e);

									if (keepEvent === false) {
										utils.preventDefaultEvent(e);
										utils.stopPropagation(e);
									}
								}
							});

							if (settings.maxLength !== -1) {
								var len = utils.text().length,
									hasSelection = false,
									selection = w.getSelection();

								if (selection) {
									hasSelection = !selection.isCollapsed;
								}

								if (len >= settings.maxLength && !utils.isSpecial(e) && !utils.isNavigational(e) && !hasSelection) {
									settings.maxLengthReached(settings.element)
									return utils.preventDefaultEvent(e);
								}
							}

							switch (e.keyCode) {
								case key['enter']:
									intercept.enterKey(e);
									break;
								case key['backspace']:
								case key['delete']:
									intercept.backspaceOrDeleteKey(e);
									break;
							}

							return keepEvent;
						},
						up: function (e) {
							e = e || w.event;
							utils.isCommand(settings, e, function () {
								cache.cmd = false;
							}, function () {
								cache.cmd = true;
							});
							medium.clean();
							medium.placeholders();

							//here we have a key context, so if you need to create your own object within a specific context it is doable
							var keyContext;
							if (
								settings.keyContext !== null
									&& ( keyContext = settings.keyContext[e.keyCode] )
								) {
								var el = cursor.parent();

								if (el) {
									keyContext.call(medium, e, el);
								}
							}

							action.preserveElementFocus();
						},
						command: {
							bold: function (e) {
								utils.preventDefaultEvent(e);
								(new Medium.Element(medium, 'bold'))
									.setClean(false)
									.invoke(settings.beforeInvokeElement);
							},
							underline: function (e) {
								utils.preventDefaultEvent(e);
								(new Medium.Element(medium, 'underline'))
									.setClean(false)
									.invoke(settings.beforeInvokeElement);
							},
							italicize: function (e) {
								utils.preventDefaultEvent(e);
								(new Medium.Element(medium, 'italic'))
									.setClean(false)
									.invoke(settings.beforeInvokeElement);
							},
							quote: function (e) {
							},
							paste: function (e) {
								medium.makeUndoable();
								if (settings.pasteAsText) {
									var sel = utils.selection.saveSelection();
									utils.pasteHook(function (text) {
										utils.selection.restoreSelection(sel);

										text = text.replace(/\n/g, '<br>');

										(new Medium.Html(medium, text))
											.setClean(false)
											.insert(settings.beforeInsertHtml, true);

										medium.clean();
										medium.placeholders();
									});
								} else {
									medium.clean();
									medium.placeholders();
								}
							}
						},
						enterKey: function (e) {
							if( settings.mode === Medium.inlineMode || settings.mode === Medium.inlineRichMode ){
								return utils.preventDefaultEvent(e);
							}

							if (cache.shift) {
								if (settings.tags['break']) {
									utils.preventDefaultEvent(e);
									medium.addTag(settings.tags['break'], true);
									return false;
								}

							} else {

								var focusedElement = utils.atCaret(medium) || {},
									children = el.children,
									lastChild = focusedElement === el.lastChild ? el.lastChild : null,
									makeHR,
									secondToLast,
									paragraph;

								if (
									lastChild
										&& lastChild !== el.firstChild
										&& settings.autoHR
										&& settings.mode !== 'partial'
										&& settings.tags.horizontalRule
									) {

									utils.preventDefaultEvent(e);

									makeHR =
										utils.text(lastChild) === ""
											&& lastChild.nodeName.toLowerCase() === settings.tags.paragraph;

									if (makeHR && children.length >= 2) {
										secondToLast = children[ children.length - 2 ];

										if (secondToLast.nodeName.toLowerCase() === settings.tags.horizontalRule) {
											makeHR = false;
										}
									}

									if (makeHR) {
										medium.addTag(settings.tags.horizontalRule, false, true, focusedElement);
										focusedElement = focusedElement.nextSibling;
									}

									if ((paragraph = medium.addTag(settings.tags.paragraph, true, null, focusedElement)) !== null) {
										paragraph.innerHTML = '';
										cursor.set(medium, 0, paragraph);
									}
								}
							}

							return true;
						},
						backspaceOrDeleteKey: function (e) {
							if (settings.onBackspaceOrDelete !== undefined) {
								var result = settings.onBackspaceOrDelete.call(medium, e, el);

								if (result) {
									return;
								}
							}

							if (el.lastChild === null) return;

							var lastChild = el.lastChild,
								beforeLastChild = lastChild.previousSibling;

							if (
								lastChild
									&& settings.tags.horizontalRule
									&& lastChild.nodeName.toLocaleLowerCase() === settings.tags.horizontalRule
								) {
								el.removeChild(lastChild);
							} else if (
								lastChild
									&& beforeLastChild
									&& utils.text(lastChild).length < 1

									&& beforeLastChild.nodeName.toLowerCase() === settings.tags.horizontalRule
									&& lastChild.nodeName.toLowerCase() === settings.tags.paragraph
								) {
								el.removeChild(lastChild);
								el.removeChild(beforeLastChild);
							}
						}
					},
					defaultSettings = {
						element: null,
						modifier: 'auto',
						placeholder: "",
						autofocus: false,
						autoHR: true,
						mode: Medium.richMode,
						maxLength: -1,
						modifiers: {
							'b': 'bold',
							'i': 'italicize',
							'u': 'underline',
							'v': 'paste'
						},
						tags: {
							'break': 'br',
							'horizontalRule': 'hr',
							'paragraph': 'p',
							'outerLevel': ['pre', 'blockquote', 'figure'],
							'innerLevel': ['a', 'b', 'u', 'i', 'img', 'strong']
						},
						cssClasses: {
							editor: 'Medium',
							pasteHook: 'Medium-paste-hook',
							placeholder: 'Medium-placeholder',
							clear: 'Medium-clear'
						},
						attributes: {
							remove: ['style', 'class']
						},
						pasteAsText: true,
						beforeInvokeElement: function () {
							//this = Medium.Element
						},
						beforeInsertHtml: function () {
							//this = Medium.Html
						},
						maxLengthReached: function (element) {
							//element
						},
						beforeAddTag: function (tag, shouldFocus, isEditable, afterElement) {
						},
						keyContext: null,
						pasteEventHandler: function(e) {
							e = e || w.event;
							medium.makeUndoable();
							var length = medium.value().length,
								totalLength;

							if (settings.pasteAsText) {
								utils.preventDefaultEvent(e);
								var
									sel = utils.selection.saveSelection(),
									text = prompt(Medium.Messages.pastHere) || '';

								if (text.length > 0) {
									el.focus();
									Medium.activeElement = el;
									utils.selection.restoreSelection(sel);

									//encode the text first
									text = utils.encodeHtml(text);

									//cut down it's length
									totalLength = text.length + length;
									if (settings.maxLength > 0 && totalLength > settings.maxLength) {
										text = text.substring(0, settings.maxLength - length);
									}

									if (settings.mode !== Medium.inlineMode) {
										text = text.replace(/\n/g, '<br>');
									}

									(new Medium.Html(medium, text))
										.setClean(false)
										.insert(settings.beforeInsertHtml, true);

									medium.clean();
									medium.placeholders();

									return false;
								}
							} else {
								setTimeout(function() {
									medium.clean();
									medium.placeholders();
								}, 20);
							}
						},
						drag: false
					},
					settings = utils.deepExtend(defaultSettings, userSettings),
					el,
					newVal,
					i,
					bridge = {},
					drag;

				for (i in defaultSettings) if (defaultSettings.hasOwnProperty(i)) {
					// Override defaults with data-attributes
					if (
						typeof defaultSettings[i] !== 'object'
							&& defaultSettings.hasOwnProperty(i)
							&& settings.element.getAttribute('data-medium-' + key)
						) {
						newVal = settings.element.getAttribute('data-medium-' + key);

						if (newVal.toLowerCase() === "false" || newVal.toLowerCase() === "true") {
							newVal = newVal.toLowerCase() === "true";
						}
						settings[i] = newVal;
					}
				}

				if (settings.modifiers) {
					for (i in settings.modifiers) {
						if (typeof(key[i]) !== 'undefined') {
							settings.modifiers[key[i]] = settings.modifiers[i];
						}
					}
				}

				if (settings.keyContext) {
					for (i in settings.keyContext) {
						if (typeof(key[i]) !== 'undefined') {
							settings.keyContext[key[i]] = settings.keyContext[i];
						}
					}
				}

				// Extend Settings
				el = settings.element;

				// Editable
				el.contentEditable = true;
				el.className
					+= (' ' + settings.cssClasses.editor)
					+ (' ' + settings.cssClasses.editor + '-' + settings.mode);

				settings.tags = (settings.tags || {});
				if (settings.tags.outerLevel) {
					settings.tags.outerLevel = settings.tags.outerLevel.concat([settings.tags.paragraph, settings.tags.horizontalRule]);
				}

				this.settings = settings;
				this.element = el;
				this.intercept = intercept;

				this.action = action;
				this.cache = cache;
				this.cursor = cursor;
				this.utils = utils;
				this.selection = selection;

				bridge.element = el;
				bridge.medium = this;
				bridge.settings = settings;

				bridge.action = action;
				bridge.cache = cache;
				bridge.cursor = cursor;
				bridge.intercept = intercept;
				bridge.utils = utils;
				bridge.selection = selection;

				action.setBridge(bridge);
				cache.setBridge(bridge);
				cursor.setBridge(bridge);
				selection.setBridge(bridge);

				// Initialize editor
				medium.clean();
				medium.placeholders();
				action.preserveElementFocus();

				// Capture Events
				action.listen();

				if (wild) {
					this.makeUndoable = function () {
					};
				} else {
					this.dirty = false;
					this.undoable = new Medium.Undoable(this);
					this.undo = this.undoable.undo;
					this.redo = this.undoable.redo;
					this.makeUndoable = this.undoable.makeUndoable;
				}

				if (settings.drag) {
					drag = medium.drag = new Medium.Drag(medium);

					utils.addEvent(el, 'mousemove', function(e) {
						e = e || w.event;
						var target = e.target || {};

						if (target.getAttribute('contenteditable') === 'false') {
							drag.show(target);
						}
					});
				}

				el.medium = this;

				// Set as initialized
				cache.initialized = true;
			},
			utils;

		Medium.prototype = {
			placeholders: function () {
				//in IE8, just gracefully degrade to no placeholders
				if (!w.getComputedStyle) return;

				var that = this,
					s = this.settings,
					placeholder = this.placeholder || (this.placeholder = d.createElement('div')),
					el = this.element,
					style = placeholder.style,
					elStyle = w.getComputedStyle(el, null),
					qStyle = function (prop) {
						return elStyle.getPropertyValue(prop)
					},
					text = utils.text(el),
					cursor = this.cursor,
					childCount = el.children.length,
					hasFocus = Medium.activeElement === el;

				el.placeholder = placeholder;

				// Empty Editor
				if (
					!hasFocus
					&& text.length < 1
					&& childCount < 2
				) {
					if (el.placeHolderActive) return;

					if (!el.innerHTML.match('<' + s.tags.paragraph)) {
						el.innerHTML = '';
					}

					// We need to add placeholders
					if (s.placeholder.length > 0) {
						if (!placeholder.setup) {
							placeholder.setup = true;

							//background & background color
							style.background = qStyle('background');
							style.backgroundColor = qStyle('background-color');

							//text size & text color
							style.fontSize = qStyle('font-size');
							style.color = elStyle.color;

							//begin box-model
							//margin
							style.marginTop = qStyle('margin-top');
							style.marginBottom = qStyle('margin-bottom');
							style.marginLeft = qStyle('margin-left');
							style.marginRight = qStyle('margin-right');

							//padding
							style.paddingTop = qStyle('padding-top');
							style.paddingBottom = qStyle('padding-bottom');
							style.paddingLeft = qStyle('padding-left');
							style.paddingRight = qStyle('padding-right');

							//border
							style.borderTopWidth = qStyle('border-top-width');
							style.borderTopColor = qStyle('border-top-color');
							style.borderTopStyle = qStyle('border-top-style');
							style.borderBottomWidth = qStyle('border-bottom-width');
							style.borderBottomColor = qStyle('border-bottom-color');
							style.borderBottomStyle = qStyle('border-bottom-style');
							style.borderLeftWidth = qStyle('border-left-width');
							style.borderLeftColor = qStyle('border-left-color');
							style.borderLeftStyle = qStyle('border-left-style');
							style.borderRightWidth = qStyle('border-right-width');
							style.borderRightColor = qStyle('border-right-color');
							style.borderRightStyle = qStyle('border-right-style');
							//end box model

							//element setup
							placeholder.className = s.cssClasses.placeholder + ' ' + s.cssClasses.placeholder + '-' + s.mode;
							placeholder.innerHTML = '<div>' + s.placeholder + '</div>';
							el.parentNode.insertBefore(placeholder, el);
						}

						el.className += ' ' + s.cssClasses.clear;

						style.display = '';
						// Add base P tag and do auto focus, give it a min height if el has one
						style.minHeight = el.clientHeight + 'px';
						style.minWidth = el.clientWidth + 'px';

						if ( s.mode !== Medium.inlineMode && s.mode !== Medium.inlineRichMode ) {
							this.setupContents();

							if (childCount === 0 && el.firstChild) {
								cursor.set(this, 0, el.firstChild);
							}
						}
					}
					el.placeHolderActive = true;
				} else if (el.placeHolderActive) {
					el.placeHolderActive = false;
					style.display = 'none';
					el.className = utils.trim(el.className.replace(s.cssClasses.clear, ''));
					this.setupContents();
				}
			},

			/**
			 * Cleans element
			 * @param {HtmlElement} [el] default is settings.element
			 */
			clean: function (el) {

				/*
				 * Deletes invalid nodes
				 * Removes Attributes
				 */
				var s = this.settings,
					placeholderClass = s.cssClasses.placeholder,
					attributesToRemove = (s.attributes || {}).remove || [],
					tags = s.tags || {},
					onlyOuter = tags.outerLevel || null,
					onlyInner = tags.innerLevel || null,
					outerSwitch = {},
					innerSwitch = {},
					paragraphTag = (tags.paragraph || '').toUpperCase(),
					html = this.html,
					attr,
					text,
					j;

				el = el || s.element;

				if (s.mode === Medium.inlineRichMode) {
					onlyOuter = s.tags.innerLevel;
				}

				if (onlyOuter !== null) {
					for (j = 0; j < onlyOuter.length; j++) {
						outerSwitch[onlyOuter[j].toUpperCase()] = true;
					}
				}

				if (onlyInner !== null) {
					for (j = 0; j < onlyInner.length; j++) {
						innerSwitch[onlyInner[j].toUpperCase()] = true;
					}
				}

				utils.traverseAll(el, {
					element: function(child, i, depth, parent) {
						var nodeName = child.nodeName,
							shouldDelete = true;

						// Remove attributes
						for (j = 0; j < attributesToRemove.length; j++) {
							attr = attributesToRemove[j];
							if (child.hasAttribute(attr)) {
								if (child.getAttribute(attr) !== placeholderClass) {
									child.removeAttribute(attr);
								}
							}
						}

						if ( onlyOuter === null && onlyInner === null ) {
							return;
						}

						if (depth  === 1 && outerSwitch[nodeName] !== undefined) {
							shouldDelete = false;
						} else if (depth > 1 && innerSwitch[nodeName] !== undefined) {
							shouldDelete = false;
						}

						// Convert tags or delete
						if (shouldDelete) {
							if (w.getComputedStyle(child, null).getPropertyValue('display') === 'block') {
								if (paragraphTag.length > 0 && paragraphTag !== nodeName) {
									utils.changeTag(child, paragraphTag);
								}

								if (depth > 1) {
									while (parent.childNodes.length > i) {
										parent.parentNode.insertBefore(parent.lastChild, parent.nextSibling);
									}
								}
							} else {
								switch (nodeName) {
									case 'BR':
										if (child === child.parentNode.lastChild) {
											if (child === child.parentNode.firstChild) {
												break;
											}
											text = document.createTextNode("");
											text.innerHTML = '&nbsp';
											child.parentNode.insertBefore(text, child);
											break;
										}
									default:
										while (child.firstChild !== null) {
											child.parentNode.insertBefore(child.firstChild, child);
										}
										utils.detachNode(child);
										break;
								}
							}
						}
					}
				});
			},
			/**
			 *
			 * @param {String|Object} html
			 * @param {Function} [callback]
			 * @param {Boolean} [skipChangeEvent]
			 * @returns {Medium}
			 */
			insertHtml: function (html, callback, skipChangeEvent) {
				var result = (new Medium.Html(this, html))
					.insert(this.settings.beforeInsertHtml);

				if (skipChangeEvent === true) {
					utils.triggerEvent(this.element, "change");
				}

				if (callback) {
					callback.apply(result);
				}

				return this;
			},

			addTag: function (tag, shouldFocus, isEditable, afterElement) {
				if (!this.settings.beforeAddTag(tag, shouldFocus, isEditable, afterElement)) {
					var newEl = d.createElement(tag),
						toFocus;

					if (typeof isEditable !== "undefined" && isEditable === false) {
						newEl.contentEditable = false;
					}
					if (newEl.innerHTML.length == 0) {
						newEl.innerHTML = ' ';
					}
					if (afterElement && afterElement.nextSibling) {
						afterElement.parentNode.insertBefore(newEl, afterElement.nextSibling);
						toFocus = afterElement.nextSibling;

					} else {
						this.element.appendChild(newEl);
						toFocus = this.lastChild();
					}

					if (shouldFocus) {
						this.cache.focusedElement = toFocus;
						this.cursor.set(this, 0, toFocus);
					}
					return newEl;
				}
				return null;
			},

			/**
			 *
			 * @param {String} tagName
			 * @param {Object} [attributes]
			 * @param {Boolean} [skipChangeEvent]
			 * @returns {Medium}
			 */
			invokeElement: function (tagName, attributes, skipChangeEvent) {
				var settings = this.settings,
					attributes = attributes || {},
					remove = attributes.remove || [];

				switch (settings.mode) {
					case Medium.inlineMode:
					case Medium.partialMode:
						return this;
					default:
				}

				//invoke works off class, so if it isn't there, we just add it
				if (remove.length > 0) {
					if (!utils.arrayContains(settings, 'class')) {
						remove.push('class');
					}
				}

				(new Medium.Element(this, tagName, attributes))
					.invoke(this.settings.beforeInvokeElement);

				if (skipChangeEvent === true) {
					utils.triggerEvent(this.element, "change");
				}

				return this;
			},

			/**
			 * @returns {string}
			 */
			behavior: function () {
				return (wild ? Medium.wildBehavior : Medium.domesticatedBehavior);
			},

			/**
			 *
			 * @param value
			 * @returns {Medium}
			 */
			value: function (value) {
				if (typeof value !== 'undefined') {
					this.element.innerHTML = value;

					this.clean();
					this.placeholders();
				} else {
					return this.element.innerHTML;
				}

				return this;
			},

			/**
			 * Focus on element
			 * @returns {Medium}
			 */
			focus: function () {
				var el = this.element;
				el.focus();
				return this;
			},

			/**
			 * Select all text
			 * @returns {Medium}
			 */
			select: function () {
				var el = this.element,
					range,
					selection;

				el.focus();

				if (d.body.createTextRange) {
					range = d.body.createTextRange();
					range.moveToElementText(el);
					range.select();
				} else if (w.getSelection) {
					selection = w.getSelection();
					range = d.createRange();
					range.selectNodeContents(el);
					selection.removeAllRanges();
					selection.addRange(range);
				}

				return this;
			},

			isActive: function () {
				return (Medium.activeElement === this.element);
			},

			setupContents: function () {
				var el = this.element,
					children = el.children,
					childNodes = el.childNodes,
					initialParagraph,
					s = this.settings;

				if (
					!s.tags.paragraph
					|| children.length > 0
					|| s.mode === Medium.inlineMode
					|| s.mode === Medium.inlineRichMode
				) {
					return Medium.Utilities;
				}

				//has content, but no children
				if (childNodes.length > 0) {
					initialParagraph = d.createElement(s.tags.paragraph);
					if (el.innerHTML.match('^[&]nbsp[;]')) {
						el.innerHTML = el.innerHTML.substring(6, el.innerHTML.length - 1);
					}
					initialParagraph.innerHTML = el.innerHTML;
					el.innerHTML = '';
					el.appendChild(initialParagraph);
					this.cursor.set(this, initialParagraph.innerHTML.length, initialParagraph);
				} else {
					initialParagraph = d.createElement(s.tags.paragraph);
					initialParagraph.innerHTML = '&nbsp;';
					el.appendChild(initialParagraph);
				}

				return this;
			},

			destroy: function () {
				var el = this.element,
					intercept = this.intercept,
					settings = this.settings,
					placeholder = this.placeholder || null;

				if (placeholder !== null && placeholder.setup) {
					//remove placeholder
					placeholder.parentNode.removeChild(placeholder);
					delete el.placeHolderActive;
				}

				//remove contenteditable
				el.removeAttribute('contenteditable');

				//remove classes
				el.className = utils.trim(el.className
					.replace(settings.cssClasses.editor, '')
					.replace(settings.cssClasses.clear, '')
					.replace(settings.cssClasses.editor + '-' + settings.mode, ''));

				//remove events
				utils
					.removeEvent(el, 'keyup', intercept.up)
					.removeEvent(el, 'keydown', intercept.down)
					.removeEvent(el, 'focus', intercept.focus)
					.removeEvent(el, 'blur', intercept.focus)
					.removeEvent(el, 'paste', settings.pasteEventHandler);
			},

			// Clears the element and restores the placeholder
			clear: function () {
				this.element.innerHTML = '';
				this.placeholders();
			},

			/**
			 * Splits content in medium element at cursor
			 * @returns {DocumentFragment|null}
			 */
			splitAtCaret: function() {
				if (!this.isActive()) return null;

				var selector = (w.getSelection || d.selection),
					sel = selector(),
					offset = sel.focusOffset,
					node = sel.focusNode,
					el = this.element,
					range = d.createRange(),
					endRange = d.createRange(),
					contents;

				range.setStart(node, offset);
				endRange.selectNodeContents(el);
				range.setEnd(endRange.endContainer, endRange.endOffset);

				contents = range.extractContents();

				return contents;
			},

			/**
			 * Deletes selection
			 */
			deleteSelection: function() {
				if (!this.isActive()) return;

				var sel = rangy.getSelection(),
					range;

				if (sel.rangeCount > 0) {
					range = sel.getRangeAt(0);
					range.deleteContents();
				}
			},

			lastChild: function () {
				return this.element.lastChild;
			}
		};

		/**
		 * @param {Medium} medium
		 * @param {String} tagName
		 * @param {Object} [attributes]
		 * @constructor
		 */
		Medium.Element = function (medium, tagName, attributes) {
			this.medium = medium;
			this.element = medium.settings.element;
			if (wild) {
				this.tagName = tagName;
			} else {
				switch (tagName.toLowerCase()) {
					case 'bold':
						this.tagName = 'b';
						break;
					case 'italic':
						this.tagName = 'i';
						break;
					case 'underline':
						this.tagName = 'u';
						break;
					default:
						this.tagName = tagName;
				}
			}
			this.attributes = attributes || {};
			this.clean = true;
		};


		/**
		 * @constructor
		 * @param {Medium} medium
		 * @param {String|HtmlElement} html
		 */
		Medium.Html = function (medium, html) {
			this.medium = medium;
			this.element = medium.settings.element;
			this.clean = true;
		};

		/**
		 *
		 * @constructor
		 */
		Medium.Injector = function () {
		};

		if (wild) {
			Medium.Element.prototype = {
				/**
				 * @methodOf Medium.Element
				 * @param {Function} [fn]
				 */
				invoke: function (fn) {
					if (Medium.activeElement === this.element) {
						if (fn) {
							fn.apply(this);
						}
						d.execCommand(this.tagName, false);
					}
				},
				setClean: function () {
					return this;
				}
			};

			Medium.Injector.prototype = {
				/**
				 * @methodOf Medium.Injector
				 * @param {String|HtmlElement} htmlRaw
				 * @param {Boolean} [selectInserted]
				 * @returns {null}
				 */
				inject: function (htmlRaw, selectInserted) {
					this.insertHTML(htmlRaw, selectInserted);
					return null;
				}
			};

			/**
			 *
			 * @constructor
			 */
			Medium.Undoable = function () {
			};
		}

		//if medium is domesticated (ie, not wild)
		else {
			rangy.rangePrototype.insertNodeAtEnd = function (node) {
				var range = this.cloneRange();
				range.collapse(false);
				range.insertNode(node);
				range.detach();
				this.setEndAfter(node);
			};

			Medium.Element.prototype = {
				/**
				 * @methodOf Medium.Element
				 * @param {Function} [fn]
				 */
				invoke: function (fn) {
					if (Medium.activeElement === this.element) {
						if (fn) {
							fn.apply(this);
						}

						var
							attr = this.attributes,
							tagName = this.tagName.toLowerCase(),
							applier,
							cl;

						if (attr.className !== undefined) {
							cl = (attr.className.split[' '] || [attr.className]).shift();
							delete attr.className;
						} else {
							cl = 'medium-' + tagName;
						}

						applier = rangy.createClassApplier(cl, {
							elementTagName: tagName,
							elementAttributes: this.attributes
						});

						this.medium.makeUndoable();

						applier.toggleSelection(w);

						if (this.clean) {
							//cleanup
							this.medium.clean();
							this.medium.placeholders();
						}


					}
				},

				/**
				 *
				 * @param {Boolean} clean
				 * @returns {Medium.Element}
				 */
				setClean: function (clean) {
					this.clean = clean;
					return this;
				}
			};

			Medium.Injector.prototype = {
				/**
				 * @methodOf Medium.Injector
				 * @param {String|HtmlElement} htmlRaw
				 * @returns {HtmlElement}
				 */
				inject: function (htmlRaw) {
					var html, isConverted = false;
					if (typeof htmlRaw === 'string') {
						var htmlConverter = d.createElement('div');
						htmlConverter.innerHTML = htmlRaw;
						html = htmlConverter.childNodes;
						isConverted = true;
					} else {
						html = htmlRaw;
					}

					this.insertHTML('<span id="wedge"></span>');

					var wedge = d.getElementById('wedge'),
						parent = wedge.parentNode,
						i = 0;
					wedge.removeAttribute('id');

					if (isConverted) {
						while (i < html.length) {
							parent.insertBefore(html[i], wedge);
						}
					} else {
						parent.insertBefore(html, wedge);
					}
					parent.removeChild(wedge);
					wedge = null;

					return html;
				}
			};

			/**
			 * @param {Medium} medium
			 * @constructor
			 */
			Medium.Undoable = function (medium) {
				var me = this,
					element = medium.settings.element,
					startValue = element.innerHTML,
					timer,
					stack = new Undo.Stack(),
					EditCommand = Undo.Command.extend({
						constructor: function (oldValue, newValue) {
							this.oldValue = oldValue;
							this.newValue = newValue;
						},
						execute: function () {
						},
						undo: function () {
							element.innerHTML = this.oldValue;
							medium.canUndo = stack.canUndo();
							medium.canRedo = stack.canRedo();
							medium.dirty = stack.dirty();
						},
						redo: function () {
							element.innerHTML = this.newValue;
							medium.canUndo = stack.canUndo();
							medium.canRedo = stack.canRedo();
							medium.dirty = stack.dirty();
						}
					}),
					makeUndoable = function () {
						var newValue = element.innerHTML;
						// ignore meta key presses
						if (newValue != startValue) {

							if (!me.movingThroughStack) {
								// this could try and make a diff instead of storing snapshots
								stack.execute(new EditCommand(startValue, newValue));
								startValue = newValue;
								medium.dirty = stack.dirty();
							}

							utils.triggerEvent(medium.settings.element, "change");
						}
					};

				this.medium = medium;
				this.timer = timer;
				this.stack = stack;
				this.makeUndoable = makeUndoable;
				this.EditCommand = EditCommand;
				this.movingThroughStack = false;

				utils
					.addEvent(element, 'keyup', function (e) {
						if (e.ctrlKey || e.keyCode === key.z) {
							utils.preventDefaultEvent(e);
							return;
						}

						// a way too simple algorithm in place of single-character undo
						clearTimeout(timer);
						timer = setTimeout(function () {
							makeUndoable();
						}, 250);
					})

					.addEvent(element, 'keydown', function (e) {
						if (!e.ctrlKey || e.keyCode !== key.z) {
							me.movingThroughStack = false;
							return true;
						}

						utils.preventDefaultEvent(e);

						me.movingThroughStack = true;

						if (e.shiftKey) {
							stack.canRedo() && stack.redo()
						} else {
							stack.canUndo() && stack.undo();
						}
					});
			};
		}

		//Thank you Tim Down (super uber genius): http://stackoverflow.com/questions/6690752/insert-html-at-caret-in-a-contenteditable-div/6691294#6691294
		Medium.Injector.prototype.insertHTML = function (html, selectPastedContent) {
			var sel, range;
			if (w.getSelection) {
				// IE9 and non-IE
				sel = w.getSelection();
				if (sel.getRangeAt && sel.rangeCount) {
					range = sel.getRangeAt(0);
					range.deleteContents();

					// Range.createContextualFragment() would be useful here but is
					// only relatively recently standardized and is not supported in
					// some browsers (IE9, for one)
					var el = d.createElement("div");
					el.innerHTML = html;
					var frag = d.createDocumentFragment(), node, lastNode;
					while ((node = el.firstChild)) {
						lastNode = frag.appendChild(node);
					}
					var firstNode = frag.firstChild;
					range.insertNode(frag);

					// Preserve the selection
					if (lastNode) {
						range = range.cloneRange();
						range.setStartAfter(lastNode);
						if (selectPastedContent) {
							range.setStartBefore(firstNode);
						} else {
							range.collapse(true);
						}
						sel.removeAllRanges();
						sel.addRange(range);
					}
				}
			} else if ((sel = d.selection) && sel.type != "Control") {
				// IE < 9
				var originalRange = sel.createRange();
				originalRange.collapse(true);
				sel.createRange().pasteHTML(html);
				if (selectPastedContent) {
					range = sel.createRange();
					range.setEndPoint("StartToStart", originalRange);
					range.select();
				}
			}
		};

		Medium.Html.prototype = {
			/**
			 * @methodOf Medium.Html
			 * @param {Function} [fn]
			 * @param {Boolean} [selectInserted]
			 * @returns {HtmlElement}
			 */
			insert: function (fn, selectInserted) {
				if (Medium.activeElement === this.element) {
					if (fn) {
						fn.apply(this);
					}

					var inserted = this.injector.inject(this.html, selectInserted);

					if (this.clean) {
						//cleanup
						this.medium.clean();
						this.medium.placeholders();
					}

					this.medium.makeUndoable();

					return inserted;
				} else {
					return null;
				}
			},

			/**
			 * @attributeOf {Medium.Injector} Medium.Html
			 */
			injector: new Medium.Injector(),

			/**
			 * @methodOf Medium.Html
			 * @param clean
			 * @returns {Medium.Html}
			 */
			setClean: function (clean) {
				this.clean = clean;
				return this;
			}
		};

		Medium.Utilities = utils = {
			/*
			 * Keyboard Interface events
			 */
			isCommand: function (s, e, fnTrue, fnFalse) {
				if ((s.modifier === 'ctrl' && e.ctrlKey ) ||
					(s.modifier === 'cmd' && e.metaKey ) ||
					(s.modifier === 'auto' && (e.ctrlKey || e.metaKey) )
					) {
					return fnTrue.call();
				} else {
					return fnFalse.call();
				}
			},
			isShift: function (e, fnTrue, fnFalse) {
				if (e.shiftKey) {
					return fnTrue.call();
				} else {
					return fnFalse.call();
				}
			},
			isModifier: function (settings, e, fn) {
				var cmd = settings.modifiers[e.keyCode];
				if (cmd) {
					return fn.call(null, cmd);
				}
				return false;
			},
			special: (function () {
				var special = {};

				special[key['backspace']] = true;
				special[key['shift']] = true;
				special[key['ctrl']] = true;
				special[key['alt']] = true;
				special[key['delete']] = true;
				special[key['cmd']] = true;

				return special;
			})(),
			isSpecial: function (cacheCmd, e) {

				if (cacheCmd) {
					return true;
				}

				return typeof Medium.Utilities.special[e.keyCode] !== 'undefined';
			},
			navigational: (function () {
				var navigational = {};

				navigational[key['upArrow']] = true;
				navigational[key['downArrow']] = true;
				navigational[key['leftArrow']] = true;
				navigational[key['rightArrow']] = true;

				return navigational;
			})(),
			isNavigational: function (e) {
				return typeof Medium.Utilities.navigational[e.keyCode] !== 'undefined';
			},

			/**
			 * @param element
			 * @param eventNamesString
			 * @param func
			 * @returns Medium.Utilities
			 */
			addEvents: function(element, eventNamesString, func) {
				var i = 0,
					eventName,
					eventNames = eventNamesString.split(' '),
					max = eventNames.length,
					utils = Medium.Utilities;

				for(;i < max; i++) {
					eventName = eventNames[i];
					if (eventName.length > 0) {
						utils.addEvent(element, eventName, func);
					}
				}

				return Medium.Utilities;
			},
			/*
			 * Handle Events
			 */
			addEvent: function addEvent(element, eventName, func) {
				if (element.addEventListener) {
					element.addEventListener(eventName, func, false);
				} else if (element.attachEvent) {
					element.attachEvent("on" + eventName, func);
				} else {
					element['on' + eventName] = func;
				}

				return Medium.Utilities;
			},
			removeEvent: function removeEvent(element, eventName, func) {
				if (element.removeEventListener) {
					element.removeEventListener(eventName, func, false);
				} else if (element.detachEvent) {
					element.detachEvent("on" + eventName, func);
				} else {
					element['on' + eventName] = null;
				}

				return Medium.Utilities;
			},
			preventDefaultEvent: function (e) {
				if (e.preventDefault) {
					e.preventDefault();
				} else {
					e.returnValue = false;
				}

				return Medium.Utilities;
			},
			stopPropagation: function(e) {
				e = e || window.event;
				e.cancelBubble = true;

				if (e.stopPropagation !== undefined) {
					e.stopPropagation();
				}

				return Medium.Utilities;
			},
			isEventSupported: function (element, eventName) {
				eventName = 'on' + eventName;
				var el = d.createElement(element.tagName),
					isSupported = (eventName in el);

				if (!isSupported) {
					el.setAttribute(eventName, 'return;');
					isSupported = typeof el[eventName] == 'function';
				}
				el = null;
				return isSupported;
			},
			triggerEvent: function (element, eventName) {
				var e;
				if (d.createEvent) {
					e = d.createEvent("HTMLEvents");
					e.initEvent(eventName, true, true);
					e.eventName = eventName;
					element.dispatchEvent(e);
				} else {
					e = d.createEventObject();
					element.fireEvent("on" + eventName, e);
				}

				return Medium.Utilities;
			},

			deepExtend: function (destination, source) {
				for (var property in source) if (source.hasOwnProperty(property)) {
					if (
						source[property]
							&& source[property].constructor
							&& source[property].constructor === Object
						) {
						destination[property] = destination[property] || {};
						Medium.Utilities.deepExtend(destination[property], source[property]);
					} else {
						destination[property] = source[property];
					}
				}
				return destination;
			},
			/*
			 * This is a Paste Hook. When the user pastes
			 * content, this ultimately converts it into
			 * plain text before inserting the data.
			 */
			pasteHook: function (medium, fn) {
				var textarea = d.createElement('textarea'),
					el = medium.element,
					existingValue,
					existingLength,
					overallLength,
					s = medium.settings,
					html = medium.html;

				textarea.className = s.cssClasses.pasteHook;

				el.parentNode.appendChild(textarea);

				textarea.focus();

				if (!wild) {
					medium.makeUndoable();
				}
				setTimeout(function () {
					el.focus();
					if (s.maxLength > 0) {
						existingValue = utils.text(el);
						existingLength = existingValue.length;
						overallLength = existingLength + textarea.value.length;
						if (overallLength > existingLength) {
							textarea.value = textarea.value.substring(0, s.maxLength - existingLength);
						}
					}
					fn(textarea.value);
					utils.detachNode( textarea );
				}, 2);

				return Medium.Utilities;
			},
			traverseAll: function(element, options, depth) {
				var children = element.childNodes,
					length = children.length,
					i = 0,
					node,
					depth = depth || 1;

				options = options || {};

				if (length > 0) {
					for(;i < length;i++) {
						node = children[i];
						switch (node.nodeType) {
							case 1:
								Medium.Utilities.traverseAll(node, options, depth + 1);
								if (options.element !== undefined) options.element(node, i, depth, element);
								break;
							case 3:
								if (options.fragment !== undefined) options.fragment(node, i, depth, element);
						}

						//length may change
						length = children.length;
						//if length did change, and we are at the last item, this causes infinite recursion, so if we are at the last item, then stop to prevent this
						if (node === element.lastChild) {
							i = length;
						}
					}
				}
				return Medium.Utilities;
			},
			trim: function (string) {
				return string.replace(/^[\s]+|\s+$/g, '');
			},
			arrayContains: function(array, variable) {
				var i = array.length;
				while (i--) {
					if (array[i] === variable) {
						return true;
					}
				}
				return false;
			},
			addClass: function(el, className) {
				if (el.classList)
					el.classList.add(className);
				else
					el.className += ' ' + className;

				return Medium.Utilities;
			},
			removeClass: function(el, className) {
				if (el.classList)
					el.classList.remove(className);
				else
					el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
				return Medium.Utilities;
			},
			hasClass: function(el, className) {
				if (el.classList)
					return el.classList.contains(className);
				else
					return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
			},
			isHidden: function(el) {
				return el.offsetWidth === 0 || el.offsetHeight === 0;
			},
			isVisible: function(el) {
				return el.offsetWidth !== 0 || el.offsetHeight !== 0;
			},
			encodeHtml: function ( html ) {
				return d.createElement( 'a' ).appendChild(
					d.createTextNode( html ) ).parentNode.innerHTML;
			},
			text: function (node, val) {
				if (val) {
					if ((node.textContent) && (typeof (node.textContent) != "undefined")) {
						node.textContent = val;
					} else {
						node.innerText = val;
					}
				}

				else if (node.innerText) {
					return utils.trim(node.innerText);
				}

				else if (node.textContent) {
					return utils.trim(node.textContent);
				}
				//document fragment
				else if (node.data) {
					return utils.trim(node.data);
				}

				//for good measure
				return '';
			},
			changeTag: function (oldNode, newTag) {
				var newNode = d.createElement(newTag),
					node,
					nextNode;

				node = oldNode.firstChild;
				while (node) {
					nextNode = node.nextSibling;
					newNode.appendChild(node);
					node = nextNode;
				}

				oldNode.parentNode.insertBefore(newNode, oldNode);
				oldNode.parentNode.removeChild(oldNode);

				return newNode;
			},
			detachNode: function (el) {
				if (el.parentNode !== null) {
					el.parentNode.removeChild(el);
				}
				return el;
			},
			baseAtCaret: function (medium) {
				if (!medium.isActive()) return null;

				var sel = w.getSelection ? w.getSelection() : document.selection;

				if (sel.rangeCount) {
					var selRange = sel.getRangeAt(0),
						container = selRange.endContainer;

					switch (container.nodeType) {
						case 3:
							if (container.data && container.data.length != selRange.endOffset) return false;
							break;
					}

					return container;
				}

				return null;
			},
			atCaret: function (medium) {
				var container = this.baseAtCaret(medium) || {},
					el = medium.element;

				if (container === false) return null;

				while (container && container.parentNode !== el) {
					container = container.parentNode;
				}

				if (container && container.nodeType == 1) {
					return container;
				}

				return null;
			},
			hide: function(el) {
				el.style.display = 'none';
			},
			show: function(el) {
				el.style.display = '';
			},
			hideAnim: function(el) {
				el.style.opacity = 1;
			},
			showAnim: function(el) {
				el.style.opacity = 0.01;
				el.style.display = '';
			}
		};

		/*
		 * Handle Selection Logic
		 */
		Medium.Selection = function () {
		};
		Medium.Selection.prototype = {
			setBridge: function (bridge) {
				for (var i in bridge) if (bridge.hasOwnProperty(i)) {
					this[i] = bridge[i];
				}
			},
			saveSelection: function () {
				if (w.getSelection) {
					var sel = w.getSelection();
					if (sel.rangeCount > 0) {
						return sel.getRangeAt(0);
					}
				} else if (d.selection && d.selection.createRange) { // IE
					return d.selection.createRange();
				}
				return null;
			},

			restoreSelection: function (range) {
				if (range) {
					if (w.getSelection) {
						var sel = w.getSelection();
						sel.removeAllRanges();
						sel.addRange(range);
					} else if (d.selection && range.select) { // IE
						range.select();
					}
				}
			}
		};

		/*
		 * Handle Cursor Logic
		 */
		Medium.Cursor = function () {
		};
		Medium.Cursor.prototype = {
			setBridge: function (bridge) {
				for (var i in bridge) if (bridge.hasOwnProperty(i)) {
					this[i] = bridge[i];
				}
			},
			set: function (medium, pos, el) {
				var range,
					html = this.html;

				if (d.createRange) {
					var selection = w.getSelection(),
						lastChild = medium.lastChild(),
						length = utils.text(lastChild).length - 1,
						toModify = el ? el : lastChild,
						theLength = ((typeof pos !== 'undefined') && (pos !== null) ? pos : length);

					range = d.createRange();
					range.setStart(toModify, theLength);
					range.collapse(true);
					selection.removeAllRanges();
					selection.addRange(range);
				} else {
					range = d.body.createTextRange();
					range.moveToElementText(el);
					range.collapse(false);
					range.select();
				}
			},
			parent: function () {
				var target = null, range;

				if (w.getSelection) {
					range = w.getSelection().getRangeAt(0);
					target = range.commonAncestorContainer;

					target = (target.nodeType === 1
						? target
						: target.parentNode
						);
				}

				else if (d.selection) {
					target = d.selection.createRange().parentElement();
				}

				if (target.tagName == 'SPAN') {
					target = target.parentNode;
				}

				return target;
			},
			caretToBeginning: function (el) {
				this.set(this, 0, el);
			},
			caretToEnd: function (el) {
				this.set(this, utils.text(el).length, el);
			}
		};

		Medium.Toolbar = function(medium, buttons) {
			var elementCreator = d.createElement('div'),
				that = this;

			elementCreator.innerHTML = this.html;

			this.buttons = buttons;
			this.element = elementCreator.children[0];
			d.body.appendChild(this.element);
			this.active = false;
			this.busy = true;

			utils
				.addEvents(document, 'mouseup keyup', function(e) {
					if (Medium.activeElement === medium.element && !that.busy) {
						that.goToSelection();
					}
				})
				.addEvent(w, 'scroll', function() {
					if (that.active) {
						that.goToSelection();
					}
				});
		};
		Medium.Toolbar.prototype = {
			fixedClass: 'Medium-toolbar-fixed',
			showClass: 'Medium-toolbar-show',
			hideClass: 'Medium-toolbar-hide',

			html:
'<div class="Medium-toolbar">\
	<div class="Medium-tail-outer">\
		<div class="Medium-tail-inner"></div>\
	</div>\
	<div id="Medium-buttons"></div>\
	<table id="Medium-options">\
		<tbody>\
			<tr>\
			</tr>\
		</tbody>\
	</table>\
</div>',

			goToSelection: function() {
				var high = this.getHighlighted(),
					y = high.boundary.top - 5,
					el = this.element,
					style = el.style;

				if (w.scrollTop > 0) {
					utils.addClass(el, this.fixedClass);
				} else {
					utils.removeClass(el, this.fixedClass);
				}

				if (high !== null) {
					if (high.range.startOffset === high.range.endOffset && !high.text) {
						utils
							.removeClass(el, this.showClass)
							.addClass(el, this.hideClass);

						this.active = false;
					} else {
						utils
							.removeClass(el, this.hideClass)
							.removeClass(el, this.showClass);

						style.opacity = 0.01;
						utils.addClass(el, this.showClass);
						style.opacity = 1;
						style.top = (y - 65) + "px";
						style.left = (
							(
								high.boundary.left + (high.boundary.width / 2)
							)
							- (el.clientWidth / 2)
						) + "px";

						this.active = true;
					}
				}
			},

			getHighlighted: function() {
				var selection = w.getSelection(),
					range = (selection.anchorNode ? selection.getRangeAt(0) : false);

				if (!range) {
					return null;
				}

				return {
					selection : selection,
					range : range,
					text : utils.trim(range.toString()),
					boundary : range.getBoundingClientRect()
				};
			}
		};

		Medium.Drag = function(medium) {
			this.medium = medium;

			var that = this,
				iconSrc = this.iconSrc.replace(/[{][{]([a-zA-Z]+)[}][}]/g, function(ignore, match) {
					if (that.hasOwnProperty(match)) {
						return that[match];
					}

					return ignore;
				}),
				icon = this.icon = d.createElement('img');

			icon.className = this.buttonClass;
			icon.setAttribute('contenteditable', 'false');
			icon.setAttribute('src', iconSrc);

			this.hide();
			this.element = null;
			this.protectedElement = null;

			utils
				.addEvent(icon, 'dragstart', function(e) {
					if (that.protectedElement !== null) return;

					e = e || w.event;

					that.protectedElement = utils.detachNode(that.element);

					that.icon.style.opacity = 0.00;
				})
				.addEvent(icon, 'mouseover', function(e) {
					if (that.protectedElement !== null) return;

					utils
						.stopPropagation(e)
						.addClass(that.element, that.elementClass);

				})
				.addEvent(icon, 'mouseout', function(e) {
					if (that.protectedElement !== null) return;

					utils
						.stopPropagation(e)
						.removeClass(that.element, that.elementClass);

				})
				.addEvent(icon, 'dragend', d.body.ondragend = function(e) {
					if (that.protectedElement === null) return;

					setTimeout(function() {
						that.cleanCanvas();
						that.protectedElement = null;
					}, 1);
				});
		};
		Medium.Drag.prototype = {
			elementClass: 'Medium-focused',
			buttonClass: 'Medium-drag',

			//thank you ascii for not including a directional icon (boo!)
			//http://www.flaticon.com/free-icon/pointer-crosstree_10119
			iconSrc: 'data:image/svg+xml;utf8,\
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="21.424px" height="21.424px" viewBox="0 0 21.424 21.424" style="enable-background:new 0 0 21.424 21.424;" xml:space="preserve">\
	<g>\
		<g>\
			<path style="fill:{{iconColor}};" d="M13.616,17.709L13.616,17.709h0.781l-3.686,3.715l-3.685-3.715h0.781l0,0H13.616z M13.616,17.709 M14.007,17.709 M12.555,19.566 M8.87,19.566 M7.418,17.709 M7.809,17.709 M10.712,17.709"/>\
			<path style="fill:{{iconColor}};" d="M13.616,3.715L13.616,3.715h0.781L10.712,0L7.027,3.715h0.781l0,0H13.616z M13.616,3.715 M14.007,3.715 M12.555,1.858 M8.87,1.858 M7.418,3.715 M7.809,3.715 M10.712,3.715"/>\
			<path style="fill:{{iconColor}};" d="M3.716,13.616L3.716,13.616v0.781L0,10.712l3.716-3.685v0.781l0,0V13.616z M3.716,13.616 M3.716,14.007 M1.858,12.555 M1.858,8.87 M3.716,7.417 M3.716,7.808 M3.716,10.712"/>\
			<path style="fill:{{iconColor}};" d="M17.709,13.616L17.709,13.616v0.781l3.715-3.685l-3.715-3.685v0.781l0,0V13.616z M17.709,13.616 M17.709,14.007 M19.566,12.555 M19.566,8.87 M17.709,7.417 M17.709,7.808 M17.709,10.712"/>\
		</g>\
		<path style="fill-rule:evenodd;clip-rule:evenodd;fill:{{iconColor}};" d="M10.712,6.608c2.267,0,4.104,1.838,4.104,4.104 c0,2.266-1.837,4.104-4.104,4.104c-2.266,0-4.104-1.837-4.104-4.104C6.608,8.446,8.446,6.608,10.712,6.608L10.712,6.608z M10.712,7.515c-1.765,0-3.196,1.432-3.196,3.197s1.432,3.197,3.196,3.197c1.766,0,3.197-1.432,3.197-3.197 S12.478,7.515,10.712,7.515z"/>\
	</g>\
</svg>',
			iconColor: '#231F20',
			hide: function() {
				utils.hide(this.icon);
			},

			show: function(el) {
				if (el === this.icon && this.protectedElement === null) return;

				this.element = el;

				var style = this.icon.style,
					left = el.offsetLeft,
					top = el.offsetTop;

				el.dragIcon = this.icon;
				el.parentNode.appendChild(this.icon);

				style.opacity = 1;
				style.left = left + 'px';
				style.top = top + 'px';

				utils.show(this.icon);
			},
			cleanCanvas: function() {
				var target,
					inserted = false,
					buttons = d.getElementsByClassName(this.buttonClass);

				this.icon.style.opacity = 1;

				while (buttons.length > 0) {
					if (utils.isVisible(target = buttons[0])) {
						if (!inserted) {
							target.parentNode.insertBefore(this.element, target);
							inserted = true;
						}
						utils.detachNode(target);
					}
				}
				utils.detachNode(this.icon);
			}
		};

		Medium.Action = function () {
		};
		Medium.Action.prototype = {
			setBridge: function (bridge) {
				for (var i in bridge) if (bridge.hasOwnProperty(i)) {
					this[i] = bridge[i];
				}
			},
			listen: function () {
				var el = this.element,
					intercept = this.intercept;

				utils
					.addEvent(el, 'keyup', intercept.up)
					.addEvent(el, 'keydown', intercept.down)
					.addEvent(el, 'focus', intercept.focus)
					.addEvent(el, 'blur', intercept.blur)
					.addEvent(el, 'paste', this.settings.pasteEventHandler);
			},
			preserveElementFocus: function () {
				// Fetch node that has focus
				var anchorNode = w.getSelection ? w.getSelection().anchorNode : d.activeElement;
				if (anchorNode) {
					var cache = this.medium.cache,
						s = this.settings,
						cur = anchorNode.parentNode,
						children = s.element.children,
						diff = cur !== cache.focusedElement,
						elementIndex = 0,
						i;

					// anchorNode is our target if element is empty
					if (cur === s.element) {
						cur = anchorNode;
					}

					// Find our child index
					for (i = 0; i < children.length; i++) {
						if (cur === children[i]) {
							elementIndex = i;
							break;
						}
					}

					// Focused element is different
					if (diff) {
						cache.focusedElement = cur;
						cache.focusedElementIndex = elementIndex;
					}
				}
			}
		};

		Medium.Cache = function () {
			this.initialized = false;
			this.cmd = false;
			this.focusedElement = null
		};
		Medium.Cache.prototype = {
			setBridge: function (bridge) {
				for (var i in bridge) if (bridge.hasOwnProperty(i)) {
					this[i] = bridge[i];
				}
			}
		};

		//Modes
		Medium.inlineMode = 'inline';
		Medium.partialMode = 'partial';
		Medium.richMode = 'rich';
		Medium.inlineRichMode = 'inlineRich';
		Medium.Messages = {
			pastHere: 'Paste Here'
		};

		//Behaviours
		Medium.domesticatedBehavior = 'domesticated';
		Medium.wildBehavior = 'wild';

		return Medium;
	}());

	if (typeof define === 'function' && define['amd']) {
		define(function () { return Medium; });
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = Medium;
	} else if (typeof this !== 'undefined') {
		this.Medium = Medium;
	}

}).call(this, window, document);
(function() {
  'use strict';

  if (self.fetch) {
    return
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = name.toString();
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = value.toString();
    }
    return value
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)

    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var list = this.map[name]
    if (!list) {
      list = []
      this.map[name] = list
    }
    list.push(value)
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    var values = this.map[normalizeName(name)]
    return values ? values[0] : null
  }

  Headers.prototype.getAll = function(name) {
    return this.map[normalizeName(name)] || []
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = [normalizeValue(value)]
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    Object.getOwnPropertyNames(this.map).forEach(function(name) {
      this.map[name].forEach(function(value) {
        callback.call(thisArg, value, name, this)
      }, this)
    }, this)
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    reader.readAsArrayBuffer(blob)
    return fileReaderReady(reader)
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    reader.readAsText(blob)
    return fileReaderReady(reader)
  }

  var support = {
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self
  }

  function Body() {
    this.bodyUsed = false


    this._initBody = function(body) {
      this._bodyInit = body
      if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (!body) {
        this._bodyText = ''
      } else {
        throw new Error('unsupported BodyInit type')
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        return this.blob().then(readBlobAsArrayBuffer)
      }

      this.text = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob)
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as text')
        } else {
          return Promise.resolve(this._bodyText)
        }
      }
    } else {
      this.text = function() {
        var rejected = consumed(this)
        return rejected ? rejected : Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(url, options) {
    options = options || {}
    this.url = url

    this.credentials = options.credentials || 'omit'
    this.headers = new Headers(options.headers)
    this.method = normalizeMethod(options.method || 'GET')
    this.mode = options.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && options.body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(options.body)
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function headers(xhr) {
    var head = new Headers()
    var pairs = xhr.getAllResponseHeaders().trim().split('\n')
    pairs.forEach(function(header) {
      var split = header.trim().split(':')
      var key = split.shift().trim()
      var value = split.join(':').trim()
      head.append(key, value)
    })
    return head
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this._initBody(bodyInit)
    this.type = 'default'
    this.url = null
    this.status = options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = options.statusText
    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
    this.url = options.url || ''
  }

  Body.call(Response.prototype)

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    // TODO: Request constructor should accept input, init
    var request
    if (Request.prototype.isPrototypeOf(input) && !init) {
      request = input
    } else {
      request = new Request(input, init)
    }

    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest()

      function responseURL() {
        if ('responseURL' in xhr) {
          return xhr.responseURL
        }

        // Avoid security warnings on getResponseHeader when not allowed by CORS
        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
          return xhr.getResponseHeader('X-Request-URL')
        }

        return;
      }

      xhr.onload = function() {
        var status = (xhr.status === 1223) ? 204 : xhr.status
        if (status < 100 || status > 599) {
          reject(new TypeError('Network request failed'))
          return
        }
        var options = {
          status: status,
          statusText: xhr.statusText,
          headers: headers(xhr),
          url: responseURL()
        }
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})();
