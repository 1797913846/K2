/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
			/******/
		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
		/******/
	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
	/******/
})
/************************************************************************/
/******/([
/* 0 */
/***/ (function (module, exports, __webpack_require__) {

			__webpack_require__(1);
			__webpack_require__(2);
			module.exports = __webpack_require__(3);


			/***/
		}),
/* 1 */
/***/ (function (module, exports, __webpack_require__) {

			var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * https://github.com/es-shims/es5-shim
	 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
	 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
	 */

			// vim: ts=4 sts=4 sw=4 expandtab

			// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
			;

			// UMD (Universal Module Definition)
			// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js
			(function (root, factory) {
				'use strict';

				/* global define, exports, module */
				if (true) {
					// AMD. Register as an anonymous module.
					!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
				} else if (typeof exports === 'object') {
					// Node. Does not work with strict CommonJS, but
					// only CommonJS-like enviroments that support module.exports,
					// like Node.
					module.exports = factory();
				} else {
					// Browser globals (root is window)
					root.returnExports = factory();
				}
			}(this, function () {
				/**
				 * Brings an environment as close to ECMAScript 5 compliance
				 * as is possible with the facilities of erstwhile engines.
				 *
				 * Annotated ES5: http://es5.github.com/ (specific links below)
				 * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
				 * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
				 */

				// Shortcut to an often accessed properties, in order to avoid multiple
				// dereference that costs universally. This also holds a reference to known-good
				// functions.
				var $Array = Array;
				var ArrayPrototype = $Array.prototype;
				var $Object = Object;
				var ObjectPrototype = $Object.prototype;
				var $Function = Function;
				var FunctionPrototype = $Function.prototype;
				var $String = String;
				var StringPrototype = $String.prototype;
				var $Number = Number;
				var NumberPrototype = $Number.prototype;
				var array_slice = ArrayPrototype.slice;
				var array_splice = ArrayPrototype.splice;
				var array_push = ArrayPrototype.push;
				var array_unshift = ArrayPrototype.unshift;
				var array_concat = ArrayPrototype.concat;
				var array_join = ArrayPrototype.join;
				var call = FunctionPrototype.call;
				var apply = FunctionPrototype.apply;
				var max = Math.max;
				var min = Math.min;

				// Having a toString local variable name breaks in Opera so use to_string.
				var to_string = ObjectPrototype.toString;

				/* global Symbol */
				/* eslint-disable one-var-declaration-per-line, no-redeclare, max-statements-per-line */
				var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
				var isCallable; /* inlined from https://npmjs.com/is-callable */ var fnToStr = Function.prototype.toString, constructorRegex = /^\s*class /, isES6ClassFn = function isES6ClassFn(value) { try { var fnStr = fnToStr.call(value); var singleStripped = fnStr.replace(/\/\/.*\n/g, ''); var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, ''); var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' '); return constructorRegex.test(spaceStripped); } catch (e) { return false; /* not a function */ } }, tryFunctionObject = function tryFunctionObject(value) { try { if (isES6ClassFn(value)) { return false; } fnToStr.call(value); return true; } catch (e) { return false; } }, fnClass = '[object Function]', genClass = '[object GeneratorFunction]', isCallable = function isCallable(value) { if (!value) { return false; } if (typeof value !== 'function' && typeof value !== 'object') { return false; } if (hasToStringTag) { return tryFunctionObject(value); } if (isES6ClassFn(value)) { return false; } var strClass = to_string.call(value); return strClass === fnClass || strClass === genClass; };

				var isRegex; /* inlined from https://npmjs.com/is-regex */ var regexExec = RegExp.prototype.exec, tryRegexExec = function tryRegexExec(value) { try { regexExec.call(value); return true; } catch (e) { return false; } }, regexClass = '[object RegExp]'; isRegex = function isRegex(value) { if (typeof value !== 'object') { return false; } return hasToStringTag ? tryRegexExec(value) : to_string.call(value) === regexClass; };
				var isString; /* inlined from https://npmjs.com/is-string */ var strValue = String.prototype.valueOf, tryStringObject = function tryStringObject(value) { try { strValue.call(value); return true; } catch (e) { return false; } }, stringClass = '[object String]'; isString = function isString(value) { if (typeof value === 'string') { return true; } if (typeof value !== 'object') { return false; } return hasToStringTag ? tryStringObject(value) : to_string.call(value) === stringClass; };
				/* eslint-enable one-var-declaration-per-line, no-redeclare, max-statements-per-line */

				/* inlined from http://npmjs.com/define-properties */
				var supportsDescriptors = $Object.defineProperty && (function () {
					try {
						var obj = {};
						$Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
						for (var _ in obj) { // jscs:ignore disallowUnusedVariables
							return false;
						}
						return obj.x === obj;
					} catch (e) { /* this is ES3 */
						return false;
					}
				}());
				var defineProperties = (function (has) {
					// Define configurable, writable, and non-enumerable props
					// if they don't exist.
					var defineProperty;
					if (supportsDescriptors) {
						defineProperty = function (object, name, method, forceAssign) {
							if (!forceAssign && (name in object)) {
								return;
							}
							$Object.defineProperty(object, name, {
								configurable: true,
								enumerable: false,
								writable: true,
								value: method
							});
						};
					} else {
						defineProperty = function (object, name, method, forceAssign) {
							if (!forceAssign && (name in object)) {
								return;
							}
							object[name] = method;
						};
					}
					return function defineProperties(object, map, forceAssign) {
						for (var name in map) {
							if (has.call(map, name)) {
								defineProperty(object, name, map[name], forceAssign);
							}
						}
					};
				}(ObjectPrototype.hasOwnProperty));

				//
				// Util
				// ======
				//

				/* replaceable with https://npmjs.com/package/es-abstract /helpers/isPrimitive */
				var isPrimitive = function isPrimitive(input) {
					var type = typeof input;
					return input === null || (type !== 'object' && type !== 'function');
				};

				var isActualNaN = $Number.isNaN || function isActualNaN(x) {
					return x !== x;
				};

				var ES = {
					// ES5 9.4
					// http://es5.github.com/#x9.4
					// http://jsperf.com/to-integer
					/* replaceable with https://npmjs.com/package/es-abstract ES5.ToInteger */
					ToInteger: function ToInteger(num) {
						var n = +num;
						if (isActualNaN(n)) {
							n = 0;
						} else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
							n = (n > 0 || -1) * Math.floor(Math.abs(n));
						}
						return n;
					},

					/* replaceable with https://npmjs.com/package/es-abstract ES5.ToPrimitive */
					ToPrimitive: function ToPrimitive(input) {
						var val, valueOf, toStr;
						if (isPrimitive(input)) {
							return input;
						}
						valueOf = input.valueOf;
						if (isCallable(valueOf)) {
							val = valueOf.call(input);
							if (isPrimitive(val)) {
								return val;
							}
						}
						toStr = input.toString;
						if (isCallable(toStr)) {
							val = toStr.call(input);
							if (isPrimitive(val)) {
								return val;
							}
						}
						throw new TypeError();
					},

					// ES5 9.9
					// http://es5.github.com/#x9.9
					/* replaceable with https://npmjs.com/package/es-abstract ES5.ToObject */
					ToObject: function (o) {
						if (o == null) { // this matches both null and undefined
							throw new TypeError("can't convert " + o + ' to object');
						}
						return $Object(o);
					},

					/* replaceable with https://npmjs.com/package/es-abstract ES5.ToUint32 */
					ToUint32: function ToUint32(x) {
						return x >>> 0;
					}
				};

				//
				// Function
				// ========
				//

				// ES-5 15.3.4.5
				// http://es5.github.com/#x15.3.4.5

				var Empty = function Empty() { };

				defineProperties(FunctionPrototype, {
					bind: function bind(that) { // .length is 1
						// 1. Let Target be the this value.
						var target = this;
						// 2. If IsCallable(Target) is false, throw a TypeError exception.
						if (!isCallable(target)) {
							throw new TypeError('Function.prototype.bind called on incompatible ' + target);
						}
						// 3. Let A be a new (possibly empty) internal list of all of the
						//   argument values provided after thisArg (arg1, arg2 etc), in order.
						// XXX slicedArgs will stand in for "A" if used
						var args = array_slice.call(arguments, 1); // for normal call
						// 4. Let F be a new native ECMAScript object.
						// 11. Set the [[Prototype]] internal property of F to the standard
						//   built-in Function prototype object as specified in 15.3.3.1.
						// 12. Set the [[Call]] internal property of F as described in
						//   15.3.4.5.1.
						// 13. Set the [[Construct]] internal property of F as described in
						//   15.3.4.5.2.
						// 14. Set the [[HasInstance]] internal property of F as described in
						//   15.3.4.5.3.
						var bound;
						var binder = function () {

							if (this instanceof bound) {
								// 15.3.4.5.2 [[Construct]]
								// When the [[Construct]] internal method of a function object,
								// F that was created using the bind function is called with a
								// list of arguments ExtraArgs, the following steps are taken:
								// 1. Let target be the value of F's [[TargetFunction]]
								//   internal property.
								// 2. If target has no [[Construct]] internal method, a
								//   TypeError exception is thrown.
								// 3. Let boundArgs be the value of F's [[BoundArgs]] internal
								//   property.
								// 4. Let args be a new list containing the same values as the
								//   list boundArgs in the same order followed by the same
								//   values as the list ExtraArgs in the same order.
								// 5. Return the result of calling the [[Construct]] internal
								//   method of target providing args as the arguments.

								var result = apply.call(
									target,
									this,
									array_concat.call(args, array_slice.call(arguments))
								);
								if ($Object(result) === result) {
									return result;
								}
								return this;

							} else {
								// 15.3.4.5.1 [[Call]]
								// When the [[Call]] internal method of a function object, F,
								// which was created using the bind function is called with a
								// this value and a list of arguments ExtraArgs, the following
								// steps are taken:
								// 1. Let boundArgs be the value of F's [[BoundArgs]] internal
								//   property.
								// 2. Let boundThis be the value of F's [[BoundThis]] internal
								//   property.
								// 3. Let target be the value of F's [[TargetFunction]] internal
								//   property.
								// 4. Let args be a new list containing the same values as the
								//   list boundArgs in the same order followed by the same
								//   values as the list ExtraArgs in the same order.
								// 5. Return the result of calling the [[Call]] internal method
								//   of target providing boundThis as the this value and
								//   providing args as the arguments.

								// equiv: target.call(this, ...boundArgs, ...args)
								return apply.call(
									target,
									that,
									array_concat.call(args, array_slice.call(arguments))
								);

							}

						};

						// 15. If the [[Class]] internal property of Target is "Function", then
						//     a. Let L be the length property of Target minus the length of A.
						//     b. Set the length own property of F to either 0 or L, whichever is
						//       larger.
						// 16. Else set the length own property of F to 0.

						var boundLength = max(0, target.length - args.length);

						// 17. Set the attributes of the length own property of F to the values
						//   specified in 15.3.5.1.
						var boundArgs = [];
						for (var i = 0; i < boundLength; i++) {
							array_push.call(boundArgs, '$' + i);
						}

						// XXX Build a dynamic function with desired amount of arguments is the only
						// way to set the length property of a function.
						// In environments where Content Security Policies enabled (Chrome extensions,
						// for ex.) all use of eval or Function costructor throws an exception.
						// However in all of these environments Function.prototype.bind exists
						// and so this code will never be executed.
						bound = $Function('binder', 'return function (' + array_join.call(boundArgs, ',') + '){ return binder.apply(this, arguments); }')(binder);

						if (target.prototype) {
							Empty.prototype = target.prototype;
							bound.prototype = new Empty();
							// Clean up dangling references.
							Empty.prototype = null;
						}

						// TODO
						// 18. Set the [[Extensible]] internal property of F to true.

						// TODO
						// 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
						// 20. Call the [[DefineOwnProperty]] internal method of F with
						//   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
						//   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
						//   false.
						// 21. Call the [[DefineOwnProperty]] internal method of F with
						//   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
						//   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
						//   and false.

						// TODO
						// NOTE Function objects created using Function.prototype.bind do not
						// have a prototype property or the [[Code]], [[FormalParameters]], and
						// [[Scope]] internal properties.
						// XXX can't delete prototype in pure-js.

						// 22. Return F.
						return bound;
					}
				});

				// _Please note: Shortcuts are defined after `Function.prototype.bind` as we
				// use it in defining shortcuts.
				var owns = call.bind(ObjectPrototype.hasOwnProperty);
				var toStr = call.bind(ObjectPrototype.toString);
				var arraySlice = call.bind(array_slice);
				var arraySliceApply = apply.bind(array_slice);
				var strSlice = call.bind(StringPrototype.slice);
				var strSplit = call.bind(StringPrototype.split);
				var strIndexOf = call.bind(StringPrototype.indexOf);
				var pushCall = call.bind(array_push);
				var isEnum = call.bind(ObjectPrototype.propertyIsEnumerable);
				var arraySort = call.bind(ArrayPrototype.sort);

				//
				// Array
				// =====
				//

				var isArray = $Array.isArray || function isArray(obj) {
					return toStr(obj) === '[object Array]';
				};

				// ES5 15.4.4.12
				// http://es5.github.com/#x15.4.4.13
				// Return len+argCount.
				// [bugfix, ielt8]
				// IE < 8 bug: [].unshift(0) === undefined but should be "1"
				var hasUnshiftReturnValueBug = [].unshift(0) !== 1;
				defineProperties(ArrayPrototype, {
					unshift: function () {
						array_unshift.apply(this, arguments);
						return this.length;
					}
				}, hasUnshiftReturnValueBug);

				// ES5 15.4.3.2
				// http://es5.github.com/#x15.4.3.2
				// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
				defineProperties($Array, { isArray: isArray });

				// The IsCallable() check in the Array functions
				// has been replaced with a strict check on the
				// internal class of the object to trap cases where
				// the provided function was actually a regular
				// expression literal, which in V8 and
				// JavaScriptCore is a typeof "function".  Only in
				// V8 are regular expression literals permitted as
				// reduce parameters, so it is desirable in the
				// general case for the shim to match the more
				// strict and common behavior of rejecting regular
				// expressions.

				// ES5 15.4.4.18
				// http://es5.github.com/#x15.4.4.18
				// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach

				// Check failure of by-index access of string characters (IE < 9)
				// and failure of `0 in boxedString` (Rhino)
				var boxedString = $Object('a');
				var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

				var properlyBoxesContext = function properlyBoxed(method) {
					// Check node 0.6.21 bug where third parameter is not boxed
					var properlyBoxesNonStrict = true;
					var properlyBoxesStrict = true;
					var threwException = false;
					if (method) {
						try {
							method.call('foo', function (_, __, context) {
								if (typeof context !== 'object') {
									properlyBoxesNonStrict = false;
								}
							});

							method.call([1], function () {
								'use strict';

								properlyBoxesStrict = typeof this === 'string';
							}, 'x');
						} catch (e) {
							threwException = true;
						}
					}
					return !!method && !threwException && properlyBoxesNonStrict && properlyBoxesStrict;
				};

				defineProperties(ArrayPrototype, {
					forEach: function forEach(callbackfn/*, thisArg*/) {
						var object = ES.ToObject(this);
						var self = splitString && isString(this) ? strSplit(this, '') : object;
						var i = -1;
						var length = ES.ToUint32(self.length);
						var T;
						if (arguments.length > 1) {
							T = arguments[1];
						}

						// If no callback function or if callback is not a callable function
						if (!isCallable(callbackfn)) {
							throw new TypeError('Array.prototype.forEach callback must be a function');
						}

						while (++i < length) {
							if (i in self) {
								// Invoke the callback function with call, passing arguments:
								// context, property value, property key, thisArg object
								if (typeof T === 'undefined') {
									callbackfn(self[i], i, object);
								} else {
									callbackfn.call(T, self[i], i, object);
								}
							}
						}
					}
				}, !properlyBoxesContext(ArrayPrototype.forEach));

				// ES5 15.4.4.19
				// http://es5.github.com/#x15.4.4.19
				// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
				defineProperties(ArrayPrototype, {
					map: function map(callbackfn/*, thisArg*/) {
						var object = ES.ToObject(this);
						var self = splitString && isString(this) ? strSplit(this, '') : object;
						var length = ES.ToUint32(self.length);
						var result = $Array(length);
						var T;
						if (arguments.length > 1) {
							T = arguments[1];
						}

						// If no callback function or if callback is not a callable function
						if (!isCallable(callbackfn)) {
							throw new TypeError('Array.prototype.map callback must be a function');
						}

						for (var i = 0; i < length; i++) {
							if (i in self) {
								if (typeof T === 'undefined') {
									result[i] = callbackfn(self[i], i, object);
								} else {
									result[i] = callbackfn.call(T, self[i], i, object);
								}
							}
						}
						return result;
					}
				}, !properlyBoxesContext(ArrayPrototype.map));

				// ES5 15.4.4.20
				// http://es5.github.com/#x15.4.4.20
				// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
				defineProperties(ArrayPrototype, {
					filter: function filter(callbackfn/*, thisArg*/) {
						var object = ES.ToObject(this);
						var self = splitString && isString(this) ? strSplit(this, '') : object;
						var length = ES.ToUint32(self.length);
						var result = [];
						var value;
						var T;
						if (arguments.length > 1) {
							T = arguments[1];
						}

						// If no callback function or if callback is not a callable function
						if (!isCallable(callbackfn)) {
							throw new TypeError('Array.prototype.filter callback must be a function');
						}

						for (var i = 0; i < length; i++) {
							if (i in self) {
								value = self[i];
								if (typeof T === 'undefined' ? callbackfn(value, i, object) : callbackfn.call(T, value, i, object)) {
									pushCall(result, value);
								}
							}
						}
						return result;
					}
				}, !properlyBoxesContext(ArrayPrototype.filter));

				// ES5 15.4.4.16
				// http://es5.github.com/#x15.4.4.16
				// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
				defineProperties(ArrayPrototype, {
					every: function every(callbackfn/*, thisArg*/) {
						var object = ES.ToObject(this);
						var self = splitString && isString(this) ? strSplit(this, '') : object;
						var length = ES.ToUint32(self.length);
						var T;
						if (arguments.length > 1) {
							T = arguments[1];
						}

						// If no callback function or if callback is not a callable function
						if (!isCallable(callbackfn)) {
							throw new TypeError('Array.prototype.every callback must be a function');
						}

						for (var i = 0; i < length; i++) {
							if (i in self && !(typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
								return false;
							}
						}
						return true;
					}
				}, !properlyBoxesContext(ArrayPrototype.every));

				// ES5 15.4.4.17
				// http://es5.github.com/#x15.4.4.17
				// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
				defineProperties(ArrayPrototype, {
					some: function some(callbackfn/*, thisArg */) {
						var object = ES.ToObject(this);
						var self = splitString && isString(this) ? strSplit(this, '') : object;
						var length = ES.ToUint32(self.length);
						var T;
						if (arguments.length > 1) {
							T = arguments[1];
						}

						// If no callback function or if callback is not a callable function
						if (!isCallable(callbackfn)) {
							throw new TypeError('Array.prototype.some callback must be a function');
						}

						for (var i = 0; i < length; i++) {
							if (i in self && (typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
								return true;
							}
						}
						return false;
					}
				}, !properlyBoxesContext(ArrayPrototype.some));

				// ES5 15.4.4.21
				// http://es5.github.com/#x15.4.4.21
				// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
				var reduceCoercesToObject = false;
				if (ArrayPrototype.reduce) {
					reduceCoercesToObject = typeof ArrayPrototype.reduce.call('es5', function (_, __, ___, list) {
						return list;
					}) === 'object';
				}
				defineProperties(ArrayPrototype, {
					reduce: function reduce(callbackfn/*, initialValue*/) {
						var object = ES.ToObject(this);
						var self = splitString && isString(this) ? strSplit(this, '') : object;
						var length = ES.ToUint32(self.length);

						// If no callback function or if callback is not a callable function
						if (!isCallable(callbackfn)) {
							throw new TypeError('Array.prototype.reduce callback must be a function');
						}

						// no value to return if no initial value and an empty array
						if (length === 0 && arguments.length === 1) {
							throw new TypeError('reduce of empty array with no initial value');
						}

						var i = 0;
						var result;
						if (arguments.length >= 2) {
							result = arguments[1];
						} else {
							do {
								if (i in self) {
									result = self[i++];
									break;
								}

								// if array contains no values, no initial value to return
								if (++i >= length) {
									throw new TypeError('reduce of empty array with no initial value');
								}
							} while (true);
						}

						for (; i < length; i++) {
							if (i in self) {
								result = callbackfn(result, self[i], i, object);
							}
						}

						return result;
					}
				}, !reduceCoercesToObject);

				// ES5 15.4.4.22
				// http://es5.github.com/#x15.4.4.22
				// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
				var reduceRightCoercesToObject = false;
				if (ArrayPrototype.reduceRight) {
					reduceRightCoercesToObject = typeof ArrayPrototype.reduceRight.call('es5', function (_, __, ___, list) {
						return list;
					}) === 'object';
				}
				defineProperties(ArrayPrototype, {
					reduceRight: function reduceRight(callbackfn/*, initial*/) {
						var object = ES.ToObject(this);
						var self = splitString && isString(this) ? strSplit(this, '') : object;
						var length = ES.ToUint32(self.length);

						// If no callback function or if callback is not a callable function
						if (!isCallable(callbackfn)) {
							throw new TypeError('Array.prototype.reduceRight callback must be a function');
						}

						// no value to return if no initial value, empty array
						if (length === 0 && arguments.length === 1) {
							throw new TypeError('reduceRight of empty array with no initial value');
						}

						var result;
						var i = length - 1;
						if (arguments.length >= 2) {
							result = arguments[1];
						} else {
							do {
								if (i in self) {
									result = self[i--];
									break;
								}

								// if array contains no values, no initial value to return
								if (--i < 0) {
									throw new TypeError('reduceRight of empty array with no initial value');
								}
							} while (true);
						}

						if (i < 0) {
							return result;
						}

						do {
							if (i in self) {
								result = callbackfn(result, self[i], i, object);
							}
						} while (i--);

						return result;
					}
				}, !reduceRightCoercesToObject);

				// ES5 15.4.4.14
				// http://es5.github.com/#x15.4.4.14
				// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
				var hasFirefox2IndexOfBug = ArrayPrototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
				defineProperties(ArrayPrototype, {
					indexOf: function indexOf(searchElement/*, fromIndex */) {
						var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
						var length = ES.ToUint32(self.length);

						if (length === 0) {
							return -1;
						}

						var i = 0;
						if (arguments.length > 1) {
							i = ES.ToInteger(arguments[1]);
						}

						// handle negative indices
						i = i >= 0 ? i : max(0, length + i);
						for (; i < length; i++) {
							if (i in self && self[i] === searchElement) {
								return i;
							}
						}
						return -1;
					}
				}, hasFirefox2IndexOfBug);

				// ES5 15.4.4.15
				// http://es5.github.com/#x15.4.4.15
				// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
				var hasFirefox2LastIndexOfBug = ArrayPrototype.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
				defineProperties(ArrayPrototype, {
					lastIndexOf: function lastIndexOf(searchElement/*, fromIndex */) {
						var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
						var length = ES.ToUint32(self.length);

						if (length === 0) {
							return -1;
						}
						var i = length - 1;
						if (arguments.length > 1) {
							i = min(i, ES.ToInteger(arguments[1]));
						}
						// handle negative indices
						i = i >= 0 ? i : length - Math.abs(i);
						for (; i >= 0; i--) {
							if (i in self && searchElement === self[i]) {
								return i;
							}
						}
						return -1;
					}
				}, hasFirefox2LastIndexOfBug);

				// ES5 15.4.4.12
				// http://es5.github.com/#x15.4.4.12
				var spliceNoopReturnsEmptyArray = (function () {
					var a = [1, 2];
					var result = a.splice();
					return a.length === 2 && isArray(result) && result.length === 0;
				}());
				defineProperties(ArrayPrototype, {
					// Safari 5.0 bug where .splice() returns undefined
					splice: function splice(start, deleteCount) {
						if (arguments.length === 0) {
							return [];
						} else {
							return array_splice.apply(this, arguments);
						}
					}
				}, !spliceNoopReturnsEmptyArray);

				var spliceWorksWithEmptyObject = (function () {
					var obj = {};
					ArrayPrototype.splice.call(obj, 0, 0, 1);
					return obj.length === 1;
				}());
				defineProperties(ArrayPrototype, {
					splice: function splice(start, deleteCount) {
						if (arguments.length === 0) {
							return [];
						}
						var args = arguments;
						this.length = max(ES.ToInteger(this.length), 0);
						if (arguments.length > 0 && typeof deleteCount !== 'number') {
							args = arraySlice(arguments);
							if (args.length < 2) {
								pushCall(args, this.length - start);
							} else {
								args[1] = ES.ToInteger(deleteCount);
							}
						}
						return array_splice.apply(this, args);
					}
				}, !spliceWorksWithEmptyObject);
				var spliceWorksWithLargeSparseArrays = (function () {
					// Per https://github.com/es-shims/es5-shim/issues/295
					// Safari 7/8 breaks with sparse arrays of size 1e5 or greater
					var arr = new $Array(1e5);
					// note: the index MUST be 8 or larger or the test will false pass
					arr[8] = 'x';
					arr.splice(1, 1);
					// note: this test must be defined *after* the indexOf shim
					// per https://github.com/es-shims/es5-shim/issues/313
					return arr.indexOf('x') === 7;
				}());
				var spliceWorksWithSmallSparseArrays = (function () {
					// Per https://github.com/es-shims/es5-shim/issues/295
					// Opera 12.15 breaks on this, no idea why.
					var n = 256;
					var arr = [];
					arr[n] = 'a';
					arr.splice(n + 1, 0, 'b');
					return arr[n] === 'a';
				}());
				defineProperties(ArrayPrototype, {
					splice: function splice(start, deleteCount) {
						var O = ES.ToObject(this);
						var A = [];
						var len = ES.ToUint32(O.length);
						var relativeStart = ES.ToInteger(start);
						var actualStart = relativeStart < 0 ? max((len + relativeStart), 0) : min(relativeStart, len);
						var actualDeleteCount = min(max(ES.ToInteger(deleteCount), 0), len - actualStart);

						var k = 0;
						var from;
						while (k < actualDeleteCount) {
							from = $String(actualStart + k);
							if (owns(O, from)) {
								A[k] = O[from];
							}
							k += 1;
						}

						var items = arraySlice(arguments, 2);
						var itemCount = items.length;
						var to;
						if (itemCount < actualDeleteCount) {
							k = actualStart;
							var maxK = len - actualDeleteCount;
							while (k < maxK) {
								from = $String(k + actualDeleteCount);
								to = $String(k + itemCount);
								if (owns(O, from)) {
									O[to] = O[from];
								} else {
									delete O[to];
								}
								k += 1;
							}
							k = len;
							var minK = len - actualDeleteCount + itemCount;
							while (k > minK) {
								delete O[k - 1];
								k -= 1;
							}
						} else if (itemCount > actualDeleteCount) {
							k = len - actualDeleteCount;
							while (k > actualStart) {
								from = $String(k + actualDeleteCount - 1);
								to = $String(k + itemCount - 1);
								if (owns(O, from)) {
									O[to] = O[from];
								} else {
									delete O[to];
								}
								k -= 1;
							}
						}
						k = actualStart;
						for (var i = 0; i < items.length; ++i) {
							O[k] = items[i];
							k += 1;
						}
						O.length = len - actualDeleteCount + itemCount;

						return A;
					}
				}, !spliceWorksWithLargeSparseArrays || !spliceWorksWithSmallSparseArrays);

				var originalJoin = ArrayPrototype.join;
				var hasStringJoinBug;
				try {
					hasStringJoinBug = Array.prototype.join.call('123', ',') !== '1,2,3';
				} catch (e) {
					hasStringJoinBug = true;
				}
				if (hasStringJoinBug) {
					defineProperties(ArrayPrototype, {
						join: function join(separator) {
							var sep = typeof separator === 'undefined' ? ',' : separator;
							return originalJoin.call(isString(this) ? strSplit(this, '') : this, sep);
						}
					}, hasStringJoinBug);
				}

				var hasJoinUndefinedBug = [1, 2].join(undefined) !== '1,2';
				if (hasJoinUndefinedBug) {
					defineProperties(ArrayPrototype, {
						join: function join(separator) {
							var sep = typeof separator === 'undefined' ? ',' : separator;
							return originalJoin.call(this, sep);
						}
					}, hasJoinUndefinedBug);
				}

				var pushShim = function push(item) {
					var O = ES.ToObject(this);
					var n = ES.ToUint32(O.length);
					var i = 0;
					while (i < arguments.length) {
						O[n + i] = arguments[i];
						i += 1;
					}
					O.length = n + i;
					return n + i;
				};

				var pushIsNotGeneric = (function () {
					var obj = {};
					var result = Array.prototype.push.call(obj, undefined);
					return result !== 1 || obj.length !== 1 || typeof obj[0] !== 'undefined' || !owns(obj, 0);
				}());
				defineProperties(ArrayPrototype, {
					push: function push(item) {
						if (isArray(this)) {
							return array_push.apply(this, arguments);
						}
						return pushShim.apply(this, arguments);
					}
				}, pushIsNotGeneric);

				// This fixes a very weird bug in Opera 10.6 when pushing `undefined
				var pushUndefinedIsWeird = (function () {
					var arr = [];
					var result = arr.push(undefined);
					return result !== 1 || arr.length !== 1 || typeof arr[0] !== 'undefined' || !owns(arr, 0);
				}());
				defineProperties(ArrayPrototype, { push: pushShim }, pushUndefinedIsWeird);

				// ES5 15.2.3.14
				// http://es5.github.io/#x15.4.4.10
				// Fix boxed string bug
				defineProperties(ArrayPrototype, {
					slice: function (start, end) {
						var arr = isString(this) ? strSplit(this, '') : this;
						return arraySliceApply(arr, arguments);
					}
				}, splitString);

				var sortIgnoresNonFunctions = (function () {
					try {
						[1, 2].sort(null);
						[1, 2].sort({});
						return true;
					} catch (e) { }
					return false;
				}());
				var sortThrowsOnRegex = (function () {
					// this is a problem in Firefox 4, in which `typeof /a/ === 'function'`
					try {
						[1, 2].sort(/a/);
						return false;
					} catch (e) { }
					return true;
				}());
				var sortIgnoresUndefined = (function () {
					// applies in IE 8, for one.
					try {
						[1, 2].sort(undefined);
						return true;
					} catch (e) { }
					return false;
				}());
				defineProperties(ArrayPrototype, {
					sort: function sort(compareFn) {
						if (typeof compareFn === 'undefined') {
							return arraySort(this);
						}
						if (!isCallable(compareFn)) {
							throw new TypeError('Array.prototype.sort callback must be a function');
						}
						return arraySort(this, compareFn);
					}
				}, sortIgnoresNonFunctions || !sortIgnoresUndefined || !sortThrowsOnRegex);

				//
				// Object
				// ======
				//

				// ES5 15.2.3.14
				// http://es5.github.com/#x15.2.3.14

				// http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
				var hasDontEnumBug = !isEnum({ 'toString': null }, 'toString');
				var hasProtoEnumBug = isEnum(function () { }, 'prototype');
				var hasStringEnumBug = !owns('x', '0');
				var equalsConstructorPrototype = function (o) {
					var ctor = o.constructor;
					return ctor && ctor.prototype === o;
				};
				var excludedKeys = {
					$window: true,
					$console: true,
					$parent: true,
					$self: true,
					$frame: true,
					$frames: true,
					$frameElement: true,
					$webkitIndexedDB: true,
					$webkitStorageInfo: true,
					$external: true,
					$width: true,
					$height: true
				};
				var hasAutomationEqualityBug = (function () {
					/* globals window */
					if (typeof window === 'undefined') {
						return false;
					}
					for (var k in window) {
						try {
							if (!excludedKeys['$' + k] && owns(window, k) && window[k] !== null && typeof window[k] === 'object') {
								equalsConstructorPrototype(window[k]);
							}
						} catch (e) {
							return true;
						}
					}
					return false;
				}());
				var equalsConstructorPrototypeIfNotBuggy = function (object) {
					if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
						return equalsConstructorPrototype(object);
					}
					try {
						return equalsConstructorPrototype(object);
					} catch (e) {
						return false;
					}
				};
				var dontEnums = [
					'toString',
					'toLocaleString',
					'valueOf',
					'hasOwnProperty',
					'isPrototypeOf',
					'propertyIsEnumerable',
					'constructor'
				];
				var dontEnumsLength = dontEnums.length;

				// taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
				// can be replaced with require('is-arguments') if we ever use a build process instead
				var isStandardArguments = function isArguments(value) {
					return toStr(value) === '[object Arguments]';
				};
				var isLegacyArguments = function isArguments(value) {
					return value !== null &&
						typeof value === 'object' &&
						typeof value.length === 'number' &&
						value.length >= 0 &&
						!isArray(value) &&
						isCallable(value.callee);
				};
				var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;

				defineProperties($Object, {
					keys: function keys(object) {
						var isFn = isCallable(object);
						var isArgs = isArguments(object);
						var isObject = object !== null && typeof object === 'object';
						var isStr = isObject && isString(object);

						if (!isObject && !isFn && !isArgs) {
							throw new TypeError('Object.keys called on a non-object');
						}

						var theKeys = [];
						var skipProto = hasProtoEnumBug && isFn;
						if ((isStr && hasStringEnumBug) || isArgs) {
							for (var i = 0; i < object.length; ++i) {
								pushCall(theKeys, $String(i));
							}
						}

						if (!isArgs) {
							for (var name in object) {
								if (!(skipProto && name === 'prototype') && owns(object, name)) {
									pushCall(theKeys, $String(name));
								}
							}
						}

						if (hasDontEnumBug) {
							var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
							for (var j = 0; j < dontEnumsLength; j++) {
								var dontEnum = dontEnums[j];
								if (!(skipConstructor && dontEnum === 'constructor') && owns(object, dontEnum)) {
									pushCall(theKeys, dontEnum);
								}
							}
						}
						return theKeys;
					}
				});

				var keysWorksWithArguments = $Object.keys && (function () {
					// Safari 5.0 bug
					return $Object.keys(arguments).length === 2;
				}(1, 2));
				var keysHasArgumentsLengthBug = $Object.keys && (function () {
					var argKeys = $Object.keys(arguments);
					return arguments.length !== 1 || argKeys.length !== 1 || argKeys[0] !== 1;
				}(1));
				var originalKeys = $Object.keys;
				defineProperties($Object, {
					keys: function keys(object) {
						if (isArguments(object)) {
							return originalKeys(arraySlice(object));
						} else {
							return originalKeys(object);
						}
					}
				}, !keysWorksWithArguments || keysHasArgumentsLengthBug);

				//
				// Date
				// ====
				//

				var hasNegativeMonthYearBug = new Date(-3509827329600292).getUTCMonth() !== 0;
				var aNegativeTestDate = new Date(-1509842289600292);
				var aPositiveTestDate = new Date(1449662400000);
				var hasToUTCStringFormatBug = aNegativeTestDate.toUTCString() !== 'Mon, 01 Jan -45875 11:59:59 GMT';
				var hasToDateStringFormatBug;
				var hasToStringFormatBug;
				var timeZoneOffset = aNegativeTestDate.getTimezoneOffset();
				if (timeZoneOffset < -720) {
					hasToDateStringFormatBug = aNegativeTestDate.toDateString() !== 'Tue Jan 02 -45875';
					hasToStringFormatBug = !(/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/).test(aPositiveTestDate.toString());
				} else {
					hasToDateStringFormatBug = aNegativeTestDate.toDateString() !== 'Mon Jan 01 -45875';
					hasToStringFormatBug = !(/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/).test(aPositiveTestDate.toString());
				}

				var originalGetFullYear = call.bind(Date.prototype.getFullYear);
				var originalGetMonth = call.bind(Date.prototype.getMonth);
				var originalGetDate = call.bind(Date.prototype.getDate);
				var originalGetUTCFullYear = call.bind(Date.prototype.getUTCFullYear);
				var originalGetUTCMonth = call.bind(Date.prototype.getUTCMonth);
				var originalGetUTCDate = call.bind(Date.prototype.getUTCDate);
				var originalGetUTCDay = call.bind(Date.prototype.getUTCDay);
				var originalGetUTCHours = call.bind(Date.prototype.getUTCHours);
				var originalGetUTCMinutes = call.bind(Date.prototype.getUTCMinutes);
				var originalGetUTCSeconds = call.bind(Date.prototype.getUTCSeconds);
				var originalGetUTCMilliseconds = call.bind(Date.prototype.getUTCMilliseconds);
				var dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
				var monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
				var daysInMonth = function daysInMonth(month, year) {
					return originalGetDate(new Date(year, month, 0));
				};

				defineProperties(Date.prototype, {
					getFullYear: function getFullYear() {
						if (!this || !(this instanceof Date)) {
							throw new TypeError('this is not a Date object.');
						}
						var year = originalGetFullYear(this);
						if (year < 0 && originalGetMonth(this) > 11) {
							return year + 1;
						}
						return year;
					},
					getMonth: function getMonth() {
						if (!this || !(this instanceof Date)) {
							throw new TypeError('this is not a Date object.');
						}
						var year = originalGetFullYear(this);
						var month = originalGetMonth(this);
						if (year < 0 && month > 11) {
							return 0;
						}
						return month;
					},
					getDate: function getDate() {
						if (!this || !(this instanceof Date)) {
							throw new TypeError('this is not a Date object.');
						}
						var year = originalGetFullYear(this);
						var month = originalGetMonth(this);
						var date = originalGetDate(this);
						if (year < 0 && month > 11) {
							if (month === 12) {
								return date;
							}
							var days = daysInMonth(0, year + 1);
							return (days - date) + 1;
						}
						return date;
					},
					getUTCFullYear: function getUTCFullYear() {
						if (!this || !(this instanceof Date)) {
							throw new TypeError('this is not a Date object.');
						}
						var year = originalGetUTCFullYear(this);
						if (year < 0 && originalGetUTCMonth(this) > 11) {
							return year + 1;
						}
						return year;
					},
					getUTCMonth: function getUTCMonth() {
						if (!this || !(this instanceof Date)) {
							throw new TypeError('this is not a Date object.');
						}
						var year = originalGetUTCFullYear(this);
						var month = originalGetUTCMonth(this);
						if (year < 0 && month > 11) {
							return 0;
						}
						return month;
					},
					getUTCDate: function getUTCDate() {
						if (!this || !(this instanceof Date)) {
							throw new TypeError('this is not a Date object.');
						}
						var year = originalGetUTCFullYear(this);
						var month = originalGetUTCMonth(this);
						var date = originalGetUTCDate(this);
						if (year < 0 && month > 11) {
							if (month === 12) {
								return date;
							}
							var days = daysInMonth(0, year + 1);
							return (days - date) + 1;
						}
						return date;
					}
				}, hasNegativeMonthYearBug);

				defineProperties(Date.prototype, {
					toUTCString: function toUTCString() {
						if (!this || !(this instanceof Date)) {
							throw new TypeError('this is not a Date object.');
						}
						var day = originalGetUTCDay(this);
						var date = originalGetUTCDate(this);
						var month = originalGetUTCMonth(this);
						var year = originalGetUTCFullYear(this);
						var hour = originalGetUTCHours(this);
						var minute = originalGetUTCMinutes(this);
						var second = originalGetUTCSeconds(this);
						return dayName[day] + ', ' +
							(date < 10 ? '0' + date : date) + ' ' +
							monthName[month] + ' ' +
							year + ' ' +
							(hour < 10 ? '0' + hour : hour) + ':' +
							(minute < 10 ? '0' + minute : minute) + ':' +
							(second < 10 ? '0' + second : second) + ' GMT';
					}
				}, hasNegativeMonthYearBug || hasToUTCStringFormatBug);

				// Opera 12 has `,`
				defineProperties(Date.prototype, {
					toDateString: function toDateString() {
						if (!this || !(this instanceof Date)) {
							throw new TypeError('this is not a Date object.');
						}
						var day = this.getDay();
						var date = this.getDate();
						var month = this.getMonth();
						var year = this.getFullYear();
						return dayName[day] + ' ' +
							monthName[month] + ' ' +
							(date < 10 ? '0' + date : date) + ' ' +
							year;
					}
				}, hasNegativeMonthYearBug || hasToDateStringFormatBug);

				// can't use defineProperties here because of toString enumeration issue in IE <= 8
				if (hasNegativeMonthYearBug || hasToStringFormatBug) {
					Date.prototype.toString = function toString() {
						if (!this || !(this instanceof Date)) {
							throw new TypeError('this is not a Date object.');
						}
						var day = this.getDay();
						var date = this.getDate();
						var month = this.getMonth();
						var year = this.getFullYear();
						var hour = this.getHours();
						var minute = this.getMinutes();
						var second = this.getSeconds();
						var timezoneOffset = this.getTimezoneOffset();
						var hoursOffset = Math.floor(Math.abs(timezoneOffset) / 60);
						var minutesOffset = Math.floor(Math.abs(timezoneOffset) % 60);
						return dayName[day] + ' ' +
							monthName[month] + ' ' +
							(date < 10 ? '0' + date : date) + ' ' +
							year + ' ' +
							(hour < 10 ? '0' + hour : hour) + ':' +
							(minute < 10 ? '0' + minute : minute) + ':' +
							(second < 10 ? '0' + second : second) + ' GMT' +
							(timezoneOffset > 0 ? '-' : '+') +
							(hoursOffset < 10 ? '0' + hoursOffset : hoursOffset) +
							(minutesOffset < 10 ? '0' + minutesOffset : minutesOffset);
					};
					if (supportsDescriptors) {
						$Object.defineProperty(Date.prototype, 'toString', {
							configurable: true,
							enumerable: false,
							writable: true
						});
					}
				}

				// ES5 15.9.5.43
				// http://es5.github.com/#x15.9.5.43
				// This function returns a String value represent the instance in time
				// represented by this Date object. The format of the String is the Date Time
				// string format defined in 15.9.1.15. All fields are present in the String.
				// The time zone is always UTC, denoted by the suffix Z. If the time value of
				// this object is not a finite Number a RangeError exception is thrown.
				var negativeDate = -62198755200000;
				var negativeYearString = '-000001';
				var hasNegativeDateBug = Date.prototype.toISOString && new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1;
				var hasSafari51DateBug = Date.prototype.toISOString && new Date(-1).toISOString() !== '1969-12-31T23:59:59.999Z';

				var getTime = call.bind(Date.prototype.getTime);

				defineProperties(Date.prototype, {
					toISOString: function toISOString() {
						if (!isFinite(this) || !isFinite(getTime(this))) {
							// Adope Photoshop requires the second check.
							throw new RangeError('Date.prototype.toISOString called on non-finite value.');
						}

						var year = originalGetUTCFullYear(this);

						var month = originalGetUTCMonth(this);
						// see https://github.com/es-shims/es5-shim/issues/111
						year += Math.floor(month / 12);
						month = ((month % 12) + 12) % 12;

						// the date time string format is specified in 15.9.1.15.
						var result = [month + 1, originalGetUTCDate(this), originalGetUTCHours(this), originalGetUTCMinutes(this), originalGetUTCSeconds(this)];
						year = (
							(year < 0 ? '-' : (year > 9999 ? '+' : '')) +
							strSlice('00000' + Math.abs(year), (0 <= year && year <= 9999) ? -4 : -6)
						);

						for (var i = 0; i < result.length; ++i) {
							// pad months, days, hours, minutes, and seconds to have two digits.
							result[i] = strSlice('00' + result[i], -2);
						}
						// pad milliseconds to have three digits.
						return (
							year + '-' + arraySlice(result, 0, 2).join('-') +
							'T' + arraySlice(result, 2).join(':') + '.' +
							strSlice('000' + originalGetUTCMilliseconds(this), -3) + 'Z'
						);
					}
				}, hasNegativeDateBug || hasSafari51DateBug);

				// ES5 15.9.5.44
				// http://es5.github.com/#x15.9.5.44
				// This function provides a String representation of a Date object for use by
				// JSON.stringify (15.12.3).
				var dateToJSONIsSupported = (function () {
					try {
						return Date.prototype.toJSON &&
							new Date(NaN).toJSON() === null &&
							new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1 &&
							Date.prototype.toJSON.call({ // generic
								toISOString: function () { return true; }
							});
					} catch (e) {
						return false;
					}
				}());
				if (!dateToJSONIsSupported) {
					Date.prototype.toJSON = function toJSON(key) {
						// When the toJSON method is called with argument key, the following
						// steps are taken:

						// 1.  Let O be the result of calling ToObject, giving it the this
						// value as its argument.
						// 2. Let tv be ES.ToPrimitive(O, hint Number).
						var O = $Object(this);
						var tv = ES.ToPrimitive(O);
						// 3. If tv is a Number and is not finite, return null.
						if (typeof tv === 'number' && !isFinite(tv)) {
							return null;
						}
						// 4. Let toISO be the result of calling the [[Get]] internal method of
						// O with argument "toISOString".
						var toISO = O.toISOString;
						// 5. If IsCallable(toISO) is false, throw a TypeError exception.
						if (!isCallable(toISO)) {
							throw new TypeError('toISOString property is not callable');
						}
						// 6. Return the result of calling the [[Call]] internal method of
						//  toISO with O as the this value and an empty argument list.
						return toISO.call(O);

						// NOTE 1 The argument is ignored.

						// NOTE 2 The toJSON function is intentionally generic; it does not
						// require that its this value be a Date object. Therefore, it can be
						// transferred to other kinds of objects for use as a method. However,
						// it does require that any such object have a toISOString method. An
						// object is free to use the argument key to filter its
						// stringification.
					};
				}

				// ES5 15.9.4.2
				// http://es5.github.com/#x15.9.4.2
				// based on work shared by Daniel Friesen (dantman)
				// http://gist.github.com/303249
				var supportsExtendedYears = Date.parse('+033658-09-27T01:46:40.000Z') === 1e15;
				var acceptsInvalidDates = !isNaN(Date.parse('2012-04-04T24:00:00.500Z')) || !isNaN(Date.parse('2012-11-31T23:59:59.000Z')) || !isNaN(Date.parse('2012-12-31T23:59:60.000Z'));
				var doesNotParseY2KNewYear = isNaN(Date.parse('2000-01-01T00:00:00.000Z'));
				if (doesNotParseY2KNewYear || acceptsInvalidDates || !supportsExtendedYears) {
					// XXX global assignment won't work in embeddings that use
					// an alternate object for the context.
					/* global Date: true */
					/* eslint-disable no-undef */
					var maxSafeUnsigned32Bit = Math.pow(2, 31) - 1;
					var hasSafariSignedIntBug = isActualNaN(new Date(1970, 0, 1, 0, 0, 0, maxSafeUnsigned32Bit + 1).getTime());
					/* eslint-disable no-implicit-globals */
					Date = (function (NativeDate) {
						/* eslint-enable no-implicit-globals */
						/* eslint-enable no-undef */
						// Date.length === 7
						var DateShim = function Date(Y, M, D, h, m, s, ms) {
							var length = arguments.length;
							var date;
							if (this instanceof NativeDate) {
								var seconds = s;
								var millis = ms;
								if (hasSafariSignedIntBug && length >= 7 && ms > maxSafeUnsigned32Bit) {
									// work around a Safari 8/9 bug where it treats the seconds as signed
									var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
									var sToShift = Math.floor(msToShift / 1e3);
									seconds += sToShift;
									millis -= sToShift * 1e3;
								}
								date = length === 1 && $String(Y) === Y ? // isString(Y)
									// We explicitly pass it through parse:
									new NativeDate(DateShim.parse(Y)) :
									// We have to manually make calls depending on argument
									// length here
									length >= 7 ? new NativeDate(Y, M, D, h, m, seconds, millis) :
										length >= 6 ? new NativeDate(Y, M, D, h, m, seconds) :
											length >= 5 ? new NativeDate(Y, M, D, h, m) :
												length >= 4 ? new NativeDate(Y, M, D, h) :
													length >= 3 ? new NativeDate(Y, M, D) :
														length >= 2 ? new NativeDate(Y, M) :
															length >= 1 ? new NativeDate(Y instanceof NativeDate ? +Y : Y) :
																new NativeDate();
							} else {
								date = NativeDate.apply(this, arguments);
							}
							if (!isPrimitive(date)) {
								// Prevent mixups with unfixed Date object
								defineProperties(date, { constructor: DateShim }, true);
							}
							return date;
						};

						// 15.9.1.15 Date Time String Format.
						var isoDateExpression = new RegExp('^' +
							'(\\d{4}|[+-]\\d{6})' + // four-digit year capture or sign +
							// 6-digit extended year
							'(?:-(\\d{2})' + // optional month capture
							'(?:-(\\d{2})' + // optional day capture
							'(?:' + // capture hours:minutes:seconds.milliseconds
							'T(\\d{2})' + // hours capture
							':(\\d{2})' + // minutes capture
							'(?:' + // optional :seconds.milliseconds
							':(\\d{2})' + // seconds capture
							'(?:(\\.\\d{1,}))?' + // milliseconds capture
							')?' +
							'(' + // capture UTC offset component
							'Z|' + // UTC capture
							'(?:' + // offset specifier +/-hours:minutes
							'([-+])' + // sign capture
							'(\\d{2})' + // hours offset capture
							':(\\d{2})' + // minutes offset capture
							')' +
							')?)?)?)?' +
							'$');

						var months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

						var dayFromMonth = function dayFromMonth(year, month) {
							var t = month > 1 ? 1 : 0;
							return (
								months[month] +
								Math.floor((year - 1969 + t) / 4) -
								Math.floor((year - 1901 + t) / 100) +
								Math.floor((year - 1601 + t) / 400) +
								(365 * (year - 1970))
							);
						};

						var toUTC = function toUTC(t) {
							var s = 0;
							var ms = t;
							if (hasSafariSignedIntBug && ms > maxSafeUnsigned32Bit) {
								// work around a Safari 8/9 bug where it treats the seconds as signed
								var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
								var sToShift = Math.floor(msToShift / 1e3);
								s += sToShift;
								ms -= sToShift * 1e3;
							}
							return $Number(new NativeDate(1970, 0, 1, 0, 0, s, ms));
						};

						// Copy any custom methods a 3rd party library may have added
						for (var key in NativeDate) {
							if (owns(NativeDate, key)) {
								DateShim[key] = NativeDate[key];
							}
						}

						// Copy "native" methods explicitly; they may be non-enumerable
						defineProperties(DateShim, {
							now: NativeDate.now,
							UTC: NativeDate.UTC
						}, true);
						DateShim.prototype = NativeDate.prototype;
						defineProperties(DateShim.prototype, { constructor: DateShim }, true);

						// Upgrade Date.parse to handle simplified ISO 8601 strings
						var parseShim = function parse(string) {
							var match = isoDateExpression.exec(string);
							if (match) {
								// parse months, days, hours, minutes, seconds, and milliseconds
								// provide default values if necessary
								// parse the UTC offset component
								var year = $Number(match[1]),
									month = $Number(match[2] || 1) - 1,
									day = $Number(match[3] || 1) - 1,
									hour = $Number(match[4] || 0),
									minute = $Number(match[5] || 0),
									second = $Number(match[6] || 0),
									millisecond = Math.floor($Number(match[7] || 0) * 1000),
									// When time zone is missed, local offset should be used
									// (ES 5.1 bug)
									// see https://bugs.ecmascript.org/show_bug.cgi?id=112
									isLocalTime = Boolean(match[4] && !match[8]),
									signOffset = match[9] === '-' ? 1 : -1,
									hourOffset = $Number(match[10] || 0),
									minuteOffset = $Number(match[11] || 0),
									result;
								var hasMinutesOrSecondsOrMilliseconds = minute > 0 || second > 0 || millisecond > 0;
								if (
									hour < (hasMinutesOrSecondsOrMilliseconds ? 24 : 25) &&
									minute < 60 && second < 60 && millisecond < 1000 &&
									month > -1 && month < 12 && hourOffset < 24 &&
									minuteOffset < 60 && // detect invalid offsets
									day > -1 &&
									day < (dayFromMonth(year, month + 1) - dayFromMonth(year, month))
								) {
									result = (
										((dayFromMonth(year, month) + day) * 24) +
										hour +
										(hourOffset * signOffset)
									) * 60;
									result = ((
										((result + minute + (minuteOffset * signOffset)) * 60) +
										second
									) * 1000) + millisecond;
									if (isLocalTime) {
										result = toUTC(result);
									}
									if (-8.64e15 <= result && result <= 8.64e15) {
										return result;
									}
								}
								return NaN;
							}
							return NativeDate.parse.apply(this, arguments);
						};
						defineProperties(DateShim, { parse: parseShim });

						return DateShim;
					}(Date));
					/* global Date: false */
				}

				// ES5 15.9.4.4
				// http://es5.github.com/#x15.9.4.4
				if (!Date.now) {
					Date.now = function now() {
						return new Date().getTime();
					};
				}

				//
				// Number
				// ======
				//

				// ES5.1 15.7.4.5
				// http://es5.github.com/#x15.7.4.5
				var hasToFixedBugs = NumberPrototype.toFixed && (
					(0.00008).toFixed(3) !== '0.000' ||
					(0.9).toFixed(0) !== '1' ||
					(1.255).toFixed(2) !== '1.25' ||
					(1000000000000000128).toFixed(0) !== '1000000000000000128'
				);

				var toFixedHelpers = {
					base: 1e7,
					size: 6,
					data: [0, 0, 0, 0, 0, 0],
					multiply: function multiply(n, c) {
						var i = -1;
						var c2 = c;
						while (++i < toFixedHelpers.size) {
							c2 += n * toFixedHelpers.data[i];
							toFixedHelpers.data[i] = c2 % toFixedHelpers.base;
							c2 = Math.floor(c2 / toFixedHelpers.base);
						}
					},
					divide: function divide(n) {
						var i = toFixedHelpers.size;
						var c = 0;
						while (--i >= 0) {
							c += toFixedHelpers.data[i];
							toFixedHelpers.data[i] = Math.floor(c / n);
							c = (c % n) * toFixedHelpers.base;
						}
					},
					numToString: function numToString() {
						var i = toFixedHelpers.size;
						var s = '';
						while (--i >= 0) {
							if (s !== '' || i === 0 || toFixedHelpers.data[i] !== 0) {
								var t = $String(toFixedHelpers.data[i]);
								if (s === '') {
									s = t;
								} else {
									s += strSlice('0000000', 0, 7 - t.length) + t;
								}
							}
						}
						return s;
					},
					pow: function pow(x, n, acc) {
						return (n === 0 ? acc : (n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)));
					},
					log: function log(x) {
						var n = 0;
						var x2 = x;
						while (x2 >= 4096) {
							n += 12;
							x2 /= 4096;
						}
						while (x2 >= 2) {
							n += 1;
							x2 /= 2;
						}
						return n;
					}
				};

				var toFixedShim = function toFixed(fractionDigits) {
					var f, x, s, m, e, z, j, k;

					// Test for NaN and round fractionDigits down
					f = $Number(fractionDigits);
					f = isActualNaN(f) ? 0 : Math.floor(f);

					if (f < 0 || f > 20) {
						throw new RangeError('Number.toFixed called with invalid number of decimals');
					}

					x = $Number(this);

					if (isActualNaN(x)) {
						return 'NaN';
					}

					// If it is too big or small, return the string value of the number
					if (x <= -1e21 || x >= 1e21) {
						return $String(x);
					}

					s = '';

					if (x < 0) {
						s = '-';
						x = -x;
					}

					m = '0';

					if (x > 1e-21) {
						// 1e-21 < x < 1e21
						// -70 < log2(x) < 70
						e = toFixedHelpers.log(x * toFixedHelpers.pow(2, 69, 1)) - 69;
						z = (e < 0 ? x * toFixedHelpers.pow(2, -e, 1) : x / toFixedHelpers.pow(2, e, 1));
						z *= 0x10000000000000; // Math.pow(2, 52);
						e = 52 - e;

						// -18 < e < 122
						// x = z / 2 ^ e
						if (e > 0) {
							toFixedHelpers.multiply(0, z);
							j = f;

							while (j >= 7) {
								toFixedHelpers.multiply(1e7, 0);
								j -= 7;
							}

							toFixedHelpers.multiply(toFixedHelpers.pow(10, j, 1), 0);
							j = e - 1;

							while (j >= 23) {
								toFixedHelpers.divide(1 << 23);
								j -= 23;
							}

							toFixedHelpers.divide(1 << j);
							toFixedHelpers.multiply(1, 1);
							toFixedHelpers.divide(2);
							m = toFixedHelpers.numToString();
						} else {
							toFixedHelpers.multiply(0, z);
							toFixedHelpers.multiply(1 << (-e), 0);
							m = toFixedHelpers.numToString() + strSlice('0.00000000000000000000', 2, 2 + f);
						}
					}

					if (f > 0) {
						k = m.length;

						if (k <= f) {
							m = s + strSlice('0.0000000000000000000', 0, f - k + 2) + m;
						} else {
							m = s + strSlice(m, 0, k - f) + '.' + strSlice(m, k - f);
						}
					} else {
						m = s + m;
					}

					return m;
				};
				defineProperties(NumberPrototype, { toFixed: toFixedShim }, hasToFixedBugs);

				var hasToPrecisionUndefinedBug = (function () {
					try {
						return 1.0.toPrecision(undefined) === '1';
					} catch (e) {
						return true;
					}
				}());
				var originalToPrecision = NumberPrototype.toPrecision;
				defineProperties(NumberPrototype, {
					toPrecision: function toPrecision(precision) {
						return typeof precision === 'undefined' ? originalToPrecision.call(this) : originalToPrecision.call(this, precision);
					}
				}, hasToPrecisionUndefinedBug);

				//
				// String
				// ======
				//

				// ES5 15.5.4.14
				// http://es5.github.com/#x15.5.4.14

				// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
				// Many browsers do not split properly with regular expressions or they
				// do not perform the split correctly under obscure conditions.
				// See http://blog.stevenlevithan.com/archives/cross-browser-split
				// I've tested in many browsers and this seems to cover the deviant ones:
				//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
				//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
				//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
				//       [undefined, "t", undefined, "e", ...]
				//    ''.split(/.?/) should be [], not [""]
				//    '.'.split(/()()/) should be ["."], not ["", "", "."]

				if (
					'ab'.split(/(?:ab)*/).length !== 2 ||
					'.'.split(/(.?)(.?)/).length !== 4 ||
					'tesst'.split(/(s)*/)[1] === 't' ||
					'test'.split(/(?:)/, -1).length !== 4 ||
					''.split(/.?/).length ||
					'.'.split(/()()/).length > 1
				) {
					(function () {
						var compliantExecNpcg = typeof (/()??/).exec('')[1] === 'undefined'; // NPCG: nonparticipating capturing group
						var maxSafe32BitInt = Math.pow(2, 32) - 1;

						StringPrototype.split = function (separator, limit) {
							var string = String(this);
							if (typeof separator === 'undefined' && limit === 0) {
								return [];
							}

							// If `separator` is not a regex, use native split
							if (!isRegex(separator)) {
								return strSplit(this, separator, limit);
							}

							var output = [];
							var flags = (separator.ignoreCase ? 'i' : '') +
								(separator.multiline ? 'm' : '') +
								(separator.unicode ? 'u' : '') + // in ES6
								(separator.sticky ? 'y' : ''), // Firefox 3+ and ES6
								lastLastIndex = 0,
								// Make `global` and avoid `lastIndex` issues by working with a copy
								separator2, match, lastIndex, lastLength;
							var separatorCopy = new RegExp(separator.source, flags + 'g');
							if (!compliantExecNpcg) {
								// Doesn't need flags gy, but they don't hurt
								separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
							}
							/* Values for `limit`, per the spec:
							 * If undefined: 4294967295 // maxSafe32BitInt
							 * If 0, Infinity, or NaN: 0
							 * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
							 * If negative number: 4294967296 - Math.floor(Math.abs(limit))
							 * If other: Type-convert, then use the above rules
							 */
							var splitLimit = typeof limit === 'undefined' ? maxSafe32BitInt : ES.ToUint32(limit);
							match = separatorCopy.exec(string);
							while (match) {
								// `separatorCopy.lastIndex` is not reliable cross-browser
								lastIndex = match.index + match[0].length;
								if (lastIndex > lastLastIndex) {
									pushCall(output, strSlice(string, lastLastIndex, match.index));
									// Fix browsers whose `exec` methods don't consistently return `undefined` for
									// nonparticipating capturing groups
									if (!compliantExecNpcg && match.length > 1) {
										/* eslint-disable no-loop-func */
										match[0].replace(separator2, function () {
											for (var i = 1; i < arguments.length - 2; i++) {
												if (typeof arguments[i] === 'undefined') {
													match[i] = void 0;
												}
											}
										});
										/* eslint-enable no-loop-func */
									}
									if (match.length > 1 && match.index < string.length) {
										array_push.apply(output, arraySlice(match, 1));
									}
									lastLength = match[0].length;
									lastLastIndex = lastIndex;
									if (output.length >= splitLimit) {
										break;
									}
								}
								if (separatorCopy.lastIndex === match.index) {
									separatorCopy.lastIndex++; // Avoid an infinite loop
								}
								match = separatorCopy.exec(string);
							}
							if (lastLastIndex === string.length) {
								if (lastLength || !separatorCopy.test('')) {
									pushCall(output, '');
								}
							} else {
								pushCall(output, strSlice(string, lastLastIndex));
							}
							return output.length > splitLimit ? arraySlice(output, 0, splitLimit) : output;
						};
					}());

					// [bugfix, chrome]
					// If separator is undefined, then the result array contains just one String,
					// which is the this value (converted to a String). If limit is not undefined,
					// then the output array is truncated so that it contains no more than limit
					// elements.
					// "0".split(undefined, 0) -> []
				} else if ('0'.split(void 0, 0).length) {
					StringPrototype.split = function split(separator, limit) {
						if (typeof separator === 'undefined' && limit === 0) {
							return [];
						}
						return strSplit(this, separator, limit);
					};
				}

				var str_replace = StringPrototype.replace;
				var replaceReportsGroupsCorrectly = (function () {
					var groups = [];
					'x'.replace(/x(.)?/g, function (match, group) {
						pushCall(groups, group);
					});
					return groups.length === 1 && typeof groups[0] === 'undefined';
				}());

				if (!replaceReportsGroupsCorrectly) {
					StringPrototype.replace = function replace(searchValue, replaceValue) {
						var isFn = isCallable(replaceValue);
						var hasCapturingGroups = isRegex(searchValue) && (/\)[*?]/).test(searchValue.source);
						if (!isFn || !hasCapturingGroups) {
							return str_replace.call(this, searchValue, replaceValue);
						} else {
							var wrappedReplaceValue = function (match) {
								var length = arguments.length;
								var originalLastIndex = searchValue.lastIndex;
								searchValue.lastIndex = 0;
								var args = searchValue.exec(match) || [];
								searchValue.lastIndex = originalLastIndex;
								pushCall(args, arguments[length - 2], arguments[length - 1]);
								return replaceValue.apply(this, args);
							};
							return str_replace.call(this, searchValue, wrappedReplaceValue);
						}
					};
				}

				// ECMA-262, 3rd B.2.3
				// Not an ECMAScript standard, although ECMAScript 3rd Edition has a
				// non-normative section suggesting uniform semantics and it should be
				// normalized across all browsers
				// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
				var string_substr = StringPrototype.substr;
				var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
				defineProperties(StringPrototype, {
					substr: function substr(start, length) {
						var normalizedStart = start;
						if (start < 0) {
							normalizedStart = max(this.length + start, 0);
						}
						return string_substr.call(this, normalizedStart, length);
					}
				}, hasNegativeSubstrBug);

				// ES5 15.5.4.20
				// whitespace from: http://es5.github.io/#x15.5.4.20
				var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
					'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
					'\u2029\uFEFF';
				var zeroWidth = '\u200b';
				var wsRegexChars = '[' + ws + ']';
				var trimBeginRegexp = new RegExp('^' + wsRegexChars + wsRegexChars + '*');
				var trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + '*$');
				var hasTrimWhitespaceBug = StringPrototype.trim && (ws.trim() || !zeroWidth.trim());
				defineProperties(StringPrototype, {
					// http://blog.stevenlevithan.com/archives/faster-trim-javascript
					// http://perfectionkills.com/whitespace-deviations/
					trim: function trim() {
						if (typeof this === 'undefined' || this === null) {
							throw new TypeError("can't convert " + this + ' to object');
						}
						return $String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
					}
				}, hasTrimWhitespaceBug);
				var trim = call.bind(String.prototype.trim);

				var hasLastIndexBug = StringPrototype.lastIndexOf && 'abcあい'.lastIndexOf('あい', 2) !== -1;
				defineProperties(StringPrototype, {
					lastIndexOf: function lastIndexOf(searchString) {
						if (typeof this === 'undefined' || this === null) {
							throw new TypeError("can't convert " + this + ' to object');
						}
						var S = $String(this);
						var searchStr = $String(searchString);
						var numPos = arguments.length > 1 ? $Number(arguments[1]) : NaN;
						var pos = isActualNaN(numPos) ? Infinity : ES.ToInteger(numPos);
						var start = min(max(pos, 0), S.length);
						var searchLen = searchStr.length;
						var k = start + searchLen;
						while (k > 0) {
							k = max(0, k - searchLen);
							var index = strIndexOf(strSlice(S, k, start + searchLen), searchStr);
							if (index !== -1) {
								return k + index;
							}
						}
						return -1;
					}
				}, hasLastIndexBug);

				var originalLastIndexOf = StringPrototype.lastIndexOf;
				defineProperties(StringPrototype, {
					lastIndexOf: function lastIndexOf(searchString) {
						return originalLastIndexOf.apply(this, arguments);
					}
				}, StringPrototype.lastIndexOf.length !== 1);

				// ES-5 15.1.2.2
				/* eslint-disable radix */
				if (parseInt(ws + '08') !== 8 || parseInt(ws + '0x16') !== 22) {
					/* eslint-enable radix */
					/* global parseInt: true */
					parseInt = (function (origParseInt) {
						var hexRegex = /^[\-+]?0[xX]/;
						return function parseInt(str, radix) {
							var string = trim(String(str));
							var defaultedRadix = $Number(radix) || (hexRegex.test(string) ? 16 : 10);
							return origParseInt(string, defaultedRadix);
						};
					}(parseInt));
				}

				// https://es5.github.io/#x15.1.2.3
				if (1 / parseFloat('-0') !== -Infinity) {
					/* global parseFloat: true */
					parseFloat = (function (origParseFloat) {
						return function parseFloat(string) {
							var inputString = trim(String(string));
							var result = origParseFloat(inputString);
							return result === 0 && strSlice(inputString, 0, 1) === '-' ? -0 : result;
						};
					}(parseFloat));
				}

				if (String(new RangeError('test')) !== 'RangeError: test') {
					var errorToStringShim = function toString() {
						if (typeof this === 'undefined' || this === null) {
							throw new TypeError("can't convert " + this + ' to object');
						}
						var name = this.name;
						if (typeof name === 'undefined') {
							name = 'Error';
						} else if (typeof name !== 'string') {
							name = $String(name);
						}
						var msg = this.message;
						if (typeof msg === 'undefined') {
							msg = '';
						} else if (typeof msg !== 'string') {
							msg = $String(msg);
						}
						if (!name) {
							return msg;
						}
						if (!msg) {
							return name;
						}
						return name + ': ' + msg;
					};
					// can't use defineProperties here because of toString enumeration issue in IE <= 8
					Error.prototype.toString = errorToStringShim;
				}

				if (supportsDescriptors) {
					var ensureNonEnumerable = function (obj, prop) {
						if (isEnum(obj, prop)) {
							var desc = Object.getOwnPropertyDescriptor(obj, prop);
							if (desc.configurable) {
								desc.enumerable = false;
								Object.defineProperty(obj, prop, desc);
							}
						}
					};
					ensureNonEnumerable(Error.prototype, 'message');
					if (Error.prototype.message !== '') {
						Error.prototype.message = '';
					}
					ensureNonEnumerable(Error.prototype, 'name');
				}

				if (String(/a/mig) !== '/a/gim') {
					var regexToString = function toString() {
						var str = '/' + this.source + '/';
						if (this.global) {
							str += 'g';
						}
						if (this.ignoreCase) {
							str += 'i';
						}
						if (this.multiline) {
							str += 'm';
						}
						return str;
					};
					// can't use defineProperties here because of toString enumeration issue in IE <= 8
					RegExp.prototype.toString = regexToString;
				}
			}));

			/***/
		}),
/* 2 */
/***/ (function (module, exports) {

			// Copyright 2006 Google Inc.
			//
			// Licensed under the Apache License, Version 2.0 (the "License");
			// you may not use this file except in compliance with the License.
			// You may obtain a copy of the License at
			//
			//   http://www.apache.org/licenses/LICENSE-2.0
			//
			// Unless required by applicable law or agreed to in writing, software
			// distributed under the License is distributed on an "AS IS" BASIS,
			// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
			// See the License for the specific language governing permissions and
			// limitations under the License.


			// Known Issues:
			//
			// * Patterns only support repeat.
			// * Radial gradient are not implemented. The VML version of these look very
			//   different from the canvas one.
			// * Clipping paths are not implemented.
			// * Coordsize. The width and height attribute have higher priority than the
			//   width and height style values which isn't correct.
			// * Painting mode isn't implemented.
			// * Canvas width/height should is using content-box by default. IE in
			//   Quirks mode will draw the canvas using border-box. Either change your
			//   doctype to HTML5
			//   (http://www.whatwg.org/specs/web-apps/current-work/#the-doctype)
			//   or use Box Sizing Behavior from WebFX
			//   (http://webfx.eae.net/dhtml/boxsizing/boxsizing.html)
			// * Non uniform scaling does not correctly scale strokes.
			// * Optimize. There is always room for speed improvements.

			// Only add this code if we do not already have a canvas implementation
			if (!document.createElement('canvas').getContext) {

				(function () {

					// alias some functions to make (compiled) code shorter
					var m = Math;
					var mr = m.round;
					var ms = m.sin;
					var mc = m.cos;
					var abs = m.abs;
					var sqrt = m.sqrt;

					// this is used for sub pixel precision
					var Z = 10;
					var Z2 = Z / 2;

					var IE_VERSION = +navigator.userAgent.match(/MSIE ([\d.]+)?/)[1];

					/**
					 * This funtion is assigned to the <canvas> elements as element.getContext().
					 * @this {HTMLElement}
					 * @return {CanvasRenderingContext2D_}
					 */
					function getContext() {
						return this.context_ ||
							(this.context_ = new CanvasRenderingContext2D_(this));
					}

					var slice = Array.prototype.slice;

					/**
					 * Binds a function to an object. The returned function will always use the
					 * passed in {@code obj} as {@code this}.
					 *
					 * Example:
					 *
					 *   g = bind(f, obj, a, b)
					 *   g(c, d) // will do f.call(obj, a, b, c, d)
					 *
					 * @param {Function} f The function to bind the object to
					 * @param {Object} obj The object that should act as this when the function
					 *     is called
					 * @param {*} var_args Rest arguments that will be used as the initial
					 *     arguments when the function is called
					 * @return {Function} A new function that has bound this
					 */
					function bind(f, obj, var_args) {
						var a = slice.call(arguments, 2);
						return function () {
							return f.apply(obj, a.concat(slice.call(arguments)));
						};
					}

					function encodeHtmlAttribute(s) {
						return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
					}

					function addNamespace(doc, prefix, urn) {
						if (!doc.namespaces[prefix]) {
							doc.namespaces.add(prefix, urn, '#default#VML');
						}
					}

					function addNamespacesAndStylesheet(doc) {
						addNamespace(doc, 'g_vml_', 'urn:schemas-microsoft-com:vml');
						addNamespace(doc, 'g_o_', 'urn:schemas-microsoft-com:office:office');

						// Setup default CSS.  Only add one style sheet per document
						if (!doc.styleSheets['ex_canvas_']) {
							var ss = doc.createStyleSheet();
							ss.owningElement.id = 'ex_canvas_';
							ss.cssText = 'canvas{display:inline-block;overflow:hidden;*zoom: 1;*display: inline;' +
								// default size is 300x150 in Gecko and Opera
								'text-align:left;width:300px;height:150px}';
						}
					}

					// Add namespaces and stylesheet at startup.
					addNamespacesAndStylesheet(document);

					var G_vmlCanvasManager_ = {
						init: function (opt_doc) {
							var doc = opt_doc || document;
							// Create a dummy element so that IE will allow canvas elements to be
							// recognized.
							doc.createElement('canvas');
							doc.attachEvent('onreadystatechange', bind(this.init_, this, doc));
						},

						init_: function (doc) {
							// find all canvas elements
							var els = doc.getElementsByTagName('canvas');
							for (var i = 0; i < els.length; i++) {
								this.initElement(els[i]);
							}
						},

						/**
						 * Public initializes a canvas element so that it can be used as canvas
						 * element from now on. This is called automatically before the page is
						 * loaded but if you are creating elements using createElement you need to
						 * make sure this is called on the element.
						 * @param {HTMLElement} el The canvas element to initialize.
						 * @return {HTMLElement} the element that was created.
						 */
						initElement: function (el) {
							if (!el.getContext) {
								el.getContext = getContext;

								// Add namespaces and stylesheet to document of the element.
								addNamespacesAndStylesheet(el.ownerDocument);

								// Remove fallback content. There is no way to hide text nodes so we
								// just remove all childNodes. We could hide all elements and remove
								// text nodes but who really cares about the fallback content.
								el.innerHTML = '';

								// do not use inline function because that will leak memory
								el.attachEvent('onpropertychange', onPropertyChange);
								el.attachEvent('onresize', onResize);

								var attrs = el.attributes;
								if (attrs.width && attrs.width.specified) {
									// TODO: use runtimeStyle and coordsize
									// el.getContext().setWidth_(attrs.width.nodeValue);
									el.style.width = attrs.width.nodeValue + 'px';
								} else {
									el.width = el.clientWidth;
								}
								if (attrs.height && attrs.height.specified) {
									// TODO: use runtimeStyle and coordsize
									// el.getContext().setHeight_(attrs.height.nodeValue);
									el.style.height = attrs.height.nodeValue + 'px';
								} else {
									el.height = el.clientHeight;
								}
								//el.getContext().setCoordsize_()
							}
							return el;
						}
					};

					function onPropertyChange(e) {

						var el = e.srcElement;

						switch (e.propertyName) {
							case 'width':
								el.getContext().clearRect();
								el.style.width = el.attributes.width.nodeValue + 'px';
								// In IE8 this does not trigger onresize.
								el.firstChild.style.width = el.clientWidth + 'px';
								break;
							case 'height':
								el.getContext().clearRect();
								el.style.height = el.attributes.height.nodeValue + 'px';
								el.firstChild.style.height = el.clientHeight + 'px';
								break;
						}
					}

					function onResize(e) {
						var el = e.srcElement;
						if (el.firstChild) {
							el.firstChild.style.width = el.clientWidth + 'px';
							el.firstChild.style.height = el.clientHeight + 'px';
						}
					}

					G_vmlCanvasManager_.init();

					// precompute "00" to "FF"
					var decToHex = [];
					for (var i = 0; i < 16; i++) {
						for (var j = 0; j < 16; j++) {
							decToHex[i * 16 + j] = i.toString(16) + j.toString(16);
						}
					}

					function createMatrixIdentity() {
						return [
							[1, 0, 0],
							[0, 1, 0],
							[0, 0, 1]
						];
					}

					function matrixMultiply(m1, m2) {
						var result = createMatrixIdentity();

						for (var x = 0; x < 3; x++) {
							for (var y = 0; y < 3; y++) {
								var sum = 0;

								for (var z = 0; z < 3; z++) {
									sum += m1[x][z] * m2[z][y];
								}

								result[x][y] = sum;
							}
						}
						return result;
					}

					function copyState(o1, o2) {
						o2.fillStyle = o1.fillStyle;
						o2.lineCap = o1.lineCap;
						o2.lineJoin = o1.lineJoin;
						o2.lineWidth = o1.lineWidth;
						o2.miterLimit = o1.miterLimit;
						o2.shadowBlur = o1.shadowBlur;
						o2.shadowColor = o1.shadowColor;
						o2.shadowOffsetX = o1.shadowOffsetX;
						o2.shadowOffsetY = o1.shadowOffsetY;
						o2.strokeStyle = o1.strokeStyle;
						o2.globalAlpha = o1.globalAlpha;
						o2.font = o1.font;
						o2.textAlign = o1.textAlign;
						o2.textBaseline = o1.textBaseline;
						o2.arcScaleX_ = o1.arcScaleX_;
						o2.arcScaleY_ = o1.arcScaleY_;
						o2.lineScale_ = o1.lineScale_;
					}

					var colorData = {
						aliceblue: '#F0F8FF',
						antiquewhite: '#FAEBD7',
						aquamarine: '#7FFFD4',
						azure: '#F0FFFF',
						beige: '#F5F5DC',
						bisque: '#FFE4C4',
						black: '#000000',
						blanchedalmond: '#FFEBCD',
						blueviolet: '#8A2BE2',
						brown: '#A52A2A',
						burlywood: '#DEB887',
						cadetblue: '#5F9EA0',
						chartreuse: '#7FFF00',
						chocolate: '#D2691E',
						coral: '#FF7F50',
						cornflowerblue: '#6495ED',
						cornsilk: '#FFF8DC',
						crimson: '#DC143C',
						cyan: '#00FFFF',
						darkblue: '#00008B',
						darkcyan: '#008B8B',
						darkgoldenrod: '#B8860B',
						darkgray: '#A9A9A9',
						darkgreen: '#006400',
						darkgrey: '#A9A9A9',
						darkkhaki: '#BDB76B',
						darkmagenta: '#8B008B',
						darkolivegreen: '#556B2F',
						darkorange: '#FF8C00',
						darkorchid: '#9932CC',
						darkred: '#8B0000',
						darksalmon: '#E9967A',
						darkseagreen: '#8FBC8F',
						darkslateblue: '#483D8B',
						darkslategray: '#2F4F4F',
						darkslategrey: '#2F4F4F',
						darkturquoise: '#00CED1',
						darkviolet: '#9400D3',
						deeppink: '#FF1493',
						deepskyblue: '#00BFFF',
						dimgray: '#696969',
						dimgrey: '#696969',
						dodgerblue: '#1E90FF',
						firebrick: '#B22222',
						floralwhite: '#FFFAF0',
						forestgreen: '#228B22',
						gainsboro: '#DCDCDC',
						ghostwhite: '#F8F8FF',
						gold: '#FFD700',
						goldenrod: '#DAA520',
						grey: '#808080',
						greenyellow: '#ADFF2F',
						honeydew: '#F0FFF0',
						hotpink: '#FF69B4',
						indianred: '#CD5C5C',
						indigo: '#4B0082',
						ivory: '#FFFFF0',
						khaki: '#F0E68C',
						lavender: '#E6E6FA',
						lavenderblush: '#FFF0F5',
						lawngreen: '#7CFC00',
						lemonchiffon: '#FFFACD',
						lightblue: '#ADD8E6',
						lightcoral: '#F08080',
						lightcyan: '#E0FFFF',
						lightgoldenrodyellow: '#FAFAD2',
						lightgreen: '#90EE90',
						lightgrey: '#D3D3D3',
						lightpink: '#FFB6C1',
						lightsalmon: '#FFA07A',
						lightseagreen: '#20B2AA',
						lightskyblue: '#87CEFA',
						lightslategray: '#778899',
						lightslategrey: '#778899',
						lightsteelblue: '#B0C4DE',
						lightyellow: '#FFFFE0',
						limegreen: '#32CD32',
						linen: '#FAF0E6',
						magenta: '#FF00FF',
						mediumaquamarine: '#66CDAA',
						mediumblue: '#0000CD',
						mediumorchid: '#BA55D3',
						mediumpurple: '#9370DB',
						mediumseagreen: '#3CB371',
						mediumslateblue: '#7B68EE',
						mediumspringgreen: '#00FA9A',
						mediumturquoise: '#48D1CC',
						mediumvioletred: '#C71585',
						midnightblue: '#191970',
						mintcream: '#F5FFFA',
						mistyrose: '#FFE4E1',
						moccasin: '#FFE4B5',
						navajowhite: '#FFDEAD',
						oldlace: '#FDF5E6',
						olivedrab: '#6B8E23',
						orange: '#FFA500',
						orangered: '#FF4500',
						orchid: '#DA70D6',
						palegoldenrod: '#EEE8AA',
						palegreen: '#98FB98',
						paleturquoise: '#AFEEEE',
						palevioletred: '#DB7093',
						papayawhip: '#FFEFD5',
						peachpuff: '#FFDAB9',
						peru: '#CD853F',
						pink: '#FFC0CB',
						plum: '#DDA0DD',
						powderblue: '#B0E0E6',
						rosybrown: '#BC8F8F',
						royalblue: '#4169E1',
						saddlebrown: '#8B4513',
						salmon: '#FA8072',
						sandybrown: '#F4A460',
						seagreen: '#2E8B57',
						seashell: '#FFF5EE',
						sienna: '#A0522D',
						skyblue: '#87CEEB',
						slateblue: '#6A5ACD',
						slategray: '#708090',
						slategrey: '#708090',
						snow: '#FFFAFA',
						springgreen: '#00FF7F',
						steelblue: '#4682B4',
						tan: '#D2B48C',
						thistle: '#D8BFD8',
						tomato: '#FF6347',
						turquoise: '#40E0D0',
						violet: '#EE82EE',
						wheat: '#F5DEB3',
						whitesmoke: '#F5F5F5',
						yellowgreen: '#9ACD32'
					};


					function getRgbHslContent(styleString) {
						var start = styleString.indexOf('(', 3);
						var end = styleString.indexOf(')', start + 1);
						var parts = styleString.substring(start + 1, end).split(',');
						// add alpha if needed
						if (parts.length != 4 || styleString.charAt(3) != 'a') {
							parts[3] = 1;
						}
						return parts;
					}

					function percent(s) {
						return parseFloat(s) / 100;
					}

					function clamp(v, min, max) {
						return Math.min(max, Math.max(min, v));
					}

					function hslToRgb(parts) {
						var r, g, b, h, s, l;
						h = parseFloat(parts[0]) / 360 % 360;
						if (h < 0)
							h++;
						s = clamp(percent(parts[1]), 0, 1);
						l = clamp(percent(parts[2]), 0, 1);
						if (s == 0) {
							r = g = b = l; // achromatic
						} else {
							var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
							var p = 2 * l - q;
							r = hueToRgb(p, q, h + 1 / 3);
							g = hueToRgb(p, q, h);
							b = hueToRgb(p, q, h - 1 / 3);
						}

						return '#' + decToHex[Math.floor(r * 255)] +
							decToHex[Math.floor(g * 255)] +
							decToHex[Math.floor(b * 255)];
					}

					function hueToRgb(m1, m2, h) {
						if (h < 0)
							h++;
						if (h > 1)
							h--;

						if (6 * h < 1)
							return m1 + (m2 - m1) * 6 * h;
						else if (2 * h < 1)
							return m2;
						else if (3 * h < 2)
							return m1 + (m2 - m1) * (2 / 3 - h) * 6;
						else
							return m1;
					}

					var processStyleCache = {};

					function processStyle(styleString) {
						if (styleString in processStyleCache) {
							return processStyleCache[styleString];
						}

						var str, alpha = 1;

						styleString = String(styleString);
						if (styleString.charAt(0) == '#') {
							str = styleString;
						} else if (/^rgb/.test(styleString)) {
							var parts = getRgbHslContent(styleString);
							var str = '#', n;
							for (var i = 0; i < 3; i++) {
								if (parts[i].indexOf('%') != -1) {
									n = Math.floor(percent(parts[i]) * 255);
								} else {
									n = +parts[i];
								}
								str += decToHex[clamp(n, 0, 255)];
							}
							alpha = +parts[3];
						} else if (/^hsl/.test(styleString)) {
							var parts = getRgbHslContent(styleString);
							str = hslToRgb(parts);
							alpha = parts[3];
						} else {
							str = colorData[styleString] || styleString;
						}
						return processStyleCache[styleString] = { color: str, alpha: alpha };
					}

					var DEFAULT_STYLE = {
						style: 'normal',
						variant: 'normal',
						weight: 'normal',
						size: 10,
						family: 'sans-serif'
					};

					// Internal text style cache
					var fontStyleCache = {};

					function processFontStyle(styleString) {
						if (fontStyleCache[styleString]) {
							return fontStyleCache[styleString];
						}

						var el = document.createElement('div');
						var style = el.style;
						try {
							style.font = styleString;
						} catch (ex) {
							// Ignore failures to set to invalid font.
						}

						return fontStyleCache[styleString] = {
							style: style.fontStyle || DEFAULT_STYLE.style,
							variant: style.fontVariant || DEFAULT_STYLE.variant,
							weight: style.fontWeight || DEFAULT_STYLE.weight,
							size: style.fontSize || DEFAULT_STYLE.size,
							family: style.fontFamily || DEFAULT_STYLE.family
						};
					}

					function getComputedStyle(style, element) {
						var computedStyle = {};

						for (var p in style) {
							computedStyle[p] = style[p];
						}

						// Compute the size
						var canvasFontSize = parseFloat(element.currentStyle.fontSize),
							fontSize = parseFloat(style.size);

						if (typeof style.size == 'number') {
							computedStyle.size = style.size;
						} else if (style.size.indexOf('px') != -1) {
							computedStyle.size = fontSize;
						} else if (style.size.indexOf('em') != -1) {
							computedStyle.size = canvasFontSize * fontSize;
						} else if (style.size.indexOf('%') != -1) {
							computedStyle.size = (canvasFontSize / 100) * fontSize;
						} else if (style.size.indexOf('pt') != -1) {
							computedStyle.size = fontSize / .75;
						} else {
							computedStyle.size = canvasFontSize;
						}

						// Different scaling between normal text and VML text. This was found using
						// trial and error to get the same size as non VML text.
						computedStyle.size *= 0.981;

						return computedStyle;
					}

					function buildStyle(style) {
						return style.style + ' ' + style.variant + ' ' + style.weight + ' ' +
							style.size + 'px ' + style.family;
					}

					var lineCapMap = {
						'butt': 'flat',
						'round': 'round'
					};

					function processLineCap(lineCap) {
						return lineCapMap[lineCap] || 'square';
					}

					/**
					 * This class implements CanvasRenderingContext2D interface as described by
					 * the WHATWG.
					 * @param {HTMLElement} canvasElement The element that the 2D context should
					 * be associated with
					 */
					function CanvasRenderingContext2D_(canvasElement) {
						this.m_ = createMatrixIdentity();

						this.mStack_ = [];
						this.aStack_ = [];
						this.currentPath_ = [];

						// Canvas context properties
						this.strokeStyle = '#000';
						this.fillStyle = '#000';

						this.lineWidth = 1;
						this.lineJoin = 'miter';
						this.lineCap = 'butt';
						this.miterLimit = Z * 1;
						this.globalAlpha = 1;
						this.font = '10px sans-serif';
						this.textAlign = 'left';
						this.textBaseline = 'alphabetic';
						this.canvas = canvasElement;

						var cssText = 'width:' + canvasElement.clientWidth + 'px;height:' +
							canvasElement.clientHeight + 'px;overflow:hidden;position:absolute;zoom:1;';
						var el = canvasElement.ownerDocument.createElement('div');
						el.style.cssText = cssText;
						canvasElement.appendChild(el);

						var overlayEl = el.cloneNode(false);
						// Use a non transparent background.
						overlayEl.style.backgroundColor = 'red';
						overlayEl.style.filter = 'alpha(opacity=0)';
						canvasElement.appendChild(overlayEl);

						this.element_ = el;
						this.arcScaleX_ = 1;
						this.arcScaleY_ = 1;
						this.lineScale_ = 1;
					}

					var contextPrototype = CanvasRenderingContext2D_.prototype;
					contextPrototype.clearRect = function () {
						if (this.textMeasureEl_) {
							this.textMeasureEl_.removeNode(true);
							this.textMeasureEl_ = null;
						}
						this.element_.innerHTML = '';
					};

					contextPrototype.beginPath = function () {
						// TODO: Branch current matrix so that save/restore has no effect
						//       as per safari docs.
						this.currentPath_ = [];
					};

					contextPrototype.moveTo = function (aX, aY) {
						var p = getCoords(this, aX, aY);
						this.currentPath_.push({ type: 'moveTo', x: p.x, y: p.y });
						this.currentX_ = p.x;
						this.currentY_ = p.y;
					};

					contextPrototype.lineTo = function (aX, aY) {
						var p = getCoords(this, aX, aY);
						this.currentPath_.push({ type: 'lineTo', x: p.x, y: p.y });

						this.currentX_ = p.x;
						this.currentY_ = p.y;
					};

					contextPrototype.bezierCurveTo = function (aCP1x, aCP1y,
						aCP2x, aCP2y,
						aX, aY) {
						var p = getCoords(this, aX, aY);
						var cp1 = getCoords(this, aCP1x, aCP1y);
						var cp2 = getCoords(this, aCP2x, aCP2y);
						bezierCurveTo(this, cp1, cp2, p);
					};

					// Helper function that takes the already fixed cordinates.
					function bezierCurveTo(self, cp1, cp2, p) {
						self.currentPath_.push({
							type: 'bezierCurveTo',
							cp1x: cp1.x,
							cp1y: cp1.y,
							cp2x: cp2.x,
							cp2y: cp2.y,
							x: p.x,
							y: p.y
						});
						self.currentX_ = p.x;
						self.currentY_ = p.y;
					}

					contextPrototype.quadraticCurveTo = function (aCPx, aCPy, aX, aY) {
						// the following is lifted almost directly from
						// http://developer.mozilla.org/en/docs/Canvas_tutorial:Drawing_shapes

						var cp = getCoords(this, aCPx, aCPy);
						var p = getCoords(this, aX, aY);

						var cp1 = {
							x: this.currentX_ + 2.0 / 3.0 * (cp.x - this.currentX_),
							y: this.currentY_ + 2.0 / 3.0 * (cp.y - this.currentY_)
						};
						var cp2 = {
							x: cp1.x + (p.x - this.currentX_) / 3.0,
							y: cp1.y + (p.y - this.currentY_) / 3.0
						};

						bezierCurveTo(this, cp1, cp2, p);
					};

					contextPrototype.arc = function (aX, aY, aRadius,
						aStartAngle, aEndAngle, aClockwise) {
						aRadius *= Z;
						var arcType = aClockwise ? 'at' : 'wa';

						var xStart = aX + mc(aStartAngle) * aRadius - Z2;
						var yStart = aY + ms(aStartAngle) * aRadius - Z2;

						var xEnd = aX + mc(aEndAngle) * aRadius - Z2;
						var yEnd = aY + ms(aEndAngle) * aRadius - Z2;

						// IE won't render arches drawn counter clockwise if xStart == xEnd.
						if (xStart == xEnd && !aClockwise) {
							xStart += 0.125; // Offset xStart by 1/80 of a pixel. Use something
							// that can be represented in binary
						}

						var p = getCoords(this, aX, aY);
						var pStart = getCoords(this, xStart, yStart);
						var pEnd = getCoords(this, xEnd, yEnd);

						this.currentPath_.push({
							type: arcType,
							x: p.x,
							y: p.y,
							radius: aRadius,
							xStart: pStart.x,
							yStart: pStart.y,
							xEnd: pEnd.x,
							yEnd: pEnd.y
						});

					};

					contextPrototype.rect = function (aX, aY, aWidth, aHeight) {
						this.moveTo(aX, aY);
						this.lineTo(aX + aWidth, aY);
						this.lineTo(aX + aWidth, aY + aHeight);
						this.lineTo(aX, aY + aHeight);
						this.closePath();
					};

					contextPrototype.strokeRect = function (aX, aY, aWidth, aHeight) {
						var oldPath = this.currentPath_;
						this.beginPath();

						this.moveTo(aX, aY);
						this.lineTo(aX + aWidth, aY);
						this.lineTo(aX + aWidth, aY + aHeight);
						this.lineTo(aX, aY + aHeight);
						this.closePath();
						this.stroke();

						this.currentPath_ = oldPath;
					};

					contextPrototype.fillRect = function (aX, aY, aWidth, aHeight) {
						var oldPath = this.currentPath_;
						this.beginPath();

						this.moveTo(aX, aY);
						this.lineTo(aX + aWidth, aY);
						this.lineTo(aX + aWidth, aY + aHeight);
						this.lineTo(aX, aY + aHeight);
						this.closePath();
						this.fill();

						this.currentPath_ = oldPath;
					};

					contextPrototype.createLinearGradient = function (aX0, aY0, aX1, aY1) {
						var gradient = new CanvasGradient_('gradient');
						gradient.x0_ = aX0;
						gradient.y0_ = aY0;
						gradient.x1_ = aX1;
						gradient.y1_ = aY1;
						return gradient;
					};

					contextPrototype.createRadialGradient = function (aX0, aY0, aR0,
						aX1, aY1, aR1) {
						var gradient = new CanvasGradient_('gradientradial');
						gradient.x0_ = aX0;
						gradient.y0_ = aY0;
						gradient.r0_ = aR0;
						gradient.x1_ = aX1;
						gradient.y1_ = aY1;
						gradient.r1_ = aR1;
						return gradient;
					};

					contextPrototype.drawImage = function (image, var_args) {
						var dx, dy, dw, dh, sx, sy, sw, sh;

						// to find the original width we overide the width and height
						var oldRuntimeWidth = image.runtimeStyle.width;
						var oldRuntimeHeight = image.runtimeStyle.height;
						image.runtimeStyle.width = 'auto';
						image.runtimeStyle.height = 'auto';

						// get the original size
						var w = image.width;
						var h = image.height;

						// and remove overides
						image.runtimeStyle.width = oldRuntimeWidth;
						image.runtimeStyle.height = oldRuntimeHeight;

						if (arguments.length == 3) {
							dx = arguments[1];
							dy = arguments[2];
							sx = sy = 0;
							sw = dw = w;
							sh = dh = h;
						} else if (arguments.length == 5) {
							dx = arguments[1];
							dy = arguments[2];
							dw = arguments[3];
							dh = arguments[4];
							sx = sy = 0;
							sw = w;
							sh = h;
						} else if (arguments.length == 9) {
							sx = arguments[1];
							sy = arguments[2];
							sw = arguments[3];
							sh = arguments[4];
							dx = arguments[5];
							dy = arguments[6];
							dw = arguments[7];
							dh = arguments[8];
						} else {
							throw Error('Invalid number of arguments');
						}

						var d = getCoords(this, dx, dy);

						var w2 = sw / 2;
						var h2 = sh / 2;

						var vmlStr = [];

						var W = 10;
						var H = 10;

						// For some reason that I've now forgotten, using divs didn't work
						vmlStr.push(' <g_vml_:group',
							' coordsize="', Z * W, ',', Z * H, '"',
							' coordorigin="0,0"',
							' style="width:', W, 'px;height:', H, 'px;position:absolute;');

						// If filters are necessary (rotation exists), create them
						// filters are bog-slow, so only create them if abbsolutely necessary
						// The following check doesn't account for skews (which don't exist
						// in the canvas spec (yet) anyway.

						if (this.m_[0][0] != 1 || this.m_[0][1] ||
							this.m_[1][1] != 1 || this.m_[1][0]) {
							var filter = [];

							// Note the 12/21 reversal
							filter.push('M11=', this.m_[0][0], ',',
								'M12=', this.m_[1][0], ',',
								'M21=', this.m_[0][1], ',',
								'M22=', this.m_[1][1], ',',
								'Dx=', mr(d.x / Z), ',',
								'Dy=', mr(d.y / Z), '');

							// Bounding box calculation (need to minimize displayed area so that
							// filters don't waste time on unused pixels.
							var max = d;
							var c2 = getCoords(this, dx + dw, dy);
							var c3 = getCoords(this, dx, dy + dh);
							var c4 = getCoords(this, dx + dw, dy + dh);

							max.x = m.max(max.x, c2.x, c3.x, c4.x);
							max.y = m.max(max.y, c2.y, c3.y, c4.y);

							vmlStr.push('padding:0 ', mr(max.x / Z), 'px ', mr(max.y / Z),
								'px 0;filter:progid:DXImageTransform.Microsoft.Matrix(',
								filter.join(''), ", sizingmethod='clip');");

						} else {
							vmlStr.push('top:', mr(d.y / Z), 'px;left:', mr(d.x / Z), 'px;');
						}

						vmlStr.push(' ">',
							'<g_vml_:image src="', image.src, '"',
							' style="width:', Z * dw, 'px;',
							' height:', Z * dh, 'px"',
							' cropleft="', sx / w, '"',
							' croptop="', sy / h, '"',
							' cropright="', (w - sx - sw) / w, '"',
							' cropbottom="', (h - sy - sh) / h, '"',
							' />',
							'</g_vml_:group>');

						this.element_.insertAdjacentHTML('BeforeEnd', vmlStr.join(''));
					};

					contextPrototype.stroke = function (aFill) {
						var lineStr = [];
						var lineOpen = false;

						var W = 10;
						var H = 10;

						lineStr.push('<g_vml_:shape',
							' filled="', !!aFill, '"',
							' style="position:absolute;width:', W, 'px;height:', H, 'px;"',
							' coordorigin="0,0"',
							' coordsize="', Z * W, ',', Z * H, '"',
							' stroked="', !aFill, '"',
							' path="');

						var newSeq = false;
						var min = { x: null, y: null };
						var max = { x: null, y: null };

						for (var i = 0; i < this.currentPath_.length; i++) {
							var p = this.currentPath_[i];
							var c;

							switch (p.type) {
								case 'moveTo':
									c = p;
									lineStr.push(' m ', mr(p.x), ',', mr(p.y));
									break;
								case 'lineTo':
									lineStr.push(' l ', mr(p.x), ',', mr(p.y));
									break;
								case 'close':
									lineStr.push(' x ');
									p = null;
									break;
								case 'bezierCurveTo':
									lineStr.push(' c ',
										mr(p.cp1x), ',', mr(p.cp1y), ',',
										mr(p.cp2x), ',', mr(p.cp2y), ',',
										mr(p.x), ',', mr(p.y));
									break;
								case 'at':
								case 'wa':
									lineStr.push(' ', p.type, ' ',
										mr(p.x - this.arcScaleX_ * p.radius), ',',
										mr(p.y - this.arcScaleY_ * p.radius), ' ',
										mr(p.x + this.arcScaleX_ * p.radius), ',',
										mr(p.y + this.arcScaleY_ * p.radius), ' ',
										mr(p.xStart), ',', mr(p.yStart), ' ',
										mr(p.xEnd), ',', mr(p.yEnd));
									break;
							}


							// TODO: Following is broken for curves due to
							//       move to proper paths.

							// Figure out dimensions so we can do gradient fills
							// properly
							if (p) {
								if (min.x == null || p.x < min.x) {
									min.x = p.x;
								}
								if (max.x == null || p.x > max.x) {
									max.x = p.x;
								}
								if (min.y == null || p.y < min.y) {
									min.y = p.y;
								}
								if (max.y == null || p.y > max.y) {
									max.y = p.y;
								}
							}
						}
						lineStr.push(' ">');

						if (!aFill) {
							appendStroke(this, lineStr);
						} else {
							appendFill(this, lineStr, min, max);
						}

						lineStr.push('</g_vml_:shape>');

						this.element_.insertAdjacentHTML('beforeEnd', lineStr.join(''));
					};

					function appendStroke(ctx, lineStr) {
						var a = processStyle(ctx.strokeStyle);
						var color = a.color;
						var opacity = a.alpha * ctx.globalAlpha;
						var lineWidth = ctx.lineScale_ * ctx.lineWidth;

						// VML cannot correctly render a line if the width is less than 1px.
						// In that case, we dilute the color to make the line look thinner.
						if (lineWidth < 1) {
							opacity *= lineWidth;
						}

						lineStr.push(
							'<g_vml_:stroke',
							' opacity="', opacity, '"',
							' joinstyle="', ctx.lineJoin, '"',
							' miterlimit="', ctx.miterLimit, '"',
							' endcap="', processLineCap(ctx.lineCap), '"',
							' weight="', lineWidth, 'px"',
							' color="', color, '" />'
						);
					}

					function appendFill(ctx, lineStr, min, max) {
						var fillStyle = ctx.fillStyle;
						var arcScaleX = ctx.arcScaleX_;
						var arcScaleY = ctx.arcScaleY_;
						var width = max.x - min.x;
						var height = max.y - min.y;
						if (fillStyle instanceof CanvasGradient_) {
							// TODO: Gradients transformed with the transformation matrix.
							var angle = 0;
							var focus = { x: 0, y: 0 };

							// additional offset
							var shift = 0;
							// scale factor for offset
							var expansion = 1;

							if (fillStyle.type_ == 'gradient') {
								var x0 = fillStyle.x0_ / arcScaleX;
								var y0 = fillStyle.y0_ / arcScaleY;
								var x1 = fillStyle.x1_ / arcScaleX;
								var y1 = fillStyle.y1_ / arcScaleY;
								var p0 = getCoords(ctx, x0, y0);
								var p1 = getCoords(ctx, x1, y1);
								var dx = p1.x - p0.x;
								var dy = p1.y - p0.y;
								angle = Math.atan2(dx, dy) * 180 / Math.PI;

								// The angle should be a non-negative number.
								if (angle < 0) {
									angle += 360;
								}

								// Very small angles produce an unexpected result because they are
								// converted to a scientific notation string.
								if (angle < 1e-6) {
									angle = 0;
								}
							} else {
								var p0 = getCoords(ctx, fillStyle.x0_, fillStyle.y0_);
								focus = {
									x: (p0.x - min.x) / width,
									y: (p0.y - min.y) / height
								};

								width /= arcScaleX * Z;
								height /= arcScaleY * Z;
								var dimension = m.max(width, height);
								shift = 2 * fillStyle.r0_ / dimension;
								expansion = 2 * fillStyle.r1_ / dimension - shift;
							}

							// We need to sort the color stops in ascending order by offset,
							// otherwise IE won't interpret it correctly.
							var stops = fillStyle.colors_;
							stops.sort(function (cs1, cs2) {
								return cs1.offset - cs2.offset;
							});

							var length = stops.length;
							var color1 = stops[0].color;
							var color2 = stops[length - 1].color;
							var opacity1 = stops[0].alpha * ctx.globalAlpha;
							var opacity2 = stops[length - 1].alpha * ctx.globalAlpha;

							var colors = [];
							for (var i = 0; i < length; i++) {
								var stop = stops[i];
								colors.push(stop.offset * expansion + shift + ' ' + stop.color);
							}

							// When colors attribute is used, the meanings of opacity and o:opacity2
							// are reversed.
							lineStr.push('<g_vml_:fill type="', fillStyle.type_, '"',
								' method="none" focus="100%"',
								' color="', color1, '"',
								' color2="', color2, '"',
								' colors="', colors.join(','), '"',
								' opacity="', opacity2, '"',
								' g_o_:opacity2="', opacity1, '"',
								' angle="', angle, '"',
								' focusposition="', focus.x, ',', focus.y, '" />');
						} else if (fillStyle instanceof CanvasPattern_) {
							if (width && height) {
								var deltaLeft = -min.x;
								var deltaTop = -min.y;
								lineStr.push('<g_vml_:fill',
									' position="',
									deltaLeft / width * arcScaleX * arcScaleX, ',',
									deltaTop / height * arcScaleY * arcScaleY, '"',
									' type="tile"',
									// TODO: Figure out the correct size to fit the scale.
									//' size="', w, 'px ', h, 'px"',
									' src="', fillStyle.src_, '" />');
							}
						} else {
							var a = processStyle(ctx.fillStyle);
							var color = a.color;
							var opacity = a.alpha * ctx.globalAlpha;
							lineStr.push('<g_vml_:fill color="', color, '" opacity="', opacity,
								'" />');
						}
					}

					contextPrototype.fill = function () {
						this.stroke(true);
					};

					contextPrototype.closePath = function () {
						this.currentPath_.push({ type: 'close' });
					};

					function getCoords(ctx, aX, aY) {
						var m = ctx.m_;
						return {
							x: Z * (aX * m[0][0] + aY * m[1][0] + m[2][0]) - Z2,
							y: Z * (aX * m[0][1] + aY * m[1][1] + m[2][1]) - Z2
						};
					};

					contextPrototype.save = function () {
						var o = {};
						copyState(this, o);
						this.aStack_.push(o);
						this.mStack_.push(this.m_);
						this.m_ = matrixMultiply(createMatrixIdentity(), this.m_);
					};

					contextPrototype.restore = function () {
						if (this.aStack_.length) {
							copyState(this.aStack_.pop(), this);
							this.m_ = this.mStack_.pop();
						}
					};

					function matrixIsFinite(m) {
						return isFinite(m[0][0]) && isFinite(m[0][1]) &&
							isFinite(m[1][0]) && isFinite(m[1][1]) &&
							isFinite(m[2][0]) && isFinite(m[2][1]);
					}

					function setM(ctx, m, updateLineScale) {
						if (!matrixIsFinite(m)) {
							return;
						}
						ctx.m_ = m;

						if (updateLineScale) {
							// Get the line scale.
							// Determinant of this.m_ means how much the area is enlarged by the
							// transformation. So its square root can be used as a scale factor
							// for width.
							var det = m[0][0] * m[1][1] - m[0][1] * m[1][0];
							ctx.lineScale_ = sqrt(abs(det));
						}
					}

					contextPrototype.translate = function (aX, aY) {
						var m1 = [
							[1, 0, 0],
							[0, 1, 0],
							[aX, aY, 1]
						];

						setM(this, matrixMultiply(m1, this.m_), false);
					};

					contextPrototype.rotate = function (aRot) {
						var c = mc(aRot);
						var s = ms(aRot);

						var m1 = [
							[c, s, 0],
							[-s, c, 0],
							[0, 0, 1]
						];

						setM(this, matrixMultiply(m1, this.m_), false);
					};

					contextPrototype.scale = function (aX, aY) {
						this.arcScaleX_ *= aX;
						this.arcScaleY_ *= aY;
						var m1 = [
							[aX, 0, 0],
							[0, aY, 0],
							[0, 0, 1]
						];

						setM(this, matrixMultiply(m1, this.m_), true);
					};

					contextPrototype.transform = function (m11, m12, m21, m22, dx, dy) {
						var m1 = [
							[m11, m12, 0],
							[m21, m22, 0],
							[dx, dy, 1]
						];

						setM(this, matrixMultiply(m1, this.m_), true);
					};

					contextPrototype.setTransform = function (m11, m12, m21, m22, dx, dy) {
						var m = [
							[m11, m12, 0],
							[m21, m22, 0],
							[dx, dy, 1]
						];

						setM(this, m, true);
					};

					/**
					 * The text drawing function.
					 * The maxWidth argument isn't taken in account, since no browser supports
					 * it yet.
					 */
					contextPrototype.drawText_ = function (text, x, y, maxWidth, stroke) {
						var m = this.m_,
							delta = 1000,
							left = 0,
							right = delta,
							offset = { x: 0, y: 0 },
							lineStr = [];

						var fontStyle = getComputedStyle(processFontStyle(this.font),
							this.element_);

						var fontStyleString = buildStyle(fontStyle);

						var elementStyle = this.element_.currentStyle;
						var textAlign = this.textAlign.toLowerCase();
						switch (textAlign) {
							case 'left':
							case 'center':
							case 'right':
								break;
							case 'end':
								textAlign = elementStyle.direction == 'ltr' ? 'right' : 'left';
								break;
							case 'start':
								textAlign = elementStyle.direction == 'rtl' ? 'right' : 'left';
								break;
							default:
								textAlign = 'left';
						}

						// 1.75 is an arbitrary number, as there is no info about the text baseline
						switch (this.textBaseline) {
							case 'hanging':
							case 'top':
								offset.y = fontStyle.size / 1.75;
								break;
							case 'middle':
								break;
							default:
							case null:
							case 'alphabetic':
							case 'ideographic':
							case 'bottom':
								offset.y = -fontStyle.size / 2.25;
								break;
						}

						switch (textAlign) {
							case 'right':
								left = delta;
								right = 0.05;
								break;
							case 'center':
								left = right = delta / 2;
								break;
						}

						var d = getCoords(this, x + offset.x, y + offset.y);

						lineStr.push('<g_vml_:line from="', -left, ' 0" to="', right, ' 0.05" ',
							' coordsize="100 100" coordorigin="0 0"',
							' filled="', !stroke, '" stroked="', !!stroke,
							'" style="position:absolute;width:1px;height:1px;">');

						if (stroke) {
							appendStroke(this, lineStr);
						} else {
							// TODO: Fix the min and max params.
							appendFill(this, lineStr, { x: -left, y: 0 },
								{ x: right, y: fontStyle.size });
						}

						var skewM = m[0][0].toFixed(3) + ',' + m[1][0].toFixed(3) + ',' +
							m[0][1].toFixed(3) + ',' + m[1][1].toFixed(3) + ',0,0';

						var skewOffset = mr(d.x / Z) + ',' + mr(d.y / Z);

						lineStr.push('<g_vml_:skew on="t" matrix="', skewM, '" ',
							' offset="', skewOffset, '" origin="', left, ' 0" />',
							'<g_vml_:path textpathok="true" />',
							'<g_vml_:textpath on="true" string="',
							encodeHtmlAttribute(text),
							'" style="v-text-align:', textAlign,
							';font:', encodeHtmlAttribute(fontStyleString),
							'" /></g_vml_:line>');

						this.element_.insertAdjacentHTML('beforeEnd', lineStr.join(''));
					};

					contextPrototype.fillText = function (text, x, y, maxWidth) {
						this.drawText_(text, x, y, maxWidth, false);
					};

					contextPrototype.strokeText = function (text, x, y, maxWidth) {
						this.drawText_(text, x, y, maxWidth, true);
					};

					contextPrototype.measureText = function (text) {
						if (!this.textMeasureEl_) {
							var s = '<span style="position:absolute;' +
								'top:-20000px;left:0;padding:0;margin:0;border:none;' +
								'white-space:pre;"></span>';
							this.element_.insertAdjacentHTML('beforeEnd', s);
							this.textMeasureEl_ = this.element_.lastChild;
						}
						var doc = this.element_.ownerDocument;
						this.textMeasureEl_.innerHTML = '';

						try {
							this.textMeasureEl_.style.font = this.font;
						}
						catch (e) {

						}

						// Don't use innerHTML or innerText because they allow markup/whitespace.
						this.textMeasureEl_.appendChild(doc.createTextNode(text));
						return { width: this.textMeasureEl_.offsetWidth };
					};

					/******** STUBS ********/
					contextPrototype.clip = function () {
						// TODO: Implement
					};

					contextPrototype.arcTo = function () {
						// TODO: Implement
					};

					contextPrototype.createPattern = function (image, repetition) {
						return new CanvasPattern_(image, repetition);
					};

					// Gradient / Pattern Stubs
					function CanvasGradient_(aType) {
						this.type_ = aType;
						this.x0_ = 0;
						this.y0_ = 0;
						this.r0_ = 0;
						this.x1_ = 0;
						this.y1_ = 0;
						this.r1_ = 0;
						this.colors_ = [];
					}

					CanvasGradient_.prototype.addColorStop = function (aOffset, aColor) {
						aColor = processStyle(aColor);
						this.colors_.push({
							offset: aOffset,
							color: aColor.color,
							alpha: aColor.alpha
						});
					};

					function CanvasPattern_(image, repetition) {
						assertImageIsValid(image);
						switch (repetition) {
							case 'repeat':
							case null:
							case '':
								this.repetition_ = 'repeat';
								break
							case 'repeat-x':
							case 'repeat-y':
							case 'no-repeat':
								this.repetition_ = repetition;
								break;
							default:
								throwException('SYNTAX_ERR');
						}

						this.src_ = image.src;
						this.width_ = image.width;
						this.height_ = image.height;
					}

					function throwException(s) {
						throw new DOMException_(s);
					}

					function assertImageIsValid(img) {
						if (!img || img.nodeType != 1 || img.tagName != 'IMG') {
							throwException('TYPE_MISMATCH_ERR');
						}
						if (img.readyState != 'complete') {
							throwException('INVALID_STATE_ERR');
						}
					}

					function DOMException_(s) {
						this.code = this[s];
						this.message = s + ': DOM Exception ' + this.code;
					}
					var p = DOMException_.prototype = new Error;
					p.INDEX_SIZE_ERR = 1;
					p.DOMSTRING_SIZE_ERR = 2;
					p.HIERARCHY_REQUEST_ERR = 3;
					p.WRONG_DOCUMENT_ERR = 4;
					p.INVALID_CHARACTER_ERR = 5;
					p.NO_DATA_ALLOWED_ERR = 6;
					p.NO_MODIFICATION_ALLOWED_ERR = 7;
					p.NOT_FOUND_ERR = 8;
					p.NOT_SUPPORTED_ERR = 9;
					p.INUSE_ATTRIBUTE_ERR = 10;
					p.INVALID_STATE_ERR = 11;
					p.SYNTAX_ERR = 12;
					p.INVALID_MODIFICATION_ERR = 13;
					p.NAMESPACE_ERR = 14;
					p.INVALID_ACCESS_ERR = 15;
					p.VALIDATION_ERR = 16;
					p.TYPE_MISMATCH_ERR = 17;

					// set up externs
					G_vmlCanvasManager = G_vmlCanvasManager_;
					CanvasRenderingContext2D = CanvasRenderingContext2D_;
					CanvasGradient = CanvasGradient_;
					CanvasPattern = CanvasPattern_;
					DOMException = DOMException_;
				})();

			} // if

			/***/
		}),
/* 3 */
/***/ (function (module, exports, __webpack_require__) {

			/*绘制手机分时图*/
			var EmchartsMobileTime = __webpack_require__(4);
			/*绘制手机K线图*/
			var EmchartsMobileK = __webpack_require__(23);
			/*绘制手机折线图*/
			var EmchartsMobiLine = __webpack_require__(33);
			/*绘制手机柱状图*/
			var ChartMobiBar = __webpack_require__(36);
			/*绘制手机分组柱状图*/
			var ChartMobiGroupBar = __webpack_require__(42);

			/*绘制web利率折线图*/
			var EmchartsWebLineRate = __webpack_require__(45);
			/*绘制web季度柱状图*/
			var EmchartsWebBarQuarter = __webpack_require__(48);
			/*绘制web季度折线图*/
			var EmchartsWebLineQuarter = __webpack_require__(51);
			/*绘制web折线图*/
			var EmchartsWebLine = __webpack_require__(54);
			/*绘制web分时图*/
			var EmchartsWebTime = __webpack_require__(58);
			/*绘制web的K线图*/
			var EmchartsWebK = __webpack_require__(93);
			/*绘制web柱状图*/
			var EmchartsWebBar = __webpack_require__(117);
			/*绘制web分组柱状图*/
			var EmchartsWebGroupBar = __webpack_require__(121);
			/*绘制web的饼状图*/
			var ChartPie = __webpack_require__(124);
			/*绘制web横向的柱状图*/
			var EmchartsWebHorizontalBar = __webpack_require__(137);
			/*绘制web横向的柱状图*/
			var EmchartsWebHorizontalGroupBar = __webpack_require__(141);
			/*绘制web柱状折线图*/
			var EmchartsBarLine = __webpack_require__(145);

			/*加载样式文件*/
			__webpack_require__(148);

			// 手机分时图
			window.EmchartsMobileTime = EmchartsMobileTime;
			// 手机K线图
			window.EmchartsMobileK = EmchartsMobileK;
			// 手机折线图
			window.EmchartsMobiLine = EmchartsMobiLine;
			// 手机柱状图
			window.ChartMobiBar = ChartMobiBar;
			// 手机分组柱状图
			window.ChartMobiGroupBar = ChartMobiGroupBar;

			// web季度柱状图
			window.EmchartsWebBarQuarter = EmchartsWebBarQuarter;
			// web季度折线图
			window.EmchartsWebLineQuarter = EmchartsWebLineQuarter;
			// web利率折线图
			window.EmchartsWebLineRate = EmchartsWebLineRate;
			// web折线图
			window.EmchartsWebLine = EmchartsWebLine;
			// web行情分时图
			window.EmchartsWebTime = EmchartsWebTime;
			// web行情K线图
			window.EmchartsWebK = EmchartsWebK;
			// web柱状图
			window.EmchartsWebBar = EmchartsWebBar;
			// web分组柱状图
			window.EmchartsWebGroupBar = EmchartsWebGroupBar;
			//web饼图
			window.EmchartsPie = ChartPie;
			// web横向单柱状图
			window.EmchartsWebHorizontalBar = EmchartsWebHorizontalBar;
			// web横向组柱状图
			window.EmchartsWebHorizontalGroupBar = EmchartsWebHorizontalGroupBar;
			// web柱状折线图
			window.EmchartsBarLine = EmchartsBarLine;


			/***/
		}),
/* 4 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制手机分时图
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     type:    "TL"(分时图),"DK"(日K线图),"WK"(周K线图),"MK"(月K线图)
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 * }
			 *
			 */

			// 绘制坐标轴
			var DrawXY = __webpack_require__(5);
			// 主题
			var theme = __webpack_require__(7);
			// 获取分时图数据
			var GetDataTime = __webpack_require__(10);
			// 绘制分时折线图
			var DrawLine = __webpack_require__(15);
			// 绘制分时折线图中的平均线
			var DrawAvgCost = __webpack_require__(17);
			// 绘制成交量图
			var DrawV = __webpack_require__(18);
			// 工具
			var common = __webpack_require__(19);
			// 拓展，合并，复制
			var extend = __webpack_require__(6);
			// 交互效果
			var Interactive = __webpack_require__(20);
			// 水印
			var watermark = __webpack_require__(22);

			var ChartTime = (function () {

				// 构造函数
				function ChartTime(options) {
					this.defaultoptions = theme.chartTime;
					this.options = {};
					// this.options = extend(this.defaultoptions, options);
					extend(true, this.options, theme.defaulttheme, this.defaultoptions, options);

					// 图表容器
					this.container = document.getElementById(options.container);

					this.container.className = this.container.className.replace(/emcharts-container/g, "").trim();
					this.container.className = this.container.className + " emcharts-container";
					// 图表加载完成事件
					this.onChartLoaded = options.onChartLoaded == undefined ? function (op) {

					} : options.onChartLoaded;

				}

				// 初始化
				ChartTime.prototype.init = function () {

					if (!this.options.type) {
						this.options.type = "T1";
					}
					var canvas = document.createElement("canvas");
					// 去除画布上粘贴效果
					// this.container.style = "-moz-user-select:none;-webkit-user-select:none;";
					// this.container.setAttribute("unselectable","on");
					this.container.style.position = "relative";
					// 画布
					var ctx = canvas.getContext('2d');
					this.options.canvas = canvas;
					this.options.context = ctx;
					// 设备像素比
					var dpr = this.options.dpr;
					// 画布的宽和高
					canvas.width = this.options.width * dpr;
					canvas.height = this.options.height * dpr;

					// 画布分割区域
					this.options.sepeNum = 6.5;

					if (this.options.showV === undefined) {
						this.options.showV = true;
					}

					// 画布向下偏移的距离
					this.options.canvas_offset_top = 2;
					// 画布内容向坐偏移的距离
					this.options.padding_left = 0;
					// 行情图表（分时图或K线图）和成交量图表的间距
					this.options.k_v_away = canvas.height / this.options.sepeNum;
					// 缩放默认值
					this.options.scale_count = this.options.scale_count == undefined ? 0 : this.options.scale_count;
					// 画布上第一个图表的高度
					if (this.options.showV) {
						this.options.c_1_height = canvas.height * 4 / this.options.sepeNum;
					} else {
						this.options.c_1_height = canvas.height - 90 * dpr;
					}

					this.options.padding = {};
					this.options.padding.left = 0;
					this.options.padding.right = 2;
					this.options.padding.top = 2;
					this.options.padding.bottom = 0;


					this.options.unit = {};
					this.options.unit.unitHeight = canvas.height / this.options.sepeNum;

					//y轴分割
					this.options.y_sep = this.options.y_sep || 5;
					//x轴分割
					this.options.x_sep = this.options.x_sep || 4;

					if (this.options.type.toLowerCase() == "t2") {
						this.options.x_sep = 2;
					} else if (this.options.type.toLowerCase() == "t3") {
						this.options.x_sep = 3;
					} else if (this.options.type.toLowerCase() == "t4") {
						this.options.x_sep = 4;
					} else if (this.options.type.toLowerCase() == "t5") {
						this.options.x_sep = 5;
					}

					canvas.style.width = this.options.width + "px";
					canvas.style.height = this.options.height + "px";
					canvas.style.border = "0";

					// 画布上部内间距
					ctx.translate("0", this.options.canvas_offset_top);
					// 画笔参数设置
					ctx.font = (this.options.font_size * this.options.dpr) + "px Arial";
					ctx.lineWidth = 1 * this.options.dpr;

					this.options.enableHandle = this.options.enableHandle == undefined ? true : this.options.enableHandle;

					// 容器中添加画布
					this.container.appendChild(canvas);

				};

				// 绘图
				ChartTime.prototype.draw = function (callback) {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					// 初始化交互
					var inter = this.options.interactive = new Interactive(this.options);
					// 显示loading效果
					inter.showLoading();
					var _this = this;
					console.log('options', this.options)
					getTryData.call(this)
					// setInterval(() => {
					// 	getTryData.call(this)
					// }, 5000)
					function getTryData() {
						// 删除canvas画布
						// this.clear();
						// 初始化
						// this.init();
						try {
							GetDataTime({
								id: this.options.code,
								type: this.options.type
							},
								function (data) {
									if (data) {
										dataCallback.apply(_this, [data]);
									} else {
										dataCallback.apply(_this, [[]]);
									}
									/*绑定事件*/
									//移动端移动的那个显示数据的框,切记
									console.log('_this.options', _this.options)
									if (_this.options.enableHandle) {
										bindEvent.call(_this, _this.options.context);
									}
									// 传入的回调函数
									if (callback) {
										callback();
									}

								}, inter);

						} catch (e) {
							// 暂无数据
							inter.showNoData();
							// 隐藏loading效果
							inter.hideLoading();
						}
					}


				};
				// 重绘
				ChartTime.prototype.reDraw = function () {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					dataCallback.call(this);
				}
				/*删除canvas画布*/
				ChartTime.prototype.clear = function (cb) {
					if (this.container) {
						this.container.innerHTML = "";
					} else {
						document.getElementById(this.options.container).innerHTML = "";
					}
					if (cb) {
						cb();
					};
				}
				/*回调函数*/
				function dataCallback(data) {

					this.options.data = data == null ? this.options.data : data;
					// 图表交互
					var inter = this.options.interactive;

					try {

						// 保留的小数位
						this.options.pricedigit = data.pricedigit || 2;
						// 获取单位绘制区域
						var rect_unit = common.get_rect.apply(this, [this.options.canvas, this.options.data.total]);
						this.options.rect_unit = rect_unit;

						// 绘制坐标轴
						var drawxy = new DrawXY(this.options);
						if (data && data.data && data.data.length > 0) {
							// 绘制分时折线图
							new DrawLine(this.options);
							// 绘制分时折线图平均线
							new DrawAvgCost(this.options);
						}
						drawxy.drawYMark();

						// 绘制分时图成交量
						if (this.options.showV === true) {
							new DrawV(this.options);
						}
						// 隐藏loading效果
						inter.hideLoading();
						// 图表加载完成时间
						this.onChartLoaded(this);

					} catch (e) {
						// 暂无数据
						// inter.showNoData();
						// 隐藏loading效果
						inter.hideLoading();
					}
					var dpr = this.options.dpr;
					// 加水印
					watermark.apply(this, [this.options.context, 85 * dpr, 10 * dpr, 82 * dpr, 20 * dpr]);

					return true;
				}

				// 绑定事件
				function bindEvent(ctx) {
					var _this = this;
					console.log('this', _this)
					var timer_s;
					var canvas = ctx.canvas;
					var inter = this.options.interactive;

					var delayed = false;
					var delaytouch = this.options.delaytouch = true;;
					console.log("delaytouch>>", delaytouch);
					// 触摸事件
					canvas.addEventListener("touchstart", function (event) {
						// 显示交互效果
						if (delaytouch) {
							delayed = false;
							timer_s = setTimeout(function () {
								delayed = true;
								inter.show();
								dealEvent.apply(_this, [inter, event.changedTouches[0]]);
								event.preventDefault();
							}, 200);
						} else {
							inter.show();
							dealEvent.apply(_this, [inter, event.changedTouches[0]]);
						}

						if (_this.options.preventdefault) {
							event.preventDefault();
						}

					});
					// 手指滑动事件
					canvas.addEventListener("touchmove", function (event) {
						//这里移动手指滑动
						if (delaytouch) {
							console.log(delayed)
							clearTimeout(timer_s);
							if (delayed) {
								dealEvent.apply(_this, [inter, event.changedTouches[0]]);
								event.preventDefault();
							}
						} else {
							dealEvent.apply(_this, [inter, event.changedTouches[0]]);
						}

						if (_this.options.preventdefault) {
							event.preventDefault();
						}

					});
					// 手指离开事件
					canvas.addEventListener("touchend", function (event) {
						if (delaytouch) {
							clearTimeout(timer_s);
						}
						// 隐藏交互效果
						inter.hide();
						if (_this.options.preventdefault) {
							event.preventDefault();
						}

					});

					canvas.addEventListener("touchcancel", function (event) {
						if (delaytouch) {
							clearTimeout(timer_s);
							// delay.style.display = "none";
						}
						// 隐藏交互效果
						inter.hide();
						if (_this.options.preventdefault) {
							event.preventDefault();
						}
					});


					// if(!delaytouch){
					canvas.addEventListener("mousemove", function (event) {
						//console.info(event);
						dealEvent.apply(_this, [inter, event]);
						event.preventDefault();
					});

					canvas.addEventListener("mouseleave", function (event) {
						//console.info(event);
						inter.hide();
						event.preventDefault();
					});

					canvas.addEventListener("mouseenter", function (event) {
						//console.info(event);
						dealEvent.apply(_this, [inter, event]);
						inter.show();
						event.preventDefault();
					});

					// }

				}
				// 处理交互事件
				function dealEvent(inter, eventposition) {
					// 画布对象
					var canvas = this.options.canvas;
					// 分时行情数据
					var time_data = this.options.data.data;
					// 单位绘制区域
					var rect_unit = this.options.rect_unit;
					// 单位绘图区域的宽度
					var rect_w = rect_unit.rect_w;
					var padding = this.options.padding;

					// 鼠标事件位置
					var w_x = eventposition.offsetX || (eventposition.clientX - this.container.getBoundingClientRect().left);
					var w_y = eventposition.offsetY || (eventposition.clientY - this.container.getBoundingClientRect().top);

					// 鼠标在画布中的坐标
					var c_pos = common.windowToCanvas.apply(this, [canvas, w_x, w_y]);
					var c_x = (c_pos.x).toFixed(0);
					// var c_y = (c_pos.y).toFixed(0);

					// 当前点在数组中的下标
					var index = Math.floor((c_x - padding.left) / rect_w);

					if (time_data && time_data[index]) {

						// 显示十字指示线的
						var cross = common.canvasToWindow.apply(this, [canvas, time_data[index].cross_x, time_data[index].cross_y]);
						var cross_w_x = cross.x;
						var cross_w_y = cross.y;
						inter.cross(canvas, cross_w_x, cross_w_y);

						// Tip显示行情数据
						inter.showTip(canvas, w_x, time_data[index], cross_w_y);
					}

				}

				return ChartTime;
			})();

			module.exports = ChartTime;


			/***/
		}),
/* 5 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制直角坐标系
			 */
			var extend = __webpack_require__(6);
			/*主题*/
			var theme = __webpack_require__(7);
			var draw_dash = __webpack_require__(8);
			var DrawXY = (function () {
				//构造方法
				function DrawXY(options) {
					/*设置默认参数*/
					this.defaultoptions = theme.draw_xy;
					this.options = {};
					extend(false, this.options, this.defaultoptions, options);
					/*绘图*/
					this.draw();
				};
				/*绘图*/
				DrawXY.prototype.draw = function () {
					var data = this.options.data; console.log('888', data)
					var ctx = this.options.context;
					// var dpr = this.options.dpr;

					/*Y轴上的最大值*/
					var y_max = data.max;
					/*Y轴上的最小值*/
					var y_min = data.min;

					/*Y轴上分隔线数量*/
					var sepe_num = this.options.y_sep
					/*开盘收盘时间数组*/
					var oc_time_arr = data.timeStrs;

					/*K线图的高度*/
					var k_height = this.options.c_1_height;
					/*Y轴标识线列表*/
					var line_list_array = getLineList(y_max, y_min, sepe_num, k_height);

					this.options.line_list_array = line_list_array;

					drawXY.call(this, ctx, y_max, y_min, line_list_array);


					// 绘制横坐标刻度
					if (oc_time_arr) {
						console.log(999)
						drawXMark.apply(this, [ctx, k_height, oc_time_arr, data.total]);
					}

				};

				DrawXY.prototype.drawYMark = function () {
					var data = this.options.data;
					var ctx = this.options.context;

					/*Y轴上的最大值*/
					var y_max = data.max;
					/*Y轴上的最小值*/
					var y_min = data.min;
					var line_list_array = this.options.line_list_array;
					drawYMark.call(this, ctx, y_max, y_min, line_list_array);
				}

				function drawYMark(ctx, y_max, y_min, line_list_array) {
					var _this = this;
					var padding = this.options.padding;
					var k_height = this.options.c_1_height,
						k_width = ctx.canvas.width - padding.left - padding.right;
					var sepe_num = line_list_array.length;
					ctx.save();
					ctx.strokeStyle = "#e5e5e5";

					for (var i = 0, item; item = line_list_array[i]; i++) {
						ctx.beginPath();

						if (i < (sepe_num - 1) / 2) {
							ctx.fillStyle = '#19AF43';
						} else if (i > (sepe_num - 1) / 2) {
							ctx.fillStyle = '#D53D25';
						} else {
							ctx.fillStyle = '#c8c8c8';
						}


						if (i == 0) {
							ctx.textBaseline = "bottom";
						} else if (i == sepe_num - 1) {
							ctx.textBaseline = "top";
						} else {
							ctx.textBaseline = "middle";
						}
						// 绘制纵坐标刻度
						//移动分时图坐标位置调整
						if (isNaN(item.num)) {
							ctx.fillText("0.00", 5, item.y);
						} else {
							if (i == line_list_array.length - 1 || i == 0) {
								ctx.fillText((item.num).toFixed(this.options.pricedigit), 5, item.y);
							} else {
								ctx.fillText((item.num).toFixed(this.options.pricedigit), 5, item.y - 10);
							}
						}

						// 绘制纵坐标涨跌幅,分时涨跌幅
						if (i == line_list_array.length - 1 || i == 0) {
							drawYPercent.call(_this, ctx, y_max, y_min, item, 0);
						} else {
							drawYPercent.call(_this, ctx, y_max, y_min, item, 10);
						}


					}
					ctx.restore();
				}

				// 绘制分时图坐标轴
				function drawXY(ctx, y_max, y_min, line_list_array) {
					var _this = this;
					var padding = this.options.padding;
					var k_height = this.options.c_1_height,
						k_width = ctx.canvas.width - padding.left - padding.right;
					var sepe_num = line_list_array.length;
					ctx.save();
					//手机分时图上面横着的线框
					ctx.strokeStyle = "rgba(199,16,72,0.3)";

					for (var i = 0, item; item = line_list_array[i]; i++) {
						ctx.beginPath();

						if (i % 2 == 1) {
							draw_dash(ctx, 0, Math.round(item.y), ctx.canvas.width, Math.round(item.y), 5);
						} else {
							ctx.moveTo(0, Math.round(item.y));
							ctx.lineTo(ctx.canvas.width, Math.round(item.y));
							ctx.stroke();
						}
					}
					ctx.rect(1, 0, k_width, k_height);
					ctx.stroke();
					ctx.restore();
				}
				/*绘制纵坐标涨跌幅，分时涨跌幅*/
				function drawYPercent(ctx, y_max, y_min, obj, x) {
					/*纵坐标中间值*/
					var y_middle = (y_max + y_min) / 2;
					/*画布宽度*/
					var k_width = ctx.canvas.width;
					/*纵坐标刻度涨跌幅*/
					if (y_middle) {
						var percent = ((obj.num - y_middle) / y_middle * 100).toFixed(2) + "%";
					} else {
						var percent = "0.00%";
					}
					/*绘制纵坐标刻度百分比*/
					ctx.fillText(percent, k_width - ctx.measureText(percent).width - 5, obj.y - x);
				}
				/*绘制横坐标刻度值*/
				function drawXMark(ctx, k_height, oc_time_arr, total) {
					console.log('时间', oc_time_arr)
					// var dpr = this.options.dpr;
					var padding_left = this.options.padding.left;
					ctx.save();
					ctx.beginPath();
					ctx.fillStyle = '#A0A0A0';
					ctx.textBaseline = "middle";
					/*画布宽度*/
					var k_width = ctx.canvas.width - padding_left;
					var y_date = k_height + (ctx.canvas.height / 8) * 1 / 3;
					var oc_length = oc_time_arr.length;
					var temp_x = 0;
					if (this.options.type.toLowerCase() == "r") {
						for (var i = 0; i < oc_length; i++) {
							if (i == 0) {
								ctx.fillText(oc_time_arr[i].str, padding_left, y_date);
							} else if (i == oc_length - 1) {
								ctx.fillText(oc_time_arr[i].str, k_width - ctx.measureText(oc_time_arr[i].str).width, y_date);
							} else {
								var x = k_width * (oc_time_arr[i].tick / total) + padding_left - ctx.measureText(oc_time_arr[i].str).width / 2;
								var last_x = k_width * (oc_time_arr[oc_length - 1].tick / total) + padding_left - ctx.measureText(oc_time_arr[oc_length - 1].str).width;
								var start_x = temp_x + ctx.measureText(oc_time_arr[i].str).width;
								if ((start_x + 10) > x || (x + ctx.measureText(oc_time_arr[i].str).width + 10) > last_x) {
									continue;
								} else {
									temp_x = x;
									ctx.fillText(oc_time_arr[i].str, x, y_date);
								}

							}
						}
					} else {
						var unit = (k_width - padding_left) / oc_length;
						for (var j = 0; j < oc_length; j++) {
							ctx.fillText(oc_time_arr[j], (j + 1) * unit - unit / 2 - ctx.measureText(oc_time_arr[j]).width / 2, y_date);
						}
					}

					var x_sep = this.options.x_sep;
					/*绘制x轴上的竖直分割线*/
					var itemWidth = k_width / x_sep;
					//手机分时图上面竖着的线框
					ctx.strokeStyle = "rgba(199,16,72,0.3)";
					for (var j = 1; j < x_sep; j++) {
						var flag = false;
						ctx.beginPath();

						if (this.options.type.toLowerCase() == "t1" && j == x_sep / 2) {
							flag = true;
						} else if (this.options.type.toLowerCase() == "t2") {
							this.options.x_sep = 2;
							if (j == 1) {
								flag = true;
							}
						} else if (this.options.type.toLowerCase() == "t3") {
							this.options.x_sep = 3;
						} else if (this.options.type.toLowerCase() == "t4") {
							this.options.x_sep = 4;
							if (j == 2) {
								flag = true;
							}
						} else if (this.options.type.toLowerCase() == "t5") {
							this.options.x_sep = 5;
						} else {
							flag = false;
						}

						if (flag) {
							ctx.strokeStyle = "#e5e5e5";
							ctx.moveTo(padding_left + itemWidth * j, 0);
							ctx.lineTo(padding_left + itemWidth * j, k_height);
							ctx.stroke();
						} else {
							draw_dash(ctx, Math.round(padding_left + itemWidth * j), 0, Math.round(padding_left + itemWidth * j), k_height, 5);
						}
					}
					ctx.restore();
				}
				/*Y轴标识线列表*/
				function getLineList(y_max, y_min, sepe_num, k_height) {
					var ratio = (y_max - y_min) / (sepe_num - 1);
					var result = [];
					for (var i = 0; i < sepe_num; i++) {
						result.push({
							num: (y_min + i * ratio),
							x: 0,
							y: k_height - (i / (sepe_num - 1)) * k_height
						});
					}
					return result;
				}

				function toSim(dpr, num) {
					return Math.floor(num / dpr) * dpr + dpr / 2;
				}

				return DrawXY;
			})();

			module.exports = DrawXY;


			/***/
		}),
/* 6 */
/***/ (function (module, exports) {

			var hasOwn = Object.prototype.hasOwnProperty;
			var toStr = Object.prototype.toString;

			var isArray = function isArray(arr) {
				if (typeof Array.isArray === 'function') {
					return Array.isArray(arr);
				}

				return toStr.call(arr) === '[object Array]';
			};

			var isPlainObject = function isPlainObject(obj) {
				if (!obj || toStr.call(obj) !== '[object Object]') {
					return false;
				}

				var hasOwnConstructor = hasOwn.call(obj, 'constructor');
				var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
				// Not own constructor property must be Object
				if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
					return false;
				}

				// Own properties are enumerated firstly, so to speed up,
				// if last one is own, then all properties are own.
				var key;
				for (key in obj) { /**/ }

				return typeof key === 'undefined' || hasOwn.call(obj, key);
			};

			module.exports = function extend() {
				var options, name, src, copy, copyIsArray, clone;
				var target = arguments[0];
				var i = 1;
				var length = arguments.length;
				var deep = false;

				// Handle a deep copy situation
				if (typeof target === 'boolean') {
					deep = target;
					target = arguments[1] || {};
					// skip the boolean and the target
					i = 2;
				} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
					target = {};
				}

				for (; i < length; ++i) {
					options = arguments[i];
					// Only deal with non-null/undefined values
					if (options != null) {
						// Extend the base object
						for (name in options) {
							src = target[name];
							copy = options[name];

							// Prevent never-ending loop
							if (target !== copy) {
								// Recurse if we're merging plain objects or arrays
								if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
									if (copyIsArray) {
										copyIsArray = false;
										clone = src && isArray(src) ? src : [];
									} else {
										clone = src && isPlainObject(src) ? src : {};
									}

									// Never move original objects, clone them
									target[name] = extend(deep, clone, copy);

									// Don't bring in undefined values
								} else if (typeof copy !== 'undefined') {
									target[name] = copy;
								}
							}
						}
					}
				}

				// Return the modified object
				return target;
			};

			/***/
		}),
/* 7 */
/***/ (function (module, exports) {

			/**
			 * 默认主题
			 */

			var defaultopions = {
				defaulttheme: {
					spacing: 0.4, //K线柱体的间距比例，取值范围[0,1]
					padding_left: 30,//画布的左内边距
					k_v_away: 30,//K线图表和成交量之间的间距
					canvas_offset_top: 40,//画布的上内边距
					point_width: 6,
					font_size: 12,//默认字体大小
					point_color: "#8f8f8f",//鼠标指示线交点颜色
					up_color: "#ff0000",
					down_color: "#17b03e"
				},
				// 分时线图表配置参数
				chartTime: {
					crossline: true
				},
				// K线图表配置参数
				chartK: {
					crossline: false
				},
				// 折线图表配置参数
				chartLine: {
					showPoint: false,	//是否显示折线图上的节点
					canvasPaddingTop: 10, //画布的上内边距
					canvasPaddingLeft: 20, //画布的左内边距
					pointRadius: 10,
					lineMarkWidth: 15
				},
				// 坐标轴配置参数
				draw_xy: {
					axis_color: "#fff", //坐标轴颜色
					y_max: 100,//纵坐标最小值
					y_min: 0,//纵坐标最小值
					sepe_num: 5, 	//沿Y轴平均分割线的个数
					y_padding_per: 0.05, //画布上线内间距占(y_max - y_min)的比例
					date_offset_top: 15//横坐标轴上的日期刻度
				},
				// web的坐标轴配置参数
				draw_xy_web: {
					spacing: 0.4, //K线柱体的间距比例，取值范围[0,1]
					padding_left: 30,//画布的左内边距
					k_v_away: 30,//K线图表和成交量之间的间距
					canvas_offset_top: 40,//画布的上内边距
					point_width: 5,
					font_size: 12,//默认字体大小
					point_color: "#8f8f8f",//鼠标指示线交点颜色
					up_color: "#ff0000",
					down_color: "#17b03e",
					axis_color: "#fff", //坐标轴颜色
					y_max: 100,//纵坐标最小值
					y_min: 0,//纵坐标最小值
					sepe_num: 9, 	//沿Y轴平均分割线的个数
					y_padding_per: 0.05, //画布上线内间距占(y_max - y_min)的比例
					date_offset_top: 15,//横坐标轴上的日期刻度
					crossline: true
				},
				// 分时图配置参数
				draw_line: {
					avg_cost_color: "#f1ca15"   //平均线的颜色
				},
				draw_k: {

				},
				draw_ma: {

				},
				// 成交量配置参数
				draw_v: {

				},
				// 图表交互
				interactive: {

				}
			};

			module.exports = defaultopions;

			/***/
		}),
/* 8 */
/***/ (function (module, exports, __webpack_require__) {

			// 格式化坐标
			var XYF = __webpack_require__(9);
			function drawDashLine(ctx, x1, y1, x2, y2, dashLength) {
				// 保存画笔状态
				ctx.save();
				var dashLen = dashLength === undefined ? 5 : dashLength,
					xpos = x2 - x1, //得到横向的宽度;
					ypos = y2 - y1, //得到纵向的高度;
					numDashes = Math.floor(Math.sqrt(xpos * xpos + ypos * ypos) / dashLen);
				//利用正切获取斜边的长度除以虚线长度，得到要分为多少段;
				for (var i = 0; i < numDashes; i++) {

					if (i % 2 === 0) {
						ctx.moveTo(XYF(x1 + (xpos / numDashes) * i), XYF(y1 + (ypos / numDashes) * i));
						//有了横向宽度和多少段，得出每一段是多长，起点 + 每段长度 * i = 要绘制的起点；
					} else {
						ctx.lineTo(XYF(x1 + (xpos / numDashes) * i), XYF(y1 + (ypos / numDashes) * i));
					}
				}
				ctx.stroke();
				// 恢复画笔状态
				ctx.restore();
			}

			module.exports = drawDashLine;

			/***/
		}),
/* 9 */
/***/ (function (module, exports) {

			function XYF(num) {
				if (isNaN(num)) {
					return num;
				} else {
					var result = Math.floor(num);
					return result + 0.5;
				}
			}

			module.exports = XYF;

			/***/
		}),
/* 10 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 获取手机分时图数据
			 * 返回数据对象
			 *   result{
			 *      name://股票名字
			 *      data: [//当前各个时间点
			 *          {   //一个对象代表一个点
			 *              price:价格：45.50
			 *              time:时间: 10:00
			 *              volume:换手数 12000
			 *              percent:涨跌百分比 -8.9%
			 *              up:涨跌标志: false(跌)
			 *              isCR:false(不包含盘前数据),true(包含盘前数据)
			 *          }   
			 *      ]
			 *      v_max: //最大成交量
			 *      max://坐标最大值
			 *      min://坐标最小值
			 *      yc://昨收
			 *   }
			 */

			var dealdata = __webpack_require__(11); //处理数据

			var jsonp = __webpack_require__(14);


			function getdata(option, callback, interactive) {

				var url = 'http://pdfm.eastmoney.com/EM_UBG_PDTI_Fast/api/js';
				var callbackstring = 'fsdata';
				var type = option.type.toLowerCase();
				if (type === "t1") {
					type = "r";
				}
				var urldata = {
					id: option.id,
					TYPE: type,
					js: callbackstring + '((x))',
					'rtntype': 5,
					isCR: false
				};
				// setInterval(() => {
				// 	jsonp(url, urldata, callbackstring, function (json) {
				// 		try {
				// 			if (!json) {
				// 				callback(null);
				// 			} else {
				// 				var result = dealdata(json, type, option.id);
				// 				callback(result);
				// 			}

				// 		} catch (e) {
				// 			// 暂无数据
				// 			interactive.showNoData();
				// 			// 隐藏loading效果
				// 			interactive.hideLoading();
				// 		}

				// 	});
				// },5000)
				jsonp(url, urldata, callbackstring, function (json) {
					try {
						if (!json) {
							callback(null);
						} else {
							var result = dealdata(json, type, option.id);
							callback(result);
						}

					} catch (e) {
						// 暂无数据
						interactive.showNoData();
						// 隐藏loading效果
						interactive.hideLoading();
					}

				});
			}

			module.exports = getdata;


			/***/
		}),
/* 11 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * [dealData description]
			 * @return [
			 *         data1:{
			 *              价格：price
			 *              时间:time
			 *              换手数:volume
			 *              涨跌百分比: percent
			 *              涨跌标志:up?
			 *              平均成本：avg_cost
			 *              成交量最大值：v_max
			 *         }]
			 * 
			 */

			var coordinate = __webpack_require__(12); //处理数据
			var fix = __webpack_require__(13).fixed;

			var dealData = function (json, type, id) {
				/*归属地（美股，港股，内地）*/
				var blongTo = id.charAt(id.length - 1);
				var info = json.info;
				var ticks = info.ticks.split('|');
				var yc = info.yc;
				var pricedigit = 0;
				var jys = info.jys;
				// 保留小数位
				if (info.pricedigit.split(".").length > 1) {
					pricedigit = info.pricedigit.split(".")[1].length == 0 ? 2 : info.pricedigit.split(".")[1].length;
				}
				var max = 0;
				var min = yc;
				var v_max = 0;
				var tempDate = "";
				var dateStrs = [];
				var arryData = json.data;
				var result = {};
				result.name = json.name;
				console.log('我是名字' + result.name);
				result.pricedigit = pricedigit;
				result.yc = yc;
				result.data = [];
				result.total = info.total;
				result.timeStrs = [];

				/*时间刻度数组*/

				for (var i = 0; i < arryData.length; i++) {
					var items = arryData[i].split(",");
					if (tempDate !== items[0].split(" ")[0]) {
						var dateArr = items[0].split(" ")[0].split("-");
						tempDate = items[0].split(" ")[0];
						dateStrs.push(dateArr[1] + "/" + dateArr[2]);
					}

					v_max = v_max > Number(items[2]) ? v_max : Number(items[2]);

					if (items[1] >= items[3]) {
						var _max = items[1];
						var _min = items[3];
					} else {
						var _min = items[1];
						var _max = items[3];
					}

					max = Math.max(max, _max);
					min = Math.min(min, _min);

					var point = {};
					point.time = items[0].split(" ")[1];
					point.price = items[1];
					/*涨跌幅和涨跌幅标志*/
					if (i != 0) {
						point.percent = (yc == 0 ? 0 : ((items[1] - yc) / yc * 100).toFixed(2));
						point.up = items[1] - yc > 0 ? true : false;
					} else {
						point.percent = (yc == 0 ? 0 : ((items[1] - yc) / yc * 100).toFixed(2));
						point.up = items[1] - yc > 0 ? true : false;
					}

					point.volume = Number((Number(items[2])).toFixed(0));
					point.avg_cost = items[3];
					result.data.push(point);
				}

				//一下算出总的时刻数
				var totalTicks = 0;
				var te = [];
				//所有开闭的时间点（成对出现）
				var changeTicks = ticks.slice(3);
				//所有a股的股票
				for (i = 0, len = changeTicks.length; i < len; i += 2) {
					var preTicks = totalTicks;
					totalTicks += (changeTicks[i + 1] - changeTicks[i]) / 60 + 1;
					if (i !== 0) {
						te.push({ "str": tickToStr(changeTicks[i - 1]) + "/" + tickToStr(changeTicks[i]), "tick": preTicks });
						if (i === len - 2) {
							te.push({ "str": tickToStr(changeTicks[i + 1]), "tick": totalTicks });
						}
					} else {
						te.push({ "str": tickToStr(changeTicks[i]), "tick": 0 });
						if (i === len - 2) {
							te.push({ "str": tickToStr(changeTicks[i + 1]), "tick": totalTicks });
						}
					}
				}
				if (jys != 2 && jys != 6 && jys != 13 && jys != 80) {
					te = [];
					te.push({ "str": tickToStr(changeTicks[0]), "tick": 0 });
					te.push({ "str": tickToStr(changeTicks[changeTicks.length - 1]), "tick": totalTicks });
				}
				//获取时间点对应的时间字符串数组 

				if (type === 'r') {
					result.timeStrs = [].concat(te);
				} else {
					result.timeStrs = dateStrs;
					if (type.match(/[0-9]/)[0] < dateStrs.length) {
						result.timeStrs = dateStrs.slice(1);
					}
				}
				result.total = totalTicks;
				if (type.match(/[0-9]/)) {
					result.total = (totalTicks) * type.match(/[0-9]/)[0];
				}

				result.max = coordinate(max, min, yc).max;
				result.min = coordinate(max, min, yc).min;
				return result;

			};

			function tickToStr(tick) {
				var hour = Math.floor((tick / 60) / 60);
				var minute = (tick / 60) % 60;
				return fix(hour % 24, 2) + ":" + fix(minute, 2);
			}

			module.exports = dealData;


			/***/
		}),
/* 12 */
/***/ (function (module, exports) {

			/**
			 * 分时图坐标上下限算法
			 */

			/*
			1.遍历出当前价的最高(high),最低点(low)
			2.和昨收(pre)价进行比较
				Math.Abs(pre-high)   
				Math.Abs(pre-low)  
					取两个中比较大的值 设为offset
						top=pre+offset*1.05;
						fall=pre-offset*1.05;
				
				同时满足如果fall<=0则为fall=0
				如果high==low==pre则
					top=pre*1.08
					fall=pre*0.92
			
				如果pre==0 则top==fall==0
			 */

			/**
			 * 分时图坐标上下限
			 * @param  {[type]} high 最高
			 * @param  {[type]} low 最低
			 * @param  {[type]} pre  昨收
			 */
			function coordinate(high, low, pre) {
				var top = 0;
				var fall = 0;
				var offset = Math.max(Math.abs(pre - high), Math.abs(pre - low));

				top = Number(pre) + offset * 1.05;
				fall = Number(pre) - offset * 1.05;
				if (fall <= 0) {
					fall = 0;
				}
				if (high == low && low == pre) {
					top = pre * 1.08;
					fall = pre * 0.92;
				}
				if (pre == 0) {
					top = 0;
					fall = 0;
				}

				return { max: top, min: fall };
			}

			module.exports = coordinate;

			/***/
		}),
/* 13 */
/***/ (function (module, exports) {

			var common = {
				// 由股票代码判断股票上市场所，1(沪市)或2(深市)或5(港股)
				getMktByCode: function (code) {
					if (code.Length < 3)
						return code + "1";
					var one = code.substr(0, 1);
					var three = code.substr(0, 3);
					if (one == "5" || one == "6" || one == "9") {
						return code + "1";
					} else {
						if (three == "009" || three == "126" || three == "110" || three == "201" || three == "202" || three == "203" || three == "204") {
							return code + "1";
						} else {
							return code + "2";
						}
					}
				},
				// 数字标准化，字符串输出，例如：9----->09
				fixed: function (str, len) {
					var i = 0;
					str = str.toString();
					var result = str;
					for (i = 0; i < len - str.length; i++) {
						result = '0' + result;
					}

					return result;
				},
				// 日期标准化，字符串输出，例如: 20121112---->2012-11-12
				transform: function (str) {
					return str.replace(/(\d{4})(\d{2})(\d{2})/g, function (whole, a, b, c) {
						return a + "-" + b + "-" + c;
					});
				},
				// 将鼠标坐标转换为Canvas坐标
				windowToCanvas: function (canvas, x, y) {
					// var box = canvas.getBoundingClientRect();
					return {
						// x:(x-box.left)*(canvas.width/box.width),
						// y:(y-box.top)*(canvas.height/box.height)

						x: x * this.options.dpr,
						y: y * this.options.dpr
					};
				},
				// 将Canvas坐标转换为鼠标坐标
				canvasToWindow: function (canvas, x, y) {
					var box = canvas.getBoundingClientRect();
					// 相对于窗口
					// return {
					//     x:(x *(box.width/canvas.width)+box.left),
					//     y:(y *(box.height/canvas.height)+box.top + this.options.canvas_offset_top/this.options.dpr)
					// };
					return {
						x: x / this.options.dpr,
						// x:x * (box.width/canvas.width),
						y: (y + this.options.canvas_offset_top) * (box.height / canvas.height)
					};
				},
				// 图表y轴坐标计算
				get_y: function (y) {
					// console.log(this.options.c_1_height - (this.options.c_1_height * (y - this.options.data.min)/(this.options.data.max - this.options.data.min)));
					return this.options.c_1_height - (this.options.c_1_height * (y - this.options.data.min) / (this.options.data.max - this.options.data.min));
				},
				// 图表x轴坐标计算
				get_x: function (x) {
					var canvas = this.options.context.canvas;
					var type = this.options.type;
					var rect_w = this.options.rect_unit.rect_w;
					var num = this.options.data.data.length;
					var total = this.options.data.total;
					var padding_left = this.options.padding_left;
					// var dpr = this.options.dpr;

					if (type == "TL") {
						return (canvas.width - padding_left) / total * x + padding_left;
					} else {
						return (canvas.width - padding_left) / num * x + padding_left - (rect_w / 2);
					}

				},
				// 图表x轴坐标计算
				get_rect: function (canvas, num) {
					var rect_w = (canvas.width - this.options.padding_left) / num;
					var bar_w = rect_w * (1 - this.options.spacing);
					return {
						rect_w: rect_w,
						bar_w: bar_w
					};
				},
				// 格式化数据单位
				format_unit: function (value, num) {
					num = num == undefined ? 2 : num;
					var flag = false;
					if (value < 0) {
						value = Math.abs(value);
						flag = true;
					}

					var temp_value = 0;
					var unit = "";

					if (flag) {
						if (value < 10000) {
							temp_value = (value / 1);
						} else if (value >= 10000 && value < 100000000) {
							temp_value = (value / 10000);
							unit = "万";
						} else if (value >= 100000000) {
							temp_value = (value / 100000000);
							unit = "亿";
						} else {
							temp_value = (value / 1);
						}
						temp_value = temp_value * (-1);

					} else {
						if (value < 10000) {
							temp_value = (value / 1);
						} else if (value >= 10000 && value < 100000000) {
							temp_value = (value / 10000);
							unit = "万";
						} else if (value >= 100000000) {
							temp_value = (value / 100000000);
							unit = "亿";
						} else {
							temp_value = (value / 1);
						}
					}

					if ((temp_value / 1).toFixed(num) / 1 == (temp_value / 1).toFixed(0) / 1) {
						num = 0;
					}

					return parseFloat((temp_value / 1).toFixed(num)) + unit;
				},//格式化数据
				translate: function (str) {
					var len = (str + "").length;
					if (len <= 4) {
						return str;
					} else if (len < 9) {
						return simT(str * 1 / 10000) + "万";
					} else if (len < 13) {
						return simT(str * 1 / Math.pow(10, 8)) + "亿";
					} else if (len <= 16) {
						return simT(str * 1 / Math.pow(10, 12)) + "万亿";
					}

					function simT(num) {
						if (num < 100) {
							return num.toFixed(2);
						} else {
							return Math.round(num);
						}
					}
				},
				/**
				 * 兼容性的事件添加
				 * @param {[type]}   obj  对哪个元素添加
				 * @param {[type]}   type 事件类型
				 * @param {Function} fn   事件触发的处理函数
				 */
				addEvent: function (obj, type, fn) {
					if (obj.attachEvent) {
						obj['e' + type + fn] = fn;
						obj[type + fn] = function () { obj['e' + type + fn](window.event); }
						obj.attachEvent('on' + type, obj[type + fn]);
					} else
						obj.addEventListener(type, fn, false);
				},
				removeEvent: function (obj, type, fn) {
					if (obj.detachEvent) {
						obj.detachEvent('on' + type, obj[type + fn]);
						obj[type + fn] = null;
					} else
						obj.removeEventListener(type, fn, false);
				}

			};
			module.exports = common;


			/***/
		}),
/* 14 */
/***/ (function (module, exports) {

			/**
			 * jsonp
			 * 使用说明 jsonp([uri], [data], [custom_method_name], [callback(json)])
			 */

			/**
			 * JSONP sets up and allows you to execute a JSONP request
			 * @param {String} url  The URL you are requesting with the JSON data
			 * @param {Object} data The Data object you want to generate the URL params from
			 * @param {String} method  The method name for the callback function. Defaults to callback (for example, flickr's is "jsoncallback")
			 * @param {Function} callback  The callback you want to execute as an anonymous function. The first parameter of the anonymous callback function is the JSON
			 *
			 * @example
			 * JSONP('http://twitter.com/users/oscargodson.json',function(json){
			 *  document.getElementById('avatar').innerHTML = '<p>Twitter Pic:</p><img src="'+json.profile_image_url+'">';
			 * });
			 *
			 * @example
			 * JSONP('http://api.flickr.com/services/feeds/photos_public.gne',{'id':'12389944@N03','format':'json'},'jsoncallback',function(json){
			 *  document.getElementById('flickrPic').innerHTML = '<p>Flickr Pic:</p><img src="'+json.items[0].media.m+'">';
			 * });
			 *
			 * @example
			 * JSONP('http://graph.facebook.com/FacebookDevelopers', 'callback', function(json){
			 *  document.getElementById('facebook').innerHTML = json.about;
			 * });
			 */

			var JSONP = function (url, data, method, callback) {
				//Set the defaults
				url = url || '';
				data = data || {};
				method = method || '';
				callback = callback || function () { };

				//Gets all the keys that belong
				//to an object
				var getKeys = function (obj) {
					var keys = [];
					for (var key in obj) {
						if (obj.hasOwnProperty(key)) {
							keys.push(key);
						}

					}
					return keys;
				}

				//Turn the data object into a query string.
				//Add check to see if the second parameter is indeed
				//a data object. If not, keep the default behaviour
				if (typeof data == 'object') {
					var queryString = '';
					var keys = getKeys(data);
					for (var i = 0; i < keys.length; i++) {
						queryString += encodeURIComponent(keys[i]) + '=' + encodeURIComponent(data[keys[i]])
						if (i != keys.length - 1) {
							queryString += '&';
						}
					}
					url += '?' + queryString;
				} else if (typeof data == 'function') {
					method = data;
					callback = method;
				}

				//If no method was set and they used the callback param in place of
				//the method param instead, we say method is callback and set a
				//default method of "callback"
				if (typeof method == 'function') {
					callback = method;
					method = 'callback';
				}

				//Check to see if we have Date.now available, if not shim it for older browsers
				if (!Date.now) {
					Date.now = function () { return new Date().getTime(); };
				}

				//Use timestamp + a random factor to account for a lot of requests in a short time
				//e.g. jsonp1394571775161 
				var timestamp = Date.now();
				var generatedFunction = 'jsonp' + Math.round(timestamp + Math.random() * 1000001);
				if (typeof method == 'string') {
					generatedFunction = method;
				}

				//Generate the temp JSONP function using the name above
				//First, call the function the user defined in the callback param [callback(json)]
				//Then delete the generated function from the window [delete window[generatedFunction]]
				window[generatedFunction] = function (json) {
					callback(json);

					// IE8 throws an exception when you try to delete a property on window
					// http://stackoverflow.com/a/1824228/751089
					try {
						document.getElementsByTagName("head")[0].removeChild(jsonpScript);
						delete window[generatedFunction];
					} catch (e) {
						window[generatedFunction] = undefined;
					}

				};

				//Check if the user set their own params, and if not add a ? to start a list of params
				//If in fact they did we add a & to add onto the params
				//example1: url = http://url.com THEN http://url.com?callback=X
				//example2: url = http://url.com?example=param THEN http://url.com?example=param&callback=X
				if (url.indexOf('?') === -1) { url = url + '?'; }
				else { url = url + '&'; }

				//This generates the <script> tag
				var jsonpScript = document.createElement('script');
				jsonpScript.setAttribute("src", url + method + '=' + generatedFunction);
				document.getElementsByTagName("head")[0].appendChild(jsonpScript)
			}
			module.exports = JSONP;


			/***/
		}),
/* 15 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制K线
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     type:    "TL"(分时图),"DK"(日K线图),"WK"(周K线图),"MK"(月K线图)
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 * }
			 *
			 */

			/*继承*/
			var extend = __webpack_require__(6);
			/*主题*/
			var theme = __webpack_require__(7);
			/*工具*/
			var common = __webpack_require__(13);
			var coordinate = __webpack_require__(16);
			var DrawLine = (function () {
				function DrawLine(options) {
					/*设置默认参数*/
					this.defaultoptions = theme.draw_line;
					this.options = {};
					extend(false, this.options, this.defaultoptions, options);
					/*绘图*/
					this.draw();
				};

				/*绘图*/
				DrawLine.prototype.draw = function () {

					var ctx = this.options.context;
					var data = this.options.data;
					var data_arr = data.data;

					drawStroke.apply(this, [ctx, data_arr]);
				};
				/*绘制分时线*/
				function drawStroke(ctx, data_arr) {
					ctx.beginPath();
					ctx.save();

					ctx.strokeStyle = "#195F9A";

					for (var i = 0, item; item = data_arr[i]; i++) {
						var x = coordinate.get_x.call(this, i + 1);
						var y = coordinate.get_y.call(this, item.price);
						ctx.lineTo(x, y);
						item.cross_x = x;
						item.cross_y = y;
					}
					ctx.stroke();
					ctx.restore();
				}
				return DrawLine;
			})();

			module.exports = DrawLine;

			/***/
		}),
/* 16 */
/***/ (function (module, exports) {

			var coordinate = {

				// 将鼠标坐标转换为Canvas坐标
				windowToCanvas: function (canvas, x, y) {
					// var box = canvas.getBoundingClientRect();
					return {
						// x:(x-box.left)*(canvas.width/box.width),
						// y:(y-box.top)*(canvas.height/box.height)

						x: x * this.options.dpr,
						y: y * this.options.dpr
					};
				},
				// 将Canvas坐标转换为鼠标坐标
				canvasToWindow: function (canvas, x, y) {
					var box = canvas.getBoundingClientRect();
					// 相对于窗口
					// return {
					//     x:(x *(box.width/canvas.width)+box.left),
					//     y:(y *(box.height/canvas.height)+box.top + this.options.canvas_offset_top/this.options.dpr)
					// };
					return {
						x: x / this.options.dpr,
						// x:x * (box.width/canvas.width),
						y: (y + this.options.canvas_offset_top) * (box.height / canvas.height)
					};
				},
				// 图表y轴坐标计算
				get_y: function (y) {
					if (this.options.data.max - this.options.data.min == 0) {
						return this.options.c_1_height / 2;
					}
					return this.options.c_1_height - (this.options.c_1_height * (y - this.options.data.min) / (this.options.data.max - this.options.data.min));
				},
				// 图表x轴坐标计算
				get_x: function (x) {
					var canvas = this.options.context.canvas;
					var type = this.options.type;
					var rect_w = this.options.rect_unit.rect_w;
					var num = this.options.data.data.length;
					var total = this.options.data.total;
					var padding_left = this.options.padding_left;
					// var dpr = this.options.dpr;
					return (canvas.width - padding_left - this.options.padding.right) / total * x + padding_left;
				}

			};
			module.exports = coordinate;


			/***/
		}),
/* 17 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制分时图平均成本线
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     type:    "TL"(分时图),"DK"(日K线图),"WK"(周K线图),"MK"(月K线图)
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 
			 * }
			 *
			 */

			// 拓展，合并，复制
			var extend = __webpack_require__(6);
			// 主题
			var theme = __webpack_require__(7);
			// 工具
			var common = __webpack_require__(13);
			var coordinate = __webpack_require__(16);
			var Draw_Avg_Cost = (function () {
				function Draw_Avg_Cost(options) {
					// 设置默认参数
					this.defaultoptions = theme.draw_line;
					this.options = {};
					extend(true, this.options, this.defaultoptions, options);
					// 绘图
					this.draw();
				}

				Draw_Avg_Cost.prototype.draw = function () {
					var ctx = this.options.context;
					var data = this.options.data;
					this.options.height = ctx.canvas.height * theme.defaulttheme.c_h_percent;
					// 绘制平均线
					this.draw_k(ctx, data);
				};
				// 绘制平均线
				Draw_Avg_Cost.prototype.draw_k = function (ctx, data) {
					var color = this.options.avg_cost_color;
					var data_arr = data.data;
					ctx.beginPath();
					ctx.lineWidth = 1;
					ctx.strokeStyle = color;
					ctx.fillStyle = '';
					for (var i = 0; i < data_arr.length; i++) {
						var x = coordinate.get_x.call(this, i + 1);
						var y = coordinate.get_y.call(this, data_arr[i].avg_cost);
						if (i == 0) {
							ctx.moveTo(x, y);
						}
						else {
							ctx.lineTo(x, y);
						}

					}
					ctx.stroke();

				};

				return Draw_Avg_Cost
			})()

			module.exports = Draw_Avg_Cost;

			/***/
		}),
/* 18 */
/***/ (function (module, exports, __webpack_require__) {

			/*继承*/
			var extend = __webpack_require__(6);
			/*工具*/
			var common = __webpack_require__(13);
			var draw_dash = __webpack_require__(8);
			/*主题*/
			var theme = __webpack_require__(7);
			var coordinate = __webpack_require__(16);
			var DrawV = (function () {
				function DrawV(options) {
					/*设置默认参数*/
					this.defaultoptions = theme.draw_v;
					this.options = {};
					extend(false, this.options, this.defaultoptions, options);
					/*绘图*/
					this.draw();
				};

				/*绘图*/
				DrawV.prototype.draw = function () {
					/*绘制分时图成交量*/
					var ctx = this.options.context;
					ctx.beginPath();
					ctx.save();
					drawVTime.call(this);
					ctx.restore();

				};
				/*绘制分时图成交量*/
				function drawVTime() {
					var ctx = this.options.context;
					var data = this.options.data;
					/*成交量数组*/
					var data_arr = data.data;
					var padding_left = this.options.padding_left;
					var v_height = this.options.unit.unitHeight * 2;
					var v_base_height = v_height * 0.9;
					var y_v_bottom = ctx.canvas.height;
					var y_v_top = y_v_bottom - v_height;
					var y_v_width = ctx.canvas.width - this.options.padding_left;
					var x_sep = this.options.x_sep;
					/*绘制x轴上的竖直分割线*/
					var itemWidth = y_v_width / x_sep;

					if (!data_arr || data_arr.length == 0) {
						ctx.beginPath();
						ctx.fillStyle = '#999';
						ctx.strokeStyle = '#e5e5e5';
						// ctx.fillText(0, 0, y_v_top + 10);
						ctx.rect(this.options.padding_left, y_v_top, ctx.canvas.width - this.options.padding_left, v_height - 2);
						ctx.stroke();
						return;
					}

					this.options.data.v_max = getVMax(this.options.data);

					/*Y轴上的最大值*/
					var v_max = (data.v_max).toFixed(0);


					/*获取单位矩形对象*/
					var rect_unit = this.options.rect_unit;
					/*K线柱体的宽度*/
					var bar_w = rect_unit.bar_w;
					/*K线柱体的颜色*/
					var up_color = this.options.up_color;
					var down_color = this.options.down_color;
					if (this.options.showVMax === true) {
						markVMax(ctx, v_max, y_v_top);
					}

					/*绘制边框和分割线*/
					ctx.beginPath();
					//手机分时图下面的线框
					ctx.strokeStyle = 'rgba(199,16,72,0.3)';
					ctx.lineWidth = this.options.dpr;
					ctx.rect(this.options.padding_left + 1, y_v_top, y_v_width - 2, v_height - 2);
					ctx.moveTo(padding_left, y_v_top + v_height / 2);
					ctx.lineTo(y_v_width, y_v_top + v_height / 2);
					ctx.stroke();
					for (var j = 1; j <= x_sep - 1; j++) {
						var flag = false;
						ctx.beginPath();

						if (this.options.type.toLowerCase() == "t2") {
							this.options.x_sep = 2;
							if (j == 1) {
								flag = true;
							}
						} else if (this.options.type.toLowerCase() == "t3") {
							this.options.x_sep = 3;
						} else if (this.options.type.toLowerCase() == "t4") {
							this.options.x_sep = 4;
							if (j == 2) {
								flag = true;
							}
						} else if (this.options.type.toLowerCase() == "t5") {
							this.options.x_sep = 5;
						} else {
							flag = false;
						}

						if (flag) {
							ctx.moveTo(padding_left + y_v_width / 2, y_v_top);
							ctx.lineTo(padding_left + y_v_width / 2, y_v_bottom);
							ctx.stroke();
						} else {
							draw_dash(ctx, itemWidth * (j) + padding_left, y_v_top, itemWidth * (j) + padding_left, y_v_bottom);
						}

					}

					ctx.lineWidth = 1;
					for (var i = 0, item; item = data_arr[i]; i++) {

						var volume = item.volume;
						var is_up = item.up;
						var bar_height = volume / v_max * v_base_height;
						var x = coordinate.get_x.call(this, i + 1);
						var y = y_v_bottom - bar_height;

						ctx.beginPath();
						ctx.moveTo(x, y);

						if (i == 0) {
							if (is_up) {
								ctx.fillStyle = up_color;
								ctx.strokeStyle = up_color;
							} else {
								ctx.fillStyle = down_color;
								ctx.strokeStyle = down_color;
							}
						} else {
							if (item.price >= data_arr[i - 1].price) {
								ctx.fillStyle = up_color;
								ctx.strokeStyle = up_color;
							} else {
								ctx.fillStyle = down_color;
								ctx.strokeStyle = down_color;
							}
						}

						ctx.rect(x - bar_w / 2, y, bar_w, bar_height);
						ctx.fill();
					}

				}
				// 标识最大成交量
				function markVMax(ctx, v_max, y_v_end) {
					ctx.beginPath();
					ctx.fillStyle = '#999';
					ctx.textBaseline = "top";
					ctx.fillText(common.format_unit(v_max), 0, y_v_end + 10);
					ctx.stroke();
				}
				// 获取最大成交量
				function getVMax(data) {
					if (data.data[0]) {
						var max = data.data[0].volume;
					} else {
						var max = 0;
					}

					for (var i = 0, item = data.data; i < data.data.length; i++) {
						if (max < item[i].volume) {
							max = item[i].volume;
						}
					}
					return max
				}

				return DrawV;
			})();

			module.exports = DrawV;


			/***/
		}),
/* 19 */
/***/ (function (module, exports) {

			var common = {
				// 由股票代码判断股票上市场所，1(沪市)或2(深市)或5(港股)
				getMktByCode: function (code) {
					if (code.Length < 3)
						return code + "1";
					var one = code.substr(0, 1);
					var three = code.substr(0, 3);
					if (one == "5" || one == "6" || one == "9") {
						return code + "1";
					} else {
						if (three == "009" || three == "126" || three == "110" || three == "201" || three == "202" || three == "203" || three == "204") {
							return code + "1";
						} else {
							return code + "2";
						}
					}
				},
				// 数字标准化，字符串输出，例如：9----->09
				fixed: function (str, len) {
					var i = 0;
					str = str.toString();
					var result = str;
					for (i = 0; i < len - str.length; i++) {
						result = '0' + result;
					}

					return result;
				},
				// 日期标准化，字符串输出，例如: 20121112---->2012-11-12
				transform: function (str) {
					return str.replace(/(\d{4})(\d{2})(\d{2})/g, function (whole, a, b, c) {
						return a + "-" + b + "-" + c;
					});
				},
				// 将鼠标坐标转换为Canvas坐标
				windowToCanvas: function (canvas, x, y) {
					// var box = canvas.getBoundingClientRect();
					return {
						// x:(x-box.left)*(canvas.width/box.width),
						// y:(y-box.top)*(canvas.height/box.height)

						x: x * this.options.dpr,
						y: y * this.options.dpr
					};
				},
				// 将Canvas坐标转换为鼠标坐标
				canvasToWindow: function (canvas, x, y) {
					var box = canvas.getBoundingClientRect();
					// 相对于窗口
					// return {
					//     x:(x *(box.width/canvas.width)+box.left),
					//     y:(y *(box.height/canvas.height)+box.top + this.options.canvas_offset_top/this.options.dpr)
					// };
					return {
						x: x / this.options.dpr,
						// x:x * (box.width/canvas.width),
						y: (y + this.options.canvas_offset_top) * (Math.abs(box.bottom - box.top) / canvas.height)
					};
				},
				// 图表y轴坐标计算
				get_y: function (y) {

					var max = (this.options.currentData && this.options.currentData.max) || this.options.data.max;
					var min = (this.options.currentData && this.options.currentData.min) || this.options.data.min;
					return this.options.c_k_height - (this.options.c_k_height * (y - min) / (max - min));
				},
				// 图表x轴坐标计算
				get_x: function (x) {
					var canvas = this.options.context.canvas;
					var type = this.options.chartType;
					var rect_w = this.options.rect_unit.rect_w;
					var num = (this.options.currentData && this.options.currentData.data.length) || this.options.data.data.length;
					var total = (this.options.currentData && this.options.currentData.total) || this.options.data.total;
					var padding_left = this.options.padding.left;
					var padding_right = this.options.padding.right;
					// var dpr = this.options.dpr;

					if (type == "TL") {
						return (canvas.width - padding_left - padding_right) / total * x + padding_left;
					} else {
						return (canvas.width - padding_left - padding_right) / num * x + padding_left - (rect_w / 2);
					}

				},
				// 图表x轴坐标计算
				get_rect: function (canvas, num) {
					var rect_w = (canvas.width - this.options.padding.left - this.options.padding.right) / num;
					var bar_w = rect_w * (1 - this.options.spacing);
					return {
						rect_w: rect_w,
						bar_w: bar_w
					};
				},
				// 格式化数据单位  
				format_unit: function (value, num) {
					num = num == undefined ? 2 : num;
					var flag = false;
					if (value < 0) {
						value = Math.abs(value);
						flag = true;
					}

					var temp_value = 0;
					var unit = "";

					if (flag) {
						if (value < 10000) {
							temp_value = (value / 1);
						} else if (value >= 10000 && value < 100000000) {
							temp_value = (value / 10000);
							unit = "万";
						} else if (value >= 100000000) {
							temp_value = (value / 100000000);
							unit = "亿";
						} else {
							temp_value = (value / 1);
						}
						temp_value = temp_value * (-1);

					} else {
						if (value < 10000) {
							temp_value = (value / 1);
						} else if (value >= 10000 && value < 100000000) {
							temp_value = (value / 10000);
							unit = "万";
						} else if (value >= 100000000) {
							temp_value = (value / 100000000);
							unit = "亿";
						} else {
							temp_value = (value / 1);
						}
					}

					if ((temp_value / 1).toFixed(num) / 1 == (temp_value / 1).toFixed(0) / 1) {
						num = 0;
					}

					return (temp_value / 1).toFixed(num) + unit;
				},
				/**
				 * 兼容性的事件添加
				 * @param {[type]}   obj  对哪个元素添加
				 * @param {[type]}   type 事件类型
				 * @param {Function} fn   事件触发的处理函数
				 */
				addEvent: function (obj, type, fn) {
					if (obj.attachEvent) {
						obj['e' + type + fn] = fn;
						obj[type + fn] = function () { obj['e' + type + fn](window.event); }
						obj.attachEvent('on' + type, obj[type + fn]);
					} else
						obj.addEventListener(type, fn, false);
				},
				removeEvent: function (obj, type, fn) {
					if (obj.detachEvent) {
						obj.detachEvent('on' + type, obj[type + fn]);
						obj[type + fn] = null;
					} else
						obj.removeEventListener(type, fn, false);
				}

			};
			module.exports = common;


			/***/
		}),
/* 20 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 图表交互
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     type:    "TL"(分时图),"DK"(日K线图),"WK"(周K线图),"MK"(月K线图)
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 * }
			 *
			 */

			// 拓展，合并，复制
			var extend = __webpack_require__(21);
			// 工具模块
			var common = __webpack_require__(13);
			// 主题
			var theme = __webpack_require__(7);

			var Interactive = (function () {

				// 构造函数
				function Interactive(options) {
					this.defaultoptions = theme.interactive;
					this.options = extend(this.defaultoptions, options);
					// this.options = extend(true,this.options,this.defaultoptions, options);
				}

				// 鼠标十字标识线
				Interactive.prototype.cross = function (canvas, w_x, w_y) {
					var c_box = canvas.getBoundingClientRect();
					var dpr = this.options.dpr;

					if (!this.options.cross) {
						this.options.cross = {};
						/*Y轴标识线*/
						var y_line = document.createElement("div");
						y_line.className = "cross-y";
						if (this.options.showV) {
							y_line.style.height = (this.options.canvas.height / dpr) + "px";
						} else {

							y_line.style.height = (this.options.c_1_height + this.options.canvas_offset_top) / dpr + "px";
						}

						y_line.style.top = "0px";
						this.options.cross.y_line = y_line;

						/*X轴标识线*/
						var x_line = document.createElement("div");
						x_line.className = "cross-x";
						x_line.style.width = canvas.width / dpr + "px";
						this.options.cross.x_line = x_line;

						/*X轴和Y轴标示线相交点*/
						var point = document.createElement("div");
						point.className = "cross-p";
						point.style.width = point.style.height = this.options.point_width + "px";
						point.style.borderRadius = point.style.width;
						point.style.backgroundColor = this.options.point_color;
						this.options.cross.point = point;
						/*创建文档碎片*/
						var frag = document.createDocumentFragment();

						// if(this.options.type == "TL"){
						if (this.options.crossline) {
							frag.appendChild(x_line);
							frag.appendChild(y_line);
							frag.appendChild(point);
						} else {
							frag.appendChild(y_line);
						}
						document.getElementById(this.options.container).appendChild(frag);
					}
					var y_line = this.options.cross.y_line;
					if (y_line) {
						y_line.style.left = w_x + "px";
					}
					var x_line = this.options.cross.x_line;
					if (x_line) {
						x_line.style.top = w_y + "px";
					}
					var point = this.options.cross.point;
					if (point) {
						var p_w = this.options.point_width;
						point.style.left = w_x - p_w / 2 + "px";
						point.style.top = w_y - p_w / 2 + "px";
					}
				}

				// 绘制移动平均线标识
				Interactive.prototype.markMA = function (canvas, obj_5, obj_10, obj_20) {
					// var c_box = canvas.getBoundingClientRect();
					// var dpr = this.options.dpr;
					if (!this.options.mark_ma) {
						this.options.mark_ma = {};
						var div_mark = document.createElement("div");
						div_mark.className = "mark-ma";
						div_mark.style.top = -1 + "px";
						this.options.mark_ma.mark_ma = div_mark;

						/*创建文档碎片*/
						var frag = document.createDocumentFragment();

						/*5日均线*/
						var ma_5_data = document.createElement('span');
						ma_5_data.className = "span-m5";
						if (obj_5) {
							ma_5_data.innerText = "MA5:" + (obj_5.value == '-' ? '-' : (obj_5.value / 1).toFixed(this.options.pricedigit));
						} else {
							if (this.default_m5 && this.default_m5.value != '-') {
								ma_5_data.innerText = "MA5:" + (this.default_m5.value / 1).toFixed(this.options.pricedigit);
							} else {
								ma_5_data.innerText = "MA5: -";
							}
						}
						this.options.mark_ma.ma_5_data = ma_5_data;

						/*10日均线*/
						var ma_10_data = document.createElement('span');
						ma_10_data.id = "ma_10_data";
						ma_10_data.className = "span-m10";
						if (obj_10) {
							ma_10_data.innerText = "MA10:" + (obj_10.value == '-' ? '-' : (obj_10.value / 1).toFixed(this.options.pricedigit));
						} else {
							if (this.default_m10 && this.default_m10.value != '-') {
								ma_10_data.innerText = "MA10:" + (this.default_m10.value / 1).toFixed(this.options.pricedigit);
							} else {
								ma_10_data.innerText = "MA10: -";
							}
						}
						this.options.mark_ma.ma_10_data = ma_10_data;

						/*20日均线*/
						var ma_20_data = document.createElement('span');
						ma_20_data.id = "ma_20_data";
						ma_20_data.className = "span-m20";
						if (obj_20) {
							ma_20_data.innerText = "MA20:" + (obj_20.value == '-' ? '-' : (obj_20.value / 1).toFixed(this.options.pricedigit));
						} else {
							if (this.default_m20 && this.default_m20.value != '-') {
								ma_20_data.innerText = "MA20:" + (this.default_m20.value / 1).toFixed(this.options.pricedigit);
							} else {
								ma_20_data.innerText = "MA20: -";
							}
						}
						this.options.mark_ma.ma_20_data = ma_20_data;

						frag.appendChild(ma_5_data);
						frag.appendChild(ma_10_data);
						frag.appendChild(ma_20_data);
						div_mark.appendChild(frag);
						document.getElementById(this.options.container).appendChild(div_mark);

						if (document.body.clientWidth <= 320) {
							ma_5_data.style.fontSize = "10px";
							ma_10_data.style.fontSize = "10px";
							ma_20_data.style.fontSize = "10px";
						}
						// div_tip.style.left = w_pos.x - 300 + "px";
					} else {
						var div_mark = this.options.mark_ma.mark_ma;
						if (obj_5) {
							this.options.mark_ma.ma_5_data.innerText = "MA5:" + (obj_5.value == '-' ? '-' : (obj_5.value / 1).toFixed(this.options.pricedigit));
						} else {
							if (this.default_m5 && this.default_m5.value != '-') {
								this.options.mark_ma.ma_5_data.innerText = "MA5:" + (this.default_m5.value / 1).toFixed(this.options.pricedigit);
							} else {
								this.options.mark_ma.ma_5_data.innerText = "MA5: -";
							}
						}

						if (obj_10) {
							this.options.mark_ma.ma_10_data.innerText = "MA10:" + (obj_10.value == '-' ? '-' : (obj_10.value / 1).toFixed(this.options.pricedigit));
						} else {
							if (this.default_m10 && this.default_m10.value != '-') {
								this.options.mark_ma.ma_10_data.innerText = "MA10:" + (this.default_m10.value / 1).toFixed(this.options.pricedigit);
							} else {
								this.options.mark_ma.ma_10_data.innerText = "MA10: -";
							}
						}

						if (obj_20) {
							this.options.mark_ma.ma_20_data.innerText = "MA20:" + (obj_20.value == '-' ? '-' : (obj_20.value / 1).toFixed(this.options.pricedigit));
						} else {
							if (this.default_m20 && this.default_m20.value != '-') {
								this.options.mark_ma.ma_20_data.innerText = "MA20:" + (this.default_m20.value / 1).toFixed(this.options.pricedigit);;
							} else {
								this.options.mark_ma.ma_20_data.innerText = "MA20: -";
							}
						}

					}

				}
				// 缩放
				Interactive.prototype.scale = function (canvas) {
					/*K线图表右下角相对于父容器的位置*/
					var w_pos = common.canvasToWindow.apply(this, [canvas, canvas.width, this.options.c_1_height]);
					if (!this.options.scale) {
						this.options.scale = {};
						/*创建外部包裹元素*/
						var scale_div = document.createElement("div");
						scale_div.className = "scale-div";
						scale_div.style.right = "20px";
						scale_div.style.top = (this.options.c_1_height + this.options.canvas_offset_top) / this.options.dpr - 40 + "px";
						this.options.scale.scale = scale_div;

						/*创建文档碎片*/
						var frag = document.createDocumentFragment();

						/*创建减号*/
						var minus_button = document.createElement('span');
						minus_button.className = "span-minus";
						this.options.scale.minus = minus_button;

						/*创建加号*/
						var plus_button = document.createElement('span');
						plus_button.className = "span-plus";
						this.options.scale.plus = plus_button;

						frag.appendChild(minus_button);
						frag.appendChild(plus_button);
						scale_div.appendChild(frag);
						document.getElementById(this.options.container).appendChild(scale_div);
					}
				}

				// Tip显示行情数据
				Interactive.prototype.showTip = function (canvas, x, obj, y) {
					// var c_box = canvas.getBoundingClientRect();
					var type = (this.options.type).toUpperCase();
					console.log("this.options.type>>", type);
					console.log("this.options.tip>>", this.options.tip);
					if (!this.options.tip) {
						this.options.tip = {};
						// 创建外部包裹元素
						var div_tip = document.createElement("div");
						div_tip.className = "show-tip";

						this.options.tip.tip = div_tip;

						// 创建文档碎片
						var frag = document.createDocumentFragment();

						// 创建收盘价格
						var close_data = document.createElement('span');
						close_data.className = "span-price";
						this.options.tip.close = close_data;

						// 创建百分比
						var percent = document.createElement('span');
						this.options.tip.percent = percent;

						// 创建股数
						var count = document.createElement('span');
						this.options.tip.count = count;

						// 创建时间
						var time = document.createElement('span');
						this.options.tip.time = time;

						var tip_line_1 = document.createElement("div");
						tip_line_1.className = "tip-line-1";
						tip_line_1.appendChild(close_data);
						tip_line_1.appendChild(percent);

						var tip_line_2 = document.createElement("div");
						tip_line_2.className = "tip-line-2";
						tip_line_2.appendChild(count);
						tip_line_2.appendChild(time);

						frag.appendChild(tip_line_1);
						frag.appendChild(tip_line_2);
						div_tip.appendChild(frag);
						document.getElementById(this.options.container).appendChild(div_tip);

						var volume = Math.round(obj.volume);
						if (type == "DK" || type == "WK" || type == "MK" || type == "M5K"
							|| type == "M15K" || type == "M30K" || type == "M60K") {
							close_data.innerText = obj.close;
							percent.innerText = obj.percent + '%';
							count.innerText = common.translate(volume);
							time.innerText = obj.data_time;
							div_tip.style.top = - div_tip.clientHeight + "px";

							var c1 = "span-k-c1";
							var c2 = "span-k-c2";
						} else if (type == "R" || type == "T1" || type == "T2" || type == "T3" || type == "T4" || type == "T5") {
							close_data.innerText = obj.price;
							percent.innerText = obj.percent + '%';
							count.innerText = common.translate(volume);
							time.innerText = obj.time;
							// 修改分时图Tip显示行情数据
							// div_tip.style.top = - div_tip.clientHeight + "px";
							div_tip.style.top =  "210px";
							div_tip.className = div_tip.className + " " + "time-tip"

							var c1 = "span-time-c1";
							var c2 = "span-time-c2";
						}

						close_data.className = close_data.className + " " + c1;
						percent.className = percent.className + " " + c2;
						count.className = count.className + " " + c1;
						time.className = time.className + " " + c2;

					} else {
						var tip_obj = this.options.tip;
						var div_tip = this.options.tip.tip;
						var volume = Math.round(obj.volume);

						if (type == "DK" || type == "WK" || type == "MK" || type == "M5K"
							|| type == "M15K" || type == "M30K" || type == "M60K") {
							tip_obj.close.innerText = obj.close;
							tip_obj.percent.innerText = obj.percent + '%';
							tip_obj.count.innerText = common.translate(volume);
							tip_obj.time.innerText = obj.data_time.replace(/-/g, "/");
						} else if (type == "R" || type == "T1" || type == "T2" || type == "T3" || type == "T4" || type == "T5") {
							tip_obj.close.innerText = obj.price;
							tip_obj.percent.innerText = obj.percent + '%';

							tip_obj.count.innerText = common.translate(volume);
							tip_obj.time.innerText = obj.time;
						}
					}

					if (obj && obj.up) {
						div_tip.style.backgroundColor = this.options.up_color;
					} else if (obj && !obj.up) {
						div_tip.style.backgroundColor = this.options.down_color;
					}

					// if((c_box.left + div_tip.clientWidth/2) >= x){
					if (x <= (div_tip.clientWidth / 2 + this.options.padding_left / this.options.dpr)) {
						div_tip.style.left = this.options.padding_left / this.options.dpr + "px";
					} else if (x >= (canvas.width / this.options.dpr - div_tip.clientWidth / 2)) {
						div_tip.style.left = canvas.width / this.options.dpr - div_tip.clientWidth + "px";
					} else {
						div_tip.style.left = x - div_tip.clientWidth / 2 + "px";
					}
				}

				// 标记上榜日
				Interactive.prototype.markPoint = function (x, date, canvas, scale_count) {
					if (scale_count >= 0) {
						// K线图表右下角相对于父容器的位置
						var c1_pos = common.canvasToWindow.apply(this, [canvas, canvas.width, this.options.c_1_height]);
						// 上榜日标记的横坐标
						var p_pos = common.canvasToWindow.apply(this, [canvas, x, this.options.c_1_height]);

						// 创建外部包裹元素
						var markPoint = document.createElement("div");

						markPoint.className = "mark-point";
						var imgUrl = this.options.markPoint.imgUrl;
						// 上榜日标识宽度
						var imgWidth = this.options.markPoint.width == undefined ? 15 : this.options.markPoint.width + "px";
						// 上榜日标识高度
						var imgHeight = this.options.markPoint.height == undefined ? 15 : this.options.markPoint.height + "px";
						if (imgUrl) {
							markPoint.style.background = "url(" + imgUrl + ") no-repeat center center/" + imgWidth + " " + imgHeight + " #cccccc";
							markPoint.style.background = "url(" + imgUrl + ") no-repeat center center/" + imgWidth + " " + imgHeight + " #cccccc";
						}

						if (this.options.markPoint.width && this.options.markPoint.height) {
							markPoint.style.width = imgWidth;
							markPoint.style.height = imgHeight;
						} else {
							markPoint.style.width = imgWidth;
							markPoint.style.height = imgHeight;
							// markPoint.style.borderRadius = "5px";
						}
						markPoint.setAttribute("data-point", date);
						if (!this.options.pointsContainer) {
							var pointsContainer = document.createElement("div");
							this.options.pointsContainer = pointsContainer;
							document.getElementById(this.options.container).appendChild(this.options.pointsContainer);
						}
						this.options.pointsContainer.appendChild(markPoint);
						// 定位上榜日标识点的位置
						markPoint.style.left = p_pos.x - markPoint.clientWidth / 2 + "px";
						markPoint.style.top = c1_pos.y - 30 + "px";

					}

				}

				// 显示交互效果
				Interactive.prototype.show = function () {

					if (this.options.cross) {
						var x_line = this.options.cross.x_line;
						if (x_line) {
							x_line.style.display = "block";
						}
						var y_line = this.options.cross.y_line;
						if (y_line) {
							y_line.style.display = "block";
						}
						var point = this.options.cross.point;
						if (point) {
							point.style.display = "block";
						}
					}

					if (this.options.tip) {
						var tip = this.options.tip.tip;
						if (tip) {
							tip.style.display = "block";
						}

					}

				}

				// 隐藏交互效果
				Interactive.prototype.hide = function () {
					if (this.options.cross) {
						var x_line = this.options.cross.x_line;
						if (x_line) {
							x_line.style.display = "none";
						}
						var y_line = this.options.cross.y_line;
						if (y_line) {
							y_line.style.display = "none";
						}
						var point = this.options.cross.point;
						if (point) {
							point.style.display = "none";
						}
					}

					if (this.options.mark_ma) {
						var ma_5_data = this.options.mark_ma.ma_5_data;
						if (ma_5_data) {
							if (this.default_m5 && this.default_m5.value != '-') {
								ma_5_data.innerText = "MA5:" + (this.default_m5.value / 1).toFixed(this.options.pricedigit);
							} else {
								ma_5_data.innerText = "MA5: -";
							}
						}
						var ma_10_data = this.options.mark_ma.ma_10_data;
						if (ma_10_data) {
							if (this.default_m10 && this.default_m10.value != '-') {
								ma_10_data.innerText = "MA10:" + (this.default_m10.value / 1).toFixed(this.options.pricedigit);
							} else {
								ma_10_data.innerText = "MA10: -";
							}
						}
						var ma_20_data = this.options.mark_ma.ma_20_data;
						if (ma_20_data) {
							if (this.default_m20 && this.default_m20.value != '-') {
								ma_20_data.innerText = "MA20:" + (this.default_m20.value / 1).toFixed(this.options.pricedigit);
							} else {
								ma_20_data.innerText = "MA20: -";
							}
						}

					}

					if (this.options.tip) {
						var tip = this.options.tip.tip;
						if (tip) {
							tip.style.display = "none";
						}

					}

				}

				// 显示loading效果
				Interactive.prototype.showLoading = function () {

					if (this.options.loading) {
						this.options.loading.style.display = "block";
					} else {
						// 获取图表容器
						var chart_container = document.getElementById(this.options.container);
						// var chart_container_height = chart_container.offsetHeight;
						// loading提示信息
						var loading_notice = document.createElement("div");
						loading_notice.className = "loading-chart";
						loading_notice.innerText = "加载中...";
						loading_notice.style.height = this.options.height - 100 + "px";
						loading_notice.style.width = this.options.width + "px";
						// loading_notice.style.paddingTop = chart_container_height / 2 + "px";
						loading_notice.style.paddingTop = "100px";
						// 把提示信息添加到图表容器中
						this.options.loading = loading_notice;
						chart_container.appendChild(loading_notice);
					}

				}

				// 隐藏loading效果
				Interactive.prototype.hideLoading = function () {
					this.options.loading.style.display = "none";
				}

				// 暂无数据
				Interactive.prototype.showNoData = function () {

					if (this.options.noData) {
						this.options.noData.style.display = "block";
					} else {
						//获取图表容器
						var noData_container = document.getElementById(this.options.container);
						// var noData_container_height = noData_container.offsetHeight;
						//无数据时提示信息
						var noData_notice = document.createElement("div");
						noData_notice.className = "loading-chart";
						noData_notice.innerText = "暂无数据";
						noData_notice.style.height = this.options.height - 100 + "px";
						noData_notice.style.width = this.options.width + "px";

						noData_notice.style.paddingTop = "100px";
						//把提示信息添加到图表容器中
						this.options.noData = noData_notice;
						noData_container.appendChild(noData_notice);
					}

				}

				return Interactive;
			})();

			module.exports = Interactive;


			/***/
		}),
/* 21 */
/***/ (function (module, exports) {


			var extend,
				_extend,
				_isObject;

			_isObject = function (o) {
				return Object.prototype.toString.call(o) === '[object Object]';
			}

			_extend = function self(destination, source) {
				var property;
				for (property in destination) {
					//if (destination.hasOwnProperty(property)) {
					if (typeof destination[property] != 'undefined') {
						// 若destination[property]和sourc[property]都是对象，则递归
						try {
							if (_isObject(destination[property]) && _isObject(source[property])) {
								self(destination[property], source[property]);
							};
							// 若sourc[property]已存在，则跳过
							if (source.hasOwnProperty(property)) {
								continue;
							} else {
								source[property] = destination[property];
							}
						} catch (error) {

						}



					}
				}
			}

			extend = function () {
				var arr = arguments,
					result = {},
					i;

				if (!arr.length) return {};

				for (i = arr.length - 1; i >= 0; i--) {
					if (_isObject(arr[i])) {
						_extend(arr[i], result);
					};
				}

				arr[0] = result;
				return result;
			}

			module.exports = extend;


			/***/
		}),
/* 22 */
/***/ (function (module, exports) {

			/*加水印*/
			function addWatermark(ctx, right, top, width, height, flag) {

				var _this = this;
				var canvas = ctx.canvas;
				var img = new Image();
				width = width == undefined ? 164 : width;
				height = height == undefined ? 41 : height;
				img.width = 0;
				img.height = 0;

				// img.src = 'http://g1.dfcfw.com/g1/201607/20160727150611.png';

				// if(flag){

				//     ctx.clearRect(canvas.width - right, top, width, height);
				// 	ctx.drawImage(img, canvas.width - right, top, width, height);	
				// }else{
				// 	img.onload = function(){
				//     	setTimeout(function(){

				//             ctx.clearRect(canvas.width - right, top, width, height);
				//     		ctx.drawImage(img, canvas.width - right, top, width, height);	
				//     	}, 0);

				//     }
				// }
			}

			module.exports = addWatermark;

			/***/
		}),
/* 23 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制手机K线图
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     type:    "TL"(分时图),"DK"(日K线图),"WK"(周K线图),"MK"(月K线图)
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 * }
			 *
			 */

			// 绘制坐标轴
			var DrawXY = __webpack_require__(24);
			// 主题
			var theme = __webpack_require__(7);
			// 获取K线图数据
			var GetDataK = __webpack_require__(26);
			// 绘制K线图
			var DrawK = __webpack_require__(29);
			// 绘制均线图
			var DrawMA = __webpack_require__(30);
			// 绘制成交量图
			var DrawV = __webpack_require__(31);
			// 工具
			var common = __webpack_require__(13);
			// 交互效果
			var Interactive = __webpack_require__(20);
			// 拓展，合并，复制
			var extend = __webpack_require__(6);
			// 水印
			var watermark = __webpack_require__(22);
			// cookie
			var EMcookie = __webpack_require__(32);

			var ChartK = (function () {

				function ChartK(options) {
					this.defaultoptions = theme.chartK;
					this.options = {};
					extend(true, this.options, theme.defaulttheme, options);

					// 图表容器
					this.container = document.getElementById(options.container);

					this.container.className = this.container.className.replace(/emcharts-container/g, "").trim();
					this.container.className = this.container.className + " emcharts-container";
					// 图表加载完成事件
					this.options.onChartLoaded = options.onChartLoaded == undefined ? function (op) {

					} : options.onChartLoaded;
				}

				/*初始化*/
				ChartK.prototype.init = function () {
					this.options.type = this.options.type == undefined ? "DK" : this.options.type;
					var canvas = document.createElement("canvas");
					// 去除画布上粘贴效果
					// this.container.style = "-moz-user-select:none;-webkit-user-select:none;";
					// this.container.setAttribute("unselectable","on");
					this.container.style.position = "relative";
					//画布
					var ctx = canvas.getContext('2d');
					this.options.canvas = canvas;
					this.options.context = ctx;
					// 设备像素比
					var dpr = this.options.dpr;
					// 画布的宽和高
					canvas.width = this.options.width * dpr;
					canvas.height = this.options.height * dpr;

					// 画布分割区域
					this.options.sepeNum = 7;

					// 画布向下偏移的距离
					this.options.canvas_offset_top = canvas.height / this.options.sepeNum / 2;
					// 画布内容向坐偏移的距离
					this.options.padding_left = 0;
					// 行情图表（分时图或K线图）和成交量图表的间距
					this.options.k_v_away = canvas.height / this.options.sepeNum;
					// 缩放默认值
					this.options.scale_count = this.options.scale_count == undefined ? 0 : this.options.scale_count;

					this.options.showV = this.options.showV == undefined ? true : this.options.showV;
					this.options.showVMark = this.options.showVMark == undefined ? false : this.options.showVMark;

					// 画布上第一个图表的高度
					if (this.options.showV) {
						this.options.c_1_height = canvas.height * 4 / this.options.sepeNum;
					} else {
						this.options.c_1_height = canvas.height - 90 * dpr;
					}

					this.options.unit = {};
					this.options.unit.unitHeight = canvas.height / this.options.sepeNum;

					canvas.style.width = this.options.width + "px";
					canvas.style.height = this.options.height + "px";
					canvas.style.border = "0";

					// 是否显示十字指示线
					this.options.crossline = false;

					// 画布上部内间距
					ctx.translate("0", this.options.canvas_offset_top);
					// 画笔参数设置
					ctx.font = (this.options.font_size * this.options.dpr) + "px Arial";
					ctx.lineWidth = 1 * this.options.dpr;

					this.options.enableHandle = this.options.enableHandle == undefined ? true : this.options.enableHandle;

					// 容器中添加画布
					this.container.appendChild(canvas);

					addFuQuan.call(this);

				};

				// 绘图
				ChartK.prototype.draw = function (callback) {
					var _this = this;
					// 删除canvas画布
					_this.clear();
					// 初始化
					_this.init();

					// 初始化交互
					var inter = _this.options.interactive = new Interactive(_this.options);
					// 显示loading效果
					inter.showLoading();

					var type = _this.options.type;

					try {
						if (type == "DK") {
							this.options.type = "DK";
						} else if (type == "WK") {
							this.options.type = "WK";
						} else if (type == "MK") {
							this.options.type = "MK";
						} else if (type == "M5K") {
							this.options.type = "M5K";
						} else if (type == "M15K") {
							this.options.type = "M15K";
						} else if (type == "M30K") {
							this.options.type = "M30K";
						} else if (type == "M60K") {
							this.options.type = "M60K";
						}

						GetDataK(getParamsObj.call(_this), function (data) {
							var flag = dataCallback.apply(_this, [data]);
							// 均线数据标识
							inter.markMA(_this.options.canvas);
							// 缩放
							inter.scale(_this.options.canvas);
							if (flag && _this.options.enableHandle) {
								// 绑定事件
								bindEvent.call(_this, _this.options.context);
							}
							// 传入的回调函数
							if (callback) {
								callback(_this.options);
							}


						}, inter);

					} catch (e) {
						// 暂无数据
						inter.showNoData();
						// 隐藏loading效果
						inter.hideLoading();
					}
				};
				// 重绘
				ChartK.prototype.reDraw = function () {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					dataCallback.call(this);
				}
				// 删除canvas画布
				ChartK.prototype.clear = function (cb) {
					if (this.container) {
						this.container.innerHTML = "";
					} else {
						document.getElementById(this.options.container).innerHTML = "";
					}
					if (cb) {
						cb();
					};
				}

				// 获取上榜日标识dom
				ChartK.prototype.getMarkPointsDom = function (cb) {
					var points = this.options.interactive.options.pointsContainer.children;
					return points;
				}

				// 缩放图表
				function scaleClick() {

					var _this = this;
					var type = _this.options.type;
					// 初始化交互
					var inter = _this.options.interactive
					// 显示loading效果
					this.options.interactive.showLoading();

					try {
						if (type == "DK") {
							this.options.type = "K";
						} else if (type == "WK") {
							this.options.type = "WK";
						} else if (type == "MK") {
							this.options.type = "MK";
						} else if (type == "M5K") {
							this.options.type = "M5K";
						} else if (type == "M15K") {
							this.options.type = "M15K";
						} else if (type == "M30K") {
							this.options.type = "M30K";
						} else if (type == "M60K") {
							this.options.type = "M60K";
						}

						GetDataK(getParamsObj.call(_this), function (data) {
							if (data) {
								dataCallback.apply(_this, [data]);
								// 缩放按钮点击有效
								_this.options.clickable = true;
							}

						}, inter);

					} catch (e) {
						// 缩放按钮点击有效
						_this.options.clickable = true;
						// 暂无数据
						inter.showNoData();
						// 隐藏loading效果
						inter.hideLoading();
					}


				};

				// 获取参数对象
				function getParamsObj() {
					var obj = {};
					obj.type = this.options.type;
					obj.code = this.options.code;
					obj.count = this.options.scale_count;
					obj.authorityType = this.options.authorityType;
					return obj;
				}
				// 回调函数
				function dataCallback(data) {
					var ctx = this.options.context;
					var canvas = ctx.canvas;
					this.options.data = data == null ? this.options.data : data;
					data = this.options.data;

					// 图表交互
					var inter = this.options.interactive;

					try {
						if (!data || !data.data || data.data.length == 0) {
							this.options.data = {};
							// 绘制坐标轴
							new DrawXY(this.options);
							// 绘制成交量图
							new DrawV(this.options);
							inter.hideLoading();
							return;
						}

						// 保留的小数位
						this.options.pricedigit = data.pricedigit || 2;
						inter.options.pricedigit = this.options.pricedigit;

						// 默认显示均线数据
						var five_average = data.five_average;
						var ten_average = data.ten_average;
						var twenty_average = data.twenty_average;
						inter.default_m5 = five_average[five_average.length - 1];
						inter.default_m10 = ten_average[ten_average.length - 1];
						inter.default_m20 = twenty_average[twenty_average.length - 1];

						// 获取单位绘制区域
						var rect_unit = common.get_rect.apply(this, [canvas, data.data.length]);
						this.options.rect_unit = rect_unit;

						// 绘制坐标轴
						var drawXY = new DrawXY(this.options);

						if (data && data.data && data.data.length > 0) {
							// 绘制K线图
							new DrawK(this.options);
							// 绘制均线图
							new DrawMA(this.options);
						}
						// 绘制成交量图
						if (this.options.showV) {
							new DrawV(this.options);
						}

						// 绘制K线图Y轴标识
						drawXY.drawYMark();

						// 上榜日标识点
						if (this.options.interactive.options.pointsContainer) {
							var points = this.options.interactive.options.pointsContainer.children;
							this.markPointsDom = points;
						}

						// 隐藏loading效果
						inter.hideLoading();

						// 图表加载完成时间
						this.options.onChartLoaded(this);

					} catch (e) {
						// 缩放按钮点击有效
						_this.options.clickable = true;
						// 暂无数据
						inter.showNoData();
						// 隐藏loading效果
						inter.hideLoading();
					}

					// 加水印
					watermark.apply(this, [this.options.context, 190, 20]);

					return true;
				}
				// 绑定事件
				function bindEvent(ctx) {
					var _this = this;
					var canvas = ctx.canvas;
					var inter = _this.options.interactive;
					//缩放按钮是否可点击
					this.options.clickable = true;

					var delayed = false;
					var delaytouch = this.options.delaytouch = true;

					// if(delaytouch){
					//     var chart_container = document.getElementById(_this.options.container);
					//     var delay = document.createElement("div");
					//     delay.className = "delay-div";
					//     delay.style.height = _this.options.height + "px";
					//     delay.style.width = _this.options.width + "px";
					//     delay.style.display = "none";
					//     chart_container.appendChild(delay);

					// }

					// 触摸事件
					canvas.addEventListener("touchstart", function (event) {
						// 显示交互效果
						if (delaytouch) {
							delayed = false;
							timer_s = setTimeout(function () {
								delayed = true;
								inter.show();
								dealEvent.apply(_this, [inter, event.changedTouches[0]]);
								event.preventDefault();
							}, 200);
						} else {
							inter.show();
							dealEvent.apply(_this, [inter, event.changedTouches[0]]);
						}

						if (_this.options.preventdefault) {
							event.preventDefault();
						}
					});

					// 手指滑动事件
					canvas.addEventListener("touchmove", function (event) {
						// dealEvent.apply(_this,[inter,event]);
						if (delaytouch) {
							clearTimeout(timer_s);
							if (delayed) {
								dealEvent.apply(_this, [inter, event.changedTouches[0]]);
								event.preventDefault();
							}
						} else {
							dealEvent.apply(_this, [inter, event.changedTouches[0]]);
						}
						if (_this.options.preventdefault) {
							event.preventDefault();
						}

					});

					// 手指离开事件
					canvas.addEventListener("touchend", function (event) {
						if (delaytouch) {
							clearTimeout(timer_s);
						}
						// 隐藏交互效果
						inter.hide();
						//event.preventDefault();
					});

					canvas.addEventListener("touchcancel", function (event) {
						if (delaytouch) {
							clearTimeout(timer_s);
						}
						// 隐藏交互效果
						inter.hide();
						if (_this.options.preventdefault) {
							event.preventDefault();
						}
					});


					// if(!delaytouch){
					canvas.addEventListener("mousemove", function (event) {
						//console.info(event);
						dealEvent.apply(_this, [inter, event]);
						event.preventDefault();
					});

					canvas.addEventListener("mouseleave", function (event) {
						//console.info(event);
						inter.hide();
						event.preventDefault();
					});

					canvas.addEventListener("mouseenter", function (event) {
						//console.info(event);
						inter.show();
						event.preventDefault();
					});
					// }

					// 放大按钮
					var scale_plus = inter.options.scale.plus;
					// 缩小按钮
					var scale_minus = inter.options.scale.minus;

					// 点击放大
					scale_plus.addEventListener("click", function (event) {
						var scale_count = _this.options.scale_count;
						if (scale_count < 2 && _this.options.clickable) {
							// 缩放按钮点击无效
							_this.options.clickable = false;
							scale_minus.style.opacity = "1";
							_this.options.scale_count = scale_count + 1;

							// 清除上榜日标识
							if (_this.options.interactive.options.pointsContainer) {
								_this.options.interactive.options.pointsContainer.innerHTML = "";
							}
							// 清空画布
							ctx.clearRect(0, -_this.options.canvas_offset_top, canvas.width, canvas.height);
							scaleClick.apply(_this);
						}

						if (_this.options.scale_count >= 2) {
							scale_plus.style.opacity = "0.5";
						}

					});

					// 点击缩小
					scale_minus.addEventListener("click", function (event) {
						var scale_count = _this.options.scale_count;
						if (scale_count > -2 && _this.options.clickable) {
							// 缩放按钮点击无效
							_this.options.clickable = false;
							scale_plus.style.opacity = "1";
							_this.options.scale_count = scale_count - 1;

							// 清除上榜日标识
							if (_this.options.interactive.options.pointsContainer) {
								_this.options.interactive.options.pointsContainer.innerHTML = "";
							}
							// 清空画布
							ctx.clearRect(0, -_this.options.canvas_offset_top, canvas.width, canvas.height);
							scaleClick.apply(_this);
						}

						if (_this.options.scale_count <= -2) {
							scale_minus.style.opacity = "0.5";
						}

					});

				}
				// 图表交互
				function dealEvent(inter, eventposition) {

					var canvas = this.options.canvas;

					var k_data = this.options.data.data;
					var ma_5_data = this.options.data.five_average;
					var ma_10_data = this.options.data.ten_average;
					var ma_20_data = this.options.data.twenty_average;

					// 单位绘制区域
					var rect_unit = this.options.rect_unit;
					// 单位绘制区域的宽度
					var rect_w = rect_unit.rect_w;
					// K线柱体的宽度
					// var bar_w = rect_unit.bar_w;

					// 鼠标事件位置
					// var w_x = eventposition.clientX;
					// var w_y = eventposition.clientY;

					var w_x = eventposition.offsetX || (eventposition.clientX - this.container.getBoundingClientRect().left);
					var w_y = eventposition.offsetY || (eventposition.clientY - this.container.getBoundingClientRect().top);

					// 鼠标在画布中的坐标
					var c_pos = common.windowToCanvas.apply(this, [canvas, w_x, w_y]);
					var c_x = (c_pos.x).toFixed(0);
					// var c_y = (c_pos.y).toFixed(0);

					// 当前K线在数组中的下标
					var index = Math.floor((c_x - this.options.padding_left) / rect_w);

					if (k_data && k_data[index]) {
						// 显示行情数据
						inter.showTip(canvas, w_x, k_data[index]);

						// 显示十字指示线的
						var cross = common.canvasToWindow.apply(this, [canvas, k_data[index].cross_x, k_data[index].cross_y]);
						var cross_w_x = cross.x;
						var cross_w_y = cross.y;
						inter.cross(canvas, cross_w_x, cross_w_y);
					}

					if (ma_5_data && ma_5_data[index]) {
						// 标识均线数据
						inter.markMA(canvas, ma_5_data[index], ma_10_data[index], ma_20_data[index]);
					}

				}

				function addFuQuan() {
					var authorityType = EMcookie.getCookie("emcharts-authorityType") == null ? "" : EMcookie.getCookie("emcharts-authorityType");

					if (this.options.authorityType === undefined) {
						this.options.authorityType = authorityType;
					} else {
						if (authorityType !== this.options.authorityType) {
							var Days = 1000000;
							var exp = new Date();
							exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
							EMcookie.setCookie("emcharts-authorityType", this.options.authorityType, exp, "/");
						}
					}
				}


				return ChartK;
			})();

			module.exports = ChartK;


			/***/
		}),
/* 24 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制直角坐标系
			 */
			var extend = __webpack_require__(6);
			/*主题*/
			var theme = __webpack_require__(7);
			/*绘制虚线*/
			var DrawDashLine = __webpack_require__(25);
			// 格式化坐标
			var XYF = __webpack_require__(9);
			var DrawXY = (function () {
				//构造方法
				function DrawXY(options) {
					/*设置默认参数*/
					this.defaultoptions = theme.draw_xy;
					this.options = {};
					extend(false, this.options, this.defaultoptions, options);
					/*绘图*/
					this.draw();
				};
				/*绘图*/
				DrawXY.prototype.draw = function () {
					var data = this.options.data;
					var ctx = this.options.context;
					var type = this.options.type;
					// var dpr = this.options.dpr;

					/*Y轴上的最大值*/
					var y_max = data.max;
					/*Y轴上的最小值*/
					var y_min = data.min;

					/*Y轴上分隔线数量*/
					var sepe_num = 5;
					/*开盘收盘时间数组*/
					var oc_time_arr = data.timeStrs;

					/*K线图的高度*/
					var k_height = this.options.c_1_height;
					/*Y轴标识线列表*/
					var line_list_array = getLineList(y_max, y_min, sepe_num, k_height);
					this.options.y_mark_list = line_list_array;

					drawXYK.apply(this, [ctx, y_max, y_min, line_list_array]);

					// 绘制横坐标刻度
					if (oc_time_arr) {
						drawXMark.apply(this, [ctx, k_height, oc_time_arr]);
					}

				};

				//绘制K线图坐标轴
				function drawXYK(ctx, y_max, y_min, line_list_array) {
					var sepe_num = line_list_array.length;
					ctx.beginPath();
					ctx.fillStyle = '#333333';
					ctx.strokeStyle = '#e5e5e5';
					ctx.rect(1, 0, this.options.canvas.width - 2, this.options.c_1_height);
					ctx.stroke();

					ctx.beginPath();
					for (var i = 0; i < 3; i++) {
						var x = ((i + 1) / 4) * (ctx.canvas.width - this.options.padding_left) + this.options.padding_left;

						if (i == 1) {
							ctx.strokeStyle = '#e5e5e5';
							ctx.moveTo(XYF(x), 0.5);
							ctx.lineTo(XYF(x), XYF(this.options.c_1_height));
							ctx.stroke();
						} else {
							ctx.strokeStyle = '#efefef';
							DrawDashLine(ctx, x, 0, x, this.options.c_1_height, 5);
						}

					}

					for (var i = 0, item; item = line_list_array[i]; i++) {
						ctx.beginPath();

						// if (i < (sepe_num -1) / 2) {
						//     ctx.fillStyle = '#333333';
						//     ctx.strokeStyle = '#e5e5e5';
						// }
						// else if(i > (sepe_num -1) / 2){
						//     ctx.fillStyle = '#333333';
						//     ctx.strokeStyle = '#e5e5e5';
						// }
						// else{
						//     ctx.fillStyle = '#333333';
						//     ctx.strokeStyle = '#e5e5e5';
						// }

						if (i == 2) {
							ctx.strokeStyle = '#e5e5e5';
							ctx.moveTo(0.5, XYF(item.y));
							ctx.lineTo(XYF(ctx.canvas.width), XYF(item.y));
							ctx.stroke();
						} else if (i != 0 && i != (line_list_array.length - 1)) {
							ctx.strokeStyle = '#efefef';
							DrawDashLine(ctx, 0, Math.round(item.y), ctx.canvas.width, Math.round(item.y), 5);
						}


						// // 绘制纵坐标刻度
						// if(isNaN(item.num)){
						//     ctx.fillText("0.00", 0, item.y);
						// }else if(i==0){
						//     ctx.fillText((item.num).toFixed(this.options.pricedigit), 5, item.y - 10);
						// }else if(i == (line_list_array.length - 1)){
						//     ctx.fillText((item.num).toFixed(this.options.pricedigit), 5, item.y + 25);
						// }else{
						//     ctx.fillText((item.num).toFixed(this.options.pricedigit), 5, item.y + 10);
						// }

					}

				}
				/*绘制纵坐标涨跌幅*/
				DrawXY.prototype.drawYMark = function () {
					var ctx = this.options.context;
					ctx.beginPath();
					ctx.fillStyle = '#333333';
					ctx.strokeStyle = '#e5e5e5';
					var line_list_array = this.options.y_mark_list;
					for (var i = 0, item; item = line_list_array[i]; i++) {
						ctx.beginPath();
						// 绘制纵坐标刻度
						if (isNaN(item.num)) {
							ctx.fillText("0.00", 0, item.y - 10);
						} else if (i == 0) {
							ctx.fillText((item.num).toFixed(this.options.pricedigit), 5, item.y - 10);
						} else if (i == (line_list_array.length - 1)) {
							ctx.fillText((item.num).toFixed(this.options.pricedigit), 5, item.y + 25);
						} else {
							ctx.fillText((item.num).toFixed(this.options.pricedigit), 5, item.y + 10);
						}

					}
				}
				/*绘制横坐标刻度值*/
				function drawXMark(ctx, k_height, oc_time_arr) {
					// var dpr = this.options.dpr;
					var padding_left = this.options.padding_left;
					ctx.beginPath();
					ctx.fillStyle = '#999';
					/*画布宽度*/
					var k_width = ctx.canvas.width;
					var y_date = k_height + this.options.unit.unitHeight * 1 / 3;
					var len = this.options.data.data.filter(function (item) { return item !== undefined; }).length;
					if (len > 10) {
						ctx.fillText(oc_time_arr[0], padding_left, y_date);
						ctx.fillText(oc_time_arr[1], (k_width - padding_left) / 2 + padding_left - ctx.measureText(oc_time_arr[1]).width / 2, y_date);
						ctx.fillText(oc_time_arr[2], k_width - ctx.measureText(oc_time_arr[2]).width, y_date);
					} else {
						ctx.fillText(oc_time_arr[0], padding_left, y_date);
						var oc2_left = padding_left + (k_width - padding_left) / 10 * len -
							this.options.rect_unit.rect_w / 2 - (ctx.measureText(oc_time_arr[2]).width / 2);
						if (oc2_left > (padding_left + ctx.measureText(oc_time_arr[0]).width + 10)) {
							ctx.fillText(oc_time_arr[2], oc2_left, y_date);
						}
					}
					// ctx.moveTo(0,k_height + 10);
				}
				/*Y轴标识线列表*/
				function getLineList(y_max, y_min, sepe_num, k_height) {
					var ratio = (y_max - y_min) / (sepe_num - 1);
					var result = [];
					for (var i = 0; i < sepe_num; i++) {
						result.push({
							num: (y_min + i * ratio),
							x: 0,
							y: k_height - (i / (sepe_num - 1)) * k_height
						});
					}
					return result;
				}
				return DrawXY;
			})();

			module.exports = DrawXY;

			/***/
		}),
/* 25 */
/***/ (function (module, exports, __webpack_require__) {

			// 格式化坐标
			var XYF = __webpack_require__(9);
			function drawDashLine(ctx, x1, y1, x2, y2, dashLength) {
				// 保存画笔状态
				ctx.save();
				var dashLen = dashLength === undefined ? 5 : dashLength,
					xpos = x2 - x1, //得到横向的宽度;
					ypos = y2 - y1, //得到纵向的高度;
					numDashes = Math.floor(Math.sqrt(xpos * xpos + ypos * ypos) / dashLen);
				//利用正切获取斜边的长度除以虚线长度，得到要分为多少段;
				for (var i = 0; i < numDashes; i++) {
					if (i % 2 === 0) {
						ctx.moveTo(XYF(x1 + (xpos / numDashes) * i), XYF(y1 + (ypos / numDashes) * i));
						//有了横向宽度和多少段，得出每一段是多长，起点 + 每段长度 * i = 要绘制的起点；
					} else {
						ctx.lineTo(XYF(x1 + (xpos / numDashes) * i), XYF(y1 + (ypos / numDashes) * i));
					}
				}
				ctx.stroke();
				// 恢复画笔状态
				ctx.restore();
			}

			module.exports = drawDashLine;

			/***/
		}),
/* 26 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 获取手机分日K数据
			 * 传入option:{code:股票代码, count: 点击加减按钮的参数}
			 *     option.count取值对应的情况
			 *     0 ： 默认60根
			 *     1 ： 点击了一次放大， 显示45根
			 *     2 ： 点击了两次放大，显示36根
			 *     -1 ： 点击了一次缩小， 显示105根
			 *     -2 ： 点击了两次缩小，显示205根
			 *
			 * 返回result{
			 *     max: 坐标最大值
			 *     min: 坐标最小值
			 *     v_max:最大成交量
			 *     rect:[//每天天的情况
			 *         {
			 *              date_time：2015-11-12//日期
			 *              open : 64.50//开盘价 
			 *              close:  64.10 //收市价格
			 *              percent: 百分比 -8.1
			 *              height : 最高 65.4
			 *              low : 最低 63.10
			 *              volume: 换手数 10200
			 *              up: 涨跌标志 true(涨)
			 *         }，.....
			 *     ]
			 *     five_average:[{data:2016-02-11, value:63.41}] //五日均线
			 *     ten_average:[{data:2016-02-11, value:63.41}] //十日均线
			 *     twenty_average:[{data:2016-02-11, value:63.41}] //二十日均线
			 *     
			 * }
			 */

			// var transform = require('common').transform;
			var jsonp = __webpack_require__(14);
			var dealData = __webpack_require__(27);
			var fixed = __webpack_require__(13).fixed;


			//传入参数取数据
			function getdata(option, callback, interactive) {
				//请求的URL
				var url = 'http://pdfm.eastmoney.com/EM_UBG_PDTI_Fast/api/js';
				var callbackstring = 'fsdata' + (new Date()).getTime().toString().substring(0, 10);
				var id = option.code || option; //如果只传入了一个参数，就把那个参数当股票代码；如果传入两个，则id代表股票代码
				var type = "k";
				if (option.type.toLowerCase() !== "dk") {
					type = option.type;
				}
				var count = 0 | option.count;
				var num = 60;
				//判断count进行相应的根数变化
				switch (count) {
					case 0: num = 60; break;
					case 1: num = 45; break;
					case 2: num = 36; break;
					case -1: num = 105; break;
					case -2: num = 205; break;
				}
				var today = new Date();
				//获取当天的时间，成为 20160426 格式,查询从当天开始，往前的80天的数据
				var today_number_str = today.getFullYear().toString() + fixed((today.getMonth() + 1).toString(), 2) + fixed(today.getDate(), 2);
				var QuerySpan = today_number_str + ',' + (num + 20);
				if (type.match("M") !== null && type !== 'MK') {
					QuerySpan = today_number_str + fixed(today.getHours(), 2) + fixed(today.getMinutes(), 2) + ',' + (num + 20);
				}
				var urldata = {
					id: id,
					TYPE: type,
					js: callbackstring + '((x))',
					'rtntype': 5,
					"QueryStyle": "2.2",
					'QuerySpan': QuerySpan,
					'extend': "ma",
					isCR: false
				};
				if (option.authorityType !== "" && option.authorityType) {
					urldata.authorityType = option.authorityType;
				}
				// setInterval(() => {
				// 	jsonp(url, urldata, callbackstring, function (json) {
				// 		try {
				// 			if (!json) {
				// 				callback(null);
				// 			} else {
				// 				var info = json.info;
				// 				// var data = json.data;

				// 				// 保留小数位
				// 				if (info.pricedigit.split(".").length > 1) {
				// 					window.pricedigit = info.pricedigit.split(".")[1].length == 0 ? 2 : info.pricedigit.split(".")[1].length;
				// 				} else {
				// 					window.pricedigit = 0;
				// 				}

				// 				//获取数据处理后的结果
				// 				if (info.total < num) {
				// 					var result = dealData(json, info.total);
				// 				} else {
				// 					var result = dealData(json, num);
				// 				}

				// 				result.name = json.name;
				// 				result.total = info.total;
				// 				result.count = num - 20;

				// 				// 保留小数位
				// 				result.pricedigit = window.pricedigit;
				// 				if (result.data.length < 10) {
				// 					result.data.length = 10;
				// 				}
				// 				callback(result);
				// 			}

				// 		} catch (e) {
				// 			// 暂无数据
				// 			interactive.showNoData();
				// 			// 隐藏loading效果
				// 			interactive.hideLoading();
				// 		}
				// 	});
				// },5000)
				jsonp(url, urldata, callbackstring, function (json) {
					try {
						if (!json) {
							callback(null);
						} else {
							var info = json.info;
							// var data = json.data;

							// 保留小数位
							if (info.pricedigit.split(".").length > 1) {
								window.pricedigit = info.pricedigit.split(".")[1].length == 0 ? 2 : info.pricedigit.split(".")[1].length;
							} else {
								window.pricedigit = 0;
							}

							//获取数据处理后的结果
							if (info.total < num) {
								var result = dealData(json, info.total);
							} else {
								var result = dealData(json, num);
							}

							result.name = json.name;
							result.total = info.total;
							result.count = num - 20;

							// 保留小数位
							result.pricedigit = window.pricedigit;
							if (result.data.length < 10) {
								result.data.length = 10;
							}
							callback(result);
						}

					} catch (e) {
						// 暂无数据
						interactive.showNoData();
						// 隐藏loading效果
						interactive.hideLoading();
					}
				});
			}

			module.exports = getdata;


			/***/
		}),
/* 27 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 进行日K各个柱体的计算
			 *
			 * return {
			 *     max,//所有柱体中的最大值
			 *     min,//所有柱体中的最小值
			 *     fiv_average //五日均线
			 *     ten_average //十日均线
			 *     twenty_average //二十日均线
			 *     timeStrs //三个时间点日期字符串
			 *     data[ //所有的柱体
			 *          date_time： 日期
			 *          open : 开盘价
			 *          close: 收市价格
			 *          percent: 百分比
			 *          highest : 最高
			 *          lowest : 最低
			 *          volume: 换手数
			 *          up:涨跌标志
			 *     ]
			 * }
			 *     
			 */

			//转换日期（20121112 -> 2012-11-12）
			var transform = __webpack_require__(13).transform;
			var coordinate = __webpack_require__(28);
			// var fixed = require('common').fixed;
			function dealData(json, num) {
				// var info = json.info;
				var arr = json.data;
				var result = {};
				var max = 0;
				var min = 100000;
				var maxVolume = 0;
				var i = 0;
				result.data = [];
				//昨日收盘价
				var yes_clo_price = json.info.yc;
				var len = arr.length;
				var start = (len - num) > 0 ? (len - num) : 0;
				if (start === 0) {
					yes_clo_price = arr[0].split(/\[|\]/)[0].split(",")[2];
				} else {
					yes_clo_price = arr[start - 1].split(/\[|\]/)[0].split(",")[2];
				}
				for (i = start; i < len; i++) {
					try {
						var item = arr[i].split(/\[|\]/);
						var itemBase = arr[i].split(/\[|\]/)[0].split(",");
					} catch (e) {

					}

					var rect = {};

					//进行各个柱体的计算
					rect.data_time = itemBase[0];
					rect.open = itemBase[1];
					rect.close = itemBase[2];
					rect.highest = itemBase[3];
					rect.lowest = itemBase[4];

					if (i > 0) {
						rect.percent = (yes_clo_price == 0 ? 0 : ((rect.close * 1.0 - yes_clo_price) * 100 / yes_clo_price * 1.0).toFixed(2));
					} else {
						rect.percent = 0;
						max = min = rect.open;
					}
					rect.volume = itemBase[5];

					yes_clo_price = rect.close;
					rect.up = (rect.close * 1.0 - rect.open * 1.0) > 0 ? true : false;

					var mas = item[1].split(",");
					intoArr.call(result, "five_average", mas[0], rect.data_time);
					intoArr.call(result, "ten_average", mas[1], rect.data_time);
					intoArr.call(result, "twenty_average", mas[2], rect.data_time);
					intoArr.call(result, "thirty_average", mas[3], rect.data_time);

					max = Math.max(max, rect.highest);
					min = Math.min(min, rect.lowest);
					maxVolume = maxVolume > rect.volume * 1.0 ? maxVolume : rect.volume * 1.0;

					result.data.push(rect);

				}


				//日期字符串
				result.timeStrs = [];

				result.timeStrs[0] = transform(arr[start].split(',')[0]);
				result.timeStrs[1] = transform(arr[Math.floor((len + start) / 2)].split(',')[0]);
				result.timeStrs[2] = transform(arr[len - 1].split(',')[0]);

				//坐标最大价格
				result.max = parseFloat(coordinate(max, min).max);

				//坐标最小价格
				result.min = parseFloat(coordinate(max, min).min);

				//最大成交量
				result.v_max = Number((maxVolume).toFixed(2));

				return result;
			}

			//创建一个数组，并且push值
			function intoArr(name, value, date) {

				if (this[name] === undefined) {
					this[name] = [{ value: value, date: date }];
				} else {
					this[name].push({ value: value, date: date });
				}
			}



			module.exports = dealData;


			/***/
		}),
/* 28 */
/***/ (function (module, exports) {

			/**
			 * 分时图坐标上下限算法
			 */

			/*
			1.遍历出当前价的最高(high),最低点(low)
			2.取最高和最低的平均值
			3.(最高-平均)/2*1.05 得到偏移
			4.最高+偏移得最高， 最低加偏移得最低
			 */

			/**
			 * 分时图坐标上下限
			 * @param  {[type]} high 最高
			 * @param  {[type]} low 最低
			 */
			function coordinate(high, low) {
				var top = 0;
				// var fall = 0;
				var offset = (high - low) / 2 * 0.05;

				top = high + offset;
				low = low - offset;

				return { max: top, min: low };
			}

			module.exports = coordinate;

			/***/
		}),
/* 29 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制K线
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     type:    "TL"(分时图),"DK"(日K线图),"WK"(周K线图),"MK"(月K线图)
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 * }
			 *
			 */

			// 拓展，合并，复制
			var extend = __webpack_require__(6);
			// 工具
			var common = __webpack_require__(13);
			// 主题
			var theme = __webpack_require__(7);
			var DrawK = (function () {
				function DrawK(options) {
					// 设置默认参数
					this.defaultoptions = theme.draw_k;
					this.options = {};
					extend(false, this.options, this.defaultoptions, options);
					// 绘图
					this.draw();
				};

				// 绘图
				DrawK.prototype.draw = function () {
					var ctx = this.options.context;
					var data = this.options.data;
					var data_arr = data.data;

					// 绘制K线图
					this.drawK(ctx, data_arr);
				};

				// 绘制K线图
				DrawK.prototype.drawK = function (ctx, data_arr) {

					// 获取单位绘制区域
					var rect_unit = this.options.rect_unit;
					// 单位绘制区域的宽度
					// var rect_w = rect_unit.rect_w;
					// K线柱体的宽度
					var bar_w = rect_unit.bar_w;
					// K线柱体的颜色
					var up_color = this.options.up_color;
					var down_color = this.options.down_color
					// 图表交互
					var inter = this.options.interactive;
					// 上榜日数组
					var pointObj = {};
					if (this.options.markPoint && this.options.markPoint.show) {
						var array = this.options.markPoint.dateList;
						for (var index in array) {
							pointObj[array[index]] = array[index];
						}
					}

					for (var i = 0, item; item = data_arr[i]; i++) {
						// 是否上涨
						var is_up = item.up;

						ctx.beginPath();
						ctx.lineWidth = 1;

						if (is_up) {
							ctx.fillStyle = up_color;
							ctx.strokeStyle = up_color
						} else {
							ctx.fillStyle = down_color
							ctx.strokeStyle = down_color
						}

						var x = common.get_x.call(this, i + 1);
						var y_open = common.get_y.call(this, item.open);
						var y_close = common.get_y.call(this, item.close);
						var y_highest = common.get_y.call(this, item.highest);
						var y_lowest = common.get_y.call(this, item.lowest);
						item.cross_x = x;
						item.cross_y = y_close;
						// console.log(x.toFixed(2).toString());

						//标识上榜日
						if (pointObj[item.data_time]) {
							inter.markPoint(x, item.data_time, this.options.context.canvas, this.options.scale_count);
						}

						ctx.moveTo(x, y_lowest);
						ctx.lineTo(x, y_highest);
						ctx.stroke();

						ctx.beginPath();

						// ctx.lineWidth = w * (1 - this.options.spacing);
						// ctx.moveTo(x,y_open);
						// ctx.lineTo(x,y_close);

						if (y_close >= y_open) {
							ctx.rect(x - bar_w / 2, y_open, bar_w, y_close - y_open);
						} else {
							ctx.rect(x - bar_w / 2, y_close, bar_w, y_open - y_close);
						}

						ctx.stroke();
						ctx.fill();


					}

					// var delay_draw = (function  delay_draw(_this,index,data_arr){
					// 	setTimeout(draw_one_k.apply(_this,[index,data_arr[index],data_arr]),3);
					// 	return arguments.callee;
					// })(this,0,data_arr);

					// function draw_one_k(index,item,data_arr){
					// 	var _this = this;
					// 	var i = index;
					// 	return function(){
					// 		// 是否上涨
					// 		var is_up = item.up;

					// 		ctx.beginPath();
					// 		ctx.lineWidth = 1;

					// 		if(is_up){
					// 		 	ctx.fillStyle = up_color;
					//                ctx.strokeStyle = up_color
					// 		}else{
					// 			ctx.fillStyle = down_color
					//                ctx.strokeStyle = down_color
					// 		}

					// 		var x = common.get_x.call(_this,i + 1);
					// 	 	var y_open = common.get_y.call(_this,item.open);
					// 	 	var y_close = common.get_y.call(_this,item.close);
					// 	 	var y_highest = common.get_y.call(_this,item.highest);
					// 	 	var y_lowest = common.get_y.call(_this,item.lowest);
					// 	 	item.cross_x = x;
					// 	 	item.cross_y = y_close;
					// 	 	// console.log(x.toFixed(2).toString());

					// 	 	//标识上榜日
					// 	 	if(pointObj[item.data_time]){
					// 	 		inter.markPoint(x,item.data_time,_this.options.context.canvas,_this.options.scale_count);
					// 	 	}

					// 	 	ctx.moveTo(x,y_lowest);
					// 	 	ctx.lineTo(x,y_highest);
					// 	 	ctx.stroke();

					// 	 	ctx.beginPath();

					// 		// ctx.lineWidth = w * (1 - this.options.spacing);
					// 	 	// ctx.moveTo(x,y_open);
					// 	 	// ctx.lineTo(x,y_close);

					// 	 	if(y_close >= y_open){
					// 	 		ctx.rect(x - bar_w/2,y_open,bar_w,y_close - y_open);
					// 	 	}else{
					// 	 		ctx.rect(x - bar_w/2,y_close,bar_w,y_open - y_close);
					// 	 	}

					// 	 	ctx.stroke();
					// 	 	ctx.fill();

					// 	 	if(index < (data_arr.length-1)){
					// 	 		delay_draw(_this,index+1,data_arr);
					// 	 	}

					// 	}

					// }
				};

				return DrawK;
			})();

			module.exports = DrawK;

			/***/
		}),
/* 30 */
/***/ (function (module, exports, __webpack_require__) {

			/*继承*/
			var extend = __webpack_require__(6);
			/*工具*/
			var common = __webpack_require__(13);
			/*主题*/
			var theme = __webpack_require__(7);
			// 格式化坐标
			var XYF = __webpack_require__(9);
			var DrawMA = (function () {
				function DrawMA(options) {
					/*设置默认参数*/
					this.defaultoptions = theme.drawMA;
					this.options = {};
					extend(false, this.options, this.defaultoptions, options);
					/*绘图*/
					this.draw();
				};

				/*绘图*/
				DrawMA.prototype.draw = function () {
					var ctx = this.options.context;
					var data = this.options.data;
					/*5日均线数据*/
					var five_average = data.five_average;
					/*10日均线数据*/
					var ten_average = data.ten_average;
					/*20日均线数据*/
					var twenty_average = data.twenty_average;

					this.options.ma_5_data = drawMA.apply(this, [ctx, five_average, "#f4cb15"]);
					this.options.ma_10_data = drawMA.apply(this, [ctx, ten_average, "#ff5b10"]);
					this.options.ma_20_data = drawMA.apply(this, [ctx, twenty_average, "#488ee6"]);
				};
				/**
				 * 绘制均线图
				 */
				function drawMA(ctx, data_arr, color) {
					var ma_data = [];
					ctx.beginPath();
					ctx.strokeStyle = color;
					var flag = false;
					for (var i = 0; i < data_arr.length; i++) {
						var item = data_arr[i];
						if (item && item.value) {
							var x = common.get_x.call(this, i + 1);
							var y = common.get_y.call(this, item.value);
							//横坐标和均线数据
							ma_data.push(item);

							if (i == 0) {
								ctx.moveTo(x, y);
							} else if (y > (this.options.c_1_height) || y < 0) {
								ctx.moveTo(x, y);
								flag = true;
							} else {
								if (flag) {
									ctx.moveTo(x, y);
									flag = false;
								} else {
									ctx.lineTo(x, y);
								}

							}
						}

					}
					ctx.stroke();
					ctx.beginPath();
					return ma_data;
				}

				return DrawMA;
			})();

			module.exports = DrawMA;

			/***/
		}),
/* 31 */
/***/ (function (module, exports, __webpack_require__) {

			/*继承*/
			var extend = __webpack_require__(6);
			/*工具*/
			var common = __webpack_require__(13);
			/*主题*/
			var theme = __webpack_require__(7);
			/*绘制虚线*/
			var DrawDashLine = __webpack_require__(25);
			// 格式化坐标
			var XYF = __webpack_require__(9);
			var DrawV = (function () {
				function DrawV(options) {
					/*设置默认参数*/
					this.defaultoptions = theme.draw_v;
					this.options = {};
					extend(false, this.options, this.defaultoptions, options);
					/*绘图*/
					this.draw();
				};

				/*绘图*/
				DrawV.prototype.draw = function () {
					if (this.options.type == "TL") {
						/*绘制分时图成交量*/
						drawVTime.call(this);
					} else {
						/*绘制K线图成交量*/
						drawVK.call(this);
					}

				};

				/*绘制K线图成交量*/
				function drawVK() {
					var ctx = this.options.context;
					var data = this.options.data;
					/*成交量数组*/
					var data_arr = data.data;
					var v_height = this.options.unit.unitHeight * 2;
					var v_base_height = v_height * 0.9;
					var y_v_bottom = ctx.canvas.height - this.options.canvas_offset_top;
					var y_v_top = y_v_bottom - v_height;
					if (!data_arr || data_arr.length == 0) {
						ctx.beginPath();
						ctx.fillStyle = '#999';
						ctx.strokeStyle = 'rgba(230,230,230, 1)';
						// ctx.fillText(0,0,y_v_top + 10);
						ctx.rect(XYF(this.options.padding_left), XYF(y_v_top), ctx.canvas.width - this.options.padding_left - 2, v_height);
						ctx.stroke();
						return;
					}


					/*Y轴上的最大值*/
					// var y_max = data.max;
					/*Y轴上的最小值*/
					// var y_min = data.min;
					/*最大成交量*/
					var v_max = (data.v_max).toFixed(0);

					/*K线图表的高度*/
					// var c_1_height = this.options.c_1_height;
					//成交量图表的高度
					// var v_height = ctx.canvas.height - c_1_height - this.options.k_v_away - this.options.canvas_offset_top;

					/*获取单位矩形对象*/
					var rect_unit = this.options.rect_unit;
					/*单位绘图矩形画布的宽度*/
					// var rect_w = rect_unit.rect_w;
					/*K线柱体的宽度*/
					var bar_w = rect_unit.bar_w;
					/*K线柱体的颜色*/
					var up_color = this.options.up_color;
					var down_color = this.options.down_color

					//标识最大成交量
					if (this.options.showV && this.options.showVMark) {
						markVMax.apply(this, [ctx, v_max, y_v_top]);
					}

					ctx.fillStyle = '#333333';
					ctx.strokeStyle = '#e5e5e5';
					ctx.lineWidth = this.options.dpr;
					ctx.rect(XYF(this.options.padding_left), XYF(y_v_top), ctx.canvas.width - this.options.padding_left - 2, v_height);

					ctx.moveTo(XYF(this.options.padding_left), XYF(y_v_top + v_height / 2));
					ctx.lineTo(XYF(ctx.canvas.width - this.options.padding_left), XYF(y_v_top + v_height / 2));
					ctx.stroke();

					// ctx.lineWidth = 1;
					ctx.beginPath();
					for (var i = 0; i < 3; i++) {
						var x = ((i + 1) / 4) * (ctx.canvas.width - this.options.padding_left) + this.options.padding_left;

						if (i == 1) {
							ctx.strokeStyle = '#e5e5e5';
							ctx.moveTo(XYF(x), XYF(y_v_top));
							ctx.lineTo(XYF(x), XYF(y_v_bottom));
							ctx.stroke();
						} else {
							ctx.strokeStyle = '#efefef';
							DrawDashLine(ctx, x, y_v_top, x, y_v_bottom, 5);
						}

					}


					for (var i = 0, item; item = data_arr[i]; i++) {

						var volume = item.volume;
						var is_up = item.up;
						var bar_height = volume / v_max * v_base_height;
						var x = common.get_x.call(this, i + 1);
						var y = y_v_bottom - bar_height;

						ctx.beginPath();
						ctx.moveTo(XYF(x), XYF(y));

						if (is_up) {
							ctx.fillStyle = up_color;
							ctx.strokeStyle = up_color;
						} else {
							ctx.fillStyle = down_color;
							ctx.strokeStyle = down_color;
						}

						ctx.rect(XYF(x - bar_w / 2), XYF(y), bar_w, bar_height);
						ctx.stroke();
						ctx.fill();
					}


					// var delay_draw = (function  delay_draw(_this,index,data_arr){
					// 	setTimeout(draw_one_k.apply(_this,[index,data_arr[index],data_arr]),3);
					// 	return arguments.callee;
					// })(this,0,data_arr);

					// function draw_one_k(index,item,data_arr){
					// 	var _this = this;
					// 	var i = index;
					// 	return function(){
					// 			var volume = item.volume;
					// 			var is_up = item.up;
					// 			var bar_height = volume/v_max * v_base_height;
					// 			var x = common.get_x.call(_this,i + 1);
					// 			var y = y_v_bottom - bar_height;

					// 			ctx.beginPath();
					// 			ctx.moveTo(XYF(x),XYF(y));

					// 			if(is_up){
					// 				ctx.fillStyle = up_color;
					// 				ctx.strokeStyle = up_color;
					// 			}else{
					// 				ctx.fillStyle = down_color;
					// 				ctx.strokeStyle = down_color;
					// 			}

					// 			ctx.rect(XYF(x - bar_w/2),XYF(y),bar_w,bar_height);
					// 			ctx.stroke();
					// 			ctx.fill();

					// 	 	if(index < (data_arr.length-1)){
					// 	 		delay_draw(_this,index+1,data_arr);
					// 	 	}

					// 	}

					// }

				}
				// 标识最大成交量
				function markVMax(ctx, v_max, y_v_end) {
					ctx.beginPath();
					ctx.fillStyle = '#999';
					ctx.fillText(common.format_unit(v_max), 5, y_v_end + 25);
					ctx.stroke();
				}
				// 获取最大成交量
				function getVMax(data) {
					if (data.data[0]) {
						var max = data.data[0].volume;
					} else {
						var max = 0;
					}

					for (var i = 0, item = data.data; i < data.data.length; i++) {
						if (max < item[i].volume) {
							max = item[i].volume;
						}
					}
					return max
				}

				return DrawV;
			})();

			module.exports = DrawV;

			/***/
		}),
/* 32 */
/***/ (function (module, exports) {

			/*
				Cookie操作
			*/
			var EMcookie = {
				getCookieVal: function (offset) {
					var endstr = document.cookie.indexOf(";", offset);
					if (endstr == -1) {
						endstr = document.cookie.length;
					}
					return unescape(document.cookie.substring(offset, endstr));
				},
				getCookie: function (name) {
					var arg = name + "=";
					var alen = arg.length;
					var clen = document.cookie.length;
					var i = 0;
					while (i < clen) {
						var j = i + alen;
						if (document.cookie.substring(i, j) == arg) {
							return EMcookie.getCookieVal(j);
						}
						i = document.cookie.indexOf(" ", i) + 1;
						if (i == 0) break;
					}
					return null;
				},
				setCookie: function (name, value, expires, path, domain, secure) {
					document.cookie = name + "=" + escape(value) +
						((expires) ? "; expires=" + expires : "") +
						((path) ? "; path=" + path : "") +
						((domain) ? "; domain=" + domain : "") +
						((secure) ? "; secure" : "");
				},
				deleteCookie: function (name, path, domain) {
					if (getCookie(name)) {
						document.cookie = name + "=" +
							((path) ? "; path=" + path : "") +
							((domain) ? "; domain=" + domain : "") +
							"; expires=Thu, 01-Jan-1970 00:00:01 GMT";

					}
				}

			}
			module.exports = EMcookie;

			/***/
		}),
/* 33 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制手机分时图
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 * }
			 *
			 */

			// 绘制坐标轴
			var DrawXY = __webpack_require__(34);
			// 主题
			var theme = __webpack_require__(7);
			// 绘制分时折线图
			var DrawLine = __webpack_require__(35);
			// 拓展，合并，复制
			var extend = __webpack_require__(6);
			// 交互效果
			var Interactive = __webpack_require__(20);
			// 水印
			var watermark = __webpack_require__(22);
			// 添加通用工具
			var common = __webpack_require__(13);

			var ChartLine = (function () {

				// 构造函数
				function ChartLine(options) {
					this.defaultoptions = theme.chartLine;
					this.options = {};
					extend(true, this.options, theme.defaulttheme, this.defaultoptions, options);

					// 图表容器
					this.container = document.getElementById(options.container);

					this.container.className = this.container.className.replace(/emcharts-container/g, "").trim();
					this.container.className = this.container.className + " emcharts-container";
					// 图表加载完成事件
					this.onChartLoaded = options.onChartLoaded == undefined ? function (op) {

					} : options.onChartLoaded;

				}

				// 初始化
				ChartLine.prototype.init = function () {
					this.options.type = "line";
					var canvas = document.createElement("canvas");
					// 去除画布上粘贴效果
					// this.container.style = "-moz-user-select:none;-webkit-user-select:none;";
					// this.container.setAttribute("unselectable","on");
					this.container.style.position = "relative";
					// 画布
					var ctx = canvas.getContext('2d');
					this.options.canvas = canvas;
					this.options.context = ctx;
					// 设备像素比
					var dpr = this.options.dpr;
					// 画布的宽和高
					canvas.width = this.options.width * dpr;
					canvas.height = this.options.height * dpr;

					// 画布向下偏移的距离
					this.options.canvas_offset_top = canvas.height / (9 * 2);
					// 画布内容向坐偏移的距离
					this.options.padding_left = canvas.width / 6;

					// 行情图表（分时图或K线图）和成交量图表的间距
					this.options.k_v_away = canvas.height / (9 * 2);
					// 缩放默认值
					this.options.scale_count = 0;
					this.options.decimalCount = this.options.decimalCount == undefined ? 2 : this.options.decimalCount;
					// 画布上第一个图表的高度
					if (this.options.showflag) {
						this.options.c_1_height = canvas.height * (5 / 9);
					} else {
						this.options.c_1_height = canvas.height * (7 / 9);
					}

					canvas.style.width = this.options.width + "px";
					canvas.style.height = this.options.height + "px";
					canvas.style.border = "0";

					// 画布上部内间距
					ctx.translate("0", this.options.canvas_offset_top);
					// 画笔参数设置
					ctx.font = (this.options.font_size * this.options.dpr) + "px Arial";
					ctx.lineWidth = 1 * this.options.dpr + 0.5;

					// 容器中添加画布
					this.container.appendChild(canvas);
				};

				// 绘图
				ChartLine.prototype.draw = function (callback) {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					// 初始化交互
					this.options.interactive = new Interactive(this.options);
					var ctx = this.options.context;
					// 显示loading效果
					// inter.showLoading();
					// var _this = this;

					// 折线数据
					var series = this.options.series;
					this.options.data = {};
					var maxAndMin = getMaxMark(series);

					this.options.data.max = maxAndMin.max;
					this.options.data.min = maxAndMin.min;
					this.options.padding_left = ctx.measureText("+9000万").width + 20;

					// 绘制坐标轴
					new DrawXY(this.options);
					// 绘制分时折线图
					new DrawLine(this.options);
					// 加水印
					watermark.apply(this, [ctx, 190, 20]);

				};
				// 重绘
				ChartLine.prototype.reDraw = function () {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					this.draw();
				}
				// 删除canvas画布
				ChartLine.prototype.clear = function (cb) {
					if (this.container) {
						this.container.innerHTML = "";
					} else {
						document.getElementById(this.options.container).innerHTML = "";
					}
					if (cb) {
						cb();
					};
				}

				// 获取数组中的最大值
				function getMaxMark(data) {
					var max = -1000000,
						min = 0,
						count = [];
					for (var i = 0; i < data.length; i++) {
						count = count.concat(data[i].data);
					}
					max = count[0];
					min = count[0];

					for (var i = 1; i < count.length; i++) {
						if (count[i]) {
							max = Math.max(max, count[i]);
							min = Math.min(min, count[i]);
						}

					}

					max = max / 1 + (max - min) * 0.05;
					min = min / 1 - (max - min) * 0.05;
					return {
						max: max,
						min: min
					};
				}

				return ChartLine;
			})();

			module.exports = ChartLine;


			/***/
		}),
/* 34 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制直角坐标系
			 */
			var extend = __webpack_require__(6);
			/*主题*/
			var theme = __webpack_require__(7);
			var common = __webpack_require__(13);
			var DrawXY = (function () {
				//构造方法
				function DrawXY(options) {
					/*设置默认参数*/
					this.defaultoptions = theme.draw_xy;
					this.options = {};
					extend(false, this.options, this.defaultoptions, options);
					/*绘图*/
					this.draw();
				};
				/*绘图*/
				DrawXY.prototype.draw = function () {
					// var xAxisData = this.options.xaxis;
					// var yAxisData = this.options.series;
					// var type = this.options.type;
					// var dpr = this.options.dpr;
					var ctx = this.options.context;

					/*Y轴上的最大值*/
					var y_max = this.options.data.max;
					/*Y轴上的最小值*/
					var y_min = this.options.data.min;

					/*Y轴上分隔线数量*/
					var sepe_num = this.options.sepenum || 6;
					/*开盘收盘时间数组*/
					var oc_time_arr = this.options.xaxis;

					/*K线图的高度*/
					var k_height = this.options.c_1_height;
					/*Y轴标识线列表*/
					var line_list_array = getLineList(y_max, y_min, sepe_num, k_height);

					drawXYLine.call(this, ctx, y_max, y_min, line_list_array);

					// 绘制横坐标刻度
					drawXMark.apply(this, [ctx, k_height, oc_time_arr]);
				};

				// 绘制坐标轴最左边刻度
				function drawXYLine(ctx, y_max, y_min, line_list_array) {
					ctx.save();
					// var sepe_num = line_list_array.length;
					ctx.fillStyle = '#b1b1b1';
					ctx.strokeStyle = '#ccc';
					ctx.textAlign = 'right';
					for (var i = 0, item; item = line_list_array[i]; i++) {
						ctx.beginPath();
						ctx.moveTo(this.options.padding_left, Math.round(item.y));
						ctx.lineTo(ctx.canvas.width, Math.round(item.y));
						// 绘制纵坐标刻度
						ctx.fillText(common.format_unit(item.num / 1, this.options.decimalCount), this.options.padding_left - 10, item.y + 10);
						ctx.stroke();
					}
					ctx.restore();
				}

				/*绘制横坐标刻度值*/
				function drawXMark(ctx, k_height, oc_time_arr) {
					ctx.save();
					// var dpr = this.options.dpr;
					var padding_left = this.options.padding_left;
					ctx.beginPath();
					ctx.textAlign = 'center';
					ctx.fillStyle = '#b1b1b1';
					/*画布宽度*/
					var k_width = ctx.canvas.width;
					// var y_date = this.options.c_1_height;
					var tempDate;
					// var timeSpacing = (this.options.width * dpr - padding_left) / oc_time_arr.length + padding_left;
					var arr_length = oc_time_arr.length;
					for (var i = 0; i < arr_length; i++) {
						tempDate = oc_time_arr[i];
						if (tempDate.show == undefined ? true : tempDate.show) {
							if (i < arr_length - 1) {
								ctx.fillText(tempDate.value, i * (k_width - padding_left) / (arr_length - 1) + padding_left, this.options.c_1_height + 40);
							} else

								if (i * (k_width - padding_left) / (arr_length - 1) + padding_left + ctx.measureText(tempDate.value).width > ctx.canvas.width) {
									ctx.fillText(tempDate.value, ctx.canvas.width - ctx.measureText(tempDate.value).width / 2, this.options.c_1_height + 40);
								}
						}

						if (tempDate.showline == undefined ? true : tempDate.showline) {
							ctx.strokeStyle = '#ccc';
							ctx.moveTo(i * (k_width - padding_left) / (arr_length - 1) + padding_left, 0);
							ctx.lineTo(i * (k_width - padding_left) / (arr_length - 1) + padding_left, this.options.c_1_height);
						}

					}

					// 绘制坐标刻度
					ctx.stroke();
					ctx.restore();
				}

				/*Y轴标识线列表*/
				function getLineList(y_max, y_min, sepe_num, k_height) {
					var ratio = (y_max - y_min) / (sepe_num - 1);
					var result = [];
					for (var i = 0; i < sepe_num; i++) {
						result.push({
							num: (y_min + i * ratio),
							x: 0,
							y: k_height - (i / (sepe_num - 1)) * k_height
						});
					}
					return result;
				}

				return DrawXY;
			})();

			module.exports = DrawXY;

			/***/
		}),
/* 35 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制折线图
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     type:    "TL"(分时图),"DK"(日K线图),"WK"(周K线图),"MK"(月K线图)
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 *     canvas_offset_top:   画布中坐标轴向下偏移量
			 *     padding_left:    画布左侧边距
			 *     k_v_away:    行情图表（分时图或K线图）和成交量图表的间距
			 *     scale_count:     缩放默认值
			 *     c_1_height:  行情图表（分时图或K线图）的高度
			 *     rect_unit:   分时图或K线图单位绘制区域
			 * }
			 *
			 */

			/*继承*/
			var extend = __webpack_require__(6);
			/*主题*/
			var theme = __webpack_require__(7);
			/*工具*/
			var common = __webpack_require__(13);
			var DrawLine = (function () {
				function DrawLine(options) {
					// 设置默认参数
					this.defaultoptions = theme.drawLine;
					this.options = {};
					extend(false, this.options, this.defaultoptions, options);
					// 绘图
					this.draw();
				};

				// 绘图
				DrawLine.prototype.draw = function () {

					var ctx = this.options.context;
					ctx.lineWidth = 1 * this.options.dpr + 1;
					// 折线数据
					var series = this.options.series;
					// 横坐标数据
					// var xaxis = this.options.xaxis;
					for (var i = 0, line; line = series[i]; i++) {
						// 填充颜色
						ctx.fillStyle = line.color == undefined ? "#333" : line.color;
						// 画笔颜色
						ctx.strokeStyle = line.color == undefined ? "#333" : line.color;
						drawLine.apply(this, [ctx, line]);

						if (line.showpoint) {
							drawPoint.apply(this, [ctx, line]);
						}

					}
					if (this.options.showflag) {
						drawLineMark.apply(this, [ctx, series]);
					}
				};

				// 绘制折线
				function drawLine(ctx, line) {
					// 保存画笔状态
					ctx.save();

					var arr = line.data;
					var arr_length = arr.length;

					ctx.beginPath();

					for (var i = 0; i < arr_length; i++) {
						var item = arr[i];
						if (item) {
							var x = ((ctx.canvas.width - this.options.padding_left) / (arr_length - 1)) * (i) + this.options.padding_left;
							var y = common.get_y.call(this, item);
							if (i == 0) {
								ctx.moveTo(this.options.padding_left, y);
							} else if (i == arr_length - 1) {
								ctx.lineTo(x, y);
							} else {
								ctx.lineTo(x, y);
							}
						} else {
							continue;
						}

					}

					// ctx.fill();
					ctx.stroke();
					// 恢复画笔状态
					ctx.restore();
				}

				// 绘制折线节点（连接点）
				function drawPoint(ctx, line) {
					// 保存画笔状态
					ctx.save();

					var arr = line.data;
					var arr_length = arr.length;

					// 节点（折线连接点半径）
					var pointRadius = this.options.pointRadius;

					for (var i = 0, item; item = arr[i]; i++) {
						ctx.beginPath();
						var x = ((ctx.canvas.width - this.options.padding_left) / (arr_length - 1)) * (i) + this.options.padding_left;
						var y = common.get_y.call(this, item);
						if (i == 0) {
							ctx.arc(x, y, pointRadius, 0, Math.PI * 2, true);
							ctx.fill();
						} else if (i == arr_length - 1) {

						} else {
							ctx.arc(x, y, pointRadius, 0, Math.PI * 2, true);
							ctx.fill();
						}

					}
					// 恢复画笔状态
					ctx.restore();
				}


				// 绘制折线标识
				function drawLineMark(ctx, series) {
					// 保存画笔状态
					ctx.save();
					var dpr = this.options.dpr;
					var x_middle = ctx.canvas.width / 2;
					var wh = this.options.lineMarkWidth * dpr;
					var x_start = 0;
					var y_start = ctx.canvas.height * (7 / 9 - 1 / 18);

					for (var i = 0, line; line = series[i]; i++) {
						ctx.beginPath();

						// 画笔颜色
						ctx.strokeStyle = '#cadef8';
						var mark_offset = (Math.floor(i / 2)) * (wh + 7 * dpr);
						var text_offset = this.options.font_size * this.options.dpr + (wh - this.options.font_size * this.options.dpr) / 2;
						if (i == 0) {
							// 填充颜色
							ctx.fillStyle = line.color;
							ctx.rect(x_start + 20, y_start, wh, wh);
							ctx.fill();
							// 填充颜色
							ctx.fillStyle = '#333';
							ctx.fillText(line.name, x_start + wh + 80, y_start + text_offset);
						} else if ((i + 1) % 2 == 0) {
							// 填充颜色
							ctx.fillStyle = line.color;
							ctx.rect(x_middle, y_start + mark_offset, wh, wh);
							ctx.fill();
							// 填充颜色
							ctx.fillStyle = '#333';
							ctx.fillText(line.name, x_middle + wh + 60, y_start + mark_offset + text_offset);
						} else {
							// 填充颜色
							ctx.fillStyle = line.color;
							ctx.rect(x_start + 20, y_start + mark_offset, wh, wh);
							ctx.fill();
							ctx.fillStyle = '#333';
							ctx.fillText(line.name, x_start + wh + 80, y_start + mark_offset + text_offset);
						}
					}
					// 恢复画笔状态
					ctx.restore();
				}

				return DrawLine;
			})();

			module.exports = DrawLine;

			/***/
		}),
/* 36 */
/***/ (function (module, exports, __webpack_require__) {

			var extend = __webpack_require__(21);
			var DrawXY = __webpack_require__(37);
			var divide = __webpack_require__(38);
			var drawBar = __webpack_require__(39);
			var handleEvent = __webpack_require__(40);// 水印
			var watermark = __webpack_require__(22);

			var ChartMobileBar = (function () {

				function ChartMobileBar(options) {
					this.options = extend(this.options, options);
					// 图表容器
					this.container = document.getElementById(options.container);
					this.container.className = this.container.className + " canvas-container";
				}

				ChartMobileBar.prototype.init = function () {
					/*默认和初始化*/
					this.container.style.position = "relative";
					var dpr = 2;
					/*canvas属性*/
					var canvas = document.createElement("canvas");
					canvas.width = dpr * this.options.width;
					canvas.height = dpr * this.options.height;
					canvas.style.width = this.options.width + "px";
					canvas.style.height = this.options.height + "px";
					canvas.style.border = "0";

					var ctx = canvas.getContext("2d");
					this.options.font_size = 12;
					ctx.font = (this.options.font_size * dpr) + "px Arial";
					ctx.lineWidth = dpr * 1;
					this.options.dpr = dpr;
					this.options.canvas = canvas;
					this.options.context = ctx;
					this.container.appendChild(canvas);

					this.options.defaultColor = "#FF7200";
					this.options.defaultHoverColor = "#FF9A4A";
					if (!this.options.sepeNum) {
						this.options.sepeNum = 4;
					}
					this.options.padding = {};
					this.options.padding.left = ctx.measureText("2.00").width * dpr;
					this.options.padding.right = 10;
					this.options.padding.top = this.options.font_size * 2 * dpr;
					this.options.padding.bottom = 50 * dpr;

					/*单元格的宽度*/
					var unit_w_len = (canvas.width - this.options.padding.left -
						this.options.padding.right) / this.options.series.data.length;
					/*柱体的宽度*/
					var unit_w_kind = unit_w_len / 3;
					this.options.unit_w_len = unit_w_len;
					this.options.unit_w_kind = unit_w_kind;
					var coordinate = divide(this.options.sepeNum, this.options.series.data);
					this.options.coordinate = coordinate;
					// 加水印
					watermark.apply(this, [this.options.context, 90 * dpr, 40 * dpr, 82 * dpr, 20 * dpr]);
				};

				ChartMobileBar.prototype.draw = function (cb) {
					this.init();
					var _this = this;
					new DrawXY(this.options);
					drawBar.call(this);
					this.options.canvas.addEventListener("touchstart", function (e) {
						var w_x = (e.touches[0].clientX - _this.container.getBoundingClientRect().left);
						var w_y = (e.touches[0].clientY - _this.container.getBoundingClientRect().top);
						handleEvent.call(_this, w_x, w_y);
					}, false);

					this.options.canvas.addEventListener("click", function (e) {
						var w_x = (e.clientX - _this.container.getBoundingClientRect().left);
						var w_y = (e.clientY - _this.container.getBoundingClientRect().top);
						handleEvent.call(_this, w_x, w_y);
					}, false);
					if (cb) {
						cb();
					}
				};

				// 重绘
				ChartMobileBar.prototype.reDraw = function () {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					this.draw();
				}

				ChartMobileBar.prototype.clear = function (cb) {
					if (this.container) {
						this.container.innerHTML = "";
					} else {
						document.getElementById(this.options.container).innerHTML = "";
					}
					if (cb) {
						cb();
					};
				}


				return ChartMobileBar;
			})();

			module.exports = ChartMobileBar;


			/***/
		}),
/* 37 */
/***/ (function (module, exports, __webpack_require__) {

			/*绘制xy轴*/
			var extend = __webpack_require__(21);
			var draw_dash = __webpack_require__(8);
			var DrawXY = (function () {
				function DrawXY(options) {
					this.options = {};
					this.options = extend(this.options, options);

					this.draw();
				}

				DrawXY.prototype.init = function () {
					/*设置可以被参数化的变量*/
					//y轴上设置
					this.options.yLefShow = true;
					this.options.yRightShow = true;
					this.options.isDash = true;

					// x轴上设置
					this.options.xSplitShow = false; //是否进行分割
					this.options.xShowDivide = false; //是否显示分割标志

				}

				DrawXY.prototype.draw = function () {
					this.init();
					var paddingTop = this.options.padding.top;
					var paddingLeft = this.options.padding.left;
					var paddingRight = this.options.padding.right;
					var paddingBottom = this.options.padding.bottom;
					var ctx = this.options.context;
					var canvas = this.options.canvas;
					var arr_x = this.options.xaxis;
					var arr_data = this.options.series.data;
					var unit_w_len = this.options.unit_w_len;
					var dpr = this.options.dpr;

					var coordinate = this.options.coordinate;
					var maxY = coordinate.max;
					var minY = coordinate.min;
					var stepHeight = coordinate.stepHeight;
					var sepeNum = this.options.sepeNum;
					var totalHeight = canvas.height - paddingTop - paddingBottom;
					var baseLine = paddingTop + (maxY / stepHeight) * (totalHeight) / sepeNum;

					/*开始进行绘制*/
					ctx.save();
					var y_bottom = Math.round(canvas.height - paddingBottom);
					var y_top = Math.round(paddingTop);
					var x_left = Math.round(paddingLeft);
					var x_right = Math.round(canvas.width - paddingRight);
					/*框*/
					ctx.strokeStyle = "#C9C9C9";
					ctx.beginPath();

					ctx.moveTo(x_left, y_bottom);
					ctx.lineTo(x_right, y_bottom);

					ctx.moveTo(x_left, y_bottom);
					ctx.lineTo(x_left, y_top);

					ctx.moveTo(x_left, y_top);
					ctx.lineTo(x_right, y_top);

					ctx.moveTo(x_right, y_bottom);
					ctx.lineTo(x_right, y_top);
					ctx.stroke();

					/*横标*/
					var stepY = (y_bottom - y_top) / sepeNum;
					ctx.textBaseline = "top";
					for (var i = 0, len = arr_x.length; i < len; i++) {
						var textWidth = ctx.measureText(arr_x[i].value).width;
						if (arr_x[i].show) {
							ctx.fillText(arr_x[i].value, x_left + i * unit_w_len + (unit_w_len - textWidth) / 2, y_bottom + 15);
						}
					}

					/*纵标*/
					for (i = 1, len = sepeNum; i < len; i++) {
						var round = dpr / 2;
						if (i == maxY / stepHeight) {
							ctx.beginPath();
							ctx.moveTo(x_left, Math.round(stepY * i + paddingTop) + round);
							ctx.lineTo(x_right, round + Math.round(stepY * i + paddingTop));
							ctx.stroke();
						} else {
							draw_dash(ctx, x_left, Math.round(stepY * i + paddingTop) + round,
								x_right, round + Math.round(stepY * i + paddingTop), 3);
						}
					}
					/*纵标刻度*/
					var yMax = this.options.coordinateMaxY;
					ctx.textAlign = "end";
					var markStep = yMax / sepeNum;
					for (i = 0; i <= sepeNum; i++) {
						ctx.beginPath();
						if (i === 0) {
							ctx.textBaseline = "bottom";
						} else if (i === sepeNum) {
							ctx.textBaseline = "top";
						} else {
							ctx.textBaseline = "middle";
						}
						ctx.fillText(roundFloat(minY + i * stepHeight, stepHeight), paddingLeft - 10, stepY * (sepeNum - i) + paddingTop);
					}
				}

				function roundFloat(f, stepHeight) {
					var precise = 1;
					if (stepHeight.toString().indexOf(".") !== -1) {
						precise = stepHeight.toString().length - stepHeight.toString().indexOf(".") - 1;
					}
					var m = Math.pow(10, precise);
					return Math.round(f * m) / m;
				}

				return DrawXY;
			})();


			module.exports = DrawXY;


			/***/
		}),
/* 38 */
/***/ (function (module, exports) {

			// 指定分割区间个数(num：希望分割为多少个区间, arr：传入的数组);返回步长
			function divide(num, parmarr) {
				//做处理，防止出现undefind，null, NaN之类的数据
				var arr = [];
				for (var i = 0, len = parmarr.length; i < len; i++) {
					if (parmarr[i] !== NaN && parmarr[i] !== null && parmarr[i] !== undefined) {
						arr.push(parmarr[i]);
					}
				}
				if (arr.length <= 1) {
					arr.push(0);
				}
				var max = arr[0],
					min = arr[0];
				var len = arr.length;
				var result = {};
				var flag = 1;
				// 找到数组中的最大最小值
				for (var i = len - 1; i >= 0; i--) {
					max = Math.max(max, arr[i]);
					min = Math.min(min, arr[i]);
				}
				if (max <= 0) {
					max = Math.abs(min);
					min = Math.abs(max);
					flag = -1;
				}

				if (isNaN(max) || isNaN(min)) {
					console.info("传入的数据数组不为数字");
					return {
						max: 0,
						min: 0,
						stepHeight: 0
					}
				}

				if (max === min && max === 0) {
					return {
						max: 0,
						min: 0,
						stepHeight: 0
					}
				}
				// debugger;
				// 对最大最小值情况判断，进行不同求值过程
				var stepHeight = getStepLength(num, max, min);
				var base = getBase(stepHeight);
				var intStepHeight = stepHeight * Math.pow(10, Math.abs(base) + 1);
				// 正数的分割个数
				var integerStepNum = Math.floor(max / stepHeight + 1);
				if (min >= 0) {
					integerStepNum = num;
				} else {
					integerStepNum = num - Math.floor(Math.abs(min) / stepHeight + 1);
				}

				if (flag === 1) {
					result.max = moveDot((integerStepNum) * intStepHeight, -Math.abs(base) - 1) * 1.0;
					result.min = -moveDot((num - integerStepNum) * intStepHeight, -Math.abs(base) - 1) * 1.0;
				} else {//如果都是负数，交换最大最小值
					result.min = moveDot((integerStepNum) * intStepHeight, -Math.abs(base) - 1) * 1.0 * flag;
					result.max = -moveDot((num - integerStepNum) * intStepHeight, -Math.abs(base) - 1) * 1.0 * flag;
				}
				result.stepHeight = stepHeight;
				return result;
			}

			function moveDot(n, num) {
				var str = (n + "");
				var len = str.length;
				var numberArry = str.split("");
				var dotIndex = str.indexOf(".");
				if (dotIndex === -1) {
					dotIndex = len;
				}
				var needTo = dotIndex + num;
				numberArry.splice(dotIndex, 1);
				if (needTo >= len) {
					for (var i = 0; i <= needTo - len; i++) {
						numberArry.push("0");
					}
				} else if (needTo <= 0) {
					for (var i = 0; i >= needTo; i--) {
						numberArry.unshift("0");
					}
					needTo = 1;
				}

				if (needTo < dotIndex) {
					numberArry.splice(needTo, 0, ".");
				} else {
					numberArry.splice(needTo, 0, ".");
				}

				return numberArry.join("");

			}


			function getStepLength(num, max, min) {
				var tempNum = num;
				var totalHeight = max;
				if (min < 0 && max > 0) {
					totalHeight = max + Math.abs(min);
					tempNum = num - 1;
				}
				if (totalHeight === 0 && num === 0) {
					return 0;
				}
				var tempStepHeight = totalHeight / tempNum;
				return selfRound(tempStepHeight);
			}

			// 自定义的舍入规则（对于最大的两位数，第二位大于3进10，小于等于3进5）
			function selfRound(n) {
				var base = getBase(n);
				// 找到第一个和第二个非零数字
				var str = n + "";
				if (base < 0) {
					str = n.toFixed(Math.abs(base) + 2);
				}
				var str = str.replace(/\./g, "");
				var first, second;
				first = (str + "").match(/[1-9]/g);
				first = first[0] || 0;
				if (str.indexOf(first + "") + 1 > str.length) {
					second = "0";
				} else {
					second = str.charAt(str.indexOf(first + "") + 1);
				}
				// 进行进位操作
				if (second <= 3) {
					second = "5";
				} else {
					second = 0;
					first = first * 1.0 + 1;
					if (first === 10) {
						first = "1";
						second = "0";
						base += 1;
					}
				}
				return ((first + "" + second) * Math.pow(10, base - 1)).toFixed(Math.abs(base) + 2) * 1;
			}


			//获取一个数字的数量级，如：20-->2, 1.0002-->1, 0.001 --> -3 
			function getBase(max) {
				var arr = (max + "").split(".");
				if (arr[0] == 0 && arr[1]) {
					return -(arr[1].match(/^[0]*/g) + "").length - 1;
				} else {
					return arr[0].length - 1;
				}
			}


			module.exports = divide;

			/***/
		}),
/* 39 */
/***/ (function (module, exports) {

			/*绘制每个柱体*/
			function drawBar() {
				var series = this.options.series;
				var unit_w_len = this.options.unit_w_len;
				var unit_w_kind = this.options.unit_w_kind;
				var coordinate = this.options.coordinate;
				var maxY = coordinate.max;
				var minY = coordinate.min;
				var stepHeight = coordinate.stepHeight;
				var sepeNum = this.options.sepeNum;

				var canvas = this.options.canvas;
				var ctx = this.options.context;
				var paddingTop = this.options.padding.top;
				var paddingLeft = this.options.padding.left;
				var paddingRight = this.options.padding.right;
				var paddingBottom = this.options.padding.bottom;
				var totalHeight = canvas.height - paddingBottom - paddingTop;
				var baseLine = paddingTop + (maxY / stepHeight) * (totalHeight) / sepeNum;

				ctx.beginPath();
				ctx.save();
				ctx.lineWidth = this.options.dpr;
				ctx.fillStyle = this.options.series.color;
				for (var i = 0, len = series.data.length; i < len; i++) {
					var width = unit_w_kind;
					var height = totalHeight * (series.data[i] / (maxY - minY));
					var x = i * unit_w_len + paddingLeft + unit_w_kind;
					var y = baseLine - height;
					ctx.fillRect(Math.round(x), Math.round(y), Math.round(width), Math.round(height));
				}
				ctx.restore()
			}


			module.exports = drawBar;

			/***/
		}),
/* 40 */
/***/ (function (module, exports, __webpack_require__) {

			var animationEasing = __webpack_require__(41);
			/*事件处理程序*/
			function handleEvent(winX, winY) {
				var dpr = this.options.dpr;
				var ctx = this.options.context;
				var cvsX = winX * dpr;
				var cvsY = winY * dpr;

				var paddingTop = this.options.padding.top,
					paddingLeft = this.options.padding.left,
					paddingRight = this.options.padding.right,
					paddingBottom = this.options.padding.bottom,
					series = this.options.series,
					unit_w_len = this.options.unit_w_len,
					unit_w_kind = this.options.unit_w_kind,
					canvas = this.options.canvas,
					coordinate = this.options.coordinate,
					maxY = coordinate.max,
					minY = coordinate.min,
					stepHeight = coordinate.stepHeight,
					sepeNum = this.options.sepeNum;

				var totalHeight = canvas.height - paddingTop - paddingBottom;
				var baseLine = paddingTop + (maxY / stepHeight) * (totalHeight) / sepeNum;

				var current = Math.floor((cvsX - paddingLeft) / unit_w_len);
				/*判断是否点击到*/
				var inRect = false, name = "", suffix = "";
				/*对应的柱体信息*/
				var rectHeight, rectWidth, rectX, rectY;
				if (current < 0 || current >= series.data.length) {
					inRect = false;
				} else {
					rectHeight = totalHeight * (series.data[current] / (maxY - minY)),
						rectWidth = unit_w_kind,
						rectX = current * unit_w_len + unit_w_kind + paddingLeft,
						rectY = rectHeight > 0 ? (baseLine - rectHeight) : baseLine;
					if (cvsX >= rectX && cvsX <= rectX + rectWidth && cvsY >= rectY && cvsY <= rectY + Math.abs(rectHeight)) {
						inRect = true;
					}
				}
				if (inRect) {
					/*改变颜色，并且记录*/
					if (this.options.preColume !== undefined) {
						changeRect(this.options.preColume, series.color);
					}
					this.options.preColume = current;
					changeRect(current, series.hoverColor);

					/*tips交互*/
					if (!this.options.tipPanel) {
						var tipPanel = document.createElement("div");

						var h1 = document.createElement("strong");
						var paragraph = document.createElement("div");
						h1.innerHTML = this.options.xaxis[current].value;
						paragraph.innerHTML = (series.name === undefined ? "" : series.name + ":") +
							series.data[current] + (series.suffix === undefined ? "" : series.suffix);
						tipPanel.appendChild(h1);
						tipPanel.appendChild(paragraph);
						this.container.appendChild(tipPanel);
						this.options.tipPanel = tipPanel;

						tipPanel.style.position = "absolute";
						tipPanel.style.mineHeight = "30px";
						tipPanel.style.paddingRight = "10px";
						tipPanel.style.opacity = "0.5";
						tipPanel.style.backgroundColor = "#4C4C4C";
						tipPanel.style.borderRadius = "5px";
						tipPanel.style.padding = "5px";
						tipPanel.style.color = "white";
						h1.style.whiteSpace = "nowrap";
						paragraph.style.margin = "0px";
						var top = (baseLine - rectHeight) / dpr;
						var offSetY = rectHeight > 0 ? (unit_w_kind / dpr / 2 - tipPanel.clientHeight) : -unit_w_kind / dpr / 2;
						var left = rectX / dpr + unit_w_kind / dpr / 2;
						/*顶部过界*/
						if ((top + offSetY) < paddingTop) {
							tipPanel.style.top = paddingTop / dpr + 10 + "px";
						} else if ((top + offSetY) > (canvas.height - paddingBottom)) {
							tipPanel.style.top = paddingBottom / dpr - tipPanel.clientHeight - 10 + "px";
						} else {
							tipPanel.style.top = top + offSetY + "px";
						}
						/*左右区分*/
						if ((left) * dpr > (canvas.width - paddingRight) / 2) {
							tipPanel.style.left = rectX / dpr + unit_w_kind / dpr / 2 - tipPanel.clientWidth + "px";
						} else {
							tipPanel.style.left = rectX / dpr + unit_w_kind / dpr / 2 + "px";
						}
					} else {
						var tipPanel = this.options.tipPanel;
						var top = (baseLine - rectHeight) / dpr;
						var left = rectX / dpr + unit_w_kind / dpr / 2;
						var targetX, targetY;
						var offSetY = rectHeight > 0 ? (unit_w_kind / dpr / 2 - tipPanel.clientHeight) : -unit_w_kind / dpr / 2;
						tipPanel.children[0].innerHTML = this.options.xaxis[current].value;
						tipPanel.children[1].innerHTML = (series.name === undefined ? "" : series.name + ":") +
							series.data[current] + (series.suffix === undefined ? "" : series.suffix);
						/*顶部过界*/
						if ((top + offSetY) < paddingTop) {
							targetY = paddingTop / dpr + 10;
						} else if ((top + offSetY) > (canvas.height - paddingBottom)) {
							targetY = paddingBottom / dpr - tipPanel.clientHeight - 10;
						} else {
							targetY = top + offSetY;
						}
						/*左右区分*/
						if ((left) * dpr > (canvas.width - paddingRight) / 2) {
							targetX = rectX / dpr + unit_w_kind / dpr / 2 - tipPanel.clientWidth;
						} else {
							targetX = rectX / dpr + unit_w_kind / dpr / 2;
						}
						if (this.options.tipPanel.style.visibility === "hidden") {
							tipPanel.style.top = targetY + "px";
							tipPanel.style.left = targetX + "px";
							this.options.tipPanel.style.visibility = "visible";
						} else {
							animationEasing.fast2slow(tipPanel, targetX, targetY);
						}
					}
				} else {
					if (this.options.preColume !== undefined) {
						tempCurrent = this.options.preColume;
						changeRect(tempCurrent, series.color);
					}
					if (this.options.tipPanel) {
						this.options.tipPanel.style.visibility = "hidden";
					}
				}
				function changeRect(i, color) {
					ctx.fillStyle = color;
					var height = totalHeight * (series.data[i] / (maxY - minY));
					var x = i * unit_w_len + unit_w_kind + paddingLeft;
					var y = height > 0 ? (baseLine - height) : baseLine;
					var width = unit_w_kind;
					height = Math.abs(height);
					ctx.clearRect(Math.round(x), Math.round(y), Math.round(width), Math.round(height));
					ctx.fillRect(Math.round(x), Math.round(y), Math.round(width), Math.round(height));
				}
			}

			module.exports = handleEvent;


			/***/
		}),
/* 41 */
/***/ (function (module, exports) {

			/*缓动函数*/
			var animation = {
				fast2slow: function (obj, x2, y2) {
					var x1 = parseInt(obj.style.left);
					var y1 = parseInt(obj.style.top);
					var stepY = (y2 - y1) / 5;
					var stepX = (x2 - x1) / 5;
					if (stepX === 0 && stepY === 0) {
						clearTimeout(obj.timer);
						return;
					} else if (stepX === 0) {
						stepY = (Math.abs(stepY) <= 1) ? stepY * 1 / Math.abs(stepY) : stepY;
					} else if (stepY === 0) {
						stepX = (Math.abs(stepX) <= 1) ? stepX * 1 / Math.abs(stepX) : stepX;
					} else {
						stepY = (Math.abs(stepY) <= 1) ? stepY * 1 / Math.abs(stepY) : stepY;
						stepX = (Math.abs(stepX) <= 1) ? stepX * 1 / Math.abs(stepX) : stepX;
					}
					if (Math.abs(x2 - (x1 + stepX)) <= 1 && Math.abs(y2 - (y1 + stepY)) <= 1) {
						clearTimeout(obj.timer);
						return;
					}

					if (Math.abs(x2 - x1) <= 1) {
						stepX = 0;
					}
					if (Math.abs(y2 - y1) <= 1) {
						stepY = 0;
					}

					obj.style.left = x1 + stepX + "px";
					obj.style.top = y1 + stepY + "px";
					var _this = this;
					// debugger;
					obj.timer = setTimeout(function () {
						_this.fast2slow(obj, x2, y2);
					}, 10);
				}

			};

			module.exports = animation;


			/***/
		}),
/* 42 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制季度柱状图
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     type:    "TL"(分时图),"DK"(日K线图),"WK"(周K线图),"MK"(月K线图)
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 * }
			 *
			 */

			// 绘制坐标轴
			var DrawXY = __webpack_require__(43);
			// 主题
			var theme = __webpack_require__(7);
			// 绘制季度柱状图
			var DrawBar = __webpack_require__(44);
			// 拓展，合并，复制
			var extend = __webpack_require__(21);
			// 水印
			var watermark = __webpack_require__(22);
			// 添加通用工具
			var common = __webpack_require__(13);
			// 获取步长，最大值，最小值
			var divide = __webpack_require__(38);

			var ChartBarQuarter = (function () {

				// 构造函数
				function ChartBarQuarter(options) {
					this.defaultoptions = theme.defaulttheme;
					this.options = extend(this.defaultoptions, options);

					// 图表容器
					this.container = document.getElementById(options.container);
					this.container.className = this.container.className + " emcharts-container";
					// 图表加载完成事件
					this.onChartLoaded = options.onChartLoaded == undefined ? function (op) {

					} : options.onChartLoaded;

				}

				// 初始化
				ChartBarQuarter.prototype.init = function () {

					this.options.type = "group-bar";
					var canvas = document.createElement("canvas");

					// 去除画布上粘贴效果
					//this.container.style = "-moz-user-select:none;-webkit-lauser-select:none;";
					// this.container.setAttribute("unselectable", "on");
					this.container.style.position = "relative";
					// 画布
					try {
						var ctx = canvas.getContext('2d');
					} catch (error) {
						canvas = window.G_vmlCanvasManager.initElement(canvas);
						var ctx = canvas.getContext('2d');
					}


					this.options.canvas = canvas;
					this.options.context = ctx;

					this.options.sepeNum = this.options.sepeNum == undefined ? 4 : this.options.sepeNum;
					if (this.options.sepeNum < 2) {
						this.options.sepeNum = 2;
					}

					// 容器中添加画布
					this.container.appendChild(canvas);

					// 设备像素比
					var dpr = this.options.dpr;
					// 画布的宽和高
					canvas.width = this.options.width * dpr;
					canvas.height = this.options.height * dpr;

					// 画布向下偏移的距离
					this.options.canvas_offset_top = 15 * dpr;
					// 画布内容向坐偏移的距离
					this.options.c_1_height = canvas.height - 50 * dpr;
					canvas.style.width = this.options.width + "px";
					canvas.style.height = this.options.height + "px";
					canvas.style.border = "0";

					// 折线数据
					var series = this.options.series;
					var canvas = this.options.canvas;
					var getMaxMinValue = getMaxMark.apply(this, [series]);
					if (getMaxMinValue.min < 0) {
						this.options.isLessZero = true;
					}
					this.options.data = {};
					this.options.data.max = getMaxMinValue.max;
					this.options.data.min = getMaxMinValue.min;
					this.options.data.step = getMaxMinValue.step;

					// this.options.padding_left = this.options.context.measureText("+9000万").width;
					this.options.padding_left = getMaxMinValue.maxPaddingLeftWidth * dpr + 30;
					this.options.drawWidth = canvas.width - 10;

					// 画布上部内间距
					ctx.translate("0", this.options.canvas_offset_top);
					// 画笔参数设置
					ctx.font = (this.options.font_size * this.options.dpr) + "px Arial";
					ctx.lineWidth = 1 * this.options.dpr;
					this.options.groupSpacing = this.options.groupSpacing == undefined ? "0.2" : this.options.groupSpacing;
					this.options.groupUnitSpacing = this.options.groupUnitSpacing == undefined ? "0.2" : this.options.groupUnitSpacing;;

					// 加水印
					watermark.apply(this, [this.options.context, this.options.padding_left + 95 * dpr, 10 * dpr, 82 * dpr, 20 * dpr]);
				};

				// 绘图
				ChartBarQuarter.prototype.draw = function (callback) {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					// 显示loading效果
					// inter.showLoading();
					// var _this = this;


					this.options.group = getYearRect.call(this, this.options.drawWidth - this.options.padding_left, this.options.series.length);
					this.options.groupUnit = getQuarterRect.call(this, this.options.group.bar_w, this.options.series[0].data.length);

					// 绘制坐标轴
					new DrawXY(this.options);
					// 绘制季度柱状图
					new DrawBar(this.options);
					//添加交互
					this.addInteractive();

				};
				// 单位绘制区域
				function getYearRect(width, num) {
					var rect_w = width / num;
					var bar_w = rect_w * (1 - this.options.groupSpacing);
					return {
						rect_w: rect_w,
						bar_w: bar_w
					};
				}

				// 单位绘制区域
				function getQuarterRect(width, num) {
					var rect_w = width / num;
					var bar_w = rect_w * (1 - this.options.groupUnitSpacing);
					return {
						rect_w: rect_w,
						bar_w: bar_w
					};
				}


				// 图表y轴坐标计算
				function get_y(y) {
					var sepe_max_min = this.options.data.max - this.options.data.min;
					if (y >= 0 && this.options.data.min < 0) {
						var up_height = this.options.c_1_height * (this.options.data.max) / sepe_max_min;
						return up_height - this.options.c_1_height * y / sepe_max_min;
					} else if (y >= 0 && this.options.data.min >= 0) {
						var up_height = this.options.c_1_height;
						return up_height - this.options.c_1_height * (y - this.options.data.min) / sepe_max_min;
					} else if (y < 0 && this.options.data.max >= 0) {
						var sepe_y = this.options.c_1_height * (this.options.data.max) / sepe_max_min;
						// var down_height = sepe_y + this.options.c_1_height * Math.abs(this.options.data.min)/sepe_max_min;
						return this.options.c_1_height * Math.abs(y) / sepe_max_min + sepe_y;
					} else if (y < 0 && this.options.data.max < 0) {
						return this.options.c_1_height * Math.abs(y) / sepe_max_min + 0;
					}
				}
				// 图表x轴坐标计算
				function get_x(year_num, quarter_num) {
					var group = this.options.group;
					var groupUnit = this.options.groupUnit;
					var padding_left = this.options.padding_left;
					var year_sepe = this.options.group.rect_w - this.options.group.bar_w;
					var quarter_sepe = this.options.groupUnit.rect_w - this.options.groupUnit.bar_w;
					return group.rect_w * year_num + padding_left + groupUnit.rect_w * quarter_num + year_sepe / 2 + quarter_sepe / 2;
				}

				//通过clientX获得交互需要的tips的坐标和虚线中x坐标
				function getCoordinateByClient(clientX) {
					var canvasX = clientX * this.options.dpr;
					//被返回的两个数据
					var result = {};

					//需要用到的参数
					var paddingLeft = this.options.padding_left,
						group = this.options.group,
						groupUnit = this.options.groupUnit,
						canvas = this.options.canvas,
						series = this.options.series;

					// 求得鼠标所指的位置属于哪一年的哪一个季度
					var numYear = Math.floor((canvasX - paddingLeft) / group.rect_w);
					if (numYear < 0) {
						numYear = 0;
					}
					var numQuarter = Math.floor((canvasX - paddingLeft - numYear * group.rect_w - (group.rect_w - group.bar_w) / 2) / groupUnit.rect_w);
					if (numQuarter < 0) {
						numQuarter = 0;
					} else if (numQuarter > 3) {
						numQuarter = 3;
					}
					// 绘制的虚线的x坐标
					result.midddleLine = get_x.call(this, numYear, numQuarter) + groupUnit.bar_w / 2;
					//绘制tips的坐标
					result.tipsX = this.options.padding_left + group.rect_w * numYear;
					result.tipsY = get_y.call(this, series[numYear].data[0]) + this.options.canvas_offset_top;

					result.midddleLineHeight = result.tipsY;

					result.content = {};
					result.content.series = this.options.series[numYear].data;
					result.content.colors = this.options.xaxis[numYear];
					result.content.names = this.options.xaxis[numYear].names;
					result.content.suffixs = this.options.xaxis[numYear].suffixs;

					result.arr = numYear + ":" + numQuarter;

					return result;
				}

				ChartBarQuarter.prototype.addInteractive = function () {
					var canvas = this.options.canvas;
					var group = this.options.group;
					var _that = this;
					var tips = document.createElement("div");
					var middleLine = document.createElement("div");
					var coordinateCanvas, coordinateWindow = {};
					//用于状态记录
					var status = "x:x";
					//用于canvas与windows相互转化
					var dpr = this.options.dpr;
					var padding_left = this.options.padding_left;
					var offSetTop = this.options.canvas_offset_top;
					var yHeight = this.options.c_1_height;

					// tips.setAttribute("class", "web-tips");
					tips.className = "web-tips";
					middleLine.className = "group-bar-mark";
					middleLine.style.width = group.rect_w / dpr + "px";
					middleLine.style.backgroundColor = "#333";
					// middleLine.setAttribute("class", "web-middleLine");
					_that.container.appendChild(tips);
					_that.container.appendChild(middleLine);

					common.addEvent.call(_that, canvas, 'mousemove', function (e) {

						var winX, winY;
						//浏览器检测，获取到相对元素的x和y
						if (e.layerX) {
							winX = e.layerX;
							winY = e.layerY;
						} else if (e.x) {
							winX = e.x;
							winY = e.y;
						}

						//当超出坐标系框就不显示交互
						if (winX >= padding_left / dpr && winX * dpr < _that.options.drawWidth && (winY >= offSetTop / dpr && winY < (offSetTop + yHeight) / dpr)) {
							tips.style.display = "inline-block";
							middleLine.style.display = "inline-block";
						} else {
							tips.style.display = "none";
							middleLine.style.display = "none";
						}
						//canvas中是坐标与屏幕坐标之间的相互转换
						if (winX * dpr < _that.options.drawWidth) {
							coordinateCanvas = getCoordinateByClient.call(_that, winX);
						}
						if (status !== coordinateCanvas.arr) {
							coordinateWindow.midddleLine = common.canvasToWindow.call(_that, canvas, coordinateCanvas.midddleLine, 0);
							coordinateWindow.tips = common.canvasToWindow.call(_that, canvas, coordinateCanvas.tipsX, coordinateCanvas.tipsY);

							//绘制tips
							var series = coordinateCanvas.content.series;
							var colors = coordinateCanvas.content.colors;
							var names = coordinateCanvas.content.names;
							var suffixs = coordinateCanvas.content.suffixs;
							tips.innerHTML = "";
							var title = document.createElement("div");
							title.innerHTML = colors.value;
							tips.appendChild(title);
							for (var i = 0, item; item = series[i]; i++) {

								var color_span = document.createElement("span");
								color_span.className = "bar-color-span";
								color_span.style.backgroundColor = colors.colors[i];

								var value_span = document.createElement("span");
								value_span.className = "bar-value-span";
								value_span.innerHTML = (names === undefined ? "" : names[i]) + item + (suffixs === undefined ? "" : suffixs[i]);

								var span_container = document.createElement("div");
								span_container.className = "";
								span_container.appendChild(color_span);
								span_container.appendChild(value_span);

								tips.appendChild(span_container);
							}

							// tips.innerHTML = coordinateCanvas.content;
							var w_x = e.offsetX || (e.clientX - _that.container.getBoundingClientRect().left);
							var w_y = e.offsetY || (e.clientY - _that.container.getBoundingClientRect().top);

							if (w_x > canvas.width / 2 / dpr) {
								tips.style.left = (coordinateCanvas.tipsX / dpr - tips.clientWidth) + "px";
							} else {
								tips.style.left = (coordinateCanvas.tipsX + _that.options.group.rect_w) / dpr + "px";
							}
							// alert(coordinateWindow.tips.y);
							tips.style.top = (coordinateCanvas.tipsY) / dpr - tips.clientHeight / 2 + "px";
							// var text = createTextNode(coordinateCanvas.content);
							// tips.appendChild(text);



							// 鼠标在画布中的坐标
							var c_pos = common.windowToCanvas.apply(_that, [canvas, w_x, w_y]);
							var c_x = (c_pos.x).toFixed(0);

							if (c_x - _that.options.padding_left > 0) {
								var index = Math.floor((c_x - _that.options.padding_left) / group.rect_w);
								//绘制中线
								middleLine.style.height = yHeight / _that.options.dpr + "px";
								middleLine.style.left = (index * group.rect_w + _that.options.padding_left) / dpr + "px";
								middleLine.style.top = offSetTop / dpr + "px";
							}

							status = coordinateCanvas.arr;
						}

					});

				};

				// 重绘
				ChartBarQuarter.prototype.reDraw = function () {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					this.draw();
				}
				// 删除canvas画布
				ChartBarQuarter.prototype.clear = function (cb) {
					if (this.container) {
						this.container.innerHTML = "";
					} else {
						document.getElementById(this.options.container).innerHTML = "";
					}
					if (cb) {
						cb();
					};
				}

				// 获取数组中的最大值
				function getMaxMark(series) {
					var seriesLength = series.length;
					var arr = [];
					for (var i = 0; i < seriesLength; i++) {
						arr = arr.concat(series[i].data);
					}

					var tempObj = divide(this.options.sepeNum, arr);

					var ctx = this.options.context;
					var backWidth = ctx.measureText(common.format_unit(tempObj.stepHeight)).width - ctx.measureText(common.format_unit(parseInt(tempObj.stepHeight))).width;
					var frontMaxWidth = ctx.measureText(common.format_unit(parseInt(tempObj.max))).width;
					var frontMinWidth = ctx.measureText(common.format_unit(parseInt(tempObj.min))).width;
					var frontWidth = frontMaxWidth > frontMinWidth ? frontMaxWidth : frontMinWidth;
					var maxPaddingLeftWidth = frontWidth + backWidth;

					return {
						max: tempObj.max,
						min: tempObj.min,
						step: tempObj.stepHeight,
						maxPaddingLeftWidth: maxPaddingLeftWidth
					};
				}

				return ChartBarQuarter;
			})();

			module.exports = ChartBarQuarter;


			/***/
		}),
/* 43 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制直角坐标系
			 */
			var extend = __webpack_require__(21);
			/*主题*/
			var theme = __webpack_require__(7);
			var common = __webpack_require__(13);
			/*绘制虚线*/
			var DrawDashLine = __webpack_require__(8);
			// 格式化坐标
			var XYF = __webpack_require__(9);
			var DrawXY = (function () {
				//构造方法
				function DrawXY(options) {
					/*设置默认参数*/
					this.defaultoptions = theme.draw_xy;
					this.options = extend(this.defaultoptions, options);

					/*绘图*/
					this.draw();
				};
				/*绘图*/
				DrawXY.prototype.draw = function () {
					// var xAxisData = this.options.xaxis;
					// var yAxisData = this.options.series;
					// var type = this.options.type;
					// var dpr = this.options.dpr;
					var ctx = this.options.context;
					/*Y轴上的最大值*/
					var y_max = this.options.data.max;
					/*Y轴上的最小值*/
					var y_min = this.options.data.min;

					/*Y轴上分隔线数量*/
					var sepe_num = this.options.sepeNum;
					/*开盘收盘时间数组*/
					var oc_time_arr = this.options.xaxis;

					/*K线图的高度*/
					var k_height = this.options.c_1_height;
					/*Y轴标识线列表*/
					var line_list_array = getLineList.apply(this, [y_max, y_min, sepe_num, k_height]);
					// if(this.options.type == 'quarter-line') {
					// addGradient.call(this);
					// }

					drawXYLine.call(this, ctx, y_max, y_min, line_list_array);

					// 绘制横坐标刻度
					drawXMark.apply(this, [ctx, k_height, oc_time_arr]);
				};
				// 绘制Y轴最左边刻度
				function drawXYLine(ctx, y_max, y_min, line_list_array) {
					ctx.save();
					// var sepe_num = line_list_array.length;
					var _this = this;
					var list_length = line_list_array.length;
					ctx.fillStyle = '#979797';

					ctx.textAlign = 'right';
					for (var i = 0, item; item = line_list_array[i]; i++) {
						ctx.beginPath();
						// ctx.moveTo(this.options.padding_left, Math.round(item.y));
						// ctx.lineTo(ctx.canvas.width, Math.round(item.y));

						// var absPoint = Math.max(this.options.data.max,Math.abs(this.options.data.min));
						// absPoint = absPoint.toFixed(3);
						// 绘制纵坐标刻度
						var dashFlag = true;
						if (this.options.data.min < 0) {
							if (this.options.data.min + this.options.data.step * i < 0) {
								ctx.fillText(this.options.data.min + dealFloat(this.options.data.step * i), this.options.padding_left - 10, item.y + 5);
							} else if (this.options.data.min + this.options.data.step * i == 0) {
								ctx.fillText(0, this.options.padding_left - 10, item.y + 5);
								dashFlag = false;
								ctx.strokeStyle = '#c9c9c9';
								ctx.moveTo(XYF(this.options.padding_left), XYF(item.y));
								ctx.lineTo(XYF(this.options.drawWidth), XYF(item.y));
								ctx.stroke();
							} else {
								ctx.fillText(this.options.data.min + dealFloat(this.options.data.step * i), this.options.padding_left - 10, item.y + 5);
							}
						}
						else {
							ctx.fillText(this.options.data.min + dealFloat(this.options.data.step * i), this.options.padding_left - 10, item.y + 5);
						}

						if (i != 0 && i != list_length - 1 && dashFlag) {
							ctx.save();
							ctx.beginPath();

							ctx.strokeStyle = '#e6e6e6';
							DrawDashLine(ctx, this.options.padding_left, Math.round(item.y), this.options.drawWidth, Math.round(item.y), 3);
							ctx.restore();
						}

					}


					function dealFloat(data) {
						if (data) {
							data = parseFloat((data).toFixed(_this.options.maxDot));
						}
						return data;
					}
					ctx.restore();
				}

				/*绘制横坐标刻度值*/
				function drawXMark(ctx, k_height, oc_time_arr) {
					// var dpr = this.options.dpr;
					ctx.save();
					var padding_left = this.options.padding_left;
					var dpr = this.options.dpr;
					ctx.beginPath();
					ctx.strokeStyle = "#c9c9c9";
					ctx.rect(XYF(padding_left), 0.5, Math.round(this.options.drawWidth - padding_left), Math.round(this.options.c_1_height));
					ctx.stroke();

					ctx.textAlign = 'left';
					ctx.fillStyle = '#979797';
					/*画布宽度*/
					var k_width = this.options.drawWidth;
					var tempDate;
					var arr_length = oc_time_arr.length;
					for (var i = 0; i < arr_length; i++) {
						ctx.beginPath();
						tempDate = oc_time_arr[i].value;
						var x = i * (k_width - padding_left) / (arr_length) + padding_left;
						var isShow = oc_time_arr[i].show == undefined ? true : false;

						if (oc_time_arr[i].show == undefined || oc_time_arr[i].show) {

							ctx.fillText(tempDate, x + (((k_width - padding_left) / (arr_length) - ctx.measureText(tempDate).width) / 2), this.options.c_1_height + 20 * dpr);
							// if(i == (arr_length-1)){
							//     ctx.fillText(tempDate, ((this.options.drawWidth - ctx.measureText(tempDate).width - 2)), this.options.c_1_height+20*dpr); 
							// }else{
							//     ctx.fillText(tempDate, x + (((k_width - padding_left) / (arr_length) - ctx.measureText(tempDate).width)/2), this.options.c_1_height+20*dpr); 
							// }
						}

						if (i == (arr_length - 1)) {
							ctx.moveTo(XYF(x), XYF(this.options.c_1_height));
							ctx.lineTo(XYF(x), XYF(this.options.c_1_height + 5 * dpr));

							var x = (i + 1) * (k_width - padding_left) / (arr_length) + padding_left;
							ctx.moveTo(XYF(x), XYF(this.options.c_1_height));
							ctx.lineTo(XYF(x), XYF(this.options.c_1_height + 5 * dpr));
						} else {
							ctx.moveTo(XYF(x), XYF(this.options.c_1_height));
							ctx.lineTo(XYF(x), XYF(this.options.c_1_height + 5 * dpr));
						}

						ctx.stroke();
					}
					ctx.stroke();
					ctx.restore();
				}

				function addGradient() {
					ctx.save();
					var sepGradientLen = (this.options.canvas.width - this.options.padding_left) / this.options.series.length;
					var ctx = this.options.context;
					for (var i = 0; i < this.options.series.length; i++) {
						if (i % 2 == 0) {
							ctx.beginPath();
							var grad = ctx.createLinearGradient(0, 0, 0, this.options.c_1_height);
							grad.addColorStop(0, 'rgba(255,255,255,0)');
							grad.addColorStop(1, 'rgba(245,245,245,1)');
							ctx.fillStyle = grad;
							ctx.rect(this.options.padding_left + i * sepGradientLen, 0, sepGradientLen, this.options.c_1_height);
							ctx.fill();
							ctx.closePath();
						}

					}
					ctx.restore();
				}

				/*Y轴标识线列表*/
				function getLineList(y_max, y_min, sepe_num, k_height) {
					// var ratio = (y_max - y_min) / (sepe_num);
					var ratio = this.options.data.step;
					var result = [];
					for (var i = 0; i <= sepe_num; i++) {
						result.push({
							num: (y_min + i * ratio),
							x: 0,
							y: k_height - (i / (sepe_num)) * k_height
						});
					}
					return result;
				}

				return DrawXY;
			})();

			module.exports = DrawXY;

			/***/
		}),
/* 44 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制K线
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     type:    "TL"(分时图),"DK"(日K线图),"WK"(周K线图),"MK"(月K线图)
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 * }
			 *
			 */

			/*继承*/
			var extend = __webpack_require__(21);
			/*主题*/
			var theme = __webpack_require__(7);
			var DrawBar = (function () {
				function DrawBar(options) {
					// 设置默认参数
					this.defaultoptions = theme.drawLine;
					this.options = extend(this.defaultoptions, options);

					// 绘图
					this.draw();
				};

				// 绘图
				DrawBar.prototype.draw = function () {

					var ctx = this.options.context;
					ctx.lineWidth = 1 * this.options.dpr + 1;
					// 折线数据
					var series = this.options.series;
					// 横坐标数据
					var xaxis = this.options.xaxis;

					for (var i = 0, se; se = series[i]; i++) {

						var bar_arr = se.data;
						var arr_length = bar_arr.length;
						for (var j = 0; j < arr_length; j++) {
							var bar = bar_arr[j];
							ctx.beginPath();
							// 填充颜色
							ctx.fillStyle = xaxis[i].colors[j] == undefined ? "#333" : xaxis[i].colors[j];
							// 画笔颜色
							ctx.strokeStyle = xaxis[i].colors[j] == undefined ? "#333" : xaxis[i].colors[j];
							var x = get_x.apply(this, [i, j]);
							var y = get_y.call(this, bar);

							if (y >= 0 && this.options.data.min < 0) {
								var sepe_y = this.options.c_1_height * (this.options.data.max) / (this.options.data.max - this.options.data.min);
								ctx.rect(x, y, this.options.groupUnit.bar_w, sepe_y - y);
							} else if (y >= 0 && this.options.data.min >= 0) {
								var sepe_y = this.options.c_1_height;
								ctx.rect(x, y, this.options.groupUnit.bar_w, sepe_y - y);
							} else if (y < 0 && this.options.data.max >= 0) {
								var sepe_y = this.options.c_1_height * (this.options.data.max) / (this.options.data.max - this.options.data.min);
								ctx.rect(x, sepe_y, this.options.groupUnit.bar_w, y);
							} else if (y < 0 && this.options.data.max < 0) {
								var sepe_y = 0;
								ctx.rect(x, sepe_y, this.options.groupUnit.bar_w, y);
							}


							// if(y >= 0 && this.options.data.min < 0){
							//     var sepe_y = this.options.c_1_height * (this.options.data.max)/(this.options.data.max - this.options.data.min);
							//     ctx.rect(x,sepe_y,this.options.groupUnit.bar_w,sepe_y - y);
							// }else if(y >= 0 && this.options.data.min >= 0){

							// }else{
							//     ctx.rect(x,this.options.c_1_height/2,this.options.groupUnit.bar_w,y);
							// }
							ctx.fill();
						}

					}

				};

				// 图表y轴坐标计算
				function get_y(y) {
					var sepe_max_min = this.options.data.max - this.options.data.min;
					if (y >= 0 && this.options.data.min < 0) {
						var up_height = this.options.c_1_height * (this.options.data.max) / sepe_max_min;
						return up_height - this.options.c_1_height * y / sepe_max_min;
					} else if (y >= 0 && this.options.data.min >= 0) {
						var up_height = this.options.c_1_height;
						return up_height - this.options.c_1_height * (y - this.options.data.min) / sepe_max_min;
					} else if (y < 0 && this.options.data.max >= 0) {
						var sepe_y = this.options.c_1_height * (this.options.data.max) / sepe_max_min;
						// var down_height = sepe_y + this.options.c_1_height * Math.abs(this.options.data.min)/sepe_max_min;
						return this.options.c_1_height * Math.abs(y) / sepe_max_min + sepe_y;
					} else if (y < 0 && this.options.data.max < 0) {
						return this.options.c_1_height * Math.abs(y) / sepe_max_min + 0;
					}
				}
				// 图表x轴坐标计算
				function get_x(year_num, quarter_num) {
					var group = this.options.group;
					var groupUnit = this.options.groupUnit;
					var padding_left = this.options.padding_left;
					var year_sepe = this.options.group.rect_w - this.options.group.bar_w;
					var quarter_sepe = this.options.groupUnit.rect_w - this.options.groupUnit.bar_w;
					return group.rect_w * year_num + padding_left + groupUnit.rect_w * quarter_num + year_sepe / 2 + quarter_sepe / 2;
				}

				return DrawBar;
			})();

			module.exports = DrawBar;

			/***/
		}),
/* 45 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制折线图
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 *     
			 * }
			 *
			 */

			// 绘制坐标轴
			var DrawXY = __webpack_require__(46);
			// 主题
			var theme = __webpack_require__(7);
			// 绘制利率折线图
			var DrawLine = __webpack_require__(47);
			// 拓展，合并，复制
			var extend = __webpack_require__(21);
			// 水印
			var watermark = __webpack_require__(22);
			/*工具*/
			var common = __webpack_require__(13);


			var ChartLine = (function () {

				// 构造函数
				function ChartLine(options) {
					this.defaultoptions = theme.chartLine;
					this.options = extend(this.defaultoptions, theme.defaulttheme, options);

					// 图表容器
					this.container = document.getElementById(options.container);

					this.container.className = this.container.className.replace(/emcharts-container/g, "").trim();
					this.container.className = this.container.className + " emcharts-container";
					// 图表加载完成事件
					this.onChartLoaded = options.onChartLoaded == undefined ? function (op) {

					} : options.onChartLoaded;

				}

				// 初始化
				ChartLine.prototype.init = function () {

					this.options.type = "line";
					var canvas = document.createElement("canvas");
					// 去除画布上粘贴效果
					// this.container.style = "-moz-user-select:none;-webkit-user-select:none;";
					// this.container.setAttribute("unselectable","on");
					this.container.style.position = "relative";
					// 容器中添加画布
					this.container.appendChild(canvas);
					// 兼容IE6-IE9
					try {
						var ctx = canvas.getContext('2d');
					} catch (error) {
						canvas = window.G_vmlCanvasManager.initElement(canvas);
						var ctx = canvas.getContext('2d');
					}
					this.options.canvas = canvas;
					this.options.context = ctx;
					// 设备像素比
					var dpr = this.options.dpr;

					// 画布的宽和高
					canvas.width = this.options.width * dpr;
					canvas.height = this.options.height * dpr;

					// 画布向下偏移的距离
					this.options.canvas_offset_top = canvas.height / (9 * 2);
					// 画布内容向坐偏移的距离
					this.options.padding_left = canvas.width / 6;

					// 行情图表（分时图或K线图）和成交量图表的间距
					this.options.k_v_away = canvas.height / (9 * 2);
					// 缩放默认值
					this.options.scale_count = 0;
					// 画布上第一个图表的高度

					this.options.c_1_height = canvas.height * (8 / 9) - 10;

					canvas.style.width = this.options.width + "px";
					canvas.style.height = this.options.height + "px";
					canvas.style.border = "0";

					// 画布上部内间距
					ctx.translate("0", this.options.canvas_offset_top);
					// 画笔参数设置
					ctx.font = (this.options.font_size * this.options.dpr) + "px Arial";
					ctx.lineWidth = 1 * this.options.dpr;


					// 加水印
					watermark.apply(this, [this.options.context, 90, 20, 82, 20]);

				};

				// 绘图
				ChartLine.prototype.draw = function (callback) {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();

					var ctx = this.options.context;

					// 折线数据
					var series = this.options.series;
					var maxAndMin = getMaxAndMin(series);
					this.options.data = {};
					this.options.data.max = maxAndMin.max;
					this.options.data.min = maxAndMin.min;

					// 画布内容偏移的距离
					this.options.padding_left = ctx.measureText("+9000万").width + 10;
					// this.options.padding_left = ctx.measureText(common.format_unit(this.options.data.max)).width + 20;
					this.options.drawWidth = ctx.canvas.width - this.options.padding_left;

					// 绘制坐标轴
					new DrawXY(this.options);
					// 绘制利率折线图
					new DrawLine(this.options);

					this.addInteractive();


				};
				// 重绘
				ChartLine.prototype.reDraw = function () {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					this.draw();
				}
				// 删除canvas画布
				ChartLine.prototype.clear = function (cb) {
					if (this.container) {
						this.container.innerHTML = "";
					} else {
						document.getElementById(this.options.container).innerHTML = "";
					}
					if (cb) {
						cb();
					};
				}

				//获得tips的显示位置和tips的相关内容(传入的值是乘过dpr值的)
				function getTips(winX, winY) {
					//需要被返回的值
					var result = {};
					result.showLine = false;
					result.showTips = false;

					var canvas = this.options.canvas;
					var paddingLeft = this.options.padding_left;
					var offSetTop = this.options.canvas_offset_top;
					var radius = this.options.pointRadius = this.options.pointRadius == undefined ? 5 : this.options.pointRadius;
					var dpr = this.options.dpr;

					var series = this.options.series;
					var xaxis = this.options.xaxis;
					var unitWidth = (canvas.width - paddingLeft) / (xaxis.length - 1);

					//标识在从左到右第几个圆点上
					var num = (winX - paddingLeft + unitWidth / 2) / (unitWidth);
					num = num < 0 ? 0 : Math.floor(num);

					//数据点点的圆心
					var pointX = ((canvas.width - paddingLeft) / (xaxis.length - 1)) * num + paddingLeft;

					for (var i = 0; i < series.length; i++) {
						//遍历获得
						var pointY = common.get_y.call(this, series[i].data[num]);
						//判断鼠标指定的点是不是在数据点周围
						if ((Math.abs(pointY - winY + offSetTop) < 2 * radius) && (Math.abs(pointX - winX + radius) < 2 * radius) && num != (xaxis.length - 1)) {
							result.showTips = true;
							result.pointY = pointY + offSetTop / dpr;
							result.pointX = pointX;
							result.content = series[i].name + " : " + series[i].data[num];
						}
					}
					//判断虚线是否显示
					if (Math.abs(pointX - winX) < 2 * radius) {
						//对竖直的y轴做处理（可能是个bug）
						if (num !== 0 && num !== xaxis.length - 1) {
							result.showLine = true;
							result.lineX = pointX;
						} else {
							result.showLine = false;
						}
					}

					return result;
				}

				//添加交互
				ChartLine.prototype.addInteractive = function () {
					var canvas = this.options.canvas;
					var _that = this;
					var tips = document.createElement("div");
					var middleLine = document.createElement("div");
					//用于canvas与windows相互转化
					var dpr = this.options.dpr ? this.options.dpr : 1;
					var padding_left = this.options.padding_left;
					var offSetTop = this.options.canvas_offset_top / dpr;
					var yHeight = this.options.c_1_height / dpr;
					var radius = this.options.pointRadius;

					tips.className = "web-tips";
					middleLine.className = "web-middleLine";
					_that.container.appendChild(tips);
					_that.container.appendChild(middleLine);

					common.addEvent.call(_that, canvas, "mousemove", function (e) {
						var winX, winY;
						//浏览器检测，获取到相对元素的x和y
						if (e.layerX) {
							winX = e.layerX;
							winY = e.layerY;
						} else if (e.x) {
							winX = e.x;
							winY = e.y;
						}

						//在坐标系外不显示
						if (winX * dpr >= (padding_left - radius) && (winY >= offSetTop && winY <= (offSetTop + yHeight))) { } else {
							tips.style.display = "none";
							middleLine.style.display = "none";
						}

						//通过鼠标移动获得交互的点
						var result = getTips.call(_that, winX * _that.options.dpr, winY * _that.options.dpr);

						if (result.showLine && (winY >= offSetTop && winY <= (offSetTop + yHeight))) {
							middleLine.style.display = "inline-block";
							//绘制中线
							middleLine.style.height = yHeight + "px";
							middleLine.style.left = result.lineX / dpr + "px";
							middleLine.style.top = offSetTop + "px";
						} else {
							middleLine.style.display = "none";
						}
						//如果在数据点上，显示tips
						if (result.showTips) {
							tips.style.display = "inline-block";
							tips.innerHTML = result.content;
							if (winX * dpr - padding_left < canvas.width / 2) {
								tips.style.left = (result.pointX / dpr + radius) + "px";
							} else {
								tips.style.left = (result.pointX / dpr - radius - tips.clientWidth) + "px";
							}
							tips.style.top = (result.pointY / dpr + radius) + "px";
						} else {
							tips.style.display = "none";
						}
					});
				}

				function getMaxAndMin(series) {

					var max = 0,
						min = 0,
						seriesLength = series.length,
						tempObj = {};
					for (var i = 0; i < seriesLength; i++) {
						for (var j = 0; j < series[i].data.length; j++) {

							if (i == 0 && j == 0) {
								max = series[i].data[j];
								min = series[i].data[j];
							}
							max = Math.max(max, series[i].data[j]);
							min = Math.min(min, series[i].data[j]);
						}
					}

					tempObj.max = max + Math.abs(max - min) * 0.05;
					tempObj.min = min;

					return tempObj;
				}
				return ChartLine;
			})();

			module.exports = ChartLine;


			/***/
		}),
/* 46 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制直角坐标系
			 */
			var extend = __webpack_require__(6);
			/*主题*/
			var theme = __webpack_require__(7);
			var common = __webpack_require__(13);
			// 格式化坐标
			var XYF = __webpack_require__(9);
			var DrawXY = (function () {
				//构造方法
				function DrawXY(options) {
					/*设置默认参数*/
					this.defaultoptions = theme.draw_xy;
					this.options = {};
					extend(false, this.options, this.defaultoptions, options);
					/*绘图*/
					this.draw();
				};
				/*绘图*/
				DrawXY.prototype.draw = function () {
					// var xAxisData = this.options.xaxis;
					// var yAxisData = this.options.series;
					// var type = this.options.type;
					// var dpr = this.options.dpr;
					var ctx = this.options.context;

					/*Y轴上的最大值*/
					var y_max = this.options.data.max;
					/*Y轴上的最小值*/
					var y_min = this.options.data.min;

					/*Y轴上分隔线数量*/
					var sepe_num = this.options.sepenum || 10;
					/*开盘收盘时间数组*/
					var oc_time_arr = this.options.xaxis;

					/*K线图的高度*/
					var k_height = this.options.c_1_height;
					/*Y轴标识线列表*/
					var line_list_array = getLineList(y_max, y_min, sepe_num, k_height);

					drawXYLine.call(this, ctx, y_max, y_min, line_list_array);

					// 绘制横坐标刻度
					drawXMark.apply(this, [ctx, k_height, oc_time_arr]);
				};
				// 绘制分时图坐标轴最左边刻度
				function drawXYLine(ctx, y_max, y_min, line_list_array) {
					// var sepe_num = line_list_array.length;
					ctx.fillStyle = '#b1b1b1';
					ctx.strokeStyle = '#ccc';
					ctx.textAlign = 'right';

					for (var i = 0, item; item = line_list_array[i]; i++) {
						ctx.beginPath();
						if (i == 0) {
							ctx.moveTo(XYF(this.options.padding_left), XYF(item.y));
							ctx.lineTo(XYF(ctx.canvas.width), XYF(item.y));
							ctx.stroke();
						}
						// 绘制左侧纵坐标刻度
						ctx.fillText(common.format_unit(item.num / 1, 2), XYF(this.options.padding_left - 10), XYF(item.y));

						if (this.options.bothmark) {
							// 绘制右侧纵坐标刻度
							ctx.fillText(common.format_unit(item.num / 1, 2), XYF(ctx.canvas.width - 10), XYF(item.y));
						}


					}

				}

				/*绘制横坐标刻度值*/
				function drawXMark(ctx, k_height, oc_time_arr) {
					// var dpr = this.options.dpr;
					var padding_left = this.options.padding_left;
					ctx.beginPath();
					ctx.textAlign = 'center';
					ctx.fillStyle = '#b1b1b1';
					/*画布宽度*/
					var k_width = ctx.canvas.width;
					// var y_date = this.options.c_1_height;
					var tempDate;
					// var timeSpacing = (this.options.width * dpr - padding_left) / oc_time_arr.length + padding_left;
					var arr_length = oc_time_arr.length;

					for (var i = 0; i < arr_length; i++) {
						tempDate = oc_time_arr[i];
						if (tempDate.show == undefined ? true : tempDate.show) {
							ctx.fillText(tempDate.value, XYF(i * (k_width - padding_left) / (arr_length - 1) + padding_left), XYF(this.options.c_1_height + 20));
							// if(i < arr_length - 1){
							//     ctx.fillText(tempDate.value, i * (k_width - padding_left) / (arr_length-1) + padding_left, this.options.c_1_height+20);
							//     // ctx.fillText(tempDate.value.split('-')[0] + "-" + tempDate.value.split('-')[1]+'-'+tempDate.value.split('-')[2], i * (k_width - padding_left) / (arr_length-1) + padding_left, this.options.c_1_height+20);
							//     // ctx.fillText(tempDate.value.split('-')[1]+'-'+tempDate.value.split('-')[2], i * (k_width - padding_left) / (arr_length-1) + padding_left, this.options.c_1_height+40);
							// }
						}

						if (tempDate.showline == undefined ? true : tempDate.showline && (i == 0 || i == arr_length - 1)) {
							ctx.strokeStyle = '#ccc';
							if (i == arr_length - 1) {
								var x = i * (k_width - padding_left) / (arr_length - 1) + padding_left - 1;
							} else {
								var x = i * (k_width - padding_left) / (arr_length - 1) + padding_left;
							}
							ctx.moveTo(XYF(x), 0.5);
							ctx.lineTo(XYF(x), XYF(this.options.c_1_height));
						}

					}

					// 绘制坐标刻度
					ctx.stroke();
				}

				/*Y轴标识线列表*/
				function getLineList(y_max, y_min, sepe_num, k_height) {
					var ratio = (y_max - y_min) / (sepe_num - 1);
					var result = [];
					for (var i = 0; i < sepe_num; i++) {
						result.push({
							num: (y_min + i * ratio),
							x: 0,
							y: k_height - (i / (sepe_num - 1)) * k_height
						});
					}
					return result;
				}

				return DrawXY;
			})();

			module.exports = DrawXY;

			/***/
		}),
/* 47 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制折线
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     type:    "TL"(分时图),"DK"(日K线图),"WK"(周K线图),"MK"(月K线图)
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 *     canvas_offset_top:   画布中坐标轴向下偏移量
			 *     padding_left:    画布左侧边距
			 *     k_v_away:    行情图表（分时图或K线图）和成交量图表的间距
			 *     scale_count:     缩放默认值
			 *     c_1_height:  行情图表（分时图或K线图）的高度
			 *     rect_unit:   分时图或K线图单位绘制区域
			 * }
			 *
			 */

			/*继承*/
			var extend = __webpack_require__(6);
			/*主题*/
			var theme = __webpack_require__(7);
			/*工具*/
			var common = __webpack_require__(13);
			var DrawLine = (function () {
				function DrawLine(options) {
					// 设置默认参数
					this.defaultoptions = theme.drawLine;
					this.options = {};
					extend(false, this.options, this.defaultoptions, options);
					// 绘图
					this.draw();
				};

				// 绘图
				DrawLine.prototype.draw = function () {

					var ctx = this.options.context;
					ctx.lineWidth = 1 * this.options.dpr + 1;
					// 折线数据
					var series = this.options.series;
					// 横坐标数据
					// var xaxis = this.options.xaxis;
					for (var i = 0, line; line = series[i]; i++) {
						// 填充颜色
						ctx.fillStyle = line.color == undefined ? "#333" : line.color;
						// 画笔颜色
						ctx.strokeStyle = line.color == undefined ? "#333" : line.color;
						drawLine.apply(this, [ctx, line]);

						if (line.showpoint) {
							drawPoint.apply(this, [ctx, line]);
						}

					}
					if (this.options.showflag) {
						drawLineMark.apply(this, [ctx, series]);
					}
				};

				// 绘制折线
				function drawLine(ctx, line) {
					// 保存画笔状态
					ctx.save();

					var arr = line.data;
					var arr_length = arr.length;

					ctx.beginPath();

					for (var i = 0, item; item = arr[i]; i++) {
						var x = ((ctx.canvas.width - this.options.padding_left) / (arr_length - 1)) * (i) + this.options.padding_left;
						var y = common.get_y.call(this, item);
						if (i == 0) {
							ctx.moveTo(this.options.padding_left, y);
						} else if (i == arr_length - 1) {
							ctx.lineTo(x, y);
						} else {
							ctx.lineTo(x, y);
						}
					}

					// ctx.fill();
					ctx.stroke();
					// 恢复画笔状态
					ctx.restore();
				}

				// 绘制折线节点（连接点）
				function drawPoint(ctx, line) {
					// 保存画笔状态
					ctx.save();

					var arr = line.data;
					var arr_length = arr.length;

					// 节点（折线连接点半径）
					var pointRadius = this.options.pointRadius;

					for (var i = 0, item; item = arr[i]; i++) {
						ctx.beginPath();
						var x = ((ctx.canvas.width - this.options.padding_left) / (arr_length - 1)) * (i) + this.options.padding_left;
						var y = common.get_y.call(this, item);
						if (i == 0) {
							ctx.arc(x, y, pointRadius, 0, Math.PI * 2, true);
							ctx.fill();
						} else if (i == arr_length - 1) {

						} else {
							ctx.arc(x, y, pointRadius, 0, Math.PI * 2, true);
							ctx.fill();
						}

					}
					// 恢复画笔状态
					ctx.restore();
				}


				// 绘制折线标识
				function drawLineMark(ctx, series) {
					// 保存画笔状态
					ctx.save();
					var dpr = this.options.dpr;
					var x_middle = ctx.canvas.width / 2;
					var wh = this.options.lineMarkWidth * dpr;
					var x_start = 0;
					var y_start = ctx.canvas.height * (7 / 9 - 1 / 18);

					for (var i = 0, line; line = series[i]; i++) {
						ctx.beginPath();

						// 画笔颜色
						ctx.strokeStyle = '#cadef8';
						var mark_offset = (Math.floor(i / 2)) * (wh + 7 * dpr);
						var text_offset = this.options.font_size * this.options.dpr + (wh - this.options.font_size * this.options.dpr) / 2;
						if (i == 0) {
							// 填充颜色
							ctx.fillStyle = line.color;
							ctx.rect(x_start + 20, y_start, wh, wh);
							ctx.fill();
							// 填充颜色
							ctx.fillStyle = '#333';
							ctx.fillText(line.name, x_start + wh + 80, y_start + text_offset);
						} else if ((i + 1) % 2 == 0) {
							// 填充颜色
							ctx.fillStyle = line.color;
							ctx.rect(x_middle, y_start + mark_offset, wh, wh);
							ctx.fill();
							// 填充颜色
							ctx.fillStyle = '#333';
							ctx.fillText(line.name, x_middle + wh + 60, y_start + mark_offset + text_offset);
						} else {
							// 填充颜色
							ctx.fillStyle = line.color;
							ctx.rect(x_start + 20, y_start + mark_offset, wh, wh);
							ctx.fill();
							ctx.fillStyle = '#333';
							ctx.fillText(line.name, x_start + wh + 80, y_start + mark_offset + text_offset);
						}
					}
					// 恢复画笔状态
					ctx.restore();
				}

				return DrawLine;
			})();

			module.exports = DrawLine;

			/***/
		}),
/* 48 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制季度柱状图
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     type:    "TL"(分时图),"DK"(日K线图),"WK"(周K线图),"MK"(月K线图)
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 * }
			 *
			 */

			// 绘制坐标轴
			var DrawXY = __webpack_require__(49);
			// 主题
			var theme = __webpack_require__(7);
			// 绘制季度柱状图
			var DrawBar = __webpack_require__(50);
			// 拓展，合并，复制
			var extend = __webpack_require__(21);
			// 水印
			var watermark = __webpack_require__(22);
			// 添加通用工具
			var common = __webpack_require__(13);
			// 获取步长，最大值，最小值
			var divide = __webpack_require__(38);

			var ChartBarQuarter = (function () {

				// 构造函数
				function ChartBarQuarter(options) {
					this.defaultoptions = theme.defaulttheme;
					this.options = extend(this.defaultoptions, options);

					// 图表容器
					this.container = document.getElementById(options.container);

					this.container.className = this.container.className.replace(/emcharts-container/g, "").trim();
					this.container.className = this.container.className + " emcharts-container";
					// 图表加载完成事件
					this.onChartLoaded = options.onChartLoaded == undefined ? function (op) {

					} : options.onChartLoaded;

				}

				// 初始化
				ChartBarQuarter.prototype.init = function () {

					this.options.type = "bar-quarter";
					var canvas = document.createElement("canvas");

					// 容器中添加画布
					this.container.appendChild(canvas);

					// 去除画布上粘贴效果
					//this.container.style = "-moz-user-select:none;-webkit-lauser-select:none;";
					// this.container.setAttribute("unselectable", "on");
					this.container.style.position = "relative";
					// 画布
					try {
						var ctx = canvas.getContext('2d');
					} catch (error) {
						canvas = window.G_vmlCanvasManager.initElement(canvas);
						var ctx = canvas.getContext('2d');
					}


					this.options.canvas = canvas;
					this.options.context = ctx;
					this.options.sepeNum = this.options.sepeNum || 4;

					// 设备像素比
					var dpr = this.options.dpr;
					// 画布的宽和高
					canvas.width = this.options.width * dpr;
					canvas.height = this.options.height * dpr;

					// 画布向下偏移的距离
					this.options.canvas_offset_top = canvas.height / 5 / 4;
					// 画布内容向坐偏移的距离
					this.options.c_1_height = 4 * canvas.height / 5;
					canvas.style.width = this.options.width + "px";
					canvas.style.height = this.options.height + "px";
					canvas.style.border = "0";

					// 画布上部内间距
					ctx.translate("0", this.options.canvas_offset_top);
					// 画笔参数设置
					ctx.font = (this.options.font_size * this.options.dpr) + "px Arial";
					ctx.lineWidth = 1 * this.options.dpr;
					this.options.yearUnitSpacing = "0.2";
					this.options.quarterUnitSpacing = "0.4";

					// 加水印
					watermark.apply(this, [this.options.context, 90, 20, 82, 20]);
				};

				// 绘图
				ChartBarQuarter.prototype.draw = function (callback) {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					// 显示loading效果
					// inter.showLoading();
					// var _this = this;
					// 折线数据
					var series = this.options.series;
					var canvas = this.options.canvas;
					var getMaxMinValue = getMaxMark.call(this, series);
					if (getMaxMinValue.min < 0) {
						this.options.isLessZero = true;
					}
					this.options.data = {};
					this.options.data.max = getMaxMinValue.max;
					this.options.data.min = getMaxMinValue.min;
					this.options.data.step = getMaxMinValue.step;

					// 画布内容偏移的距离
					var ctx = this.options.context;
					this.options.padding_left = getMaxMinValue.maxPaddingLeftWidth + 15;
					// this.options.padding_left = ctx.measureText(common.format_unit(this.options.data.max)).width + 20;
					this.options.drawWidth = ctx.canvas.width - this.options.padding_left;

					this.options.yearUnit = getYearRect.call(this, canvas.width - this.options.padding_left, this.options.series.length);
					this.options.quarterUnit = getQuarterRect.call(this, this.options.yearUnit.bar_w, 4);

					// 绘制坐标轴
					new DrawXY(this.options);
					// 绘制季度柱状图
					new DrawBar(this.options);
					//添加交互
					this.addInteractive();

				};
				// 单位绘制区域
				function getYearRect(width, num) {
					var rect_w = width / num;
					var bar_w = rect_w * (1 - this.options.yearUnitSpacing);
					return {
						rect_w: rect_w,
						bar_w: bar_w
					};
				}

				// 单位绘制区域
				function getQuarterRect(width, num) {
					var rect_w = width / num;
					var bar_w = rect_w * (1 - this.options.quarterUnitSpacing);
					return {
						rect_w: rect_w,
						bar_w: bar_w
					};
				}


				// 图表y轴坐标计算
				function get_y(y) {
					if (this.options.isLessZero) {
						return this.options.c_1_height - (this.options.c_1_height * (y - this.options.data.min) / (this.options.data.max - this.options.data.min));
					} else {
						return this.options.c_1_height - (this.options.c_1_height * (y) / (this.options.data.max));
					}
				}

				// 图表x轴坐标计算
				function get_x(year_num, quarter_num) {
					var yearUnit = this.options.yearUnit;
					var quarterUnit = this.options.quarterUnit;
					var padding_left = this.options.padding_left;
					var year_sepe = this.options.yearUnit.rect_w - this.options.yearUnit.bar_w;
					var quarter_sepe = this.options.quarterUnit.rect_w - this.options.quarterUnit.bar_w;
					// var dpr = this.options.dpr;
					return yearUnit.rect_w * year_num + padding_left + quarterUnit.rect_w * quarter_num + year_sepe / 2 + quarter_sepe / 2;
				}

				//通过clientX获得交互需要的tips的坐标和虚线中x坐标
				function getCoordinateByClient(clientX) {
					var canvasX = clientX * this.options.dpr;
					//被返回的两个数据
					var result = {};

					//需要用到的参数
					var paddingLeft = this.options.padding_left,
						yearUnit = this.options.yearUnit,
						quarterUnit = this.options.quarterUnit,
						canvas = this.options.canvas,
						series = this.options.series;

					// 求得鼠标所指的位置属于哪一年的哪一个季度
					var numYear = Math.floor((canvasX - paddingLeft) / yearUnit.rect_w);
					if (numYear < 0) {
						numYear = 0;
					}
					var numQuarter = Math.floor((canvasX - paddingLeft - numYear * yearUnit.rect_w - (yearUnit.rect_w - yearUnit.bar_w) / 2) / quarterUnit.rect_w);
					if (numQuarter < 0) {
						numQuarter = 0;
					} else if (numQuarter > 3) {
						numQuarter = 3;
					}
					// 绘制的虚线的x坐标
					result.midddleLine = get_x.call(this, numYear, numQuarter) + quarterUnit.bar_w / 2;
					//绘制tips的坐标
					result.tipsX = result.midddleLine + 3 * quarterUnit.bar_w / 4;
					result.tipsY = get_y.call(this, series[numYear].data[numQuarter]);
					if (canvasX > canvas.width / 2) {
						result.tipsX = result.midddleLine - 3 * quarterUnit.bar_w / 4;
					}
					if (this.options.series[numYear].data[numQuarter] < 0) {
						result.tipsY -= 25;
					}
					result.midddleLineHeight = result.tipsY;

					result.content = this.options.series[numYear].data[numQuarter];
					result.arr = numYear + ":" + numQuarter;

					return result;
				}

				ChartBarQuarter.prototype.addInteractive = function () {
					var canvas = this.options.canvas;
					var yearUnit = this.options.yearUnit;
					var _that = this;
					var tips = document.createElement("div");
					var middleLine = document.createElement("div");
					var coordinateCanvas, coordinateWindow = {};
					//用于状态记录
					var status = "x:x";
					//用于canvas与windows相互转化
					var dpr = this.options.dpr;
					var padding_left = this.options.padding_left;
					var offSetTop = this.options.canvas_offset_top;
					var yHeight = this.options.c_1_height;

					// tips.setAttribute("class", "web-tips");
					tips.className = "web-tips";
					middleLine.className = "web-middleLine";
					// middleLine.setAttribute("class", "web-middleLine");
					_that.container.appendChild(tips);
					_that.container.appendChild(middleLine);

					common.addEvent.call(_that, canvas, 'mousemove', function (e) {

						var winX, winY;
						//浏览器检测，获取到相对元素的x和y
						if (e.layerX) {
							winX = e.layerX;
							winY = e.layerY;
						} else if (e.x) {
							winX = e.x;
							winY = e.y;
						}

						//当超出坐标系框就不显示交互
						if (winX >= padding_left && winX < (canvas.width - (yearUnit.rect_w - yearUnit.bar_w) / 2) && (winY >= offSetTop && winY * dpr < (offSetTop * dpr + yHeight))) {
							tips.style.display = "inline-block";
							middleLine.style.display = "inline-block";
						} else {
							tips.style.display = "none";
							middleLine.style.display = "none";
						}
						//canvas中是坐标与屏幕坐标之间的相互转换
						coordinateCanvas = getCoordinateByClient.call(_that, winX);
						if (status !== coordinateCanvas.arr) {
							coordinateWindow.midddleLine = common.canvasToWindow.call(_that, canvas, coordinateCanvas.midddleLine, 0);
							coordinateWindow.tips = common.canvasToWindow.call(_that, canvas, coordinateCanvas.tipsX, coordinateCanvas.tipsY);
							//绘制tips
							tips.innerHTML = /*coordinateCanvas.content*/ common.format_unit(coordinateCanvas.content, 3) + (_that.options.suffix || "");
							if (winX > canvas.width / 2) {
								tips.style.left = (coordinateCanvas.tipsX - tips.clientWidth) + "px";
							} else {
								tips.style.left = (coordinateCanvas.tipsX - tips.style.width) + "px";
							}
							// alert(coordinateWindow.tips.y);
							tips.style.top = (coordinateCanvas.tipsY * dpr + tips.clientHeight) + "px";
							// var text = createTextNode(coordinateCanvas.content);
							// tips.appendChild(text);
							//绘制中线
							middleLine.style.height = yHeight + "px";
							middleLine.style.left = coordinateWindow.midddleLine.x + "px";
							middleLine.style.top = offSetTop + "px";
							status = coordinateCanvas.arr;
						}

					});

				};

				// 重绘
				ChartBarQuarter.prototype.reDraw = function () {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					this.draw();
				}
				// 删除canvas画布
				ChartBarQuarter.prototype.clear = function (cb) {
					if (this.container) {
						this.container.innerHTML = "";
					} else {
						document.getElementById(this.options.container).innerHTML = "";
					}
					if (cb) {
						cb();
					};
				}

				// 获取数组中的最大值
				function getMaxMark(series) {
					var seriesLength = series.length;
					var arr = [];
					for (var i = 0; i < seriesLength; i++) {
						arr = arr.concat(series[i].data);
					}

					var tempObj = divide(this.options.sepeNum, arr);

					var ctx = this.options.context;
					var backWidth = ctx.measureText(common.format_unit(tempObj.stepHeight)).width - ctx.measureText(common.format_unit(parseInt(tempObj.stepHeight))).width;
					var frontMaxWidth = ctx.measureText(common.format_unit(parseInt(tempObj.max))).width;
					var frontMinWidth = ctx.measureText(common.format_unit(parseInt(tempObj.min))).width;
					var frontWidth = frontMaxWidth > frontMinWidth ? frontMaxWidth : frontMinWidth;
					var maxPaddingLeftWidth = frontWidth + backWidth;

					return {
						max: tempObj.max,
						min: tempObj.min,
						step: tempObj.stepHeight,
						maxPaddingLeftWidth: maxPaddingLeftWidth
					};
				}

				return ChartBarQuarter;
			})();

			module.exports = ChartBarQuarter;


			/***/
		}),
/* 49 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制直角坐标系
			 */
			var extend = __webpack_require__(21);
			/*主题*/
			var theme = __webpack_require__(7);
			var common = __webpack_require__(13);
			// 格式化坐标
			var XYF = __webpack_require__(9);
			var DrawXY = (function () {
				//构造方法
				function DrawXY(options) {
					/*设置默认参数*/
					this.defaultoptions = theme.draw_xy;
					this.options = extend(this.defaultoptions, options);

					/*绘图*/
					this.draw();
				};
				/*绘图*/
				DrawXY.prototype.draw = function () {
					// var xAxisData = this.options.xaxis;
					// var yAxisData = this.options.series;
					// var type = this.options.type;
					// var dpr = this.options.dpr;
					var ctx = this.options.context;
					/*Y轴上的最大值*/
					var y_max = this.options.data.max;
					/*Y轴上的最小值*/
					var y_min = this.options.data.min;

					/*Y轴上分隔线数量*/
					var sepeNum = this.options.sepeNum;
					/*开盘收盘时间数组*/
					var oc_time_arr = this.options.xaxis;

					/*K线图的高度*/
					var k_height = this.options.c_1_height;
					/*Y轴标识线列表*/
					var line_list_array = getLineList.call(this, y_max, y_min, sepeNum, k_height);
					// if(this.options.type == 'quarter-line') {
					addGradient.call(this);
					// }

					drawXYLine.call(this, ctx, y_max, y_min, line_list_array);

					// 绘制横坐标刻度
					drawXMark.apply(this, [ctx, k_height, oc_time_arr]);
				};
				// 绘制坐标轴最左边刻度
				function drawXYLine(ctx, y_max, y_min, line_list_array) {
					// var sepeNum = line_list_array.length;
					ctx.fillStyle = '#000';
					ctx.strokeStyle = '#eeeeee';
					ctx.textAlign = 'right';
					ctx.textBaseline = "middle";
					for (var i = 0, item; i < line_list_array.length; i++) {
						item = line_list_array[i];
						ctx.beginPath();
						if (i !== 0 && i !== line_list_array.length - 1) {
							ctx.moveTo(this.options.padding_left, XYF(item.y));
							ctx.lineTo(ctx.canvas.width, XYF(item.y));
						}
						ctx.fillText(common.format_unit(item.num, 0), this.options.padding_left - 5, item.y);
						ctx.stroke();
					}

				}

				/*绘制横坐标刻度值*/
				function drawXMark(ctx, k_height, oc_time_arr) {
					// var dpr = this.options.dpr;
					var padding_left = this.options.padding_left;
					ctx.beginPath();
					ctx.strokeStyle = "#9f9f9f";
					ctx.rect(XYF(padding_left) - 1, XYF(0), Math.round(ctx.canvas.width - padding_left), Math.round(this.options.c_1_height));
					ctx.stroke();
					ctx.closePath();
					ctx.beginPath();
					ctx.textAlign = 'left';
					ctx.textBaseline = "top";
					ctx.fillStyle = '#000';
					/*画布宽度*/
					var k_width = ctx.canvas.width;
					var tempDate;
					var arr_length = oc_time_arr.length;
					for (var i = 0; i < arr_length; i++) {
						tempDate = oc_time_arr[i].value;
						ctx.fillText(tempDate, i * (k_width - padding_left) / (arr_length) + padding_left +
							(((k_width - padding_left) / (arr_length) - ctx.measureText(tempDate).width) / 2), this.options.c_1_height + 5);
					}
					ctx.stroke();
				}

				function addGradient() {
					var sepGradientLen = (this.options.canvas.width - this.options.padding_left) / this.options.series.length;
					var ctx = this.options.context;
					for (var i = 0; i < this.options.series.length; i++) {
						if (i % 2 == 0) {
							ctx.beginPath();
							var grad = ctx.createLinearGradient(0, 0, 0, this.options.c_1_height);
							grad.addColorStop(0, 'rgba(255,255,255,0)');
							grad.addColorStop(1, 'rgba(245,245,245,1)');
							ctx.fillStyle = grad;
							ctx.rect(XYF(this.options.padding_left + i * sepGradientLen), XYF(0), Math.round(sepGradientLen), Math.round(this.options.c_1_height));
							ctx.fill();
							ctx.closePath();
						}

					}
				}

				/*Y轴标识线列表*/
				function getLineList(y_max, y_min, sepeNum, k_height) {
					var ratio = this.options.data.step;
					var result = [];
					for (var i = 0; i <= sepeNum; i++) {
						result.push({
							num: (y_min + i * ratio),
							x: 0,
							y: k_height - (i / (sepeNum)) * k_height
						});
					}
					return result;
				}

				return DrawXY;
			})();

			module.exports = DrawXY;


			/***/
		}),
/* 50 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制K线
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     type:    "TL"(分时图),"DK"(日K线图),"WK"(周K线图),"MK"(月K线图)
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 *     canvas_offset_top:   画布中坐标轴向下偏移量
			 *     padding_left:    画布左侧边距
			 *     k_v_away:    行情图表（分时图或K线图）和成交量图表的间距
			 *     scale_count:     缩放默认值
			 *     c_1_height:  行情图表（分时图或K线图）的高度
			 *     rect_unit:   分时图或K线图单位绘制区域
			 * }
			 *
			 */

			/*继承*/
			var extend = __webpack_require__(21);
			/*主题*/
			var theme = __webpack_require__(7);
			var DrawBar = (function () {
				function DrawBar(options) {
					// 设置默认参数
					this.defaultoptions = theme.drawLine;
					this.options = extend(this.defaultoptions, options);

					// 绘图
					this.draw();
				};

				// 绘图
				DrawBar.prototype.draw = function () {

					var ctx = this.options.context;
					ctx.lineWidth = 1 * this.options.dpr + 1;
					// 折线数据
					var series = this.options.series;
					// 横坐标数据
					var xaxis = this.options.xaxis;

					for (var i = 0, se; se = series[i]; i++) {

						var bar_arr = se.data;

						for (var j = 0, bar; bar = bar_arr[j]; j++) {
							ctx.beginPath();
							// 填充颜色
							ctx.fillStyle = xaxis[i].colors[j] == undefined ? "#333" : xaxis[i].colors[j];
							// 画笔颜色
							ctx.strokeStyle = xaxis[i].colors[j] == undefined ? "#333" : xaxis[i].colors[j];
							var x = get_x.apply(this, [i, j]);
							var y = get_y.call(this, bar);
							ctx.rect(x, y, this.options.quarterUnit.bar_w, bar / (this.options.data.max - this.options.data.min) * this.options.c_1_height);
							ctx.fill();
						}
					}
				};

				// 图表y轴坐标计算
				function get_y(y) {
					var max = this.options.data.max,
						min = this.options.data.min,
						totalHeight = this.options.c_1_height,
						base = totalHeight * (max / (max - min));
					return base - (y / (max - min) * totalHeight);
				}
				// 图表x轴坐标计算
				function get_x(year_num, quarter_num) {
					var yearUnit = this.options.yearUnit;
					var quarterUnit = this.options.quarterUnit;
					var padding_left = this.options.padding_left;
					var year_sepe = this.options.yearUnit.rect_w - this.options.yearUnit.bar_w;
					var quarter_sepe = this.options.quarterUnit.rect_w - this.options.quarterUnit.bar_w;
					return yearUnit.rect_w * year_num + padding_left + quarterUnit.rect_w * quarter_num + year_sepe / 2 + quarter_sepe / 2;
				}

				return DrawBar;
			})();

			module.exports = DrawBar;

			/***/
		}),
/* 51 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制季度折线图
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 * }
			 *
			 */

			// 绘制坐标轴
			var DrawXY = __webpack_require__(52);
			// 主题
			var theme = __webpack_require__(7);
			// 绘制季度折线图
			var DrawLine = __webpack_require__(53);
			// 拓展，合并，复制
			var extend = __webpack_require__(21);
			// 水印
			var watermark = __webpack_require__(22);
			// 添加通用工具
			var common = __webpack_require__(13);

			var ChartBarQuarter = (function () {

				// 构造函数
				function ChartBarQuarter(options) {
					this.defaultoptions = theme.defaulttheme;
					this.options = extend(this.defaultoptions, options);

					// 图表容器
					this.container = document.getElementById(options.container);

					this.container.className = this.container.className.replace(/emcharts-container/g, "").trim();
					this.container.className = this.container.className + " emcharts-container";
					// 图表加载完成事件
					this.onChartLoaded = options.onChartLoaded == undefined ? function (op) {

					} : options.onChartLoaded;

				}

				// 初始化
				ChartBarQuarter.prototype.init = function () {

					this.options.type = "quarter-line";
					var canvas = document.createElement("canvas");
					// 去除画布上粘贴效果
					// this.container.style = "-moz-user-select:none;-webkit-user-select:none;";
					// this.container.setAttribute("unselectable", "on");
					this.container.style.position = "relative";
					// 容器中添加画布
					this.container.appendChild(canvas);
					// 画布
					try {
						var ctx = canvas.getContext('2d');
					} catch (error) {
						canvas = window.G_vmlCanvasManager.initElement(canvas);
						var ctx = canvas.getContext('2d');
					}

					this.options.canvas = canvas;
					this.options.context = ctx;
					// 设备像素比
					var dpr = this.options.dpr;


					// 画布的宽和高
					canvas.width = this.options.width * dpr;
					canvas.height = this.options.height * dpr;

					// 画布向下偏移的距离
					this.options.canvas_offset_top = canvas.height / 5 / 4;
					// 画布内容向坐偏移的距离
					this.options.c_1_height = 4 * canvas.height / 5;
					canvas.style.width = this.options.width + "px";
					canvas.style.height = this.options.height + "px";
					canvas.style.border = "0";

					// 画布上部内间距
					ctx.translate("0", this.options.canvas_offset_top);
					// 画笔参数设置
					ctx.font = (this.options.font_size * this.options.dpr) + "px Arial";
					ctx.lineWidth = 1 * this.options.dpr;
					this.options.yearUnitSpacing = "0.2";
					this.options.quarterUnitSpacing = "0.4";

					// 加水印
					watermark.apply(this, [this.options.context, 90, 20, 82, 20]);
				};

				// 绘图
				ChartBarQuarter.prototype.draw = function (callback) {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					// 显示loading效果
					// inter.showLoading();
					// var _this = this;
					// 折线数据

					var series = this.options.series;
					var canvas = this.options.canvas;
					var getMaxMinValue = getMaxMark(series);
					if (getMaxMinValue.min < 0) {
						this.options.isLessZero = true;
					}
					this.options.data = {};
					this.options.data.max = getMaxMinValue.max;
					this.options.data.min = getMaxMinValue.min;

					// 画布内容偏移的距离
					var ctx = this.options.context;
					this.options.padding_left = ctx.measureText("+9000万").width + 10;
					// this.options.padding_left = ctx.measureText(common.format_unit(this.options.data.max)).width + 20;
					this.options.drawWidth = ctx.canvas.width - this.options.padding_left;

					this.options.yearUnit = getYearRect.call(this, canvas.width - this.options.padding_left, this.options.series.length);
					this.options.quarterUnit = getQuarterRect.call(this, this.options.yearUnit.bar_w, 4);

					// 绘制坐标轴
					new DrawXY(this.options);
					// 绘制季度折线图
					new DrawLine(this.options);
					//添加交互
					this.addInteractive();

				};
				// 单位绘制区域
				function getYearRect(width, num) {
					var rect_w = width / num;
					var bar_w = rect_w * (1 - this.options.yearUnitSpacing);
					return {
						rect_w: rect_w,
						bar_w: bar_w
					};
				}

				// 单位绘制区域
				function getQuarterRect(width, num) {
					var rect_w = width / num;
					var bar_w = rect_w * (1 - this.options.quarterUnitSpacing);
					return {
						rect_w: rect_w,
						bar_w: bar_w
					};
				}

				// 将鼠标坐标转换为Canvas坐标
				function windowToCanvas(canvas, x, y) {
					// var box = canvas.getBoundingClientRect();
					return {
						// x:(x-box.left)*(canvas.width/box.width),
						// y:(y-box.top)*(canvas.height/box.height)

						x: x * this.options.dpr,
						y: y * this.options.dpr
					};
				}
				// 将Canvas坐标转换为鼠标坐标
				function canvasToWindow(canvas, x, y) {
					var box = canvas.getBoundingClientRect();
					// 相对于窗口
					// return {
					//     x:(x *(box.width/canvas.width)+box.left),
					//     y:(y *(box.height/canvas.height)+box.top + this.options.canvas_offset_top/this.options.dpr)
					// };
					return {
						x: x / this.options.dpr,
						// x:x * (box.width/canvas.width),
						y: (y + this.options.canvas_offset_top) * (box.height / canvas.height)
					};
				}
				// 图表y轴坐标计算
				function get_y(y) {
					if (!this.options.isLessZero) {
						return this.options.c_1_height - (this.options.c_1_height * (y - this.options.data.min) / (this.options.data.max - this.options.data.min));
					} else {
						return this.options.c_1_height / 2 - (this.options.c_1_height / 2 * (-y) / (this.options.data.max));
					}
				}
				// 图表x轴坐标计算
				function get_x(year_num, quarter_num) {
					var canvas = this.options.context.canvas;
					var quarterUnit = this.options.quarterUnit;
					var total = this.options.series.length;
					var padding_left = this.options.padding_left;
					// var dpr = this.options.dpr;

					return (canvas.width - padding_left) / total * year_num + padding_left + quarterUnit.rect_w * quarter_num + quarterUnit.rect_w / 2;
				}

				//通过clientX获得交互需要的tips的坐标和虚线中x坐标
				function getCoordinateByClient(clientX) {
					var canvasX = windowToCanvas.call(this, this.options.canvas, clientX, 0).x;
					//被返回的两个数据
					var result = {};

					//需要用到的参数
					var paddingLeft = this.options.padding_left,
						yearUnit = this.options.yearUnit,
						quarterUnit = this.options.quarterUnit,
						canvas = this.options.canvas;

					// 求得鼠标所指的位置属于哪一年的哪一个季度
					var numYear = Math.floor((canvasX - paddingLeft) / yearUnit.rect_w);
					if (numYear < 0) {
						numYear = 0;
					}
					var numQuarter = Math.floor((canvasX - paddingLeft - numYear * yearUnit.rect_w - (yearUnit.rect_w - yearUnit.bar_w) / 2) / quarterUnit.rect_w);
					if (numQuarter < 0) {
						numQuarter = 0;
					} else if (numQuarter > 3) {
						numQuarter = 3;
					}

					// 绘制的虚线的x坐标
					result.midddleLine = get_x.call(this, numYear, numQuarter) + 3 * quarterUnit.bar_w / 4;
					//绘制tips的坐标
					result.tipsX = result.midddleLine + quarterUnit.bar_w / 2;
					result.tipsY = get_y.call(this, -this.options.series[numYear].data[numQuarter]);
					if (clientX > canvas.width / 2) {
						result.tipsX = result.midddleLine - quarterUnit.bar_w / 2;
					}


					result.midddleLineHeight = result.tipsY;

					result.content = this.options.series[numYear].data[numQuarter];
					result.arr = numYear + ":" + numQuarter;

					return result;
				}


				//添加交互
				ChartBarQuarter.prototype.addInteractive = function () {
					var canvas = this.options.canvas;
					var yearUnit = this.options.yearUnit;
					var _that = this;
					var tips = document.createElement("div");
					var middleLine = document.createElement("div");
					var interactiveInfo, coordinateWindow = {};
					//用于状态记录
					var status = "x:x";
					//用于canvas与windows相互转化
					var dpr = this.options.dpr;
					var padding_left = this.options.padding_left;
					var offSetTop = this.options.canvas_offset_top;
					var yHeight = this.options.c_1_height;

					tips.className = "web-tips";
					middleLine.className = "web-middleLine";

					_that.container.appendChild(tips);
					_that.container.appendChild(middleLine);

					common.addEvent.call(_that, canvas, "mousemove", function (e) {
						var winX, winY;
						//浏览器检测，获取到相对元素的x和y
						if (e.layerX) {
							winX = e.layerX;
							winY = e.layerY;
						} else if (e.x) {
							winX = e.x;
							winY = e.y;
						}
						//当超出坐标系框就不显示交互
						if (winX >= padding_left && winX < (canvas.width - (yearUnit.rect_w - yearUnit.bar_w) / 2) && (winY >= offSetTop && winY * dpr < (offSetTop * dpr + yHeight))) {
							tips.style.display = "inline-block";
							middleLine.style.display = "inline-block";
						} else {
							tips.style.display = "none";
							middleLine.style.display = "none";
						}
						//获取交互的信息，包括tips的坐标，middline的坐标和tips的内容
						interactiveInfo = getCoordinateByClient.call(_that, winX);

						if (status !== interactiveInfo.arr) {
							coordinateWindow.midddleLine = canvasToWindow.call(_that, canvas, interactiveInfo.midddleLine, 0);
							coordinateWindow.tips = canvasToWindow.call(_that, canvas, interactiveInfo.tipsX, interactiveInfo.tipsY);
							//绘制tips
							tips.innerHTML = interactiveInfo.content;
							if (winX > canvas.width / 2) {
								tips.style.left = (coordinateWindow.tips.x - tips.clientWidth) + "px";
							} else {
								tips.style.left = (coordinateWindow.tips.x - tips.style.width) + "px";
							}
							tips.style.top = (interactiveInfo.tipsY * dpr + tips.clientHeight) + "px";

							//绘制中线
							middleLine.style.height = yHeight + "px";
							middleLine.style.left = coordinateWindow.midddleLine.x + "px";
							middleLine.style.top = offSetTop + "px";
							status = interactiveInfo.arr;
						}
					});

				};

				// 重绘
				ChartBarQuarter.prototype.reDraw = function () {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					this.draw();
				}
				// 删除canvas画布
				ChartBarQuarter.prototype.clear = function (cb) {
					if (this.container) {
						this.container.innerHTML = "";
					} else {
						document.getElementById(this.options.container).innerHTML = "";
					}
					if (cb) {
						cb();
					};
				}

				// 获取数组中的最大值
				function getMaxMark(series) {
					var max = 0,
						min = 0,
						seriesLength = series.length,
						tempObj = {};
					for (var i = 0; i < seriesLength; i++) {
						for (var j = 0; j < series[i].data.length; j++) {

							if (i == 0 && j == 0) {
								max = series[i].data[j];
								min = series[i].data[j];
							}

							max = Math.max(max, series[i].data[j]);
							min = Math.min(min, series[i].data[j]);
						}
					}
					if (max < Math.abs(min)) {
						max = Math.abs(min) + Math.abs(max - min) * 0.05;
					} else {
						max = max + Math.abs(max - min) * 0.05;
					}



					tempObj.max = max;
					tempObj.min = min;
					return tempObj;
				}

				return ChartBarQuarter;
			})();

			module.exports = ChartBarQuarter;


			/***/
		}),
/* 52 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制直角坐标系
			 */
			var extend = __webpack_require__(21);
			/*主题*/
			var theme = __webpack_require__(7);
			var common = __webpack_require__(13);
			// 格式化坐标
			var XYF = __webpack_require__(9);
			var DrawXY = (function () {
				//构造方法
				function DrawXY(options) {
					/*设置默认参数*/
					this.defaultoptions = theme.draw_xy;
					this.options = extend(this.defaultoptions, options);

					/*绘图*/
					this.draw();
				};
				/*绘图*/
				DrawXY.prototype.draw = function () {
					// var xAxisData = this.options.xaxis;
					// var yAxisData = this.options.series;
					// var type = this.options.type;
					// var dpr = this.options.dpr;
					var ctx = this.options.context;
					/*Y轴上的最大值*/
					var y_max = this.options.data.max;
					/*Y轴上的最小值*/
					var y_min = 0;

					/*Y轴上分隔线数量*/
					var sepe_num = 5;
					/*开盘收盘时间数组*/
					var oc_time_arr = this.options.xaxis;

					/*K线图的高度*/
					var k_height = this.options.c_1_height;
					/*Y轴标识线列表*/
					var line_list_array = getLineList(y_max, y_min, sepe_num, k_height);
					// if(this.options.type == 'quarter-line') {
					addGradient.call(this);
					// }

					drawXYLine.call(this, ctx, y_max, y_min, line_list_array);

					// 绘制横坐标刻度
					drawXMark.apply(this, [ctx, k_height, oc_time_arr]);
				};
				// 绘制坐标轴最左边刻度
				function drawXYLine(ctx, y_max, y_min, line_list_array) {
					// var sepe_num = line_list_array.length;
					ctx.fillStyle = '#000';
					ctx.strokeStyle = '#eeeeee';
					ctx.textAlign = 'right';
					for (var i = 0, item; item = line_list_array[i]; i++) {
						ctx.beginPath();
						ctx.moveTo(XYF(this.options.padding_left), XYF(item.y));
						ctx.lineTo(XYF(ctx.canvas.width), XYF(item.y));
						var absPoint = Math.max(this.options.data.max, Math.abs(this.options.data.min));
						absPoint = absPoint.toFixed(0);
						// 绘制纵坐标刻度
						if (this.options.data.min < 0) {
							if (i == 0) {

								ctx.fillText(common.format_unit(-absPoint + i * absPoint / 2, 0), XYF(this.options.padding_left - 10), XYF(item.y));
							}
							else {
								ctx.fillText(common.format_unit(-absPoint + i * absPoint / 2, 0), XYF(this.options.padding_left - 10), XYF(item.y + 10));
							}
						}
						else {
							if (i == 0) {

								ctx.fillText(common.format_unit((i * absPoint / 4).toFixed(0), 0), XYF(this.options.padding_left - 10), XYF(item.y));
							}
							else {
								ctx.fillText(common.format_unit((i * this.options.data.max / 4).toFixed(0), 0), XYF(this.options.padding_left - 10), XYF(tem.y + 10));
							}
						}

						ctx.stroke();
					}

				}

				/*绘制横坐标刻度值*/
				function drawXMark(ctx, k_height, oc_time_arr) {
					// var dpr = this.options.dpr;
					var padding_left = this.options.padding_left;
					ctx.beginPath();
					ctx.strokeStyle = "#9f9f9f";
					ctx.rect(XYF(padding_left), 0.5, Math.round(ctx.canvas.width - padding_left - 1), Math.round(this.options.c_1_height));
					ctx.stroke();
					ctx.closePath();
					ctx.beginPath();
					ctx.textAlign = 'left';
					ctx.fillStyle = '#000';
					/*画布宽度*/
					var k_width = ctx.canvas.width;
					var tempDate;
					var arr_length = oc_time_arr.length;
					for (var i = 0; i < arr_length; i++) {
						tempDate = oc_time_arr[i].value;
						ctx.fillText(tempDate, XYF(i * (k_width - padding_left) / (arr_length) + padding_left + (((k_width - padding_left) / (arr_length) - ctx.measureText(tempDate).width) / 2)), XYF(this.options.c_1_height + 30));
					}
					ctx.stroke();
					ctx.closePath();



				}

				function addGradient() {
					var sepGradientLen = (this.options.canvas.width - this.options.padding_left) / this.options.series.length;
					var ctx = this.options.context;
					for (var i = 0; i < this.options.series.length; i++) {
						if (i % 2 == 0) {
							ctx.beginPath();
							var grad = ctx.createLinearGradient(0, 0, 0, this.options.c_1_height);
							grad.addColorStop(0, 'rgba(255,255,255,0)');
							grad.addColorStop(1, 'rgba(245,245,245,1)');
							ctx.fillStyle = grad;
							ctx.rect(this.options.padding_left + i * sepGradientLen, 0, sepGradientLen, this.options.c_1_height);
							ctx.fill();
							ctx.closePath();
						}

					}
				}

				/*Y轴标识线列表*/
				function getLineList(y_max, y_min, sepe_num, k_height) {
					var ratio = (y_max - y_min) / (sepe_num - 1);
					var result = [];
					for (var i = 0; i < sepe_num; i++) {
						result.push({
							num: (y_min + i * ratio),
							x: 0,
							y: k_height - (i / (sepe_num - 1)) * k_height
						});
					}
					return result;
				}

				return DrawXY;
			})();

			module.exports = DrawXY;

			/***/
		}),
/* 53 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制折线图
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 * }
			 *
			 */

			/*继承*/
			var extend = __webpack_require__(6);
			/*主题*/
			var theme = __webpack_require__(7);
			// 格式化坐标
			var XYF = __webpack_require__(9);
			var DrawQuarterLine = (function () {
				function DrawQuarterLine(options) {
					// 设置默认参数
					this.defaultoptions = theme.drawLine;
					this.options = {};
					extend(false, this.options, this.defaultoptions, options);
					// 绘图  
					this.draw();
				};

				// 绘图
				DrawQuarterLine.prototype.draw = function () {

					var ctx = this.options.context;
					ctx.lineWidth = 1 * this.options.dpr;
					// 折线数据
					var series = this.options.series;
					ctx.beginPath();
					// 画笔颜色
					ctx.strokeStyle = this.options.line.color == undefined ? "#333" : this.options.line.color;

					for (var i = 0, se; se = series[i]; i++) {

						var line_arr = se.data;

						for (var j = 0, line; line = line_arr[j]; j++) {

							var x = get_x.apply(this, [i, j]);
							var y = get_y.call(this, line);
							if (i == 0 && j == 0) {
								ctx.moveTo(XYF(x), XYF(y));
							} else {
								ctx.lineTo(XYF(x), XYF(y));
							}

						}
					}
					ctx.stroke();

					if (this.options.point && this.options.point.show) {
						drawPoint.apply(this, [ctx, series, this.options.point.color]);
					}

				};

				// 绘制折线节点（连接点）
				function drawPoint(ctx, series, color) {
					// 保存画笔状态
					ctx.save();

					// 节点（折线连接点半径）
					var pointRadius = this.options.point.pointradius;
					// 填充颜色
					ctx.fillStyle = color == undefined ? "#333" : color;

					for (var i = 0, se; se = series[i]; i++) {
						var line_arr = se.data;
						for (var j = 0, line; line = line_arr[j]; j++) {
							ctx.beginPath();
							var x = get_x.apply(this, [i, j]);
							var y = get_y.call(this, line);
							ctx.arc(XYF(x), XYF(y), pointRadius, 0, Math.PI * 2, true);
							ctx.fill();
						}

					}

					// 恢复画笔状态
					ctx.restore();
				}

				// 图表y轴坐标计算
				function get_y(y) {
					if (!this.options.isLessZero) {
						return this.options.c_1_height - (this.options.c_1_height * (y - this.options.data.min) / (this.options.data.max - this.options.data.min));
					} else {
						return this.options.c_1_height / 2 - (this.options.c_1_height / 2 * (y) / (this.options.data.max));
					}
				}
				// 图表x轴坐标计算
				function get_x(year_num, quarter_num) {
					var yearUnit = this.options.yearUnit;
					var quarterUnit = this.options.quarterUnit;
					var padding_left = this.options.padding_left;
					var year_sepe = this.options.yearUnit.rect_w - this.options.yearUnit.bar_w;
					// var dpr = this.options.dpr;
					return yearUnit.rect_w * year_num + padding_left + quarterUnit.rect_w * quarter_num + year_sepe;
				}

				return DrawQuarterLine;
			})();

			module.exports = DrawQuarterLine;

			/***/
		}),
/* 54 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制手机分时图
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     type:    "TL"(分时图),"DK"(日K线图),"WK"(周K线图),"MK"(月K线图)
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 *    
			 * }
			 *
			 */

			// 绘制坐标轴
			var DrawXY = __webpack_require__(55);
			// 主题
			var theme = __webpack_require__(7);
			// 绘制分时折线图
			var DrawLine = __webpack_require__(57);
			// 拓展，合并，复制
			var extend = __webpack_require__(21);
			// 交互效果
			var Interactive = __webpack_require__(20);
			// 水印
			var watermark = __webpack_require__(22);
			// 添加通用工具
			var common = __webpack_require__(13);
			// 获取步长，最大值，最小值
			var divide = __webpack_require__(38);

			var ChartLine = (function () {

				// 构造函数
				function ChartLine(options) {

					this.options = {};
					this.options = extend(theme.defaulttheme, options);
					// 图表容器
					this.container = document.getElementById(options.container);

					this.container.className = this.container.className.replace(/emcharts-container/g, "").trim();
					this.container.className = this.container.className + " emcharts-container";
					// 图表加载完成事件
					this.onChartLoaded = options.onChartLoaded == undefined ? function (op) {

					} : options.onChartLoaded;

				}

				// 初始化
				ChartLine.prototype.init = function () {

					this.options.type = "line";
					var flag = true;
					var eventDiv = document.createElement("div");
					eventDiv.className = "event-div";
					this.container.appendChild(eventDiv);
					this.eventDiv = eventDiv;

					/*if (!this.options.canvas) {*/
					var canvas = document.createElement("canvas");
					/*flag = true;
					} else {
						var canvas = this.options.canvas;
					}*/

					// 去除画布上粘贴效果
					// this.container.style = "-moz-user-select:none;-webkit-user-select:none;";
					// this.container.setAttribute("unselectable","on");
					this.container.style.position = "relative";
					// 容器中添加画布
					this.container.appendChild(canvas);
					// 兼容IE6-IE9
					try {
						var ctx = canvas.getContext('2d');
					} catch (error) {
						canvas = window.G_vmlCanvasManager.initElement(canvas);
						var ctx = canvas.getContext('2d');
					}

					this.options.canvas = canvas;
					this.options.context = ctx;
					// 设备像素比
					var dpr = this.options.dpr = this.options.dpr == undefined ? 1 : this.options.dpr;

					// 画布的宽和高
					canvas.width = this.options.width * dpr;
					canvas.height = this.options.height * dpr;


					// 画布向下偏移的距离
					this.options.canvas_offset_top = 15 * dpr;


					// 缩放默认值
					this.options.scale_count = 0;
					this.options.decimalCount = this.options.decimalCount == undefined ? 2 : this.options.decimalCount;
					// 画布上第一个图表的高度
					var xaxis = this.options.xaxis;


					// if (this.options.font && this.options.font.fontSize) {
					//     var first_height = this.options.font.fontSize;
					// }else{
					//     var first_height = 12;
					// }

					// var first_width = ctx.measureText(xaxis[0].value).width;
					// var first_max = Math.sqrt(Math.pow(first_width,2)+Math.pow(first_height,2));

					if (this.options.angle && this.options.angle != 0) {
						var angle_height = ctx.measureText(xaxis[0].value).width * Math.sin(2 * Math.PI * (this.options.angle / 360)) + 30;
						this.options.angle_height = angle_height;
						this.options.c_1_height = this.options.canvas.height - this.options.canvas_offset_top * dpr - angle_height * dpr;
					} else {

						this.options.c_1_height = canvas.height - this.options.canvas_offset_top * dpr - 40 * dpr;
					}

					// if(this.options.showflag){
					//     this.options.c_1_height = canvas.height * (5/9);
					// }else{
					//     this.options.c_1_height = canvas.height * (7/9);
					// }
					if (this.options.showname === undefined) {
						this.options.showname = true;
					}
					this.options.sepeNum = this.options.sepeNum == undefined ? 4 : this.options.sepeNum;
					if (this.options.sepeNum < 2) {
						this.options.sepeNum = 2;
					}


					canvas.style.width = this.options.width + "px";
					canvas.style.height = this.options.height + "px";
					canvas.style.border = "0";

					var isIE8 = !+'\v1';
					// 画布上部内间距
					if (isIE8) {
						if (flag) {
							ctx.translate("0", this.options.canvas_offset_top);
						}
					} else {
						ctx.translate("0", this.options.canvas_offset_top);
					}

					// 画笔参数设置
					var font = "";
					var fontSize = "";
					var fontFamily = "";
					if (this.options.font) {
						if (this.options.font.fontFamily) {
							fontFamily = this.options.font.fontFamily;
						} else {
							fontFamily = "Arial";
						}

						if (this.options.font.fontSize) {
							fontSize = this.options.font.fontSize * this.options.dpr;
						} else {
							fontSize = 12 * this.options.dpr;
						}

						font = fontSize + "px " + fontFamily;
					} else {
						font = 12 * this.options.dpr + "px Arial";
					}
					ctx.font = font;
					ctx.lineWidth = 1 * this.options.dpr;

					this.options.padding = {};
					this.options.padding.left = 0;
					this.options.padding.right = 0;
					this.options.padding.top = 0
					this.options.padding.bottom = 0;

					//锚点半径
					this.options.pointRadius = this.options.pointRadius == undefined ? 5 : this.options.pointRadius;
				}

				// 绘图
				ChartLine.prototype.draw = function (callback) {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					// 初始化交互
					this.options.interactive = new Interactive(this.options);
					var ctx = this.options.context;
					var dpr = this.options.dpr;
					// 显示loading效果
					// inter.showLoading();
					// var _this = this;

					// 第一坐标轴折线数据
					var series = this.options.series;

					this.options.data = {};
					var maxAndMin = getMaxMark.call(this, series);
					this.options.data.max = maxAndMin.max;
					this.options.data.min = maxAndMin.min;
					this.options.data.step = maxAndMin.step;


					// 画布内容偏移的距离
					this.options.padding_left = Math.round(maxAndMin.maxPaddingLeftWidth + 30);
					var xaxis = this.options.xaxis;
					var leftMinWidth = ctx.measureText(xaxis[0].value).width / 2 + 10;
					var rightMinWidth = ctx.measureText(xaxis[xaxis.length - 1].value).width / 2 + 10;

					if (this.options.padding_left < leftMinWidth) {
						this.options.padding_left = leftMinWidth;
					}

					// 第二坐标轴折线数据
					if (this.options.series2 && this.options.series2.length !== 0) {
						var series2 = this.options.series2;
						var maxAndMin2 = getMaxMark.call(this, series2);
						this.options.data.max2 = maxAndMin2.max;
						this.options.data.min2 = maxAndMin2.min;
						this.options.data.step2 = maxAndMin2.step;
						this.options.padding.right = Math.round(maxAndMin.maxPaddingLeftWidth + 20);
					}

					if (this.options.angle && this.options.angle != 0) {
						this.options.padding.right = ctx.measureText(this.options.xaxis[0].value).width * Math.cos(2 * Math.PI * (this.options.angle / 360)) + 10;
					}

					if (this.options.padding.right < rightMinWidth) {
						this.options.padding.right = rightMinWidth;
					}



					if (this.options.series2 && this.options.series2.length !== 0) {
						this.options.drawWidth = Math.round(ctx.canvas.width - this.options.padding.right);
						// 加水印
						watermark.apply(this, [ctx, 100 + this.options.padding.right, 10, 82, 20]);
					} else {
						this.options.drawWidth = Math.round(ctx.canvas.width - this.options.padding.right);
						// 加水印
						watermark.apply(this, [ctx, 100 + this.options.padding.right, 10, 82, 20]);
					}

					// 绘制坐标轴
					new DrawXY(this.options);
					// 绘制分时折线图
					new DrawLine(this.options);
					this.addInteractive();

				};

				//添加交互
				ChartLine.prototype.addInteractive = function () {
					var canvas = this.options.canvas;
					var dateArr = this.options.xaxis;
					var series = this.options.series;
					var series2 = this.options.series2;
					var ctx = this.options.context;
					var padding_left = this.options.padding_left;
					var padding_top = this.options.canvas_offset_top;
					var dpr = this.options.dpr;
					var unit; //单位宽度
					if (dateArr.length === 1) {
						unit = this.options.drawWidth - padding_left;
					} else {
						unit = (this.options.drawWidth - padding_left) / (dateArr.length - 1); //单位宽度
					}
					var that = this;
					var y_max = this.options.data.max;
					var y_min = this.options.data.min;
					var y_max2 = this.options.data.max2;
					var y_min2 = this.options.data.min2;
					var c_1_height = this.options.c_1_height;
					var radius = this.options.pointRadius / dpr;


					common.addEvent(that.eventDiv, "touchmove", function (e) {

						var touchEvent = e.changedTouches[0];

						var winX = touchEvent.offsetX || (touchEvent.clientX - that.container.getBoundingClientRect().left);
						var winY = touchEvent.offsetY || (touchEvent.clientY - that.container.getBoundingClientRect().top);

						// var winX, winY;
						// //浏览器检测，获取到相对元素的x和y
						// if (e.layerX) {
						//     winX = e.layerX;
						//     winY = e.layerY;
						// } else if (e.x) {
						//     winX = e.x;
						//     winY = e.y;
						// }
						try {
							e.preventDefault();
						} catch (error) {

						}

						eventHanlder.call(that, winX, winY);
					});

					//添加交互事件
					common.addEvent(that.eventDiv, "mousemove", function (e) {

						var winX = e.clientX - that.container.getBoundingClientRect().left;
						var winY = e.clientY - that.container.getBoundingClientRect().top;

						try {
							e.preventDefault();
						} catch (error) {

						}
						eventHanlder.call(that, winX, winY);

					});

					common.addEvent(that.eventDiv, "touchend", function (e) {
						if (that.options.interOption) {
							var circles = that.options.interOption.circles;
							that.options.interOption.tips.style.display = "none";
							for (var k = 0, kLen = circles.length; k < kLen; k++) {
								circles[k].style.display = "none";
							}
							that.options.interOption.yLine.style.display = "none";
						}
						try {
							e.preventDefault();
						} catch (error) {

						}
					});

					common.addEvent(that.eventDiv, "mouseleave", function (e) {
						// if (that.options.interOption) {
						//     var circles = that.options.interOption.circles;
						//     that.options.interOption.tips.style.display = "none";
						//     for (var k = 0, kLen = circles.length; k < kLen; k++) {
						//         circles[k].style.display = "none";
						//     }
						//     that.options.interOption.yLine.style.display = "none";
						// }
						// try{
						//     e.preventDefault();
						// }
						// catch(error){

						// }
					});

					function eventHanlder(winX, winY) {
						try {

							//转换为canvas中的坐标
							var canvasX = winX * dpr - padding_left;
							var canvasY = winY * dpr - padding_top;

							//下标
							var cursor = 0;
							//用来显示tips的一组数据
							var tipArr = [];
							//获取交互需要的坐标数据
							if (canvasX % unit < unit / 2) {
								cursor = Math.floor(canvasX / unit);
							} else {
								cursor = Math.ceil(canvasX / unit);
							}

							if (cursor < 0) { cursor = 0; }
							if (cursor > dateArr.length - 1) { cursor = dateArr.length - 1; }

							for (var i = 0, len = series.length; i < len; i++) {
								if (series[i].data != null && series[i].data.length != 0) {
									tipArr.push({
										color: series[i].color,
										data: ((series[i].data[cursor] === undefined || series[i].data[cursor] === null) ? "" : series[i].data[cursor]) + (series[i].suffix || ""),
										name: series[i].name,
										y: series[i].data[cursor] === undefined ? padding_top + common.get_y.call(that, 0) : padding_top + common.get_y.call(that, series[i].data[cursor]),
										suffix: (series[i].suffix || "")
									});

								}

							}
							if (that.options.series2) {
								for (i = 0, len = series2.length; i < len; i++) {
									tipArr.push({
										color: series2[i].color,
										data: ((series2[i].data[cursor] === undefined || series2[i].data[cursor] === null) ? "" : series2[i].data[cursor]) + (series2[i].suffix || ""),
										name: series2[i].name,
										y: series2[i].data[cursor] === undefined ? padding_top + c_1_height / 2 : padding_top + (c_1_height - c_1_height * (series2[i].data[cursor] - y_min2) / (y_max2 - y_min2)),
										suffix: (series2[i].suffix || "")
									});
								}
							}

							//排序
							tipArr.sort(function (a, b) {
								return a.y - b.y;
							});
							if (tipArr.length == 0) {
								return;
							}
							var left = 0,
								flag = false;
							if (dateArr.length == 1) {
								left = (cursor * unit / dpr + unit / dpr * (1 / 2) + padding_left / dpr);
							} else {
								left = (cursor * unit / dpr + padding_left / dpr);
							}

							//添加交互
							if (!that.options.interOption) {
								that.options.interOption = {};
								//提示
								var tips = document.createElement("div");
								tips.className = "chart_line_tips";

								that.container.appendChild(tips);

								tips.style.top = (tipArr[0].y + tipArr[tipArr.length - 1].y) / 2 / dpr + "px";
								var title = document.createElement("div");
								title.className = "chart_line_tips_title";
								title.innerHTML = dateArr[cursor].value;
								tips.appendChild(title);

								//交互的竖线
								var yLine = document.createElement("div");
								yLine.className = "chart_line_yline";
								//交互的竖线
								yLine.style.left = left + "px";
								yLine.style.top = padding_top / dpr + "px";
								yLine.style.height = c_1_height / dpr + "px";
								that.container.appendChild(yLine);
								var circles = [];
								for (i = 0, len = tipArr.length; i < len; i++) {
									//tips内容
									var lineTip = document.createElement("div");
									lineTip.className = "chart_line_tips_line";
									var color = document.createElement("span");
									color.className = "chart_line_tips_color";
									color.style.backgroundColor = tipArr[i].color;
									lineTip.appendChild(color);
									var content = document.createElement("span");
									content.innerHTML = (that.options.showname ? tipArr[i].name : "") + tipArr[i].data
									lineTip.appendChild(content);
									tips.appendChild(lineTip);
									//圆圈
									var cir = document.createElement("div");
									cir.className = "chart_line_cir";
									cir.style.width = 2 * radius + "px";
									cir.style.height = 2 * radius + "px";
									cir.style.borderRadius = 2 * radius + "px";
									cir.style.top = (tipArr[i].y / dpr - radius) + "px";
									cir.style.left = (left - radius) + "px";
									cir.style.borderColor = tipArr[i].color;
									if (tipArr[i] === undefined || tipArr[i].data === tipArr[i].suffix) {
										cir.style.display = "none";
										lineTip.style.display = "none";
									} else {
										flag = true;
									}
									that.container.appendChild(cir);
									circles.push(cir);
								}
								if ((cursor * unit / dpr + padding_left / dpr) > canvas.width / 2) {
									tips.style.left = (left - padding_left / 2 - tips.clientWidth) + "px";
								} else {
									tips.style.left = (left + padding_left / 2) + "px";
								}
								that.options.interOption.tips = tips;
								that.options.interOption.yLine = yLine;
								that.options.interOption.circles = circles;
							} else {
								var tips = that.options.interOption.tips;

								var linTips = tips.children;
								linTips[0].innerHTML = dateArr[cursor].value;
								for (var j = 0, len = tipArr.length; j < len; j++) {
									if (tipArr[j].data === tipArr[j].suffix) {
										linTips[j + 1].style.display = "none";
									} else {
										flag = true;
										linTips[j + 1].style.display = "block";
										linTips[j + 1].children[0].style.backgroundColor = tipArr[j].color;
										linTips[j + 1].children[1].innerHTML = (that.options.showname ? tipArr[j].name : "") + " " + tipArr[j].data
									}
								}
								if (flag) {
									tips.style.display = "block";
								} else {
									tips.style.display = "none";
									tips.style.left = "-10000px";
								}
								if ((cursor * unit / dpr + padding_left / dpr) >= canvas.width / dpr / 2) {
									tips.style.left = (left - padding_left / 2 - tips.clientWidth) + "px";
								} else {
									tips.style.left = (left + padding_left / 2) + "px";
								}
								tips.style.top = (tipArr[0].y + tipArr[tipArr.length - 1].y) / 2 / dpr - 50 + "px";
								var yLine = that.options.interOption.yLine;
								yLine.style.left = left + "px";
								var circles = that.options.interOption.circles;
								for (var k = 0, kLen = tipArr.length; k < kLen; k++) {
									if (tipArr[k].data === tipArr[k].suffix) {
										circles[k].style.display = "none";
									} else {
										circles[k].style.display = "block";
										circles[k].style.top = tipArr[k].y / dpr - radius + "px";
										circles[k].style.left = (left - radius) + "px";
										circles[k].style.borderColor = tipArr[k].color;
									}
								}
								if (flag) {
									that.options.interOption.tips.style.display = "block";
									yLine.style.display = "block";
								}
							}

							var padding_right = this.options.series2 ? padding_left : 10;

							//当超出坐标系框就不显示交互
							if (canvasX >= 0 && canvasX < (canvas.width - padding_left - padding_right + 3) && canvasY >= 0 && canvasY <= c_1_height && flag) {
								that.options.interOption.tips.style.display = "block";
								for (var k = 0, kLen = tipArr.length; k < kLen; k++) {
									if (tipArr[k].data === tipArr[k].suffix) {
										// circles[k].style.display = "none";
									} else {
										circles[k].style.display = "block";
									}
								}
								yLine.style.display = "block";
							} else {
								that.options.interOption.tips.style.display = "none";
								that.options.interOption.tips.style.left = "-10000px";
								for (var k = 0, kLen = circles.length; k < kLen; k++) {
									circles[k].style.display = "none";
								}
								yLine.style.display = "none";
							}
						} catch (e) {


						}

					}


				}


				// 重绘
				ChartLine.prototype.reDraw = function () {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					this.draw();
				}
				// 删除canvas画布
				ChartLine.prototype.clear = function (cb) {
					try {
						/*var ctx = this.options.context;
						ctx.save();
						ctx.fillStyle = "white";
						ctx.clearRect(0, -this.options.canvas_offset_top, this.options.canvas.width + this.options.drawWidth, this.options.canvas.height);
						var interOption = this.options.interOption;
						var yLine = interOption.yLine , 
							circles = interOption.circles,
							tips = interOption.tips;
						for (var k = 0, kLen = circles.length; k < kLen; k++) {
							this.container.removeChild(circles[k]);
						}
						this.container.removeChild(yLine);
						this.container.removeChild(tips);ctx.restore();*/
						this.container.innerHTML = "";
						if (this.options.interOption) {
							this.options.interOption = null;
						}

					} catch (e) {
						this.container.innerHTML = "";
					}
					if (cb) {
						cb();
					};
				}

				// 获取数组中的最大值
				function getMaxMark(series) {

					var seriesLength = series.length;
					var arr = [];
					for (var i = 0; i < seriesLength; i++) {
						arr = arr.concat(series[i].data);
					}
					arr.sort(function (a, b) {
						return a * 1 - b * 1;
					});
					var min = arr[0] * 1;
					var max = arr[arr.length - 1] * 1;
					var middle = (max + min) / 2; /*清除中值产生的小数点*/
					if (max - min > 1 && (middle - Math.floor(middle) > 0)) {
						min = arr[0] - (middle - Math.floor(middle));
						middle = Math.floor(middle);
					}

					var tempObj = {};
					/*特殊判断一下*/
					if (max * min > 0 && min !== max && (max - min) / Math.abs(max) <= 0.5) {
						tempObj = divide(this.options.sepeNum, [max - middle, min - middle]);
						if ((tempObj.max + middle) * (tempObj.min + middle) < 0) {
							var tempOffset = Math.min(Math.abs(tempObj.max + middle), Math.abs(tempObj.min + middle));
							tempObj.max = max >= 0 ? (tempObj.max + middle + tempOffset) : 0;
							tempObj.min = max >= 0 ? 0 : (tempObj.min + middle - tempOffset);
						} else {
							tempObj.max += middle;
							tempObj.min += middle;
						}
					} else {
						tempObj = divide(this.options.sepeNum, arr);
					}

					var ctx = this.options.context;
					if (tempObj.stepHeight >= 10000) {
						var backWidth = ctx.measureText(common.format_unit(tempObj.stepHeight)).width - ctx.measureText(common.format_unit(parseInt(tempObj.stepHeight))).width;
					} else {
						var backWidth = ctx.measureText(tempObj.stepHeight).width - ctx.measureText(parseInt(tempObj.stepHeight)).width;
					}
					var frontMaxWidth = ctx.measureText(common.format_unit(parseInt(tempObj.max))).width;
					var frontMinWidth = ctx.measureText(common.format_unit(parseInt(tempObj.min))).width;
					var frontWidth = frontMaxWidth > frontMinWidth ? frontMaxWidth : frontMinWidth;
					var maxPaddingLeftWidth = frontWidth + backWidth;

					if (tempObj.max == 0 && tempObj.min == 0) {
						tempObj.max = Math.ceil(this.options.sepeNum / 2);
						tempObj.min = -Math.floor(this.options.sepeNum / 2);
						tempObj.stepHeight = 1;
					}
					return {
						max: tempObj.max,
						min: tempObj.min,
						step: tempObj.stepHeight,
						maxPaddingLeftWidth: maxPaddingLeftWidth
					};
				}

				return ChartLine;
			})();

			module.exports = ChartLine;


			/***/
		}),
/* 55 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制直角坐标系
			 */
			var extend = __webpack_require__(21);
			/*主题*/
			var theme = __webpack_require__(7);
			var common = __webpack_require__(13);
			/*绘制虚线*/
			var DrawDashLine = __webpack_require__(8);
			// 格式化坐标
			var XYF = __webpack_require__(9);
			// 自定义X轴标识
			var self_fillText = __webpack_require__(56);
			var DrawXY = (function () {
				//构造方法
				function DrawXY(options) {
					/*设置默认参数*/
					this.options = extend(theme.defaulttheme, options);
					/*绘图*/
					this.draw();
				};
				/*绘图*/
				DrawXY.prototype.draw = function () {

					var ctx = this.options.context;

					/*Y轴上的最大值*/
					var y_max = this.options.data.max;
					var y_max2 = this.options.data.max2;
					var step = this.options.data.step;
					/*Y轴上的最小值*/
					var y_min = this.options.data.min;
					var y_min2 = this.options.data.min2;
					var step2 = this.options.data.step2;

					var series2 = this.options.series2;

					/*Y轴上分隔线数量*/
					var sepe_num = this.options.sepeNum || 4;
					/*开盘收盘时间数组*/
					var oc_time_arr = this.options.xaxis;

					/*K线图的高度*/
					var k_height = this.options.c_1_height;

					ctx.beginPath();
					ctx.lineWidth = 1;
					ctx.strokeStyle = '#ccc';

					ctx.rect(XYF(this.options.padding_left), 0.5, Math.round(this.options.drawWidth - this.options.padding_left), Math.round(k_height));
					ctx.stroke();

					/*Y轴标识线列表*/
					var line_list_array = getLineList(y_max, y_min, sepe_num, k_height, step);
					drawYMark.call(this, ctx, y_max, y_min, line_list_array, false);

					if (series2 && (series2.length !== 0) && series2.some(function (item) {
						return item.data.length !== 0;
					})) {
						var line_list_array2 = getLineList(y_max2, y_min2, sepe_num, k_height, step2);
						drawYMark.call(this, ctx, y_max, y_min, line_list_array2, true);
					}

					// 绘制横坐标刻度
					drawXMark.apply(this, [ctx, k_height, oc_time_arr]);
				};
				// 绘制坐标轴左侧刻度
				function drawYMark(ctx, y_max, y_min, line_list_array, flag) {
					var step = flag ? this.options.data.step2 : this.options.data.step;
					ctx.save();
					// var sepe_num = line_list_array.length;
					ctx.fillStyle = this.options.font.color == undefined ? '#000' : this.options.font.color;
					ctx.textAlign = 'right';
					ctx.lineWidth = 1;

					var dpr = this.options.dpr;

					for (var i = 0, item; item = line_list_array[i]; i++) {
						ctx.beginPath();

						if (i == 0 || i == line_list_array.length - 1) {
							// ctx.strokeStyle = '#ccc'; 
							// ctx.moveTo(this.options.padding_left, Math.round(item.y));
							// ctx.lineTo(this.options.drawWidth, Math.round(item.y));
							// ctx.stroke();
						} else {

							ctx.strokeStyle = '#e6e6e6';
							DrawDashLine(ctx, this.options.padding_left, item.y, this.options.drawWidth, item.y, 3);
						}

						// 绘制纵坐标刻度
						// ctx.textAlign = 'left';
						if (this.options.series2 && (this.options.series2.length !== 0) && flag) {
							// ctx.fillText(common.format_unit(item.num/1,this.options.decimalCount), this.options.padding_left - 10, item.y +10);
							ctx.textAlign = 'left';
							ctx.fillText(roundFloat(item.num / 1, step), XYF(this.options.drawWidth + 5), XYF(item.y + 5 * dpr));
						} else {
							ctx.textAlign = 'right';
							ctx.fillText(roundFloat(item.num / 1, step), XYF(this.options.padding_left - 5), XYF(item.y + 5 * dpr));
						}
					}
					ctx.restore();
				}

				/*绘制横坐标刻度值*/
				function drawXMark(ctx, k_height, oc_time_arr) {

					ctx.save();
					ctx.lineWidth = 1;
					var dpr = this.options.dpr;
					var padding_left = this.options.padding_left;
					ctx.textAlign = 'center';
					if (this.options.font) {
						ctx.fillStyle = this.options.font.color == undefined ? '#000' : this.options.font.color;
					} else {
						ctx.fillStyle = '#000';
					}

					/*画布宽度*/
					var k_width = this.options.drawWidth;
					// var y_date = this.options.c_1_height;
					var tempDate;
					// var timeSpacing = (this.options.width * dpr - padding_left) / oc_time_arr.length + padding_left;
					var arr_length = oc_time_arr.length;
					for (var i = 0; i < arr_length; i++) {
						ctx.beginPath();
						tempDate = oc_time_arr[i];
						var textWidth = ctx.measureText(tempDate).width;
						var cos_w = Math.cos(2 * Math.PI / 360 * this.options.angle) * textWidth;
						if (tempDate.show == undefined ? true : tempDate.show) {

							if (arr_length == 1) {
								var x = (this.options.drawWidth - this.options.padding_left) / 2 + this.options.padding_left;
								ctx.fillText(tempDate.value, XYF(x), XYF(this.options.c_1_height + 20 * dpr));
							} else {
								// if(this.options.series2){

								//     var x = i * (k_width - padding_left) / (arr_length-1) + padding_left;
								//     ctx.fillText(tempDate.value, x, this.options.c_1_height+20);
								// }else{

								//     var x = i * (k_width - padding_left) / (arr_length-1) + padding_left;
								//     // ctx.fillText(tempDate.value, x , this.options.c_1_height+20);

								//     if(i == 0){
								//         ctx.fillText(tempDate.value, i * (k_width - padding_left) / (arr_length-1) + padding_left + ctx.measureText(tempDate.value).width/2, this.options.c_1_height+20);
								//     }else if(i == arr_length - 1){
								//         ctx.fillText(tempDate.value, this.options.drawWidth - ctx.measureText(tempDate.value).width/2, this.options.c_1_height+20);
								//     }else{
								//         ctx.fillText(tempDate.value, x, this.options.c_1_height+20);   
								//     }
								// }

								var x = i * (k_width - padding_left) / (arr_length - 1) + padding_left;
								// ctx.fillText(tempDate.value, x , this.options.c_1_height+20);

								if (this.options.angle && this.options.angle != 0) {

									// ctx.beginPath();
									// ctx.arc(x+ctx.measureText(tempDate.value).width/2,this.options.c_1_height,5,0,2*Math.PI,10);
									// ctx.stroke();
									// self_fillText(tempDate.value,ctx,XYF(x),XYF(this.options.c_1_height),this.options.angle);
									self_fillText(tempDate.value, ctx, XYF(x), XYF(this.options.c_1_height + 10 * dpr), this.options.angle);
								} else {
									if (this.options.drawWidth > (x + ctx.measureText(tempDate.value).width / 2) || i == (arr_length - 1)) {
										// if(i == 0){
										//     ctx.fillText(tempDate.value, XYF(x + ctx.measureText(tempDate.value).width/2), XYF(this.options.c_1_height+20*dpr));
										// }else if(i == (arr_length - 1)){
										//     ctx.fillText(tempDate.value, XYF(this.options.drawWidth - ctx.measureText(tempDate.value).width/2), XYF(this.options.c_1_height+20*dpr));
										// }else{
										//     ctx.fillText(tempDate.value, XYF(x), XYF(this.options.c_1_height+20*dpr));   
										// }

										ctx.fillText(tempDate.value, XYF(x), XYF(this.options.c_1_height + 20 * dpr));
									}

								}

							}
						}

						if (tempDate.showline == undefined ? true : tempDate.showline) {
							var x = i * (k_width - padding_left) / (arr_length - 1) + padding_left;
							if (i == 0 || i == (arr_length - 1)) {
								// ctx.strokeStyle = '#ccc';
								// ctx.moveTo(i * (k_width - padding_left) / (arr_length-1) + padding_left,0);
								// ctx.lineTo(i * (k_width - padding_left) / (arr_length-1) + padding_left,this.options.c_1_height);
								// ctx.stroke();
							} else {

								ctx.strokeStyle = '#e6e6e6';
								DrawDashLine(ctx, x, 0, i * (k_width - padding_left) / (arr_length - 1) + padding_left, this.options.c_1_height + 2, 3);
							}

						}
					}

					// 绘制坐标刻度
					ctx.restore();
				}

				/*Y轴标识线列表*/
				function getLineList(y_max, y_min, sepe_num, k_height, step) {
					var ratio = step;
					var result = [];
					for (var i = 0; i <= sepe_num; i++) {
						result.push({
							num: (y_min + i * ratio),
							x: 0,
							y: k_height - (i / (sepe_num)) * k_height
						});
					}
					return result;
				}


				function roundFloat(f, stepHeight) {
					var precise = 1;
					if (stepHeight.toString().indexOf(".") !== -1) {
						precise = stepHeight.toString().length - stepHeight.toString().indexOf(".") - 1;
					}
					var m = Math.pow(10, precise);
					return common.format_unit(Math.round(f * m) / m, precise);
				}

				return DrawXY;
			})();

			module.exports = DrawXY;

			/***/
		}),
/* 56 */
/***/ (function (module, exports) {

			/**
			 * 
			 */

			function self_fillText(text, ctx, x, y, angle, flag) {

				ctx.save();
				ctx.textBaseline = "middle";
				ctx.textAlign = "left";
				if (flag) {
					ctx.translate(x, y);
					ctx.rotate((Math.PI / 180) * angle);
					ctx.fillText(text, 0, 0);
					ctx.translate(-x, -y);
					ctx.rotate(-(Math.PI / 180) * angle);
				} else {
					ctx.translate(x, y);
					ctx.rotate((Math.PI / 180) * angle);

					// var len_arr = text.split("");
					// var length = len_arr.length;
					// var temp_y = y;
					// for(var i = 0;i<length;i++){

					// 	var c = text.substr(i,1);
					// 	ctx.fillText(c,x,temp_y);
					// 	temp_y = temp_y + 13;
					// }

					ctx.fillText(text, 0, 0);
					ctx.translate(-x, -y);
					ctx.rotate(-(Math.PI / 180) * angle);

				}

				ctx.restore();
			}

			module.exports = self_fillText;

			/***/
		}),
/* 57 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制折线图
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     type:    "TL"(分时图),"DK"(日K线图),"WK"(周K线图),"MK"(月K线图)
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			
			 * }
			 *
			 */

			/*继承*/
			var extend = __webpack_require__(21);
			/*主题*/
			var theme = __webpack_require__(7);
			/*工具*/
			var common = __webpack_require__(13);
			// 格式化坐标
			var XYF = __webpack_require__(9);
			var DrawLine = (function () {
				function DrawLine(options) {

					// 设置默认参数
					this.options = extend(theme.defaulttheme, options);
					// 绘图
					this.draw();
				};

				// 绘图
				DrawLine.prototype.draw = function () {

					var ctx = this.options.context;
					ctx.lineWidth = 1;
					// 第一个坐标轴折线数据
					var series = this.options.series;
					// 横坐标数据
					// var xaxis = this.options.xaxis;
					for (var i = 0, line; line = series[i]; i++) {
						// 填充颜色
						ctx.fillStyle = line.color == undefined ? "#333" : line.color;
						// 画笔颜色
						ctx.strokeStyle = line.color == undefined ? "#333" : line.color;
						drawLine.apply(this, [ctx, line, false]);

						if (line.showpoint) {
							drawPoint.apply(this, [ctx, line, false]);
						} else if (line.data.length == 1) {
							drawPoint.apply(this, [ctx, line, false]);
						}
					}
					// 第二个坐标轴折线数据
					if (this.options.series2) {
						var series2 = this.options.series2;

						for (var i = 0, line; line = series2[i]; i++) {
							// 填充颜色
							ctx.fillStyle = line.color == undefined ? "#333" : line.color;
							// 画笔颜色
							ctx.strokeStyle = line.color == undefined ? "#333" : line.color;
							drawLine.apply(this, [ctx, line, true]);

							if (line.showpoint) {
								drawPoint.apply(this, [ctx, line, true]);
							}

						}
					}


				};

				// 绘制折线
				function drawLine(ctx, line, flag) {
					// 保存画笔状态
					ctx.save();
					var arr = line.data;
					var arr_length = arr.length;

					ctx.beginPath();
					var pre_item = 0;
					for (var i = 0; i < arr_length; i++) {
						var item = arr[i];
						if (item != null && item !== "" && item != undefined) {
							var x = ((this.options.drawWidth - this.options.padding_left) / (arr_length - 1)) * (i) + this.options.padding_left;
							if (flag) {
								var y = get_y.call(this, item);
							} else {
								var y = common.get_y.call(this, item);
							}
							if (i == 0) {
								ctx.moveTo(this.options.padding_left, y);
							} else if (i == arr_length - 1) {
								ctx.lineTo(x, y);
							} else {
								if (pre_item == null || pre_item == "" || pre_item == undefined) {
									ctx.moveTo(x, y);
								} else {
									ctx.lineTo(x, y);
									ctx.moveTo(x, y);
								}

							}
						}

						pre_item = item;

					}

					// ctx.fill();
					ctx.stroke();
					// 恢复画笔状态
					ctx.restore();
				}

				// 绘制折线节点（连接点）
				function drawPoint(ctx, line, flag) {
					// 保存画笔状态
					ctx.save();
					var arr = line.data;
					var arr_length = arr.length;

					// 节点（折线连接点半径）	
					var pointRadius = this.options.pointRadius;

					for (var i = 0; i < arr_length; i++) {
						var item = arr[i];
						if (item != null && item !== "" && item != undefined) {
							ctx.beginPath();
							if (arr_length == 1) {
								var sepe_num = 1;
							} else {
								var sepe_num = arr_length - 1;
							}

							if (arr_length == 1) {
								var x = (this.options.drawWidth - this.options.padding_left) / 2 + this.options.padding_left;
							} else {
								var x = ((this.options.drawWidth - this.options.padding_left) / sepe_num) * (i) + this.options.padding_left;
							}

							if (flag) {
								var y = get_y.call(this, item);
							} else {
								var y = common.get_y.call(this, item);
							}

							if (i == 0) {
								ctx.arc(XYF(x), XYF(y), pointRadius, 0, Math.PI * 2, true);
								ctx.fill();
							} else {
								ctx.arc(XYF(x), XYF(y), pointRadius, 0, Math.PI * 2, true);
								ctx.fill();
							}

						}

					}
					// 恢复画笔状态
					ctx.restore();
				}

				// 图表y轴坐标计算
				function get_y(y) {
					return this.options.c_1_height - (this.options.c_1_height * (y - this.options.data.min2) / (this.options.data.max2 - this.options.data.min2));
				}
				// 图表x轴坐标计算
				function get_x(year_num, quarter_num) {
					var group = this.options.group;
					var groupUnit = this.options.groupUnit;
					var padding_left = this.options.padding_left;
					var year_sepe = this.options.group.rect_w - this.options.group.bar_w;
					var quarter_sepe = this.options.groupUnit.rect_w - this.options.groupUnit.bar_w;
					return group.rect_w * year_num + padding_left + groupUnit.rect_w * quarter_num + year_sepe / 2 + quarter_sepe / 2;
				}


				return DrawLine;
			})();

			module.exports = DrawLine;

			/***/
		}),
/* 58 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制web分时图
			 *
			 */

			// 绘制坐标轴
			var DrawXY = __webpack_require__(59);
			// 主题
			var theme = __webpack_require__(7);
			// 获取分时图数据
			var GetDataTime = __webpack_require__(61);
			var getChangePointData = __webpack_require__(63);
			// 工具
			var common = __webpack_require__(60);
			var draw_dash = __webpack_require__(25);
			// 拓展，合并，复制
			var extend = __webpack_require__(21);
			// 交互效果
			var Interactive = __webpack_require__(64);
			// 水印
			var watermark = __webpack_require__(22);
			var drawPositionChange = __webpack_require__(67);

			var ChartTime = (function () {

				// 构造函数
				function ChartTime(options) {
					this.defaultoptions = theme.draw_xy_web;
					this.options = {};
					// this.options = extend(this.defaultoptions, options);
					this.options = extend(this.defaultTheme, this.options, this.defaultoptions, options);

					// 图表容器
					this.container = document.getElementById(options.container);

					this.container.className = this.container.className.replace(/emcharts-container/g, "").trim();
					this.container.className = this.container.className + " emcharts-container";
					// 图表加载完成事件
					this.onChartLoaded = options.onChartLoaded == undefined ? function (op) {

					} : options.onChartLoaded;

				}

				// 初始化
				ChartTime.prototype.init = function () {
					this.options.chartType = "TL";
					var canvas = document.createElement("canvas");

					this.container.style.position = "relative";
					// 容器中添加画布
					this.container.appendChild(canvas);
					// 画布
					try {
						var ctx = canvas.getContext('2d');
					} catch (error) {
						canvas = window.G_vmlCanvasManager.initElement(canvas);
						var ctx = canvas.getContext('2d');
					}
					this.options.canvas = canvas;
					this.options.context = ctx;
					// 设备像素比
					var dpr = this.options.dpr;


					// 画布的宽和高
					canvas.width = this.options.width * dpr;
					canvas.height = this.options.height * dpr;

					this.options.y_sepe_num = 13;
					// 画布向下偏移的距离
					this.options.canvas_offset_top = canvas.height / this.options.y_sepe_num;
					// 行情图表（分时图或K线图）和成交量图表的间距
					this.options.k_v_away = canvas.height / this.options.y_sepe_num;
					// 缩放默认值
					this.options.scale_count = 0;
					// 画布上第一个图表的高度
					this.options.c_k_height = this.options.c_1_height = canvas.height * 8 / this.options.y_sepe_num;
					this.options.c_v_height = canvas.height * 3 / this.options.y_sepe_num;
					this.options.unit_height = canvas.height * 1 / this.options.y_sepe_num;
					this.options.c1_y_top = canvas.height * 1 / this.options.y_sepe_num;
					this.options.c2_y_top = canvas.height * 9 / this.options.y_sepe_num;

					canvas.style.width = this.options.width + "px";
					canvas.style.height = this.options.height + "px";
					canvas.style.border = "0";

					// 画布上部内间距
					ctx.translate("0", Math.round(this.options.canvas_offset_top));
					// 画笔参数设置
					this.options.color = {};
					this.options.color.strokeStyle = 'rgba(230,230,230, 1)';
					this.options.color.fillStyle = '#c8c8c8';
					ctx.fillStyle = this.options.color.fillStyle;
					ctx.font = "12px Arial";
					ctx.lineWidth = 1 * this.options.dpr;
					ctx.strokeStyle = 'rgba(230,230,230, 1)';

					this.options.padding = {};
					this.options.padding.left = ctx.measureText("10000").width + 20;
					this.options.padding.right = ctx.measureText("+10.00%").width;
					this.options.padding.top = 0;
					this.options.padding.bottom = 0;
				};

				// 绘图
				ChartTime.prototype.draw = function (callback) {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					// 初始化交互
					var inter = this.options.interactive = new Interactive(this.options);
					// 显示loading效果
					inter.showLoading();
					var _this = this;
					/*根据股票编码指示盘前*/
					var codeTypeNumber = this.options.code.charAt(this.options.code.length - 1);
					if (codeTypeNumber == 7 || codeTypeNumber == 5) {
						this.options.isCR = false;
					}
					var param = {
						code: this.options.code,
						type: this.options.type,
						isCR: !!this.options.isCR
					};

					try {
						GetDataTime(param,
							function (error, data) {
								if (error) {
									// 暂无数据
									inter.showNoData();
									// 隐藏loading效果
									inter.hideLoading();
								} else {

									if (data) {
										// debugger;
										dataCallback.apply(_this, [data]);
									} else {
										dataCallback.apply(_this, [
											[]
										]);
									}
									/*绑定事件*/
									bindEvent.call(_this, _this.options.context);
								}
							});
					} catch (e) {
						// 暂无数据
						inter.showNoData();
						// 隐藏loading效果
						inter.hideLoading();
					}

				};

				/*持续绘图*/
				ChartTime.prototype.intervalDraw = function () {
					var currentIndex;
					var currentMinute = (new Date()).getMinutes();
					var timer = this.options.intervalTimer;
					var _this = this;
					if (timer) {
						clearInterval(timer);
					}
					this.options.intervalTimer = setInterval(function () {
						var dateNow = new Date();
						var tempMinute = dateNow.getMinutes();
						var flag = true;
						if (dateNow.getHours() >= 15 && dateNow.getMinutes() >= 0) {
							clearInterval(_this.options.intervalTimer);
							flag = false;
						}
						if (dateNow.getHours() <= 9 && dateNow.getMinutes() < 30 && _this.options.isCR === false) {
							clearInterval(_this.options.intervalTimer);
							flag = false;
						}
						if (dateNow.getHours() <= 9 && dateNow.getMinutes() < 15 && _this.options.isCR === true) {
							clearInterval(_this.options.intervalTimer);
							flag = false;
						}
						if (tempMinute !== currentMinute && flag) {
							console.log("绘制");
							currentMinute = tempMinute;
							drawContinuePoint.call(_this);
						}
					}, 1000 * 10);

					function drawContinuePoint() {
						var _this = this;
						var currentMax = _this.options.data.max;
						var currentMin = _this.options.data.min;
						var currentVMax = _this.options.data.v_max;
						var param = {
							code: _this.options.code,
							type: _this.options.type,
							isCR: !!_this.options.isCR
						};
						GetDataTime(param, function (error, data) {
							if (error) {
								_this.options.interactive.showNoData();
							} else {
								currentIndex = data.data.length - 2;
								var max = data.max;
								var min = data.min;
								var v_max = data.v_max;
								_this.options.data = data;
								if (max > currentMax || min < currentMin || v_max < currentVMax) {
									allRePaint.call(_this, data);
								} else {
									addPoint.call(_this, data);
								}
								currentIndex = _this.options.data.data.length - 1;
							}
						});
					}

					function allRePaint(data) {
						this.clear();
						dataCallback.apply(this, [data]);
					}

					function addPoint(data) {
						var ctx = this.options.context;

						addAvgLine.call(this, ctx, data, currentIndex);
						addPriceLine.call(this, ctx, data, currentIndex);
						addVolume.call(this, ctx, data, currentIndex);
					}

					function addAvgLine(ctx, data, currentIndex) {
						var x1 = common.get_x.call(this, currentIndex + 1);
						var y1 = common.get_y.call(this, data.data[currentIndex].avg_cost);
						var x2 = common.get_x.call(this, data.data.length);
						var y2 = common.get_y.call(this, data.data[data.data.length - 1].avg_cost);
						ctx.save();
						ctx.strokeStyle = "#F1CA15";
						ctx.beginPath();
						ctx.moveTo(x1, y1);
						ctx.lineTo(x2, y2)
						ctx.stroke();
						ctx.restore();
					}

					function addPriceLine(ctx, data, currentIndex) {
						var y_min = common.get_y.call(this, this.options.data.min);
						var x1 = common.get_x.call(this, currentIndex + 1);
						var y1 = common.get_y.call(this, data.data[currentIndex].price);
						var x2 = common.get_x.call(this, data.data.length);
						var y2 = common.get_y.call(this, data.data[data.data.length - 1].price);
						ctx.save();
						ctx.strokeStyle = "#639EEA";
						ctx.beginPath();
						ctx.moveTo(x1, y1);
						ctx.lineTo(x2, y2)
						ctx.stroke();

						var grad = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
						/* 指定几个颜色 */
						grad.addColorStop(0, 'rgba(200,234,250,0.7)');
						grad.addColorStop(1, 'rgba(255,255,255,0)');
						ctx.beginPath();
						ctx.fillStyle = grad;
						ctx.beginPath();
						ctx.moveTo(x1, y1);
						ctx.lineTo(x2, y2);
						ctx.lineTo(x2, y_min);
						ctx.lineTo(x1, y_min);
						ctx.lineTo(x1, y1)
						ctx.fill();
						ctx.restore();
					}

					function addVolume(ctx, data, currentIndex) {
						var len = data.data.length;
						var v_height = ctx.canvas.height / 4;
						var v_base_height = v_height * 0.9;
						var x = common.get_x.call(this, len);;
						var bar_height = v_height * data.data[len - 1].volume / data.v_max;
						var y = v_base_height - bar_height;
						var bar_w = this.options.rect_unit.bar_w;

						ctx.save();
						ctx.fillStyle = this.options.avg_cost_color;
						ctx.rect(x - bar_w / 2, y, bar_w, bar_height);
						ctx.restore();
					}

				}

				// 重绘
				ChartTime.prototype.reDraw = function () {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					dataCallback.call(this);
				}
				/*删除canvas画布*/
				ChartTime.prototype.clear = function (cb) {
					this.container.innerHTML = "";
				}
				/*回调函数*/
				function dataCallback(data) {
					this.options.data = data == undefined ? this.options.data : data;

					// 图表交互
					var inter = this.options.interactive;

					try {
						// 保留的小数位
						this.options.pricedigit = data == undefined ? this.options.pricedigit : data.pricedigit;
						// 获取单位绘制区域
						var rect_unit = common.get_rect.apply(this, [this.options.context.canvas, this.options.data.total]);
						this.options.rect_unit = rect_unit;

						// 绘制坐标轴
						new DrawXY(this.options);
						//绘制分时图
						draw_line.call(this);
						//绘制平均成本线
						draw_avg.call(this);
						//绘制交易量
						draw_v.call(this);
						//绘制盘口动态
						if (this.options.type === "r") {
							//draw_positionChange.call(this);
						}
						// this.intervalDraw();
						// 隐藏loading效果
						inter.hideLoading();
						inter.showTipsTime(this.options.padding.left, common.get_y.call(this, data.data[0].price), data.data, data.data.length - 1);
						// 图表加载完成时间
						this.onChartLoaded(this);
						watermark.apply(this, [this.options.context, 95 + this.options.padding.right, 10, 82, 20]);
					} catch (e) {
						// 暂无数据
						// inter.showNoData();
						// 隐藏loading效果
						inter.hideLoading();
					}

					return true;
				}

				// 绑定事件
				function bindEvent(ctx) {
					var _this = this;
					var canvas = ctx.canvas;
					var inter = this.options.interactive;
					var container = this.container;

					common.addEvent.call(this, canvas, "touchmove", function (event) {
						dealEvent.apply(_this, [inter, event.changedTouches[0]]);
						// dealEvent.apply(_this,[inter,event]);
						try {
							event.preventDefault();
						} catch (e) {
							event.returnValue = false;
						}
					});

					common.addEvent.call(this, canvas, "mousemove", function (event) {
						dealEvent.apply(_this, [inter, event]);
						try {
							event.preventDefault();
						} catch (e) {
							event.returnValue = false;
						}
					});

					common.addEvent.call(this, container, "mouseleave", function (event) {
						inter.hide();
						try {
							event.preventDefault();
						} catch (e) {
							event.returnValue = false;
						}
					});

					common.addEvent.call(this, canvas, "mouseenter", function (event) {
						dealEvent.apply(_this, [inter, event]);
						try {
							event.preventDefault();
						} catch (e) {
							event.returnValue = false;
						}
					});

				}
				// 处理交互事件
				function dealEvent(inter, eventposition) {
					inter.show();
					// 画布对象
					var canvas = this.options.canvas;
					// 分时行情数据
					var time_data = this.options.data.data;
					// 单位绘制区域
					var rect_unit = this.options.rect_unit;
					// 单位绘图区域的宽度
					var rect_w = rect_unit.rect_w;
					// K线柱体的宽度
					// var bar_w = rect_unit.bar_w;
					// 鼠标事件位置
					var w_x = (eventposition.clientX - this.container.getBoundingClientRect().left);
					var w_y = (eventposition.clientY - this.container.getBoundingClientRect().top);

					// 鼠标在画布中的坐标
					var c_pos = common.windowToCanvas.apply(this, [canvas, w_x, w_y]);
					var c_x = (c_pos.x * 1.0).toFixed(0);

					// 当前点在数组中的下标
					var index = Math.floor((c_x - this.options.padding.left) / rect_w);

					if (time_data[index]) {
						// 显示十字指示线的
						var cross = common.canvasToWindow.apply(this, [canvas, time_data[index].cross_x, time_data[index].cross_y]);
						var cross_w_x = cross.x;
						var cross_w_y = cross.y;
						inter.crossTime(canvas, cross_w_x, cross_w_y);
						/*显示交互数据*/
						inter.showTipsTime(cross_w_x, cross_w_y, time_data, index);
					}

				}
				//绘制分时图折线
				function draw_line() {

					var ctx = this.options.context;
					var data = this.options.data;
					var data_arr = data.data;

					drawStroke.apply(this, [ctx, data_arr]);
					drawFill.apply(this, [ctx, data_arr]);

					/*绘制分时线*/
					function drawStroke(ctx, data_arr) {
						ctx.beginPath();
						ctx.strokeStyle = "#59A7FF";

						for (var i = 0, item; item = data_arr[i]; i++) {
							var x = common.get_x.call(this, i + 1);
							var y = common.get_y.call(this, item.price);
							if (i === 0) {
								ctx.moveTo(x, y);
							} else {
								ctx.lineTo(x, y);
							}
							item.cross_x = x;
							item.cross_y = y;
						}
						ctx.stroke();
					}
					/*分时线填充渐变色*/
					function drawFill(ctx, data_arr) {
						var y_min = common.get_y.call(this, this.options.data.min);
						/* 指定渐变区域 */
						var grad = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
						/* 指定几个颜色 */
						grad.addColorStop(0, 'rgba(200,234,250,0.7)');
						grad.addColorStop(1, 'rgba(255,255,255,0)');
						var data_arr_length = data_arr.length;

						ctx.beginPath();
						ctx.fillStyle = grad;
						ctx.moveTo(this.options.padding.left, y_min);
						for (var i = 0, item; item = data_arr[i]; i++) {
							var x = common.get_x.call(this, i + 1);
							var y = common.get_y.call(this, item.price);
							if (i === data_arr_length - 1) {
								ctx.lineTo(x, y);
								ctx.lineTo(x, y_min);
							} else {
								ctx.lineTo(x, y);
							}
						}
						ctx.fill();
					}

				}
				//绘制平均成本
				function draw_avg() {
					var ctx = this.options.context;
					var data = this.options.data;
					ctx.save();
					this.options.avg_cost_color = theme.draw_line.avg_cost_color;
					var color = this.options.avg_cost_color;
					var data_arr = data.data;
					// var w = this.options.width - 30;
					ctx.beginPath();
					ctx.lineWidth = 1;
					ctx.strokeStyle = color;
					ctx.fillStyle = '';
					for (var i = 0; i < data_arr.length; i++) {
						var x = common.get_x.call(this, i + 1);
						var y = common.get_y.call(this, data_arr[i].avg_cost);
						if (i == 0) {
							ctx.moveTo(x, y);
						} else {
							ctx.lineTo(x, y);
						}
					}
					ctx.stroke();
					ctx.restore();
				}

				//绘制成交量
				function draw_v() {

					var that = this;
					drawVTime.call(that);
					/*绘制分时图成交量*/
					function drawVTime() {
						var ctx = this.options.context;
						var data = this.options.data;
						/*成交量数组*/
						var data_arr = data.data;
						/*最大成交量*/
						var v_max = (data.v_max).toFixed(0);
						var unit_height = this.options.unit_height;

						var v_height = 3 * unit_height;
						var v_base_height = v_height;
						var y_v_bottom = ctx.canvas.height - this.options.canvas_offset_top;

						var y_v_top = that.options.c2_y_top; /*获取单位矩形对象*/
						var rect_unit = this.options.rect_unit;

						var bar_w = rect_unit.bar_w;
						/*K线柱体的颜色*/
						var up_color = this.options.up_color;
						var down_color = this.options.down_color;
						//标识最大成交量
						ctx.beginPath();
						ctx.strokeStyle = '#999';
						var padding_left = this.options.padding.left;
						var padding_right = this.options.padding.right;

						ctx.lineWidth = 1;
						//写字
						ctx.fillStyle = this.options.color.fillStyle;
						ctx.strokeStyle = 'rgba(230,230,230, 1)';
						for (var i = 0; i <= 3; i++) {
							var text = common.format_unit(Math.floor(v_max / 3 * (3 - i)));
							ctx.fillText(text, padding_left - ctx.measureText(text).width - 5, y_v_top + (v_height / 3) * i);
							if (i != 0 && i != 3) {
								draw_dash(ctx, padding_left, Math.floor(y_v_top + v_height / 3 * i), ctx.canvas.width - padding_right + 4, Math.floor(y_v_top + v_height / 3 * i), 5);
							}
						}
						ctx.fill();
						ctx.strokeStyle = 'rgba(230,230,230, 1)';
						ctx.lineWidth = 1;
						ctx.rect(this.options.padding.left - 0.5, Math.round(y_v_top), ctx.canvas.width - this.options.padding.left - this.options.padding.right, v_height);
						ctx.stroke();
						for (var i = 0, item; item = data_arr[i]; i++) {
							var volume = item.volume;
							var is_up = item.up;
							var bar_height = volume / v_max * v_base_height * 0.95;
							var x = common.get_x.call(this, i + 1);
							var y = y_v_bottom - bar_height;

							ctx.beginPath();
							ctx.moveTo(x, y);

							if (i == 0) {
								if (is_up) {
									ctx.fillStyle = up_color;
									ctx.strokeStyle = up_color;
								} else {
									ctx.fillStyle = down_color;
									ctx.strokeStyle = down_color;
								}
							} else {
								if (item.price >= data_arr[i - 1].price) {
									ctx.fillStyle = up_color;
									ctx.strokeStyle = up_color;
								} else {
									ctx.fillStyle = down_color;
									ctx.strokeStyle = down_color;
								}
							}
							if (bar_height !== 0) {
								ctx.rect(x - bar_w / 2, y, bar_w, bar_height);
							}
							ctx.stroke();
							ctx.fill();
						}

					}
				}

				//绘制盘口异动的流程逻辑函数
				function draw_positionChange() {
					// debugger;
					var _that = this;

					getChangePointData(this.options.code, function (error, data) {
						if (error) { } else {
							if (data[0].state === "false") {
								return;
							}
							//进行盘口异动绘制
							drawPositionChange.call(_that, data);
						}
					});
				}

				return ChartTime;
			})();

			module.exports = ChartTime;


			/***/
		}),
/* 59 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制直角坐标系
			 * 包括绘制网格
			 */

			/*绘制虚线*/
			var draw_dash = __webpack_require__(25);
			var extend = __webpack_require__(21);
			var common = __webpack_require__(60);
			/*主题*/
			var theme = __webpack_require__(7);
			// 格式化坐标
			var XYF = __webpack_require__(9);
			var DrawXY = (function () {
				//构造方法
				function DrawXY(options) {
					/*设置默认参数*/
					this.defaultoptions = theme.draw_xy_web;
					this.options = {};
					this.options = extend(this.options, this.defaultoptions, options);
					/*绘图*/
					this.draw();
				};
				/*绘图*/
				DrawXY.prototype.draw = function () {

					var data = this.options.data;
					var ctx = this.options.context;

					/*Y轴上的最大值*/
					var y_max = data.max;
					/*Y轴上的最小值*/
					var y_min = data.min;

					/*Y轴上分隔线数量*/
					var sepe_num = this.options.sepe_num;
					/*开盘收盘时间数组*/
					var oc_time_arr = data.timeStrs;

					/*分时图的高度*/
					var k_height = this.options.c_1_height;
					/*Y轴标识线列表*/
					var line_list_array = getLineList(y_max, y_min, sepe_num, k_height);

					drawXYTime.call(this, ctx, y_max, y_min, line_list_array);

					// 绘制横坐标刻度
					drawXMark.apply(this, [ctx, k_height, oc_time_arr]);
				};
				// 绘制分时图坐标轴
				function drawXYTime(ctx, y_max, y_min, line_list_array) {
					var _this = this;
					var sepe_num = line_list_array.length;
					var padding_left = this.options.padding.left;
					var padding_right = this.options.padding.right;
					for (var i = 0, item; item = line_list_array[i]; i++) {
						ctx.beginPath();
						ctx.lineWidth = 1;
						/*绘制y轴上的x轴方向分割*/
						if (i < (sepe_num - 1) / 2) {
							if (i == 0) {
								ctx.strokeStyle = '#e1e1e1';
								ctx.moveTo(XYF(padding_left), XYF(item.y));
								ctx.lineTo(XYF(ctx.canvas.width - padding_right), XYF(item.y));
							} else {
								ctx.strokeStyle = '#eeeeee';
								draw_dash(ctx, padding_left, item.y, ctx.canvas.width - padding_right + 4, item.y, 5);
							}
							ctx.fillStyle = '#007F24';
						} else if (i > (sepe_num - 1) / 2) {
							if (i == (sepe_num - 1)) {
								ctx.strokeStyle = '#e1e1e1';
								ctx.moveTo(XYF(padding_left), XYF(item.y));
								ctx.lineTo(XYF(ctx.canvas.width - padding_right), XYF(item.y));
							} else {
								ctx.strokeStyle = '#eeeeee';
								draw_dash(ctx, padding_left, item.y, ctx.canvas.width - padding_right + 4, item.y, 5);
							}
							ctx.fillStyle = '#FF0A16';
						} else {
							ctx.fillStyle = '#333333';
							ctx.strokeStyle = '#cadef8';
							ctx.moveTo(XYF(padding_left), XYF(item.y));
							ctx.lineTo(XYF(ctx.canvas.width - padding_right), XYF(item.y));
						}

						// 绘制纵坐标刻度
						if (isNaN(item.num)) {
							ctx.fillText("0.00", 0, item.y);
						} else {
							var num = (item.num * 1.0).toFixed(this.options.pricedigit);
							ctx.fillText(num, padding_left - ctx.measureText(num).width - 5, item.y);
						}
						ctx.stroke();
						// 绘制纵坐标涨跌幅
						drawYPercent.call(_this, ctx, y_max, y_min, item);
					}

				}
				/*绘制纵坐标涨跌幅*/
				function drawYPercent(ctx, y_max, y_min, obj) {
					/*纵坐标中间值*/
					var y_middle = (y_max + y_min) / 2;
					/*画布宽度*/
					var k_width = ctx.canvas.width;
					/*纵坐标刻度涨跌幅*/
					if (y_middle) {
						var percent = ((obj.num - y_middle) / y_middle * 100).toFixed(2) + "%";
						if (obj.num - y_middle > 0) {
							percent = "+" + percent;
						}
					} else {
						var percent = "0.00%";
					}
					/*绘制纵坐标刻度百分比*/
					ctx.fillText(percent, k_width - ctx.measureText(percent).width - 5, obj.y);
					ctx.stroke();
				}
				/*绘制横坐标刻度值*/
				function drawXMark(ctx, k_height, oc_time_arr) {

					// var dpr = this.options.dpr;
					var padding_left = this.options.padding.left;
					var padding_right = this.options.padding.right;
					var y_min = this.options.c_1_height;
					ctx.beginPath();
					ctx.fillStyle = this.options.color.fillStyle;
					/*画布宽度*/
					var k_width = ctx.canvas.width;
					var y_date = 8.1 * this.options.unit_height;
					/*通过type判断，是一日分时还是多日分时，以及判断是不是有盘前数据，根据判断结果画不同的横坐标时间点*/
					var timeStrLen = oc_time_arr.length;
					/*绘制x轴上的y轴方向分割*/
					var len = timeStrLen * 2;
					/*每个下标刻度之间的宽度*/
					var itemDistance;
					/*是否为一天分时*/
					var isR = false;
					/*是否包含盘前数据*/
					var isCR = this.options.isCR || false;
					/*盘前数据占据的宽度*/
					var crSpace = 0;
					if (this.options.type.toLowerCase() != 'r') {
						itemDistance = (k_width - padding_left - padding_right) / (timeStrLen);
					} else {
						if (isCR) {
							//盘前数据在坐标上的宽度
							crSpace = (k_width - padding_left - padding_right) / ((timeStrLen - 2) * 4 + 1);
							itemDistance = crSpace * 4;
						} else {
							itemDistance = (k_width - padding_left - padding_right) / (timeStrLen - 1);
						}
						isR = true;
					}
					ctx.save();
					ctx.fillStyle = this.options.color.fillStyle;
					ctx.font = "12px Arial,Helvetica,San-serif";
					ctx.textBaseline = "top";
					/*绘制x轴上的时间点*/
					for (var i = 0; i < timeStrLen; i++) {
						var itemTime = oc_time_arr[i];
						if (i === timeStrLen - 1 && isR) {
							ctx.fillText(itemTime.value, common.get_x.call(this, itemTime.index) - ctx.measureText(itemTime.value).width, y_date);
						} else if (i === 0 && isR) {
							ctx.fillText(itemTime.value, common.get_x.call(this, itemTime.index), y_date);
						} else if (i === 1 && isCR && isR) {
							ctx.fillText(itemTime.value, common.get_x.call(this, itemTime.index), y_date);
						} else {
							ctx.fillText(itemTime.value, common.get_x.call(this, itemTime.index) - ctx.measureText(itemTime.value).width / 2 + 2, y_date);
						}
					}
					ctx.restore();

					var v_height = this.options.c_v_height;
					var y_v_bottom = ctx.canvas.height - this.options.canvas_offset_top;
					var y_v_top = this.options.c2_y_top;
					var itemWidth = (k_width - padding_left - padding_right) / len;
					ctx.save();
					ctx.lineWidth = 1;
					for (var i = 0; i <= len; i++) {
						ctx.beginPath();
						if (i != 0 && i != len) {
							var x;
							//如果是盘前
							if (isCR) {
								if (i == 1) {
									x = crSpace + padding_left;
									ctx.fillStyle = "#efefef";
									ctx.fillRect(padding_left, 0, crSpace, y_min);
								} else {
									x = padding_left + (i - 1) * itemDistance / 2 + crSpace;
								}
							} else {
								x = padding_left + i * itemWidth;
							}
							ctx.strokeStyle = "#eeeeee";
							draw_dash(ctx, x, y_min, x, 0, 5);
							draw_dash(ctx, x, y_v_bottom, x, y_v_top - 10, 5);
						} else {
							ctx.strokeStyle = "#e1e1e1";
							ctx.moveTo(XYF(padding_left + i * itemWidth), XYF(y_min));
							ctx.lineTo(XYF(padding_left + i * itemWidth), XYF(0));
							ctx.stroke();
						}

					}
					ctx.restore();

				}

				/*Y轴标识线列表*/
				function getLineList(y_max, y_min, sepe_num, k_height) {
					var ratio = (y_max - y_min) / (sepe_num - 1);
					var result = [];
					for (var i = 0; i < sepe_num; i++) {
						result.push({
							num: (y_min * 1.0 + i * ratio),
							x: 0,
							y: k_height - (i / (sepe_num - 1)) * k_height
						});
					}
					return result;
				}



				return DrawXY;
			})();

			module.exports = DrawXY;


			/***/
		}),
/* 60 */
/***/ (function (module, exports) {

			var common = {
				// 由股票代码判断股票上市场所，1(沪市)或2(深市)或5(港股)
				getMktByCode: function (code) {
					if (code.Length < 3)
						return code + "1";
					var one = code.substr(0, 1);
					var three = code.substr(0, 3);
					if (one == "5" || one == "6" || one == "9") {
						return code + "1";
					} else {
						if (three == "009" || three == "126" || three == "110" || three == "201" || three == "202" || three == "203" || three == "204") {
							return code + "1";
						} else {
							return code + "2";
						}
					}
				},
				// 数字标准化，字符串输出，例如：9----->09
				fixed: function (str, len) {
					var i = 0;
					str = str.toString();
					var result = str;
					for (i = 0; i < len - str.length; i++) {
						result = '0' + result;
					}

					return result;
				},
				// 日期标准化，字符串输出，例如: 20121112---->2012-11-12
				transform: function (str) {
					return str.replace(/(\d{4})(\d{2})(\d{2})/g, function (whole, a, b, c) {
						return a + "-" + b + "-" + c;
					});
				},
				// 将鼠标坐标转换为Canvas坐标
				windowToCanvas: function (canvas, x, y) {
					// var box = canvas.getBoundingClientRect();
					return {
						// x:(x-box.left)*(canvas.width/box.width),
						// y:(y-box.top)*(canvas.height/box.height)

						x: x * this.options.dpr,
						y: y * this.options.dpr
					};
				},
				// 将Canvas坐标转换为鼠标坐标
				canvasToWindow: function (canvas, x, y) {
					var box = canvas.getBoundingClientRect();
					// 相对于窗口
					// return {
					//     x:(x *(box.width/canvas.width)+box.left),
					//     y:(y *(box.height/canvas.height)+box.top + this.options.canvas_offset_top/this.options.dpr)
					// };
					return {
						x: x / this.options.dpr,
						// x:x * (box.width/canvas.width),
						y: (y + this.options.canvas_offset_top) * (Math.abs(box.bottom - box.top) / canvas.height)
					};
				},
				// 图表y轴坐标计算
				get_y: function (y) {
					var max = (this.options.currentData && this.options.currentData.max) || this.options.data.max;
					var min = (this.options.currentData && this.options.currentData.min) || this.options.data.min;
					if (this.options.currentData != undefined && this.options.currentData.min != undefined && this.options.currentData.min == 0) {
						min = 0;
					}
					if (max == min) {
						return this.options.c_k_height / 2;
					}
					//console.log(this.options.c_k_height - (this.options.c_k_height * (y - min) / (max - min)));
					return this.options.c_k_height - (this.options.c_k_height * (y - min) / (max - min));
				},
				// 图表x轴坐标计算
				get_x: function (x) {
					var canvas = this.options.context.canvas;
					var type = this.options.chartType;
					var rect_w = this.options.rect_unit.rect_w;
					var num = (this.options.currentData && this.options.currentData.data.length) || this.options.data.data.length;
					var total = (this.options.currentData && this.options.currentData.total) || this.options.data.total;
					//K线距离左侧的距离
					var padding_left = 10;
					//k线距离右侧的距离
					var padding_right = 10;
					// var dpr = this.options.dpr;

					if (type == "TL") {
						return (canvas.width - padding_left - padding_right) / total * x + padding_left;
					} else {
						return (canvas.width - padding_left - padding_right) / num * x + padding_left - (rect_w / 2);
					}

				},
				// 图表x轴坐标计算
				get_rect: function (canvas, num) {
					var rect_w = (canvas.width - this.options.padding.left - this.options.padding.right) / num;
					var bar_w = rect_w * (1 - this.options.spacing);
					return {
						rect_w: rect_w,
						bar_w: bar_w
					};
				},
				// 格式化数据单位  
				format_unit: function (value, num) {
					num = num == undefined ? 2 : num;
					var flag = false;
					if (value < 0) {
						value = Math.abs(value);
						flag = true;
					}

					var temp_value = 0;
					var unit = "";

					if (flag) {
						if (value < 10000) {
							temp_value = (value / 1);
						} else if (value >= 10000 && value < 100000000) {
							temp_value = (value / 10000);
							unit = "万";
						} else if (value >= 100000000) {
							temp_value = (value / 100000000);
							unit = "亿";
						} else {
							temp_value = (value / 1);
						}
						temp_value = temp_value * (-1);

					} else {
						if (value < 10000) {
							temp_value = (value / 1);
						} else if (value >= 10000 && value < 100000000) {
							temp_value = (value / 10000);
							unit = "万";
						} else if (value >= 100000000) {
							temp_value = (value / 100000000);
							unit = "亿";
						} else {
							temp_value = (value / 1);
						}
					}

					if ((temp_value / 1).toFixed(num) / 1 == (temp_value / 1).toFixed(0) / 1) {
						num = 0;
					}

					return (temp_value / 1).toFixed(num) + unit;
				},
				/**
				 * 兼容性的事件添加
				 * @param {[type]}   obj  对哪个元素添加
				 * @param {[type]}   type 事件类型
				 * @param {Function} fn   事件触发的处理函数
				 */
				addEvent: function (obj, type, fn) {
					if (obj.attachEvent) {
						obj['e' + type + fn] = fn;
						obj[type + fn] = function () { obj['e' + type + fn](window.event); }
						obj.attachEvent('on' + type, obj[type + fn]);
					} else
						obj.addEventListener(type, fn, false);
				},
				removeEvent: function (obj, type, fn) {
					if (obj.detachEvent) {
						obj.detachEvent('on' + type, obj[type + fn]);
						obj[type + fn] = null;
					} else
						obj.removeEventListener(type, fn, false);
				}

			};
			module.exports = common;


			/***/
		}),
/* 61 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * web端分时图数据
			 *
			 *	返回数据：result = {
			 *			name:股票名称，
			 *			code: 股票编码,
			 *			yc: 昨收价,
			 *			high: 最高价,
			 *			low: 最低价,
			 *			v_max: 成交量最大值,
			 *			timeStrs: ["09:30","10:30","11:30/13:00","14:00","15:00"] 时间点数组,
			 *			data:[	
			 *				time(时间), price(价格), up(涨跌), percent(涨跌百分比), avg_cost(均价)
			 *			]
			 *	}
			 * 
			 */

			var jsonp = __webpack_require__(14);

			var dealData = __webpack_require__(62);

			var fix = __webpack_require__(13).fixed;

			/**
			 * 获取不同时间段的分时数据（默认当日）
			 * @param  {[type]}   id       [description]
			 * @param  {Function} callback [description]
			 * @return {[type]}            [description]
			 */
			function getData(options, callback) {
				var url = "http://pdfm.eastmoney.com/EM_UBG_PDTI_Fast/api/js";
				// var callbackStr = "fsData" + (new Date()).getTime().toString().substring(0, 10);
				if (!Date.now) {
					Date.now = function () { return new Date().getTime(); };
				}
				var callbackStr = "fsData" + Math.round(Date.now() + Math.random() * 1000001);
				var urlData = {
					id: options.code,
					TYPE: options.type || 'R',
					js: callbackStr + '((x))',
					'rtntype': 5,
					isCR: options.isCR
				};
				// setInterval(() => {
				// 	jsonp(url, urlData, callbackStr, function (json) {
				// 		/*区分美股港股*/
				// 		var code = options.code;
				// 		var error;
				// 		if (json) {
				// 			error = false;
				// 			var result = dealData(json, urlData.isCR, options.type, code);
				// 			console.log('我是' + json);
				// 		} else {
				// 			error = true;
				// 		}
				// 		callback(error, result);
				// 	});
				// },5000)
				jsonp(url, urlData, callbackStr, function (json) {
					/*区分美股港股*/
					var code = options.code;
					var error;
					if (json) {
						error = false;
						var result = dealData(json, urlData.isCR, options.type, code);
						console.log('我是' + json);
					} else {
						error = true;
					}
					callback(error, result);
				});

			}

			module.exports = getData;


			/***/
		}),
/* 62 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * web分时的数据处理
			 */
			var coordinate = __webpack_require__(12); //处理数据
			var fix = __webpack_require__(13).fixed;
			/**
			 * 对分时图做的数据处理方便调用
			 * @param  {[type]} json [description]
			 * @return {[type]}      [description]
			 */
			function dealData(json, isCR, type, code) {
				var yc = json.info.yc;
				var result = {};
				var timeStrs = [];
				result.v_max = 0;
				result.yc = json.info.yc;
				result.pricedigit = (json.info.pricedigit).split('.')[1] && (json.info.pricedigit).split('.')[1].length || 1;
				result.currentPrice = json.info.c;
				result.high = json.info.h === "-" ? json.info.yc : json.info.h;
				result.low = json.info.l === "-" ? json.info.yc : json.info.l;
				result.code = json.code;
				result.timeStrs = [];
				result.data = [];

				//横坐标的时间列表
				var ticks = (json.info.ticks).split('|');
				if (ticks.length === 7) {
					//早上开始时间
					var AM_start = ticks[3] / 60;
					var AM_end = ticks[4] / 60;
					var PM_start = ticks[5] / 60;
					var PM_end = ticks[6] / 60;

					var AMnum = AM_end - AM_start;
					var PMnum = PM_end - PM_start;
					var totalTicks = AMnum + PMnum;
					var group = totalTicks + 2;
					var offset = 0;
					if (isCR && group == 242) {
						offset = 15;
						timeStrs.push({ index: 0, value: "09:15" });
					}

					timeStrs.push({ index: offset, value: toFormDateTime(AM_start) });
					if (AM_end === AM_start + totalTicks / 2) {
						timeStrs.push({ index: Math.floor(offset + totalTicks / 4), value: toFormDateTime(AM_start + totalTicks / 4) });
					}
					timeStrs.push({ index: Math.floor(offset + totalTicks / 2), value: toFormDateTime(AM_end) + "/" + toFormDateTime(PM_start) });
					if (AM_end === AM_start + totalTicks / 2) {
						timeStrs.push({ index: Math.floor(offset + totalTicks * 3 / 4), value: toFormDateTime(PM_start + totalTicks * 1 / 4) });
					}
					timeStrs.push({ index: offset + totalTicks, value: toFormDateTime(PM_end) });


				} else if (ticks.length === 5) {
					var start = ticks[3] / 60;
					var end = ticks[4] / 60;
					var totalTicks = end - start;
					var middle = Math.floor((start + end) / 60) * 30;
					var group = totalTicks + 2;
					timeStrs.push({ index: 0, value: toFormDateTime(start) });
					timeStrs.push({ index: Math.floor(middle - start), value: toFormDateTime(middle) });
					timeStrs.push({ index: totalTicks, value: toFormDateTime(end) });
				}


				//此处返回的为总共应该有多少数据
				result.total = json.info.total % group == 0 ? json.info.total : Math.floor(json.info.total / group + 1) * group;
				if (isCR && group == 242) {
					result.total += 15
				}
				var dateStrs = [];
				dateStrs.push({ index: 0, value: toFormDate(json.data[0].split(",")[0].split(" ")[0]) });
				//计算每个数据点
				for (var i = 0, item; item = json.data[i]; i++) {
					var point = {};
					var dataItem = item.split(",");
					//成交量的最大值
					result.v_max = Math.max(dataItem[2] * 1.0, result.v_max);

					//涨跌百分比
					point.up = (dataItem[1] - yc) > 0 ? true : false;
					point.percent = (yc == 0 ? 0 : (Math.abs(dataItem[1] - yc) / yc * 100).toFixed(2));

					//每个点的时间（小时：分钟），价格，均价
					point.time = dataItem[0].split(" ")[1];
					point.dateTime = dataItem[0].split(" ")[0];
					point.price = dataItem[1];
					point.avg_cost = (dataItem[3] * 1.0).toFixed(result.pricedigit);
					point.volume = dataItem[2] * 1.0;
					result.high = Math.max(result.high, point.price, point.avg_cost);
					result.low = Math.min(result.low, point.price, point.avg_cost);
					if (toFormDate(point.dateTime) != dateStrs[dateStrs.length - 1].value) {
						dateStrs.push({ index: i, value: toFormDate(point.dateTime) });
					}
					result.data.push(point);
				}

				//判断不同的请求种类，返回不同的时间数组
				result.timeStrs = [];
				if (type.toLowerCase() === "r") {
					result.timeStrs = timeStrs;
				} else if (type.toLowerCase() === "t2") {
					if (code.charAt(code.length - 1) === "7") {
						result.timeStrs = dateStrs.slice(1);
					} else {
						result.timeStrs.push(timeStrs[Math.floor(timeStrs.length / 2)]);
						result.timeStrs.push(dateStrs[1]);
						result.timeStrs.push({ index: dateStrs[1].index + timeStrs[Math.floor(timeStrs.length / 2)].index, value: timeStrs[Math.floor(timeStrs.length / 2)].value });
					}
				} else {
					result.timeStrs = dateStrs.slice(1);
				}
				//坐标的最大最小值
				result.max = coordinate(result.high, result.low, result.yc).max;
				//坐标的最小值
				result.min = coordinate(result.high, result.low, result.yc).min;


				return result;
			}

			function toFormDateTime(ticks) {
				return fix(Math.floor(ticks / 60) % 24, 2) + ":" + fix(Math.floor((ticks) % 60), 2);
			}

			function toFormDate(date) {
				return (new Date(date).getMonth() + 1) + "月" +
					new Date(date).getDate() + "日";
			}

			module.exports = dealData;


			/***/
		}),
/* 63 */
/***/ (function (module, exports, __webpack_require__) {

			var jsonp = __webpack_require__(14);
			/**
			 * 返回盘口异动的数据
			 * @param  string   code     股票代码
			 * @param  {Function} callback [description]
			 * @return {[type]}            [description]
			 */
			function getData(code, callback) {
				var url = "http://nuyd.eastmoney.com/EM_UBG_PositionChangesInterface/api/js";
				// var callbackStr = "changeData" + (new Date()).getTime().toString().substring(0, 10);
				if (!Date.now) {
					Date.now = function () {
						return new Date().getTime();
					};
				}
				var callbackStr = "fsData" + Math.round(Date.now() + Math.random() * 1000001);
				var urlData = {
					id: code,
					style: "top",
					js: callbackStr + '([(x)])',
					ac: "normal",
					check: "itntcd",
					cd: callbackStr
				};

				jsonp(url, urlData, callbackStr, function (json) {
					// debugger;
					var error;
					if (json) {
						error = false;
					} else {
						error = true;
					}
					callback(error, json);
				});

			}

			module.exports = getData;


			/***/
		}),
/* 64 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 图表交互
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 * }
			 *
			 */

			// 拓展，合并，复制
			var extend = __webpack_require__(21);
			// 工具
			var common = __webpack_require__(60);
			// 主题
			var theme = __webpack_require__(7);
			var changeUnit = __webpack_require__(65);

			var Interactive = (function () {

				// 构造函数
				function Interactive(options) {
					this.defaultoptions = theme.interactive;
					this.options = {};
					this.options = extend(this.options, this.defaultoptions, options);
				}

				// 鼠标十字标识线(webTime)
				Interactive.prototype.crossTime = function (canvas, w_x, w_y) {
					var offsetTop = this.options.canvas_offset_top;
					var canvasHeight = this.options.canvas.height;
					var containerId = this.options.container;
					var padding_left = this.options.padding.left;
					var padding_right = this.options.padding.right;

					if (!this.options.cross) {
						this.options.cross = {};
						/*Y轴标识线*/
						var y_line = document.createElement("div");
						y_line.className = "cross-y";
						y_line.style.height = canvasHeight - offsetTop + "px";
						y_line.style.top = offsetTop + "px";
						this.options.cross.y_line = y_line;

						/*X轴标识线*/
						var x_line = document.createElement("div");
						x_line.className = "cross-x";
						x_line.style.width = canvas.width - padding_left - padding_right + "px";
						x_line.style.left = padding_left + "px";
						this.options.cross.x_line = x_line;
						/*X轴和Y轴标示线相交点*/
						var point = document.createElement("div");
						point.className = "cross-p";
						point.style.width = "11px";
						point.style.height = "11px";
						this.options.point_width = 11;
						point.style.borderRadius = point.style.width;
						point.style.background = "url(" + __webpack_require__(66) + ")";
						this.options.cross.point = point;
						/*创建文档碎片*/
						var frag = document.createDocumentFragment();
						frag.appendChild(y_line);
						frag.appendChild(x_line);
						frag.appendChild(point);
						document.getElementById(containerId).appendChild(frag);
					}
					var y_line = this.options.cross.y_line;
					if (this.options.cross.y_line) {
						y_line.style.left = w_x + "px";
					}
					var x_line = this.options.cross.x_line;
					if (this.options.cross.x_line) {
						x_line.style.top = w_y + "px";
					}
					var point = this.options.cross.point;
					if (point) {
						var p_w = this.options.point_width;
						point.style.left = w_x - p_w / 2 + "px";
						point.style.top = w_y - p_w / 2 + "px";
					}
				}

				Interactive.prototype.showTipsTime = function (cross_w_x, cross_w_y, time_data, index) {
					// debugger;
					/*将要用到的各种参数*/
					var canvas = this.options.canvas;
					var padding_left = this.options.padding.left;
					var padding_right = this.options.padding.right;
					var offsetTop = this.options.canvas_offset_top;
					var c_1_height = this.options.c_1_height;
					var containerId = this.options.container;
					var code = this.options.code;
					var map = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
					var itemData;
					if (index < 0) {
						itemData = time_data[0];
					} else if (index > time_data.length - 1) {
						itemData = time_data[time_data.length - 1];
					} else {
						itemData = time_data[index];
					}
					this.options.lastItemData = time_data[time_data.length - 1];
					// 成交额
					var volumeCount, volumeNum;
					if (code.charAt(code.length - 1) != 7 && code.charAt(code.length - 1) != 5) {
						volumeNum = changeUnit(itemData.volume, "手");
						volumeCount = changeUnit(itemData.volume * itemData.price * 100, "元");
					} else {
						volumeNum = changeUnit(itemData.volume, "股");
						volumeCount = changeUnit(itemData.volume * itemData.price, "元");
					}

					var topText = itemData.dateTime.substring(5) + " " + itemData.time + " " +
						map[(new Date(itemData.dateTime)).getDay()] + " 最新价:" + itemData.price +
						" 成交量:" + volumeNum +/*" 成交额:"+ 
	                                volumeCount +*/ " 均价:" + itemData.avg_cost;

					// var divArr = document.getElementById(containerId).getElementsByTagName('div');
					//  if (divArr != null && divArr!=undefined) {
					//      for(var i=0;i<divArr.length;i++){
					//          if(divArr[i].className=="time-tips-top" || divArr[i].className=="time-tips-coordinate"){
					//               divArr[i].parentNode.removeChild(divArr[i]);
					//          } 
					//      } 
					//  }
					//    this.options.time_data = time_data;
					//  var y_left, y_right, x_bottom, x_top;
					//  var frag = document.createDocumentFragment();
					//  /*y轴上左边的提示*/
					//  y_left = document.createElement("div");
					//  y_left.setAttribute("id", "time_y_left");
					//  y_left.className = "time-tips-coordinate";
					//  /*y轴上右边的提示*/
					//  y_right = document.createElement("div");
					//  y_right.setAttribute("id", "time_y_right");
					//  y_right.className = "time-tips-coordinate";
					//  y_right.style.left = canvas.width - padding_right + "px";
					//  /*x轴底部的时间提示*/
					//  x_bottom = document.createElement("div");
					//  x_bottom.setAttribute("id", "time_x_bottom");
					//  x_bottom.className = "time-tips-coordinate";
					//  /*x轴顶部的时间提示*/
					//  x_top = document.createElement("div");
					//  x_top.setAttribute("id", "time_x_top");
					//  x_top.className = "time-tips-top";
					//  x_top.style.top = offsetTop - 18 + "px";
					//  x_top.style.left = padding_left + "px";
					//  this.options.webTimeTips = {};
					//  this.options.webTimeTips.time_y_left = y_left;
					//  this.options.webTimeTips.time_y_right = y_right;
					//  this.options.webTimeTips.time_x_top = x_top;
					//  this.options.webTimeTips.time_x_bottom = x_bottom;

					//  frag.appendChild(y_left)
					//  frag.appendChild(y_right)
					//  frag.appendChild(x_bottom)
					//  frag.appendChild(x_top)
					//  document.getElementById(containerId).appendChild(frag);

					//  //跟随鼠标变化需要更改的纵坐标上的的提示*/
					//  y_left.style.display = "block";
					//  y_left.innerHTML = itemData.price;
					//  y_left.style.left = padding_left - y_left.clientWidth + 'px';
					//  y_left.style.top = cross_w_y + "px";
					//  y_left.style.display = "none";
					//  y_right.style.top = cross_w_y + "px";
					//  y_right.innerHTML = (itemData.up ? "+" : "-") + itemData.percent+"%";

					//  //跟随鼠标变化需要更改的横坐标上的的提示*/
					//  x_bottom.style.display = "block";
					//  x_bottom.innerHTML = itemData.time;
					//  x_bottom.style.left = cross_w_x  + "px";
					//  x_bottom.style.top = c_1_height + offsetTop - x_bottom.clientHeight + "px";
					//  x_bottom.style.display = "none";
					//  x_top.innerHTML = topText;
					//  x_top.style.display = 'block';


					if (!this.options.webTimeTips) {

						this.options.time_data = time_data;
						var y_left, y_right, x_bottom, x_top;
						var frag = document.createDocumentFragment();
						/*y轴上左边的提示*/
						y_left = document.createElement("div");
						y_left.setAttribute("id", "time_y_left");
						y_left.className = "time-tips-coordinate";
						/*y轴上右边的提示*/
						y_right = document.createElement("div");
						y_right.setAttribute("id", "time_y_right");
						y_right.className = "time-tips-coordinate";
						y_right.style.left = canvas.width - padding_right + "px";
						/*x轴底部的时间提示*/
						x_bottom = document.createElement("div");
						x_bottom.setAttribute("id", "time_x_bottom");
						x_bottom.className = "time-tips-coordinate";
						/*x轴顶部的时间提示*/
						x_top = document.createElement("div");
						x_top.setAttribute("id", "time_x_top");
						x_top.className = "time-tips-top";
						x_top.style.top = offsetTop - 18 + "px";
						x_top.style.left = padding_left + "px";
						this.options.webTimeTips = {};
						this.options.webTimeTips.time_y_left = y_left;
						this.options.webTimeTips.time_y_right = y_right;
						this.options.webTimeTips.time_x_top = x_top;
						this.options.webTimeTips.time_x_bottom = x_bottom;

						frag.appendChild(y_left)
						frag.appendChild(y_right)
						frag.appendChild(x_bottom)
						frag.appendChild(x_top)
						var divArr = document.getElementById(containerId).getElementsByTagName('div');
						if (divArr != null && divArr != undefined) {
							for (var i = divArr.length - 1; i > 0; i--) {
								if (divArr[i].className == "time-tips-top" || divArr[i].className == "time-tips-coordinate") {
									divArr[i].parentNode.removeChild(divArr[i]);
								}
							}
						}
						document.getElementById(containerId).appendChild(frag);

						//跟随鼠标变化需要更改的纵坐标上的的提示*/
						y_left.style.display = "block";
						y_left.innerHTML = itemData.price;
						y_left.style.left = padding_left - y_left.clientWidth + 'px';
						y_left.style.top = cross_w_y + "px";
						y_left.style.display = "none";
						y_right.style.top = cross_w_y + "px";
						y_right.innerHTML = (itemData.up ? "+" : "-") + itemData.percent + "%";

						//跟随鼠标变化需要更改的横坐标上的的提示*/
						x_bottom.style.display = "block";
						x_bottom.innerHTML = itemData.time;
						x_bottom.style.left = cross_w_x + "px";
						x_bottom.style.top = c_1_height + offsetTop - x_bottom.clientHeight + "px";
						x_bottom.style.display = "none";
						x_top.innerHTML = topText;
						x_top.style.display = 'block';
					} else {

						var y_left = this.options.webTimeTips.time_y_left;
						var y_right = this.options.webTimeTips.time_y_right;
						var x_bottom = this.options.webTimeTips.time_x_bottom;
						var x_top = this.options.webTimeTips.time_x_top;
						//跟随鼠标变化需要更改的纵坐标上的的提示*/
						y_left.style.top = cross_w_y + "px";
						y_left.innerHTML = itemData.price;
						y_left.style.left = padding_left - y_left.clientWidth + 'px';
						y_left.style.display = 'block';
						y_right.style.top = cross_w_y + "px";
						y_right.style.display = 'block';
						if (itemData.percent === "0.00") {
							y_right.innerHTML = itemData.percent + "%";
						} else {
							y_right.innerHTML = (itemData.up ? "+" : "-") + itemData.percent + "%";
						}
						//跟随鼠标变化需要更改的横坐标上的的提示*/
						x_bottom.style.left = cross_w_x + "px";
						x_bottom.style.display = 'block';
						x_bottom.innerHTML = itemData.time;
						if (cross_w_x < padding_left + x_bottom.clientWidth / 2) {
							x_bottom.style.left = padding_left + "px";
						} else if (cross_w_x > canvas.width - padding_right - x_bottom.clientWidth / 2) {
							x_bottom.style.left = canvas.width - padding_right - x_bottom.clientWidth + "px";
						} else {
							x_bottom.style.left = cross_w_x - x_bottom.clientWidth / 2 + "px";
						}
						x_bottom.style.top = c_1_height + offsetTop - x_bottom.clientHeight + "px";

						x_top.style.display = 'block';
						x_top.innerHTML = topText;
					}
				};

				// 显示交互效果
				Interactive.prototype.show = function () {

					if (this.options.cross) {
						var x_line = this.options.cross.x_line;
						if (x_line) {
							x_line.style.display = "block";
						}
						var y_line = this.options.cross.y_line;
						if (y_line) {
							y_line.style.display = "block";
						}
						var point = this.options.cross.point;
						if (point) {
							point.style.display = "block";
						}
					}


					if (this.options.webTimeTips) {
						var time_y_left = this.options.webTimeTips.time_y_left;
						if (time_y_left) {
							time_y_left.style.display = 'block';
						}
						var time_y_right = this.options.webTimeTips.time_y_right;
						if (time_y_right) {
							time_y_right.style.display = 'block';
						}
						var time_x_bottom = this.options.webTimeTips.time_x_bottom;
						if (time_x_bottom) {
							time_x_bottom.style.display = 'block';
						}
					}



				}

				// 隐藏交互效果
				Interactive.prototype.hide = function () {

					if (this.options.cross) {
						var x_line = this.options.cross.x_line;
						if (x_line) {
							x_line.style.display = "none";
						}
						var y_line = this.options.cross.y_line;
						if (y_line) {
							y_line.style.display = "none";
						}
						var point = this.options.cross.point;
						if (point) {
							point.style.display = "none";
						}

					}

					if (this.options.webTimeTips) {
						var time_y_left = this.options.webTimeTips.time_y_left;
						if (time_y_left) {
							time_y_left.style.display = 'none';
						}
						var time_y_right = this.options.webTimeTips.time_y_right;
						if (time_y_right) {
							time_y_right.style.display = 'none';
						}
						var time_x_bottom = this.options.webTimeTips.time_x_bottom;
						if (time_x_bottom) {
							time_x_bottom.style.display = 'none';
						}
						// debugger;
						var code = this.options.code;
						var itemData = this.options.lastItemData;
						var map = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
						var time_x_top = this.options.webTimeTips.time_x_top;
						var volumeCount, volumeNum;
						if (code.charAt(code.length - 1) != 7 && code.charAt(code.length - 1) != 5) {
							volumeNum = changeUnit(itemData.volume, "手");
							volumeCount = changeUnit(itemData.volume * itemData.price * 100, "元");
						} else {
							volumeNum = changeUnit(itemData.volume, "股");
							volumeCount = changeUnit(itemData.volume * itemData.price, "元");
						}

						var topText = itemData.dateTime.substring(5) + " " + itemData.time + " " +
							map[(new Date(itemData.dateTime)).getDay()] + " 最新价:" + itemData.price +
							" 成交量:" + volumeNum + /*" 成交额:" +
	                volumeCount +*/ " 均价:" + itemData.avg_cost;
					}
					time_x_top.innerHTML = topText;

				};

				// 显示loading效果
				Interactive.prototype.showLoading = function () {

					if (this.options.loading) {
						this.options.loading.style.display = "block";
					} else {
						// 获取图表容器
						var chart_container = document.getElementById(this.options.container);
						// var chart_container_height = chart_container.offsetHeight;
						// loading提示信息
						var loading_notice = document.createElement("div");
						loading_notice.className = "loading-chart";
						loading_notice.innerText = "加载中...";
						loading_notice.style.height = this.options.height - 100 + "px";
						loading_notice.style.width = this.options.width + "px";
						// loading_notice.style.paddingTop = chart_container_height / 2 + "px";
						loading_notice.style.paddingTop = "100px";
						// 把提示信息添加到图表容器中
						this.options.loading = loading_notice;
						chart_container.appendChild(loading_notice);
					}

				}

				// 隐藏loading效果
				Interactive.prototype.hideLoading = function () {
					this.options.loading.style.display = "none";
				}

				// 暂无数据
				Interactive.prototype.showNoData = function () {

					if (this.options.noData) {
						this.options.noData.style.display = "block";
					} else {
						//获取图表容器
						var noData_container = document.getElementById(this.options.container);
						// var noData_container_height = noData_container.offsetHeight;
						//无数据时提示信息
						var noData_notice = document.createElement("div");
						noData_notice.className = "loading-chart";
						noData_notice.innerText = "暂无数据";
						noData_notice.style.height = this.options.height - 100 + "px";
						noData_notice.style.width = this.options.width + "px";

						noData_notice.style.paddingTop = "100px";
						//把提示信息添加到图表容器中
						this.options.noData = noData_notice;
						noData_container.appendChild(noData_notice);
					}

				}

				return Interactive;
			})();

			module.exports = Interactive;


			/***/
		}),
/* 65 */
/***/ (function (module, exports, __webpack_require__) {

			// 工具
			var common = __webpack_require__(60)

			/*单位转换工具*/
			function changeUnit(num, unitName) {
				var afterSwitch = common.format_unit(num, 2);
				if (afterSwitch.charAt(afterSwitch.length - 1) == "万") {
					afterSwitch = parseFloat(afterSwitch) + "(万" + unitName + ")";
				} else if (afterSwitch.charAt(afterSwitch.length - 1) == "亿") {
					afterSwitch = parseFloat(afterSwitch) + "(亿" + unitName + ")";
				} else {
					afterSwitch = parseFloat(afterSwitch) + "(" + unitName + ")";
				}
				return afterSwitch;
			}

			module.exports = changeUnit;

			/***/
		}),
/* 66 */
/***/ (function (module, exports) {

			module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMjE1Nzg4OS0yMzdkLTE0NDAtYWIxYy0yOGJmNGJhZWY5NjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDhGOTBDRkI3RkNGMTFFNjg3ODVDNTIxQjFBMDY0QjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDhGOTBDRkE3RkNGMTFFNjg3ODVDNTIxQjFBMDY0QjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjMwZDIxYTktNjBmMy0xNzQ1LWJkZDYtODU0MWRiZTA5NDFiIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzVhYTg1NGYtNTg1NC0xMWU2LTljYTQtOTFjM2Q1YTMwYTEyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+73iagQAAAPtJREFUeNpckbFOAkEURe9uFgOENUIJCA00NkpiR6nRhJI/tDax1/AJEGj4AFhXEwsgLgETi/VeeAMrk5ydnZnzZua98XpPKayVyA1pkCLZkDmZkLWEwMRLck9yODYFX5E2GZDI5yckd06Mv9GcfqGr3oJytlEY2NFnmh3G6C+2eLQgfCZ4va3hxQKufbuCFhsUHzLXgMYfyX5dufiWDFY/qLPz8L95y+1BLvqWNS7yiNmlJ3JaLiCy/43k3aB2jlmlgLesqXE1PMhRYHVsKQklw7uPdCWe9K4NTPyVJzmxOu7qLCEjOVHriXsUHfVMOlYd94KaH7sX/BNgADkYR6OgIb3wAAAAAElFTkSuQmCC"

			/***/
		}),
/* 67 */
/***/ (function (module, exports, __webpack_require__) {

			var typeToImgMap = __webpack_require__(68);
			var common = __webpack_require__(60);

			// 对获取到的盘口异动数据进行处理
			function drawPositionChange(data) {
				var _that = this;
				//分时数据
				var timeData_arr = _that.options.data.data;
				var timeIndex = timeData_arr.length - 1;
				for (var i = 0; i <= data.length - 1; i++) {
					var item = data[i].split(",");
					//异动的相关信息
					var positionChangeItem = {
						changeTime: item[1],
						changeName: item[2],
						changeType: item[3],
						changeInfo: item[4],
						isProfit: item[5]
					};

					var changeTime = item[1];
					var changeImg = typeToImgMap(item[3]);
					var changeIconHeight = _that.options.canvas_offset_top + _that.options.c_1_height - 40;

					for (; timeIndex >= 0; timeIndex--) {
						//如果检测到该时间点上有盘口异动，就绘制盘口异动图标
						if (changeTime == _that.options.data.data[timeIndex].time) {
							var currentPrice = _that.options.data.data[timeIndex].price;
							var isUp = _that.options.data.data[timeIndex].up;
							var percent = _that.options.data.data[timeIndex].percent;
							drawIcon(_that.container, common.get_x.call(_that, timeIndex + 1),
								changeIconHeight, changeImg, positionChangeItem, currentPrice, isUp, percent) //绘制盘口异动
							break;
						}
					}
				}

			}

			//在给定的点上，绘制盘口动态的图标,和对应的提示html
			function drawIcon(container, x, y, imgUrl, info, currentPrice, isUp, persent) {

				var img = document.createElement("img");
				img.onload = function () {
					img.style.left = x - img.clientWidth / 2 + "px";
				}
				img.setAttribute("src", imgUrl);
				img.style.position = "absolute";
				img.style.top = "100px";
				container.appendChild(img);
				img.style.top = y + "px";

				var timeChangePositionPad = document.createElement("div");
				var changeType = info.changeType;
				var changeTime = info.changeTime;
				var changeNum = info.changeInfo;
				var persentStr = (isUp ? persent : '-' + persent) + "%";
				var priceColor = isUp ? "red" : "green";
				container.appendChild(timeChangePositionPad);

				common.addEvent(img, 'mouseover', function (e) {
					// console.log("hehe");
					timeChangePositionPad.className = "timeChangeMainPad";
					var isIE8 = (!+'\v1' ? 'style="display: none"' : "");

					timeChangePositionPad.innerHTML = '<div class="timeChangeTriangle" ' + isIE8 + ' ></div>' +
						'<table class="timeChangeTable"><caption class="timeChangeHeader">' + changeType + '</caption>' +
						'<tr><td>时:<span>' + changeTime + '</span></td>' +
						'<td>量:<span>' + changeNum + '</span></td></tr>' +
						'<tr><td>价:<span style=" color: ' + priceColor + '">' + currentPrice + '</span></td>' +
						'<td>涨:<span style=" color: ' + priceColor + '">' + persentStr + '</span></td></tr></table>';

					timeChangePositionPad.style.display = "block";
					timeChangePositionPad.style.left = x - timeChangePositionPad.clientWidth / 2 + 5 + "px";
					timeChangePositionPad.style.top = y + 50 + "px";
				});

				common.addEvent(img, 'mouseout', function (e) {
					timeChangePositionPad.style.display = "none";
				});
			}

			module.exports = drawPositionChange;


			/***/
		}),
/* 68 */
/***/ (function (module, exports, __webpack_require__) {

			//一个类型图片的映射
			function typeToImgMap(type) {
				var img;
				var baseUrl = "images/";
				switch (type) {
					case "火箭发射":
						img = __webpack_require__(69);
						break;
					case "快速下跌":
						img = __webpack_require__(70);
						break;
					case "封涨停板":
						img = __webpack_require__(71);
						break;
					case "封跌停板":
						img = __webpack_require__(72);
						break;
					case "机构买单":
						img = __webpack_require__(73);
						break;
					case "机构卖单":
						img = __webpack_require__(74);
						break;
					case "快速反弹":
						img = __webpack_require__(75);
						break;
					case "高台跳水":
						img = __webpack_require__(76);
						break;
					case "大笔买入":
						img = __webpack_require__(77);
						break;
					case "大笔卖出":
						img = __webpack_require__(78);
						break;
					case "有大买盘":
						img = __webpack_require__(79);
						break;
					case "有大卖盘":
						img = __webpack_require__(80);
						break;
					case "向上缺口":
						img = __webpack_require__(81);
						break;
					case "向下缺口":
						img = __webpack_require__(82);
						break;
					case "竞价上涨":
						img = __webpack_require__(83);
						break;
					case "竞价下跌":
						img = __webpack_require__(84);
						break;
					case "高开5日":
						img = __webpack_require__(85);
						break;
					case "低开5日":
						img = __webpack_require__(86);
						break;
					case "60日新高":
						img = __webpack_require__(87);
						break;
					case "60日新低":
						img = __webpack_require__(88);
						break;
					case "打开跌停":
						img = __webpack_require__(89);
						break;
					case "打开涨停":
						img = __webpack_require__(90);
						break;
					case "大幅上涨":
						img = __webpack_require__(91);
						break;
					case "大幅下跌":
						img = __webpack_require__(92);
						break;
				}
				return img;
			}

			module.exports = typeToImgMap;


			/***/
		}),
/* 69 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhCQAUAOZdAPeUHhKi3PzU1gew7+kgKSi78uocJukcJukdJveaTfihXCm78ewnL+AiLegcJjO+8tMpNqxBWN8eKkDC8/rX2SG48faPHu0pMvze3/eiZi+98rc7TuccJ+gdJpWgut4jL/7y8vzcy/rT1en4/o6Zee0gKfvMzvvQt9v0/fORl+w6Rf7u7waw7+1weGe94dYoNeohKu5VXUO25+0lLekgKuscJX7W9+MgLDa/8r81R/b8/gmx8P3i4zyu4J2YcFOipNHw/PrGyKpEWescJtYoNv74+Mru/Ljo+/3n6PaLLNolMvaNM/rR03PT9sMzRcnu/GLN9Qym4PvKzP3z9P729+UfKWfP9eskLoK31f3j5ACu7+YcJ+0cJP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NjkwMjhERjRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NjkwMjhERTRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAABdACwAAAAACQAUAAAHjYBdghQpVIKHUzQlKiCHXS1cXBcxjlsHHA4wh0UEBhBDV0iCKzcBFS41WYIYQloDC06qXVJKUVoBHbJBXB8bVVyyJpHDPIICw5ECgkwzwwwiXUAyElvVCD1GD1oRwy9aOAUsWDkNRB47GhNNXT4/JF02UFYoXUsASV0jR0+CCgAJgnQcCmHhhKNDGRwFAgA7"

			/***/
		}),
/* 70 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhCQAUAOZXAPvP0ewcJEnF9OYdKOgcJ+gcJveUHuscJUjF9O35/u0dJfBwd37C4/eTHvvO0OchLAKs6uIdKfWKJmLN9eIgK2hskPm6kveYRk+ktP77++odJo51kfzU1nCZvKzl+uxBS8svQGGjqO0kLFXJ9Of3/f3t7hmv6XW53WmVufrHqOccJ/ve4OYcJ7BAVOsdJeUdJzKnwuEiLfaLLOz5/vrGyP/9/OkuOLY8T/74+P3i46fj+esnMDuJuPGWm/7y8veeVcI0Rf77/PvJy0zG9ME0RQSr6SS58feSRV3M9eMhLPzX2M4sOzjA8+0wOuwcJcju/BW18Nby/Cy88v3+//3j5ACu7+0cJP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NkE1RTc1MzRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NjlENTIxMDRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAABXACwAAAAACQAUAAAHjIBXgldHNYODKQ0Wgx6CPwYXgjNIT1cyBhJXUTpMI1chMBhTE0NGVSgUVi4bVVIIVURWsjFVAgkMEQMvAwQnJFcAsrIKAIIcwrJKgkLIVlSCNFY3FUDOgg5LEFVFSc9XOS1VUAIg3j4aPCYdAd4ZLAUEBSolgw8BB047hz2yTQuHQWyI+HBIEI4VhwIBADs="

			/***/
		}),
/* 71 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhCAAMALMPAP8mJv+Ojv9UVP+Pj//Q0P8lJf9TU//Pz/8MDP/S0v/w8P8KCv8PD//MzP8AAP///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NzIxQjE0NzRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NzIxQjE0NjRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAPACwAAAAACAAMAAAEJ9DJSat7j6x18FOAVCiYQBnPYAVJg0hIk2CMxHhP7dyeztM2nA8TAQA7"

			/***/
		}),
/* 72 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhCAAMALMPAD6yPprXmmfCZ5vXm9Xu1T2xPWbCZtTu1PL68iWoJdfv19Lt0ieoJympKRykHP///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NzM3MEUwNjRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NzM3MEUwNTRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAPACwAAAAACAAMAAAEKPC95lyTklo868Xal3mSsjAVsyhD5TrBI7yGhABVgWBEkhySl3DoiAAAOw=="

			/***/
		}),
/* 73 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhIQANAPfWAB+IY0GaXiKJY5fGU1+qWpXFU12pdC2PYQ+AZonAVGStWpLEU6DLUjyXX/8KCv/S0h+IZEObXmqwWJnHU/8MDBiEZV6pdEKaXhCAZpbFU0SbXheEZTWSYFKkdZrJU//w8P/MzAByao/BVLrb7DiWYPv14FuoTjeUXx2GZKPPoEufXUmdXVCiY/f79UOaXm2ydprHU1KjYCqOYkScYBuEZeHrzyiNYTeUacDdvO7w6kyfd0iddf8mJo/DUxOBZp3LzxOCZSiMXw9/ZhuGZBqFf0ugdHK1sGOsWSyOYv/Q0BSBUo7DUwp9WxR9U5XFUlambq3TnkKbXmeuWQp4Z16qWoO9t3W1Ufz9/J/KUL/dt2KtpWOsfKjRnpvKrY3Dm0qfUESbfDCRXonAgyyOUmGsWU2hXdvp5nu5fMrjwCCFZSOJY6PMUS2QhjGRYSqNYZjHUzqXXjqXX06hdiGIYzKSYTOSYBSCZhyGZGWuWf+dnSGJY/9TU1GiXDeVX2WtWj2YXl+qWanR0COKY0idYVyoZa3TqleldRWBWC2PXhuFZDSSYE+hdiyOYXy5VQJ2aEugXBiEV0yhggBZSSOJZWStW0efnw5+Zm2xWEScX//Pz1SlclGjXFKjcrTX1p/KXMHc3P+Ojgx9cVGiaSCJYyCJZReEZCuOZY3BVAB0ajCRYS6QYF+rWFWmdJXFUFGjZwd2af+PjxJ+ZkGbXo3BU3KyfWqwUzWUYA1+ZpjGWfr1/367v/8lJf+ens7lwiuOYU6jXYnAU2iuWwBqZzeVWXG0TQBya4i/TzqWX1moYlSkdajSw/b69DOSYf9UVBaDZVWlXv8PD4rAVA5/ZjuXX16qdP8AAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NzNEMjg4MzRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NzNEMjg4MjRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAADWACwAAAAAIQANAAAI/wCtCRxI0NoVHIRYGaDGsKHDh5rOFJyIRpQiJCcaTNvIsePGBgfccBrIK0/BXlsQ3MKAQJrLlzCltRwiJJUFgUkcOMg0MEsMGXCiXAgQANOwMTOIKo0g648qAC5ufuBRrdquDwJd0XB2R4AaAQIOFfHSZBJYAXMgpCFxwI4GA9aaVa26R+COYnEkECAAaNWLT7lomdhLAE+ZEIk4bHgLa+5cUNYW2SoAY8CAVp5KGCECxsoayxMYPBLEbMMFAw9AUKhKAcQDax1UZEgQLRowZJ0CsRGGSESP2h7I+GpTgYMhgdCqQhvYYcWC2tFmhQlVxUwlJo2eR3tDhREdIH1YIH5XPjAZn9m1Tz1zJEnLiCDGlkRL4EGKjQOWBkEZX225QDl1TDBAAQU4gYsyuvzQBTFYEDgAA79UgMINKQyUXH8D6YDKMZf4ocARwYhRQw5f1EKJAgpIsMkrPkTARQsWkifQE7FgoAcAAEAAgBKmRAIJKTgCMEopUxxQyDICBQQAOw=="

			/***/
		}),
/* 74 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhIQANAPfUAB+IY0GaXiKJY5fGU1+qWpXFU12pdC2PYQ+AZonAVGStWh+WHzWSYGqwWCGXITyXX16pdJLEU9bs1pnHU/H58ReEZRCAZqDLUhiEZUKaXkObXkSbXpbFU1KkdZrJUx+IZNDp0CGIY43BVLrb7I/BVEmdXWOsfEKbXvf79anR0MHc3EufXRyGZJ/KUDeVX4nAg0+hdtvp5kScYCiNYY3BU1moYp/KXEyfdziiOFSkdUGbXgp4Z22ydm2xWDqXXhJ+ZiGJYxuGZGKtpU6hdlWlXoO9txSCZhSBUo3DmxR9U5jGWc7lwmiuWxiEV8rjwCOKY6PMUSyOYXW1UWWuWY/DUwd2aSCFZfr1//z9/GqwUwp9WxOCZUqfUCCJZTCRXpvKrXKyfWGsWbTX1gJ2aEyhglKjcluoTiuOZQ9/ZgByajWUYABqZzGRYe7w6pnPmZjHUzOSYTKSYS2QhiCJYzqWX2OsWWO2Y16qWpXFUCOJZWStW2WtWvb69BuFZA5+Zp3Lz5XFUkidYSiMX2euWYi/T7/dtxuEZdTr1EugdCuOYTiWYI7DU6jRnk6jXcDdvPv14DSSYHy5VTeUaZrHU3u5fF+rWC6QYEefn4nAU02hXUScX1SlciOJY1GiaSyOUlGjXHK1sBeEZDCRYTOSYD2YXhaDZVCiY0OaXl+qWSqOYhOBZlyoZSyOYlWmdHG0TRWBWAByawB0ajeUXzeVWQ1+ZqPPoNPq0yqNYTqXX63TqlGjZ1ambhqFf+Hrzy2PXlKjYKjSw2K1YgBZSVGiXH67v63TnleldR2GZAx9cUSbfDmiOUugXEiddZjPmCSYJIrAVA5/ZjuXX16qdBaSFv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NzY0RDRDNDRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NzY0RDRDMzRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAADUACwAAAAAIQANAAAI/wCpCRxIkBoWR6taGZDGsKHDh5soFZzopBMkVrIeRNvIsePGBwdulZlIcIkJBLQsIIDGsqVLaCuDoBEFQaCzadOcDSz0K5WPExkCBNA0y5MMoUg16CBlCcCpmtRu5hyoy1ApFgI4CRDwChGSJHm2CgjxwYqiA0Y2GLCJU6dAZrBwNSBAAFUlHiqugDFDl8CUTGn6MKiglu1UgTDUFJg0YAAeG49A8UomBUrjCReWPYFTIcPaqG0HdljBIcGzZ5hqiEkhZ40vElROewiTiA0GBsYkgHCA0wEICdQ6lIhw+hkNL8iKxLikJRLxZ2/uRImzxYUpNzizT2tGLcew0qdFEH0ZI0zICEGEFj1L4GHQjAN+AhWjZkd7MIFDRk0YUKAAICXAEPPHF6600N8AFzSCwTGS1CIQBcrghAMFAt0QCx097KFAHUy80EsbXGShhwIKNPBJFapowAgKAx2ywAK2DLTLDxYAAQAAHwBwxBlkNNHFjQDMEcoOB+TCh0ABAQA7"

			/***/
		}),
/* 75 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhEwASAOZFAP8BAf8EBP8GBv/9/f+Jif/S0v/Kyv/7+/8UFP91df80NP+pqf82Nv/j4//x8f/39//29v/Ly/8jI/++vv/k5P84OP+EhP8qKv8zM//w8P/p6f/U1P/r6/9RUf/i4v/y8v8gIP94eP/Gxv8uLv+Vlf8FBf+AgP+Fhf+xsf/l5f/t7f9UVP8WFv92dv9tbf/5+f9YWP/u7v/b2/8YGP9qav9cXP9ERP+Bgf9BQf+ysv/T0/+srP8CAv+amv/8/P8HB/8lJf+vr//AwP8kJP8AAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NkIzNzIyRTRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NkIzNzIyRDRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAABFACwAAAAAEwASAAAHjIBFgoOEhUUyJIaKRTo3I0Q8B4uCHyFARJiYKZOCExeZmBGcggUBoDmjPhWgRD2jBKAtQyacGz+ZHUUQBoINDoUHDJkIGoQvChK8gyegC4UJmCUEA0UFApkrhUIAoDYeGJksHIUPLtyZ15k7iygIrJgwnBQ4rDMqowMWpphBo4MiIIjU8EcoA40YkwIBADs="

			/***/
		}),
/* 76 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhEwASAOZCALrkuvv++9fv19Ds0CGmIZbVlh2kHf3+/fP68y6rLiClIJLTkh6lHu/570q3SsXoxfz+/Ey3TMfpx+b15jivODCsMEGzQdHs0W7Fbk64TmrDarLgsuX15czrzDyxPEW0Rff896XbpYTOhOf154/Sj0m2SY7SjiCmIDuwO4fPh1m8Wfr9+jGtMej26Njv2GTBZOv369nw2aHZoWfCZ1e8V4XOhfL68u347d/y37Xhtfj8+CKmInrKej2xPbjiuH3LffD58BykHP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NkIzNzIzNjRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NkIzNzIzNTRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAABCACwAAAAAEwASAAAHi4BCgoNCNjxAhImKHRRBGIqQBwsKQZU+kIQjNJWcLA2YQgAJnKQakDo/BqQEpDmKEqqcKhwlnBU3iiKVJwUHQgKslTOKKw4oA4QLpBuKEwiJARGcCTCghDE7nC9CIMjWBaQ1HibWQhAZpEEh5b+UnADlDxbpF9YIKT3pLexCLiQfQRgE4DcIhwwhgQAAOw=="

			/***/
		}),
/* 77 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhDgAOANU6APS+Q/bYV/K2M/THRvXMS/fcXPO9O/+IiPO4NfbVVf8GAvXMSvK0MfO6N/4VBvfaWvt0L/TGRPbUU/O+PPhiIPlrJ/xbO/txSf4XCPfbW/TCQP8GA/4TBvO5Nv4UCPWyO/h6KvSsQPWRKveiPffaWfXPTvt2MvteJvbXV/qFOPXIR/x5XvTDQffZWPrir/O4PfjUifXLSfTHSP736PO7RfXOTfXLSvO5PffdXf8AAP///wAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NkM1QzFDOTRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NkM1QzFDODRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAA6ACwAAAAADgAOAAAGikCdcAaj3W402EzIdL1ktlrNJnu5moBYC8fFtWKA6+wVw7ESXMICF3sRZVvbBPcQBLyyoo1bQEgiA102RjVdJQYdGV01R4U4JCgIKgEFXIw0ezgEGgIGHydcgzBwOAMNDCIOHiYQFRdjZVwgCjm1tjouWVspG7a3uE9RIxgcFCsHB0xERjchFktCQQA7"

			/***/
		}),
/* 78 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhDgAOANU7APS+Q/K2M/bYV/O4NfO9O5XVlTCnIPfcXJG9ViKmHvXMS8fFQ/O6N/bVVfTHRvO3NTSoIfXPTuLAPY+3M/O5NvXIRzSnH3q1MPfaWiKlHfO+PPbXV/TDQZHCP6HBPaDGQ/faWfbYWJLFa+K6QvTCQPfbW/TGRPbWVnq5S4+uLZHAPPXMSvbUU8WxLffZWPrir/O4PfjUifXLSfTHSP736PO7RfXOTfXLSvO5PRykHPfdXf///wAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NkQyMjdBNzRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NkQyMjdBNjRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAA7ACwAAAAADgAOAAAGicCdkBar4XC1GE3IfMFmN5vtNoO9mgCZS8fVuWSAKw0m03EaXMVKJ4MRZ9ubRocJCLyz4o17GLBMDl03RjZdEQQUJV02R4U6IBsDFQIHXIw1ezoXEgEEJCFcgwgTKh0GFi0PDCd4MTmvsBkeXW00sLAJH15gVwUFIikGEAtTVVdMOzQoI0dJS0JBADs="

			/***/
		}),
/* 79 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhDwAOAOZzAOa2CPVlBui5Cf/20fHCF/Xehe68Cf0SAfjGBuW0B+2+C+q7Eei5COu6Dum7Cuy5Bum5C+q7C+u8Cum6C/zLDPHCCvTIJ//66Om6EPC+Buy+EO2/HOm2BvXJKP/XPffPOP4FAPXDB+a0Cvzz1Oq7CvXKKe7DI/XJKevAHuKyDOq+HN6sB/jNLOCvCfTHJu/BH/DDIOe3Ce+zH+y6Cea1CfdvK+e4Ce/CIOW0Ceq6DN2rBuu9C+7AHv6EevFyBui4Cf3TNO2/C+u9Gue3CP7UNee4Fey+Eey+FvPHJf7ZTPJiBfbKKvFhBPHOSuy+DvCWCvRyB+i3C+e1Bum6CfRkB9yqBf0WAuu/G+a3E+y+D+OyDPLGJP7kfO7GK+e6FP345OCuCeW1B/HQUu7BH+6tCvdSBf0VAee4FO+WFtypBPlZIOCvCv7kfee2C/7ZS+y9C//WN+y9DP8AAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NkRCMUU5OTRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NkRCMUU5ODRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAABzACwAAAAADwAOAAAHw4BzcwNsHwQGMwYEH1wDghdJDWBnN1sdMGNFLQ1uFx5RPHBwQCVYK1UWcC9tHhQ0SKJCaTprRKIWOBQaCCIpGy4nSywdG1oiCBoQcRUhGQ8cUhwPGSEVcRALAHHbcQpBCtxxAAsTcQwJAhJvcW8SAgkMcRMYMdxvEQ4RZGXbQxg5cWyEmbJj2xMzB5goCUAFxQ97DnyAkEOxYhcjXgCQWAdlYkWKX8RwO3JFBRorBwIEqNFD0IgCTUw4iZNFhpoCIwQFAgA7"

			/***/
		}),
/* 80 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhDwAOAOZ1AOy9C+a2CIuxE/fPOPjGBu2+C+68Ceq7C+2/HOy+EPXehem6EOu6Dui5COy5BvTIJ/zLDOu8Cuq7Eeu9C+i5Cem6C+W0B//66P/20fXDB/zz1CKlHOm5C/HCF+m2BvXJKPHCCv/XPfC+Bua0Cum7CvbKKvXKKf7ZS+y+DuvAHu7GK+m6CeOyDOa3E96sB/345Oe4FPDDIDSnGtzBItu7DOe3Cea1Cey6CdyqBfLQU5TRh+CvCem6CvPHJe7AHo67OeKyDIqwFO/BH+e4Cf7kff7UNZixEfLGJPHOS+y+D/7ZTOW1COy+Fui3C/7kfOq+HOy+Ee7BH/THJu2/C7+5G9ypBHevFeu9Guq6DOu/G+e6FOe1BvjNLC+mGuq7Cv3TNOe4FcC4DzCmGoetEd2rBne2MOCvCu7DIoivEvXJKeW0Cee2C+/CIOi4CeCuCee3CJqzEjOmG//WNxykHOy9DP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NkU3ODQ3NjRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NkU3ODQ3NTRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAB1ACwAAAAADwAOAAAHw4B1dRhEAx0GNwYdA04YghdKDG4wbEcfMVFgOwwnFyFNPnJyXyYtLjgPckJrIRA2PaJXVWRmRaIPahAJBCNACFJpJVwfCCwjBAkcdCAZIg4eWx4OIhkgdBwSAXTbdAVTBdx0ARIVdA0WFBEAdAARFBYNdBULNdtWNAckB+vbbwtBAtCM6SIjzLYJK5YMoYNljsOHG4zwmMCtTYqHEOGw8xJACxQVOn4IECAmDpUnWZhwy/FCkAYFZWagoJPkDBIFGgQFAgA7"

			/***/
		}),
/* 81 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhDgAMAMQdAP8vL//p6f95ef99ff/r6/8tLf+QkP93d//8/P+YmP84OP8MDP/09P9kZP+Tk//5+f/q6v+cnP8PD/9CQv8uLv+Njf9SUv8GBv8HB/8ODv8BAf+srP8AAP///wAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1Nzk1RDA4QjRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1Nzk1RDA4QTRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAdACwAAAAADgAMAAAFS2C3VV1pdoyydUHGGWf3TFwWDBynOSZi5RwBAKhJlBpADgWT1EQOSc6CGa1ehtVoAZdNCiCubi0g0nQ1q9JGUs2kTQRBAYMBDAimEAA7"

			/***/
		}),
/* 82 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhDgAMAMQdAEa1RojPiIvRi+v360S0RO347aPao2XBZSeoJ4bOhiGmIVe8V+z47EW0RfX79fz+/KfcpympKfr9+pzXnJrWmk64Tp/Yn3XIdSKmIh2kHSipKLXhtRykHP///wAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1Nzg2NjcwMTRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NzdEQjQ1QTRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAdACwAAAAADgAMAAAFR2AnFgGBYYBQiOwWcXCsbW0W31xGMxqOawOBzxcADHGm402BuWUgCRzCCMsYRJdbQ5izsB6HWGDQm7BEkgUH2NlQzixHhRYCADs="

			/***/
		}),
/* 83 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhEQAOANUoAP8PD/9VVf/8/P84OP/19f/i4v96ev9mZv94eP8eHv+mpv8ICP/s7P/Kyv/c3P8BAf+oqP+AgP93d//Z2f8ODv9FRf8ZGf9WVv99ff/Nzf9jY/9ra/+dnf9UVP/e3v/q6v88PP+vr/8gIP9HR/9LS/+0tP/S0v8AAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NkU3ODQ3RTRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NkU3ODQ3RDRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAoACwAAAAAEQAOAAAGZ0CUENXYDI9I4Sdx4iSTgsrptMg8j4jpVMS4okIP7XQkEBI6BOEEINZihIeTRhgJgMSWwKUA0SqGJWIkQh5sUxQOQoFagygGA1oDEoqCQyZaJoCVQpdTmZSMlpiaoZyjoFONKJ0nmUEAOw=="

			/***/
		}),
/* 84 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhEQAOANUgACWoJfb79mjCaEm2SU64Ttjv2OLz4onQiYrQiuDz4Nbv1qjcqPT79IfPh9vw2ympKSipKKvdq4zRjHfId3DGcLDfsKXbpbLgskGzQUCyQG7FbqrdqnTHdNfv16LaohykHP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NkYzODhCMzRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NkYzODhCMjRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAgACwAAAAAEQAOAAAGaEAQyPMpfjxCUMfYSRKNSOGy2BQ+i1El02k8Jqef6rCbBYuvXlCDYCQcrGRhAmJ8GBCCQXcgkIAqRhcgCgBdRQAFQhwfE0kWhh8bSQECAUkgGl0Ul5xCDBlFGJadnAUAAA6kpAsRqklBADs="

			/***/
		}),
/* 85 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhFAAWAOZEAP9AQP+AgP8BAf/Pz/8JCf+vr/8VFf9gYP8GBv81Nf9kZP/f3/+4uP8rK/+Zmf+2tv++vv8KCv+fn//8/P/v7/8DA/8QEP9bW/9ZWf8XF/+7u/+cnP/a2v9ERP9hYf+Njf8eHv84OP8gIP8CAv82Nv+pqf+ysv8ICP87O//9/f8SEv9aWv/T0/8EBP/Ly/9QUP8hIf+goP/g4P+6uv8HB/+iov+5uf8kJP/V1f+rq/8wMP/b2/+Bgf8REf+mpv/5+f+jo//Q0P+/v/8AAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NjgxNzkwMzRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NjgxNzkwMjRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAABEACwAAAAAFAAWAAAHu4BEAwCEhESHiImJQkNCjkKKkYiMkpWTQ5aWjAEBA5mKC5wHFgefkgNDBaaRAAGriiISqwWQFKMUqwM6Q0MvC6+SEBCINh0JDTA9GZIaEREziBe8vCiRDAS8BAxEOwkh0wqKDyfTQzQ1N0MqDbwfiSYI5fJDBCBDD4gF8bwCAvMXHAzIOJRj3xABDhzII/GDiItDJVpMG7GBSAoF0wzgUORhWoUYiXgIMMAi0oQVQyoAiSQhSKUJGHwACwQAOw=="

			/***/
		}),
/* 86 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhEwAXANU/AFW7VY7SjtTu1Pz+/OP04/r9+jivOHHGcd/y3zyxPOf15/H58VG5UUS0RDmwOXnJeS+rL7jiuCqqKlm8WdDs0GvEa+T05GnDaXPHc0GzQXDGcNvx28TnxHbIdqrdqsHmwUe1R23Ebb7lvimpKTCsMCuqK2PBY1e8V5rXmuX15eLz4vv++zauNqLaovL68iGmIWzEbHXIdTuwOzWuNR+lH3LHcl6+Xub15tHs0WbCZmLAYofPhzGtMcboxhykHP///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NjgxNzkwQjRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NjgxNzkwQTRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAA/ACwAAAAAEwAXAAAGnsCfcEgUCgBIZHEp7Pl60B5z6Zxaq1amMxAQZIkE7kFy+C4Fvoi5CAisiQaPOSJdjBdmAcjnMxGsChtvQikJMzdWBQ8KQgQOfA0uTAU2PjIWKgZ8fCcFSzqbDiybmyFLOaSpmztCOEIrF6oVCaQtCBB/PwMwpDUDt5s0PD4iQwMafB1DFCOpKEQDGA9FHC+kMWsMpAxmHxMNGQYlJD9BADs="

			/***/
		}),
/* 87 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhFAAOAMQZAP/S0rqNjefn5/9mZvoKCv84ONdSUsCTk/93d8hxceu+vv8ODv/c3P/19baVlf+mprS0tP9jY+0mJv9YWP/29rOzs/8AAP///6urq////wAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NkZGRUU5NTRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NkZGRUU5NDRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAZACwAAAAAFAAOAAAFXKBQYWRpYpWQret4vii7wrSclVeO66RNXr+gkDJpzDBAUxJJGlgixxxvCUxYro8bM0h1EK6WBUPIpBok4AKCDKRiAmCAFsmjJ+FXOe2Ft8hdeyQHcRkigRgQCoQhADs="

			/***/
		}),
/* 88 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhFAAOAMQWANfv15Kqkufn5/b79onQiZeqlySkJGjCaHmpebLgsimpKXTHdOLz4l+nX7S0tDumO064TnfId7OzsxykHP///6urq////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NzA3RjE2MjRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NzA3RjE2MTRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAWACwAAAAAFAAOAAAFXKAgVWRpVpJgret4vii7wrRslVSO66RNUr9gMDApAm4VoEmZrBCNyByPCXxOjsIm1Vm8RnHNYRcb1uIajy6EsKPqCoaugkF7IboJi6tOkiwmESsifBUOAgMHAyshADs="

			/***/
		}),
/* 89 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhEQALANU0AP/b2//19f8kJP8tLf8dHf/S0v8DA/+mpv/m5v/q6v+0tP+urv8PD//i4v8GBv8qKv/w8P9eXv/n5/8ZGf8LC/+Wlv/9/f8fH/8XF//c3P9RUf/6+v9fX/8CAv85Of+/v/8lJf8SEv/s7P/Dw/+Rkf/Jyf/7+/82Nv96ev89Pf/U1P+3t/87O//p6f8HB/9AQP83N/+7u/8REf8AAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NzcxMzEwMzRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NzcxMzEwMjRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAA0ACwAAAAAEQALAAAGaECa0CQsFhEkVqYIeBSMicqrM5s9aQnBbAIQWjjVcIkWgIUJjaImPBuRU2wBgqZysVdCyIk9kHjCBjMKRSIDbARsCigHRi0ggGERQhs0MZYxBxgzIWEyC5cfbKKjMwwyp6ioFA6pMhdBADs="

			/***/
		}),
/* 90 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhEQALANU5ACeoJx+lH/r9+lW7VaTbpOb15vP685PUk0a1RvL68li8WCmpKbDfsPv9+/v+++z47DOtM024TUKzQqLaorzkvMrqyl2+XcDmwES0RNLt0uP04/b79uX15cboxiqqKjWuNSGmIVe8V3LHclq9WvH58dfv17XhtX7LfjivOOLz4qXbpbLgsiClIDuwO2LAYrHgsS+rLzauNtzx3O747q3erc7rzsLnwiuqKxykHP///wAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NzcxMzEwQjRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NzcxMzEwQTRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAA5ACwAAAAAEQALAAAGaEDUbUgcAkDF4QLHbDqfuI5taorhPE3AajrNeUmIJqvp8ja8OUPECXG+DgTvZuBscUbNAI6WE1icHyk5GgBODH0hTTAyaCJOFF4JGDg3JWgnTxdoBRI1aDkzKgp6OBWfDp+fDxMDGTlBADs="

			/***/
		}),
/* 91 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,R0lGODlhCwAOAMQZAP83N/9VVf/5+f8VFf+oqP9/f/9sbP+5uf8DA//29v9jY//X1/8MDP+qqv9vb/8jI/+3t//h4f/i4v8UFP+Cgv86Ov9paf+lpf8AAP///wAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjAyMTU3ODg5LTIzN2QtMTQ0MC1hYjFjLTI4YmY0YmFlZjk2MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NzEyNkVGNTRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NzEyNkVGNDRFNDExMUU2QjMwM0JBMzZFQThFMzAxRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpmMGNjNWYyNS1lNWU1LWEwNGUtYmEwZi00ZTFlZjU2NTQ4NWUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphNzU3MjcyOC00Y2MwLTExZTYtYmY2NS1hMDg3YTU2NzM5MWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAZACwAAAAACwAOAAAFO2AmZhA1nlk0IQeaCQCGDRJqyHIljASOO6IFw4drZAqBGO4RUCREF58FFcVNT1XZdZTFbKFSahg7zoQAADs="

			/***/
		}),
/* 92 */
/***/ (function (module, exports) {

			module.exports = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAOCAYAAAAWo42rAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMjE1Nzg4OS0yMzdkLTE0NDAtYWIxYy0yOGJmNGJhZWY5NjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTcxMjZFRkQ0RTQxMTFFNkIzMDNCQTM2RUE4RTMwMUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTcxMjZFRkM0RTQxMTFFNkIzMDNCQTM2RUE4RTMwMUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZjBjYzVmMjUtZTVlNS1hMDRlLWJhMGYtNGUxZWY1NjU0ODVlIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YTc1NzI3MjgtNGNjMC0xMWU2LWJmNjUtYTA4N2E1NjczOTFmIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+aIPXGAAAAIZJREFUeNpilFkiwwAF04A4kwEVRAPxMhCDiYFIMKwUsgDxXCDmBWIjLPJ5QBwAxNdBCncA8SocBpkDsTYQ14OsXg3Ek/DYmgoyEebGUiA+jkXRFCBegeyZX0AcDsSvkRSdBOJibL5+DMSxQPwXiN8AcRjUALivkcFOIG4E4lNA/AhZAiDAAK1EF3obl0raAAAAAElFTkSuQmCC"

			/***/
		}),
/* 93 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制手机K线图
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 * }
			 *
			 */

			// 绘制坐标轴
			var DrawXY = __webpack_require__(94);
			// 主题
			var theme = __webpack_require__(7);
			// 获取K线图数据
			var GetDataK = __webpack_require__(95);
			// 获取技术指标数据
			var GetTeacData = __webpack_require__(97);
			// 绘制K线图
			var DrawK = __webpack_require__(99);
			// 绘制rsi指标
			var DrawRSI = __webpack_require__(100);
			// 绘制kdj指标
			var DrawKDJ = __webpack_require__(101);
			// 绘制wr指标
			var DrawWR = __webpack_require__(102);
			// 绘制dmi指标
			var DrawDMI = __webpack_require__(103);
			// 绘制bias指标
			var DrawBIAS = __webpack_require__(104);
			// 绘制obv指标
			var DrawOBV = __webpack_require__(105);
			// 绘制cci指标
			var DrawCCI = __webpack_require__(106);
			// 绘制roc指标
			var DrawROC = __webpack_require__(107);
			// 绘制expma指标
			var DrawEXPMA = __webpack_require__(108);
			// 绘制sar指标
			var DrawSAR = __webpack_require__(109);
			// 绘制boll指标
			var DrawBOLL = __webpack_require__(110);
			// 绘制bbi指标
			var DrawBBI = __webpack_require__(111);
			// 绘制macd指标
			var DrawMACD = __webpack_require__(112);
			// 工具
			var common = __webpack_require__(60);
			// 交互效果
			var Interactive = __webpack_require__(113);
			// 滑块
			var slideBar = __webpack_require__(114);
			// 拓展，合并，复制
			var extend = __webpack_require__(21);
			// 水印
			var watermark = __webpack_require__(22);
			// 偏好设置
			var setPreference = __webpack_require__(115);
			// cookie
			var EMcookie = __webpack_require__(32);

			var dynamicMA = __webpack_require__(116);

			var ChartK = (function () {

				function ChartK(options) {
					this.defaultoptions = theme.chartK;
					// this.options = {};
					// extend(true, this.options, theme.defaulttheme, this.defaultoptions, options);
					this.options = extend(theme.defaulttheme, this.defaultoptions, options);

					// 图表容器
					this.container = document.getElementById(options.container);

					this.container.className = this.container.className.replace(/emcharts-container/g, "").trim();
					this.container.className = this.container.className + " emcharts-container";
					// 图表加载完成事件
					this.options.onChartLoaded = options.onChartLoaded == undefined ? function (op) {

					} : options.onChartLoaded;


					// 前后复权，默认不复权
					if (!window.authorityType) {
						window.authorityType = EMcookie.getCookie("beforeBackRight");
					}

					window.authorityType = (window.authorityType == null || window.authorityType == undefined) ? "fa" : window.authorityType;
					if (window.authorityType == "") {
						this.options.authorityType = "不复权";
					} else if (window.authorityType == "fa") {
						this.options.authorityType = "前复权";
					} else if (window.authorityType == "ba") {
						this.options.authorityType = "后复权";
					} else {
						this.options.authorityType = "前复权";
					}

				}

				/*初始化*/
				ChartK.prototype.init = function () {
					this.options.type = this.options.type == undefined ? "K" : this.options.type;
					var canvas = document.createElement("canvas");
					// 去除画布上粘贴效果
					this.container.style.position = "relative";
					// 兼容IE6-IE9
					try {
						var ctx = canvas.getContext('2d');
					} catch (error) {
						canvas = window.G_vmlCanvasManager.initElement(canvas);
						var ctx = canvas.getContext('2d');
					}
					this.options.canvas = canvas;
					this.options.context = ctx;
					// 设备像素比
					//控制日K，周K，月K的像素比
					var dpr = this.options.dpr;
					// 容器中添加画布
					this.container.innerHTML = "";
					this.container.appendChild(canvas);
					// 画布的宽和高
					canvas.width = this.options.width * dpr;
					canvas.height = this.options.height * dpr;

					this.options.up_color = "#ff0000";
					this.options.down_color = "#17b03e";

					// 缩放默认值
					this.options.scale_count = this.options.scale_count == undefined ? false : this.options.scale_count;

					canvas.style.width = this.options.width + "px";
					canvas.style.height = this.options.height + "px";
					canvas.style.border = "0";



					// 画笔参数设置
					ctx.font = (this.options.font_size * this.options.dpr) + "px Arial";
					ctx.lineWidth = 1 * this.options.dpr;
					ctx.strokeStyle = 'rgba(230,230,230, 1)';
					ctx.fillStyle = '#c8c8c8';
					ctx.textBaseline = "middle";
					this.options.color = {};
					//下面的框左右的边线
					this.options.color.strokeStyle = 'rgba(199,16,72,0.3)';
					this.options.color.fillStyle = '#c8c8c8';

					this.options.color.m5Color = EMcookie.getCookie("ma1_default_color") == null ? "#f4cb15" : EMcookie.getCookie("ma1_default_color");
					this.options.color.m10Color = EMcookie.getCookie("ma2_default_color") == null ? "#ff5b10" : EMcookie.getCookie("ma2_default_color");
					this.options.color.m20Color = EMcookie.getCookie("ma3_default_color") == null ? "#488ee6" : EMcookie.getCookie("ma3_default_color");
					this.options.color.m30Color = EMcookie.getCookie("ma4_default_color") == null ? "#fe59fe" : EMcookie.getCookie("ma4_default_color");
					this.options.maColor = [this.options.color.m5Color, this.options.color.m10Color, this.options.color.m20Color, this.options.color.m30Color];
					this.options.TColor = ["#f4cb15", "#ff5b10", "#488ee6", "#fe59fe"];

					this.options.padding = {};
					//下面图左框距离
					// this.options.padding.left = ctx.measureText("+100000万").width;
					this.options.padding.left = 10;
					this.options.padding.right = 60;
					this.options.padding.top = 0
					this.options.padding.bottom = 0;
					//框右侧边距
					this.options.drawWidth = canvas.width - this.options.padding.left - 10;

					this.options.y_sepe_num = 20;
					this.options.x_sepe_num = 10;

					this.options.unit_height = canvas.height * 1 / this.options.y_sepe_num;
					this.options.unit_width = canvas.width * 1 / this.options.x_sepe_num;
					this.options.c1_y_top = canvas.height * 1 / this.options.y_sepe_num;
					this.options.c2_y_top = canvas.height * 9 / this.options.y_sepe_num;
					this.options.c3_y_top = canvas.height * 13 / this.options.y_sepe_num;
					this.options.c4_y_top = canvas.height * 18 / this.options.y_sepe_num;

					// K线区域的高度
					this.options.c_k_height = canvas.height * 8 / this.options.y_sepe_num;
					// 成交量区域的高度
					this.options.c_v_height = canvas.height * 3 / this.options.y_sepe_num;
					this.options.v_base_height = this.options.c_v_height * 0.9;
					// 技术指标区域的高度
					this.options.c_t_height = canvas.height * 2 / this.options.y_sepe_num;


					this.options.margin = {};
					this.options.margin.left = 0;
					this.options.margin.top = canvas.height * 1 / this.options.y_sepe_num;

					// 移动坐标轴
					ctx.translate("0", this.options.margin.top);

				};

				// 绘图
				ChartK.prototype.draw = function (callback) {
					var _this = this;
					// 删除canvas画布
					_this.clear();
					// 初始化
					_this.init();

					// 初始化交互
					var inter = _this.options.interactive = new Interactive(_this.options);
					// 显示loading效果
					inter.showLoading();

					var type = _this.options.type;
					// 加水印
					watermark.apply(this, [this.options.context, 95 + this.options.padding.right, 10, 82, 20]);
					try {

						GetDataK(getParamsObj.call(_this), function (data) {
							// if(data.data.length < 60){
							//     _this.options.drawWidth = _this.options.drawWidth * data.data.length/60;
							// }
							console.log('getDataK', data)
							var flag = dataCallback.apply(_this, [data]);
							if (flag) {
								// K线图均线数据标识
								// inter.markMA(_this.options.canvas);
								// 成交量均线数据标识
								inter.markVMA(_this.options.canvas);

								// 缩放
								// inter.scale(_this.options.canvas);

							}
							// 传入的回调函数
							if (callback) {
								callback(null);
							}
							if (data != null) {
								drawT.apply(_this);
								drawKT.apply(_this);
								setPreference.apply(_this);

							}


						});


					} catch (e) {
						// 暂无数据
						inter.showNoData();
						// 隐藏loading效果
						inter.hideLoading();
						// 传入的回调函数
						if (callback) {
							callback(e);
						}
					}



				};
				// 重绘
				ChartK.prototype.reDraw = function () {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					dataCallback.call(this);
				}
				// 删除canvas画布
				ChartK.prototype.clear = function (cb) {
					try {
						var ctx = this.options.context;
						ctx.clearRect(0, 0, this.options.padding.left + this.options.drawWidth, this.options.c4_y_top);
					} catch (e) {
						this.container.innerHTML = "";
					}

				}

				// 获取上榜日标识dom
				ChartK.prototype.getMarkPointsDom = function (cb) {
					var points = this.options.interactive.options.pointsContainer.children;
					return points;
				}

				function slideBarCallback(start, end) {
					this.clear();

					this.options.start = start;
					this.options.end = end;

					var canvas = this.options.canvas;
					this.options.currentData = sliceData(this.options.data, start, end);
					var current_arr_length = this.options.currentData.data.length;


					// 获取单位绘制区域
					var rect_unit = common.get_rect.apply(this, [canvas, current_arr_length]);
					this.options.rect_unit = rect_unit;

					this.options.drawXY.options.currentData = this.options.currentData;

					this.options.drawXY.options.XMark = getXMARK.apply(this, [this.options.currentData.data]);
					this.options.drawXY.drawXYK();
					this.options.drawXY.drawXYV();
					this.options.drawXY.drawXYT();

					var up_t = this.options.up_t;
					var down_t = this.options.down_t;

					if (up_t == "junxian") {
						this.drawMA(start, end);
					} else if (up_t == "sar") {
						this.drawSAR(start, end);
					} else if (up_t == "boll") {
						this.drawBOLL(start, end);
					} else if (up_t == "bbi") {
						this.drawBBI(start, end);
					} else if (up_t == "expma") {
						this.drawEXPMA(start, end);
					}

					if (down_t == "rsi") {
						this.drawRSI(start, end);
					} else if (down_t == "kdj") {
						this.drawKDJ(start, end);
					} else if (down_t == "macd") {
						this.drawMACD(start, end);
					} else if (down_t == "wr") {
						this.drawWR(start, end);
					} else if (down_t == "dmi") {
						this.drawDMI(start, end);
					} else if (down_t == "bias") {
						this.drawBIAS(start, end);
					} else if (down_t == "obv") {
						this.drawOBV(start, end);
					} else if (down_t == "cci") {
						this.drawCCI(start, end);
					} else if (down_t == "roc") {
						this.drawROC(start, end);
					}

					drawV.apply(this);
					// 绘制成交量均线
					this.drawVMA();
					this.drawK();


				}

				//绘制k线图的各种指标
				function drawKT() {
					var _this = this;
					//首先绘制出div
					var pad = document.createElement("div");
					pad.className = "kt-pad";
					var frag = document.createDocumentFragment();
					// var kt_title = document.createElement("div");
					// kt_title.className = "kt-title";
					// kt_title.innerHTML = "主图指标";
					// frag.appendChild(kt_title);
					//
					var appendLine = function (name, frag, isDefault) {
						var container = document.createElement("div");
						container.className = "kt-line";
						var radioWrap = document.createElement('div');
						radioWrap.className = "kt-radio-wrap";
						var radio = document.createElement("div");
						radio.className = isDefault ? "kt-radio kt-radio-choose" : "kt-radio";
						radioWrap.appendChild(radio);

						container.appendChild(radioWrap);
						var nameText = document.createElement("div");
						nameText.className = "kt-name";
						nameText.innerHTML = name;
						container.appendChild(nameText);
						//添加点击事件
						common.addEvent(container, "click", function (e) {
							//   debugger
							var targetElement;
							var currentTarget = e.srcElement || e.target;
							targetElement = container.children[0].children[0];
							var lines = container.parentNode;
							// console.log(lines);
							for (var i = 1; i < lines.children.length; i++) {
								lines.children[i].children[0].children[0].className = "kt-radio";
							}
							targetElement.className = "kt-radio kt-radio-choose";
							var lineName = container.children[1].innerHTML;
							if (lineName == "均线") {
								_this.options.up_t = "junxian";
								_this.drawMA(_this.options.start, _this.options.end);
							} else if (lineName == "EXPMA") {
								_this.options.up_t = "expma";
								_this.drawEXPMA(_this.options.start, _this.options.end);
							} else if (lineName == "SAR") {
								_this.options.up_t = "sar";
								_this.drawSAR(_this.options.start, _this.options.end);
							} else if (lineName == "BOLL") {
								_this.options.up_t = "boll";
								_this.drawBOLL(_this.options.start, _this.options.end);
							} else if (lineName == "BBI") {
								_this.options.up_t = "bbi";
								_this.drawBBI(_this.options.start, _this.options.end);
							}

						});

						frag.appendChild(container);
					};
					//添加各种kt指标进pad
					// appendLine("均线", frag, true);
					// appendLine("EXPMA", frag, false);
					// appendLine("SAR", frag, false);
					// appendLine("BOLL", frag, false);
					// appendLine("BBI", frag, false);

					pad.appendChild(frag);
					this.container.appendChild(pad);

					pad.style.top = this.options.c1_y_top + "px";
					pad.style.left = this.options.canvas.width - this.options.padding.right - 10 + "px";

				}

				// 绘制技术指标
				function drawT() {
					var _this = this;
					var ctx = this.options.context;
					var canvas = this.options.canvas;
					var div_tech = document.createElement("div");
					div_tech.className = "tech-index";
					div_tech.style.width = this.options.drawWidth;
					//底下技术指标的距离
					div_tech.style.left = this.options.padding.left - 5 + "px";
					div_tech.style.top = 321 + "px";

					// rsi指标
					var rsi = document.createElement("div");
					rsi.setAttribute("id", "rsi");
					rsi.className = "tech-index-item current";
					rsi.innerText = "RSI";
					rsi.style.width = this.options.drawWidth / 18 + "px";
					rsi.style.height = this.options.unit_height / 2 + 5 + "px";
					rsi.style.lineHeight = this.options.unit_height / 2 + 5 + "px";

					// kdj指标
					var kdj = document.createElement("div");
					kdj.setAttribute("id", "kdj");
					kdj.className = "tech-index-item";
					kdj.innerText = "KDJ";
					kdj.style.width = this.options.drawWidth / 18 + "px";
					kdj.style.height = this.options.unit_height / 2 + 5 + "px";
					kdj.style.lineHeight = this.options.unit_height / 2 + 5 + "px";

					// macd指标
					var macd = document.createElement("div");
					macd.setAttribute("id", "macd");
					macd.className = "tech-index-item";
					macd.innerText = "MACD";
					macd.style.width = this.options.drawWidth / 18 + "px";
					macd.style.height = this.options.unit_height / 2 + 5 + "px";
					macd.style.lineHeight = this.options.unit_height / 2 + 5 + "px";

					// wr指标
					var wr = document.createElement("div");
					wr.setAttribute("id", "wr");
					wr.className = "tech-index-item";
					wr.innerText = "W%R";
					wr.style.width = this.options.drawWidth / 18 + "px";
					wr.style.height = this.options.unit_height / 2 + 5 + "px";
					wr.style.lineHeight = this.options.unit_height / 2 + 5 + "px";

					// dmi指标
					var dmi = document.createElement("div");
					dmi.setAttribute("id", "dmi");
					dmi.className = "tech-index-item";
					dmi.innerText = "DMI";
					dmi.style.width = this.options.drawWidth / 18 + "px";
					dmi.style.height = this.options.unit_height / 2 + 5 + "px";
					dmi.style.lineHeight = this.options.unit_height / 2 + 5 + "px";

					// bias指标
					var bias = document.createElement("div");
					bias.setAttribute("id", "bias");
					bias.className = "tech-index-item";
					bias.innerText = "BIAS";
					bias.style.width = this.options.drawWidth / 18 + "px";
					bias.style.height = this.options.unit_height / 2 + 5 + "px";
					bias.style.lineHeight = this.options.unit_height / 2 + 5 + "px";

					// obv指标
					var obv = document.createElement("div");
					obv.setAttribute("id", "obv");
					obv.className = "tech-index-item";
					obv.innerText = "OBV";
					obv.style.width = this.options.drawWidth / 18 + "px";
					obv.style.height = this.options.unit_height / 2 + 5 + "px";
					obv.style.lineHeight = this.options.unit_height / 2 + 5 + "px";

					// cci指标
					var cci = document.createElement("div");
					cci.setAttribute("id", "cci");
					cci.className = "tech-index-item";
					cci.innerText = "CCI";
					cci.style.width = this.options.drawWidth / 18 + "px";
					cci.style.height = this.options.unit_height / 2 + 5 + "px";
					cci.style.lineHeight = this.options.unit_height / 2 + 5 + "px";

					// roc指标
					var roc = document.createElement("div");
					roc.setAttribute("id", "roc");
					roc.className = "tech-index-item";
					roc.innerText = "ROC";
					roc.style.width = this.options.drawWidth / 18 + "px";
					roc.style.height = this.options.unit_height / 2 + 5 + "px";
					roc.style.lineHeight = this.options.unit_height / 2 + 5 + "px";

					div_tech.appendChild(rsi);
					div_tech.appendChild(kdj);
					div_tech.appendChild(macd);
					div_tech.appendChild(wr);
					div_tech.appendChild(dmi);
					div_tech.appendChild(bias);
					div_tech.appendChild(obv);
					div_tech.appendChild(cci);
					div_tech.appendChild(roc);
					this.container.appendChild(div_tech);

					var current = rsi;

					common.addEvent.call(_this, rsi, "click", function (event) {
						_this.drawRSI();
						current.className = current.className.replace(" current", "");
						current = rsi;
						current.className = current.className + " current";
					});

					common.addEvent.call(_this, kdj, "click", function (event) {
						_this.drawKDJ();
						current.className = current.className.replace(" current", "");
						current = kdj;
						current.className = current.className + " current";
					});

					common.addEvent.call(_this, macd, "click", function (event) {
						_this.drawMACD();
						current.className = current.className.replace(" current", "");
						current = macd;
						current.className = current.className + " current";
					});

					common.addEvent.call(_this, wr, "click", function (event) {
						_this.drawWR();
						current.className = current.className.replace(" current", "");
						current = wr;
						current.className = current.className + " current";
					});

					common.addEvent.call(_this, dmi, "click", function (event) {
						_this.drawDMI();
						current.className = current.className.replace(" current", "");
						current = dmi;
						current.className = current.className + " current";
					});

					common.addEvent.call(_this, bias, "click", function (event) {
						_this.drawBIAS();
						current.className = current.className.replace(" current", "");
						current = bias;
						current.className = current.className + " current";
					});

					common.addEvent.call(_this, obv, "click", function (event) {
						_this.drawOBV();
						current.className = current.className.replace(" current", "");
						current = obv;
						current.className = current.className + " current";
					});

					common.addEvent.call(_this, cci, "click", function (event) {
						_this.drawCCI();
						current.className = current.className.replace(" current", "");
						current = cci;
						current.className = current.className + " current";
					});

					common.addEvent.call(_this, roc, "click", function (event) {
						_this.drawROC();
						current.className = current.className.replace(" current", "");
						current = roc;
						current.className = current.className + " current";
					});

				}

				// 绘制成交量
				function drawV() {

					var ctx = this.options.context;
					var data = this.options.currentData;
					/*成交量数组*/
					var data_arr = data.data;
					/*Y轴上的最大值*/
					// var y_max = data.max;
					/*Y轴上的最小值*/
					// var y_min = data.min;
					/*最大成交量*/
					var v_max = (data.v_max / 1).toFixed(0);

					/*K线图表的高度*/
					// var c_k_height = this.options.c_k_height;
					//成交量图表的高度
					// var v_height = ctx.canvas.height - c_k_height - this.options.k_v_away - this.options.margin.top;
					var v_height = ctx.canvas.height * 3 / this.options.y_sepe_num;

					var v_base_height = this.options.v_base_height;

					var c2_y_top = this.options.c2_y_top;
					var y_v_bottom = this.options.c2_y_top + v_height;

					/*获取单位矩形对象*/
					var rect_unit = this.options.rect_unit;

					/*单位绘图矩形画布的宽度*/
					// var rect_w = rect_unit.rect_w;
					/*K线柱体的宽度*/
					var bar_w = rect_unit.bar_w;
					/*K线柱体的颜色*/
					var up_color = this.options.up_color;
					var down_color = this.options.down_color;

					//标识最大成交量
					// markVMax.apply(this,[ctx,v_max,c2_y_top]);

					ctx.lineWidth = 1;

					for (var i = 0, item; item = data_arr[i]; i++) {

						var volume = item.volume;
						var is_up = item.up;
						var bar_height = volume / v_max * v_base_height;
						var x = common.get_x.call(this, i + 1);
						var y = y_v_bottom - bar_height;

						ctx.beginPath();
						ctx.moveTo(x, y);

						if (is_up) {
							ctx.fillStyle = up_color;
							ctx.strokeStyle = up_color;
						} else {
							ctx.fillStyle = down_color;
							ctx.strokeStyle = down_color;
						}

						ctx.rect(x - bar_w / 2, y, bar_w, bar_height);
						ctx.stroke();
						ctx.fill();

					}

				}

				// 绘制成交量均线
				ChartK.prototype.drawVMA = function () {

					var data = this.options.currentData;
					var ctx = this.options.context;
					// 图表交互
					var inter = this.options.interactive;
					var v_ma_5 = data.v_ma_5;
					var v_ma_10 = data.v_ma_10;
					var v_max = (data.v_max / 1).toFixed(0);
					var v_base_height = this.options.v_base_height;
					var c2_y_top = this.options.c2_y_top;


					this.options.v_ma_5 = getMAData.apply(this, [ctx, v_ma_5, "#488ee6"]);
					this.options.v_ma_10 = getMAData.apply(this, [ctx, v_ma_10, "#f4cb15"]);

					inter.default_volume = data.data[data.data.length - 1];
					inter.default_vm5 = v_ma_5[v_ma_5.length - 1];
					inter.default_vm10 = v_ma_10[v_ma_10.length - 1];

					function getMAData(ctx, data_arr, color) {
						var ma_data = [];
						ctx.save();
						ctx.beginPath();
						ctx.strokeStyle = color;
						for (var i = 0; i < data_arr.length; i++) {
							var item = data_arr[i];
							if (item) {
								var x = common.get_x.call(this, i + 1);
								var y = (1 - item.value / v_max) * v_base_height + c2_y_top;
								//横坐标和均线数据
								ma_data.push(item);
								if (i == 0) {
									ctx.moveTo(x, y);
								} else {
									ctx.lineTo(x, y);
								}
							}

						}
						ctx.stroke();
						ctx.restore();
						return ma_data;
					}

					// 标识最大成交量
					function markVMax(ctx, v_max, y_v_end) {
						ctx.beginPath();
						ctx.fillStyle = '#999';
						ctx.fillText(common.format_unit(v_max), 0, y_v_end + 10);
						ctx.stroke();
					}

					// 获取最大成交量
					function getVMax(data) {
						if (data.data[0]) {
							var max = data.data[0].volume;
						} else {
							var max = 0;
						}

						for (var i = 0, item = data.data; i < data.data.length; i++) {
							if (max < item[i].volume) {
								max = item[i].volume;
							}
						}
						return max;
					}
				}

				// 绘制均线和rsi指标
				function init_ma_rsi() {

					var _this = this;
					this.clearK();
					this.options.drawXY.drawXYK();
					this.drawK();

					var inter = this.options.interactive;

					var params = {};
					params = getParamsObj.call(this);

					var j1 = EMcookie.getCookie("ma1_default_num") == null ? 5 : EMcookie.getCookie("ma1_default_num");
					var j2 = EMcookie.getCookie("ma2_default_num") == null ? 10 : EMcookie.getCookie("ma2_default_num");
					var j3 = EMcookie.getCookie("ma3_default_num") == null ? 20 : EMcookie.getCookie("ma3_default_num");
					var j4 = EMcookie.getCookie("ma4_default_num") == null ? 30 : EMcookie.getCookie("ma4_default_num");

					params.extend = "cma" + "," + j1 + "," + j2 + "," + j3 + "," + j4 + "|rsi";
					this.options.up_t = "junxian";
					this.options.down_t = "rsi";

					GetTeacData(params, function (data) {
						console.log('GetTeacData111', data);

						_this.options.junxian = {};

						/*5日均线数据*/
						_this.options.junxian["ma" + j1] = data.five_average;
						/*10日均线数据*/
						_this.options.junxian["ma" + j2] = data.ten_average;
						/*20日均线数据*/
						_this.options.junxian["ma" + j3] = data.twenty_average;
						/*30日均线数据*/
						_this.options.junxian["ma" + j4] = data.thirty_average;

						_this.options.rsi = {};
						_this.options.rsi.rsi6 = data.rsi6;
						_this.options.rsi.rsi12 = data.rsi12;
						_this.options.rsi.rsi24 = data.rsi24;

						temp_ma.apply(_this, []);
						temp_rsi.apply(_this, []);

						if (_this.options.interactive.options.markMAContainer) {
							_this.options.interactive.options.markMAContainer.innerHTML = "";
							_this.options.interactive.options.markMAContainer = null;
						} else {
							_this.options.interactive.options.markMAContainer = null;
						}

						// 绑定事件
						bindEvent.call(_this, _this.options.context);

						inter.markMA(_this.options.canvas, "junxian", _this.options["junxian"], _this.options.start, _this.options.end, "", _this.options.maColor);
						inter.markT(_this.options.canvas, "rsi", _this.options["rsi"], _this.options.start, _this.options.end, 59);
					});

					function temp_rsi() {
						var rsi6 = this.options.rsi.rsi6;
						var rsi12 = this.options.rsi.rsi12;
						var rsi24 = this.options.rsi.rsi24;
						var start = this.options.start;
						var end = this.options.end;
						DrawRSI.apply(this, [this.options.context, rsi6.slice(start, end), rsi12.slice(start, end), rsi24.slice(start, end)]);
					}

					function temp_ma() {
						var _this = this;
						var ctx = _this.options.context;
						var data = _this.options.junxian;
						var start = _this.options.start;
						var end = _this.options.end;
						// 图表交互
						var inter = _this.options.interactive;

						/*5日均线数据*/
						var five_average = data["ma" + j1].slice(start, end);
						/*10日均线数据*/
						var ten_average = data["ma" + j2].slice(start, end);
						/*20日均线数据*/
						var twenty_average = data["ma" + j3].slice(start, end);
						/*30日均线数据*/
						var thirty_average = data["ma" + j4].slice(start, end);

						// var v_ma_5 = data.v_ma_5;
						// var v_ma_10 = data.v_ma_10;

						inter.default_m5 = five_average[five_average.length - 1];
						inter.default_m10 = ten_average[ten_average.length - 1];
						inter.default_m20 = twenty_average[twenty_average.length - 1];
						inter.default_m30 = thirty_average[thirty_average.length - 1];

						// inter.default_volume = data.data[data.data.length - 1];
						// inter.default_vm5 = v_ma_5[v_ma_5.length - 1];
						// inter.default_vm10 = v_ma_10[v_ma_10.length - 1];

						if (j1 && j1 != 0) {
							getMAData.apply(_this, [ctx, five_average, this.options.color.m5Color]);
						}

						if (j2 && j2 != 0) {
							getMAData.apply(_this, [ctx, ten_average, this.options.color.m10Color]);
						}

						if (j3 && j3 != 0) {
							getMAData.apply(_this, [ctx, twenty_average, this.options.color.m20Color]);
						}

						if (j4 && j4 != 0) {
							getMAData.apply(_this, [ctx, thirty_average, this.options.color.m30Color]);
						}

					}


					function getMAData(ctx, data_arr, color) {

						// 保存画笔状态
						ctx.save();
						var ma_data = [];
						ctx.beginPath();
						ctx.strokeStyle = color;
						var flag = false;
						var firstNode = true;
						for (var i = 0; i < data_arr.length; i++) {
							var item = data_arr[i];
							if (item && item.value) {
								var x = common.get_x.call(this, i + 1);
								var y = common.get_y.call(this, item.value);
								if (firstNode) {
									ctx.moveTo(x, y);
									firstNode = false;
								}
								//横坐标和均线数据
								ma_data.push(item);
								if (i == 0) {
									ctx.moveTo(x, y);
								} else if (y > this.options.c_k_height || y < 0) {
									ctx.moveTo(x, y);
									flag = true;
								} else {
									if (flag) {
										ctx.moveTo(x, y);
									} else {
										ctx.lineTo(x, y);
									}
									flag = false;
								}
							}
						}

						ctx.stroke();
						ctx.restore();

						return ma_data;
					}

				}

				// 绘制K线均线
				ChartK.prototype.drawMA = function (start, end) {
					//debugger
					var _this = this;

					this.clearK();
					this.options.drawXY.drawXYK();
					this.drawK();

					var j1 = EMcookie.getCookie("ma1_default_num") == null ? 5 : EMcookie.getCookie("ma1_default_num");
					var j2 = EMcookie.getCookie("ma2_default_num") == null ? 10 : EMcookie.getCookie("ma2_default_num");
					var j3 = EMcookie.getCookie("ma3_default_num") == null ? 20 : EMcookie.getCookie("ma3_default_num");
					var j4 = EMcookie.getCookie("ma4_default_num") == null ? 30 : EMcookie.getCookie("ma4_default_num");

					var params = {};
					params = getParamsObj.call(this);
					params.extend = "cma" + "," + j1 + "," + j2 + "," + j3 + "," + j4;
					if (this.options.junxian) {
						data = _this.options.junxian;
						temp_ma.apply(_this, []);
					} else {
						GetTeacData(params, function (data) {
							_this.options.junxian = {};
							/*5日均线数据*/
							_this.options.junxian["ma" + j1] = data.five_average;
							/*10日均线数据*/
							_this.options.junxian["ma" + j2] = data.ten_average;
							/*20日均线数据*/
							_this.options.junxian["ma" + j3] = data.twenty_average;
							/*30日均线数据*/
							_this.options.junxian["ma" + j4] = data.thirty_average;

							temp_ma.apply(_this, []);

						});
					}

					function temp_ma() {
						var _this = this;
						var ctx = _this.options.context;
						var data = _this.options.junxian;

						// 图表交互
						var inter = _this.options.interactive;

						/*5日均线数据*/
						var five_average = data["ma" + j1].slice(start, end);
						/*10日均线数据*/
						var ten_average = data["ma" + j2].slice(start, end);
						/*20日均线数据*/
						var twenty_average = data["ma" + j3].slice(start, end);
						/*30日均线数据*/
						var thirty_average = data["ma" + j4].slice(start, end);

						// var v_ma_5 = data.v_ma_5;
						// var v_ma_10 = data.v_ma_10;

						inter.default_m5 = five_average[five_average.length - 1];
						inter.default_m10 = ten_average[ten_average.length - 1];
						inter.default_m20 = twenty_average[twenty_average.length - 1];
						inter.default_m30 = thirty_average[thirty_average.length - 1];

						// inter.default_volume = data.data[data.data.length - 1];
						// inter.default_vm5 = v_ma_5[v_ma_5.length - 1];
						// inter.default_vm10 = v_ma_10[v_ma_10.length - 1];

						if (j1 && j1 != 0) {
							getMAData.apply(_this, [ctx, five_average, this.options.color.m5Color]);
						}

						if (j2 && j2 != 0) {
							getMAData.apply(_this, [ctx, ten_average, this.options.color.m10Color]);
						}

						if (j3 && j3 != 0) {
							getMAData.apply(_this, [ctx, twenty_average, this.options.color.m20Color]);
						}

						if (j4 && j4 != 0) {
							getMAData.apply(_this, [ctx, thirty_average, this.options.color.m30Color]);
						}

					}


					function getMAData(ctx, data_arr, color) {

						// 保存画笔状态
						ctx.save();
						var ma_data = [];
						ctx.beginPath();
						ctx.strokeStyle = color;
						var flag = false;
						var firstNode = true;
						for (var i = 0; i < data_arr.length; i++) {
							var item = data_arr[i];
							if (item && item.value) {
								var x = common.get_x.call(this, i + 1);
								var y = common.get_y.call(this, item.value);
								if (firstNode) {
									ctx.moveTo(x, y);
									firstNode = false;
								}
								//横坐标和均线数据
								ma_data.push(item);
								if (i === 0) {
									ctx.moveTo(x, y);
								} else if (y > this.options.c_k_height || y < 0) {
									ctx.moveTo(x, y);
									flag = true;
								} else {
									if (flag) {
										ctx.moveTo(x, y);
									} else {
										ctx.lineTo(x, y);
									}
									flag = false;
								}
								// ctx.lineTo(x, y);
							}
							// ctx.lineTo(x,y);
						}

						ctx.stroke();
						ctx.restore();

						return ma_data;
					}
				}

				// 绘制K线图
				ChartK.prototype.drawK = function (data) {


					var data_arr = data == undefined ? this.options.currentData.data : data;
					var ctx = this.options.context;
					// 获取单位绘制区域
					var rect_unit = this.options.rect_unit;
					// 单位绘制区域的宽度
					// var rect_w = rect_unit.rect_w;
					// K线柱体的宽度
					var bar_w = rect_unit.bar_w;
					// K线柱体的颜色
					var up_color = this.options.up_color;
					var down_color = this.options.down_color
					// 图表交互
					var inter = this.options.interactive;
					// 上榜日数组
					var pointObj = {};
					if (this.options.markPoint && this.options.markPoint.show) {
						var array = this.options.markPoint.dateList;
						for (var index in array) {
							pointObj[array[index]] = array[index];
						}
					}

					var params = {};

					for (var i = 0, item; item = data_arr[i]; i++) {
						// 是否上涨
						var is_up = item.up;

						ctx.beginPath();
						ctx.lineWidth = 1;

						if (is_up) {
							ctx.fillStyle = up_color;
							ctx.strokeStyle = up_color
						} else {
							ctx.fillStyle = down_color
							ctx.strokeStyle = down_color
						}

						params.ctx = ctx;
						var x = params.x = common.get_x.call(this, i + 1);
						params.y_open = common.get_y.call(this, item.open);
						var y_close = params.y_close = common.get_y.call(this, item.close);
						params.y_highest = common.get_y.call(this, item.highest);
						params.y_lowest = common.get_y.call(this, item.lowest);

						item.cross_x = x;
						item.cross_y = y_close;
						item.cross_y_open = params.y_open;
						item.cross_y_lowest = params.y_lowest;
						item.cross_y_highest = params.y_highest;

						//标识上榜日
						if (pointObj[item.data_time]) {
							inter.markPoint(x, item.data_time, this.options.context.canvas, this.options.scale_count);
						}

						// K线柱体的宽度
						params.bar_w = bar_w;

						DrawK.apply(this, [params]);

					}

				};



				// 绘制RSI指标
				ChartK.prototype.drawRSI = function (start, end) {
					var _this = this;
					var params = {};
					params = getParamsObj.call(this);
					params.extend = this.options.down_t = "rsi";

					if (this.options.rsi) {
						temp_rsi.apply(_this, []);
					} else {
						GetTeacData(params, function (data) {
							_this.options.rsi = {};
							_this.options.rsi.rsi6 = data.rsi6;
							_this.options.rsi.rsi12 = data.rsi12;
							_this.options.rsi.rsi24 = data.rsi24;
							temp_rsi.apply(_this, []);
						});
					}

					function temp_rsi() {
						var rsi6 = this.options.rsi.rsi6;
						var rsi12 = this.options.rsi.rsi12;
						var rsi24 = this.options.rsi.rsi24;
						if (start == undefined || end == undefined) {
							start = this.options.start;
							end = this.options.end;
						}
						end = end + 1;
						DrawRSI.apply(this, [this.options.context, rsi6.slice(start, end), rsi12.slice(start, end), rsi24.slice(start, end)]);
					}

				}

				// 绘制KDJ指标
				ChartK.prototype.drawKDJ = function (start, end) {

					var _this = this;
					var params = {};
					params = getParamsObj.call(this);
					params.extend = this.options.down_t = "kdj";

					if (this.options.kdj) {
						temp_kdj.apply(_this, []);
					} else {
						GetTeacData(params, function (data) {
							_this.options.kdj = {};
							_this.options.kdj.k = data.k;
							_this.options.kdj.d = data.d;
							_this.options.kdj.j = data.j;
							temp_kdj.apply(_this, []);
						});
					}

					function temp_kdj() {
						var k = this.options.kdj.k;
						var d = this.options.kdj.d;
						var j = this.options.kdj.j;

						if (start == undefined || end == undefined) {
							start = this.options.start;
							end = this.options.end;
						}
						end = end + 1;
						DrawKDJ.apply(this, [this.options.context, k.slice(start, end), d.slice(start, end), j.slice(start, end)]);
					}

				}

				// 绘制MACD指标
				ChartK.prototype.drawMACD = function (start, end) {

					var _this = this;
					var params = {};
					params = getParamsObj.call(this);
					params.extend = this.options.down_t = "macd";

					if (this.options.macd) {
						temp_macd.apply(this, []);
					} else {
						GetTeacData(params, function (data) {
							_this.options.macd = {};
							_this.options.macd.dea = data.dea;
							_this.options.macd.diff = data.diff;
							_this.options.macd.macd = data.macd;
							temp_macd.apply(_this, []);
						});
					}

					function temp_macd() {
						var dea = this.options.macd.dea;
						var diff = this.options.macd.diff;
						var macd = this.options.macd.macd;

						if (start == undefined || end == undefined) {
							start = this.options.start;
							end = this.options.end;
						}
						end = end + 1;
						DrawMACD.apply(_this, [_this.options.context, dea.slice(start, end), diff.slice(start, end), macd.slice(start, end)]);
					}

				}

				// 绘制WD指标
				ChartK.prototype.drawWR = function (start, end) {

					var _this = this;
					var params = {};
					params = getParamsObj.call(this);
					params.extend = this.options.down_t = "wr";
					if (this.options.wr) {
						temp_wr.apply(this, []);
					} else {
						GetTeacData(params, function (data) {
							_this.options.wr = {};
							_this.options.wr.wr6 = data.wr6;
							_this.options.wr.wr10 = data.wr10;
							temp_wr.apply(_this, []);
						});
					}

					function temp_wr() {

						var wr6 = this.options.wr.wr6;
						var wr10 = this.options.wr.wr10;

						if (start == undefined || end == undefined) {
							start = this.options.start;
							end = this.options.end;
						}
						end = end + 1;
						DrawWR.apply(_this, [_this.options.context, wr6.slice(start, end), wr10.slice(start, end)]);

					}

				}

				// 绘制DMI指标
				ChartK.prototype.drawDMI = function (start, end) {

					var _this = this;
					var params = {};
					params = getParamsObj.call(this);
					params.extend = this.options.down_t = "dmi";

					if (this.options.dmi) {
						temp_dmi.apply(_this, []);
					} else {
						GetTeacData(params, function (data) {
							_this.options.dmi = {};
							_this.options.dmi.pdi = data.pdi;
							_this.options.dmi.mdi = data.mdi;
							_this.options.dmi.adx = data.adx;
							_this.options.dmi.adxr = data.adxr;
							temp_dmi.apply(_this, []);
						});

					}

					function temp_dmi() {

						var pdi = this.options.dmi.pdi;
						var mdi = this.options.dmi.mdi;
						var adx = this.options.dmi.adx;
						var adxr = this.options.dmi.adxr;

						if (start == undefined || end == undefined) {
							start = this.options.start;
							end = this.options.end;
						}
						end = end + 1;
						DrawDMI.apply(_this, [_this.options.context, pdi.slice(start, end), mdi.slice(start, end), adx.slice(start, end), adxr.slice(start, end)]);

					}


				}

				// 绘制BIAS指标
				ChartK.prototype.drawBIAS = function (start, end) {

					var _this = this;
					var params = {};
					params = getParamsObj.call(this);
					params.extend = this.options.down_t = "bias";

					if (this.options.bias) {
						temp_bias.apply(_this, []);
					} else {
						GetTeacData(params, function (data) {
							_this.options.bias = {};
							_this.options.bias.bias6 = data.bias6;
							_this.options.bias.bias12 = data.bias12;
							_this.options.bias.bias24 = data.bias24;
							temp_bias.apply(_this, []);
						});
					}

					function temp_bias() {

						var bias6 = this.options.bias.bias6;
						var bias12 = this.options.bias.bias12;
						var bias24 = this.options.bias.bias24;

						if (start == undefined || end == undefined) {
							start = this.options.start;
							end = this.options.end;
						}
						end = end + 1;
						DrawBIAS.apply(this, [this.options.context, bias6.slice(start, end), bias12.slice(start, end), bias24.slice(start, end)]);

					}

				}

				// 绘制OBV指标
				ChartK.prototype.drawOBV = function (start, end) {

					var _this = this;
					var params = {};
					params = getParamsObj.call(this);
					params.extend = this.options.down_t = "obv";

					if (_this.options.obv) {
						temp_obv.apply(this, []);
					} else {
						GetTeacData(params, function (data) {
							_this.options.obv = {};
							_this.options.obv.obv = data.obv;
							_this.options.obv.maobv = data.maobv;
							temp_obv.apply(_this, []);
						});
					}

					function temp_obv() {

						var obv = this.options.obv.obv;
						var maobv = this.options.obv.maobv;

						if (start == undefined || end == undefined) {
							start = this.options.start;
							end = this.options.end;
						}
						end = end + 1;
						DrawOBV.apply(this, [this.options.context, obv.slice(start, end), maobv.slice(start, end)]);
					}


				}

				// 绘制CCI指标
				ChartK.prototype.drawCCI = function (start, end) {

					var _this = this;

					var params = {};
					params = getParamsObj.call(this);
					params.extend = this.options.down_t = "cci";

					if (this.options.cci) {
						temp_cci.apply(_this, []);
					} else {
						GetTeacData(params, function (data) {
							_this.options.cci = {};
							_this.options.cci.cci = data.cci;
							temp_cci.apply(_this, []);
						});
					}

					function temp_cci() {
						var cci = this.options.cci.cci;

						if (start == undefined || end == undefined) {
							start = this.options.start;
							end = this.options.end;
						}
						end = end + 1;
						DrawCCI.apply(this, [this.options.context, cci.slice(start, end)]);
					}


				}

				// 绘制ROC指标
				ChartK.prototype.drawROC = function (start, end) {

					var _this = this;
					var params = {};
					params = getParamsObj.call(this);
					params.extend = this.options.down_t = "roc";

					if (_this.options.roc) {
						temp_roc.apply(_this, []);
					} else {
						GetTeacData(params, function (data) {
							_this.options.roc = {};
							_this.options.roc.roc = data.roc;
							_this.options.roc.rocma = data.rocma;

							temp_roc.apply(_this, []);
						});
					}

					function temp_roc() {
						var roc = _this.options.roc.roc;
						var rocma = _this.options.roc.rocma;

						if (start == undefined || end == undefined) {
							start = this.options.start;
							end = this.options.end;
						}
						end = end + 1;
						DrawROC.apply(_this, [_this.options.context, roc.slice(start, end), rocma.slice(start, end)]);
					}
				}

				// 绘制expma指标
				ChartK.prototype.drawEXPMA = function () {

					var _this = this;
					var params = {};
					params = getParamsObj.call(this);
					params.extend = this.options.up_t = "expma";

					if (this.options.expma) {

						temp_expma.apply(_this, [this.options.start, this.options.end]);
					} else {
						GetTeacData(params, function (data) {
							_this.options.expma = {};

							_this.options.expma.expma12 = data.expma12;
							_this.options.expma.expma50 = data.expma50;

							temp_expma.apply(_this, [_this.options.start, _this.options.end]);
						});
					}

					function temp_expma(start, end) {
						var expma12 = this.options.expma.expma12.slice(start, end);
						var expma50 = this.options.expma.expma50.slice(start, end);
						var expma_arr = expma12.concat(expma50);

						var max = _this.options.currentData.max;
						var min = _this.options.currentData.min;
						for (var i = 0, item; item = expma_arr[i]; i++) {
							max = Math.max(max, item.value);
							min = Math.min(min, item.value);
						}
						this.options.currentData.max = max;
						this.options.currentData.min = min;
						this.options.drawXY.options.currentData = this.options.currentData;

						DrawEXPMA.apply(this, [this.options.context, expma12, expma50]);
					}

				}


				// 绘制bool指标
				ChartK.prototype.drawBOLL = function () {

					var _this = this;
					var params = {};
					params = getParamsObj.call(this);
					params.extend = this.options.up_t = "boll";

					if (this.options.boll) {

						temp_boll.apply(_this, [_this.options.start, _this.options.end]);
					} else {
						GetTeacData(params, function (data) {

							_this.options.boll = {};
							_this.options.boll.bollup = data.bollup;
							_this.options.boll.bollmb = data.bollmb;
							_this.options.boll.bolldn = data.bolldn;

							temp_boll.apply(_this, [_this.options.start, _this.options.end]);
						});
					}


					function temp_boll(start, end) {
						var bollup = this.options.boll.bollup.slice(start, end);
						var bollmb = this.options.boll.bollmb.slice(start, end);
						var bolldn = this.options.boll.bolldn.slice(start, end);

						var boll = bollup.concat(bollmb).concat(bolldn);
						var max = _this.options.currentData.max;
						var min = _this.options.currentData.min;
						for (var i = 0, item; item = boll[i]; i++) {
							max = Math.max(max, item.value);
							min = Math.min(min, item.value);
						}
						this.options.currentData.max = max;
						this.options.currentData.min = min;
						this.options.drawXY.options.currentData = this.options.currentData;

						DrawBOLL.apply(_this, [_this.options.context, bollup, bollmb, bolldn]);
					}

				}


				// 绘制bool指标
				ChartK.prototype.drawSAR = function () {

					var _this = this;
					var params = {};
					params = getParamsObj.call(this);
					params.extend = this.options.up_t = "sar";
					var k_data_arr = this.options.currentData.data;

					if (this.options.sar) {
						temp_sar.apply(_this, [_this.options.start, _this.options.end]);
					} else {
						GetTeacData(params, function (data) {
							_this.options.sar = {};
							_this.options.sar.sar = data.sar;
							temp_sar.apply(_this, [_this.options.start, _this.options.end]);
						});
					}

					function temp_sar(start, end) {
						var sar_arr = this.options.sar.sar.slice(start, end);

						var max = _this.options.currentData.max;
						var min = _this.options.currentData.min;
						for (var i = 0, item; item = sar_arr[i]; i++) {
							max = Math.max(max, item.value);
							min = Math.min(min, item.value);
						}
						this.options.currentData.max = max;
						this.options.currentData.min = min;
						this.options.drawXY.options.currentData = this.options.currentData;

						DrawSAR.apply(_this, [_this.options.context, sar_arr, k_data_arr]);
					}

				}


				// 绘制bbi指标
				ChartK.prototype.drawBBI = function () {

					var _this = this;
					var params = {};
					params = getParamsObj.call(this);
					params.extend = this.options.up_t = "bbi";
					if (this.options.bbi) {
						temp_bbi.apply(_this, [_this.options.start, _this.options.end]);
					} else {
						GetTeacData(params, function (data) {
							_this.options.bbi = {};
							_this.options.bbi.bbi = data.bbi;
							temp_bbi.apply(_this, [_this.options.start, _this.options.end]);
						});
					}

					function temp_bbi(start, end) {

						var bbi_arr = this.options.bbi.bbi.slice(start, end);

						var max = _this.options.currentData.max;
						var min = _this.options.currentData.min;

						for (var i = 0, item; item = bbi_arr[i]; i++) {
							max = Math.max(max, item.value);
							min = Math.min(min, item.value);
						}
						this.options.currentData.max = max;
						this.options.currentData.min = min;
						this.options.drawXY.options.currentData = this.options.currentData;

						DrawBBI.apply(_this, [_this.options.context, bbi_arr]);
					}

				}



				// 清除k线图区域
				ChartK.prototype.clearK = function () {
					var ctx = this.options.context;
					//上图背景色
					ctx.fillStyle = "#1a1a26";
					// ctx.clearRect(0,this.options.unit_height * (-1),this.options.padding.left + this.options.drawWidth + 10,this.options.c2_y_top);
					// 解决兼容性问题，用fillRect清除画布内容
					ctx.fillRect(0, this.options.unit_height * (-1), this.options.padding.left + this.options.drawWidth + 10, this.options.c2_y_top);
					// if(!this.options.watermark){

					watermark.apply(this, [this.options.context, 95 + this.options.padding.right, 10, 82, 20, true]);
					this.options.watermark = true;
					// }

				}

				// 清除技术指标区域
				ChartK.prototype.clearT = function () {
					var ctx = this.options.context;
					//下图背景色
					ctx.fillStyle = "#1a1a26";
					// ctx.clearRect(0,this.options.c3_y_top - 10,this.options.padding.left + this.options.drawWidth + 10,this.options.c4_y_top);
					// 解决兼容性问题，用fillRect清除画布内容
					ctx.fillRect(0, this.options.c3_y_top - 10, this.options.padding.left + this.options.drawWidth + 10, this.options.c4_y_top);
				}
				// 放大图表
				ChartK.prototype.scalePlus = function () {
					scaleClick.call(this, true);
				}
				// 缩小图表
				ChartK.prototype.scaleMinus = function () {
					scaleClick.call(this, false);
				}

				// 复权
				ChartK.prototype.beforeBackRight = function (flag) {

					var Days = 1000000;
					var exp = new Date();
					exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);

					if (!flag) {
						window.authorityType = "";
						EMcookie.setCookie("beforeBackRight", "", exp, "/");
					} else if (flag == 1) {
						window.authorityType = "fa";
						EMcookie.setCookie("beforeBackRight", "fa", exp, "/");
					} else if (flag == 2) {
						window.authorityType = "ba";
						EMcookie.setCookie("beforeBackRight", "ba", exp, "/");
					}

					this.clear();
					this.draw();
				}

				// 缩放图表
				function scaleClick(flag) {

					var _this = this;
					var start = _this.options.start;
					var end = _this.options.end;
					var type = _this.options.type;
					var data_arr_length = _this.options.data.data.length;
					var scale_count = flag || _this.options.scale_count;

					//控制拖放最小二十个K线图
					if (scale_count) {

						if (start + 20 >= end) {
							start = end - 20;
						} else {
							start = start + 20;
						}

					} else {

						if (start - 20 <= 0) {
							start = 0;
						} else {
							start = start - 20;
						}
					}

					_this.options.start = start;
					_this.options.end = end;


					// 初始化交互
					var inter = _this.options.interactive
					// 显示loading效果
					this.options.interactive.showLoading();

					try {
						// slideBarCallback.apply(this,[start,end]);
						slideBar.apply(this, [slideBarCallback, start, end]);

						inter.hideLoading();
					} catch (e) {
						// 缩放按钮点击有效
						_this.options.clickable = true;
						// 暂无数据
						// inter.showNoData();
						// 隐藏loading效果
						inter.hideLoading();
					}


				};

				// 获取参数对象
				function getParamsObj() {
					var obj = {};
					obj.code = this.options.code;
					obj.type = this.options.type;
					obj.authorityType = window.authorityType;
					obj.extend = this.options.extend;
					return obj;
				}
				// 回调函数
				function dataCallback(data) {


					var ctx = this.options.context;
					var canvas = ctx.canvas;
					this.options.data = data == undefined ? this.options.data : data;
					console.log('this.options.data >>', this.options.data)
					data = this.options.data;

					// 图表交互
					var inter = this.options.interactive;
					if (!data || !data.data || data.data.length == 0) {
						//  隐藏loading效果
						inter.hideLoading();
						//暂无数据
						inter.showNoData();
						return;
					}

					var data_arr = data.data;

					var data_arr_length = data_arr.length;

					if (data_arr_length >= 1) {
						if (data_arr_length > 60) {
							this.options.start = data_arr_length - 60;
						} else {
							this.options.start = 0;
						}
						this.options.end = data_arr_length;
					} else {
						this.options.start = 0;
						this.options.end = 0;
					}

					//滑块位置确定当前要显示的数据
					this.options.currentData = sliceData(this.options.data, this.options.start, this.options.end);
					var current_arr = this.options.currentData.data;
					var current_arr_length = current_arr.length;
					this.options.XMark = getXMARK.apply(this, [current_arr]);



					// try{

					if (!data || !data.data || data.data.length == 0) {
						// 隐藏loading效果
						// inter.hideLoading();
						// 暂无数据
						// inter.showNoData();
						// return;
					}

					// 保留的小数位
					this.options.pricedigit = data.pricedigit;

					// 获取单位绘制区域
					var rect_unit = common.get_rect.apply(this, [canvas, current_arr_length]);
					this.options.rect_unit = rect_unit;

					slideBar.call(this, slideBarCallback);
					// slideBar({container: this.container, percent: 1486, width: this.options.drawWidth, height: 70, top:this.options.c4_y_top, left: this.options.padding.left, barStart: 200, barWidth: 100});

					// 绘制坐标轴
					var drawXY = this.options.drawXY = new DrawXY(this.options);
					// drawXY.draw.apply(this,[]);
					// 绘制K线图
					this.drawK();
					// 绘制均线
					this.options.up_t = "junxian";
					// 绘制均线和rsi指标
					init_ma_rsi.apply(this, []);


					// 绘制成交量
					drawV.apply(this, [this.options]);
					// 绘制成交量均线
					this.drawVMA();

					// 上榜日标识点
					if (this.options.interactive.options.pointsContainer) {
						var points = this.options.interactive.options.pointsContainer.children;
						this.markPointsDom = points;
					}

					// 隐藏loading效果
					inter.hideLoading();

					// 图表加载完成时间
					this.options.onChartLoaded(this);



					// }catch(e){
					//     // 缩放按钮点击有效
					//     _this.options.clickable = true;
					//     // 暂无数据
					//     inter.showNoData();
					//     // 隐藏loading效果
					//     inter.hideLoading();
					// }
					return true;
				}

				function getXMARK(arr) {

					var XMark = [];
					var current_arr = arr || this.options.currentData.data;
					var current_arr_length = current_arr.length;

					if (current_arr_length > 10) {
						XMark.push(current_arr[0].date_time);
						XMark.push(current_arr[Math.floor(current_arr_length * 1 / 4)].date_time);
						XMark.push(current_arr[Math.floor(current_arr_length * 2 / 4)].date_time);
						XMark.push(current_arr[Math.floor(current_arr_length * 3 / 4)].date_time);
						XMark.push(current_arr[current_arr_length - 1].date_time);
					} else {
						XMark.push(current_arr[0].date_time);
					}

					return XMark;
				}
				// 绑定事件
				function bindEvent(ctx) {
					var _this = this;
					var timer_s, timer_m, timer_e;
					var canvas = ctx.canvas;
					var inter = _this.options.interactive;
					//缩放按钮是否可点击
					this.options.clickable = true;

					var delayed = false;
					var delaytouch = this.options.delaytouch = true;
					common.addEvent.call(_this, canvas, "touchstart", function (event) {
						// clearTimeout(timeOut);
						// inter.show();
						if (delaytouch) {
							delayed = false;
							timer_s = setTimeout(function () {
								delayed = true;
								inter.show();
								dealEvent.apply(_this, [inter, event.changedTouches[0]]);
								event.preventDefault();
							}, 200);
						} else {
							inter.show();
							dealEvent.apply(_this, [inter, event.changedTouches[0]]);
						}

						if (_this.options.preventdefault) {
							event.preventDefault();
						}
					});
					//web端K线图移动的时候调用的这里
					common.addEvent.call(_this, canvas, "touchmove", function (event) {
						dealEvent.apply(_this, [inter, event.changedTouches[0]]);
						console.log('谁1', event.changedTouches[0])
						// dealEvent.apply(_this,[inter,event]);
						try {
							event.preventDefault();
						} catch (e) {
							event.returnValue = false;
						}
					});

					common.addEvent.call(_this, canvas, "touchend", function (event) {
						// timeOut=setTimeout(function(){ inter.hide(); }, 1000);
						if (delaytouch) {
							clearTimeout(timer_s);
						}
						// 隐藏交互效果
						inter.hide();
						if (_this.options.preventdefault) {
							event.preventDefault();
						}
					});
					common.addEvent.call(_this, canvas, "mousemove", function (event) {
						dealEvent.apply(_this, [inter, event]);
						try {
							event.preventDefault();
						} catch (e) {
							event.returnValue = false;
						}
					});

					common.addEvent.call(_this, _this.container, "mouseleave", function (event) {
						inter.hide();
						try {
							event.preventDefault();
						} catch (e) {
							event.returnValue = false;
						}
					});

					common.addEvent.call(_this, canvas, "mouseenter", function (event) {
						inter.show();
						try {
							event.preventDefault();
						} catch (e) {
							event.returnValue = false;
						}
					});

					common.addEvent.call(_this, _this.container, "mousewheel", function (event) {
						event.wheelDelta > 0 ? _this.scalePlus() : _this.scaleMinus();
						try {
							event.preventDefault();
						} catch (e) {
							event.returnValue = false;
						}
					});
					common.addEvent.call(_this, _this.container, "DOMMouseScroll", function (event) {
						event.detail > 0 ? _this.scalePlus() : _this.scaleMinus();
						try {
							event.preventDefault();
						} catch (e) {
							event.returnValue = false;
						}
					});


				}
				// 图表交互
				function dealEvent(inter, eventposition) {

					var canvas = this.options.canvas;

					var k_data = this.options.currentData.data;
					console.log('k_data>>123456123456', k_data);
					var j1 = EMcookie.getCookie("ma1_default_num") == null ? 5 : EMcookie.getCookie("ma1_default_num");
					var j2 = EMcookie.getCookie("ma2_default_num") == null ? 10 : EMcookie.getCookie("ma2_default_num");
					var j3 = EMcookie.getCookie("ma3_default_num") == null ? 20 : EMcookie.getCookie("ma3_default_num");
					var j4 = EMcookie.getCookie("ma4_default_num") == null ? 30 : EMcookie.getCookie("ma4_default_num");

					var five_average = this.options.junxian["ma" + j1];
					var ten_average = this.options.junxian["ma" + j2];
					var twenty_average = this.options.junxian["ma" + j3];
					var thirty_average = this.options.junxian["ma" + j4];

					var v_ma_5 = this.options.v_ma_5;
					var v_ma_10 = this.options.v_ma_10;

					// 单位绘制区域
					var rect_unit = this.options.rect_unit;
					// 单位绘制区域的宽度
					var rect_w = rect_unit.rect_w;
					// K线柱体的宽度
					// var bar_w = rect_unit.bar_w;

					// 鼠标事件位置
					// var w_x = eventposition.clientX;
					// var w_y = eventposition.clientY;

					var w_x = eventposition.offsetX || (eventposition.clientX - this.container.getBoundingClientRect().left);
					// var w_y = eventposition.offsetY || (eventposition.clientY - this.container.getBoundingClientRect().top);
					var w_y = 0;
					//X轴线
					var w_y = 0;
					// 鼠标在画布中的坐标
					var c_pos = common.windowToCanvas.apply(this, [canvas, w_x, w_y]);
					var c_x = (c_pos.x);
					var c_y = (c_pos.y) - this.options.margin.top;

					// 当前K线在数组中的下标

					var index = Math.floor((c_x - this.options.padding.left) / rect_w);
					if (index < 0) { index = 0; }
					try {
						if (k_data[index]) {

							// 显示十字指示线的
							var cross_w_x = k_data[index].cross_x;
							console.log('是我啊>>cross_w_x', cross_w_x)
							var cross_w_y = k_data[index].cross_y;
							console.log('是我啊>>cross_w_y', cross_w_y)
							var cross_w_y_open = k_data[index].cross_y_open;
							var cross_w_y_highest = k_data[index].cross_y_highest;
							var cross_w_y_lowest = k_data[index].cross_y_lowest;

							inter.cross(canvas, cross_w_x, cross_w_y, c_y, cross_w_y_open, cross_w_y_highest, cross_w_y_lowest);
							// 显示行情数据
							var indexYC = index == 0 ? k_data[index].open : k_data[index - 1].close; //计算昨收
							k_data[index].yc = indexYC;
							//这里控制显示具体参数的那个框
							inter.showTip(canvas, cross_w_x, cross_w_y, c_y, cross_w_y_open, cross_w_y_highest, cross_w_y_lowest, k_data[index]);
						}

						if (five_average[index]) {
							// 标识均线数据
							// inter.markMA(canvas,five_average[index],ten_average[index],twenty_average[index],thirty_average[index]);

							if (this.options.up_t == "junxian") {
								inter.markMA(canvas, this.options.up_t, this.options[this.options.up_t], this.options.start, this.options.end, index, this.options.maColor);
							} else {
								inter.markMA(canvas, this.options.up_t, this.options[this.options.up_t], this.options.start, this.options.end, index, this.options.TColor);
							}
							inter.markVMA(canvas, k_data[index].volume, v_ma_5[index], v_ma_10[index]);
							inter.markT(canvas, this.options.down_t, this.options[this.options.down_t], this.options.start, this.options.end, index);
						}
					} catch (e) {

					}

				}

				//截取数据
				function sliceData(sourceData, start, end) {

					var result = deepCopy(sourceData);
					result.max = 0;
					result.min = 100000;
					result.v_max = 0;
					result.total = end - start + 1;
					result.name = sourceData.name;
					result.code = sourceData.code;
					result.v_ma_5 = sourceData.v_ma_5.slice(start, end);
					result.v_ma_10 = sourceData.v_ma_10.slice(start, end);
					result.data = sourceData.data.slice(start, end);
					// result.data = [];

					for (var i = start; i <= end; i++) {
						if (sourceData.data[i]) {
							// result.data.push(sourceData.data[i]);
							result.max = Math.max(sourceData.data[i].highest, result.max);
							result.min = Math.min(sourceData.data[i].lowest, result.min);
							result.v_max = Math.max(sourceData.data[i].volume, result.v_max);
						}
					}

					result.max = result.max + (result.max - result.min) * 0.05;
					result.min = result.min - (result.max - result.min) * 0.05 < 0 ? 0 : result.min - (result.max - result.min) * 0.05;

					return result;
				}

				function deepCopy(source) {
					var result = {};
					for (var key in source) {
						result[key] = typeof source[key] === "object" ? deepCopy(source[key]) : source[key];
					}
					return result;
				}


				return ChartK;
			})();

			module.exports = ChartK;


			/***/
		}),
/* 94 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制直角坐标系
			 */
			var extend = __webpack_require__(21);
			/*主题*/
			var theme = __webpack_require__(7);
			/*绘制虚线*/
			var DrawDashLine = __webpack_require__(25);
			// 工具
			var common = __webpack_require__(60);
			// 格式化坐标
			var XYF = __webpack_require__(9);
			var DrawXY = (function () {
				//构造方法
				function DrawXY(options) {
					/*设置默认参数*/
					this.defaultoptions = theme.draw_xy;
					this.options = extend(this.defaultoptions, options);
					/*绘图*/
					this.draw();
				};
				/*绘图*/
				DrawXY.prototype.draw = function () {

					this.drawXYK();
					//绘制成交量坐标轴
					this.drawXYV();
					//绘制技术指标坐标轴
					this.drawXYT();
				};

				//绘制技术指标坐标轴
				DrawXY.prototype.drawXYT = function () {

					var ctx = this.options.context;

					// 保存画笔状态
					ctx.save();
					ctx.beginPath();
					ctx.fillStyle = this.options.color.fillStyle;
					ctx.strokeStyle = this.options.color.strokeStyle;
					ctx.moveTo(XYF(this.options.padding.left), XYF(this.options.c3_y_top - this.options.unit_height));
					ctx.lineTo(XYF(this.options.padding.left), XYF(this.options.c3_y_top + this.options.c_t_height));
					this.options.context.rect(XYF(this.options.padding.left), XYF(this.options.c3_y_top - this.options.unit_height), Math.round(this.options.drawWidth - 2), Math.round(this.options.c_t_height + this.options.unit_height));
					ctx.stroke();

					var c3_y_top = this.options.c3_y_top;
					ctx.fillStyle = this.options.color.fillStyle;
					ctx.strokeStyle = this.options.color.strokeStyle;
					// ctx.rect(this.options.padding.left,c2_y_top,ctx.canvas.width - this.options.padding.left - 2,v_height);
					for (var i = 0; i < 3; i++) {
						ctx.beginPath();
						var x1 = this.options.padding.left;
						var y1 = c3_y_top + ctx.canvas.height * 1 / this.options.y_sepe_num * i;
						var x2 = this.options.padding.left + this.options.drawWidth;
						var y2 = c3_y_top + ctx.canvas.height * 1 / this.options.y_sepe_num * i;

						if (i == 0 || i == 2) {
							//下面框横着的线
							ctx.strokeStyle = "rgba(199,16,72,0.3)";
							ctx.moveTo(XYF(x1), XYF(y1));
							ctx.lineTo(XYF(x2), XYF(y2));
							ctx.stroke();
						} else {
							//下面的框中间横线的线
							ctx.strokeStyle = "rgba(199,16,72,0.3)";
							//DrawDashLine(ctx, x1, y1, x2, y2, 5);
						}
					}

					ctx.beginPath();
					//下面的框竖着的线
					ctx.strokeStyle = "rgba(199,16,72,0.3)";
					/*画布宽度*/
					var k_width = this.options.drawWidth;
					/*K线图的高度*/
					var c_t_height = this.options.c_t_height;
					var unit_w = (k_width) / (this.options.x_sepe_num);
					for (var i = 0; i <= this.options.x_sepe_num; i++) {
						var x1 = this.options.padding.left + i * unit_w;
						var y1 = this.options.c3_y_top;
						var x2 = this.options.padding.left + i * unit_w;
						var y2 = this.options.c3_y_top + c_t_height;

						if (!(i == 0 || i == this.options.x_sepe_num)) {
							//虚线
							//DrawDashLine(ctx, x1, y1, x2, y2, 5);
						}

					}
					ctx.stroke();
					ctx.beginPath();

					// 恢复画笔状态
					ctx.restore();

				}

				// 绘制成交量坐标轴
				DrawXY.prototype.drawXYV = function () {

					var ctx = this.options.context;
					var data = this.options.currentData || this.options.data;

					// 保存画笔状态
					ctx.save();
					ctx.beginPath();
					//下面的图顶框
					ctx.strokeStyle = "rgba(199,16,72,0.3)";
					this.options.context.rect(XYF(this.options.padding.left), XYF(this.options.c2_y_top - this.options.unit_height), Math.round(this.options.drawWidth - 2), Math.round(this.options.c_v_height + this.options.unit_height));
					ctx.stroke();

					var c2_y_top = this.options.c2_y_top;
					ctx.fillStyle = this.options.color.fillStyle;
					ctx.strokeStyle = this.options.color.strokeStyle;
					// ctx.rect(this.options.padding.left,c2_y_top,ctx.canvas.width - this.options.padding.left - 2,v_height);
					for (var i = 0; i < 4; i++) {
						ctx.beginPath();
						var x1 = this.options.padding.left;
						var y1 = c2_y_top + ctx.canvas.height * 1 / this.options.y_sepe_num * i;
						//下面框里面的线长
						var x2 = ctx.canvas.width - 10;
						var y2 = c2_y_top + ctx.canvas.height * 1 / this.options.y_sepe_num * i;

						if (i == 0 || i == 3) {
							//下面的框那条线
							ctx.strokeStyle = "rgba(199,16,72,0.3)";
							//第一个点要先move到相应的位置
							ctx.moveTo(XYF(x1), XYF(y1));
							ctx.lineTo(XYF(x2), XYF(y2));
							ctx.stroke();
						} else {
							//下面的框上半部分横的虚线
							ctx.strokeStyle = "rgba(199,16,72,0.3)";

							//DrawDashLine(ctx, x1, Math.round(y1) + 0.5, x2, Math.round(y2) + 0.5, 5);
						}
					}

					ctx.beginPath();
					ctx.fillStyle = this.options.color.fillStyle;
					ctx.strokeStyle = this.options.color.strokeStyle;
					//下面图的上面字体大小
					ctx.font = "24px Arial,Helvetica,San-serif";
					ctx.textBaseline = "middle";
					//这里的图是上面的四个刻度
					ctx.fillText(common.format_unit(data.v_max / 1, 2), this.options.padding.left, this.options.c2_y_top + 13);
					// ctx.fillText(common.format_unit(data.v_max / 1 * 2 / 3, 2), this.options.padding.left, this.options.c2_y_top + 3 + this.options.v_base_height * 1 / 3);
					// ctx.fillText(common.format_unit(data.v_max / 1 * 1 / 3, 2), this.options.padding.left , this.options.c2_y_top + 5 + this.options.v_base_height * 2 / 3);
					//ctx.fillText(0, this.options.padding.left , this.options.c2_y_top + 7 + this.options.v_base_height * 3 / 3);

					ctx.beginPath();
					/*画布宽度*/
					var k_width = this.options.drawWidth;
					/*K线图的高度*/
					var c_v_height = this.options.c_v_height;
					var unit_w = (k_width) / (this.options.x_sepe_num);
					for (var i = 0; i <= this.options.x_sepe_num; i++) {
						var x1 = this.options.padding.left + i * unit_w;
						var y1 = this.options.c2_y_top;
						var x2 = this.options.padding.left + i * unit_w;
						var y2 = this.options.c2_y_top + c_v_height;

						if (!(i == 0 || i == this.options.x_sepe_num)) {
							//下面的图上半部分竖着的虚线
							ctx.strokeStyle = "rgba(199,16,72,0.3)";
							//DrawDashLine(ctx, x1, Math.round(y1), x2, Math.round(y2), 5);
						}

					}
					ctx.stroke();
					ctx.beginPath();

					// 恢复画笔状态
					ctx.restore();
				}

				//绘制K线图坐标轴
				DrawXY.prototype.drawXYK = function () {
					var ctx = this.options.context;
					var data = this.options.currentData || this.options.data;

					/*Y轴上的最大值*/
					var y_max = data.max;
					/*Y轴上的最小值*/
					var y_min = data.min;

					/*Y轴上分隔线数量*/
					var sepe_num = 4;

					/*K线图的高度*/
					var k_height = this.options.c_k_height;
					/*Y轴标识线列表*/
					var line_list_array = getLineList(y_max / 1, y_min / 1, sepe_num, k_height);
					console.log('line_list_array', line_list_array)
					// 保存画笔状态
					ctx.save();

					var sepe_num = line_list_array.length;
					ctx.fillStyle = this.options.color.fillStyle;
					ctx.strokeStyle = this.options.color.strokeStyle;
					//日K，周K，月K上面图字体大小
					ctx.font = "24px Arial,Helvetica,San-serif";
					ctx.textBaseline = "middle";
					for (var i = 0, item; item = line_list_array[i]; i++) {
						ctx.beginPath();
						if (i == 0 || i == line_list_array.length - 1) {
							//上面图顶部和底部的框线
							ctx.strokeStyle = "rgba(199,16,72,0.3)";
							ctx.moveTo(XYF(10), XYF(item.y));
							//顶框线长
							ctx.lineTo(XYF(ctx.canvas.width - 10), XYF(item.y));
							ctx.stroke();
						} else {
							ctx.strokeStyle = "rgba(199,16,72,0.3)";
							//上面框虚线长度
							DrawDashLine(ctx, 10, Math.round(item.y), ctx.canvas.width, Math.round(item.y), 5);
						}
						// 绘制纵坐标刻度
						ctx.moveTo(0.5, XYF(item.y + 5));
						var text = (item.num / 1).toFixed(this.options.pricedigit);
						//上面图的纵坐标
						//最顶部的那个数字要在坐标的下面
						if (i == line_list_array.length - 1) {
							ctx.fillText(text, 10, item.y + 13);
						} else {
							ctx.fillText(text, 10, item.y - 13);
						}


					}

					/*K线图的高度*/
					var k_height = this.options.c_k_height;
					// 绘制横坐标刻度
					drawXMark.apply(this, [ctx, k_height]);

					// 恢复画笔状态
					ctx.restore();
				}

				/*绘制横坐标刻度值*/
				function drawXMark(ctx, k_height) {

					/*画布宽度*/
					var k_width = this.options.drawWidth;

					var unit_w = (k_width) / (this.options.x_sepe_num);
					var XMark = this.options.XMark;

					// 保存画笔状态
					ctx.save();

					for (var i = 0; i <= this.options.x_sepe_num; i++) {
						ctx.beginPath();
						var x1 = this.options.padding.left + i * unit_w;
						var y1 = 0;
						var x2 = this.options.padding.left + i * unit_w;
						var y2 = k_height;

						if (i == 0) {
							//上面的框左边的线
							ctx.strokeStyle = "rgba(199,16,72,0.3)";
							ctx.moveTo(10, XYF(y1));
							ctx.lineTo(10, XYF(y2));
							ctx.stroke();
						} else if (i == this.options.x_sepe_num) {
							//上面的框右边的线
							ctx.strokeStyle = "rgba(199,16,72,0.3)";
							ctx.moveTo(XYF(x1 - 1), XYF(y1));
							ctx.lineTo(XYF(x2 - 1), XYF(y2));
							ctx.stroke();
						} else {
							ctx.strokeStyle = "rgba(199,16,72,0.2)";
							DrawDashLine(ctx, x1, y1, x2, y2, 5);
						}

					}

					var XMark_length = XMark.length;
					//日K，周K，月K上面图时间大小
					ctx.font = "24px Arial,Helvetica,San-serif";
					var step = 1;
					if (ctx.measureText(XMark[0]).width + 4 >= this.options.drawWidth / 6) {
						step = 2;
					}
					//上面的图时间横坐标
					// for (var j = 0; j < XMark_length; j += step) {
					// 	if (j == 0) {
					// 		ctx.fillText(XMark[j], j / 4 * this.options.drawWidth + this.options.padding.left, this.options.c_k_height + this.options.unit_height / 2);
					// 	} else if (j == XMark_length - 1) {
					// 		ctx.fillText(XMark[j], j / 4 * this.options.drawWidth + this.options.padding.left - ctx.measureText(XMark[j]).width, this.options.c_k_height + this.options.unit_height / 2);
					// 	} else {
					// 		ctx.fillText(XMark[j], j / 4 * this.options.drawWidth + this.options.padding.left - ctx.measureText(XMark[j]).width / 2, this.options.c_k_height + this.options.unit_height / 2);
					// 	}

					// }

					// 恢复画笔状态
					ctx.restore();
				}
				/*Y轴标识线列表*/
				function getLineList(y_max, y_min, sepe_num, k_height) {
					var ratio = (y_max - y_min) / (sepe_num - 1);
					var result = [];
					for (var i = 0; i < sepe_num; i++) {
						result.push({
							num: (y_min + i * ratio),
							x: 0,
							y: k_height - (i / (sepe_num - 1)) * k_height
						});

					}
					return result;
				}
				return DrawXY;
			})();

			module.exports = DrawXY;

			/***/
		}),
/* 95 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * web端 k线图数据获取
			 *
			 * 返回的数据: result = {
			 *			     			name: 名字,
			 *			        		code: 编码,
			 *			          		total: 总共的数据个数,
			 *			          		extend(为 均线， sar等参数线): [{date:2012-11-22, value: 1000}, ....]
			 *			          		data:[	
			 *			          			{date_time(日期交易), 
			 *			          			height(当天最高价), 
			 *			          			low(最低价), 
			 *			          			open(开盘价), 
			 *			          			close(收盘价), 
			 *			          			volume(当日成交量), 
			 *			          			up(涨跌), 
			 *			          			percent(涨跌百分比),
			 *			          			(根据传入的extend参数不同会返回（ma, bbi, sar, expmas, bolls等数据）)
			 *			          			},
			 *			          			.....
			 *			          			{}
			 *			          		]
			 * 						}
			 */

			var jsonp = __webpack_require__(14);
			var dealData = __webpack_require__(96);

			/**
			 * 根据传入的options获取相应的k线数据
			 * @param 	obj   options  {
			 *                        		code : 股票id
			 *                        		type： 数据类型：K（日K）,WK（周K）,MK（月K），T2（两天分时），
			 *                        				T3（三天分时），T4（四天分时），T5（五天分时），m5k（历史五分钟），
			 *                        		 		m15k（历史十五分钟），m30k（历史三十分钟），m60k（历史六十分钟）
			 *                        		percent：返回数据的长度（[0,1]）,
			 *                        		extend: MA, EXPMA, SAR, BOLL, BBI 
			 *                        	}
			 * @param  {Function} callback 返回得到的数据
			 */
			function getData(options, callback) {
				var url = "http://pdfm.eastmoney.com/EM_UBG_PDTI_Fast/api/js";
				//var callbackStr = "fsData" + (new Date()).getTime().toString();
				if (!Date.now) {
					Date.now = function () { return new Date().getTime(); };
				}
				var callbackStr = "fsData" + Math.round(Date.now() + Math.random() * 1000001);
				if (options.type.toLowerCase() == "dk") {
					options.type = 'k';
				}
				var urlData = {
					id: options.code,
					TYPE: options.type,
					js: callbackStr + '((x))',
					'rtntype': 5,
					'extend': options.extend || "MA",
					isCR: false
				};/*debugger;*/
				if (options.authorityType !== "" && options.authorityType != "undefined") {
					urlData.authorityType = options.authorityType;
				}
				// setInterval(() => {
				// 	jsonp(url, urlData, callbackStr, function (json) {
				// 		console.log('他是222', json);
				// 		//这里处理数据，郑商所有问题
				// 		var result = dealData(json, urlData.extend);
				// 		console.log('我是333', result);
				// 		callback(result);
				// 	});
				// },5000)
				jsonp(url, urlData, callbackStr, function (json) {
					console.log('他是222', json);
					//这里处理数据，郑商所有问题
					var result = dealData(json, urlData.extend);
					console.log('我是333', result);
					callback(result);
				});
			}

			module.exports = getData;

			/***/
		}),
/* 96 */
/***/ (function (module, exports) {

			/**
			 * web的k线图的数据处理
			 * json为根据id和type获得的k线数据
			 */

			function dealData(json, extendType) {
				// console.log("数据"+JSON.stringify(json))
				try {

					var result = {};
					result.data = [];
					result.max = 0;

					result.min = json.info.yc;
					result.v_max = 0;
					result.total = json.info.total;
					result.name = json.name;
					result.code = json.code;
					console.log("数据", json)
					// return;
					result.pricedigit = (json.info.pricedigit).split('.')[1] && (json.info.pricedigit).split('.')[1].length || 1;
					console.log('pricedigitr', result.pricedigit);
					var datas = json.data;
					//如果percent没定义，默认显示60个数据（需要改进）
					var askLength = json.data.length;
					console.log('ta', askLength)
					for (var i = askLength - 1; i >= 0; i--) {
						//分割data中的字符串
						var items = datas[result.total - i - 1].split(/\[|\]/);
						var itemBase = datas[result.total - i - 1].split(/\[|\]/)[0].split(",");
						var temp_arr = datas[result.total - i - 1].split(",");
						var temp_arr_length = temp_arr.length;

						var yc;
						var yesterdaySp;
						if (!datas[result.total - i - 2]) {
							yc = itemBase[1];
							yesterdaySp = itemBase[1];
						} else {
							yc = datas[result.total - i - 2].split(/\[|\]/)[0].split(",")[2] * 1.0;
							yesterdaySp = datas[result.total - i - 2].split(/\[|\]/)[0].split(",")[2] * 1.0;
						}

						//得到每个时间点的数据
						var rect = {};
						rect.date_time = itemBase[0];
						rect.highest = itemBase[3];
						rect.lowest = itemBase[4];
						rect.open = itemBase[1];
						rect.close = itemBase[2];
						rect.volume = itemBase[5];
						rect.amplitude = temp_arr[temp_arr_length - 1];
						if (itemBase[6]) {
							rect.volumeMoney = itemBase[6];
						} else {
							rect.volumeMoney = "--";
						}
						rect.priceChange = (Math.abs(rect.close - yc)).toFixed(2);
						rect.percent = (yc === 0 ? 0 : (rect.priceChange / yc * 100).toFixed(2));
						if (i == 0) {
							rect.up = (rect.close * 1.0 - rect.open * 1.0) > 0 ? true : false;
						} else {
							rect.up = (rect.close * 1.0 - yesterdaySp * 1.0) > 0 ? true : false;
						}
						var volume_5 = avgDays(datas, result.total - i - 1, 5);
						var volume_10 = avgDays(datas, result.total - i - 1, 10);

						intoArr.call(result, "v_ma_5", volume_5, rect.date_time);
						intoArr.call(result, "v_ma_10", volume_10, rect.date_time);
						result.data.push(rect);
						//获取时间段内的价格最大最小值和成交量的最大值
						result.max = getMax([result.max, rect.lowest, rect.highest * 1.0, items[1].split(",")[0], items[1].split(",")[1], items[1].split(",")[2], items[1].split(",")[3]]);
						result.min = getMin([result.min, rect.lowest, rect.highest, items[1].split(",")[0], items[1].split(",")[1], items[1].split(",")[2], items[1].split(",")[3]]);
						result.v_max = result.v_max > rect.volume * 1.0 ? result.v_max : rect.volume;
					}
					return result;
				}
				catch (e) {
					return null;

				}


			}
			//创建一个数组，并且push值
			function intoArr(name, value, date) {
				if (value === "-") {
					value = null;
				}
				if (this[name] === undefined) {
					this[name] = [{ value: value, date: date }];
				} else {
					this[name].push({ value: value, date: date });
				}
			}
			//计算前n天的平均成交量
			function avgDays(datas, i, n) {
				var result = 0;
				if (i < n) {
					return "-";
				} else {
					for (var j = 0; j < n; j++) {
						result += datas[i - j].split(",")[5] * 1.0;
					}
					result = result / n;
					return result.toFixed(2);
				}

			}
			//数组冒泡得到最大值
			function getMax(arr) {
				var max = 0;
				for (var i = 0; i < arr.length; i++) {
					max = max > arr[i] * 1.0 ? max : arr[i] * 1.0;
				}
				return max;
			}
			//数组冒泡得到最小值
			function getMin(arr) {
				var min = 100000;
				for (var i = 0; i < arr.length; i++) {
					min = min < arr[i] * 1.0 ? min : arr[i] * 1.0;
				}
				return min;
			}

			module.exports = dealData;


			/***/
		}),
/* 97 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * web 端技术指标图数据
			 * 获取的技术指标参数需要根据请求K线的格式来
			 */
			var dealData = __webpack_require__(98);
			var jsonp = __webpack_require__(14);

			function getData(options, callback) {

				var url = "http://pdfm.eastmoney.com//EM_UBG_PDTI_Fast/api/js";
				//var callbackStr = "fsDataTeac"+ options.extend.substring(0, 2) + (new Date()).getTime().toString();
				if (!Date.now) {
					Date.now = function () { return new Date().getTime(); };
				}
				var callbackStr = "fsDataTeac" + options.extend.substring(0, 2) + Math.round(Date.now() + Math.random() * 1000001);
				var urlData = {
					id: options.code,
					TYPE: options.type || "k",
					js: callbackStr + '((x))',
					'rtntype': 5,
					'extend': options.extend || "RSI|MA",
					isCR: false,
					check: "kte"
				};
				if (options.authorityType != "" && options.authorityType != "undefined") {
					urlData.authorityType = options.authorityType;
				}
				// setInterval(() => {
				// 	jsonp(url, urlData, callbackStr, function (json) {
				// 		var result = dealData(json, urlData.extend);
				// 		callback(result);
				// 	});
				// },5000)
				jsonp(url, urlData, callbackStr, function (json) {
					var result = dealData(json, urlData.extend);
					callback(result);
				});

			}

			module.exports = getData;

			/***/
		}),
/* 98 */
/***/ (function (module, exports) {

			/**
			 * web端技术指标图相关数据的处理
			 * 返回各个指标对应的数据
			 */

			function dealData(json, extendStr) {
				try {
					var result = {};
					result.name = json.name;
					result.code = json.code;
					result.pricedigit = (json.info.pricedigit).split('.')[1] && (json.info.pricedigit).split('.')[1].length || 1;

					var datas = json.data;
					var askLength = json.info.total;
					for (var i = askLength - 1; i >= 0; i--) {
						//分割data中的字符串
						var strGroup = datas[json.info.total - i - 1].split(/\[|\]/);
						var itemBase = [];
						for (var k = 0; k < strGroup.length; k++) {
							if (strGroup[k] !== ",") {
								itemBase.push(strGroup[k]);
							}
						}
						//获得的日期
						var date = datas[json.info.total - i - 1].split(/\[|\]/)[0].split(",")[0];
						//技术指标的名字
						var Tname = extendStr.split('|');
						var pricedigit = result.pricedigit;
						for (var j = 0; j < Tname.length; j++) {
							var item = itemBase[j + 1].split(",");
							switch (Tname[j].toLowerCase().split(",")[0]) {
								//K线的技术指标
								case "bbi":
									intoArr.call(result, "bbi", item[0], date, pricedigit);
									break;
								case "expma":
									intoArr.call(result, "expma12", item[0], date, pricedigit);
									intoArr.call(result, "expma50", item[1], date, pricedigit);
								case "sar":
									intoArr.call(result, "sar", item[0], date, pricedigit);
									break;
								case "boll":
									intoArr.call(result, "bollmb", item[0], date, pricedigit);
									intoArr.call(result, "bollup", item[1], date, pricedigit);
									intoArr.call(result, "bolldn", item[2], date, pricedigit);
									break;
								case "cma":
									intoArr.call(result, "five_average", item[0], date, pricedigit);
									intoArr.call(result, "ten_average", item[1], date, pricedigit);
									intoArr.call(result, "twenty_average", item[2], date, pricedigit);
									intoArr.call(result, "thirty_average", item[3], date, pricedigit);
									break;
								//单独的技术指标
								case "rsi":
									intoArr.call(result, "rsi6", item[0], date, pricedigit);
									intoArr.call(result, "rsi12", item[1], date, pricedigit);
									intoArr.call(result, "rsi24", item[2], date, pricedigit);
									break;
								case "kdj":
									intoArr.call(result, "k", item[0], date, pricedigit);
									intoArr.call(result, "d", item[1], date, pricedigit);
									intoArr.call(result, "j", item[2], date, pricedigit);
									break;
								case "macd":
									intoArr.call(result, "diff", item[0], date, pricedigit);
									intoArr.call(result, "dea", item[1], date, pricedigit);
									intoArr.call(result, "macd", item[2], date, pricedigit);
									break;
								case "wr":
									intoArr.call(result, "wr10", item[0], date, pricedigit);
									intoArr.call(result, "wr6", item[1], date, pricedigit);
									break;
								case "dmi":
									intoArr.call(result, "pdi", item[0], date, pricedigit);
									intoArr.call(result, "mdi", item[1], date, pricedigit);
									intoArr.call(result, "adx", item[2], date, pricedigit);
									intoArr.call(result, "adxr", item[3], date, pricedigit);
									break;
								case "bias":
									intoArr.call(result, "bias6", item[0], date, pricedigit);
									intoArr.call(result, "bias12", item[1], date, pricedigit);
									intoArr.call(result, "bias24", item[2], date, pricedigit);
									break;
								case "obv":
									/*数据不对*/
									intoArr.call(result, "obv", item[0], date, pricedigit);
									intoArr.call(result, "maobv", item[1], date, pricedigit);
									break;
								case "cci":
									intoArr.call(result, "cci", item[0], date, pricedigit);
									break;
								case "roc":
									intoArr.call(result, "roc", item[0], date, pricedigit);
									intoArr.call(result, "rocma", item[1], date, pricedigit);
									break;
								default:
									break;
							}
						}

					}
					return result;

				}
				catch (e) {
					return null;

				}

			}

			function intoArr(name, value, date, pricedigit) {
				if (value === "-") {
					value = null;
				}
				if (this[name] === undefined) {
					this[name] = [{ value: (value * 1.0).toFixed(pricedigit), date: date }];
				} else {
					this[name].push({ value: (value * 1.0).toFixed(pricedigit), date: date });
				}
			}
			module.exports = dealData;


			/***/
		}),
/* 99 */
/***/ (function (module, exports) {

			function drawK(params) {

				// 保存画笔状态
				var ctx = params.ctx;
				ctx.save();
				ctx.beginPath();
				ctx.lineWidth = 1;

				var x = params.x;
				var y_open = params.y_open;
				var y_close = params.y_close;
				var y_highest = params.y_highest;
				var y_lowest = params.y_lowest;
				var bar_w = params.bar_w;

				ctx.moveTo(x, y_lowest);
				ctx.lineTo(x, y_highest);
				ctx.stroke();

				ctx.beginPath();

				if (y_close >= y_open) {
					if (y_close - y_open == 0) {
						ctx.rect(params.x - bar_w / 2, y_open, bar_w, 1);
					} else {
						ctx.rect(params.x - bar_w / 2, y_open, bar_w, y_close - y_open);
					}

				} else {
					ctx.rect(params.x - bar_w / 2, y_close, bar_w, y_open - y_close);
				}

				ctx.stroke();
				ctx.fill();

				// 恢复画笔状态
				ctx.restore();
			}

			module.exports = drawK;

			/***/
		}),
/* 100 */
/***/ (function (module, exports, __webpack_require__) {

			// 工具
			var common = __webpack_require__(60);
			function drawRSI(ctx, rsi6, rsi12, rsi24) {
				this.clearT();
				this.options.drawXY.drawXYT();
				// 保存画笔状态
				ctx.save();


				var rsi_arr = rsi6.concat(rsi12).concat(rsi24);
				var rsi_arr_length = rsi_arr.length;
				if (rsi_arr && rsi_arr[0]) {
					var max = rsi_arr[0].value;
					var min = rsi_arr[0].value;
				}

				for (var i = 0; i < rsi_arr_length; i++) {
					max = Math.max(max, rsi_arr[i].value);
					min = Math.min(min, rsi_arr[i].value);
				}

				var base = max - min;
				var c_t_height = this.options.c_t_height;

				var rsi6_length = rsi6.length;
				var rsi12_length = rsi12.length;
				var rsi24_length = rsi24.length;

				var unit_w = this.options.drawWidth / rsi6_length;
				ctx.beginPath();
				ctx.strokeStyle = "#488ee6";
				for (var i = 0; i < rsi6_length; i++) {

					var y = (c_t_height - (rsi6[i].value - min) / base * c_t_height) + this.options.c3_y_top
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				ctx.beginPath();
				ctx.strokeStyle = "#f4cb15";
				for (var i = 0; i < rsi12_length; i++) {

					var y = (c_t_height - (rsi12[i].value - min) / base * c_t_height) + this.options.c3_y_top
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				ctx.beginPath();
				ctx.strokeStyle = "#fe59fe";
				for (var i = 0; i < rsi24_length; i++) {

					var y = (c_t_height - (rsi24[i].value - min) / base * c_t_height) + this.options.c3_y_top
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				var middle = (max + min) / 2;
				ctx.fillStyle = this.options.color.fillStyle;
				//最下面最下面找了很久的坐标
				ctx.fillText(common.format_unit(max), 10, this.options.c3_y_top + 14);
				// ctx.fillText(common.format_unit(middle.toFixed(2)), this.options.padding.left - 5 - ctx.measureText(common.format_unit(middle.toFixed(2))).width, this.options.c3_y_top + 5 + c_t_height / 2);
				// ctx.fillText(common.format_unit(min.toFixed(2)), this.options.padding.left - 5 - ctx.measureText(common.format_unit(min.toFixed(2))).width, this.options.c3_y_top + 5 + c_t_height);
				ctx.beginPath();
				ctx.restore();
			}

			module.exports = drawRSI;

			/***/
		}),
/* 101 */
/***/ (function (module, exports, __webpack_require__) {

			// 工具
			var common = __webpack_require__(60);
			function drawRSI(ctx, k, d, j) {
				this.clearT();
				this.options.drawXY.drawXYT();
				// 保存画笔状态
				ctx.save();

				var kdj_arr = k.concat(d).concat(j);
				var kdj_arr_length = kdj_arr.length;
				if (kdj_arr && kdj_arr[0]) {
					var max = kdj_arr[0].value;
					var min = kdj_arr[0].value;
				}

				for (var i = 0; i < kdj_arr_length; i++) {
					max = Math.max(max, kdj_arr[i].value);
					min = Math.min(min, kdj_arr[i].value);
				}

				var base = max - min;
				var c_t_height = this.options.c_t_height;

				var k_length = k.length;
				var d_length = d.length;
				var j_length = j.length;

				var unit_w = this.options.drawWidth / k_length;
				ctx.beginPath();
				ctx.strokeStyle = "#488ee6";
				for (var i = 0; i < k_length; i++) {

					var y = (c_t_height - (k[i].value - min) / base * c_t_height) + this.options.c3_y_top
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				ctx.beginPath();
				ctx.strokeStyle = "#f4cb15";
				for (var i = 0; i < d_length; i++) {

					var y = (c_t_height - (d[i].value - min) / base * c_t_height) + this.options.c3_y_top
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				ctx.beginPath();
				ctx.strokeStyle = "#fe59fe";
				for (var i = 0; i < j_length; i++) {

					var y = (c_t_height - (j[i].value - min) / base * c_t_height) + this.options.c3_y_top
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				var middle = (max + min) / 2;
				ctx.fillStyle = this.options.color.fillStyle;
				ctx.fillText(common.format_unit(max), 10, this.options.c3_y_top + 14);
				// ctx.fillText(common.format_unit(middle.toFixed(2)), this.options.padding.left - 5 - ctx.measureText(common.format_unit(middle.toFixed(2))).width, this.options.c3_y_top + 5 + c_t_height / 2);
				// ctx.fillText(common.format_unit(min.toFixed(2)), this.options.padding.left - 5 - ctx.measureText(common.format_unit(min.toFixed(2))).width, this.options.c3_y_top + 5 + c_t_height);
				ctx.beginPath();
				ctx.restore();
			}

			module.exports = drawRSI;

			/***/
		}),
/* 102 */
/***/ (function (module, exports, __webpack_require__) {

			// 工具
			var common = __webpack_require__(60);
			function drawWR(ctx, wr6, wr10) {
				this.clearT();
				this.options.drawXY.drawXYT();
				// 保存画笔状态
				ctx.save();

				var wr_arr = wr6.concat(wr10);
				var wr_arr_length = wr_arr.length;
				if (wr_arr && wr_arr[0]) {
					var max = wr_arr[0].value;
					var min = wr_arr[0].value;
				}

				for (var i = 0; i < wr_arr_length; i++) {
					max = Math.max(max, wr_arr[i].value);
					min = Math.min(min, wr_arr[i].value);
				}

				var base = max - min;
				var c_t_height = this.options.c_t_height;

				var wr6_length = wr6.length;
				var wr10_length = wr10.length;

				var unit_w = this.options.drawWidth / wr6_length;
				ctx.beginPath();
				ctx.strokeStyle = "#488ee6";
				for (var i = 0; i < wr6_length; i++) {

					var y = (c_t_height - (wr6[i].value - min) / base * c_t_height) + this.options.c3_y_top
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				ctx.beginPath();
				ctx.strokeStyle = "#f4cb15";
				for (var i = 0; i < wr10_length; i++) {

					var y = (c_t_height - (wr10[i].value - min) / base * c_t_height) + this.options.c3_y_top
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				var middle = (max + min) / 2;
				ctx.fillStyle = this.options.color.fillStyle;
				ctx.fillText(common.format_unit(max), 10, this.options.c3_y_top + 14);
				// ctx.fillText(common.format_unit(middle.toFixed(2)), this.options.padding.left - 5 - ctx.measureText(common.format_unit(middle.toFixed(2))).width, this.options.c3_y_top + 5 + c_t_height / 2);
				// ctx.fillText(common.format_unit(min.toFixed(2)), this.options.padding.left - 5 - ctx.measureText(common.format_unit(min.toFixed(2))).width, this.options.c3_y_top + 5 + c_t_height);

				ctx.beginPath();
				ctx.restore();
			}

			module.exports = drawWR;

			/***/
		}),
/* 103 */
/***/ (function (module, exports, __webpack_require__) {

			// 工具
			var common = __webpack_require__(60);
			function drawDMI(ctx, pdi, mdi, adx, adxr) {
				this.clearT();
				this.options.drawXY.drawXYT();
				// 保存画笔状态
				ctx.save();

				var dmi_arr = pdi.concat(mdi).concat(adx).concat(adxr);
				var dmi_arr_length = dmi_arr.length;
				if (dmi_arr && dmi_arr[0]) {
					var max = dmi_arr[0].value;
					var min = dmi_arr[0].value;
				}

				for (var i = 0; i < dmi_arr_length; i++) {
					max = Math.max(max, dmi_arr[i].value);
					min = Math.min(min, dmi_arr[i].value);
				}

				var base = max - min;
				var c_t_height = this.options.c_t_height;

				var pdi_length = pdi.length;
				var mdi_length = mdi.length;
				var adx_length = adx.length;
				var adxr_length = adxr.length;

				var unit_w = this.options.drawWidth / pdi_length;
				ctx.beginPath();


				ctx.strokeStyle = "#488ee6";
				for (var i = 0; i < pdi_length; i++) {

					var y = (c_t_height - (pdi[i].value - min) / base * c_t_height) + this.options.c3_y_top
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				ctx.beginPath();

				ctx.strokeStyle = "#f4cb15";
				for (var i = 0; i < mdi_length; i++) {

					var y = (c_t_height - (mdi[i].value - min) / base * c_t_height) + this.options.c3_y_top
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				ctx.beginPath();
				ctx.strokeStyle = "#fe59fe";
				for (var i = 0; i < adx_length; i++) {

					var y = (c_t_height - (adx[i].value - min) / base * c_t_height) + this.options.c3_y_top
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				ctx.beginPath();
				ctx.strokeStyle = "#ff5b10";
				for (var i = 0; i < adxr_length; i++) {

					var y = (c_t_height - (adxr[i].value - min) / base * c_t_height) + this.options.c3_y_top
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0 || y < this.options.c3_y_top || y > this.options.c3_y_top + 2 * this.options.unit_htight) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				var middle = (max + min) / 2;
				ctx.fillStyle = this.options.color.fillStyle;
				ctx.fillText(common.format_unit(max), 10, this.options.c3_y_top + 14);
				// ctx.fillText(common.format_unit(middle.toFixed(2)), this.options.padding.left - 5 - ctx.measureText(common.format_unit(middle.toFixed(2))).width, this.options.c3_y_top + 5 + c_t_height / 2);
				// ctx.fillText(common.format_unit(min.toFixed(2)), this.options.padding.left - 5 - ctx.measureText(common.format_unit(min.toFixed(2))).width, this.options.c3_y_top + 5 + c_t_height);
				ctx.beginPath();
				ctx.restore();
			}

			module.exports = drawDMI;

			/***/
		}),
/* 104 */
/***/ (function (module, exports, __webpack_require__) {

			// 工具
			var common = __webpack_require__(60);
			function drawRSI(ctx, bias6, bias12, bias24) {
				this.clearT();
				this.options.drawXY.drawXYT();
				// 保存画笔状态
				ctx.save();

				var bias_arr = bias6.concat(bias12).concat(bias24);
				var bias_arr_length = bias_arr.length;
				if (bias_arr && bias_arr[0]) {
					var max = bias_arr[0].value;
					var min = bias_arr[0].value;
				}

				for (var i = 0; i < bias_arr_length; i++) {
					max = Math.max(max, bias_arr[i].value);
					min = Math.min(min, bias_arr[i].value);
				}

				var base = max - min;
				var c_t_height = this.options.c_t_height;

				var bias6_length = bias6.length;
				var bias12_length = bias12.length;
				var bias24_length = bias24.length;

				var unit_w = this.options.drawWidth / bias6_length;
				ctx.beginPath();
				ctx.strokeStyle = "#488ee6";
				for (var i = 0; i < bias6_length; i++) {

					var y = (c_t_height - (bias6[i].value - min) / base * c_t_height) + this.options.c3_y_top
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				ctx.beginPath();
				ctx.strokeStyle = "#f4cb15";
				for (var i = 0; i < bias12_length; i++) {

					var y = (c_t_height - (bias12[i].value - min) / base * c_t_height) + this.options.c3_y_top
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				ctx.beginPath();
				ctx.strokeStyle = "#fe59fe";
				for (var i = 0; i < bias24_length; i++) {

					var y = (c_t_height - (bias24[i].value - min) / base * c_t_height) + this.options.c3_y_top
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				var middle = (max + min) / 2;
				ctx.fillStyle = this.options.color.fillStyle;
				ctx.fillText(common.format_unit(max), 10, this.options.c3_y_top + 14);
				// ctx.fillText(common.format_unit(middle.toFixed(2)), this.options.padding.left - 5 - ctx.measureText(common.format_unit(middle.toFixed(2))).width, this.options.c3_y_top + 5 + c_t_height / 2);
				// ctx.fillText(common.format_unit(min.toFixed(2)), this.options.padding.left - 5 - ctx.measureText(common.format_unit(min.toFixed(2))).width, this.options.c3_y_top + 5 + c_t_height);
				ctx.beginPath();
				ctx.restore();
			}

			module.exports = drawRSI;

			/***/
		}),
/* 105 */
/***/ (function (module, exports, __webpack_require__) {

			// 工具
			var common = __webpack_require__(60);
			function drawOBV(ctx, obv, maobv) {
				this.clearT();
				this.options.drawXY.drawXYT();
				// 保存画笔状态
				ctx.save();

				var obv_arr = obv.concat(maobv);
				var obv_arr_length = obv_arr.length;
				if (obv_arr && obv_arr[0]) {
					var max = obv_arr[0].value;
					var min = obv_arr[0].value;
				}

				for (var i = 0; i < obv_arr_length; i++) {
					max = Math.max(max, obv_arr[i].value);
					min = Math.min(min, obv_arr[i].value);
				}

				var base = max - min;
				var c_t_height = this.options.c_t_height;

				var obv_length = obv.length;
				var maobv_length = maobv.length;

				var unit_w = this.options.drawWidth / obv_length;
				ctx.beginPath();
				ctx.strokeStyle = "#488ee6";
				for (var i = 0; i < obv_length; i++) {

					var y = (c_t_height - (obv[i].value - min) / base * c_t_height) + this.options.c3_y_top
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				ctx.beginPath();
				ctx.strokeStyle = "#f4cb15";
				for (var i = 0; i < maobv_length; i++) {

					var y = (c_t_height - (maobv[i].value - min) / base * c_t_height) + this.options.c3_y_top
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				var middle = (max + min) / 2;
				ctx.fillStyle = this.options.color.fillStyle;
				ctx.fillText(common.format_unit(max), 10, this.options.c3_y_top + 14);
				// ctx.fillText(common.format_unit(middle.toFixed(2)), this.options.padding.left - 5 - ctx.measureText(common.format_unit(middle.toFixed(2))).width, this.options.c3_y_top + 5 + c_t_height / 2);
				// ctx.fillText(common.format_unit(min.toFixed(2)), this.options.padding.left - 5 - ctx.measureText(common.format_unit(min.toFixed(2))).width, this.options.c3_y_top + 5 + c_t_height);
				ctx.beginPath();
				ctx.restore();
			}

			module.exports = drawOBV;

			/***/
		}),
/* 106 */
/***/ (function (module, exports, __webpack_require__) {

			// 工具
			var common = __webpack_require__(60);
			function drawOBV(ctx, cci) {
				this.clearT();
				this.options.drawXY.drawXYT();
				// 保存画笔状态
				ctx.save();

				var cci_arr = cci;
				var cci_arr_length = cci.length;
				if (cci_arr && cci_arr[0]) {
					var max = cci_arr[0].value;
					var min = cci_arr[0].value;
				}

				for (var i = 0; i < cci_arr_length; i++) {
					max = Math.max(max, cci_arr[i].value);
					min = Math.min(min, cci_arr[i].value);
				}

				var base = max - min;
				var c_t_height = this.options.c_t_height;

				var cci_length = cci.length;

				var unit_w = this.options.drawWidth / cci_length;
				ctx.beginPath();
				ctx.strokeStyle = "#488ee6";
				for (var i = 0; i < cci_length; i++) {

					var y = (c_t_height - (cci[i].value - min) / base * c_t_height) + this.options.c3_y_top
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				var middle = (max + min) / 2;
				ctx.fillStyle = this.options.color.fillStyle;
				ctx.fillText(common.format_unit(max), 10, this.options.c3_y_top + 14);
				// ctx.fillText(common.format_unit(middle.toFixed(2)), this.options.padding.left - 5 - ctx.measureText(common.format_unit(middle.toFixed(2))).width, this.options.c3_y_top + 5 + c_t_height / 2);
				// ctx.fillText(common.format_unit(min.toFixed(2)), this.options.padding.left - 5 - ctx.measureText(common.format_unit(min.toFixed(2))).width, this.options.c3_y_top + 5 + c_t_height);
				ctx.beginPath();
				ctx.restore();
			}

			module.exports = drawOBV;

			/***/
		}),
/* 107 */
/***/ (function (module, exports, __webpack_require__) {

			// 工具
			var common = __webpack_require__(60);
			function drawOBV(ctx, roc, rocma) {
				this.clearT();
				this.options.drawXY.drawXYT();
				// 保存画笔状态
				ctx.save();

				var roc_arr = roc.concat(rocma);
				var roc_arr_length = roc_arr.length;
				if (roc_arr && roc_arr[0]) {
					var max = roc_arr[0].value;
					var min = roc_arr[0].value;
				}

				for (var i = 0; i < roc_arr_length; i++) {
					max = Math.max(max, roc_arr[i].value);
					min = Math.min(min, roc_arr[i].value);
				}

				var base = max - min;
				var c_t_height = this.options.c_t_height;

				var roc_length = roc.length;
				var rocma_length = rocma.length;

				var unit_w = this.options.drawWidth / roc_length;
				ctx.beginPath();
				ctx.strokeStyle = "#488ee6";
				for (var i = 0; i < roc_length; i++) {

					var y = (c_t_height - (roc[i].value - min) / base * c_t_height) + this.options.c3_y_top
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				ctx.beginPath();
				ctx.strokeStyle = "#f4cb15";
				for (var i = 0; i < rocma_length; i++) {

					var y = (c_t_height - (rocma[i].value - min) / base * c_t_height) + this.options.c3_y_top
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				var middle = (max + min) / 2;
				ctx.fillStyle = this.options.color.fillStyle;
				ctx.fillText(common.format_unit(max), 10, this.options.c3_y_top + 14);
				// ctx.fillText(common.format_unit(middle.toFixed(2)), this.options.padding.left - 5 - ctx.measureText(common.format_unit(middle.toFixed(2))).width, this.options.c3_y_top + 5 + c_t_height / 2);
				// ctx.fillText(common.format_unit(min.toFixed(2)), this.options.padding.left - 5 - ctx.measureText(common.format_unit(min.toFixed(2))).width, this.options.c3_y_top + 5 + c_t_height);
				ctx.beginPath();
				// 恢复画笔状态
				ctx.restore();
			}

			module.exports = drawOBV;

			/***/
		}),
/* 108 */
/***/ (function (module, exports, __webpack_require__) {

			// 工具
			var common = __webpack_require__(60);
			function drawEXPMA(ctx, expma12, expma50) {
				// 保存画笔状态
				ctx.save();
				this.clearK();
				this.options.drawXY.drawXYK();
				this.drawK();

				var expma12_length = expma12.length;
				var expma50_length = expma50.length;

				var unit_w = this.options.drawWidth / expma12_length;
				ctx.beginPath();
				ctx.strokeStyle = "#488ee6";
				var flag = false;
				for (var i = 0; i < expma12_length; i++) {

					var x = this.options.padding.left + i * unit_w + unit_w / 2;
					var y = common.get_y.call(this, expma12[i].value);
					if (i == 0) {
						ctx.moveTo(x, y);
					} else if (y < 0 || y > this.options.c_k_height) {
						ctx.moveTo(x, y);
						flag = true;
					} else {
						if (flag) {
							ctx.moveTo(x, y);
							flag = false;
						} else {
							ctx.lineTo(x, y);
						}
					}

				}
				ctx.stroke();

				ctx.beginPath();
				ctx.strokeStyle = "#f4cb15";
				flag = false;
				for (var i = 0; i < expma50_length; i++) {

					var x = this.options.padding.left + i * unit_w + unit_w / 2;
					var y = common.get_y.call(this, expma50[i].value);
					if (i == 0) {
						ctx.moveTo(x, y);
					} else if (y < 0 || y > this.options.c_k_height) {
						ctx.moveTo(x, y);
						flag = true;
					} else {
						if (flag) {
							ctx.moveTo(x, y);
							flag = false;
						} else {
							ctx.lineTo(x, y);
						}
						// ctx.lineTo(x,y);
					}

				}
				ctx.stroke();
				ctx.beginPath();
				ctx.restore();
			}

			module.exports = drawEXPMA;

			/***/
		}),
/* 109 */
/***/ (function (module, exports, __webpack_require__) {

			// 工具
			var common = __webpack_require__(60);
			function drawSAR(ctx, sar, k_data_arr) {
				// 保存画笔状态
				ctx.save();
				this.clearK();
				this.options.drawXY.drawXYK();
				this.drawK();

				var sar_length = sar.length;

				var unit_w = this.options.drawWidth / sar_length;
				var up_color = this.options.up_color;
				var down_color = this.options.down_color

				for (var i = 0; i < sar_length; i++) {
					ctx.beginPath();
					var is_up = k_data_arr[i].up;

					if (i == sar_length - 1) {
						if (sar[i].value > sar[i - 1].value) {
							ctx.fillStyle = up_color;
							ctx.strokeStyle = up_color;
						} else {
							ctx.fillStyle = down_color;
							ctx.strokeStyle = down_color;
						}
					} else if (sar[i + 1].value > sar[i].value) {
						ctx.fillStyle = up_color;
						ctx.strokeStyle = up_color;
					} else {
						ctx.fillStyle = down_color;
						ctx.strokeStyle = down_color;
					}

					var x = this.options.padding.left + i * unit_w + unit_w / 2;
					var y = common.get_y.call(this, sar[i].value);

					if (y <= this.options.c_k_height && y >= 0) {
						ctx.moveTo(x, y);
						ctx.arc(x, y, 3, 0, Math.PI * 2, true);
						ctx.fill();
						ctx.stroke();
					}

				}
				ctx.beginPath();
				ctx.restore();
			}

			module.exports = drawSAR;

			/***/
		}),
/* 110 */
/***/ (function (module, exports, __webpack_require__) {

			// 工具
			var common = __webpack_require__(60);
			function drawBOLL(ctx, bollup, bollmb, bolldn) {
				// 保存画笔状态
				ctx.save();
				this.clearK();
				this.options.drawXY.drawXYK();
				this.drawK();

				var bollup_length = bollup.length;
				var bollmb_length = bollmb.length;
				var bolldn_length = bolldn.length;

				var unit_w = this.options.drawWidth / bollup_length;

				ctx.beginPath();
				ctx.strokeStyle = "#f4cb15";
				var flag = false;
				for (var i = 0; i < bollup_length; i++) {

					var x = this.options.padding.left + i * unit_w + unit_w / 2;
					var y = common.get_y.call(this, bollup[i].value);

					if (i == 0) {
						ctx.moveTo(x, y);
					} else if (y < 0 || y > this.options.c_k_height) {
						ctx.moveTo(x, y);
						flag = true;
					} else {
						if (flag) {
							ctx.moveTo(x, y);
							flag = false;
						} else {
							ctx.lineTo(x, y);
						}

					}

				}
				ctx.stroke();

				ctx.beginPath();
				ctx.strokeStyle = "#488ee6";
				flag = false;
				for (var i = 0; i < bollmb_length; i++) {

					var x = this.options.padding.left + i * unit_w + unit_w / 2;
					var y = common.get_y.call(this, bollmb[i].value);

					if (i == 0) {
						ctx.moveTo(x, y);
					} else if (y < 0 || y > this.options.c_k_height) {
						ctx.moveTo(x, y);
						flag = true;
					} else {
						if (flag) {
							ctx.moveTo(x, y);
							flag = false;
						} else {
							ctx.lineTo(x, y);
						}

					}

				}
				ctx.stroke();

				ctx.beginPath();
				ctx.strokeStyle = "#fe59fe";
				flag = false;
				for (var i = 0; i < bolldn_length; i++) {

					var x = this.options.padding.left + i * unit_w + unit_w / 2;
					var y = common.get_y.call(this, bolldn[i].value);

					if (i == 0) {
						ctx.moveTo(x, y);
					} else if (y < 0 || y > this.options.c_k_height) {
						ctx.moveTo(x, y);
						flag = true;
					} else {
						if (flag) {
							ctx.moveTo(x, y);
							flag = false;
						} else {
							ctx.lineTo(x, y);
						}

					}

				}
				ctx.stroke();

				ctx.beginPath();

				ctx.restore();
			}

			module.exports = drawBOLL;

			/***/
		}),
/* 111 */
/***/ (function (module, exports, __webpack_require__) {

			// 工具
			var common = __webpack_require__(60);
			function drawEXPMA(ctx, bbi) {
				// 保存画笔状态
				ctx.save();
				this.clearK();
				this.options.drawXY.drawXYK();
				this.drawK();

				var bbi_length = bbi.length;

				var unit_w = this.options.drawWidth / bbi_length;
				ctx.beginPath();
				ctx.strokeStyle = "#488ee6";
				var flag = false;
				for (var i = 0; i < bbi_length; i++) {

					var x = this.options.padding.left + i * unit_w + unit_w / 2;
					var y = common.get_y.call(this, bbi[i].value);

					if (i == 0) {
						ctx.moveTo(x, y);
					} else if (y > this.options.c_k_height || y < 0) {
						ctx.moveTo(x, y);
						flag = true;
					} else {
						if (flag) {
							ctx.moveTo(x, y);
							flag = false;
						} else {
							ctx.lineTo(x, y);
						}
					}

				}
				ctx.stroke();

				ctx.beginPath();

				ctx.restore();
			}

			module.exports = drawEXPMA;

			/***/
		}),
/* 112 */
/***/ (function (module, exports, __webpack_require__) {

			// 工具
			var common = __webpack_require__(60);
			function drawMACD(ctx, dea, diff, macd) {
				this.clearT();
				this.options.drawXY.drawXYT();
				// 保存画笔状态
				ctx.save();

				var macd_arr = dea.concat(diff).concat(macd);
				var macd_arr_length = macd_arr.length;
				if (macd_arr && macd_arr[0]) {
					var max = macd_arr[0].value;
					var min = macd_arr[0].value;
				}

				for (var i = 0; i < macd_arr_length; i++) {
					max = Math.max(max, macd_arr[i].value);
					min = Math.min(min, macd_arr[i].value);
				}

				var base = (max - min) / 2;
				var middle = (max + min) / 2
				var middle_y = this.options.c3_y_top + this.options.c_t_height / 2;

				var c_t_height = this.options.c_t_height;

				var dea_length = dea.length;
				var diff_length = diff.length;
				var macd_length = macd.length;

				console.log(dea_length);
				console.log(macd_length);

				var unit_w = this.options.drawWidth / dea_length;
				ctx.beginPath();
				ctx.strokeStyle = "#f4cb15";
				for (var i = 0; i < dea_length; i++) {

					if (dea[i].value >= 0) {
						var y = (c_t_height / 2 - (dea[i].value - middle) / base * c_t_height / 2) + this.options.c3_y_top
					} else {
						var y = (middle - dea[i].value) / base * c_t_height / 2 + this.options.c3_y_top + c_t_height / 2;
					}
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0 || y > (this.options.c3_y_top + this.options.c_t_height) || y < this.options.c3_y_top) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();

				ctx.beginPath();
				ctx.strokeStyle = "#fe59fe";
				for (var i = 0; i < diff_length; i++) {

					if (dea[i].value >= 0) {
						var y = (c_t_height / 2 - (diff[i].value - middle) / base * c_t_height / 2) + this.options.c3_y_top
					} else {
						var y = (middle - diff[i].value) / base * c_t_height / 2 + this.options.c3_y_top + c_t_height / 2;
					}
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;

					if (i == 0 || y > (this.options.c3_y_top + this.options.c_t_height) || y < this.options.c3_y_top) {
						ctx.moveTo(x, y);
					} else {
						ctx.lineTo(x, y);
					}

				}
				ctx.stroke();


				// ctx.strokeStyle = "#fe59fe";
				for (var i = 0; i < macd_length; i++) {
					ctx.beginPath();
					var x = this.options.padding.left + (i + 1) * unit_w - unit_w / 2;
					if (macd[i].value >= middle) {
						ctx.strokeStyle = "#ff0000";
						ctx.fillStyle = "#ff0000";
						var y = (c_t_height / 2 - (macd[i].value - middle) / base * c_t_height / 2) + this.options.c3_y_top
						ctx.rect(x - (unit_w * 0.6) / 2, y, unit_w * 0.6, Math.abs(y - middle_y));
						ctx.fill();
						ctx.stroke();
					} else {
						ctx.strokeStyle = "#17b03e";
						ctx.fillStyle = "#17b03e";
						var y = (middle - diff[i].value) / base * c_t_height / 2 + this.options.c3_y_top + c_t_height / 2;
						ctx.rect(x - (unit_w * 0.6) / 2, middle_y, unit_w * 0.6, Math.abs(y - middle_y));
						ctx.fill();
						ctx.stroke();
					}

				}

				var middle = (max + min) / 2;
				ctx.fillStyle = this.options.color.fillStyle;
				ctx.fillText(common.format_unit(max), 10, this.options.c3_y_top + 10);
				// ctx.fillText(common.format_unit(middle.toFixed(2)), this.options.padding.left - 5 - ctx.measureText(common.format_unit(middle.toFixed(2))).width, this.options.c3_y_top + 5 + c_t_height / 2);
				// ctx.fillText(common.format_unit(min.toFixed(2)), this.options.padding.left - 5 - ctx.measureText(common.format_unit(min.toFixed(2))).width, this.options.c3_y_top + 5 + c_t_height);
				ctx.beginPath();
				ctx.beginPath();
				ctx.restore();
			}

			module.exports = drawMACD;

			/***/
		}),
/* 113 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 图表交互
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 * }
			 *
			 */

			// 拓展，合并，复制
			var extend = __webpack_require__(21);
			// 工具
			var common = __webpack_require__(60);
			// 主题
			var theme = __webpack_require__(7);
			var changeUnit = __webpack_require__(65);

			var Interactive = (function () {

				// 构造函数
				function Interactive(options) {
					this.defaultoptions = theme.interactive;
					this.options = {};
					this.options = extend(this.options, this.defaultoptions, options);
				}

				// 鼠标十字标识线
				Interactive.prototype.cross = function (canvas, w_x, w_y, c_y, w_y_open, w_y_highest, w_y_lowest) {
					//设备像素比
					var dpr = this.options.dpr;
					console.log('this.options.cross', this.options.cross);
					if (!this.options.cross) {
						this.options.cross = {};
						/*Y轴标识线*/
						var y_line = document.createElement("div");
						y_line.className = "cross-y";
						y_line.style.height = this.options.c4_y_top - this.options.c1_y_top - 400 + "px";
						y_line.style.top = this.options.c1_y_top + "px";
						this.options.cross.y_line = y_line;

						/*X轴标识线*/
						var x_line = document.createElement("div");
						x_line.className = "cross-x";
						x_line.style.width = this.options.drawWidth + "px";
						this.options.cross.x_line = x_line;
						/*X轴和Y轴标示线相交点,就那个蓝色点*/
						var point = document.createElement("div");
						point.className = "cross-p";
						point.style.width = "11px";
						point.style.height = "11px";
						this.options.point_width = 11;
						point.style.borderRadius = point.style.width;
						//那个坐标点的背景图
						point.style.background = "url(" + __webpack_require__(66) + ")";
						this.options.cross.point = point;
						/*创建文档碎片*/
						var frag = document.createDocumentFragment();

						frag.appendChild(x_line);
						frag.appendChild(y_line);
						frag.appendChild(point);

						document.getElementById(this.options.container).appendChild(frag);
					}
					var y_line = this.options.cross.y_line;
					var x_line_y = 0;
					console.log('谁谁谁' + w_x, w_y, c_y, w_y_open, w_y_highest, w_y_lowest)
					//计算
					//w_y_open开盘价,w_y收盘价
					if (c_y >= w_y_lowest) {
						x_line_y = w_y_open;
					} else if (c_y <= w_y_highest) {
						x_line_y = w_y;
					} else {
						if (w_y_open < w_y) {//红色
							if (c_y >= w_y && c_y <= w_y_lowest) {
								x_line_y = w_y;
							} else if (c_y >= w_y_open && c_y < w_y) {
								x_line_y = w_y_open;
							} else if (c_y >= w_y_highest && c_y < w_y_open) {
								x_line_y = w_y;
							}

						} else {//绿色
							if (c_y >= w_y_open && c_y <= w_y_lowest) {
								x_line_y = w_y_open;
							} else if (c_y >= w_y && c_y < w_y_open) {
								x_line_y = w_y;
							} else if (c_y >= w_y_highest && c_y < w_y) {
								x_line_y = w_y;
							}
						}
					}

					if (y_line) {
						//y轴的左右间距
						y_line.style.left = w_x / 2 + "px";
					}

					//十字坐标位置
					var x_line = this.options.cross.x_line;
					if (x_line) {
						x_line.style.top = x_line_y / 2 + this.options.margin.top / 2 + "px";
						x_line.style.left = this.options.padding.left + "px";
					}
					var point = this.options.cross.point;
					if (point) {
						var p_w = this.options.point_width;
						//点的左右间距
						point.style.left = w_x / 2 - p_w / 2 + "px";
						point.style.top = x_line_y / 2 + p_w + 3 + "px";
					}
				}



				Interactive.prototype.markMA = function (canvas, type, datas, start, end, index, color_arr) {
					//debugger;

					// var colors = ["#6e9fe9", "#ffba42", "#fe59fe", "#ff7e58"];
					var colors = color_arr;

					// colors.push(color_obj.m5Color);
					// colors.push(color_obj.m10Color);
					// colors.push(color_obj.m20Color);
					// colors.push(color_obj.m30Color);
					var dataObj = [];
					var i = 0;
					for (var item in datas) {
						dataObj.push({ value: datas[item].slice(start, end), name: item });
					}
					if (!this.options.markMAContainer || type != this.options.markUPTType) {

						this.options.markUPTType = type;
						//创建并添加最下方一系列技术指标的外部包含div
						if (!this.options.markMAContainer)
							this.options.markMAContainer = document.createElement("div");
						var markMAContainer = this.options.markMAContainer;
						markMAContainer.innerHTML = "";
						markMAContainer.className = "markTContainer topExplainText";
						markMAContainer.style.top = -14 + "px";
						//顶部的MA
						markMAContainer.style.left = 10 + "px";

						/*创建文档碎片*/
						var frag = document.createDocumentFragment();
						for (i = 0; i < dataObj.length; i++) {

							var span = document.createElement('span');
							var temp = dataObj[i].value.length - 1;
							span.innerHTML = dataObj[i].name.toUpperCase() + ": " + ((dataObj[i].value)[temp].value == null ? "-" : (dataObj[i].value)[temp].value);
							span.style.color = colors[i];
							frag.appendChild(span);
						}
						markMAContainer.appendChild(frag);
						this.options[type] = {};
						this.options[type].defaultMaHtml = markMAContainer.innerHTML;

						var divArr = document.getElementById(this.options.container).getElementsByTagName('div');
						if (divArr != null && divArr != undefined) {
							for (var i = divArr.length - 1; i > 0; i--) {
								if (divArr[i].className == "markTContainer topExplainText") {
									divArr[i].parentNode.removeChild(divArr[i]);
								}
							}
						}
						document.getElementById(this.options.container).appendChild(markMAContainer);
					} else {
						var markMAContainer = this.options.markMAContainer;
						var spans = markMAContainer.children;

						if (!index && type == "junxian") {
							markMAContainer.innerHTML = this.options[this.options.markUPTType].defaultMaHtml;
							for (var i = 0; i < dataObj.length; i++) {
								var span = spans[i];
								span.style.color = colors[i];
							}
							this.options[type].defaultMaHtml = markMAContainer.innerHTML;
						} else {
							//更改内容
							for (var i = 0; i < dataObj.length; i++) {
								var span = spans[i];
								try {
									span.innerHTML = dataObj[i].name.toUpperCase() + ": " + (dataObj[i].value[index].value == null ? "-" : dataObj[i].value[index].value);
								} catch (e) {
									if (!index) {


									} else if (dataObj[i].value[index].value == null || dataObj[i].value[index].value == undefined) {
										span.innerText = dataObj[i].name.toUpperCase() + ": -";
									} else {
										var span = document.createElement('span');
										span.innerHTML = dataObj[i].name.toUpperCase() + ": " + dataObj[i].value[index].value;
										span.style.color = colors[i];
										markMAContainer.appendChild(span);
									}

								}
							}
						}

					}

				}

				Interactive.prototype.markVMA = function (canvas, volume, obj_5, obj_10) {
					// debugger

					// 绘制移动平均线标识
					// var c_box = canvas.getBoundingClientRect();
					// var dpr = this.options.dpr;
					if (!this.options.mark_v_ma) {
						this.options.mark_v_ma = {};

						// 成交量均线
						var v_div_mark = document.createElement("div");
						// v_div_mark.className = "mark-ma";
						v_div_mark.className = "markTContainer middleExplainText";
						v_div_mark.style.left = this.options.padding.left - 10 + "px";
						//中间VOLUME字高度
						v_div_mark.style.top = 170 + "px";
						this.options.mark_v_ma.mark_v_ma = v_div_mark;

						/*创建文档碎片*/
						var v_frag = document.createDocumentFragment();

						// 成交量5日均线
						var v_volume = document.createElement('span');
						v_volume.style.marginLeft = "10px";
						v_volume.style.color = "#fe59fe";
						this.options.mark_v_ma.v_volume = v_volume;
						if (volume) {
							this.options.mark_v_ma.v_volume.innerText = "VOLUME: " + common.format_unit(volume, 2);
						} else {
							if (this.default_volume) {
								this.options.mark_v_ma.v_volume.innerText = "VOLUME: " + common.format_unit(this.default_volume.volume, 2);
							} else {
								this.options.mark_v_ma.v_volume.innerText = "VOLUME: -";
							}
						}

						// 成交量5日均线
						var v_ma_5 = document.createElement('span');
						v_ma_5.style.color = "#488ee6";
						this.options.mark_v_ma.v_ma_5 = v_ma_5;
						if (obj_5) {
							this.options.mark_v_ma.v_ma_5.innerText = "MA5: " + common.format_unit(obj_5.value, 2);
						} else {
							if (this.default_vm5) {
								this.options.mark_v_ma.v_ma_5.innerText = "MA5: " + common.format_unit(this.default_vm5.value, 2);
							} else {
								this.options.mark_v_ma.v_ma_5.innerText = "MA5: -";
							}
						}

						// 成交量10日均线
						var v_ma_10 = document.createElement('span');
						v_ma_10.style.color = "#f4cb15";
						// v_ma_10.style.left = this.options.padding.left + this.options.drawWidth * 1/3 - 50 + "px";
						this.options.mark_v_ma.v_ma_10 = v_ma_10;
						if (obj_10) {
							this.options.mark_v_ma.v_ma_10.innerText = "MA10: " + common.format_unit(obj_10.value, 2);
						} else {
							if (this.default_vm10) {
								this.options.mark_v_ma.v_ma_10.innerText = "MA10: " + common.format_unit(this.default_vm10.value, 2);
							} else {
								this.options.mark_v_ma.v_ma_10.innerText = "MA10: -";
							}
						}

						v_frag.appendChild(v_volume);
						v_frag.appendChild(v_ma_5);
						v_frag.appendChild(v_ma_10);
						v_div_mark.appendChild(v_frag);
						var divArr = document.getElementById(this.options.container).getElementsByTagName('div');
						if (divArr != null && divArr != undefined) {
							for (var i = divArr.length - 1; i > 0; i--) {
								if (divArr[i].className == "markTContainer middleExplainText") {
									divArr[i].parentNode.removeChild(divArr[i]);
								}
							}
						}
						document.getElementById(this.options.container).appendChild(v_div_mark);
						// div_tip.style.left = w_pos.x - 300 + "px";
					} else {
						if (volume) {
							this.options.mark_v_ma.v_volume.innerText = "VOLUME: " + common.format_unit(volume, 2);
						} else {
							if (this.default_volume) {
								this.options.mark_v_ma.v_volume.innerText = "VOLUME: " + common.format_unit(this.default_volume.volume, 2);
							} else {
								this.options.mark_v_ma.v_volume.innerText = "VOLUME: -";
							}
						}

						if (obj_5) {
							this.options.mark_v_ma.v_ma_5.innerText = "MA5: " + common.format_unit(obj_5.value, 2);
						} else {
							if (this.default_vm5) {
								this.options.mark_v_ma.v_ma_5.innerText = "MA5: " + common.format_unit(this.default_vm5.value, 2);
							} else {
								this.options.mark_v_ma.v_ma_5.innerText = "MA5: -";
							}
						}

						if (obj_10) {
							this.options.mark_v_ma.v_ma_10.innerText = "MA10: " + common.format_unit(obj_10.value, 2);
						} else {
							if (this.default_vm10) {
								this.options.mark_v_ma.v_ma_10.innerText = "MA10: " + common.format_unit(this.default_vm10.value, 2);
							} else {
								this.options.mark_v_ma.v_ma_10.innerText = "MA10: -";
							}
						}


					}

				}

				Interactive.prototype.markT = function (canvas, type, datas, start, end, index) {
					var colors = ["#6e9fe9", "#ffba42", "#fe59fe", "#ff7e58"];
					var dataObj = [];
					var i = 0;
					for (var item in datas) {
						dataObj.push({ value: datas[item].slice(start, end), name: item });
					}
					if (!this.options.markTContainer || type != this.options.markTType) {
						this.options.markTType = type;
						//创建并添加最下方一系列技术指标的外部包含div
						if (!this.options.markTContainer)
							this.options.markTContainer = document.createElement("div");
						var markTContainer = this.options.markTContainer;
						markTContainer.innerHTML = "";
						markTContainer.className = "markTContainer bottomExplainText";
						//RSI高度
						markTContainer.style.top = 250 + "px";
						markTContainer.style.left = this.options.padding.left + "px";

						/*创建文档碎片*/
						var frag = document.createDocumentFragment();
						for (i = 0; i < dataObj.length; i++) {
							var span = document.createElement('span');
							var temp = dataObj[i].value.length - 1;
							var avgValue = "-";
							if (dataObj[i].value[index] !== undefined && dataObj[i].value[index].value !== null) {
								avgValue = dataObj[i].value[index].value;
							}
							span.innerHTML = dataObj[i].name.toUpperCase() + ": " + avgValue;
							span.style.color = colors[i];
							frag.appendChild(span);
						}
						markTContainer.appendChild(frag);
						this.options[type] = {};
						this.options[type].defaultTHtml = markTContainer.innerHTML;
						var divArr = document.getElementById(this.options.container).getElementsByTagName('div');
						if (divArr != null && divArr != undefined) {
							for (var i = divArr.length - 1; i > 0; i--) {
								if (divArr[i].className == "markTContainer bottomExplainText") {
									divArr[i].parentNode.removeChild(divArr[i]);
								}
							}
						}
						document.getElementById(this.options.container).appendChild(markTContainer);
					} else {
						var markTContainer = this.options.markTContainer;
						var spans = markTContainer.children;
						//更改内容
						for (var i = 0; i < dataObj.length; i++) {
							var span = spans[i];
							try {
								span.innerHTML = dataObj[i].name.toUpperCase() + ": " + (dataObj[i].value[index].value == null ? "-" : dataObj[i].value[index].value);
							} catch (e) {
								if (dataObj[i].value[index].value == null || dataObj[i].value[index].value == undefined) {
									span.innerText = dataObj[i].name.toUpperCase() + ": -";
								} else {
									var span = document.createElement('span');
									span.innerHTML = dataObj[i].name.toUpperCase() + ": " + dataObj[i].value[index].value;
									span.style.color = colors[i];
									markTContainer.appendChild(span);
								}

							}
						}
					}
				}


				// 缩放
				Interactive.prototype.scale = function (canvas) {
					/*K线图表右下角相对于父容器的位置*/
					var w_pos = common.canvasToWindow.apply(this, [canvas, canvas.width, this.options.c_k_height]);
					if (!this.options.scale) {
						this.options.scale = {};
						/*创建外部包裹元素*/
						var scale_div = document.createElement("div");
						scale_div.className = "scale-div";
						scale_div.style.left = canvas.width - this.options.padding.right - 120 + "px";
						scale_div.style.top = w_pos.y - 40 + "px";
						this.options.scale.scale = scale_div;

						/*创建文档碎片*/
						var frag = document.createDocumentFragment();

						/*创建减号*/
						var minus_button = document.createElement('span');
						minus_button.className = "span-minus";
						this.options.scale.minus = minus_button;

						/*创建加号*/
						var plus_button = document.createElement('span');
						plus_button.className = "span-plus";
						this.options.scale.plus = plus_button;

						frag.appendChild(minus_button);
						frag.appendChild(plus_button);
						scale_div.appendChild(frag);
						document.getElementById(this.options.container).appendChild(scale_div);
					}
				}

				// Tip显示行情数据
				Interactive.prototype.showTip = function (canvas, w_x, w_y, c_y, w_y_open, w_y_highest, w_y_lowest, obj) {
					if (!this.options.tip) {
						this.options.tip = {};
						// 创建外部包裹元素
						var div_tip = document.createElement("div");
						//左右的那个标记显示数据的
						div_tip.className = "web-show-tip";

						this.options.tip.tip = div_tip;
						div_tip.style.top = this.options.c1_y_top + 30 + "px";

						// 创建文档碎片
						var frag = document.createDocumentFragment();

						// 创建收盘价格
						var date_data = document.createElement('div');
						date_data.className = "web-tip-first-line";
						this.options.tip.date_data = date_data;
						date_data.innerText = obj.date_time;

						//组建一行数据
						var tipsLine = function (type, name) {
							var data_name = document.createElement('div');
							data_name.className = "web-tip-line-left";
							data_name.innerText = name;

							var data_data = document.createElement('div');
							data_data.className = "web-tip-line-right";
							this.options.tip[type] = data_data;

							var web_tip_line_container = document.createElement("div");
							web_tip_line_container.className = "web-tip-line-container";
							web_tip_line_container.appendChild(data_name);
							web_tip_line_container.appendChild(data_data);

							return web_tip_line_container;
						}
						// 创建百分比
						var percent = document.createElement('span');
						this.options.tip.percent = percent;

						// 创建股数
						var count = document.createElement('span');
						this.options.tip.count = count;

						// 创建时间
						var time = document.createElement('span');
						this.options.tip.time = time;

						frag.appendChild(date_data);
						//添加各项数据
						frag.appendChild(tipsLine.call(this, "open", "开盘"));
						frag.appendChild(tipsLine.call(this, "highest", "最高"));
						frag.appendChild(tipsLine.call(this, "lowest", "最低"));
						frag.appendChild(tipsLine.call(this, "close", "收盘"));
						frag.appendChild(tipsLine.call(this, "percent", "涨跌幅"));
						frag.appendChild(tipsLine.call(this, "priceChange", "涨跌额"));
						frag.appendChild(tipsLine.call(this, "count", "成交量"));
						frag.appendChild(tipsLine.call(this, "volumeMoney", "成交金额"));
						frag.appendChild(tipsLine.call(this, "amplitude", "振幅"));
						div_tip.appendChild(frag);
						document.getElementById(this.options.container).appendChild(div_tip);
						this.options.tip.div_tip_width = div_tip.clientWidth;

						percent.className = percent.className;
						count.className = count.className;
						time.className = time.className;

					} else {
						var tip_obj = this.options.tip;
						var div_tip = this.options.tip.tip;
						var volume = obj.volume;

						/*判断哪个数据段加粗*/
						if (c_y >= w_y_lowest) {
							x_line_y = w_y_lowest;
						} else if (c_y <= w_y_highest) {
							x_line_y = w_y_highest;
						} else {
							if (w_y_open < w_y) {
								if (c_y >= w_y && c_y <= w_y_lowest) {
									x_line_y = w_y;
								} else if (c_y >= w_y_open && c_y < w_y) {
									x_line_y = w_y_open;
								} else if (c_y >= w_y_highest && c_y < w_y_open) {
									x_line_y = w_y_highest;
								}
							} else {
								if (c_y >= w_y_open && c_y <= w_y_lowest) {
									x_line_y = w_y_open;
								} else if (c_y >= w_y && c_y < w_y_open) {
									x_line_y = w_y;
								} else if (c_y >= w_y_highest && c_y < w_y) {
									x_line_y = w_y_highest;
								}
							}
						}

						var tipLineNames = ["close", "open", "highest", "lowest"];

						for (var i = 0; i < tipLineNames.length; i++) {
							tip_obj[tipLineNames[i]].innerText = obj[tipLineNames[i]];
							if (parseFloat(obj[tipLineNames[i]]) > obj.yc) {
								tip_obj[tipLineNames[i]].style.color = this.options.up_color;
							}
							if (parseFloat(obj[tipLineNames[i]]) < obj.yc) {
								tip_obj[tipLineNames[i]].style.color = this.options.down_color;
							}
						}

						var mark, color;
						if (obj.close - obj.yc > 0) {
							mark = "+"; color = this.options.up_color;
						} else {
							mark = "-"; color = this.options.down_color;
						}

						tip_obj.amplitude.innerText = obj.amplitude;

						tip_obj.percent.innerText = mark + obj.percent + '%';
						tip_obj.percent.style.color = color;
						tip_obj.priceChange.innerText = mark + "" + obj.priceChange;
						tip_obj.priceChange.style.color = color;
						tip_obj.volumeMoney.innerHTML = obj.volumeMoney;

						tip_obj.count.innerText = common.format_unit(obj.volume);
						tip_obj.date_data.innerHTML = obj.date_time;

						/*复原一次*/
						tip_obj.lowest.parentNode.style.fontWeight = "100";
						tip_obj.highest.parentNode.style.fontWeight = "100";
						tip_obj.close.parentNode.style.fontWeight = "100";
						tip_obj.open.parentNode.style.fontWeight = "100";

						if (x_line_y == w_y_lowest) {
							tip_obj.lowest.parentNode.style.fontWeight = "700";
						}
						if (x_line_y == w_y_highest) {
							tip_obj.highest.parentNode.style.fontWeight = "700";
						}
						if (x_line_y == w_y) {
							tip_obj.close.parentNode.style.fontWeight = "700";
						}
						if (x_line_y == w_y_open) {
							tip_obj.open.parentNode.style.fontWeight = "700";
						}
					}



					if (w_x <= (canvas.width / this.options.dpr / 2)) {
						//这里控制那个具体的框左右移动
						div_tip.style.left = (canvas.width) / this.options.dpr - this.options.tip.div_tip_width - 13 + "px";
					} else if (w_x >= (canvas.width / this.options.dpr / 2)) {
						div_tip.style.left = this.options.padding.left / this.options.dpr + "px";
					} else { }
				}


				// 标记上榜日
				Interactive.prototype.markPoint = function (x, date, canvas, scale_count) {
					if (scale_count >= 0) {
						// K线图表右下角相对于父容器的位置
						var c1_pos = common.canvasToWindow.apply(this, [canvas, canvas.width, this.options.c_1_height]);
						// 上榜日标记的横坐标
						var p_pos = common.canvasToWindow.apply(this, [canvas, x, this.options.c_1_height]);

						// 创建外部包裹元素
						var markPoint = document.createElement("div");

						markPoint.className = "mark-point";
						var imgUrl = this.options.markPoint.imgUrl;
						// 上榜日标识宽度
						var imgWidth = this.options.markPoint.width == undefined ? 15 : this.options.markPoint.width + "px";
						// 上榜日标识高度
						var imgHeight = this.options.markPoint.height == undefined ? 15 : this.options.markPoint.height + "px";
						if (imgUrl) {
							markPoint.style.background = "url(" + imgUrl + ") no-repeat center center/" + imgWidth + " " + imgHeight + " #cccccc";
							markPoint.style.background = "url(" + imgUrl + ") no-repeat center center/" + imgWidth + " " + imgHeight + " #cccccc";
						}

						if (this.options.markPoint.width && this.options.markPoint.height) {
							markPoint.style.width = imgWidth;
							markPoint.style.height = imgHeight;
						} else {
							markPoint.style.width = imgWidth;
							markPoint.style.height = imgHeight;
							// markPoint.style.borderRadius = "5px";
						}
						markPoint.setAttribute("data-point", date);
						if (!this.options.pointsContainer) {
							var pointsContainer = document.createElement("div");
							this.options.pointsContainer = pointsContainer;
							document.getElementById(this.options.container).appendChild(this.options.pointsContainer);
						}
						this.options.pointsContainer.appendChild(markPoint);
						// 定位上榜日标识点的位置
						markPoint.style.left = p_pos.x - markPoint.clientWidth / 2 + "px";
						markPoint.style.top = c1_pos.y - 30 + "px";

					}

				}

				// 显示交互效果
				Interactive.prototype.show = function () {

					if (this.options.cross) {
						var x_line = this.options.cross.x_line;
						if (x_line) {
							x_line.style.display = "block";
						}
						var y_line = this.options.cross.y_line;
						if (y_line) {
							y_line.style.display = "block";
						}
						var point = this.options.cross.point;
						if (point) {
							point.style.display = "block";
						}
					}

					if (this.options.tip) {
						var tip = this.options.tip.tip;
						if (tip) {
							tip.style.display = "block";
						}

					}
				}

				// 隐藏交互效果
				Interactive.prototype.hide = function () {

					if (this.options.cross) {
						var x_line = this.options.cross.x_line;
						if (x_line) {
							x_line.style.display = "none";
						}
						var y_line = this.options.cross.y_line;
						if (y_line) {
							y_line.style.display = "none";
						}
						var point = this.options.cross.point;
						if (point) {
							point.style.display = "none";
						}

					}

					if (this.options.markMAContainer) {
						if (this.options[this.options.markUPTType] !== undefined) {
							this.options.markMAContainer.innerHTML = this.options[this.options.markUPTType].defaultMaHtml;
						}
					}

					if (this.options.markTContainer) {
						if (this.options[this.options.markTType] !== undefined) {
							this.options.markTContainer.innerHTML = this.options[this.options.markTType].defaultTHtml;
						}
					}

					if (this.options.mark_v_ma) {

						// 成交量5日均线
						var v_volume = this.options.mark_v_ma.v_volume;
						if (v_volume) {
							if (this.default_volume) {
								this.options.mark_v_ma.v_volume.innerText = "VOLUME: " + common.format_unit(this.default_volume.volume, 2);
							} else {
								this.options.mark_v_ma.v_volume.innerText = "VOLUME: -";
							}
						}


						// 成交量5日均线
						var v_ma_5 = this.options.mark_v_ma.v_ma_5;
						if (v_ma_5) {
							if (this.default_vm5) {
								this.options.mark_v_ma.v_ma_5.innerText = "MA5: " + common.format_unit(this.default_vm5.value, 2);
							} else {
								this.options.mark_v_ma.v_ma_5.innerText = "MA5: -";
							}
						}

						// 成交量10日均线
						var v_ma_10 = this.options.mark_v_ma.v_ma_10;
						if (v_ma_10) {
							if (this.default_vm10) {
								this.options.mark_v_ma.v_ma_10.innerText = "MA10: " + common.format_unit(this.default_vm10.value, 2);
							} else {
								this.options.mark_v_ma.v_ma_10.innerText = "MA10: -";
							}
						}

					}

					if (this.options.tip) {
						var tip = this.options.tip.tip;
						if (tip) {
							tip.style.display = "none";
						}

					}

				};

				// 显示loading效果
				Interactive.prototype.showLoading = function () {

					if (this.options.loading) {
						this.options.loading.style.display = "block";
					} else {
						// 获取图表容器
						var chart_container = document.getElementById(this.options.container);
						// var chart_container_height = chart_container.offsetHeight;
						// loading提示信息
						var loading_notice = document.createElement("div");
						loading_notice.className = "loading-chart";
						//用到的图表加载中在这里
						loading_notice.innerText = "加载中...";
						loading_notice.style.height = this.options.height - 100 + "px";
						loading_notice.style.width = this.options.width + "px";
						// loading_notice.style.paddingTop = chart_container_height / 2 + "px";
						loading_notice.style.paddingTop = "100px";
						// 把提示信息添加到图表容器中
						this.options.loading = loading_notice;
						chart_container.appendChild(loading_notice);
					}

				}

				// 隐藏loading效果
				Interactive.prototype.hideLoading = function () {
					this.options.loading.style.display = "none";
				}

				// 暂无数据
				Interactive.prototype.showNoData = function () {

					if (this.options.noData) {
						this.options.noData.style.display = "block";
					} else {
						//获取图表容器
						var noData_container = document.getElementById(this.options.container);
						// var noData_container_height = noData_container.offsetHeight;
						//无数据时提示信息
						var noData_notice = document.createElement("div");
						noData_notice.className = "loading-chart";
						noData_notice.innerText = "暂无数据";
						noData_notice.style.height = this.options.height - 100 + "px";
						noData_notice.style.width = this.options.width + "px";

						noData_notice.style.paddingTop = "100px";
						//把提示信息添加到图表容器中
						this.options.noData = noData_notice;
						noData_container.appendChild(noData_notice);
					}

				}

				return Interactive;
			})();

			module.exports = Interactive;


			/***/
		}),
/* 114 */
/***/ (function (module, exports, __webpack_require__) {

			var common = __webpack_require__(60);
			/*一个测试*/
			var slideBar = function () {
				var _that = this;
				var callback = arguments[0];

				if (arguments.length == 1) {

					//第一次绘制元素
					var data = this.options.data;
					var arr = [];
					var arrYear = [];
					var max = 0;
					var min = 10000;
					var len = data.data.filter(function (item) { return item !== undefined; }).length;
					for (var i = 0; i < len; i++) {
						arr.push({ date: data.data[i].date_time, value: data.data[i].close });
						if (i == 0 || data.data[i].date_time.substring(0, 4) != data.data[i - 1].date_time.substring(0, 4)) {
							arrYear.push({ year: data.data[i].date_time.substring(0, 4), order: i });
						}
						max = Math.max(max, data.data[i].close);
						min = Math.min(min, data.data[i].close);
					}
					//添加包含的容器div和相应的canvas
					var width = _that.options.drawWidth;
					var height = _that.options.unit_height * 2;
					var container = document.createElement("div");
					container.style.position = "absolute";
					container.style.left = _that.options.padding.left + "px";
					container.style.top = _that.options.c4_y_top + "px";
					_that.container.appendChild(container);

					var cvs = document.createElement("canvas");
					try {
						var ctx = cvs.getContext('2d');
					} catch (error) {
						cvs = window.G_vmlCanvasManager.initElement(cvs);
						var ctx = cvs.getContext('2d');
					}
					container.appendChild(cvs);

					cvs.width = width;
					cvs.height = height;
					cvs.style.width = width + "px";
					cvs.style.height = height + "px";
					cvs.className = "slideBarCVS";

					//绘制背景图
					ctx.strokeStyle = "#59A7FF";
					ctx.beginPath();
					for (i = 0; i < len; i++) {
						if (i == 0) {
							ctx.moveTo(getX(len, i, cvs.width), getY(max, min, arr[i].value, cvs.height));
						} else {
							ctx.lineTo(getX(len, i, cvs.width), getY(max, min, arr[i].value, cvs.height));
						}
					}
					ctx.stroke();

					ctx.lineTo(getX(len, i, cvs.width), getY(max, min, 0, cvs.height));
					ctx.lineTo(getX(len, 0, cvs.width), getY(max, min, 0, cvs.height));
					ctx.lineTo(getX(len, 0, cvs.width), getY(max, min, arr[0].value, cvs.height));
					ctx.fillStyle = "#E4EFFF";
					ctx.fill();

					//写上年标记
					var yearLen = arrYear.length;
					var sapce = 1;
					if (yearLen <= 2) {
						sapce = 1;
					} else if (yearLen <= 7) {
						sapce = 2;
					} else if (yearLen <= 13) {
						sapce = 3;
					} else if (yearLen <= 17) {
						sapce = 4;
					} else {
						sapce = 5;
					}
					for (i = 0; i < yearLen; i += sapce) {
						drawYear(ctx, arrYear[i].order, arrYear[i].year, arr.length, width, height);
					}

					//添加滑动块
					var containerBar = document.createElement("div");
					_that.options.slideBarWrap = containerBar;
					containerBar.setAttribute("id", "slideBarWrap");
					containerBar.style.position = "absolute";
					containerBar.style.height = height + "px";
					containerBar.style.width = (len >= 60 ? 60 / len : 1) * width + "px";
					containerBar.style.top = "0px";
					containerBar.style.left = _that.options.start / len * width + "px";
					containerBar.className = "containerBar";

					var leftDrag = document.createElement("div");
					leftDrag.style.position = "absolute";
					leftDrag.style.height = height / 2 + "px";
					leftDrag.style.width = "7px";
					leftDrag.style.border = "solid 1px #999";
					leftDrag.style.top = height / 4 + "px";
					leftDrag.style.left = "-4px";
					leftDrag.style.color = "#999";
					leftDrag.className = "leftDrag";
					leftDrag.innerHTML = "|";


					var rightDrag = document.createElement("div");
					rightDrag.style.position = "absolute";
					rightDrag.style.height = height / 2 + "px";
					rightDrag.style.width = "7px";
					rightDrag.style.border = "solid 1px #999";
					rightDrag.style.top = height / 4 + "px";
					rightDrag.style.right = "-4px";
					rightDrag.style.color = "#999";
					rightDrag.className = "rightDrag";
					rightDrag.innerHTML = "|";

					container.appendChild(containerBar);
					containerBar.appendChild(leftDrag);
					containerBar.appendChild(rightDrag);

					//添加滑动块中的事件处理
					dragEvent.call(_that, callback, arr, cvs, containerBar, leftDrag, rightDrag);
				} else {
					var start = _that.options.start;
					var end = _that.options.end;
					var len = this.options.data.data.length;
					var slideBar = _that.options.slideBarWrap;
					var width = _that.options.drawWidth;
					var slideBarLeft = width * start / len + "px";
					var slideBarWidth = width * (end - start) / len + "px";
					slideBar.style.left = slideBarLeft;
					slideBar.style.width = slideBarWidth;
					callback.call(_that, start, end);
				}

			}

			/*根据数据获取坐标*/
			function getX(len, i, width) {
				return i / len * width;
			}

			/*画年限*/
			function drawYear(ctx, order, yearText, len, totalWidth, totalHeight) {
				ctx.save()
				ctx.fillStyle = "#aaa";
				ctx.strokeStyle = "#aaa";
				ctx.lineWidth = 1;
				ctx.beginPath();

				ctx.moveTo(Math.ceil(getX(len, order, totalWidth)) + 0.5, totalHeight);
				ctx.lineTo(Math.ceil(getX(len, order, totalWidth)) + 0.5, totalHeight / 2);
				ctx.font = "12px";
				ctx.fillText(yearText, Math.ceil(getX(len, order, totalWidth) + 5), totalHeight * 2 / 3);

				ctx.stroke();
				ctx.restore();
			}

			function getY(max, min, value, height) {
				return height - (value - min) / (max - min) * height;
			}

			var dragEvent = function (callback, dataArr, container, containerBar, leftDrag, rightDrag) {
				var _this = this;
				//containerBar的位置以及宽度
				var ContainerB_left = toNumber(containerBar.style.left);
				var ContainerB_width = toNumber(containerBar.style.width);
				//左边拖拽条的位置以及宽度
				var LeftD_width = toNumber(leftDrag.style.width);
				var LeftD_left = ContainerB_left - LeftD_width;
				//右边拖拽条的位置以及宽度
				var RightD_left = ContainerB_left + ContainerB_width;
				var body = document.getElementsByTagName("html")[0];
				var len = dataArr.length;
				var width = toNumber(container.style.width);
				var min_width = (len > 20 ? (20 / len) : 1) * width;
				//点击状态
				var clickedLeft = false;
				var clickedRight = false;
				var clickedBar = false;
				//是否点击了点击区
				var inArea = false;

				var offset = 0;
				var pageOffset = getOffset(container);

				common.addEvent(body, "mousedown", function (e) {
					/*检测点击了哪一个元素*/
					var winX = e.clientX - pageOffset.left;

					//判断点击了那个区域
					var target = e.target || e.srcElement;
					// debugger;
					if (target == leftDrag) {
						//点击了左边拖拽
						clickedLeft = true;
						inArea = true;
						offset = ContainerB_left - winX;
					} else if (target == rightDrag) {
						//点击了右边拖拽
						clickedRight = true;
						inArea = true;
						offset = winX - ContainerB_left - ContainerB_width;
					} else if (target == containerBar) {
						//点击了半透明区域
						clickedBar = true;
						inArea = true;
						offset = winX - ContainerB_left;
					}
				});

				common.addEvent(body, "mouseup", function (e) {
					//状态恢复
					clickedLeft = false;
					clickedRight = false;
					clickedBar = false;
					body.style.cursor = "default";
					ContainerB_left = toNumber(containerBar.style.left);
					ContainerB_width = toNumber(containerBar.style.width);
					LeftD_left = ContainerB_left - LeftD_width;
					RightD_left = ContainerB_left + ContainerB_width;
					var start = ContainerB_left / toNumber(container.style.width);
					var end = (ContainerB_left + ContainerB_width) / toNumber(container.style.width);
					if (inArea) {
						inArea = false;
						callback.call(_this, getDuring(dataArr, start, end).start, getDuring(dataArr, start, end).end);
					}

				});

				common.addEvent(body, "mousemove", function (e) {

					var winX = e.clientX - pageOffset.left;

					//判断点击了那个区域
					if (clickedLeft === true) {
						//分别改变left和width
						if ((winX - offset) >= 0) {
							if (ContainerB_width - (winX + offset - ContainerB_left) > min_width) {
								containerBar.style.left = (winX + offset) + "px";
								containerBar.style.width = ContainerB_width - (winX + offset - ContainerB_left) + "px";
							}
						} else {
							containerBar.style.left = "0px";
							containerBar.style.width = ContainerB_width + ContainerB_left + "px";
						}

					}

					if (clickedRight === true) {
						//拖动右边
						if ((winX - offset) <= toNumber(container.style.width)) {
							//保证最小宽度
							if (winX - ContainerB_left - offset > min_width) {
								containerBar.style.width = winX - ContainerB_left - offset + "px";
							}
						} else {
							//当大于外部元素宽度时，直接复制为靠近右边界
							containerBar.style.width = (toNumber(container.style.width) - ContainerB_left) + "px";
						}
					}

					if (clickedBar === true) {
						//移动滑块
						if ((winX - offset) <= 0) {
							containerBar.style.left = "0px";
						} else if ((winX - offset) >= (toNumber(container.style.width) - ContainerB_width)) {
							containerBar.style.left = toNumber(container.style.width) - ContainerB_width + "px";
						} else {
							containerBar.style.left = (winX - offset) + "px";
						}

						ContainerB_left = toNumber(containerBar.style.left);
						ContainerB_width = toNumber(containerBar.style.width);
						LeftD_left = ContainerB_left - LeftD_width;
						RightD_left = ContainerB_left + ContainerB_width;
						var start = ContainerB_left / toNumber(container.style.width);
						var end = (ContainerB_left + ContainerB_width) / toNumber(container.style.width);
						if (inArea) {
							callback.call(_this, getDuring(dataArr, start, end).start, getDuring(dataArr, start, end).end);
						}

					}
					try {
						e.preventDefault();
					} catch (e) {
						e.returnValue = false;
					}
				});

				function toNumber(str) {
					return str.replace("px", "") * 1.0;
				}
			};
			/*获取e元素相对于整个页面的位置*/
			function getOffset(e) {
				var result = {};
				result.top = e.offsetTop;
				result.left = e.offsetLeft;
				var parent = e.offsetParent;
				while (parent) {
					if (parent.nodeName === "BODY") {
						break;
					}
					result.left += parent.offsetLeft;
					result.top += parent.offsetTop;
					parent = parent.offsetParent;

				}
				return result;
			}

			/*根据比例拿时间段*/
			function getDuring(arr, start, end) {
				var result = {};
				var len = (arr.length - 1);
				result.start = Math.floor(len * start);
				result.end = Math.ceil(len * end);
				return result;
			}

			module.exports = slideBar;


			/***/
		}),
/* 115 */
/***/ (function (module, exports, __webpack_require__) {

			// 工具
			var common = __webpack_require__(60);
			// cookie
			var EMcookie = __webpack_require__(32);
			function setPreference() {
				var _this = this;

				var Days = 1000000;
				var exp = new Date();
				exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);

				var preference = document.createElement("div");
				preference.className = "preference-container";
				preference.style.top = this.options.c2_y_top + "px";
				preference.style.left = this.options.padding.left + "px";
				preference.style.width = this.options.drawWidth + "px";
				preference.style.height = this.options.canvas.height - this.options.c2_y_top + "px";

				var preference_shade = document.createElement("div");
				preference_shade.className = "preference-shade";


				// var handle = document.createElement("div");
				// handle.className = "preference-handle";
				// handle.innerHTML = "均线<br/>设置";
				// handle.style.top = this.options.c2_y_top + "px";
				// handle.style.left = this.options.padding.left + this.options.drawWidth  + "px";

				var set_container = document.createElement("div");
				set_container.className = "set-container";
				set_container.style.top = "0px";
				set_container.style.left = "100px";

				var tab = document.createElement("div");
				tab.className = "set-tab";
				var ma_tab = document.createElement("div");
				// ma_tab.className = "ma-tab current";
				ma_tab.className = "ma-tab current";
				ma_tab.innerHTML = "均线设置";
				var right_tab = document.createElement("div");
				right_tab.className = "right-tab";
				right_tab.innerHTML = "默认复权";

				var ma_panel = document.createElement("div");
				ma_panel.className = "ma-panel";

				// var notice = document.createElement("div");
				// notice.className = "pre-notice";
				// notice.innerHTML = "将天数设为0或留空可以隐藏改MA均线";

				item_count = 1;

				var ma5_item = addItem.call(_this, 1);
				var ma10_item = addItem.call(_this, 2);
				var ma20_item = addItem.call(_this, 3);
				var ma30_item = addItem.call(_this, 4);

				// ma_panel.appendChild(notice);
				ma_panel.appendChild(ma5_item.item);
				ma_panel.appendChild(ma10_item.item);
				ma_panel.appendChild(ma20_item.item);
				ma_panel.appendChild(ma30_item.item);

				var right_panel = document.createElement("div");
				right_panel.className = "right-panel";

				var right_panel_strings = ["默认不复权", "默认使用前复权", "默认使用后复权"];
				var right_panel_frag = document.createDocumentFragment();
				var right_value = EMcookie.getCookie("beforeBackRight") == null ? "fa" : EMcookie.getCookie("beforeBackRight");
				for (var i = 0; i < right_panel_strings.length; i++) {
					var radio = document.createElement("input");
					radio.setAttribute("type", "radio");
					radio.setAttribute("name", "rehabilitation");

					if (i == 0) {
						radio.setAttribute("value", "");
					} else if (i == 1) {
						radio.setAttribute("value", "fa");
					} else if (i == 2) {
						radio.setAttribute("value", "ba");
					}

					if (right_value == "") {
						if (i == 0) {
							radio.setAttribute("checked", true);
						}
					} else if (right_value == "fa") {
						if (i == 1) {
							radio.setAttribute("checked", true);
						}
					} else if (right_value == "ba") {
						if (i == 2) {
							radio.setAttribute("checked", true);
						}
					} else {
						if (i == 0) {
							radio.setAttribute("checked", true);
						}
					}

					var label = document.createElement("div");
					label.style.marginLeft = "10px";
					label.style.padding = "8px 0px";
					label.style.height = "16px";
					label.style.cursor = "pointer";
					label.innerHTML = radio.outerHTML + "&nbsp;" + right_panel_strings[i];

					right_panel_frag.appendChild(label);
					common.addEvent(label, "click", function (e) {
						var target = e.target || e.srcElement;
						var inputEle, wrapEle;
						if (target.tagName.toLowerCase() === "div") {
							inputEle = target.children[0];
							wrapEle = target.parentNode;
						} else {
							inputEle = target;
							wrapEle = target.parentNode.parentNode;
						}

						// console.log(inputEle);

						for (i = wrapEle.length - 1; i >= 0; i--) {
							wrapEle.children[i].children[0].setAttribute("checked", false);
						}

						inputEle.setAttribute("checked", true);
						inputEle.click();
					});
				}
				var right_panel_form = document.createElement("form");
				right_panel_form.className = "right-panel-form";
				right_panel_form.appendChild(right_panel_frag);
				right_panel.appendChild(right_panel_form);

				var right_panel_comfirmeBtn = document.createElement("button");
				right_panel_comfirmeBtn.innerHTML = "确认修改";
				right_panel_comfirmeBtn.className = "confirm-btn";


				common.addEvent(right_panel_comfirmeBtn, "click", function () {
					var arr = right_panel_form.children;

					for (var i = 0; i < arr.length; i++) { //遍历Radio 
						if (arr[i].children[0].checked == true) {
							var chk_value = arr[i].children[0].value;
							EMcookie.setCookie("beforeBackRight", chk_value, exp, "/");
							if (chk_value == "") {
								_this.beforeBackRight();
							} else if (chk_value == "fa") {
								_this.beforeBackRight(1);
							} else if (chk_value == "ba") {
								_this.beforeBackRight(2);
							}
						}
					}

					// handle.innerHTML = "均线<br/>设置";
					preference.style.display = "none";
					// handle_flag = true;

					_this.options.color.m5Color = ma5_item.pick.style.backgroundColor;
					_this.options.maColor[0] = ma5_item.pick.style.backgroundColor;
					EMcookie.setCookie("ma1_default_color", ma5_item.pick.style.backgroundColor, exp, "/");
					if (ma5_item.input.value) {
						EMcookie.setCookie("ma1_default_num", ma5_item.input.value, exp, "/");
					}

					_this.options.color.m10Color = ma10_item.pick.style.backgroundColor;
					_this.options.maColor[1] = ma10_item.pick.style.backgroundColor;
					EMcookie.setCookie("ma2_default_color", ma10_item.pick.style.backgroundColor, exp, "/");
					if (ma10_item.input.value) {
						EMcookie.setCookie("ma2_default_num", ma10_item.input.value, exp, "/");
					}

					_this.options.color.m20Color = ma20_item.pick.style.backgroundColor;
					_this.options.maColor[2] = ma20_item.pick.style.backgroundColor;
					EMcookie.setCookie("ma3_default_color", ma20_item.pick.style.backgroundColor, exp, "/");
					if (ma20_item.input.value) {
						EMcookie.setCookie("ma3_default_num", ma20_item.input.value, exp, "/");
					}

					_this.options.color.m30Color = ma30_item.pick.style.backgroundColor;
					_this.options.maColor[3] = ma30_item.pick.style.backgroundColor;
					EMcookie.setCookie("ma4_default_color", ma30_item.pick.style.backgroundColor, exp, "/");
					if (ma30_item.input.value) {
						EMcookie.setCookie("ma4_default_num", ma30_item.input.value, exp, "/");
					}

					// _this.draw();
					// _this.options.interactive.markMA(_this.options.canvas, "junxian", _this.options["junxian"], _this.options.start, _this.options.end, "",_this.options.maColor);

				});

				var right_panel_cancleBtn = document.createElement("button");
				right_panel_cancleBtn.innerHTML = "取消修改";
				right_panel_cancleBtn.className = "cancle-btn";

				common.addEvent(right_panel_cancleBtn, "click", function () {
					// handle.innerHTML = "均线<br/>设置";
					preference.style.display = "none";
					// handle_flag = true;
				});


				right_panel.style.display = "none";

				tab.appendChild(ma_tab);
				// tab.appendChild(right_tab);
				set_container.appendChild(tab);
				set_container.appendChild(ma_panel);
				set_container.appendChild(right_panel);
				set_container.appendChild(right_panel_comfirmeBtn);
				set_container.appendChild(right_panel_cancleBtn);

				preference.appendChild(preference_shade);
				preference.appendChild(set_container);


				var pick_html = '<div class="colorPadTriangle"><div class="up"></div><div class="down"></div></div>' +
					'<table class="colorTable"><tr><td style="background-color: #FE0000;"></td>' +
					'<td style="background-color: #FDA748;"></td>' +
					'<td style="background-color: #A7DA19;"></td>' +
					'<td style="background-color: #57A9FF;"></td>' +
					'</tr>' +
					'<tr>' +
					'<td style="background-color: #FF5AFF;"></td>' +
					'<td style="background-color: #F73323;"></td>' +
					'<td style="background-color: #1CA41C;"></td>' +
					'<td style="background-color: #047DFF;"></td>' +
					'</tr>' +
					'<tr>' +
					'<td style="background-color: #FC93B2;"></td>' +
					'<td style="background-color: #B80000;"></td>' +
					'<td style="background-color: #007E3F;"></td>' +
					'<td style="background-color: #0766C4;"></td>' +
					'</tr>' +
					'<tr>' +
					'<td style="background-color: #9A2574;"></td>' +
					'<td style="background-color: #984300;"></td>' +
					'<td style="background-color: #984300;"></td>' +
					'<td style="background-color: #305895;"></td>' +
					'</tr></table>';



				var pick_html_div = document.createElement("div");
				pick_html_div.className = "colorPad";
				pick_html_div.innerHTML = pick_html;

				ma_panel.appendChild(pick_html_div);


				preference.style.display = "none";

				// this.container.appendChild(handle);
				this.container.appendChild(preference);

				set_container.style.left = (this.options.drawWidth - 280) / 2 + "px";

				_this.options.pickColor = {};

				// var handle_flag = true;
				// common.addEvent(handle,"click",function(e){
				//     if(handle_flag){
				//         preference.style.display = "block";
				//         set_show.call(_this);
				//         handle.innerHTML = "关闭<br/>设置";
				//         handle_flag = false;
				//     }else{
				//         handle.innerHTML = "均线<br/>设置";
				//         preference.style.display = "none";
				//         handle_flag = true;
				//     }
				// });

				common.addEvent(ma_tab, "click", function (e) {
					ma_panel.style.display = "block";
					if (ma_tab.className.indexOf("current") < 0) {
						ma_tab.className = ma_tab.className + " current";
					}
					right_panel.style.display = "none";
					right_tab.className = right_tab.className.replace(" current", "");
				});

				common.addEvent(right_tab, "click", function (e) {
					ma_panel.style.display = "none";
					ma_tab.className = ma_tab.className.replace(" current", "");
					right_panel.style.display = "block";
					if (right_tab.className.indexOf("current") < 0) {
						right_tab.className = right_tab.className + " current";
					}
				});

				common.addEvent(ma5_item.pick, "click", function (e) {
					_this.options.pickColor.ma = ma5_item.pick;
					_this.options.pickColor.mark = "ma5";
					var target, x, y;
					if (e.target) {
						target = e.target;
						y = target.offsetTop;
					} else {
						target = e.srcElement;
						y = target.parentNode.offsetTop + 12;
					}
					x = target.offsetLeft;
					pick_html_div.style.left = x + 28 + "px";
					pick_html_div.style.top = y - 7 + "px";
					pick_html_div.style.display = "block";
				});

				common.addEvent(ma10_item.pick, "click", function (e) {
					_this.options.pickColor.ma = ma10_item.pick;
					_this.options.pickColor.mark = "ma10";
					var target, x, y;
					if (e.target) {
						target = e.target;
						y = target.offsetTop;
					} else {
						target = e.srcElement;
						y = target.parentNode.offsetTop + 12;
					}
					x = target.offsetLeft;
					pick_html_div.style.left = x + 28 + "px";
					pick_html_div.style.top = y - 7 + "px";
					pick_html_div.style.display = "block";
				});

				common.addEvent(ma20_item.pick, "click", function (e) {
					_this.options.pickColor.ma = ma20_item.pick;
					_this.options.pickColor.mark = "ma20";
					var target, x, y;
					if (e.target) {
						target = e.target;
						y = target.offsetTop;
					} else {
						target = e.srcElement;
						y = target.parentNode.offsetTop + 12;
					}
					x = target.offsetLeft;
					pick_html_div.style.left = x + 28 + "px";
					pick_html_div.style.top = y - 7 + "px";
					pick_html_div.style.display = "block";
				});

				common.addEvent(ma30_item.pick, "click", function (e) {
					_this.options.pickColor.ma = ma30_item.pick;
					_this.options.pickColor.mark = "ma30";
					var target, x, y;
					if (e.target) {
						target = e.target;
						y = target.offsetTop;
					} else {
						target = e.srcElement;
						y = target.parentNode.offsetTop + 12;
					}
					x = target.offsetLeft;
					pick_html_div.style.left = x + 28 + "px";
					pick_html_div.style.top = y - 7 + "px";
					pick_html_div.style.display = "block";
				});

				common.addEvent(pick_html_div, "click", function (e) {
					var target = e.srcElement || e.target;
					var color = target.style.backgroundColor;
					// alert(DataTime.MaxValue);
					if (color) {

						_this.options.pickColor.ma.style.backgroundColor = color;
					}
					pick_html_div.style.display = "none";


				});

				function addItem(num) {

					var default_num;
					if (num == 1) {
						default_num = 5;
					} else if (num == 2) {
						default_num = 10;
					} else if (num == 3) {
						default_num = 20;
					} else if (num == 4) {
						default_num = 30;
					}

					var ma_default_value = EMcookie.getCookie("ma" + num + "_default_num") == null ? default_num : EMcookie.getCookie("ma" + num + "_default_num");
					var ma_default_color = EMcookie.getCookie("ma" + num + "_default_color") == null ? this.options.maColor[num - 1] : EMcookie.getCookie("ma" + num + "_default_color");

					var item_input = document.createElement("input");
					item_input.setAttribute("type", "text");

					item_input.value = ma_default_value;
					item_input.className = "ma-item-input";

					if (num == 1) {
						var temp1_span = document.createElement("span");
						temp1_span.innerHTML = "第" + item_count + "条";

						var temp2_span = document.createElement("span");
						temp2_span.innerHTML = "日移动平均线&nbsp;设置颜色";
						// var text = "第"+item_count+"条"+ item_input.outerHTML + "日移动平均线&nbsp;设置颜色&nbsp;";
					} else {
						var temp1_span = document.createElement("span");
						temp1_span.innerHTML = "第" + item_count + "条";

						var temp2_span = document.createElement("span");
						temp2_span.innerHTML = "日移动平均线&nbsp;设置颜色";
					}
					item_count++;
					var ma_item = document.createElement("div");
					ma_item.className = "ma-item";
					// var item_span = document.createElement("span");
					// item_span.className = "item-span";
					// item_span.innerHTML = text;

					var span_color = document.createElement("span");
					span_color.className = "span-setting setting-span-ma" + num;
					if (ma_default_color) {
						span_color.style.backgroundColor = ma_default_color;
					}
					ma_item.appendChild(temp1_span);
					ma_item.appendChild(item_input);
					ma_item.appendChild(temp2_span);
					ma_item.appendChild(span_color);

					common.addEvent(item_input, "mouseleave", function (e) {
						var target = e.target || e.srcElement;
						var input_value = target.value;

						if (!input_value) {
							target.value = 0;
						} else if (isNaN(input_value)) {
							if (num == 1) {
								target.value = 5;
							} else if (num == 2) {
								target.value = 10;
							} else if (num == 3) {
								target.value = 20;
							} else if (num == 4) {
								target.value = 30;
							}

						} else if (input_value < 0) {
							target.value = Math.floor(Math.abs(input_value));
						} else if (input_value > 1000) {
							target.value = 1000;
						} else if (((input_value + '').indexOf('.') != -1) ? true : false) {
							target.value = Math.floor(input_value);
						}

					});

					return {
						item: ma_item,
						pick: span_color,
						input: item_input
					};
				}

				function set_show() {

					var m1 = get_cookie_num_color.call(this, 1);
					var m2 = get_cookie_num_color.call(this, 2);
					var m3 = get_cookie_num_color.call(this, 3);
					var m4 = get_cookie_num_color.call(this, 4);

					ma5_item.input.value = m1.ma_default_value;
					ma5_item.pick.style.backgroundColor = m1.ma_default_color;

					ma10_item.input.value = m2.ma_default_value;
					ma10_item.pick.style.backgroundColor = m2.ma_default_color;

					ma20_item.input.value = m3.ma_default_value;
					ma20_item.pick.style.backgroundColor = m3.ma_default_color;

					ma30_item.input.value = m4.ma_default_value;
					ma30_item.pick.style.backgroundColor = m4.ma_default_color;

				}

				function get_cookie_num_color(num) {

					var default_num;
					if (num == 1) {
						default_num = 5;
					} else if (num == 2) {
						default_num = 10;
					} else if (num == 3) {
						default_num = 20;
					} else if (num == 4) {
						default_num = 30;
					}

					var ma_default_value = EMcookie.getCookie("ma" + num + "_default_num") == null ? default_num : EMcookie.getCookie("ma" + num + "_default_num");
					var ma_default_color = EMcookie.getCookie("ma" + num + "_default_color") == null ? this.options.maColor[num - 1] : EMcookie.getCookie("ma" + num + "_default_color");
					return {
						"ma_default_value": ma_default_value,
						"ma_default_color": ma_default_color
					}
				}

			}

			module.exports = setPreference;

			/***/
		}),
/* 116 */
/***/ (function (module, exports) {

			/*根据用户指定的ma天数，动态的计算一个均线数组*/
			function dm(num) {
				var dataArry = this.options.data.data;
				var result = [];
				var count = 0;

				for (var i = 0; i < dataArry.length; i++) {
					var item = {};
					if (i < num - 1) {
						count += dataArry[i].close * 1.0;
						item.value = null;
					} else {
						count += dataArry[i].close * 1.0;
						item.value = (count / num).toFixed(2);
						count -= dataArry[i - num + 1].close;
					}
					item.date = dataArry[i].date_time;

					result.push(item);
				}

				return result;
			}

			module.exports = dm;

			/***/
		}),
/* 117 */
/***/ (function (module, exports, __webpack_require__) {

			var extend = __webpack_require__(21);
			var DrawXY = __webpack_require__(118);
			var divide = __webpack_require__(38);
			var drawBar = __webpack_require__(119);
			var handleEvent = __webpack_require__(120); // 水印
			var watermark = __webpack_require__(22);
			// 添加公用模块
			var common = __webpack_require__(13);

			var ChartMobileBar = (function () {

				function ChartMobileBar(options) {
					this.options = extend(this.options, options);
					// 图表容器
					this.container = document.getElementById(options.container);
					this.container.className = this.container.className + " canvas-container";
				}

				ChartMobileBar.prototype.init = function () {
					/*默认和初始化*/
					this.container.style.position = "relative";
					var dpr = 1;
					/*canvas属性*/
					var canvas = document.createElement("canvas");
					this.container.appendChild(canvas);

					try {
						var ctx = canvas.getContext('2d');
					} catch (error) {
						canvas = window.G_vmlCanvasManager.initElement(canvas);
						var ctx = canvas.getContext('2d');
					}
					canvas.width = dpr * this.options.width;
					canvas.height = dpr * this.options.height;
					canvas.style.width = this.options.width + "px";
					canvas.style.height = this.options.height + "px";
					this.options.font_size = 12;
					ctx.font = (this.options.font_size * dpr) + "px Arial";
					ctx.lineWidth = dpr * 1;
					this.options.dpr = dpr;
					this.options.canvas = canvas;
					this.options.context = ctx;


					this.options.defaultColor = "#FF7200";
					this.options.defaultHoverColor = "#FF9A4A";
					if (!this.options.sepeNum) {
						this.options.sepeNum = 4;
					}
					this.options.padding = {};
					this.options.padding.left = ctx.measureText("+8000万").width * dpr;
					this.options.padding.right = 10;
					this.options.padding.top = this.options.font_size * 2 * dpr;

					var xaxis = this.options.xaxis;
					if (this.options.angle || this.options.angle == 0) {
						var x_mark_temp = xaxis[0].value;
						this.options.padding.bottom = ctx.measureText(x_mark_temp).width * Math.sin(2 * Math.PI / 360 * this.options.angle) + 25;
					} else {
						this.options.padding.bottom = 50 * dpr;
					}

					/*单元格的宽度*/
					var unit_w_len = (canvas.width - this.options.padding.left -
						this.options.padding.right) / this.options.series.data.length;
					/*柱体的宽度*/
					var unit_w_kind = unit_w_len / 3;
					this.options.unit_w_len = unit_w_len;
					this.options.unit_w_kind = unit_w_kind;
					var coordinate = getMaxMark.call(this, this.options.series.data);
					this.options.coordinate = coordinate;

					// 加水印
					watermark.apply(this, [this.options.context, 110, 40, 82, 20]);

				};

				ChartMobileBar.prototype.draw = function (cb) {
					this.clear();
					this.init();
					var _this = this;
					new DrawXY(this.options);
					drawBar.call(this);
					common.addEvent(this.options.canvas, "mousemove", function (e) {
						// var w_x = (e.touches[0].clientX - _this.container.getBoundingClientRect().left);
						// var w_y = (e.touches[0].clientY - _this.container.getBoundingClientRect().top);
						var winX, winY;
						//浏览器检测，获取到相对元素的x和y
						if (e.layerX) {
							winX = e.layerX;
							winY = e.layerY;
						} else if (e.x) {
							winX = e.x;
							winY = e.y;
						}

						// winX = e.offsetX || (e.clientX - _that.container.getBoundingClientRect().left);
						// winY = e.offsetY || (e.clientY - _that.container.getBoundingClientRect().top);
						handleEvent.call(_this, winX, winY);
					}, false);

					// this.options.canvas.addEventListener("click", function(e) {
					//     var w_x = (e.clientX - _this.container.getBoundingClientRect().left);
					//     var w_y = (e.clientY - _this.container.getBoundingClientRect().top);
					//     handleEvent.call(_this, w_x, w_y);
					// }, false);
					if (cb) {
						cb();
					}
				};

				// 重绘
				ChartMobileBar.prototype.reDraw = function () {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					this.draw();
				}

				ChartMobileBar.prototype.clear = function (cb) {
					if (this.container) {
						this.container.innerHTML = "";
					} else {
						document.getElementById(this.options.container).innerHTML = "";
					}
					if (cb) {
						cb();
					};
				}

				// 获取数组中的最大值
				function getMaxMark(series) {
					var tempObj = divide(this.options.sepeNum, series);

					if (tempObj.max == 0 && tempObj.min == 0) {
						tempObj.max = 1;
						tempObj.min = -1;
						tempObj.stepHeight = 1;
						this.options.sepeNum = 2;
					}
					return {
						max: tempObj.max,
						min: tempObj.min,
						stepHeight: tempObj.stepHeight
					};
				}


				return ChartMobileBar;
			})();

			module.exports = ChartMobileBar;


			/***/
		}),
/* 118 */
/***/ (function (module, exports, __webpack_require__) {

			/*绘制xy轴*/
			var extend = __webpack_require__(21);
			var draw_dash = __webpack_require__(8);
			// 格式化坐标
			var XYF = __webpack_require__(9);
			var common = __webpack_require__(60);
			// 自定义X轴标识
			var self_fillText = __webpack_require__(56);
			var DrawXY = (function () {
				function DrawXY(options) {
					this.options = {};
					this.options = extend(this.options, options);

					this.draw();
				}

				DrawXY.prototype.init = function () {
					/*设置可以被参数化的变量*/
					//y轴上设置
					this.options.yLefShow = true;
					this.options.yRightShow = true;
					this.options.isDash = true;

					// x轴上设置
					this.options.xSplitShow = false; //是否进行分割
					this.options.xShowDivide = false; //是否显示分割标志

				}

				DrawXY.prototype.draw = function () {
					this.init();
					var paddingTop = this.options.padding.top;
					var paddingLeft = this.options.padding.left;
					var paddingRight = this.options.padding.right;
					var paddingBottom = this.options.padding.bottom;
					var ctx = this.options.context;
					var canvas = this.options.canvas;
					var arr_x = this.options.xaxis;
					var arr_data = this.options.series.data;
					var unit_w_len = this.options.unit_w_len;
					var dpr = this.options.dpr;

					var coordinate = this.options.coordinate;
					var maxY = coordinate.max;
					var minY = coordinate.min;
					var stepHeight = coordinate.stepHeight;
					var sepeNum = this.options.sepeNum;
					var totalHeight = canvas.height - paddingTop - paddingBottom;
					var baseLine = paddingTop + (maxY / stepHeight) * (totalHeight) / sepeNum;

					/*开始进行绘制*/
					ctx.save();
					var y_bottom = XYF(Math.round(canvas.height - paddingBottom));
					var y_top = XYF(Math.round(paddingTop));
					var x_left = XYF(Math.round(paddingLeft));
					var x_right = XYF(Math.round(canvas.width - paddingRight));
					/*框*/
					ctx.strokeStyle = "#C9C9C9";
					ctx.beginPath();

					ctx.moveTo(x_left, y_bottom);
					ctx.lineTo(x_right, y_bottom);

					ctx.moveTo(x_left, y_bottom);
					ctx.lineTo(x_left, y_top);

					ctx.moveTo(x_left, y_top);
					ctx.lineTo(x_right, y_top);

					ctx.moveTo(x_right, y_bottom);
					ctx.lineTo(x_right, y_top);
					ctx.stroke();

					/*横标*/
					var stepY = (y_bottom - y_top) / sepeNum;
					ctx.textBaseline = "top";
					for (var i = 0, len = arr_x.length; i < len; i++) {
						var textWidth = ctx.measureText(arr_x[i].value).width;
						if (arr_x[i].show) {
							if (this.options.angle && this.options.angle != 0) {
								var cos_w = Math.cos(2 * Math.PI / 360 * this.options.angle) * textWidth;
								self_fillText(arr_x[i].value, ctx, XYF(x_left + i * unit_w_len + (unit_w_len) / 2 - cos_w / 2), XYF(y_bottom + 10 * dpr), this.options.angle);
							} else {
								ctx.fillText(arr_x[i].value, XYF(x_left + i * unit_w_len + (unit_w_len) / 2 - textWidth / 2), XYF(y_bottom + 10 * dpr));
							}

						}
					}

					/*纵标*/
					for (i = 1, len = sepeNum; i < len; i++) {
						var round = dpr / 2;
						if (i == maxY / stepHeight) {
							ctx.beginPath();
							ctx.moveTo(x_left, XYF(stepY * i + paddingTop));
							ctx.lineTo(x_right, XYF(stepY * i + paddingTop));
							ctx.stroke();
						} else {
							ctx.beginPath();
							draw_dash(ctx, x_left, Math.round(stepY * i + paddingTop),
								x_right, Math.round(stepY * i + paddingTop), 3, 2);
						}
					}
					/*纵标刻度*/
					var yMax = this.options.coordinateMaxY;
					ctx.textAlign = "end";
					var markStep = yMax / sepeNum;
					for (i = 0; i <= sepeNum; i++) {
						ctx.beginPath();
						ctx.textBaseline = "middle";
						ctx.fillText(roundFloat(minY + i * stepHeight, stepHeight), paddingLeft - 5, stepY * (sepeNum - i) + paddingTop);
					}
				}


				function roundFloat(f, stepHeight) {
					var precise = 1;
					if (stepHeight.toString().indexOf(".") !== -1) {
						precise = stepHeight.toString().length - stepHeight.toString().indexOf(".") - 1;
					}
					var m = Math.pow(10, precise);
					return common.format_unit(Math.round(f * m) / m, precise);
				}

				return DrawXY;
			})();


			module.exports = DrawXY;


			/***/
		}),
/* 119 */
/***/ (function (module, exports, __webpack_require__) {

			// 格式化坐标
			var XYF = __webpack_require__(9);
			/*绘制每个柱体*/
			function drawBar() {
				var series = this.options.series;
				var unit_w_len = this.options.unit_w_len;
				var unit_w_kind = this.options.unit_w_kind;
				var coordinate = this.options.coordinate;
				var maxY = coordinate.max;
				var minY = coordinate.min;
				var stepHeight = coordinate.stepHeight;
				var sepeNum = this.options.sepeNum;

				var canvas = this.options.canvas;
				var ctx = this.options.context;
				var paddingTop = this.options.padding.top;
				var paddingLeft = this.options.padding.left;
				var paddingRight = this.options.padding.right;
				var paddingBottom = this.options.padding.bottom;
				var totalHeight = canvas.height - paddingBottom - paddingTop;
				var baseLine = paddingTop + (maxY / stepHeight) * (totalHeight) / sepeNum;

				ctx.beginPath();
				ctx.save();
				ctx.lineWidth = this.options.dpr;
				for (var i = 0, len = series.data.length; i < len; i++) {
					if (series.colors && series.colors[i]) {
						ctx.fillStyle = series.colors[i];
					} else {
						ctx.fillStyle = this.options.series.color;
					}
					var width = unit_w_kind;
					var height = totalHeight * (series.data[i] / (maxY - minY));
					var x = i * unit_w_len + paddingLeft + unit_w_kind;
					var y = baseLine - height;
					ctx.fillRect(Math.round(x), Math.round(y), Math.round(width), Math.round(height));
				}
				ctx.restore()
			}



			module.exports = drawBar;


			/***/
		}),
/* 120 */
/***/ (function (module, exports) {

			/*事件处理程序*/
			function handleEvent(winX, winY) {
				var dpr = this.options.dpr;
				var ctx = this.options.context;
				var cvsX = winX * dpr;
				var cvsY = winY * dpr;

				var paddingTop = this.options.padding.top,
					paddingLeft = this.options.padding.left,
					paddingRight = this.options.padding.right,
					paddingBottom = this.options.padding.bottom,
					series = this.options.series,
					unit_w_len = this.options.unit_w_len,
					unit_w_kind = this.options.unit_w_kind,
					canvas = this.options.canvas,
					coordinate = this.options.coordinate,
					maxY = coordinate.max,
					minY = coordinate.min,
					stepHeight = coordinate.stepHeight,
					sepeNum = this.options.sepeNum;

				var totalHeight = canvas.height - paddingTop - paddingBottom;
				var baseLine = paddingTop + (maxY / stepHeight) * (totalHeight) / sepeNum;

				var current = Math.floor((cvsX - paddingLeft) / unit_w_len);
				/*判断是否点击到*/
				var inRect = false;
				/*对应的柱体信息*/
				var rectHeight, rectWidth, rectX, rectY;
				if (current < 0 || current >= series.data.length) {
					inRect = false;
				} else {
					rectHeight = totalHeight * (series.data[current] / (maxY - minY)),
						rectWidth = unit_w_kind,
						rectX = current * unit_w_len + unit_w_kind + paddingLeft,
						rectY = rectHeight > 0 ? (baseLine - rectHeight) : baseLine;
					if (cvsX >= rectX && cvsX <= rectX + rectWidth && cvsY >= rectY && cvsY <= rectY + Math.abs(rectHeight)) {
						inRect = true;
					}
				}
				if (inRect) {
					/*改变颜色，并且记录*/
					if (this.options.preColume !== undefined) {
						changeRect(this.options.preColume, (series.colors && series.colors[this.options.preColume]) ? series.colors[this.options.preColume] : series.color);
					}
					this.options.preColume = current;
					changeRect(current, (series.hoverColors && series.hoverColors[this.options.preColume]) ? series.hoverColors[this.options.preColume] : series.hoverColor);

					/*tips交互*/
					if (!this.options.tipPanel) {
						var tipPanel = document.createElement("div");

						var h1 = document.createElement("strong");
						var paragraph = document.createElement("div");
						h1.innerHTML = this.options.xaxis[current].value;
						paragraph.innerHTML = (series.name === undefined ? "" : series.name + ":") +
							series.data[current] + (series.suffix === undefined ? "" : series.suffix);
						tipPanel.appendChild(h1);
						tipPanel.appendChild(paragraph);
						this.container.appendChild(tipPanel);
						this.options.tipPanel = tipPanel;

						tipPanel.style.position = "absolute";
						tipPanel.style.mineHeight = "30px";
						tipPanel.style.paddingRight = "10px";
						tipPanel.style.opacity = "0.5";
						tipPanel.style.backgroundColor = "#4C4C4C";
						tipPanel.style.borderRadius = "5px";
						tipPanel.style.padding = "5px";
						tipPanel.style.color = "white";
						h1.style.whiteSpace = "nowrap";
						paragraph.style.margin = "0px";
						var top = (baseLine - rectHeight) / dpr;
						var offSetY = rectHeight > 0 ? (unit_w_kind / dpr / 2 - tipPanel.clientHeight) : -unit_w_kind / dpr / 2;
						var left = rectX / dpr + unit_w_kind / dpr / 2;
						/*顶部过界*/
						if ((top + offSetY) < paddingTop) {
							tipPanel.style.top = paddingTop / dpr + 10 + "px";
						} else if ((top + offSetY) > (canvas.height - paddingBottom)) {
							tipPanel.style.top = paddingBottom / dpr - tipPanel.clientHeight - 10 + "px";
						} else {
							tipPanel.style.top = top + offSetY + "px";
						}
						/*左右区分*/
						if ((left) * dpr > (canvas.width - paddingRight) / 2) {
							tipPanel.style.left = rectX / dpr + unit_w_kind / dpr / 2 - tipPanel.clientWidth + "px";
						} else {
							tipPanel.style.left = rectX / dpr + unit_w_kind / dpr / 2 + "px";
						}
					} else {
						var tipPanel = this.options.tipPanel;
						var top = (baseLine - rectHeight) / dpr;
						var left = rectX / dpr + unit_w_kind / dpr / 2;
						var targetX, targetY;
						var offSetY = rectHeight > 0 ? (unit_w_kind / dpr / 2 - tipPanel.clientHeight) : -unit_w_kind / dpr / 2;
						tipPanel.children[0].innerHTML = this.options.xaxis[current].value;
						tipPanel.children[1].innerHTML = (series.name === undefined ? "" : series.name + ":") +
							series.data[current] + (series.suffix === undefined ? "" : series.suffix);
						/*顶部过界*/
						if ((top + offSetY) < paddingTop) {
							targetY = paddingTop / dpr + 10;
						} else if ((top + offSetY) > (canvas.height - paddingBottom)) {
							targetY = paddingBottom / dpr - tipPanel.clientHeight - 10;
						} else {
							targetY = top + offSetY;
						}
						/*左右区分*/
						if ((left) * dpr > (canvas.width - paddingRight) / 2) {
							targetX = rectX / dpr + unit_w_kind / dpr / 2 - tipPanel.clientWidth;
						} else {
							targetX = rectX / dpr + unit_w_kind / dpr / 2;
						}
						if (this.options.tipPanel.style.visibility === "hidden") {
							tipPanel.style.top = targetY + "px";
							tipPanel.style.left = targetX + "px";
							this.options.tipPanel.style.visibility = "visible";
						} else {
							tipPanel.style.top = targetY + "px";
							tipPanel.style.left = targetX + "px";
						}
					}
				} else {
					if (this.options.preColume !== undefined) {
						tempCurrent = this.options.preColume;
						changeRect(tempCurrent, (series.colors && series.colors[tempCurrent]) ? series.colors[tempCurrent] : series.color);
					}
					if (this.options.tipPanel) {
						this.options.tipPanel.style.visibility = "hidden";
					}
				}
				function changeRect(i, color) {

					var height = totalHeight * (series.data[i] / (maxY - minY));
					var x = i * unit_w_len + unit_w_kind + paddingLeft;
					var y = height > 0 ? (baseLine - height) : baseLine;
					var width = unit_w_kind;
					height = Math.abs(height);
					ctx.fillStyle = "white";
					ctx.fillRect(Math.round(x), Math.round(y), Math.round(width), Math.round(height));
					ctx.fillStyle = color;
					ctx.fillRect(Math.round(x), Math.round(y), Math.round(width), Math.round(height));
				}
			}

			module.exports = handleEvent;


			/***/
		}),
/* 121 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制季度柱状图
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     type:    "TL"(分时图),"DK"(日K线图),"WK"(周K线图),"MK"(月K线图)
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 * }
			 *
			 */

			// 绘制坐标轴
			var DrawXY = __webpack_require__(122);
			// 主题
			var theme = __webpack_require__(7);
			// 绘制季度柱状图
			var DrawBar = __webpack_require__(123);
			// 拓展，合并，复制
			var extend = __webpack_require__(21);
			// 水印
			var watermark = __webpack_require__(22);
			// 添加通用工具
			var common = __webpack_require__(13);
			// 获取步长，最大值，最小值
			var divide = __webpack_require__(38);


			var ChartBarQuarter = (function () {

				// 构造函数
				function ChartBarQuarter(options) {
					this.defaultoptions = theme.defaulttheme;
					this.options = extend(this.defaultoptions, options);

					// 图表容器
					this.container = document.getElementById(options.container);
					this.container.className = this.container.className + " emcharts-container";
					// 图表加载完成事件
					this.onChartLoaded = options.onChartLoaded == undefined ? function (op) {

					} : options.onChartLoaded;

				}

				// 初始化
				ChartBarQuarter.prototype.init = function () {

					this.options.type = "group-bar";
					var canvas = document.createElement("canvas");
					// 容器中添加画布
					this.container.appendChild(canvas);

					// 去除画布上粘贴效果
					//this.container.style = "-moz-user-select:none;-webkit-lauser-select:none;";
					// this.container.setAttribute("unselectable", "on");
					this.container.style.position = "relative";
					// 画布
					try {
						var ctx = canvas.getContext('2d');
					} catch (error) {
						canvas = window.G_vmlCanvasManager.initElement(canvas);
						var ctx = canvas.getContext('2d');
					}

					this.options.canvas = canvas;
					this.options.context = ctx;

					this.options.sepeNum = this.options.sepeNum == undefined ? 4 : this.options.sepeNum;
					if (this.options.sepeNum < 2) {
						this.options.sepeNum = 2;
					}


					// 设备像素比
					var dpr = this.options.dpr = 1;
					// 画布的宽和高
					canvas.width = this.options.width * dpr;
					canvas.height = this.options.height * dpr;

					// 画布向下偏移的距离
					this.options.canvas_offset_top = 15 * dpr;
					// 画布内容向坐偏移的距离

					var xaxis = this.options.xaxis;
					if (this.options.angle && this.options.angle != 0) {
						var x_mark_temp = xaxis[0].value;
						var angle_height = ctx.measureText(x_mark_temp).width * Math.sin(2 * Math.PI / 360 * this.options.angle) + 40;
						this.options.c_1_height = this.options.canvas.height - angle_height * dpr;
					} else {
						this.options.c_1_height = canvas.height - 50 * dpr;
					}

					canvas.style.width = this.options.width + "px";
					canvas.style.height = this.options.height + "px";
					canvas.style.border = "0";

					// 折线数据
					var series = this.options.series;
					var getMaxMinValue = getMaxMark.apply(this, [series]);
					if (getMaxMinValue.min < 0) {
						this.options.isLessZero = true;
					}
					this.options.data = {};
					this.options.data.max = getMaxMinValue.max;
					this.options.data.min = getMaxMinValue.min;
					this.options.data.step = getMaxMinValue.step;

					// this.options.padding_left = ctx.measureText("+9000万").width + 20;
					this.options.padding_left = getMaxMinValue.maxPaddingLeftWidth * dpr + 30;
					this.options.drawWidth = canvas.width - 10;

					// 画布上部内间距
					ctx.translate("0", this.options.canvas_offset_top);
					// 画笔参数设置
					ctx.font = (this.options.font_size * this.options.dpr) + "px Arial";
					ctx.lineWidth = 1 * this.options.dpr;
					this.options.groupSpacing = this.options.groupSpacing == undefined ? "0.2" : this.options.groupSpacing;
					this.options.groupUnitSpacing = this.options.groupUnitSpacing == undefined ? "0.2" : this.options.groupUnitSpacing;;

					// 加水印
					watermark.apply(this, [this.options.context, this.options.padding_left + 95 * dpr, 10 * dpr, 82 * dpr, 20 * dpr]);
				};

				// 绘图
				ChartBarQuarter.prototype.draw = function (callback) {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					// 显示loading效果
					// inter.showLoading();
					// var _this = this;


					this.options.group = getYearRect.call(this, this.options.drawWidth - this.options.padding_left, this.options.series.length);
					this.options.groupUnit = getQuarterRect.call(this, this.options.group.bar_w, this.options.series[0].data.length);

					// 绘制坐标轴
					new DrawXY(this.options);
					// 绘制季度柱状图
					new DrawBar(this.options);
					//添加交互
					this.addInteractive();

				};
				// 单位绘制区域
				function getYearRect(width, num) {
					var rect_w = width / num;
					var bar_w = rect_w * (1 - this.options.groupSpacing);
					return {
						rect_w: rect_w,
						bar_w: bar_w
					};
				}

				// 单位绘制区域
				function getQuarterRect(width, num) {
					var rect_w = width / num;
					var bar_w = rect_w * (1 - this.options.groupUnitSpacing);
					return {
						rect_w: rect_w,
						bar_w: bar_w
					};
				}


				// 图表y轴坐标计算
				function get_y(y) {
					var sepe_max_min = this.options.data.max - this.options.data.min;
					if (y >= 0 && this.options.data.min < 0) {
						var up_height = this.options.c_1_height * (this.options.data.max) / sepe_max_min;
						return up_height - this.options.c_1_height * y / sepe_max_min;
					} else if (y >= 0 && this.options.data.min >= 0) {
						var up_height = this.options.c_1_height;
						return up_height - this.options.c_1_height * (y - this.options.data.min) / sepe_max_min;
					} else if (y < 0 && this.options.data.max >= 0) {
						var sepe_y = this.options.c_1_height * (this.options.data.max) / sepe_max_min;
						// var down_height = sepe_y + this.options.c_1_height * Math.abs(this.options.data.min)/sepe_max_min;
						return this.options.c_1_height * Math.abs(y) / sepe_max_min + sepe_y;
					} else if (y < 0 && this.options.data.max < 0) {
						return this.options.c_1_height * Math.abs(y) / sepe_max_min + 0;
					}
				}
				// 图表x轴坐标计算
				function get_x(year_num, quarter_num) {
					var group = this.options.group;
					var groupUnit = this.options.groupUnit;
					var padding_left = this.options.padding_left;
					var year_sepe = this.options.group.rect_w - this.options.group.bar_w;
					var quarter_sepe = this.options.groupUnit.rect_w - this.options.groupUnit.bar_w;
					return group.rect_w * year_num + padding_left + groupUnit.rect_w * quarter_num + year_sepe / 2 + quarter_sepe / 2;
				}

				//通过clientX获得交互需要的tips的坐标和虚线中x坐标
				function getCoordinateByClient(clientX) {
					var canvasX = clientX * this.options.dpr;
					//被返回的两个数据
					var result = {};

					//需要用到的参数
					var paddingLeft = this.options.padding_left,
						group = this.options.group,
						groupUnit = this.options.groupUnit,
						canvas = this.options.canvas,
						series = this.options.series;

					// 求得鼠标所指的位置属于哪一年的哪一个季度
					var numYear = Math.floor((canvasX - paddingLeft) / group.rect_w);
					if (numYear < 0) {
						numYear = 0;
					}
					var numQuarter = Math.floor((canvasX - paddingLeft - numYear * group.rect_w - (group.rect_w - group.bar_w) / 2) / groupUnit.rect_w);
					if (numQuarter < 0) {
						numQuarter = 0;
					} else if (numQuarter > 3) {
						numQuarter = 3;
					}
					// 绘制的虚线的x坐标
					result.midddleLine = get_x.call(this, numYear, numQuarter) + groupUnit.bar_w / 2;
					//绘制tips的坐标
					result.tipsX = this.options.padding_left * this.options.dpr + group.rect_w * numYear;
					result.tipsY = get_y.call(this, series[numYear].data[0]) + this.options.canvas_offset_top * this.options.dpr;

					result.midddleLineHeight = result.tipsY;

					result.content = {};
					result.content.series = this.options.series[numYear].data;
					result.content.colors = this.options.xaxis[numYear];
					result.content.names = this.options.xaxis[numYear].names;
					result.content.suffixs = this.options.xaxis[numYear].suffixs;
					result.arr = numYear + ":" + numQuarter;

					return result;
				}

				ChartBarQuarter.prototype.addInteractive = function () {
					var canvas = this.options.canvas;
					var group = this.options.group;
					var _that = this;
					var tips = document.createElement("div");
					var middleLine = document.createElement("div");
					var coordinateCanvas, coordinateWindow = {};
					//用于状态记录
					var status = "x:x";
					//用于canvas与windows相互转化
					var dpr = this.options.dpr;
					var padding_left = this.options.padding_left;
					var offSetTop = this.options.canvas_offset_top;
					var yHeight = this.options.c_1_height;

					// tips.setAttribute("class", "web-tips");
					tips.className = "web-tips";
					middleLine.className = "group-bar-mark";
					middleLine.style.width = group.rect_w / dpr + "px";
					middleLine.style.backgroundColor = "#333";
					// middleLine.setAttribute("class", "web-middleLine");
					_that.container.appendChild(tips);
					_that.container.appendChild(middleLine);

					common.addEvent.call(_that, canvas, 'mousemove', function (e) {

						var winX, winY;
						//浏览器检测，获取到相对元素的x和y
						if (e.layerX) {
							winX = e.layerX;
							winY = e.layerY;
						} else if (e.x) {
							winX = e.x;
							winY = e.y;
						}

						//当超出坐标系框就不显示交互
						if (winX >= padding_left / dpr && winX * dpr < _that.options.drawWidth && (winY >= offSetTop / dpr && winY < (offSetTop + yHeight) / dpr)) {
							tips.style.display = "inline-block";
							middleLine.style.display = "inline-block";
						} else {
							tips.style.display = "none";
							middleLine.style.display = "none";
						}
						//canvas中是坐标与屏幕坐标之间的相互转换
						if (winX * dpr < _that.options.drawWidth) {
							coordinateCanvas = getCoordinateByClient.call(_that, winX);
						}

						if (status !== coordinateCanvas.arr) {
							coordinateWindow.midddleLine = common.canvasToWindow.call(_that, canvas, coordinateCanvas.midddleLine, 0);
							coordinateWindow.tips = common.canvasToWindow.call(_that, canvas, coordinateCanvas.tipsX, coordinateCanvas.tipsY);

							//绘制tips
							var series = coordinateCanvas.content.series;
							var colors = coordinateCanvas.content.colors;
							var names = coordinateCanvas.content.names;
							var suffixs = coordinateCanvas.content.suffixs;
							tips.innerHTML = "";
							var title = document.createElement("div");
							title.innerHTML = colors.value;
							tips.appendChild(title);
							var series_length = series.length;
							for (var i = 0; i < series_length; i++) {
								var item = series[i];
								var color_span = document.createElement("span");
								color_span.className = "bar-color-span";
								color_span.style.backgroundColor = colors.colors[i];

								var value_span = document.createElement("span");
								value_span.className = "bar-value-span";
								value_span.innerHTML = (names === undefined ? "" : names[i]) + item + (suffixs === undefined ? "" : suffixs[i]);

								var span_container = document.createElement("div");
								span_container.className = "";
								span_container.appendChild(color_span);
								span_container.appendChild(value_span);

								tips.appendChild(span_container);
							}

							// tips.innerHTML = coordinateCanvas.content;
							var w_x = e.offsetX || (e.clientX - _that.container.getBoundingClientRect().left);
							var w_y = e.offsetY || (e.clientY - _that.container.getBoundingClientRect().top);

							if (w_x > canvas.width / 2 / dpr) {
								tips.style.left = (coordinateCanvas.tipsX / dpr - tips.clientWidth) + "px";
							} else {
								tips.style.left = (coordinateCanvas.tipsX + _that.options.group.rect_w) / dpr + "px";
							}
							// alert(coordinateWindow.tips.y);
							tips.style.top = (coordinateCanvas.tipsY) / dpr - tips.clientHeight / 2 + "px";
							// var text = createTextNode(coordinateCanvas.content);
							// tips.appendChild(text);



							// 鼠标在画布中的坐标
							var c_pos = common.windowToCanvas.apply(_that, [canvas, w_x, w_y]);
							var c_x = (c_pos.x).toFixed(0);

							if (c_x - _that.options.padding_left > 0) {
								var index = Math.floor((c_x - _that.options.padding_left) / group.rect_w);
								//绘制中线
								middleLine.style.height = yHeight / _that.options.dpr + "px";
								middleLine.style.left = (index * group.rect_w + _that.options.padding_left) / dpr + "px";
								middleLine.style.top = offSetTop / dpr + "px";
							}

							status = coordinateCanvas.arr;
						}

					});

				};

				// 重绘
				ChartBarQuarter.prototype.reDraw = function () {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					this.draw();
				}
				// 删除canvas画布
				ChartBarQuarter.prototype.clear = function (cb) {
					if (this.container) {
						this.container.innerHTML = "";
					} else {
						document.getElementById(this.options.container).innerHTML = "";
					}
					if (cb) {
						cb();
					};
				}

				// 获取数组中的最大值
				function getMaxMark(series) {
					var seriesLength = series.length;
					var arr = [];
					for (var i = 0; i < seriesLength; i++) {
						arr = arr.concat(series[i].data);
					}

					var tempObj = divide(this.options.sepeNum, arr);

					var ctx = this.options.context;
					var backWidth = ctx.measureText(common.format_unit(tempObj.stepHeight)).width - ctx.measureText(common.format_unit(parseInt(tempObj.stepHeight))).width;
					var frontMaxWidth = ctx.measureText(common.format_unit(parseInt(tempObj.max))).width;
					var frontMinWidth = ctx.measureText(common.format_unit(parseInt(tempObj.min))).width;
					var frontWidth = frontMaxWidth > frontMinWidth ? frontMaxWidth : frontMinWidth;
					var maxPaddingLeftWidth = frontWidth + backWidth;

					return {
						max: tempObj.max,
						min: tempObj.min,
						step: tempObj.stepHeight,
						maxPaddingLeftWidth: maxPaddingLeftWidth
					};
				}

				return ChartBarQuarter;
			})();

			module.exports = ChartBarQuarter;


			/***/
		}),
/* 122 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制直角坐标系
			 */
			var extend = __webpack_require__(21);
			/*主题*/
			var theme = __webpack_require__(7);
			var common = __webpack_require__(13);
			/*绘制虚线*/
			var DrawDashLine = __webpack_require__(8);
			// 格式化坐标
			var XYF = __webpack_require__(9);
			// 自定义X轴标识
			var self_fillText = __webpack_require__(56);
			var DrawXY = (function () {
				//构造方法
				function DrawXY(options) {
					/*设置默认参数*/
					this.defaultoptions = theme.draw_xy;
					this.options = extend(this.defaultoptions, options);

					/*绘图*/
					this.draw();
				};
				/*绘图*/
				DrawXY.prototype.draw = function () {
					// var xAxisData = this.options.xaxis;
					// var yAxisData = this.options.series;
					// var type = this.options.type;
					// var dpr = this.options.dpr;
					var ctx = this.options.context;
					/*Y轴上的最大值*/
					var y_max = this.options.data.max;
					/*Y轴上的最小值*/
					var y_min = this.options.data.min;

					/*Y轴上分隔线数量*/
					var sepe_num = this.options.sepeNum;
					/*开盘收盘时间数组*/
					var oc_time_arr = this.options.xaxis;

					/*K线图的高度*/
					var k_height = this.options.c_1_height;
					/*Y轴标识线列表*/
					var line_list_array = getLineList.apply(this, [y_max, y_min, sepe_num, k_height]);
					// if(this.options.type == 'quarter-line') {
					// addGradient.call(this);
					// }

					drawXYLine.call(this, ctx, y_max, y_min, line_list_array);

					// 绘制横坐标刻度
					drawXMark.apply(this, [ctx, k_height, oc_time_arr]);
				};
				// 绘制Y轴最左边刻度
				function drawXYLine(ctx, y_max, y_min, line_list_array) {
					ctx.save();
					// var sepe_num = line_list_array.length;
					var _this = this;
					var list_length = line_list_array.length;
					ctx.fillStyle = '#979797';

					ctx.textAlign = 'right';
					for (var i = 0, item; item = line_list_array[i]; i++) {
						ctx.beginPath();
						// 绘制纵坐标刻度
						var dashFlag = true;
						if (this.options.data.min < 0) {
							if (this.options.data.min + this.options.data.step * i < 0) {
								ctx.fillText(this.options.data.min + dealFloat(this.options.data.step * i), XYF(this.options.padding_left - 5), XYF(item.y + 5));
							} else if (this.options.data.min + this.options.data.step * i == 0) {
								ctx.fillText(0, XYF(this.options.padding_left - 5), XYF(item.y + 5));
								dashFlag = false;
								ctx.strokeStyle = '#c9c9c9';
								ctx.moveTo(XYF(this.options.padding_left), XYF(item.y));
								ctx.lineTo(XYF(this.options.drawWidth), XYF(item.y));
								ctx.stroke();
							} else {
								ctx.fillText(this.options.data.min + dealFloat(this.options.data.step * i), XYF(this.options.padding_left - 5), XYF(item.y + 5));
							}
						}
						else {
							ctx.fillText(this.options.data.min + dealFloat(this.options.data.step * i), XYF(this.options.padding_left - 5), XYF(item.y + 5));
						}

						if (i != 0 && i != list_length - 1 && dashFlag) {
							ctx.save();
							ctx.beginPath();

							ctx.strokeStyle = '#e6e6e6';
							DrawDashLine(ctx, this.options.padding_left, Math.round(item.y), this.options.drawWidth, Math.round(item.y), 3);
							ctx.restore();
						}

					}


					function dealFloat(data) {
						if (data) {
							data = parseFloat((data).toFixed(_this.options.maxDot));
						}
						return data;
					}
					ctx.restore();
				}

				/*绘制横坐标刻度值*/
				function drawXMark(ctx, k_height, oc_time_arr) {
					// var dpr = this.options.dpr;
					ctx.save();
					var padding_left = this.options.padding_left;
					var dpr = this.options.dpr;
					ctx.beginPath();
					ctx.strokeStyle = "#c9c9c9";
					ctx.rect(XYF(padding_left), 0.5, Math.round(this.options.drawWidth - padding_left), Math.round(this.options.c_1_height));
					ctx.stroke();

					ctx.textAlign = 'left';
					ctx.fillStyle = '#979797';
					/*画布宽度*/
					var k_width = this.options.drawWidth;
					var tempDate;
					var arr_length = oc_time_arr.length;
					var unit = (k_width - padding_left) / (arr_length);
					for (var i = 0; i < arr_length; i++) {
						ctx.beginPath();
						tempDate = oc_time_arr[i].value;
						var textWidth = ctx.measureText(tempDate).width;
						var cos_w = Math.cos(2 * Math.PI / 360 * this.options.angle) * textWidth;
						var x = i * (k_width - padding_left) / (arr_length) + padding_left;
						var isShow = oc_time_arr[i].show == undefined ? true : false;

						if (oc_time_arr[i].show == undefined || oc_time_arr[i].show) {
							var self_x = i * unit + padding_left + unit / 2;
							if (this.options.angle && this.options.angle != 0) {
								self_fillText(tempDate, ctx, XYF(self_x - cos_w / 2), XYF(this.options.c_1_height + 20 * dpr), this.options.angle);
							} else {
								ctx.fillText(tempDate, XYF(self_x - textWidth / 2), XYF(this.options.c_1_height + 20 * dpr));
							}
						}

						if (i == (arr_length - 1)) {
							ctx.moveTo(XYF(x), XYF(this.options.c_1_height));
							ctx.lineTo(XYF(x), XYF(this.options.c_1_height + 5 * dpr));

							var x = (i + 1) * (k_width - padding_left) / (arr_length) + padding_left;
							ctx.moveTo(XYF(x), XYF(this.options.c_1_height));
							ctx.lineTo(XYF(x), XYF(this.options.c_1_height + 5 * dpr));
						} else {
							ctx.moveTo(XYF(x), XYF(this.options.c_1_height));
							ctx.lineTo(XYF(x), XYF(this.options.c_1_height + 5 * dpr));
						}

						ctx.stroke();
					}
					ctx.stroke();
					ctx.restore();
				}

				function addGradient() {
					ctx.save();
					var sepGradientLen = (this.options.canvas.width - this.options.padding_left) / this.options.series.length;
					var ctx = this.options.context;
					for (var i = 0; i < this.options.series.length; i++) {
						if (i % 2 == 0) {
							ctx.beginPath();
							var grad = ctx.createLinearGradient(0, 0, 0, this.options.c_1_height);
							grad.addColorStop(0, 'rgba(255,255,255,0)');
							grad.addColorStop(1, 'rgba(245,245,245,1)');
							ctx.fillStyle = grad;
							ctx.rect(this.options.padding_left + i * sepGradientLen, 0, sepGradientLen, this.options.c_1_height);
							ctx.fill();
							ctx.closePath();
						}

					}
					ctx.restore();
				}

				/*Y轴标识线列表*/
				function getLineList(y_max, y_min, sepe_num, k_height) {
					// var ratio = (y_max - y_min) / (sepe_num);
					var ratio = this.options.data.step;
					var result = [];
					for (var i = 0; i <= sepe_num; i++) {
						result.push({
							num: (y_min + i * ratio),
							x: 0,
							y: k_height - (i / (sepe_num)) * k_height
						});
					}
					return result;
				}

				return DrawXY;
			})();

			module.exports = DrawXY;

			/***/
		}),
/* 123 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制K线
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     type:    "TL"(分时图),"DK"(日K线图),"WK"(周K线图),"MK"(月K线图)
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 * }
			 *
			 */

			/*继承*/
			var extend = __webpack_require__(21);
			/*主题*/
			var theme = __webpack_require__(7);
			var DrawBar = (function () {
				function DrawBar(options) {
					// 设置默认参数
					this.defaultoptions = theme.drawLine;
					this.options = extend(this.defaultoptions, options);

					// 绘图
					this.draw();
				};

				// 绘图
				DrawBar.prototype.draw = function () {

					var ctx = this.options.context;
					ctx.lineWidth = 1 * this.options.dpr + 1;
					// 折线数据
					var series = this.options.series;
					// 横坐标数据
					var xaxis = this.options.xaxis;


					for (var i = 0, se; se = series[i]; i++) {
						var bar_arr = se.data;
						var arr_length = bar_arr.length;
						for (var j = 0; j < arr_length; j++) {
							var bar = bar_arr[j];

							if (bar != null && bar !== "" && bar != undefined) {
								ctx.beginPath();
								// 填充颜色
								ctx.fillStyle = xaxis[i].colors[j] == undefined ? "#333" : xaxis[i].colors[j];
								// 画笔颜色
								ctx.strokeStyle = xaxis[i].colors[j] == undefined ? "#333" : xaxis[i].colors[j];
								var x = get_x.apply(this, [i, j]);
								var y = get_y.call(this, bar);

								if (y >= 0 && this.options.data.min < 0) {
									var sepe_y = this.options.c_1_height * (this.options.data.max) / (this.options.data.max - this.options.data.min);
									ctx.rect(x, y, this.options.groupUnit.bar_w, sepe_y - y);
								} else if (y >= 0 && this.options.data.min >= 0) {
									var sepe_y = this.options.c_1_height;
									ctx.rect(x, y, this.options.groupUnit.bar_w, sepe_y - y);
								} else if (y < 0 && this.options.data.max >= 0) {
									var sepe_y = this.options.c_1_height * (this.options.data.max) / (this.options.data.max - this.options.data.min);
									ctx.rect(x, sepe_y, this.options.groupUnit.bar_w, y);
								} else if (y < 0 && this.options.data.max < 0) {
									var sepe_y = 0;
									ctx.rect(x, sepe_y, this.options.groupUnit.bar_w, y);
								}


								// if(y >= 0 && this.options.data.min < 0){
								//     var sepe_y = this.options.c_1_height * (this.options.data.max)/(this.options.data.max - this.options.data.min);
								//     ctx.rect(x,sepe_y,this.options.groupUnit.bar_w,sepe_y - y);
								// }else if(y >= 0 && this.options.data.min >= 0){

								// }else{
								//     ctx.rect(x,this.options.c_1_height/2,this.options.groupUnit.bar_w,y);
								// }
								ctx.fill();
							}

						}

					}

				};

				// 图表y轴坐标计算
				function get_y(y) {
					var sepe_max_min = this.options.data.max - this.options.data.min;
					if (y >= 0 && this.options.data.min < 0) {
						var up_height = this.options.c_1_height * (this.options.data.max) / sepe_max_min;
						return up_height - this.options.c_1_height * y / sepe_max_min;
					} else if (y >= 0 && this.options.data.min >= 0) {
						var up_height = this.options.c_1_height;
						return up_height - this.options.c_1_height * (y - this.options.data.min) / sepe_max_min;
					} else if (y < 0 && this.options.data.max >= 0) {
						var sepe_y = this.options.c_1_height * (this.options.data.max) / sepe_max_min;
						// var down_height = sepe_y + this.options.c_1_height * Math.abs(this.options.data.min)/sepe_max_min;
						return this.options.c_1_height * Math.abs(y) / sepe_max_min + sepe_y;
					} else if (y < 0 && this.options.data.max < 0) {
						return this.options.c_1_height * Math.abs(y) / sepe_max_min + 0;
					}
				}
				// 图表x轴坐标计算
				function get_x(year_num, quarter_num) {
					var group = this.options.group;
					var groupUnit = this.options.groupUnit;
					var padding_left = this.options.padding_left;
					var year_sepe = this.options.group.rect_w - this.options.group.bar_w;
					var quarter_sepe = this.options.groupUnit.rect_w - this.options.groupUnit.bar_w;
					return group.rect_w * year_num + padding_left + groupUnit.rect_w * quarter_num + year_sepe / 2 + quarter_sepe / 2;
				}

				return DrawBar;
			})();

			module.exports = DrawBar;

			/***/
		}),
/* 124 */
/***/ (function (module, exports, __webpack_require__) {

			var extend = __webpack_require__(21);
			// 主题
			var theme = __webpack_require__(7);
			// 水印
			var watermark = __webpack_require__(22);
			// 添加通用工具
			var common = __webpack_require__(13);
			/*添加所需要的方法*/
			var methods = __webpack_require__(125);

			var ChartPie = (function () {

				// 构造函数
				function ChartPie(options) {
					this.options = {};
					this.options = extend(theme.defaulttheme, options);
					// 图表容器
					this.container = document.getElementById(options.container);

					this.container.className = this.container.className.replace(/emcharts-container/g, "").trim();
					this.container.className = this.container.className + " emcharts-container";
					// 图表加载完成事件
					this.onChartLoaded = options.onChartLoaded == undefined ? function (op) {

					} : options.onChartLoaded;

				}

				// 初始化
				ChartPie.prototype.init = function () {

					var canvas = document.createElement("canvas");
					var canvas2 = document.createElement("canvas"); //用于解决写在扇形上的文字被覆盖的问题

					// 容器中添加画布
					this.container.appendChild(canvas);
					this.container.appendChild(canvas2);

					this.container.style.position = "relative";
					// 设备像素比
					if (this.options.dpr === undefined) {
						this.options.dpr = 2;
					}

					// 兼容IE6-IE9
					try {
						var ctx = canvas.getContext('2d');
						var ctx2 = canvas2.getContext('2d');
					} catch (error) {
						canvas = window.G_vmlCanvasManager.initElement(canvas);
						var ctx = canvas.getContext('2d');

						canvas2 = window.G_vmlCanvasManager.initElement(canvas2);
						var ctx2 = canvas2.getContext('2d');
						this.options.dpr = 1;
					}

					this.options.canvas = canvas;
					this.options.context = ctx;

					this.options.canvas2 = canvas2;
					this.options.context2 = ctx2;

					var dpr = this.options.dpr;
					// 画布的宽和高
					canvas.width = this.options.width * dpr;
					canvas.height = this.options.height * dpr;

					canvas2.width = this.options.width * dpr;
					canvas2.height = this.options.height * dpr;

					canvas.style.width = this.options.width + "px";
					canvas.style.height = this.options.height + "px";
					canvas.style.border = "0";

					canvas2.style.width = this.options.width + "px";
					canvas2.style.height = this.options.height + "px";
					canvas2.style.border = "0";
					canvas2.style.position = "absolute";
					canvas2.style.top = "0px";
					canvas2.style.left = "0px";

					if (!this.options.font) {
						this.options.font = "12px Arial";
					}
					var font = this.options.font.split("px ")[0] * dpr + "px " + this.options.font.split("px ")[1];
					ctx.font = font;
					ctx2.font = font;
					this.options.startOffset = this.options.startOffset || Math.PI / 2;
					var ySpace = this.options.font.split("px ")[0] * dpr;
					//每条触角文字的高度
					this.options.ySpace = ySpace;
					this.options.onPie = this.options.onPie || false;

					// 加水印
					watermark.apply(this, [ctx, 130 * dpr, 20 * dpr, 82 * dpr, 20 * dpr]);
				}

				// 绘图
				ChartPie.prototype.draw = function (callback) {
					this.init();

					var startOffset = this.options.startOffset,
						ctx = this.options.context,
						dpr = this.options.dpr,
						ctx2 = this.options.context2,
						current = startOffset,
						total = 0,
						that = this,
						data = this.options.data,
						ySpace = this.options.ySpace,
						point = { x: that.options.point.x * dpr, y: that.options.point.y * dpr },
						radius = this.options.radius * dpr,
						fontSize = ctx2.font.split("px ")[0],
						onPie = this.options.onPie;

					var pies = [];

					for (var i = 0, len = data.length; i < len; i++) {
						if (data[i].show || data[i].show === undefined) {
							total += parseFloat(data[i].value);
						}
					}
					for (i = 0; i < data.length; i++) {
						if (data[i].show || data[i].show === undefined) { //由此控制某个饼块是否显示
							var drawStart = current,
								drawEnd = current + data[i].value / total * 2 * Math.PI;
							current += data[i].value / total * 2 * Math.PI;
							var middle = (drawStart + drawEnd) / 2;
							// 记录所有的饼块的信息(比较信息， 用于确定点击范围)
							pies.push({
								value: data[i].value,
								info: data[i].info || data[i].name,
								tip: data[i].tip || data[i].value,
								name: data[i].name || "",
								start: drawStart,
								end: drawEnd,
								middle: middle,
								color: data[i].color,
								showInfo: data[i].showInfo,
								id: i,
								isOut: false
							});
						}

					}

					var yBottom = point.y - radius - radius / 10;
					var yTop = point.y + radius + radius / 10;

					//获得触角分布情况
					pies = methods.getSpaceArry(pies, Math.floor((yTop - yBottom) / ySpace), ySpace, radius, point, yBottom);
					pies.sort(function (a, b) {
						return a.start - b.start;
					});
					this.options.pies = pies;
					//进行绘制（显示在外面，触角形式）
					for (i = 0; i < pies.length; i++) {
						var pieStart = pies[i].start;
						var pieEnd = pies[i].end;
						var pieMiddle = pies[i].middle;
						var color = pies[i].color;
						methods.drawPie(ctx, point, radius, pieStart, pieEnd, color);
						if (onPie) {
							methods.drawInfoOn(ctx2, pies[i], pies, radius, point, fontSize);
						} else {
							methods.drawInfo(ctx2, pies[i], radius, point, ySpace);
						}
					}

					//添加交互
					this.addInteractive();
					if (callback)
						callback();
				};

				//添加交互
				ChartPie.prototype.addInteractive = function () {
					var canvas = this.options.canvas;
					var canvas2 = this.options.canvas2;
					var container = this.container;
					var that = this;
					var pies = this.options.pies;
					var dpr = this.options.dpr;
					var point = { x: that.options.point.x, y: that.options.point.y };
					var radius = this.options.radius;
					var startOffset = this.options.startOffset;
					//添加交互事件
					common.addEvent.call(that, canvas2, 'click', function (e) {
						// 事件处理
						/*var winX, winY;
						if (e.layerX) {
							winX = e.layerX;
							winY = e.layerY;
						} else if (e.x) {
							winX = e.x;
							winY = e.y;
						}*/
						var winX = e.offsetX || (e.clientX - that.container.getBoundingClientRect().left);
						var winY = e.offsetY || (e.clientY - that.container.getBoundingClientRect().top);

						var x = winX - point.x;
						var y = winY - point.y;
						var theta = 0; //点击处的弧度

						theta = methods.getTheta(x, y, startOffset);
						//弹出后依然进行点击判断
						if (!that.options.prePieClick) {
							if (x * x + y * y > radius * radius) {
								return;
							}
						} else {
							var pre = that.options.prePieClick;
							if (theta >= pre.start && theta <= pre.end) {
								if (x * x + y * y > (radius + 15) * (radius + 15)) {
									return;
								}
							} else {
								if (x * x + y * y > radius * radius)
									return;
							}
						}

						for (var i = 0, len = pies.length; i < len; i++) {
							if (theta <= pies[i].end) {
								var pie = pies[i];
								pie.clicked = true;
								methods.pieHandlerClick.call(that, pie);
								break;
							}
						}
						try {
							e.preventDefault();
						} catch (err) {
							e.returnValue = false;
						}
					});
					common.addEvent.call(that, canvas2, "mousemove", function (e) { //浮动交互(显示tips)
						//首先判断在哪个饼块上
						var winX, winY;
						if (e.layerX) {
							winX = e.layerX;
							winY = e.layerY;
						} else if (e.x) {
							winX = e.x;
							winY = e.y;
						}
						var x = winX - point.x;
						var y = winY - point.y;
						var theta = 0; //点击处的弧度
						var inPie = true;
						if (x * x + y * y > radius * radius) {
							inPie = false;
						}
						theta = methods.getTheta(x, y, startOffset);
						for (var i = 0, len = pies.length; i < len; i++) {
							if (theta <= pies[i].end) {
								var pie = pies[i];
								pie.clicked = true;
								methods.pieHandlerMove.call(that, pie, winX, winY, inPie);
								break;
							}
						}
						try {
							e.preventDefault();
						} catch (err) {
							e.returnValue = false;
						}
					});
				}


				// 重绘
				ChartPie.prototype.reDraw = function () {
					// 删除canvas画布
					this.clear();
					this.draw();
				}
				// 删除canvas画布
				ChartPie.prototype.clear = function (cb) {
					if (this.container) {
						this.container.innerHTML = "";
					} else {
						document.getElementById(this.options.container).innerHTML = "";
					}
					this.options.tips = null;
					if (cb) {
						cb();
					};
				}

				return ChartPie;
			})();

			module.exports = ChartPie;


			/***/
		}),
/* 125 */
/***/ (function (module, exports, __webpack_require__) {

			var drawInfo = __webpack_require__(126);
			var drawInfoOn = __webpack_require__(127);
			var drawPie = __webpack_require__(128);
			var getSpaceArry = __webpack_require__(129);
			var getTheta = __webpack_require__(132);
			var pieHandlerClick = __webpack_require__(133);
			var pieHandlerMove = __webpack_require__(136);

			module.exports = {
				"drawInfo": drawInfo,
				"drawInfoOn": drawInfoOn,
				"drawPie": drawPie,
				"getSpaceArry": getSpaceArry,
				"getTheta": getTheta,
				"pieHandlerClick": pieHandlerClick,
				"pieHandlerMove": pieHandlerMove
			}


			/***/
		}),
/* 126 */
/***/ (function (module, exports) {

			/**
			 * 绘制单个饼块的索引
			 * @param  {[type]} ctx      绘制的上下文
			 * @param  {[type]} pie      绘制的饼块对象
			 * @param  {[type]} radius   冰块的半径
			 * @param  {[type]} point    冰块的圆心
			 * @param  {[type]} ySpace   索引文字的间距
			 * @param  {[type]} status   是否只画触角
			 * @return {[type]}          [description]
			 */
			module.exports = function (ctx, pie, radius, point, ySpace, status) {
				var top = point.y - radius - radius / 10;
				var isNegative = Math.cos(pie.middle) / Math.abs(Math.cos(pie.middle));
				var BeginX = point.x + (radius) * Math.cos(pie.middle);
				var BeginY = point.y + (radius) * Math.sin(pie.middle);
				// var MiddleX = point.x + (radius+radius/10) * Math.cos(pie.middle);
				// var MiddleY = point.y + (radius+radius/10) * Math.sin(pie.middle);
				// var EndY = top + pie.yIndex * ySpace;
				// var theta = Math.asin(( MiddleY-point.y )/(radius+radius/9));
				// var EndX = MiddleX + isNegative*( radius/9);
				// 此处会出现问题，问题来源是设计，解决方法
				// 1. 设计为用贝塞尔曲线绘制，不用直线
				// 2. 改变绘制方法，先沿着中间弧度方向绘制，再绘制到文字绘制处
				// 3. 在顶层绘制（会出现不能遮盖的问题）
				var MiddleY = top + pie.yIndex * ySpace;
				var theta = Math.asin((MiddleY - point.y) / (radius + radius / 10));
				var MiddleX = point.x + isNegative * (radius + radius / 10) * Math.cos(theta);
				var EndX = MiddleX + radius / 10 * isNegative;
				if (pie.yIndex === 0) {
					var tempX = radius / 10 > 3 ? radius / 10 : 3;
					MiddleX = EndX + tempX * isNegative;
					EndX = MiddleX + tempX * isNegative;
				}
				MiddleY = MiddleY + Math.sin(pie.middle) / Math.abs(Math.sin(pie.middle)) * ySpace / 2;
				var EndY = MiddleY;
				var textWidth = ctx.measureText(pie.name).width;
				var fontSize = ctx.font.split("px ")[0] * 1;
				var textHeight = fontSize;

				ctx.save();
				ctx.beginPath();
				ctx.fillStyle = "#666";
				ctx.textAlign = Math.cos(pie.middle) > 0 ? "start" : "end";
				ctx.textBaseline = "middle";
				if (!status) { //绘制动作(默认)
					ctx.fillStyle = "#666";
					ctx.fillText(pie.info, EndX + (Math.cos(pie.middle) > 0 ? 5 : -5), EndY);
					ctx.fillStyle = pie.color;
					ctx.arc(EndX + isNegative * 2, EndY, 2, 0, Math.PI * 2);
					ctx.fill();
					ctx.lineWidth = 1;
					ctx.beginPath();
					ctx.strokeStyle = pie.color;
					ctx.moveTo(BeginX, BeginY);
					ctx.lineTo(MiddleX, MiddleY);
					ctx.lineTo(EndX, EndY);
					ctx.stroke();
				} else {
					switch (status) {
						case 1:
							//绘制文字
							ctx.fillStyle = "#666";
							ctx.fillText(pie.info, EndX + (Math.cos(pie.middle) > 0 ? 5 : -5), EndY);
							ctx.fillStyle = pie.color;
							break;
						case 2:
							//绘制线
							ctx.fillStyle = pie.color;
							ctx.arc(EndX, EndY, 2, 0, Math.PI * 2);
							ctx.fill();
							ctx.lineWidth = 1;
							ctx.beginPath();
							ctx.strokeStyle = pie.color;
							ctx.moveTo(BeginX, BeginY);
							ctx.lineTo(MiddleX, MiddleY);
							ctx.lineTo(EndX, EndY);
							ctx.stroke();
							break;
						case 3:
							//清除文字
							ctx.fillStyle = "#fff";
							ctx.fillRect(EndX + (Math.cos(pie.middle) > 0 ? 5 : -textWidth - 5), EndY - textHeight / 2, textWidth, textHeight);
							break;
						case 4:
							//清除线
							ctx.strokeStyle = "#fff";
							ctx.lineWidth = 2;
							ctx.moveTo(BeginX, BeginY);
							ctx.lineTo(MiddleX, MiddleY);
							ctx.lineTo(EndX, EndY);
							ctx.stroke();
							break;
					}
				}
				ctx.restore();
			}


			/***/
		}),
/* 127 */
/***/ (function (module, exports) {

			/**
			 * 绘制扇形上的文字
			 * @param  {[type]}  ctx      [description]
			 * @param  {[type]}  pie      [description]
			 * @param  {[type]}  radius   [description]
			 * @param  {[type]}  point    [description]
			 * @param  {[type]}  fontSize [description]
			 * @param  {Boolean} isClear  [description]
			 * @return {[type]}           [description]
			 */
			module.exports = function (ctx, pie, pies, radius, point, fontSize, isClear) {
				var x = point.x + (radius - 20) * Math.cos(pie.middle);
				var y = point.y + (radius - 20) * Math.sin(pie.middle);
				var inRight = Math.cos(pie.middle) >= 0 ? true : false;
				var fontFamily = ctx.font.split("px ")[1].trim();
				if (pie.showInfo) {
					ctx.beginPath();
					ctx.save();
					// debugger;
					ctx.font = fontSize + "px " + fontFamily;
					ctx.textBaseline = "middle";
					if (inRight) {
						ctx.textAlign = "start";
					} else {
						ctx.textAlign = "end";
					}
					if (!!isClear) { //清除（整片清除， 再写上出目标以外的文字）
						ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
						for (var i = 0, len = pies.length; i < len; i++) {
							//重写除目标以外的所有文字
							if (pies[i].id !== pie.id) {
								var tempIn = Math.cos(pies[i].middle) >= 0 ? true : false;
								if (tempIn) {
									ctx.textAlign = "start";
								} else {
									ctx.textAlign = "end";
								}
								var tempX = point.x + (radius - 20) * Math.cos(pies[i].middle);
								var tempY = point.y + (radius - 20) * Math.sin(pies[i].middle);
								ctx.fillText(pies[i].info, tempX, tempY);
							}
						}
					} else {
						ctx.fillText(pie.info, x, y);
					}
					ctx.restore();
				}

			}


			/***/
		}),
/* 128 */
/***/ (function (module, exports) {

			/**
			 * 绘制单个饼块
			 * @param  {[type]}  ctx     绘制上下文
			 * @param  {[type]}  point   绘制的饼块的原点
			 * @param  {[type]}  radius  绘制的饼块的半径
			 * @param  {[type]}  start   绘制的饼块的开始弧度
			 * @param  {[type]}  end     绘制的饼块的结束弧度
			 * @param  {[type]}  color   绘制饼块的颜色
			 * @param  {Boolean} isClear 是否只是做清除处理（保证不会出现脏图）
			 * @return {[type]}          [description]
			 */
			module.exports = function (ctx, point, radius, start, end, color, isClear) {
				//绘制饼块
				ctx.save();
				ctx.beginPath();
				ctx.fillStyle = color || "white";
				ctx.strokeStyle = "white";
				var tempStart = start;
				var tempEnd = end;
				if (Math.abs(start - end) == Math.PI * 2) {
					tempStart = 0;
					tempEnd = Math.PI * 2;
				}
				ctx.moveTo(point.x, point.y);
				ctx.lineTo(point.x + radius * Math.cos(tempStart), point.y + radius * Math.sin(tempStart));

				ctx.arc(point.x, point.y, radius, tempStart, tempEnd, false);
				ctx.lineTo(point.x, point.y);
				if (isClear) {
					ctx.stroke();
				}
				ctx.fill();
				ctx.restore();
			}


			/***/
		}),
/* 129 */
/***/ (function (module, exports, __webpack_require__) {

			var getResult = __webpack_require__(130);
			var getMinArr = __webpack_require__(131);

			//获取y轴上的指标分布
			module.exports = function (arr, resultLen, ySpace, radius, point, yBottom) {
				var leftArr = [];
				var rightArr = [];
				for (var i = 0, len = arr.length; i < len; i++) {
					//分左右两边
					if (Math.cos(arr[i].middle) < 0) {
						leftArr.push(arr[i]);
					} else {
						rightArr.push(arr[i]);
					}
				}
				//对于左边，
				if (leftArr.length > resultLen) {
					//y轴上的实际饼状分割数大于总的容纳分割数，部分数据不显示（最小的几块儿）
					var minLenLeft = leftArr.length - resultLen;
					var minArrLeft = getMinArr(leftArr, minLenLeft);
					for (i = 0; i < minLenLeft; i++) {
						leftArr[minArrLeft[i]].showInfo = false;
					}
				}
				//进行赋yIndex
				getResult(leftArr, resultLen, ySpace, radius, point, yBottom);

				//对于右边，
				if (rightArr.length > resultLen) {
					//y轴上的实际饼状分割数大于总的容纳分割数，部分数据不显示（最小的几块儿）
					var minLenRight = rightArr.length - resultLen;
					var minArrRight = getMinArr(rightArr, minLenRight);
					for (i = 0; i < minLenRight; i++) {
						rightArr[minArrRight[i]].showInfo = false;
					}
				}
				//进行赋yIndex
				getResult(rightArr, resultLen, ySpace, radius, point, yBottom);

				//数据合并
				return leftArr.concat(rightArr);
			}


			/***/
		}),
/* 130 */
/***/ (function (module, exports) {

			//进行y轴的分割（给arr添加yIndex）
			module.exports = function (arr, resultLen, ySpace, radius, point, yBottom) {
				var arrLen = arr.length;
				//初始化，所有的都还没有被填充
				var overResult = [];
				for (var i = 0; i < resultLen; i++) {
					overResult[i] = 0;
				}
				for (i = 0; i < arrLen; i++) {
					if (arr[i].showInfo) { //如果需要显示触手
						var y = point.y + (radius + radius / 10) * Math.sin(arr[i].middle) - yBottom;
						var tempIndex = Math.round(y / ySpace); //得到了调整之前的触手排列位置
						if (Math.sin(arr[i].middle) > 0) {
							tempIndex = Math.floor(y / ySpace);
						} else {
							tempIndex = Math.ceil(y / ySpace);
						}
						//判断是否重叠并且进行调整
						if (overResult[tempIndex]) {
							//重叠，两头同时进行搜索，找到的第一个空，插入,跳出循环
							for (var j = 1, endJ = Math.max(tempIndex, (resultLen - tempIndex)); j < endJ; j++) {
								if (tempIndex + j < resultLen && !overResult[tempIndex + j]) {
									overResult[tempIndex + j] = 1;
									break;
								}

								if (tempIndex - j < resultLen && !overResult[tempIndex - j] && tempIndex - j > 0) {
									overResult[tempIndex - j] = 1;
									break;
								}
							}
						} else {
							//未重叠
							overResult[tempIndex] = 1;
						}
					}
				}
				//排序之后才进行计算
				arr.sort(function (a, b) {
					return Math.sin(a.middle) - Math.sin(b.middle);
				});
				j = 0;
				//给每个饼状体加上他们的触角位置
				for (i = 0; i <= resultLen; i++) {
					if (overResult[i]) {
						if (arr[j].showInfo) {
							arr[j++].yIndex = i;
						} else { //一直到找到需要显示触角的饼状为止
							while (arr[j] && !arr[j].showInfo) {
								j++;
							}
							arr[j++].yIndex = i;
						}
					}
				}
			}


			/***/
		}),
/* 131 */
/***/ (function (module, exports) {

			//一个计算数组arr中，minArrLen个最小值的方法
			module.exports = function (arr, minArrLen) {
				var minArr = [];
				var arrLen = arr.length;
				for (var i = 0; i < minArrLen; i++) {
					minArr[i] = i;
				}
				minArr.sort(function (a, b) {
					return arr[b].value - arr[a].value;
				});
				for (i = minArrLen - 1; i < arrLen; i++) {
					//进行比较(每次替换最大的)
					for (var j = 0; j < minArrLen; j++) {
						if (arr[i].value < arr[minArr[j]].value) {
							minArr[j] = i;
							minArr.sort(function (a, b) {
								return arr[a].value - arr[b].value;
							});
							break;
						}
					}
				}
				return minArr;
			}


			/***/
		}),
/* 132 */
/***/ (function (module, exports) {

			module.exports = function (x, y, startOffset) {
				var theta = 0;
				if (y > 0) {
					theta = Math.acos(x / Math.sqrt(x * x + y * y));
				} else if (y < 0) {
					theta = 2 * Math.PI - Math.acos(x / Math.sqrt(x * x + y * y));
				} else {
					theta = x > 0 ? 0 : 2 * Math.PI;
				}
				if (theta - startOffset < 0) {
					theta += 2 * Math.PI;
				}
				return theta;
			}


			/***/
		}),
/* 133 */
/***/ (function (module, exports, __webpack_require__) {

			var pieIn = __webpack_require__(134);
			var pieOut = __webpack_require__(135);

			module.exports = function (obj) {
				//对点击进行处理，并且记录前一个点击对象
				var dpr = this.options.dpr;
				var that = this;
				var point = { x: that.options.point.x * dpr, y: that.options.point.y * dpr };
				var radius = this.options.radius * dpr;
				var ctx = this.options.context;
				var ctx2 = this.options.context2;
				var ySpace = this.options.ySpace;
				var onPie = this.options.onPie;
				var pies = this.options.pies;
				if (this.options.prePieClick) {
					if (this.options.prePieClick == obj) {
						pieIn(ctx, ctx2, obj, pies, point, radius, ySpace, onPie);
						obj.clicked = false;
						this.options.prePieClick = null;
					} else {
						pieIn(ctx, ctx2, this.options.prePieClick, pies, point, radius, ySpace, onPie);
						this.options.prePieClick.clicked = false;
						pieOut(ctx, ctx2, obj, pies, point, radius, ySpace, onPie);
						this.options.prePieClick = obj;
					}
				} else {
					pieOut(ctx, ctx2, obj, pies, point, radius, ySpace, onPie);
					this.options.prePieClick = obj;
				}
			}


			/***/
		}),
/* 134 */
/***/ (function (module, exports, __webpack_require__) {

			var drawPie = __webpack_require__(128);
			var drawInfo = __webpack_require__(126);
			var drawInfoOn = __webpack_require__(127);

			/**
			 * 饼块缩进去，重绘的一系列操作
			 * @param  {[type]} ctx    绘制上文
			 * @param  {[type]} obj    饼块对象
			 * @param  {[type]} point  饼状图圆点
			 * @param  {[type]} radius 饼状图半径
			 * @param  {[type]} ySpace 饼状图文字间距
			 * @return {[type]}        无返回
			 */
			module.exports = function (ctx, ctx2, obj, pies, point, radius, ySpace, onPie) {
				var pieStartDegree = obj.start;
				var pieEndDegree = obj.end;
				var pieMiddleDegree = (pieStartDegree + pieEndDegree) / 2;
				var fontSize = ctx2.font.split("px ")[0] * 1;
				drawPie(ctx, point, radius + radius * 3 / 20, pieStartDegree, pieEndDegree, "white");
				if (onPie) {
					drawInfoOn(ctx2, obj, pies, radius, point, fontSize, true);
				} else {
					//清除线条和文字
					drawInfo(ctx2, obj, radius, point, ySpace, 3);
				}

				drawPie(ctx, point, radius, pieStartDegree, pieEndDegree, obj.color);
				if (onPie) {
					drawInfoOn(ctx2, obj, pies, radius, point, fontSize);
				} else {
					drawInfo(ctx2, obj, radius, point, ySpace);
				}
			}


			/***/
		}),
/* 135 */
/***/ (function (module, exports, __webpack_require__) {

			var drawPie = __webpack_require__(128);
			var drawInfo = __webpack_require__(126);
			var drawInfoOn = __webpack_require__(127);

			/**
			 * 饼块弹出
			 * @param  {[type]} ctx    绘制上文
			 * @param  {[type]} obj    进行弹出的饼块对象
			 * @param  {[type]} point  饼块原点
			 * @param  {[type]} radius 饼块半径
			 * @return {[type]}        无返回
			 */
			module.exports = function (ctx, ctx2, obj, pies, point, radius, ySpace, onPie) {
				var pieStartDegree = obj.start;
				var pieEndDegree = obj.end;
				var pieMiddleDegree = (pieStartDegree + pieEndDegree) / 2;
				var fontSize = ctx2.font.split("px ")[0] * 1;
				var baseHeight = radius / 50;
				var offSet = baseHeight;
				if (Math.sin((pieEndDegree - pieStartDegree) / 2) <= 0.0001) {
					offSet = baseHeight;//防止除数为零
				} else {
					offSet = baseHeight / Math.sin((pieEndDegree - pieStartDegree) / 2);
					if (offSet > radius / 3) {//防止半径为负
						offSet = radius / 3;
					}
				}
				drawPie(ctx, point, radius + radius / 20, pieStartDegree, pieEndDegree, "white");
				//清除字
				if (onPie) {
					drawInfoOn(ctx2, obj, pies, radius, point, fontSize, true);
				} else {
					drawInfo(ctx2, obj, pies, radius, point, ySpace, 3);
				}
				drawPie(ctx, { //3/40
					x: point.x + offSet * Math.cos(pieMiddleDegree),
					y: point.y + offSet * Math.sin(pieMiddleDegree)
				}, (radius * 43 / 40 - offSet), pieStartDegree, pieEndDegree, obj.color);

				drawPie(ctx, { //2/40
					x: point.x + offSet * Math.cos(pieMiddleDegree),
					y: point.y + offSet * Math.sin(pieMiddleDegree)
				}, radius * 42 / 40 - offSet, pieStartDegree, pieEndDegree, "white", true);

				drawPie(ctx, { //1/40
					x: point.x + offSet * Math.cos(pieMiddleDegree),
					y: point.y + offSet * Math.sin(pieMiddleDegree)
				}, radius * 41 / 40 - offSet, pieStartDegree, pieEndDegree, obj.color);

				if (onPie) {
					drawInfoOn(ctx2, obj, pies, radius + radius / 40, point, fontSize + 4);
				} else { //写字
					drawInfo(ctx2, obj, radius, point, ySpace, 1);
				}
			}


			/***/
		}),
/* 136 */
/***/ (function (module, exports) {

			/**
			 * 添加交互效果
			 * @param  {[type]} pie [description]
			 * @param  {[type]} x   [description]
			 * @param  {[type]} y   [description]
			 * @return {[type]}     [description]
			 */
			module.exports = function (pie, x, y, inPie) {
				var container = this.container;
				if (!this.options.tips) { //构造出要显示的
					var tips = document.createElement("div");
					tips.className = 'chart_line_tips';
					tips.style.fontSize = "12px";
					tips.style.display = "none";
					var disc = document.createElement("span");
					disc.className = "chart_line_tips_color";
					disc.style.backgroundColor = pie.color;
					var name = document.createElement("span");
					name.innerHTML = pie.name;
					var value = document.createElement("div");
					value.innerHTML = pie.tip;

					tips.appendChild(disc);
					tips.appendChild(name);
					tips.appendChild(value);
					container.appendChild(tips);
					tips.style.top = y + "px";
					tips.style.left = x + "px";
					this.options.tips = tips;
				} else {
					var tips = this.options.tips;
					if (!inPie) {
						tips.style.display = "none";
					} else {
						tips.style.display = "block";
					}

					tips.children[0].style.backgroundColor = pie.color;
					tips.children[1].innerHTML = pie.name;
					tips.children[2].innerHTML = pie.tip;

					if (Math.cos(pie.middle) >= 0) {
						tips.style.top = y - tips.clientHeight - 10 + "px";
						tips.style.left = x + 10 + "px";
					} else {
						tips.style.top = y - tips.clientHeight - 10 + "px";
						tips.style.left = x - tips.clientWidth - 10 + "px";
					}
				}


			}


			/***/
		}),
/* 137 */
/***/ (function (module, exports, __webpack_require__) {

			var extend = __webpack_require__(21);
			var watermark = __webpack_require__(22);
			var divide = __webpack_require__(38);
			var DrawXY = __webpack_require__(138);
			var drawBar = __webpack_require__(139);
			var handleEvent = __webpack_require__(140);
			// 添加公用模块
			var common = __webpack_require__(13);

			var ChartMobileBar = (function () {

				function ChartMobileBar(options) {
					this.options = extend(this.options, options);
					// 图表容器
					this.container = document.getElementById(options.container);

					this.container.className = this.container.className.replace(/emcharts-container/g, "").trim();
					this.container.className = this.container.className + " emcharts-container";
				}

				ChartMobileBar.prototype.init = function () {
					/*默认和初始化*/
					this.container.style.position = "relative";
					if (this.options.dpr === undefined) {
						this.options.dpr = 1;
					}
					var dpr = this.options.dpr;
					/*canvas属性*/
					var canvas = document.createElement("canvas");
					this.container.appendChild(canvas);

					canvas.width = dpr * this.options.width;
					canvas.height = dpr * this.options.height;
					canvas.style.width = this.options.width + "px";
					canvas.style.height = this.options.height + "px";
					canvas.style.border = "0px";
					try {
						var ctx = canvas.getContext('2d');
					} catch (error) {
						canvas = window.G_vmlCanvasManager.initElement(canvas);
						var ctx = canvas.getContext('2d');
					}
					var ctx = canvas.getContext("2d");

					/*一些如果不存在，就进行的默认设定*/
					if (this.options.font_size === undefined) {
						this.options.font_size = 12;
					}
					ctx.font = (this.options.font_size * dpr) + "px Arial";
					ctx.lineWidth = dpr * 1;
					this.options.dpr = dpr;
					this.options.canvas = canvas;
					this.options.context = ctx;

					if (this.options.color === undefined) {
						this.options.color = "#6890D5";
					}
					if (this.options.hoverColor === undefined) {
						this.options.hoverColor = "#7EA1DA";
					}
					if (!this.options.sepeNum) {
						this.options.sepeNum = 4;
					}
					var yaxis = this.options.yaxis;
					var coordinate = divide(this.options.sepeNum, this.options.series.data);
					this.options.coordinate = coordinate;

					this.options.padding = {};
					//取得paddingleft
					var paddingLeft = 0;
					for (var i = 0, len = yaxis.length; i < len; i++) {
						paddingLeft = Math.max(ctx.measureText(yaxis[i].value).width, paddingLeft);
					}
					this.options.padding.left = (paddingLeft + 10) * dpr;
					//取得paddingRight
					var paddingRight = ctx.measureText(coordinate.max).width;
					this.options.padding.right = (paddingRight + 10) * dpr;
					this.options.padding.top = this.options.font_size * 2 * dpr;
					this.options.padding.bottom = 50 * dpr;

					/*单位宽度*/
					var unitHeight = (canvas.height - this.options.padding.top - this.options.padding.bottom) / (yaxis.length);
					this.options.unitHeight = unitHeight;

					// 加水印
					watermark.apply(this, [this.options.context, 110 + paddingRight, 40, 82, 20]);

				};

				ChartMobileBar.prototype.draw = function (cb) {
					this.clear();
					this.init();
					var _this = this;
					new DrawXY(this.options);
					drawBar.call(this);
					common.addEvent(_this.container, "mousemove", function (e) {
						var winX, winY;
						//浏览器检测，获取到相对元素的x和y
						if (e.layerX) {
							winX = e.layerX;
							winY = e.layerY;
						} else if (e.x) {
							winX = e.x;
							winY = e.y;
						}
						// winX = e.offsetX || (e.clientX - _this.container.getBoundingClientRect().left);
						// winY = e.offsetY || (e.clientY - _this.container.getBoundingClientRect().top);
						handleEvent.call(_this, winX, winY);

						try {
							e.preventDefault();
						}
						catch (error) {
							e.returnValue = false;
						}
					})
					common.addEvent(_this.container, "mouseleave", function (e) {
						if (_this.options.tips !== undefined) {
							_this.options.tips.style.display = "none";
							_this.options.tips.style.left = "-10000";
						}
					});
					if (cb) {
						cb();
					}
				};

				// 重绘
				ChartMobileBar.prototype.reDraw = function () {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					this.draw();
				}

				ChartMobileBar.prototype.clear = function (cb) {
					if (this.container) {
						this.container.innerHTML = "";
					} else {
						document.getElementById(this.options.container).innerHTML = "";
					}
					if (cb) {
						cb();
					};
				}


				return ChartMobileBar;
			})();

			module.exports = ChartMobileBar;


			/***/
		}),
/* 138 */
/***/ (function (module, exports, __webpack_require__) {

			/*绘制xy轴*/
			var extend = __webpack_require__(21);
			var draw_dash = __webpack_require__(25);
			// 格式化坐标
			var XYF = __webpack_require__(9);
			var common = __webpack_require__(60);
			var DrawXY = (function () {
				function DrawXY(options) {
					this.options = {};
					this.options = extend(this.options, options);

					this.draw();
				}

				DrawXY.prototype.init = function () {
					// x轴上设置
					this.options.xSplitShow = false; //是否进行分割
					this.options.xShowDivide = false; //是否显示分割标志

				}

				DrawXY.prototype.draw = function () {
					this.init();
					var paddingTop = this.options.padding.top,
						paddingLeft = this.options.padding.left,
						paddingRight = this.options.padding.right,
						paddingBottom = this.options.padding.bottom;

					var ctx = this.options.context,
						canvas = this.options.canvas,
						arr_y = this.options.yaxis,
						arr_data = this.options.series.data,
						unitHeight = this.options.unitHeight,
						dpr = this.options.dpr;

					var coordinate = this.options.coordinate,
						maxX = coordinate.max,
						minX = coordinate.min,
						stepWidth = coordinate.stepHeight,
						sepeNum = this.options.sepeNum,
						totalWidth = canvas.width - paddingLeft - paddingRight,
						baseLine = paddingLeft + (maxX / stepWidth) * (totalWidth) / sepeNum,
						unitWidth = totalWidth / sepeNum;

					/*开始进行绘制*/
					ctx.save();
					var y_bottom = XYF(Math.round(canvas.height - paddingBottom));
					var y_top = XYF(Math.round(paddingTop));
					var x_left = XYF(Math.round(paddingLeft));
					var x_right = XYF(Math.round(canvas.width - paddingRight));
					/*框*/
					ctx.strokeStyle = "#C9C9C9";
					ctx.beginPath();

					ctx.moveTo(x_left, y_bottom);
					ctx.lineTo(x_right, y_bottom);

					ctx.moveTo(x_left, y_bottom);
					ctx.lineTo(x_left, y_top);

					ctx.moveTo(x_left, y_top);
					ctx.lineTo(x_right, y_top);

					ctx.moveTo(x_right, y_bottom);
					ctx.lineTo(x_right, y_top);
					ctx.stroke();

					/*纵标*/
					ctx.save();
					ctx.beginPath();
					ctx.textAlign = "end";
					ctx.textBaseline = "middle";
					for (var i = 0, len = arr_y.length; i < len; i++) {
						var textWidth = ctx.measureText(arr_y[i].value).width;
						if (arr_y[i].show) {
							ctx.fillText(arr_y[i].value, paddingLeft - 8 * dpr, y_top + i * unitHeight + unitHeight / 2);
							ctx.moveTo(paddingLeft - 4 * dpr, XYF(y_top + i * unitHeight + unitHeight / 2));
							ctx.lineTo(paddingLeft, XYF(y_top + i * unitHeight + unitHeight / 2));
						}
					}
					ctx.stroke();
					ctx.restore();

					/*分割线*/
					for (i = 1, len = sepeNum; i < len; i++) {
						ctx.beginPath();
						if (i == -minX / stepWidth) {
							ctx.moveTo(XYF(unitWidth * i + paddingLeft), y_top);
							ctx.lineTo(XYF(unitWidth * i + paddingLeft), y_bottom);
							ctx.stroke();
						} else {
							draw_dash(ctx, unitWidth * i + paddingLeft, y_top,
								unitWidth * i + paddingLeft, y_bottom, 3);
						}
					}
					/*横标刻度*/
					ctx.save();
					var yMax = this.options.coordinateMaxY;
					ctx.textAlign = "center";
					ctx.textBaseline = "top";
					var markStep = yMax / sepeNum;
					ctx.beginPath();
					for (i = 0; i <= sepeNum; i++) {
						ctx.fillText(roundFloat(minX + i * stepWidth, stepWidth), XYF(unitWidth * i + paddingLeft), y_bottom + 7 * dpr);
						ctx.moveTo(XYF(unitWidth * i + paddingLeft), y_bottom);
						ctx.lineTo(XYF(unitWidth * i + paddingLeft), y_bottom + 5 * dpr);
						ctx.stroke();
					}
					ctx.restore();
				}


				function roundFloat(f, stepHeight) {
					var precise = 1;
					if (stepHeight.toString().indexOf(".") !== -1) {
						precise = stepHeight.toString().length - stepHeight.toString().indexOf(".") - 1;
					}
					var m = Math.pow(10, precise);
					return common.format_unit(Math.round(f * m) / m, precise);
				}

				return DrawXY;
			})();


			module.exports = DrawXY;


			/***/
		}),
/* 139 */
/***/ (function (module, exports, __webpack_require__) {

			// 格式化坐标
			var XYF = __webpack_require__(9);

			module.exports = function () {
				var dpr = this.options.dpr,
					cvs = this.options.canvas,
					ctx = this.options.context,
					datas = this.options.series.data,
					yaxis = this.options.yaxis;

				var coordinate = this.options.coordinate,
					sepeNum = this.options.sepeNum,
					unitHeight = this.options.unitHeight,
					paddingLeft = this.options.padding.left,
					paddingRight = this.options.padding.right,
					paddingTop = this.options.padding.top,
					totalWidth = (cvs.width - paddingLeft - paddingRight),
					baseLine = XYF(paddingLeft + totalWidth / sepeNum * (-coordinate.min / coordinate.stepHeight));

				var color = this.options.color,
					hoverColor = this.options.hoverColor;

				ctx.save();
				ctx.fillStyle = color;
				ctx.strokeStyle = color;
				ctx.beginPath();
				for (var i = 0, len = datas.length; i < len; i++) {
					ctx.save();
					/*单个定制的颜色*/
					if (yaxis[i].color !== undefined) {
						ctx.fillStyle = yaxis[i].color;
						ctx.strokeStyle = yaxis[i].color;
					}
					if (datas[i] < 0) { /*柱体占的比例为1/2*/
						var barWidth = Math.round(datas[i] / coordinate.min * (baseLine - paddingLeft));
						ctx.fillRect(baseLine - barWidth, XYF(paddingTop + unitHeight * (i + 1 / 4)), barWidth, Math.round(unitHeight / 2));
					} else {
						ctx.fillRect(baseLine, XYF(paddingTop + unitHeight * (i + 1 / 4)), Math.round(datas[i] / coordinate.max * (totalWidth - (baseLine - paddingLeft))), Math.round(unitHeight / 2));
					}
					ctx.restore();
				}
				ctx.restore();

			}


			/***/
		}),
/* 140 */
/***/ (function (module, exports, __webpack_require__) {

			// 格式化坐标
			var XYF = __webpack_require__(9);
			module.exports = function (winX, winY) {
				/*复刻this.options*/
				var dpr = this.options.dpr,
					cvs = this.options.canvas,
					ctx = this.options.context,
					datas = this.options.series.data,
					yaxis = this.options.yaxis;

				var coordinate = this.options.coordinate,
					sepeNum = this.options.sepeNum,
					unitHeight = this.options.unitHeight,
					paddingLeft = this.options.padding.left,
					paddingRight = this.options.padding.right,
					paddingTop = this.options.padding.top,
					paddingBottom = this.options.padding.bottom,
					totalWidth = (cvs.width - paddingLeft - paddingRight),
					baseLine = XYF(paddingLeft + totalWidth / sepeNum * (-coordinate.min / coordinate.stepHeight));

				var color = this.options.color,
					hoverColor = this.options.hoverColor;

				/*通过在哪个区间，进行交互显示*/
				var cursor = Math.floor((winY * dpr - paddingTop) / unitHeight);
				if (cursor >= 0 && cursor < datas.length) {
					/*需要显示的内容*/
					var prefix = this.options.series.prefix === undefined ? "" : this.options.series.prefix,
						suffix = this.options.series.suffix === undefined ? "" : this.options.series.suffix,
						title = yaxis[cursor].value,
						value = prefix + datas[cursor] + suffix;
					/*悬浮的颜色变换*/
					if (this.options.preCursor === undefined) {
						this.options.preCursor = cursor;
						hover(cursor, cursor);
					} else {
						var pre = this.options.preCursor;
						this.options.preCursor = cursor;

						hover(pre, cursor);
					}
					if (!this.options.tips) {
						var pad = document.createElement("div");
						var el_title = document.createElement("div");
						el_title.innerHTML = title;
						var el_value = document.createElement("div");
						var value_point = document.createElement("span");
						var value_text = document.createElement("span");
						value_text.innerHTML = value;

						el_value.appendChild(value_point);
						el_value.appendChild(value_text)
						pad.appendChild(el_title);
						pad.appendChild(el_value);
						this.container.appendChild(pad);

						this.options.tips = pad;
						/*样式*/
						pad.style.position = "absolute";
						pad.style.font = "12px/150% Simsun,arial,sans-serif";
						pad.style.padding = "5px";
						pad.style.backgroundColor = "#000";
						pad.style.color = "#fff";
						pad.style.borderRadius = "5px";
						pad.style.opacity = "0.7";
						pad.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Opacity=70)";

						value_point.style.display = "inline-block";
						value_point.style.width = "6px";
						value_point.style.height = "6px";
						if (yaxis[cursor].hoverColor !== undefined) {
							value_point.style.backgroundColor = yaxis[cursor].hoverColor;
						} else {
							value_point.style.backgroundColor = hoverColor;
						}
						value_point.style.borderRadius = "50%";
						value_point.style.marginRight = "5px";

						value_text.style.display = "inline-block";

						//左右和上下的位置变换处理
						if (winX * dpr >= paddingLeft + totalWidth / 2) {
							pad.style.left = (winX - pad.clientWidth - 20) + "px";
						} else {
							pad.style.left = (winX + 20) + "px";
						}
						if (winY * dpr <= paddingTop + pad.clientHeight * dpr) {
							pad.style.top = paddingTop + "px";
						} else {
							pad.style.top = winY - pad.clientHeight + "px";
						}
					} else {
						var el_pad = this.options.tips;
						/*先显示，才能计算div宽高*/
						if (winX * dpr <= paddingLeft || winX * dpr >= paddingLeft + totalWidth) {
							this.options.tips.style.display = "none";
							this.options.tips.style.left = "-10000";
							hover(cursor);
						} else {
							el_pad.style.display = "block";
						}

						el_pad.children[0].innerHTML = title;
						el_pad.children[1].children[1].innerHTML = value;
						if (yaxis[cursor].hoverColor !== undefined) {
							el_pad.children[1].children[0].style.backgroundColor = yaxis[cursor].hoverColor;
						} else {
							el_pad.children[1].children[0].style.backgroundColor = hoverColor;
						}
						//左右和上下的位置变换处理
						if (winX * dpr >= paddingLeft + totalWidth / 2) {
							el_pad.style.left = (winX - el_pad.clientWidth - 20) + "px";
						} else {
							el_pad.style.left = (winX + 20) + "px";
						}
						if (winY * dpr <= paddingTop + el_pad.clientHeight * dpr) {
							el_pad.style.top = paddingTop + "px";
						} else {
							el_pad.style.top = winY - el_pad.clientHeight + "px";
						}

					}
				} else {
					if (this.options.tips) {
						this.options.tips.style.display = "none";
						this.options.tips.style.left = "-10000";
						cursor = cursor < 0 ? 0 : datas.length - 1;
						hover(cursor);
					}
				}
				/*柱体悬浮颜色的变化，不传第二个参数，即为消除*/
				function hover(pre, cur) {
					ctx.save();
					/*原来的柱子颜色恢复*/
					ctx.fillStyle = color;
					if (yaxis[pre].color !== undefined) {
						ctx.fillStyle = yaxis[pre].color;
					}
					if (datas[pre] < 0) {
						var barWidth = Math.round(datas[pre] / coordinate.min * (baseLine - paddingLeft));
						ctx.fillRect(baseLine - barWidth, XYF(paddingTop + unitHeight * (pre + 1 / 4)), barWidth, Math.round(unitHeight / 2));
					} else {
						ctx.fillRect(baseLine, XYF(paddingTop + unitHeight * (pre + 1 / 4)), Math.round(datas[pre] / coordinate.max * (totalWidth - (baseLine - paddingLeft))), Math.round(unitHeight / 2));
					}
					/*现在的柱子颜色改变*/
					if (cur !== undefined) {
						ctx.fillStyle = hoverColor;
						if (yaxis[pre].hoverColor !== undefined) {
							ctx.fillStyle = yaxis[pre].hoverColor;
						}
						if (datas[cur] < 0) {
							var barWidth = Math.round(datas[cur] / coordinate.min * (baseLine - paddingLeft));
							ctx.fillRect(baseLine - barWidth, XYF(paddingTop + unitHeight * (cur + 1 / 4)), barWidth, Math.round(unitHeight / 2));
						} else {
							ctx.fillRect(baseLine, XYF(paddingTop + unitHeight * (cur + 1 / 4)), Math.round(datas[cur] / coordinate.max * (totalWidth - (baseLine - paddingLeft))), Math.round(unitHeight / 2));
						}
					}
					ctx.restore();
				}
			}


			/***/
		}),
/* 141 */
/***/ (function (module, exports, __webpack_require__) {

			var extend = __webpack_require__(21);
			var watermark = __webpack_require__(22);
			var divide = __webpack_require__(38);
			var DrawXY = __webpack_require__(142);
			var drawBar = __webpack_require__(143);
			var handleEvent = __webpack_require__(144);
			// 添加公用模块
			var common = __webpack_require__(13);

			var ChartMobileBar = (function () {

				function ChartMobileBar(options) {
					this.options = extend(this.options, options);
					// 图表容器
					this.container = document.getElementById(options.container);

					this.container.className = this.container.className.replace(/emcharts-container/g, "").trim();
					this.container.className = this.container.className + " emcharts-container";
				}

				ChartMobileBar.prototype.init = function () {
					/*默认和初始化*/
					this.container.style.position = "relative";
					if (this.options.dpr === undefined) {
						this.options.dpr = 1;
					}
					var dpr = this.options.dpr;

					var eventDiv = document.createElement("div");
					eventDiv.className = "event-div";
					this.container.appendChild(eventDiv);
					this.eventDiv = eventDiv;

					/*canvas属性*/
					var canvas = document.createElement("canvas");
					this.container.appendChild(canvas);

					canvas.width = dpr * this.options.width;
					canvas.height = dpr * this.options.height;
					canvas.style.width = this.options.width + "px";
					canvas.style.height = this.options.height + "px";
					canvas.style.border = "0px";
					try {
						var ctx = canvas.getContext('2d');
					} catch (error) {
						canvas = window.G_vmlCanvasManager.initElement(canvas);
						var ctx = canvas.getContext('2d');
					}
					var ctx = canvas.getContext("2d");

					/*一些如果不存在，就进行默认的设定*/
					if (this.options.font_size === undefined) {
						this.options.font_size = 12;
					}
					ctx.font = (this.options.font_size * dpr) + "px Arial";
					ctx.lineWidth = dpr * 1;
					this.options.dpr = dpr;
					this.options.canvas = canvas;
					this.options.context = ctx;

					if (this.options.color === undefined) {
						this.options.color = "#6890D5";
					}
					if (!this.options.sepeNum) {
						this.options.sepeNum = 4;
					}
					var yaxis = this.options.yaxis;
					var series = this.options.series;
					var dataArr = series.reduce(function (pre, cur, index, arr) {
						return pre.concat(cur.data);
					}, series[0].data);
					var coordinate = divide(this.options.sepeNum, dataArr);
					this.options.coordinate = coordinate;

					this.options.padding = {};
					//取得paddingleft
					var paddingLeft = 0;
					for (var i = 0, len = yaxis.length; i < len; i++) {
						//用回车分割的每一条文字，找出最大值作为paddingLeft
						yaxis[i].value.replace(/^\s+|\s+$/g, "").split("\n").map(function (item) {
							paddingLeft = Math.max(ctx.measureText(item).width, paddingLeft);
						});
					}
					this.options.padding.left = (paddingLeft + 10) * dpr;
					//取得paddingRight
					var paddingRight = ctx.measureText(coordinate.max).width / 2;
					this.options.padding.right = (paddingRight + 5) * dpr;
					this.options.padding.top = 15 * dpr;
					this.options.padding.bottom = 25 * dpr;

					/*单位宽度*/
					var unitHeight = (canvas.height - this.options.padding.top - this.options.padding.bottom) / (yaxis.length);
					this.options.unitHeight = unitHeight;

					// 加水印
					watermark.apply(this, [this.options.context, 110 + paddingRight, 40, 82, 20]);

				};

				ChartMobileBar.prototype.draw = function (cb) {
					this.clear();
					this.init();
					var _this = this;
					new DrawXY(this.options);
					drawBar.call(this);
					common.addEvent(_this.eventDiv, "mousemove", function (e) {
						var winX, winY;
						//浏览器检测，获取到相对元素的x和y
						if (e.layerX) {
							winX = e.layerX;
							winY = e.layerY;
						} else if (e.x) {
							winX = e.x;
							winY = e.y;
						}
						// winX = e.offsetX || (e.clientX - _this.container.getBoundingClientRect().left);
						// winY = e.offsetY || (e.clientY - _this.container.getBoundingClientRect().top);
						handleEvent.call(_this, winX, winY);

						try {
							e.preventDefault();
						} catch (error) {
							e.returnValue = false;
						}
					})
					common.addEvent(_this.eventDiv, "mouseleave", function (e) {
						if (_this.options.tips !== undefined) {
							_this.options.tips[0].style.display = "none";
							_this.options.tips[0].style.left = "-10000";

							_this.options.tips[1].style.display = "none";
							_this.options.tips[1].style.left = "-10000";
						}
					});
					if (cb) {
						cb();
					}
				};

				// 重绘
				ChartMobileBar.prototype.reDraw = function () {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					this.draw();
				}

				ChartMobileBar.prototype.clear = function (cb) {
					if (this.container) {
						this.container.innerHTML = "";
					} else {
						document.getElementById(this.options.container).innerHTML = "";
					}
					if (this.options.tips) {
						this.options.tips = null;
					}
					if (cb) {
						cb();
					};
				}


				return ChartMobileBar;
			})();

			module.exports = ChartMobileBar;


			/***/
		}),
/* 142 */
/***/ (function (module, exports, __webpack_require__) {

			/*绘制xy轴*/
			var extend = __webpack_require__(21);
			var draw_dash = __webpack_require__(25);
			// 格式化坐标
			var XYF = __webpack_require__(9);
			var common = __webpack_require__(60);
			var DrawXY = (function () {
				function DrawXY(options) {
					this.options = {};
					this.options = extend(this.options, options);

					this.draw();
				}

				DrawXY.prototype.init = function () {
					// x轴上设置
					this.options.xSplitShow = false; //是否进行分割
					this.options.xShowDivide = false; //是否显示分割标志

				}

				DrawXY.prototype.draw = function () {
					this.init();
					var paddingTop = this.options.padding.top,
						paddingLeft = this.options.padding.left,
						paddingRight = this.options.padding.right,
						paddingBottom = this.options.padding.bottom;

					var ctx = this.options.context,
						canvas = this.options.canvas,
						arr_y = this.options.yaxis,
						arr_data = this.options.series,
						unitHeight = this.options.unitHeight,
						dpr = this.options.dpr;

					var coordinate = this.options.coordinate,
						maxX = coordinate.max,
						minX = coordinate.min,
						stepWidth = coordinate.stepHeight,
						sepeNum = this.options.sepeNum,
						totalWidth = canvas.width - paddingLeft - paddingRight,
						baseLine = paddingLeft + (maxX / stepWidth) * (totalWidth) / sepeNum,
						unitWidth = totalWidth / sepeNum;

					/*开始进行绘制*/
					ctx.save();
					var y_bottom = XYF(Math.round(canvas.height - paddingBottom));
					var y_top = XYF(Math.round(paddingTop));
					var x_left = XYF(Math.round(paddingLeft));
					var x_right = XYF(Math.round(canvas.width - paddingRight));
					/*框*/
					ctx.strokeStyle = "#C9C9C9";
					ctx.beginPath();

					ctx.moveTo(x_left, y_bottom);
					ctx.lineTo(x_right, y_bottom);

					ctx.moveTo(x_left, y_bottom);
					ctx.lineTo(x_left, y_top);

					ctx.moveTo(x_left, y_top);
					ctx.lineTo(x_right, y_top);

					ctx.moveTo(x_right, y_bottom);
					ctx.lineTo(x_right, y_top);
					ctx.stroke();

					/*纵标*/
					ctx.save();
					ctx.beginPath();
					ctx.textAlign = "end";
					ctx.textBaseline = "middle";
					for (var i = 0, len = arr_y.length; i < len; i++) {
						var textWidth = ctx.measureText(arr_y[i].value).width;
						if (arr_y[i].show) {
							writeMore(ctx, arr_y[i].value, paddingLeft - 8 * dpr, y_top + i * unitHeight + unitHeight / 2)
							ctx.moveTo(paddingLeft - 4 * dpr, XYF(y_top + i * unitHeight + unitHeight / 2));
							ctx.lineTo(paddingLeft, XYF(y_top + i * unitHeight + unitHeight / 2));
						}
						if (arr_y[i].showline && i !== len - 1) {
							draw_dash(ctx, paddingLeft, y_top + i * unitHeight + unitHeight,
								paddingLeft + totalWidth, y_top + i * unitHeight + unitHeight, 3);
						}
					}
					ctx.stroke();
					ctx.restore();

					/*分割线*/
					for (i = 1, len = sepeNum; i < len; i++) {
						ctx.beginPath();
						if (i == -minX / stepWidth) {
							ctx.moveTo(XYF(unitWidth * i + paddingLeft), y_top);
							ctx.lineTo(XYF(unitWidth * i + paddingLeft), y_bottom);
							ctx.stroke();
						} else {
							draw_dash(ctx, unitWidth * i + paddingLeft, y_top,
								unitWidth * i + paddingLeft, y_bottom, 3);
						}
					}
					/*横标刻度*/
					ctx.save();
					var yMax = this.options.coordinateMaxY;
					ctx.textAlign = "center";
					ctx.textBaseline = "top";
					var markStep = yMax / sepeNum;
					ctx.beginPath();
					for (i = 0; i <= sepeNum; i++) {
						ctx.fillText(roundFloat(minX + i * stepWidth, stepWidth), XYF(unitWidth * i + paddingLeft), y_bottom + 7 * dpr);
						ctx.moveTo(XYF(unitWidth * i + paddingLeft), y_bottom);
						ctx.lineTo(XYF(unitWidth * i + paddingLeft), y_bottom + 5 * dpr);
						ctx.stroke();
					}
					ctx.restore();
				}

				function writeMore(ctx, value, left, top) {
					var textList = value.replace(/^\s+|\s+$/g, "").split("\n"),
						len = textList.length;
					lineHeight = ctx.font.split("px")[0] * 1.2,
						totalHeight = lineHeight * (len - 1);
					for (var i = 0; i < len; i++) {
						ctx.fillText(textList[i], left, top - totalHeight / 2 + lineHeight * i);
					}
				}

				function roundFloat(f, stepHeight) {
					var precise = 1;
					if (stepHeight.toString().indexOf(".") !== -1) {
						precise = stepHeight.toString().length - stepHeight.toString().indexOf(".") - 1;
					}
					var m = Math.pow(10, precise);
					return common.format_unit(Math.round(f * m) / m, precise);
				}

				return DrawXY;
			})();


			module.exports = DrawXY;


			/***/
		}),
/* 143 */
/***/ (function (module, exports, __webpack_require__) {

			// 格式化坐标
			var XYF = __webpack_require__(9);

			module.exports = function () {
				var dpr = this.options.dpr,
					cvs = this.options.canvas,
					ctx = this.options.context,
					datas = this.options.series,
					yaxis = this.options.yaxis;

				var coordinate = this.options.coordinate,
					sepeNum = this.options.sepeNum,
					unitHeight = this.options.unitHeight,
					paddingLeft = this.options.padding.left,
					paddingRight = this.options.padding.right,
					paddingTop = this.options.padding.top,
					totalWidth = (cvs.width - paddingLeft - paddingRight),
					baseLine = XYF(paddingLeft + totalWidth / sepeNum * (-coordinate.min / coordinate.stepHeight));

				var color = this.options.color,
					hoverColor = this.options.hoverColor;

				ctx.save();
				ctx.beginPath();
				for (var i = 0, len = datas.length; i < len; i++) {
					var dataObj = datas[i];
					var itemHeight = unitHeight / (1.618 * len + 0.618);
					var itemSpace = 0.618 * itemHeight;
					var color = "#7CB5EC";
					if (dataObj.color !== undefined) {
						color = dataObj.color;
					}
					ctx.fillStyle = color;
					ctx.strokeStyle = color;
					for (var j = 0, jLen = dataObj.data.length; j < jLen; j++) {
						var barWidth = Math.round(dataObj.data[j] / coordinate.min * (baseLine - paddingLeft));
						ctx.fillRect(baseLine - barWidth, XYF(paddingTop + unitHeight * j + itemSpace * (i + 1) + itemHeight * i), barWidth, itemHeight);
					}
				}
				ctx.restore();

			}


			/***/
		}),
/* 144 */
/***/ (function (module, exports, __webpack_require__) {

			// 格式化坐标
			var XYF = __webpack_require__(9);
			module.exports = function (winX, winY) {
				/*复刻this.options*/
				var dpr = this.options.dpr,
					cvs = this.options.canvas,
					ctx = this.options.context,
					datas = this.options.series,
					yaxis = this.options.yaxis;

				var coordinate = this.options.coordinate,
					sepeNum = this.options.sepeNum,
					unitHeight = this.options.unitHeight,
					paddingLeft = this.options.padding.left,
					paddingRight = this.options.padding.right,
					paddingTop = this.options.padding.top,
					paddingBottom = this.options.padding.bottom,
					totalWidth = (cvs.width - paddingLeft - paddingRight),
					baseLine = XYF(paddingLeft + totalWidth / sepeNum * (-coordinate.min / coordinate.stepHeight));

				var color = this.options.color,
					hoverColor = this.options.hoverColor,
					spaceBetween = 10;

				/*通过在哪个区间，进行交互显示*/
				var cursor = Math.floor((winY * dpr - paddingTop) / unitHeight);
				if (cursor >= 0 && cursor < yaxis.length && (winX > paddingLeft && winX < cvs.width - paddingRight)) {
					var title = yaxis[cursor].value,
						tipLines = [],
						line = {};
					for (var i = 0, len = datas.length; i < len; i++) {
						var prefix = datas[i].prefix === undefined ? "" : datas[i].prefix;
						var suffix = datas[i].suffix === undefined ? "" : datas[i].suffix;
						tipLines.push({
							"text": prefix + datas[i].data[cursor] + suffix,
							"color": datas[i].color
						});
					}
					if (!this.options.tips) {
						var tipMask = document.createElement("div"),
							tipPanel = document.createElement("div");
						this.options.tips = [];
						this.options.tips.push(tipMask);
						this.container.appendChild(tipMask);

						tipMask.className = "horizontal-gmask";
						tipMask.style.width = totalWidth + "px";
						tipMask.style.height = unitHeight + "px";
						tipMask.style.top = (paddingTop + unitHeight * cursor) + "px";
						tipMask.style.left = paddingLeft + "px";
						this.options.tips.push(tipPanel);
						this.container.appendChild(tipPanel);
						tipPanel.className = "horizontal-gpanel";
						//决定tip是显示在mask的上面还是下面
						var tipTitle = document.createElement("div");
						tipTitle.innerHTML = title;
						tipPanel.appendChild(tipTitle);
						for (var j = 0, jLen = tipLines.length; j < jLen; j++) {
							var divLine = document.createElement("div");
							divLine.style.paddingTop = "8px";
							divLine.innerHTML = '<i style="display: inline-block;margin-right:5px; height: 10px;width: 10px; border-radius: 5px;background-color:' +
								tipLines[j].color + '"></i><span>' + tipLines[j].text + '</span>';
							tipPanel.appendChild(divLine);
						}
						if (paddingTop + unitHeight * (2 / 3 + cursor) + tipPanel.clientHeight < cvs.height - paddingBottom && paddingTop + unitHeight * (2 / 3 + cursor) + tipPanel.clientHeight > paddingTop) {
							tipPanel.style.top = (paddingTop + unitHeight * (2 / 3 + cursor)) + "px";
						} else if (paddingTop + unitHeight * (2 / 3 + cursor) + tipPanel.clientHeight > cvs.height - paddingBottom) {
							tipPanel.style.top = cvs.height - paddingBottom - tipPanel.clientHeight - unitHeight * (1 / 3) + "px";
						} else {
							tipPanel.style.top = cvs.height - paddingBottom - tipPanel.clientHeight - unitHeight * (2 / 3) + "px";
						}

						if (winX > totalWidth / 2 + paddingLeft) {
							tipPanel.style.left = winX - spaceBetween - tipPanel.clientWidth + "px";
						} else {
							tipPanel.style.left = winX + spaceBetween + "px";
						}
					} else {
						var existMask = this.options.tips[0],
							existPanel = this.options.tips[1],
							existLines = existPanel.children,
							existTitle = existLines[0];

						existTitle.innerHTML = title;
						existMask.style.top = (paddingTop + unitHeight * cursor) + "px";
						existMask.style.left = paddingLeft + "px";

						for (var k = 0, kLen = existLines.length; k < kLen - 1; k++) {
							existLines[k + 1].children[1].innerHTML = tipLines[k].text;
						}
						existMask.style.display = "block";
						existPanel.style.display = "block";

						if (paddingTop + unitHeight * (2 / 3 + cursor) + existPanel.clientHeight < cvs.height - paddingBottom && paddingTop + unitHeight * (2 / 3 + cursor) + existPanel.clientHeight > paddingTop) {
							existPanel.style.top = (paddingTop + unitHeight * (2 / 3 + cursor)) + "px";
						} else if (paddingTop + unitHeight * (2 / 3 + cursor) + existPanel.clientHeight > cvs.height - paddingBottom) {
							existPanel.style.top = cvs.height - paddingBottom - existPanel.clientHeight - unitHeight * (1 / 3) + "px";
						} else {
							existPanel.style.top = cvs.height - paddingBottom - existPanel.clientHeight - unitHeight * (2 / 3) + "px";
						}

						if (winX > totalWidth / 2 + paddingLeft) {
							existPanel.style.left = winX - spaceBetween - existPanel.clientWidth + "px";
						} else {
							existPanel.style.left = winX + spaceBetween + "px";
						}

					}
				} else {
					if (this.options.tips) {
						this.options.tips[0].style.display = "none";
						this.options.tips[0].style.left = "-10000";

						this.options.tips[1].style.display = "none";
						this.options.tips[1].style.left = "-10000";
					}
				}
			}


			/***/
		}),
/* 145 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制手机分时图
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     type:    "TL"(分时图),"DK"(日K线图),"WK"(周K线图),"MK"(月K线图)
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			 *    
			 * }
			 *
			 */

			// 绘制坐标轴
			var DrawXY = __webpack_require__(146);
			// 主题
			var theme = __webpack_require__(7);
			// 绘制分时折线图
			var DrawLine = __webpack_require__(147);
			// 拓展，合并，复制
			var extend = __webpack_require__(21);
			// 交互效果
			var Interactive = __webpack_require__(20);
			// 水印
			var watermark = __webpack_require__(22);
			// 添加通用工具
			var common = __webpack_require__(13);
			// 获取步长，最大值，最小值
			var divide = __webpack_require__(38);

			var ChartLine = (function () {

				// 构造函数
				function ChartLine(options) {
					this.options = {};
					this.options = extend(theme.defaulttheme, options);
					// 图表容器
					this.container = document.getElementById(options.container);

					this.container.className = this.container.className.replace(/emcharts-container/g, "").trim();
					this.container.className = this.container.className + " emcharts-container";
					// 图表加载完成事件
					this.onChartLoaded = options.onChartLoaded == undefined ? function (op) {

					} : options.onChartLoaded;

				}

				// 初始化
				ChartLine.prototype.init = function () {

					this.options.type = "line";
					var flag = true;
					var eventDiv = document.createElement("div");
					eventDiv.className = "event-div";
					this.container.appendChild(eventDiv);
					this.eventDiv = eventDiv;

					/*if (!this.options.canvas) {*/
					var canvas = document.createElement("canvas");
					/*} else {
						var canvas = this.options.canvas;
					}*/
					// 容器中添加画布
					this.container.appendChild(canvas);

					// 去除画布上粘贴效果
					// this.container.style = "-moz-user-select:none;-webkit-user-select:none;";
					// this.container.setAttribute("unselectable","on");
					this.container.style.position = "relative";
					// 兼容IE6-IE9
					try {
						var ctx = canvas.getContext('2d');
					} catch (error) {
						canvas = window.G_vmlCanvasManager.initElement(canvas);
						var ctx = canvas.getContext('2d');
					}

					this.options.canvas = canvas;
					this.options.context = ctx;
					// 设备像素比
					var dpr = this.options.dpr = this.options.dpr == undefined ? 1 : this.options.dpr;
					// 画布的宽和高
					canvas.width = this.options.width * dpr;
					canvas.height = this.options.height * dpr;

					// 画布向下偏移的距离
					this.options.canvas_offset_top = 15 * dpr;


					// 缩放默认值
					this.options.scale_count = 0;
					this.options.decimalCount = this.options.decimalCount == undefined ? 2 : this.options.decimalCount;
					// 画布上第一个图表的高度
					var xaxis = this.options.xaxis;
					if (this.options.angle && this.options.angle != 0) {
						var x_mark_temp = xaxis[0].value;
						var x_mark_length = x_mark_temp.split("").length;
						// var angle_height = ctx.measureText(xaxis[0].value).width + (x_mark_length - 1) * 2;
						var angle_height = ctx.measureText(xaxis[0].value).width * Math.sin(2 * Math.PI / 360 * this.options.angle) + 50;
						this.options.c_1_height = this.options.canvas.height - angle_height * dpr;
					} else {
						this.options.c_1_height = canvas.height - 50 * dpr;
					}

					if (this.options.showname === undefined) {
						this.options.showname = true;
					}
					//图表坐标轴y轴至少分为两块区域
					this.options.sepeNum = this.options.sepeNum == undefined ? 4 : this.options.sepeNum;
					if (this.options.sepeNum < 2) {
						this.options.sepeNum = 2;
					}

					canvas.style.width = this.options.width + "px";
					canvas.style.height = this.options.height + "px";
					canvas.style.border = "0";

					var isIE8 = !+'\v1';
					// 画布上部内间距
					if (isIE8) {
						if (flag) {
							ctx.translate("0", this.options.canvas_offset_top);
						}
					} else {
						ctx.translate("0", this.options.canvas_offset_top);
					}

					// 画笔参数设置
					var font = "";
					var fontSize = "";
					var fontFamily = "";
					if (this.options.font) {
						if (this.options.font.fontFamily) {
							fontFamily = this.options.font.fontFamily;
						} else {
							fontFamily = "Arial";
						}

						if (this.options.font.fontSize) {
							fontSize = this.options.font.fontSize * this.options.dpr;
						} else {
							fontSize = 12 * this.options.dpr;
						}

						font = fontSize + "px " + fontFamily;
					} else {
						font = 12 * this.options.dpr + "px Arial";
					}
					ctx.font = font;
					ctx.lineWidth = 1 * this.options.dpr;

					this.options.spacing = 0.2;

					this.options.padding = {};
					this.options.padding.left = 0;
					this.options.padding.right = 0;
					this.options.padding.top = 0
					this.options.padding.bottom = 0;

					//锚点半径
					this.options.pointRadius = this.options.pointRadius == undefined ? 5 : this.options.pointRadius;

				}

				// 绘图
				ChartLine.prototype.draw = function (callback) {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					// 初始化交互
					this.options.interactive = new Interactive(this.options);
					var ctx = this.options.context;
					// 显示loading效果
					// inter.showLoading();
					// var _this = this;

					// 第一坐标轴折线数据
					var series = this.options.series;
					this.options.data = {};
					var maxAndMin = getMaxMark.call(this, series);
					this.options.data.max = maxAndMin.max;
					this.options.data.min = maxAndMin.min;
					this.options.data.step = maxAndMin.step;

					// 画布内容偏移的距离
					this.options.padding_left = Math.round(maxAndMin.maxPaddingLeftWidth + 20);
					var xaxis = this.options.xaxis;
					var leftMinWidth = ctx.measureText(xaxis[0].value).width / 2 + 10;
					var rightMinWidth = ctx.measureText(xaxis[xaxis.length - 1].value).width / 2 + 10;

					if (this.options.angle && this.options.angle != 0) {
						this.options.padding.right = ctx.measureText(this.options.xaxis[0].value).width * Math.cos(2 * Math.PI * (this.options.angle / 360)) + 10;
					}

					if (this.options.padding.right < rightMinWidth) {
						this.options.padding.right = rightMinWidth;
					}

					if (this.options.padding_left < leftMinWidth) {
						this.options.padding_left = leftMinWidth;
					}

					// 第二坐标轴折线数据
					if (this.options.series2 && this.options.series2.length !== 0) {
						var series2 = this.options.series2;
						var maxAndMin2 = getMaxMark.call(this, series2);
						this.options.data.max2 = maxAndMin2.max;
						this.options.data.min2 = maxAndMin2.min;
						this.options.data.step2 = maxAndMin2.step;

						this.options.padding.right = Math.round(maxAndMin2.maxPaddingLeftWidth + 20);
					} else {
						this.options.series2 = undefined;
					}

					if (this.options.series2 && this.options.series2.length !== 0) {
						this.options.drawWidth = Math.round(ctx.canvas.width - this.options.padding.right);
						// 加水印
						watermark.apply(this, [ctx, 100 + this.options.padding_left, 10, 82, 20]);
					} else {
						this.options.drawWidth = Math.round(ctx.canvas.width - this.options.padding.right);
						// 加水印
						watermark.apply(this, [ctx, 100 + this.options.padding_left, 10, 82, 20]);
					}

					// 单位绘制区域
					this.options.unit = {};
					var xaxis_length = this.options.xaxis.length;
					this.options.unit.unitWidth = (this.options.drawWidth - this.options.padding_left) / xaxis_length;
					this.options.unit.groupBarWidth = this.options.unit.unitWidth * 0.618;

					var group_bar_count = 0;
					if (this.options.series) {
						for (var i = 0, item; item = series[i]; i++) {
							if (item.type == "bar") {
								group_bar_count++;
							}
						}
					}

					if (this.options.series2) {
						for (var i = 0, item; item = series2[i]; i++) {
							if (item.type == "bar") {
								group_bar_count++;
							}
						}
					}


					this.options.unit.groupBarCount = group_bar_count;
					// 绘制坐标轴
					new DrawXY(this.options);
					// 绘制分时折线图
					new DrawLine(this.options);
					this.addInteractive();

				};

				//添加交互
				ChartLine.prototype.addInteractive = function () {
					var canvas = this.options.canvas;
					var dateArr = this.options.xaxis;
					var series = this.options.series;
					var series2 = this.options.series2;
					var ctx = this.options.context;
					var padding_left = this.options.padding_left;
					var padding_top = this.options.canvas_offset_top;
					var dpr = this.options.dpr;

					var that = this;
					var y_max = this.options.data.max;
					var y_min = this.options.data.min;
					var y_max2 = this.options.data.max2;
					var y_min2 = this.options.data.min2;
					var c_1_height = this.options.c_1_height;
					var radius = this.options.pointRadius / dpr;


					common.addEvent(that.eventDiv, "touchmove", function (e) {

						var touchEvent = e.changedTouches[0];

						var winX = touchEvent.offsetX || (touchEvent.clientX - that.container.getBoundingClientRect().left);
						var winY = touchEvent.offsetY || (touchEvent.clientY - that.container.getBoundingClientRect().top);

						// var winX, winY;
						// //浏览器检测，获取到相对元素的x和y
						// if (e.layerX) {
						//     winX = e.layerX;
						//     winY = e.layerY;
						// } else if (e.x) {
						//     winX = e.x;
						//     winY = e.y;
						// }
						try {
							e.preventDefault();
						} catch (error) {

						}


						eventHanlder.call(that, winX, winY);
					});

					//添加交互事件
					common.addEvent(that.eventDiv, "mousemove", function (e) {

						var winX = e.offsetX || (e.clientX - that.container.getBoundingClientRect().left);
						var winY = e.offsetY || (e.clientY - that.container.getBoundingClientRect().top);

						// var winX, winY;
						// //浏览器检测，获取到相对元素的x和y
						// if (e.layerX) {
						//     winX = e.layerX;
						//     winY = e.layerY;
						// } else if (e.x) {
						//     winX = e.x;
						//     winY = e.y;
						// }

						try {
							e.preventDefault();
						} catch (error) {

						}
						eventHanlder.call(that, winX, winY);

					});

					common.addEvent(that.eventDiv, "touchend", function (e) {
						if (that.options.interOption) {
							var circles = that.options.interOption.circles;
							that.options.interOption.tips.style.display = "none";
							for (var k = 0, kLen = circles.length; k < kLen; k++) {
								circles[k].style.display = "none";
							}
							that.options.interOption.yLine.style.display = "none";
						}
						try {
							e.preventDefault();
						} catch (error) {

						}
					});

					common.addEvent(that.eventDiv, "mouseleave", function (e) {
						if (that.options.interOption) {
							var circles = that.options.interOption.circles;
							that.options.interOption.tips.style.display = "none";
							for (var k = 0, kLen = circles.length; k < kLen; k++) {
								circles[k].style.display = "none";
							}
							that.options.interOption.yLine.style.display = "none";
						}
						try {
							e.preventDefault();
						} catch (error) {

						}
					});

					function eventHanlder(winX, winY) {
						var canvasX = winX * dpr - padding_left; //转换为canvas中的坐标
						var canvasY = winY * dpr - padding_top;
						var series = this.options.series;
						var series2 = this.options.series2;

						//下标
						var cursor = 0;
						//用来显示tips的一组数据
						var tipArr = [];
						//获取交互需要的坐标数据
						var unit = that.options.unit.unitWidth;
						cursor = Math.floor(canvasX / unit);

						if (cursor < 0) { cursor = 0; }
						if (cursor > dateArr.length - 1) { cursor = dateArr.length - 1; }

						for (var i = 0, len = series.length; i < len; i++) {
							tipArr.push({
								color: series[i].color,
								data: ((series[i].data[cursor] === undefined || series[i].data[cursor] === null) ? "" : series[i].data[cursor]) + (series[i].suffix || ""),
								name: series[i].name,
								y: series[i].data[cursor] === undefined ? padding_top + common.get_y.call(that, 0) : padding_top + common.get_y.call(that, series[i].data[cursor]),
								suffix: (series[i].suffix || ""),
								type: series[i].type
							});
						}
						if (that.options.series2) {
							for (i = 0, len = series2.length; i < len; i++) {
								tipArr.push({
									color: series2[i].color,
									data: ((series2[i].data[cursor] === undefined || series2[i].data[cursor] === null) ? "" : series2[i].data[cursor]) + (series2[i].suffix || ""),
									name: series2[i].name,
									y: series2[i].data[cursor] === undefined ? padding_top + c_1_height / 2 : padding_top + (c_1_height - c_1_height * (series2[i].data[cursor] - y_min2) / (y_max2 - y_min2)),
									suffix: (series2[i].suffix || ""),
									type: series2[i].type
								});
							}
						}

						//排序
						tipArr.sort(function (a, b) {
							return a.y - b.y;
						});
						var left = 0,
							flag = false;
						if (dateArr.length == 1) {
							left = Math.round(cursor * unit / dpr + unit / dpr * (1 / 2) + padding_left / dpr);
						} else {
							left = Math.round(cursor * unit / dpr + padding_left / dpr + unit / dpr * (1 / 2));
						}

						//添加交互
						if (!that.options.interOption) {
							that.options.interOption = {};
							//提示
							var tips = document.createElement("div");
							tips.className = "chart_line_tips";

							that.container.appendChild(tips);

							tips.style.top = (tipArr[0].y + tipArr[tipArr.length - 1].y) / 2 / dpr + "px";
							var title = document.createElement("div");
							title.className = "chart_line_tips_title";
							title.innerHTML = dateArr[cursor].value;
							tips.appendChild(title);

							//交互的竖线
							var yLine = document.createElement("div");

							yLine.className = "chart_line_yline";
							//交互的竖线
							yLine.style.left = left + "px";
							yLine.style.top = padding_top / dpr + "px";
							yLine.style.height = c_1_height / dpr + "px";
							if (that.options.unit.groupBarCount !== 0) {
								yLine.className = "chart_line_ybar";
								yLine.style.width = that.options.unit.unitWidth + "px";
								yLine.style.left = left - that.options.unit.unitWidth / 2 + "px";
							}
							that.container.appendChild(yLine);
							var circles = [];
							for (i = 0, len = tipArr.length; i < len; i++) {
								//tips内容
								var lineTip = document.createElement("div");
								lineTip.className = "chart_line_tips_line";
								var color = document.createElement("span");
								color.className = "chart_line_tips_color";
								color.style.backgroundColor = tipArr[i].color;
								lineTip.appendChild(color);
								var content = document.createElement("span");
								content.innerHTML = (that.options.showname ? tipArr[i].name : "") + tipArr[i].data
								lineTip.appendChild(content);
								tips.appendChild(lineTip);
								//圆圈
								var cir = document.createElement("div");
								cir.className = "chart_line_cir";
								cir.style.width = 2 * radius + "px";
								cir.style.height = 2 * radius + "px";
								cir.style.borderRadius = 2 * radius + "px";
								cir.style.top = (tipArr[i].y / dpr - radius) + "px";
								cir.style.left = (left - radius) + "px";
								cir.style.borderColor = tipArr[i].color;
								if (tipArr[i].data === tipArr[i].suffix) {
									cir.style.display = "none";
									lineTip.style.display = "none";
								} else {
									flag = true;
								}
								if (tipArr[i].type == "line" && this.options.unit.groupBarCount == 0) {
									that.container.appendChild(cir);
								}
								circles.push(cir);
							}
							if ((cursor * unit / dpr + padding_left / dpr) > canvas.width / 2) {
								tips.style.left = (left - tips.clientWidth) + "px";
							} else {
								tips.style.left = left + "px";
							}
							that.options.interOption.tips = tips;
							that.options.interOption.yLine = yLine;
							that.options.interOption.circles = circles;
						} else {
							var tips = that.options.interOption.tips;

							var children = tips.children;
							children[0].innerHTML = dateArr[cursor].value;
							for (var j = 0, len = tipArr.length; j < len; j++) {
								if (tipArr[j].data === tipArr[j].suffix) {
									children[j + 1].style.display = "none";
								} else {
									flag = true;
									children[j + 1].style.display = "block";
									children[j + 1].children[0].style.backgroundColor = tipArr[j].color;
									children[j + 1].children[0].style.verticalAlign = "middle";
									children[j + 1].children[1].innerHTML = (that.options.showname ? tipArr[j].name : "") + " " + tipArr[j].data
								}
							}
							if (flag) {
								tips.style.display = "block";
							} else {
								tips.style.display = "none";
								tips.style.left = "-10000px";
							}
							if ((cursor * unit / dpr + padding_left / dpr) >= canvas.width / dpr / 2) {
								tips.style.left = (left - tips.clientWidth) + "px";
							} else {
								tips.style.left = left + "px";
							}
							tips.style.top = (tipArr[0].y + tipArr[tipArr.length - 1].y) / 2 / dpr - 50 + "px";
							var yLine = that.options.interOption.yLine;
							yLine.style.left = left + "px";
							if (that.options.unit.groupBarCount !== 0) {
								yLine.style.left = left - unit / 2 + "px";
							}
							var circles = that.options.interOption.circles;
							for (var k = 0, kLen = tipArr.length; k < kLen; k++) {
								if (tipArr[k].data === tipArr[k].suffix) {
									circles[k].style.display = "none";
								} else {
									circles[k].style.display = "block";
									circles[k].style.top = tipArr[k].y / dpr - radius + "px";
									circles[k].style.left = (left - radius) + "px";
									circles[k].style.borderColor = tipArr[k].color;
								}
							}
							if (flag) {
								that.options.interOption.tips.style.display = "block";
								yLine.style.display = "block";
							}
						}

						var padding_right = this.options.series2 ? padding_left : 10;

						//当超出坐标系框就不显示交互
						if (canvasX >= 0 && canvasX < (canvas.width - padding_left - padding_right + 3) && canvasY >= 0 && canvasY <= c_1_height && flag) {
							that.options.interOption.tips.style.display = "block";
							for (var k = 0, kLen = tipArr.length; k < kLen; k++) {
								if (tipArr[k].data === tipArr[k].suffix) {
									circles[k].style.display = "none";
								} else {
									circles[k].style.display = "block";
								}
							}
							yLine.style.display = "block";
						} else {
							that.options.interOption.tips.style.display = "none";
							that.options.interOption.tips.style.left = "-10000px";
							for (var k = 0, kLen = circles.length; k < kLen; k++) {
								circles[k].style.display = "none";
							}
							yLine.style.display = "none";
						}
					}
				}


				// 重绘
				ChartLine.prototype.reDraw = function () {
					// 删除canvas画布
					this.clear();
					// 初始化
					this.init();
					this.draw();
				}
				// 删除canvas画布
				ChartLine.prototype.clear = function (cb) {
					try {
						/*var ctx = this.options.context;
						ctx.clearRect(0, -this.options.canvas_offset_top, this.options.canvas.width + this.options.drawWidth, this.options.canvas.height);
						var interOption = this.options.interOption;
						var yLine = interOption.yLine,
							circles = interOption.circles,
							tips = interOption.tips,
							containerChild = this.container.children;
						for (var k = 0, kLen = circles.length; k < kLen; k++) {
							for (var j = 0, jLen = containerChild.length; j < jLen; j++) {
								if (containerChild[j] === circles[k]) {
									this.container.removeChild(circles[k]);
								}
							}
						}
						this.container.removeChild(yLine);
						this.container.removeChild(tips);*/
						this.container.innerHTML = "";
						if (this.options.interOption) {
							this.options.interOption = null;
						}
					} catch (e) {
						this.container.innerHTML = "";
					}
					if (cb) {
						cb();
					};
				}

				// 获取数组中的最大值
				function getMaxMark(series) {

					var seriesLength = series.length;
					var tempArr = [];
					for (var i = 0; i < seriesLength; i++) {
						tempArr = tempArr.concat(series[i].data);
					}
					var arr = tempArr.filter(function (a) {
						return a !== "" && a !== undefined && a !== null;
					}).sort(function (a, b) {
						return a * 1 - b * 1;
					});
					var min = arr[0] * 1;
					var max = arr[arr.length - 1] * 1;
					var middle = (max + min) / 2;
					/*清除中值产生的小数点*/
					if (max - min > 1 && (middle - Math.floor(middle) > 0)) {
						min = arr[0] - (middle - Math.floor(middle));
						middle = Math.floor(middle);
					}

					var tempObj = {};
					/*特殊判断一下*/
					if (max * min > 0 && min !== max && (max - min) / Math.abs(max) <= 0.5) {
						tempObj = divide(this.options.sepeNum, [max - middle, min - middle]);
						if ((tempObj.max + middle) * (tempObj.min + middle) < 0) {
							var tempOffset = Math.min(Math.abs(tempObj.max + middle), Math.abs(tempObj.min + middle));
							tempObj.max = max >= 0 ? (tempObj.max + middle + tempOffset) : 0;
							tempObj.min = max >= 0 ? 0 : (tempObj.min + middle - tempOffset);
						} else {
							tempObj.max += middle;
							tempObj.min += middle;
						}
					} else {
						tempObj = divide(this.options.sepeNum, arr);
					}

					var ctx = this.options.context;
					if (tempObj.stepHeight >= 10000) {
						var backWidth = ctx.measureText(common.format_unit(tempObj.stepHeight)).width - ctx.measureText(common.format_unit(parseInt(tempObj.stepHeight))).width;
					} else {
						var backWidth = ctx.measureText(tempObj.stepHeight).width - ctx.measureText(parseInt(tempObj.stepHeight)).width;
					}
					var frontMaxWidth = ctx.measureText(common.format_unit(parseInt(tempObj.max))).width;
					var frontMinWidth = ctx.measureText(common.format_unit(parseInt(tempObj.min))).width;
					var frontWidth = frontMaxWidth > frontMinWidth ? frontMaxWidth : frontMinWidth;
					var maxPaddingLeftWidth = frontWidth + backWidth;

					if (tempObj.max == 0 && tempObj.min == 0) {
						tempObj = divide(this.options.sepeNum, [1, -1]);
					}
					return {
						max: tempObj.max,
						min: tempObj.min,
						step: tempObj.stepHeight,
						maxPaddingLeftWidth: maxPaddingLeftWidth
					};
				}

				return ChartLine;
			})();

			module.exports = ChartLine;


			/***/
		}),
/* 146 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制直角坐标系
			 */
			var extend = __webpack_require__(21);
			/*主题*/
			var theme = __webpack_require__(7);
			var common = __webpack_require__(13);
			/*绘制虚线*/
			var DrawDashLine = __webpack_require__(8);
			// 格式化坐标
			var XYF = __webpack_require__(9);
			// 自定义X轴标识
			var self_fillText = __webpack_require__(56);
			var DrawXY = (function () {
				//构造方法
				function DrawXY(options) {
					/*设置默认参数*/
					this.options = extend(theme.defaulttheme, options);
					/*绘图*/
					this.draw();
				};
				/*绘图*/
				DrawXY.prototype.draw = function () {

					// var xAxisData = this.options.xaxis;
					// var yAxisData = this.options.series;
					// var type = this.options.type;
					// var dpr = this.options.dpr;
					var ctx = this.options.context;

					/*Y轴上的最大值*/
					var y_max = this.options.data.max;
					var y_max2 = this.options.data.max2;
					var step = this.options.data.step;
					/*Y轴上的最小值*/
					var y_min = this.options.data.min;
					var y_min2 = this.options.data.min2;
					var step2 = this.options.data.step2;

					/*Y轴上分隔线数量*/
					var sepe_num = this.options.sepeNum || 4;
					/*开盘收盘时间数组*/
					var oc_time_arr = this.options.xaxis;

					/*K线图的高度*/
					var k_height = this.options.c_1_height;

					ctx.beginPath();
					ctx.lineWidth = 1;
					ctx.strokeStyle = '#ccc';

					ctx.rect(XYF(this.options.padding_left), 0.5, Math.round(this.options.drawWidth - this.options.padding_left), Math.round(k_height));
					ctx.stroke();

					/*Y轴标识线列表*/
					var line_list_array = getLineList(y_max, y_min, sepe_num, k_height, step);
					drawYMark.call(this, ctx, y_max, y_min, line_list_array, false);

					if (this.options.series2) {
						var line_list_array2 = getLineList(y_max2, y_min2, sepe_num, k_height, step2);
						drawYMark.call(this, ctx, y_max, y_min, line_list_array2, true);
					}

					// 绘制横坐标刻度
					drawXMark.apply(this, [ctx, k_height, oc_time_arr]);
				};
				// 绘制坐标轴左侧刻度
				function drawYMark(ctx, y_max, y_min, line_list_array, flag) {
					var step = flag ? this.options.data.step2 : this.options.data.step;
					ctx.save();
					// var sepe_num = line_list_array.length;
					ctx.fillStyle = this.options.font.color == undefined ? '#000' : this.options.font.color;
					ctx.textAlign = 'right';
					ctx.lineWidth = 1;

					var dpr = this.options.dpr;

					for (var i = 0, item; item = line_list_array[i]; i++) {
						ctx.beginPath();

						if (i == 0 || i == line_list_array.length - 1) {
							// ctx.strokeStyle = '#ccc';
							// ctx.moveTo(this.options.padding_left, Math.round(item.y));
							// ctx.lineTo(this.options.drawWidth, Math.round(item.y));
							// ctx.stroke();
						} else {

							ctx.strokeStyle = '#e6e6e6';
							DrawDashLine(ctx, this.options.padding_left, item.y, this.options.drawWidth, item.y, 3);
						}

						// 绘制纵坐标刻度
						// ctx.textAlign = 'left';
						if (this.options.series2 && flag) {
							// ctx.fillText(common.format_unit(item.num/1,this.options.decimalCount), this.options.padding_left - 10, item.y +10);
							ctx.textAlign = 'left';
							ctx.fillText(roundFloat(item.num / 1, this.options.data.step2), XYF(this.options.drawWidth + 5), XYF(item.y + 5 * dpr));
						} else {
							ctx.textAlign = 'right';
							ctx.fillText(roundFloat(item.num / 1, this.options.data.step), XYF(this.options.padding_left - 5), XYF(item.y + 5 * dpr));
						}
					}
					ctx.restore();
				}

				/*绘制横坐标刻度值*/
				function drawXMark(ctx, k_height, oc_time_arr) {
					ctx.save();
					ctx.lineWidth = 1;
					var dpr = this.options.dpr;
					var padding_left = this.options.padding_left;
					ctx.textAlign = 'center';
					if (this.options.font) {
						ctx.fillStyle = this.options.font.color == undefined ? '#000' : this.options.font.color;
					} else {
						ctx.fillStyle = '#000';
					}

					/*画布宽度*/
					var k_width = this.options.drawWidth;
					// var y_date = this.options.c_1_height;
					var tempDate;
					// var timeSpacing = (this.options.width * dpr - padding_left) / oc_time_arr.length + padding_left;
					var arr_length = oc_time_arr.length;
					for (var i = 0; i < arr_length; i++) {
						ctx.beginPath();
						tempDate = oc_time_arr[i];
						if (tempDate.show == undefined ? true : tempDate.show) {

							if (arr_length == 1) {
								var x = (this.options.drawWidth - this.options.padding_left) / 2 + this.options.padding_left;
								ctx.fillText(tempDate.value, XYF(x), XYF(this.options.c_1_height + 20 * dpr));
							} else {
								// if(this.options.series2){

								//     var x = i * (k_width - padding_left) / (arr_length-1) + padding_left;
								//     ctx.fillText(tempDate.value, x, this.options.c_1_height+20);
								// }else{

								//     var x = i * (k_width - padding_left) / (arr_length-1) + padding_left;
								//     // ctx.fillText(tempDate.value, x , this.options.c_1_height+20);

								//     if(i == 0){
								//         ctx.fillText(tempDate.value, i * (k_width - padding_left) / (arr_length-1) + padding_left + ctx.measureText(tempDate.value).width/2, this.options.c_1_height+20);
								//     }else if(i == arr_length - 1){
								//         ctx.fillText(tempDate.value, this.options.drawWidth - ctx.measureText(tempDate.value).width/2, this.options.c_1_height+20);
								//     }else{
								//         ctx.fillText(tempDate.value, x, this.options.c_1_height+20);   
								//     }
								// }
								var x = this.options.unit.unitWidth * (i) + this.options.unit.unitWidth / 2 + this.options.padding_left;
								// var x = i * (k_width - padding_left) / (arr_length-1) + padding_left;
								// ctx.fillText(tempDate.value, x , this.options.c_1_height+20);
								if (this.options.angle && this.options.angle != 0) {
									self_fillText(tempDate.value, ctx, XYF(x), XYF(this.options.c_1_height + 10 * dpr), this.options.angle);
								} else {
									ctx.fillText(tempDate.value, XYF(x), XYF(this.options.c_1_height + 20 * dpr));
								}

							}
						}

						if (tempDate.showline == undefined ? true : tempDate.showline) {

							if (i == 0) {
								// ctx.strokeStyle = '#ccc';
								// ctx.moveTo(i * (k_width - padding_left) / (arr_length-1) + padding_left,0);
								// ctx.lineTo(i * (k_width - padding_left) / (arr_length-1) + padding_left,this.options.c_1_height);
								// ctx.stroke();
							} else {

								ctx.strokeStyle = '#e6e6e6';
								var x = this.options.unit.unitWidth * (i) + this.options.padding_left;

								DrawDashLine(ctx, x, 0, x, this.options.c_1_height + 2, 3);
							}

						}
					}

					// 绘制坐标刻度
					ctx.restore();
				}

				/*Y轴标识线列表*/
				function getLineList(y_max, y_min, sepe_num, k_height, step) {
					var ratio = step;
					var result = [];
					for (var i = 0; i <= sepe_num; i++) {
						result.push({
							num: (y_min + i * ratio),
							x: 0,
							y: k_height - (i / (sepe_num)) * k_height
						});
					}
					return result;
				}


				function roundFloat(f, stepHeight) {
					var precise = 1;
					if (stepHeight.toString().indexOf(".") !== -1) {
						precise = stepHeight.toString().length - stepHeight.toString().indexOf(".") - 1;
					}
					var m = Math.pow(10, precise);
					return common.format_unit(Math.round(f * m) / m, precise);
				}

				return DrawXY;
			})();

			module.exports = DrawXY;

			/***/
		}),
/* 147 */
/***/ (function (module, exports, __webpack_require__) {

			/**
			 * 绘制折线图
			 *
			 * this:{
			 *     container:画布的容器
			 *     interactive:图表交互
			 * }
			 * this.options:{
			 *     data:    行情数据
			 *     type:    "TL"(分时图),"DK"(日K线图),"WK"(周K线图),"MK"(月K线图)
			 *     canvas:  画布对象
			 *     ctx:     画布上下文
			
			 * }
			 *
			 */

			/*继承*/
			var extend = __webpack_require__(21);
			/*主题*/
			var theme = __webpack_require__(7);
			/*工具*/
			var common = __webpack_require__(13);
			// 格式化坐标
			var XYF = __webpack_require__(9);
			var DrawLine = (function () {
				function DrawLine(options) {
					// 设置默认参数
					this.options = extend(theme.defaulttheme, options);
					// 绘图
					this.draw();
				};

				// 绘图
				DrawLine.prototype.draw = function () {

					var ctx = this.options.context;
					ctx.lineWidth = 1;
					// 第一个坐标轴折线数据
					var series = this.options.series;
					this.options.groupBarCount = 0;
					// 横坐标数据
					// var xaxis = this.options.xaxis;
					var start_y_1 = 0,
						start_y_2 = 0;
					if (this.options.data.min * this.options.data.max < 0) {
						this.options.start_y_1 = common.get_y.call(this, 0);
					} else {
						this.options.start_y_1 = common.get_y.call(this, this.options.data.min);
					}
					if (this.options.data.min2 * this.options.data.max2 < 0) {
						this.options.start_y_2 = get_y.call(this, 0);
					} else {
						this.options.start_y_2 = get_y.call(this, this.options.data.min2);
					}

					for (var i = 0, item; item = series[i]; i++) {
						// 填充颜色
						ctx.fillStyle = item.color == undefined ? "#333" : item.color;
						// 画笔颜色
						ctx.strokeStyle = item.color == undefined ? "#333" : item.color;
						if (item.type == "bar") {
							this.options.groupBarCount++;
							drawBar.apply(this, [ctx, item, false]);
						}

					}

					for (var i = 0, item; item = series[i]; i++) {
						// 填充颜色
						ctx.fillStyle = item.color == undefined ? "#333" : item.color;
						// 画笔颜色
						ctx.strokeStyle = item.color == undefined ? "#333" : item.color;
						if (item.type == "line") {
							drawLine.apply(this, [ctx, item, false]);
							if (item.showpoint) {
								drawPoint.apply(this, [ctx, item, false]);
							} else if (item.data.length == 1) {
								drawPoint.apply(this, [ctx, item, false]);
							}
						}

					}

					// 第二个坐标轴折线数据
					if (this.options.series2) {
						var series2 = this.options.series2;
						for (var i = 0, item; item = series2[i]; i++) {
							// 填充颜色
							ctx.fillStyle = item.color == undefined ? "#333" : item.color;
							// 画笔颜色
							ctx.strokeStyle = item.color == undefined ? "#333" : item.color;
							if (item.type == "bar") {
								this.options.groupBarCount++;
								drawBar.apply(this, [ctx, item, true]);
							}

						}
					}

					if (this.options.series2) {
						var series2 = this.options.series2;
						for (var i = 0, item; item = series2[i]; i++) {
							// 填充颜色
							ctx.fillStyle = item.color == undefined ? "#333" : item.color;
							// 画笔颜色
							ctx.strokeStyle = item.color == undefined ? "#333" : item.color;
							if (item.type == "line") {
								drawLine.apply(this, [ctx, item, true]);
								if (item.showpoint) {
									drawPoint.apply(this, [ctx, item, true]);
								} else if (item.data.length == 1) {
									drawPoint.apply(this, [ctx, item, true]);
								}
							}

						}
					}

				};

				// 绘制柱状图
				function drawBar(ctx, line, flag) {
					// 保存画笔状态
					ctx.save();
					var arr = line.data;
					var arr_length = arr.length;
					var start_y = 0;

					if (flag) {
						start_y = this.options.start_y_2;
					} else {
						start_y = this.options.start_y_1;
					}

					var groupBarWidth = this.options.unit.groupBarWidth;
					var bar_w = groupBarWidth / this.options.unit.groupBarCount;
					var groupBarCount = this.options.groupBarCount;

					ctx.beginPath();

					for (var i = 0; i < arr_length; i++) {
						var item = arr[i];
						if (item != null && item !== "" && item != undefined) {
							// var x = ((this.options.drawWidth - this.options.padding_left)/(arr_length-1)) * (i) + this.options.padding_left;
							var x = this.options.unit.unitWidth * (i) + this.options.unit.unitWidth / 2 + this.options.padding_left;

							if (flag) {
								var y = get_y.call(this, item);
							} else {
								var y = common.get_y.call(this, item);
							}
							// debugger;
							if (item >= 0) {
								ctx.rect(XYF(x - groupBarWidth / 2 + bar_w * (groupBarCount - 1)), y, bar_w, start_y - y);
								// ctx.stroke();
							} else {
								ctx.rect(XYF(x - groupBarWidth / 2 + bar_w * (groupBarCount - 1)), start_y, bar_w, y - start_y);
							}
						}

					}

					ctx.fill();
					ctx.stroke();
					// 恢复画笔状态
					ctx.restore();
				}

				// 绘制折线
				function drawLine(ctx, line, flag) {
					// 保存画笔状态
					ctx.save();
					var arr = line.data;
					var arr_length = arr.length;

					ctx.beginPath();

					for (var i = 0; i < arr_length; i++) {
						var item = arr[i];
						if (item != null && item !== "" && item != undefined) {
							// var x = ((this.options.drawWidth - this.options.padding_left)/(arr_length-1)) * (i) + this.options.padding_left;
							var x = this.options.unit.unitWidth * (i) + this.options.unit.unitWidth / 2 + this.options.padding_left;

							if (flag) {
								var y = get_y.call(this, item);
							} else {
								var y = common.get_y.call(this, item);
							}
							if (i == 0) {
								ctx.moveTo(x, y);
							} else
								if (i == arr_length - 1) {
									ctx.lineTo(x, y);
								} else {
									ctx.lineTo(x, y);
								}
						}

					}

					// ctx.fill();
					ctx.stroke();
					ctx.beginPath();
					// 恢复画笔状态
					ctx.restore();
				}

				// 绘制折线节点（连接点）
				function drawPoint(ctx, line, flag) {
					// 保存画笔状态
					ctx.save();
					var arr = line.data;
					var arr_length = arr.length;

					// 节点（折线连接点半径）	
					var pointRadius = this.options.pointRadius;

					for (var i = 0; i < arr_length; i++) {
						var item = arr[i];
						if (item != null && item !== "" && item != undefined) {
							ctx.beginPath();
							if (arr_length == 1) {
								var sepe_num = 1;
							} else {
								var sepe_num = arr_length - 1;
							}

							if (arr_length == 1) {
								var x = (this.options.drawWidth - this.options.padding_left) / 2 + this.options.padding_left;
							} else {
								// var x = ((this.options.drawWidth - this.options.padding_left)/sepe_num) * (i) + this.options.padding_left;
								var x = this.options.unit.unitWidth * (i) + this.options.unit.unitWidth / 2 + this.options.padding_left;
							}

							if (flag) {
								var y = get_y.call(this, item);
							} else {
								var y = common.get_y.call(this, item);
							}

							if (i == 0) {
								ctx.arc(XYF(x), XYF(y), pointRadius, 0, Math.PI * 2, true);
								ctx.fill();
							} else {
								ctx.arc(XYF(x), XYF(y), pointRadius, 0, Math.PI * 2, true);
								ctx.fill();
							}

						}

					}
					// 恢复画笔状态
					ctx.restore();
				}

				// 图表y轴坐标计算
				function get_y(y) {
					return this.options.c_1_height - (this.options.c_1_height * (y - this.options.data.min2) / (this.options.data.max2 - this.options.data.min2));
				}
				// 图表x轴坐标计算
				function get_x(year_num, quarter_num) {
					var group = this.options.group;
					var groupUnit = this.options.groupUnit;
					var padding_left = this.options.padding_left;
					var year_sepe = this.options.group.rect_w - this.options.group.bar_w;
					var quarter_sepe = this.options.groupUnit.rect_w - this.options.groupUnit.bar_w;
					return group.rect_w * year_num + padding_left + groupUnit.rect_w * quarter_num + year_sepe / 2 + quarter_sepe / 2;
				}


				return DrawLine;
			})();

			module.exports = DrawLine;


			/***/
		}),
/* 148 */
/***/ (function (module, exports, __webpack_require__) {

			// style-loader: Adds some css to the DOM by adding a <style> tag

			// load the styles
			var content = __webpack_require__(149);
			if (typeof content === 'string') content = [[module.id, content, '']];
			// add the styles to the DOM
			var update = __webpack_require__(154)(content, {});
			if (content.locals) module.exports = content.locals;
			// Hot Module Replacement
			if (false) {
				// When the styles change, update the <style> tags
				if (!content.locals) {
					module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function () {
						var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");
						if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
						update(newContent);
					});
				}
				// When the module is disposed, remove the <style> tags
				module.hot.dispose(function () { update(); });
			}

			/***/
		}),
/* 149 */
/***/ (function (module, exports, __webpack_require__) {

			exports = module.exports = __webpack_require__(150)();
			// imports


			// module
			exports.push([module.id, "\r\n/*手机版图表样式*/\r\n.emcharts-container .show-tip {\r\n    position: absolute;\r\n    top: 0px;\r\n    z-index: 999;\r\n    border: 0;\r\n    padding: 10px;\r\n    border-radius: 7px;\r\n    background-color: #17b03e;\r\n    color: #fff;\r\n    font-size: 20px;\r\n    font-weight: lighter;\r\n    font-family: 'Microsoft Yahei';\r\n   \r\n}\r\n.emcharts-container .show-tip .span-price{\r\n\tfont-size: 22px;\r\n}\r\n.emcharts-container .show-tip span{\r\n\tfont-size: 14px;height:25px;line-height:25px;\r\n    white-space: nowrap;\r\n}\r\n\r\n.emcharts-container .tip-line-1,.tip-line-2{\r\n\theight:25px;\r\n\tline-height:25px;\r\n}\r\n\r\n.emcharts-container .show-tip .span-time-c1{\r\n\ttext-align: left;\r\n\tmargin-right: 10px;\r\n}\r\n.emcharts-container .show-tip .span-time-c2{\r\n\ttext-align: right;\r\n}\r\n\r\n.emcharts-container .show-tip .span-k-c1{\r\n\ttext-align: left;\r\n\tmargin-right: 10px;\r\n}\r\n.emcharts-container .show-tip .span-k-c2{\r\n\ttext-align: right;\r\n}\r\n\r\n\r\n.emcharts-container .cross-y{\r\n\tposition:absolute;top:0px;z-index:98;border-left:1px dashed #8f8f8f;width:0px;background-color:#fff;\r\n}\r\n.emcharts-container .cross-x{\r\n\tposition:absolute;left:0px;z-index:98;border-top:1px dashed #8f8f8f;height:0px;\r\n}\r\n.emcharts-container .cross-p{\r\n\tposition:absolute;z-index:100;\r\n}\r\n.emcharts-container .mark-ma{\r\n\tposition:absolute;top:0px;left:0px;z-index:97;border:0;font-family:Arial;font-weight:lighter;\r\n}\r\n.emcharts-container .mark-ma span {\r\n\tdisplay:inline-block;padding-right:3px;font-size:12px;text-align:left;color:#ffba42;\r\n}\r\n\r\n.emcharts-container .mark-ma .span-m5{\r\n\tcolor:#f4cb15;\r\n}\r\n.emcharts-container .mark-ma .span-m10{\r\n\tcolor:#ff5b10;\r\n}\r\n.emcharts-container .mark-ma .span-m20{\r\n\tcolor:#488ee6;\r\n}\r\n.emcharts-container .mark-ma .span-m30{\r\n\tcolor:#fe59fe;\r\n}\r\n\r\n.emcharts-container .bar-color-span{\r\n\tdisplay: inline-block;\r\n\tmargin-left: 10px;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.emcharts-container .bar-value-span{\r\n\tdisplay: inline-block;\r\n\tmin-width: 50px;\r\n\tpadding: 0px 5px;\r\n\theight: 20px;\r\n\tline-height: 20px;\r\n\tvertical-align: middle;\r\n\ttext-align: center;\r\n}\r\n\r\n/* chart_line 的样式 */\r\n.emcharts-container .chart_line_tips{\r\n\tposition: absolute;\r\n\tz-index: 100;\r\n\tbackground-color: #000;\r\n\tfilter:progid:DXImageTransform.Microsoft.Alpha(Opacity=70);\r\n\topacity: 0.7;\r\n\tcolor:white;\r\n\tmin-width: 80px;\r\n\tpadding: 10px;\r\n\tborder-radius: 5px;\r\n\tfont-family: \"Microsoft YaHei\";\r\n\tfont-weight: lighter;\r\n\ttext-align: left;\r\n\t-webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none;\r\n}\r\n.emcharts-container .chart_line_tips_title{\r\n\tfont-size: 16px;\r\n\tfont-weight: 400px;\r\n\tpadding: 5px 0px;\r\n}\r\n.emcharts-container .chart_line_tips_line{\r\n\tpadding: 2px 0px;\r\n\tfont-size: 12px;\r\n}\r\n.emcharts-container .chart_line_tips_color{\r\n\tdisplay: inline-block;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tborder-radius: 10px;\r\n\tmargin-right: 5px;\r\n}\r\n.emcharts-container .chart_line_tips_content{}\r\n.emcharts-container .chart_line_yline{\r\n\tposition: absolute;\r\n\twidth: 0px;\r\n\tborder-left: solid 1px #898989;\r\n}\r\n.emcharts-container .chart_line_ybar{\r\n\tposition: absolute;\r\n\tbackground-color: rgb(51,51,51);\t\r\n\tfilter:progid:DXImageTransform.Microsoft.Alpha(Opacity=10);\r\n\topacity: 0.1;\r\n}\r\n.emcharts-container .chart_line_cir{\r\n\tbackground-color: white;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tborder-radius: 10px;\r\n\tborder: solid 1px white;\r\n\tposition: absolute;\r\n}\r\n\r\n.emcharts-container .event-div{\r\n\tbackground-color: #fff;\r\n\topacity: 0;\r\n\tposition: absolute;\r\n\ttop: 0px;\r\n\tbottom: 0px;\r\n\tleft: 0px;\r\n\tright: 0px;\r\n\tfilter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\r\n\tz-index: 1000;\r\n}\r\n\r\n/* 技术指标的样式 */\r\n.emcharts-container .markTContainer{\r\n\tposition: absolute;\r\n\tline-height:40px;\r\n\tfont-family: 'Microsoft Yahei';\r\n\tfont-weight: lighter;\r\n\tfont-size: 12px;\r\n}\r\n.emcharts-container .markTContainer span{\r\n\tmargin-right: 5px;\r\n\tdisplay: inline-block;\r\n\t*display: inline;\r\n\t*zoom:1;\r\n}\r\n\r\n.emcharts-container .scale-div{\r\n\tposition:absolute;z-index:99;border:0px;width:90px;height:45px;\r\n\topacity:0.7;\r\n}\r\n.emcharts-container .scale-div .span-minus{\r\n\twidth: 30px;height: 30px;float: left;border-radius: 6px;\r\n\tbackground: url(" + __webpack_require__(151) + ") no-repeat center center #cccccc;\r\n\tfont-size: 14px;\r\n}\r\n.emcharts-container .scale-div .span-plus{\r\n\twidth: 30px;height: 30px;float: right;border-radius: 6px;\r\n\tbackground: url(" + __webpack_require__(152) + ") no-repeat center center #cccccc;\r\n\tfont-size: 14px;\r\n}\r\n.emcharts-container .scale-opacity{\r\n\topacity:0.3;\r\n}\r\n\r\n.emcharts-container .loading-chart {\r\n\tposition: absolute;\r\n\tleft:0;\r\n\ttop:0;\r\n\tz-index: 100;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: #1a1a26;\r\n\tcolor:#fff;\r\n\ttext-align: center;\r\n\r\n    opacity: 0.7;\r\n    font-size: 20px;\r\n}\r\n\r\n.emcharts-container .delay-div{\r\n\tposition: absolute;\r\n\tleft:0;\r\n\ttop:0;\r\n\tz-index: 10000;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: #fff;\r\n    opacity: 0;\r\n}\r\n\r\n.emcharts-container .mark-point{\r\n\tposition: absolute;\r\n\tz-index: 97;\r\n\tmin-width: 15px;\r\n\tmin-height: 15px;\r\n\tborder-radius: 10px;\r\n\tbackground: url(" + __webpack_require__(153) + ") no-repeat center center/15px 15px #fff;\r\n\topacity: 1;\r\n}\r\n\r\n\r\n/*web港股的样式*/\r\n.emcharts-container .web-tips{\r\n\tdisplay: none;\r\n\tleft: -10000px;\r\n\ttop: -10000px;\r\n\tposition: absolute;\r\n\ttext-align: left;\r\n\tbackground-color: #898989;\r\n\tborder-radius: 2px;\r\n\tz-index: 10000;\r\n\tdisplay: inline-block;\r\n\tcolor: white;\r\n\tfont-size: 12px;\r\n\ttext-align: center;\r\n\tpadding: 2px;\r\n\twhite-space:nowrap;\r\n}\r\n.emcharts-container .web-middleLine{\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\twidth: 0px;\r\n\tborder-right: dashed 1px #898989;\r\n}\r\n\r\n.emcharts-container .group-bar-mark{\r\n\tposition: absolute;\r\n\topacity: 0.1;\r\n\tfilter: progid:DXImageTransform.Microsoft.Alpha(opacity=10);\r\n}\r\n\r\n.emcharts-container .tech-index{\r\n\tposition:absolute;\r\n\tz-index: 99;\r\n}\r\n\r\n.emcharts-container .tech-index-item{\r\n\tbackground-color: #232331;\r\n\tfloat:left;\r\n\ttext-align: center;\r\n\tcolor:#c8c8c8;\r\n\tcursor: pointer;\r\n}\r\n\r\n.emcharts-container .tech-index .current{\r\n\tbackground-color: #f10202;\r\n\tcolor:#ffffff;\r\n}\r\n\r\n\r\n/*web版图表样式*/\r\n.emcharts-container{\r\n\t-webkit-user-select:none;\r\n    -moz-user-select:none;\r\n    -ms-user-select:none;\r\n    user-select:none;\r\n    -webkit-tap-highlight-color: transparent;\r\n\r\n   \tfont-family: simsun;\r\n\tfont-size: 12px;\r\n\tbox-sizing: inherit;\r\n}\r\n\r\n.emcharts-container{\r\n\t-webkit-user-select:none;\r\n    -moz-user-select:none;\r\n    -ms-user-select:none;\r\n    user-select:none;\r\n    -webkit-tap-highlight-color: transparent;\r\n\r\n   \tfont-family: simsun;\r\n\tfont-size: 12px;\r\n\tbox-sizing: inherit;\r\n}\r\n.emcharts-container .web-show-tip {\r\n\tposition: absolute;\r\n\ttop: 0px;\r\n\tz-index: 999;\r\n\tborder: 1px solid rgba(199,16,72,0.5);\r\n\t/*padding: 8px;*/\r\n\tbox-shadow: 2px 2px 2px rgba(0,0,0,0.1);\r\n\tbackground-color: #1a1a26;\r\n\tcolor: #666;\r\n\twidth: 100px;\r\n\tfont-size: 12px;\r\n\tfont-weight: lighter;\r\n\tfont-family: 'arial';\r\n\r\n}\r\n\r\n.emcharts-container .web-tip-line-left{\r\n\tfloat: left;\r\n\twidth:60%;\r\n\ttext-align: left;\r\n\theight:20px;\r\n\tline-height: 20px;\r\n\r\n\t*height:15px;\r\n\t*line-height: 15px;\r\n}\r\n\r\n.emcharts-container .web-tip-line-right{\r\n\tfloat: left;\r\n\twidth:40%;\r\n\ttext-align: right;\r\n\theight:20px;\r\n\tline-height: 20px;\r\n\twhite-space: nowrap;\r\n\t*height:15px;\r\n\t*line-height: 15px;\r\n}\r\n\r\n.emcharts-container .web-tip-first-line{\r\n\twidth:100%;\r\n\tpadding: 3px 0px;\r\n\tbackground: #1a1a26;\r\n\tborder-bottom:1px solid rgba(199,16,72,0.5);\r\n\ttext-align: center;\r\n}\r\n\r\n.emcharts-container .web-tip-line-container{\r\n\tpadding:3px 8px;\r\n\t*margin-bottom: 8px;\r\n}\r\n\r\n.emcharts-container .time-tips-coordinate{\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\tpadding: 0px 3px;\r\n\tfont-size: 12px;\r\n\tbackground-color: #707070;\r\n\tcolor: white;\r\n\tz-index: 1000;\r\n}\r\n.emcharts-container .time-tips-top{\r\n\tdisplay: none;\r\n\tfont-size: 12px;\r\n\tcolor: #888;\r\n\tposition: absolute;\r\n\ttop: 0px;\r\n}\r\n\r\n/* web 版 分时图盘口异动样式 */\r\n.emcharts-container .timeChangeMainPad {\r\n    border: solid #65CAFE 1px;\r\n    position: absolute;\r\n    top: 100px;\r\n    left: 100px;\r\n    font-size: 12px;\r\n    color: #555;\r\n    background-color: white;\r\n    z-index: 1000;\r\n}\r\n.emcharts-container .timeChangeTriangle{\r\n\t*display: none;\r\n\tposition: absolute;\r\n    left: 55px;\r\n    top: -6px;\r\n\twidth: 10px;\r\n\theight: 10px;\r\n\tbackground-color: #D1E7FF;\r\n\tborder-left: solid 1px #65CAFE;\r\n\tborder-top: solid 1px #65CAFE;\r\n\t-webkit-transform: rotate(45deg);    /* for Chrome || Safari */\r\n\t-moz-transform: rotate(45deg);       /* for Firefox */\r\n\t-ms-transform: rotate(45deg);        /* for IE */\r\n\to-transform: rotate(45deg);         /* for Opera */\r\n}\r\n.emcharts-container .timeChangeTable{\r\n\t*width: 170px;\r\n\tmin-width: 100px;\r\n\theight: 50px;\r\n\tborder-spacing: 0px;\r\n    table-layout: fixed;\r\n}\r\n.emcharts-container .timeChangeHeader{\r\n\tbackground-color: #D1E7FF;\r\n  \ttext-align: center;\r\n  \t*width: 170px;\r\n    min-width: 100px;\r\n\tpadding: 7px 0px 5px 0px;\r\n\tfont-size: 14px;          \r\n}\r\n.timeChangeTable td{\r\n\tpadding: 0px 4px;\r\n}\r\n\r\n/* web版 k线图指标样式 */\r\n\r\n.emcharts-container .kt-pad {\r\n    position: absolute;\r\n    color: #5F5F5F;\r\n    margin-left: 15px;\r\n    min-width: 60px;\r\n    *min-width: auto; \r\n}\r\n\r\n.emcharts-container .kt-title {\r\n    margin-bottom: 5px;\r\n    font-size: 12px;\r\n}\r\n\r\n.emcharts-container .kt-line {\r\n    background-color: white; position: relative; margin: 7px 0px;\r\n}\r\n\r\n.emcharts-container .kt-line:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.emcharts-container .kt-radio-wrap{\r\n\tposition: relative;/* display: inline-block;*/ *zoom:1;*display:inline; border: solid 1px #305896;height: 10px; width: 10px;background-color: white;box-sizing:content-box;\r\n}\r\n\r\n.emcharts-container .kt-radio {\r\n    position:absolute; margin: 2px; width: 6px; height: 6px; background-color: #305896;display: none;\r\n}\r\n\r\n.emcharts-container .kt-name {\r\n    color: #555;line-height: 18px;display: inline-block; height: 16px;padding-left: 5px;position: absolute; top: -2px; left: 15px;*left:26px;*display: inline;\r\n}\r\n\r\n.emcharts-container .kt-radio-choose {\r\n    display: block;\r\n}\r\n\r\n/* web k 线的滑动 */\r\n.emcharts-container .slideBarCVS{\r\n\tbackground-color: white;\r\n\display:none;\r\n\toutline: solid 1px #E9E9E9;\r\n\r\n}\r\n\r\n.emcharts-container .leftDrag{\r\n\tbackground-color: white;\r\n\topacity: 2;\r\n\tfilter: progid:DXImageTransform.Microsoft.Alpha(opacity=200);\r\n}\r\n.emcharts-container .leftDrag:hover{\r\n\tcursor: w-resize;\r\n}\r\n\r\n.emcharts-container .rightDrag{\r\n\tbackground-color: white;\r\n}\r\n.emcharts-container .rightDrag:hover{cursor: e-resize;}\r\n.emcharts-container .containerBar{\r\n\tbackground-color: #e0e0e0;\r\n\tdisplay:none;\r\n\topacity: 0.5;\r\n\tfilter: progid:DXImageTransform.Microsoft.Alpha(opacity=50);\r\n\tborder:solid 1px #35709C;\r\n}\r\n.emcharts-container .containerBar:hover{cursor: move;}\r\n\r\n.emcharts-container .preference-container{\r\n\tposition: absolute;\r\n\tz-index: 101;\r\n}\r\n.emcharts-container .preference-shade{\r\n\tbackground-color: #333;\r\n\topacity: 0.1;\r\n\tfilter: progid:DXImageTransform.Microsoft.Alpha(opacity=10);\r\n\twidth:100%;\r\n\theight: 100%;\r\n}\r\n.emcharts-container .preference-handle{\r\n\tposition:absolute;\r\n\tz-index: 101;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #e6e6e6;\r\n\tborder-left: 0;\r\n\twidth:30px;\r\n\theight: 40px;\r\n\tline-height: 20px;\r\n\tpadding:5px;\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n\tfont-size: 12px;\r\n    box-sizing: content-box;\r\n}\r\n.emcharts-container .set-tab{\r\n\tborder-bottom:1px solid #4267A0;\r\n\theight:30px;\r\n\tmargin-bottom: 5px;\r\n}\r\n.emcharts-container .ma-tab{\r\n\t/*float:left;*/\r\n\t/*width:50%;*/\r\n\theight:30px;\r\n\tline-height: 30px;\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n\tfont-size: 14px;\r\n}\r\n.emcharts-container .set-tab .current{\r\n\tbackground-color: #4267A0;\r\n\tcolor:#fff;\r\n}\r\n.emcharts-container .right-tab{\r\n\tfloat:left;\r\n\twidth:50%;\r\n\theight:30px;\r\n\tline-height: 30px;\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n\tfont-size: 14px;\r\n}\r\n\r\n.emcharts-container .set-container{\r\n\tposition: absolute;\r\n\tz-index: 103;\r\n\tbackground-color: #fff;\r\n\twidth:280px;\r\n\theight:200px;\r\n}\r\n\r\n.emcharts-container .pre-notice{\r\n\theight:20px;\r\n\tline-height: 20px;\r\n\ttext-align: center;\r\n\tmargin: 5px 0px;\r\n\tfont-size: 14px;\r\n}\r\n.emcharts-container .ma-item{\r\n\theight: 27px;\r\n\tline-height: 30px;\r\n\tpadding-left: 15px;\r\n\ttext-align: center;\r\n}\r\n.emcharts-container .setting-span-ma5{\r\n\tbackground-color:#f4cb15;\r\n}\r\n.emcharts-container .setting-span-ma10{\r\n\tbackground-color:#ff5b10;\r\n}\r\n.emcharts-container .setting-span-ma20{\r\n\tbackground-color:#488ee6;\r\n}\r\n.emcharts-container .setting-span-ma30{\r\n\tbackground-color:#fe59fe;\r\n}\r\n\r\n.emcharts-container .span-setting{\r\n\tdisplay: inline-block;\r\n\t*display: inline;\r\n\t*zoom:1;\r\n\theight: 15px;\r\n\twidth:15px;\r\n\tmargin-left: 10px;\r\n\tvertical-align:middle;\r\n\tcursor: pointer;\r\n}\r\n.emcharts-container .item-span{\r\n\t\r\n}\r\n\r\n.emcharts-container .right-panel{\r\n\ttext-align: center;\r\n}\r\n.emcharts-container .right-panel-form{\r\n\ttext-align: left;\r\n\twidth: 160px;\r\n\tmargin: 20px auto;\r\n\tline-height: 1.8;\r\n}\r\n/*.right-panel-btn{\r\n\tborder: none;\r\n\tpadding: 5px 15px;\r\n\tmargin: 10px 27px;\r\n\tbackground-color: #4267A0;\r\n\tcolor: white;\r\n}\r\n*/\r\n\r\n.emcharts-container .confirm-btn{\r\n\tfloat:left;\r\n\tborder: none;\r\n\tmargin-left:30px;\r\n\tmargin-top:10px;\r\n\twidth:90px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\tbackground-color: #305895;\r\n\tcolor: white;\r\n\tfont-size: 14px;\r\n}\r\n.emcharts-container .cancle-btn{\r\n\tfloat:right;\r\n\tborder: none;\r\n\tmargin-right:30px;\r\n\tmargin-top:10px;\r\n\twidth:90px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\tbackground-color: #305895;\r\n\tcolor: white;\r\n\tfont-size: 14px;\r\n}\r\n\r\n.emcharts-container .colorPad{\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\ttop: 120px;\r\n\tleft: 120px;\r\n\tbackground-color: white;\r\n}\r\n.emcharts-container .colorPadTriangle{\r\n\tposition: absolute;\r\n\ttop: 9px;\r\n\tleft: -12px;\r\n\twidth: 16px;\r\n\theight: 11px;\r\n\t*display: none;\r\n\tbackground-color: white;\r\n\toverflow: hidden;\r\n\tz-index: 100;\r\n}\r\n.emcharts-container .colorPadTriangle .up{\r\n\tposition: absolute;\r\n\ttop: 2px;\r\n\tleft: 3px;\r\n\twidth: 12px;\r\n\theight: 10px;\r\n\tborder-top: solid 1px #aaa;\r\n\tbackground-color: white;\r\n\t-webkit-transform: rotate(-25deg);    /* for Chrome || Safari */\r\n\t-moz-transform: rotate(-25deg);       /* for Firefox */\r\n\t-ms-transform: rotate(-25deg);        /* for IE */\r\n\to-transform: rotate(-25deg);         /* for Opera */\r\n\t*display: none;\r\n\tz-index: 10;\r\n}\r\n.emcharts-container .colorPadTriangle .down{\r\n\tposition: absolute;\r\n\ttop: 7px;\r\n\tleft: -1px;\r\n\twidth: 12px;\r\n\theight: 10px;\r\n\tborder-top: solid 1px #aaa;\r\n\tbackground-color: white;\r\n\t-webkit-transform: rotate(25deg);    /* for Chrome || Safari */\r\n\t-moz-transform: rotate(25deg);       /* for Firefox */\r\n\t-ms-transform: rotate(25deg);        /* for IE */\r\n\to-transform: rotate(25deg);         /* for Opera */\r\n\t*display: none;\r\n\tz-index: 10;\r\n}\r\n.emcharts-container .colorTable{\r\n\twidth: 100px;\r\n\theight:90px;\r\n\tborder: solid 1px #aaa; \r\n}\r\n.emcharts-container .colorTable td{\r\n\tposition: relative;\r\n\tz-index: 100;\r\n\tborder: solid 3px #fff;\r\n}\r\n.emcharts-container .ma-panel{\r\n\tposition: relative;\r\n}\r\n.emcharts-container .ma-item-input{\r\n\twidth:30px;\r\n\theight: 15px;\r\n\tline-height: 15px;\r\n\tmargin-left: 5px;\r\n\tmargin-right: 5px;\r\n\tfont-size: 12px;\r\n\tvertical-align:middle;\r\n\tpadding-left: 3px;\r\n}\r\n\r\n.emcharts-container .fu-quan-select{\r\n\r\n\t-webkit-user-select:none;\r\n    -moz-user-select:none;\r\n    -ms-user-select:none;\r\n    user-select:none;\r\n\r\n\tposition: absolute;\r\n\tz-index: 100;\r\n\tright:0px;\r\n\ttop:5px;\r\n\twidth:50px;\r\n\theight:20px;\r\n\tfont-size: 12px;\r\n\tfont-family: simsun;\r\n\r\n\t -webkit-appearance: none;\r\n\t padding-left: 3px;\r\n}\r\n/* barHorizontal */\r\n.emcharts-container .horizontal-gmask{\r\n\tposition: absolute;\r\n\tbackground-color: #000;\r\n\topacity: 0.1;\r\n\tfilter:progid:DXImageTransform.Microsoft.Alpha(Opacity=10);\r\n}\r\n.emcharts-container .horizontal-gpanel{\r\n\tposition: absolute;\r\n\tbackground-color: #000;\r\n\tborder-radius: 5px;\r\n\topacity: 0.7;\r\n\tfilter:progid:DXImageTransform.Microsoft.Alpha(Opacity=70);\r\n\tcolor:#ffffff;\r\n\tpadding: 5px 10px;\r\n}", ""]);

			// exports


			/***/
		}),
/* 150 */
/***/ (function (module, exports) {

			/*
				MIT License http://www.opensource.org/licenses/mit-license.php
				Author Tobias Koppers @sokra
			*/
			// css base code, injected by the css-loader
			module.exports = function () {
				var list = [];

				// return the list of modules as css string
				list.toString = function toString() {
					var result = [];
					for (var i = 0; i < this.length; i++) {
						var item = this[i];
						if (item[2]) {
							result.push("@media " + item[2] + "{" + item[1] + "}");
						} else {
							result.push(item[1]);
						}
					}
					return result.join("");
				};

				// import a list of modules into the list
				list.i = function (modules, mediaQuery) {
					if (typeof modules === "string")
						modules = [[null, modules, ""]];
					var alreadyImportedModules = {};
					for (var i = 0; i < this.length; i++) {
						var id = this[i][0];
						if (typeof id === "number")
							alreadyImportedModules[id] = true;
					}
					for (i = 0; i < modules.length; i++) {
						var item = modules[i];
						// skip already imported module
						// this implementation is not 100% perfect for weird media query combinations
						//  when a module is imported multiple times with different media queries.
						//  I hope this will never occur (Hey this way we have smaller bundles)
						if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
							if (mediaQuery && !item[2]) {
								item[2] = mediaQuery;
							} else if (mediaQuery) {
								item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
							}
							list.push(item);
						}
					}
				};
				return list;
			};


			/***/
		}),
/* 151 */
/***/ (function (module, exports) {

			module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAADCAYAAAB4bZQtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAdSURBVHjaYvz///9/BhoBJgYaApoaDgAAAP//AwBSRgQCNPlECAAAAABJRU5ErkJggg=="

			/***/
		}),
/* 152 */
/***/ (function (module, exports) {

			module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABFSURBVHjaYjxz5gwDMcDY2Pg/jH327FlGYvQwMdAQjBo+avhIMJzx/////0eDBR2wEFsIjRZco4aPGj4AhgMAAAD//wMAq70Q99ei408AAAAASUVORK5CYII="

			/***/
		}),
/* 153 */
/***/ (function (module, exports) {

			module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxQjBBMjM2MjI2REMxMUU2QURERTg3REFCOEYzQUQzNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxQjBBMjM2MzI2REMxMUU2QURERTg3REFCOEYzQUQzNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFCMEEyMzYwMjZEQzExRTZBRERFODdEQUI4RjNBRDM2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFCMEEyMzYxMjZEQzExRTZBRERFODdEQUI4RjNBRDM2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FqRI6gAAAypJREFUeNqsVktIlFEUPhND6DRgOfSCCFs0jQYNWTaJ1qRGjQxhRNKDFi2KJCOoyFVFJgQ9XAQtkhRclVCJFoa5GJUpQQrCFmkygdAsejCZYSO1mb7Dvf/8j7nzAg98zP3Pvfd8cx733GtLHKRs4gZ41T6gDHBJfQz4CAwBfcB0JiO2DER+oA3YRblJGLgKjKomlyh0BcADYDgPEpJrh+XegmxExUAIOMPeUv5ik3tD0paSyAG8BCqTmtsTRCvcapOH24kuD6YjrJS2HJrCbpi8B/hMy11riIrWEc3KPJfU6nPTb4kO4c8HkJapN7p+Lqqt90mbp43F4JfxNYer6xvK4RjRTEh4djcs9IXLiBb+6Ov4m4V14RdE3ae0mQRQwwWiEbGF6uS/3h4Uy+pPiI3zc0RPL+le3XxO1Fyue3odHs1MGgmM8poLhXPkTZKweKoEAaN4FZYcEGMtV+xd9DNRQ4v4Zr0bJiLv0+WLbXvZo1YMrqVMbzlK1PqY6EKdOnRaqKyhfHKfaLDNau2GPe1ZKd8rfvccR0hCoijYw/4uEUoWZ5E+ZtmBPc7lKmu7mcijJCqrIPr5nWgbchlpRrgmhX7kkfCwGrqzt8y5cnaC+JfK2ia7oXeZw1boFOOBbqIjFxHceqL2c3pBMDGHqw4l/m5A/xNc3qni4hz9xWCpSc0H8UdUFAKXdyMSH/+NcPrNJW0scU1iX4lavFbtP7vswmtN3ni2EnWeF0QsdwLmbScRopJSlHVVrq0pxkRTJiIuAj47sxm6/koUhsMp2pBRuFt86FHt+GSXh7UmqdKSnUnY4y8Rog2bdd36jeJbTRRmol7TOcpGwl7E51PDpuVVLc+4M0zINpFduNq4kY72pc6xR8YzZW5BE1r3vqJsqkbhLt2I8h7q0fseF467Qhxc12qRI7Mk5K2bvI/4+n2oLFXtXOwMWDuzKBzug3y4eztU+WGbI9Y3g0PejD5aHBkH+AKLW29YVgTlgsUgCWokqjdDTJZ6h4xvvpKQe2ulrYyvoAWgSRKO5UEyJgmajJ7k8q5LHk+gAdgPlFoekNzSXwH9ssOklf8CDADTqe/lOuA5/wAAAABJRU5ErkJggg=="

			/***/
		}),
/* 154 */
/***/ (function (module, exports, __webpack_require__) {

			/*
				MIT License http://www.opensource.org/licenses/mit-license.php
				Author Tobias Koppers @sokra
			*/
			var stylesInDom = {},
				memoize = function (fn) {
					var memo;
					return function () {
						if (typeof memo === "undefined") memo = fn.apply(this, arguments);
						return memo;
					};
				},
				isOldIE = memoize(function () {
					return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
				}),
				getHeadElement = memoize(function () {
					return document.head || document.getElementsByTagName("head")[0];
				}),
				singletonElement = null,
				singletonCounter = 0,
				styleElementsInsertedAtTop = [];

			module.exports = function (list, options) {
				if (false) {
					if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
				}

				options = options || {};
				// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
				// tags it will allow on a page
				if (typeof options.singleton === "undefined") options.singleton = isOldIE();

				// By default, add <style> tags to the bottom of <head>.
				if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

				var styles = listToStyles(list);
				addStylesToDom(styles, options);

				return function update(newList) {
					var mayRemove = [];
					for (var i = 0; i < styles.length; i++) {
						var item = styles[i];
						var domStyle = stylesInDom[item.id];
						domStyle.refs--;
						mayRemove.push(domStyle);
					}
					if (newList) {
						var newStyles = listToStyles(newList);
						addStylesToDom(newStyles, options);
					}
					for (var i = 0; i < mayRemove.length; i++) {
						var domStyle = mayRemove[i];
						if (domStyle.refs === 0) {
							for (var j = 0; j < domStyle.parts.length; j++)
								domStyle.parts[j]();
							delete stylesInDom[domStyle.id];
						}
					}
				};
			}

			function addStylesToDom(styles, options) {
				for (var i = 0; i < styles.length; i++) {
					var item = styles[i];
					var domStyle = stylesInDom[item.id];
					if (domStyle) {
						domStyle.refs++;
						for (var j = 0; j < domStyle.parts.length; j++) {
							domStyle.parts[j](item.parts[j]);
						}
						for (; j < item.parts.length; j++) {
							domStyle.parts.push(addStyle(item.parts[j], options));
						}
					} else {
						var parts = [];
						for (var j = 0; j < item.parts.length; j++) {
							parts.push(addStyle(item.parts[j], options));
						}
						stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
					}
				}
			}

			function listToStyles(list) {
				var styles = [];
				var newStyles = {};
				for (var i = 0; i < list.length; i++) {
					var item = list[i];
					var id = item[0];
					var css = item[1];
					var media = item[2];
					var sourceMap = item[3];
					var part = { css: css, media: media, sourceMap: sourceMap };
					if (!newStyles[id])
						styles.push(newStyles[id] = { id: id, parts: [part] });
					else
						newStyles[id].parts.push(part);
				}
				return styles;
			}

			function insertStyleElement(options, styleElement) {
				var head = getHeadElement();
				var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
				if (options.insertAt === "top") {
					if (!lastStyleElementInsertedAtTop) {
						head.insertBefore(styleElement, head.firstChild);
					} else if (lastStyleElementInsertedAtTop.nextSibling) {
						head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
					} else {
						head.appendChild(styleElement);
					}
					styleElementsInsertedAtTop.push(styleElement);
				} else if (options.insertAt === "bottom") {
					head.appendChild(styleElement);
				} else {
					throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
				}
			}

			function removeStyleElement(styleElement) {
				styleElement.parentNode.removeChild(styleElement);
				var idx = styleElementsInsertedAtTop.indexOf(styleElement);
				if (idx >= 0) {
					styleElementsInsertedAtTop.splice(idx, 1);
				}
			}

			function createStyleElement(options) {
				var styleElement = document.createElement("style");
				styleElement.type = "text/css";
				insertStyleElement(options, styleElement);
				return styleElement;
			}

			function createLinkElement(options) {
				var linkElement = document.createElement("link");
				linkElement.rel = "stylesheet";
				insertStyleElement(options, linkElement);
				return linkElement;
			}

			function addStyle(obj, options) {
				var styleElement, update, remove;

				if (options.singleton) {
					var styleIndex = singletonCounter++;
					styleElement = singletonElement || (singletonElement = createStyleElement(options));
					update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
					remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
				} else if (obj.sourceMap &&
					typeof URL === "function" &&
					typeof URL.createObjectURL === "function" &&
					typeof URL.revokeObjectURL === "function" &&
					typeof Blob === "function" &&
					typeof btoa === "function") {
					styleElement = createLinkElement(options);
					update = updateLink.bind(null, styleElement);
					remove = function () {
						removeStyleElement(styleElement);
						if (styleElement.href)
							URL.revokeObjectURL(styleElement.href);
					};
				} else {
					styleElement = createStyleElement(options);
					update = applyToTag.bind(null, styleElement);
					remove = function () {
						removeStyleElement(styleElement);
					};
				}

				update(obj);

				return function updateStyle(newObj) {
					if (newObj) {
						if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
							return;
						update(obj = newObj);
					} else {
						remove();
					}
				};
			}

			var replaceText = (function () {
				var textStore = [];

				return function (index, replacement) {
					textStore[index] = replacement;
					return textStore.filter(Boolean).join('\n');
				};
			})();

			function applyToSingletonTag(styleElement, index, remove, obj) {
				var css = remove ? "" : obj.css;

				if (styleElement.styleSheet) {
					styleElement.styleSheet.cssText = replaceText(index, css);
				} else {
					var cssNode = document.createTextNode(css);
					var childNodes = styleElement.childNodes;
					if (childNodes[index]) styleElement.removeChild(childNodes[index]);
					if (childNodes.length) {
						styleElement.insertBefore(cssNode, childNodes[index]);
					} else {
						styleElement.appendChild(cssNode);
					}
				}
			}

			function applyToTag(styleElement, obj) {
				var css = obj.css;
				var media = obj.media;

				if (media) {
					styleElement.setAttribute("media", media)
				}

				if (styleElement.styleSheet) {
					styleElement.styleSheet.cssText = css;
				} else {
					while (styleElement.firstChild) {
						styleElement.removeChild(styleElement.firstChild);
					}
					styleElement.appendChild(document.createTextNode(css));
				}
			}

			function updateLink(linkElement, obj) {
				var css = obj.css;
				var sourceMap = obj.sourceMap;

				if (sourceMap) {
					// http://stackoverflow.com/a/26603875
					css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
				}

				var blob = new Blob([css], { type: "text/css" });

				var oldSrc = linkElement.href;

				linkElement.href = URL.createObjectURL(blob);

				if (oldSrc)
					URL.revokeObjectURL(oldSrc);
			}


			/***/
		})
/******/]);
//# sourceMappingURL=emcharts.js.map