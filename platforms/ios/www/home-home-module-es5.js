(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/@angular/common/fesm5/http.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/common/fesm5/http.js ***!
  \****************************************************/
/*! exports provided: ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, HttpBackend, HttpHandler, HttpClient, HttpHeaders, HTTP_INTERCEPTORS, JsonpClientBackend, JsonpInterceptor, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, ɵHttpInterceptingHandler, HttpParams, HttpUrlEncodingCodec, HttpRequest, HttpErrorResponse, HttpEventType, HttpHeaderResponse, HttpResponse, HttpResponseBase, HttpXhrBackend, XhrFactory, HttpXsrfTokenExtractor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function() { return NoopInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function() { return JsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function() { return jsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function() { return HttpXsrfCookieExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function() { return HttpXsrfInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function() { return XSRF_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function() { return XSRF_HEADER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBackend", function() { return HttpBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHandler", function() { return HttpHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaders", function() { return HttpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function() { return HTTP_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function() { return JsonpClientBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function() { return JsonpInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function() { return HttpClientJsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule", function() { return HttpClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function() { return HttpClientXsrfModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function() { return HttpInterceptingHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpParams", function() { return HttpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function() { return HttpUrlEncodingCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function() { return HttpErrorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpEventType", function() { return HttpEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function() { return HttpHeaderResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function() { return HttpResponseBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function() { return HttpXhrBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrFactory", function() { return XhrFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function() { return HttpXsrfTokenExtractor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license Angular v8.1.3
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */







/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * @publicApi
 */
var HttpHandler = /** @class */ (function () {
    function HttpHandler() {
    }
    return HttpHandler;
}());
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * @publicApi
 */
var HttpBackend = /** @class */ (function () {
    function HttpBackend() {
    }
    return HttpBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Represents the header configuration options for an HTTP request.
 *
 * Instances should be assumed immutable with lazy parsing.
 *
 * @publicApi
 */
var HttpHeaders = /** @class */ (function () {
    /**  Constructs a new HTTP header object with the given values.*/
    function HttpHeaders(headers) {
        var _this = this;
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = function () {
                _this.headers = new Map();
                headers.split('\n').forEach(function (line) {
                    var index = line.indexOf(':');
                    if (index > 0) {
                        var name_1 = line.slice(0, index);
                        var key = name_1.toLowerCase();
                        var value = line.slice(index + 1).trim();
                        _this.maybeSetNormalizedName(name_1, key);
                        if (_this.headers.has(key)) {
                            _this.headers.get(key).push(value);
                        }
                        else {
                            _this.headers.set(key, [value]);
                        }
                    }
                });
            };
        }
        else {
            this.lazyInit = function () {
                _this.headers = new Map();
                Object.keys(headers).forEach(function (name) {
                    var values = headers[name];
                    var key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        _this.headers.set(key, values);
                        _this.maybeSetNormalizedName(name, key);
                    }
                });
            };
        }
    }
    /**
     * Checks for existence of a header by a given name.
     *
     * @param name The header name to check for existence.
     *
     * @returns Whether the header exits.
     */
    HttpHeaders.prototype.has = function (name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    };
    /**
     * Retrieves the first header value that matches a given name.
     *
     * @param name The header name to retrieve.
     *
     * @returns A string if the header exists, null otherwise
     */
    HttpHeaders.prototype.get = function (name) {
        this.init();
        var values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    };
    /**
     * Retrieves the names of the headers.
     *
     * @returns A list of header names.
     */
    HttpHeaders.prototype.keys = function () {
        this.init();
        return Array.from(this.normalizedNames.values());
    };
    /**
     * Retrieves a list of header values for a given header name.
     *
     * @param name The header name from which to retrieve the values.
     *
     * @returns A string of values if the header exists, null otherwise.
     */
    HttpHeaders.prototype.getAll = function (name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    };
    /**
     * Appends a new header value to the existing set of
     * header values.
     *
     * @param name The header name for which to append the values.
     *
     * @returns A clone of the HTTP header object with the value appended.
     */
    HttpHeaders.prototype.append = function (name, value) {
        return this.clone({ name: name, value: value, op: 'a' });
    };
    /**
     * Sets a header value for a given name. If the header name already exists,
     * its value is replaced with the given value.
     *
     * @param name The header name.
     * @param value The value to set or overide for a given name.
     *
     * @returns A clone of the HTTP header object with the newly set header value.
     */
    HttpHeaders.prototype.set = function (name, value) {
        return this.clone({ name: name, value: value, op: 's' });
    };
    /**
     * Deletes all header values for a given name.
     *
     * @param name The header name.
     * @param value The header values to delete for a given name.
     *
     * @returns A clone of the HTTP header object.
     */
    HttpHeaders.prototype.delete = function (name, value) {
        return this.clone({ name: name, value: value, op: 'd' });
    };
    HttpHeaders.prototype.maybeSetNormalizedName = function (name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    };
    HttpHeaders.prototype.init = function () {
        var _this = this;
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach(function (update) { return _this.applyUpdate(update); });
                this.lazyUpdate = null;
            }
        }
    };
    HttpHeaders.prototype.copyFrom = function (other) {
        var _this = this;
        other.init();
        Array.from(other.headers.keys()).forEach(function (key) {
            _this.headers.set(key, other.headers.get(key));
            _this.normalizedNames.set(key, other.normalizedNames.get(key));
        });
    };
    HttpHeaders.prototype.clone = function (update) {
        var clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    };
    HttpHeaders.prototype.applyUpdate = function (update) {
        var key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                var value = update.value;
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                var base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push.apply(base, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(value));
                this.headers.set(key, base);
                break;
            case 'd':
                var toDelete_1 = update.value;
                if (!toDelete_1) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    var existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter(function (value) { return toDelete_1.indexOf(value) === -1; });
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    };
    /**
     * @internal
     */
    HttpHeaders.prototype.forEach = function (fn) {
        var _this = this;
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach(function (key) { return fn(_this.normalizedNames.get(key), _this.headers.get(key)); });
    };
    return HttpHeaders;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * @publicApi
 */
var HttpUrlEncodingCodec = /** @class */ (function () {
    function HttpUrlEncodingCodec() {
    }
    /**
     * Encodes a key name for a URL parameter or query-string.
     * @param key The key name.
     * @returns The encoded key name.
     */
    HttpUrlEncodingCodec.prototype.encodeKey = function (key) { return standardEncoding(key); };
    /**
     * Encodes the value of a URL parameter or query-string.
     * @param value The value.
     * @returns The encoded value.
     */
    HttpUrlEncodingCodec.prototype.encodeValue = function (value) { return standardEncoding(value); };
    /**
     * Decodes an encoded URL parameter or query-string key.
     * @param key The encoded key name.
     * @returns The decoded key name.
     */
    HttpUrlEncodingCodec.prototype.decodeKey = function (key) { return decodeURIComponent(key); };
    /**
     * Decodes an encoded URL parameter or query-string value.
     * @param value The encoded value.
     * @returns The decoded value.
     */
    HttpUrlEncodingCodec.prototype.decodeValue = function (value) { return decodeURIComponent(value); };
    return HttpUrlEncodingCodec;
}());
function paramParser(rawParams, codec) {
    var map = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))], 2), key = _a[0], val = _a[1];
            var list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * @publicApi
 */
var HttpParams = /** @class */ (function () {
    function HttpParams(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error("Cannot specify both fromString and fromObject.");
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach(function (key) {
                var value = options.fromObject[key];
                _this.map.set(key, Array.isArray(value) ? value : [value]);
            });
        }
        else {
            this.map = null;
        }
    }
    /**
     * Reports whether the body includes one or more values for a given parameter.
     * @param param The parameter name.
     * @returns True if the parameter has one or more values,
     * false if it has no value or is not present.
     */
    HttpParams.prototype.has = function (param) {
        this.init();
        return this.map.has(param);
    };
    /**
     * Retrieves the first value for a parameter.
     * @param param The parameter name.
     * @returns The first value of the given parameter,
     * or `null` if the parameter is not present.
     */
    HttpParams.prototype.get = function (param) {
        this.init();
        var res = this.map.get(param);
        return !!res ? res[0] : null;
    };
    /**
     * Retrieves all values for a  parameter.
     * @param param The parameter name.
     * @returns All values in a string array,
     * or `null` if the parameter not present.
     */
    HttpParams.prototype.getAll = function (param) {
        this.init();
        return this.map.get(param) || null;
    };
    /**
     * Retrieves all the parameters for this body.
     * @returns The parameter names in a string array.
     */
    HttpParams.prototype.keys = function () {
        this.init();
        return Array.from(this.map.keys());
    };
    /**
     * Appends a new value to existing values for a parameter.
     * @param param The parameter name.
     * @param value The new value to add.
     * @return A new body with the appended value.
     */
    HttpParams.prototype.append = function (param, value) { return this.clone({ param: param, value: value, op: 'a' }); };
    /**
     * Replaces the value for a parameter.
     * @param param The parameter name.
     * @param value The new value.
     * @return A new body with the new value.
     */
    HttpParams.prototype.set = function (param, value) { return this.clone({ param: param, value: value, op: 's' }); };
    /**
     * Removes a given value or all values from a parameter.
     * @param param The parameter name.
     * @param value The value to remove, if provided.
     * @return A new body with the given value removed, or with all values
     * removed if no value is specified.
     */
    HttpParams.prototype.delete = function (param, value) { return this.clone({ param: param, value: value, op: 'd' }); };
    /**
     * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     */
    HttpParams.prototype.toString = function () {
        var _this = this;
        this.init();
        return this.keys()
            .map(function (key) {
            var eKey = _this.encoder.encodeKey(key);
            return _this.map.get(key).map(function (value) { return eKey + '=' + _this.encoder.encodeValue(value); })
                .join('&');
        })
            .join('&');
    };
    HttpParams.prototype.clone = function (update) {
        var clone = new HttpParams({ encoder: this.encoder });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat([update]);
        return clone;
    };
    HttpParams.prototype.init = function () {
        var _this = this;
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(function (key) { return _this.map.set(key, _this.cloneFrom.map.get(key)); });
            this.updates.forEach(function (update) {
                switch (update.op) {
                    case 'a':
                    case 's':
                        var base = (update.op === 'a' ? _this.map.get(update.param) : undefined) || [];
                        base.push(update.value);
                        _this.map.set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            var base_1 = _this.map.get(update.param) || [];
                            var idx = base_1.indexOf(update.value);
                            if (idx !== -1) {
                                base_1.splice(idx, 1);
                            }
                            if (base_1.length > 0) {
                                _this.map.set(update.param, base_1);
                            }
                            else {
                                _this.map.delete(update.param);
                            }
                        }
                        else {
                            _this.map.delete(update.param);
                            break;
                        }
                }
            });
            this.cloneFrom = this.updates = null;
        }
    };
    return HttpParams;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Determine whether the given HTTP method may include a body.
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * @publicApi
 */
var HttpRequest = /** @class */ (function () {
    function HttpRequest(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        var options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = (third !== undefined) ? third : null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = third;
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            var params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                var qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                var sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     */
    HttpRequest.prototype.serializeBody = function () {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return this.body.toString();
    };
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     */
    HttpRequest.prototype.detectContentTypeHeader = function () {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            Array.isArray(this.body)) {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    };
    HttpRequest.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        var method = update.method || this.method;
        var url = update.url || this.url;
        var responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        var body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        var withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        var reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        var headers = update.headers || this.headers;
        var params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce(function (headers, name) { return headers.set(name, update.setHeaders[name]); }, headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce(function (params, param) { return params.set(param, update.setParams[param]); }, params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params: params, headers: headers, reportProgress: reportProgress, responseType: responseType, withCredentials: withCredentials,
        });
    };
    return HttpRequest;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */
var HttpEventType;
(function (HttpEventType) {
    /**
     * The request was sent out over the wire.
     */
    HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
    /**
     * An upload progress event was received.
     */
    HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
    /**
     * The response status code and headers were received.
     */
    HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
    /**
     * A download progress event was received.
     */
    HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
    /**
     * The full response including the body was received.
     */
    HttpEventType[HttpEventType["Response"] = 4] = "Response";
    /**
     * A custom event from an interceptor or a backend.
     */
    HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */
var HttpResponseBase = /** @class */ (function () {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     */
    function HttpResponseBase(init, defaultStatus, defaultStatusText) {
        if (defaultStatus === void 0) { defaultStatus = 200; }
        if (defaultStatusText === void 0) { defaultStatusText = 'OK'; }
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
    return HttpResponseBase;
}());
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */
var HttpHeaderResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpHeaderResponse, _super);
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     */
    function HttpHeaderResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.ResponseHeader;
        return _this;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     */
    HttpHeaderResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpHeaderResponse;
}(HttpResponseBase));
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */
var HttpResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpResponse, _super);
    /**
     * Construct a new `HttpResponse`.
     */
    function HttpResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.Response;
        _this.body = init.body !== undefined ? init.body : null;
        return _this;
    }
    HttpResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpResponse;
}(HttpResponseBase));
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * @publicApi
 */
var HttpErrorResponse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpErrorResponse, _super);
    function HttpErrorResponse(init) {
        var _this = 
        // Initialize with a default status of 0 / Unknown Error.
        _super.call(this, init, 0, 'Unknown Error') || this;
        _this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        _this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (_this.status >= 200 && _this.status < 300) {
            _this.message = "Http failure during parsing for " + (init.url || '(unknown url)');
        }
        else {
            _this.message =
                "Http failure response for " + (init.url || '(unknown url)') + ": " + init.status + " " + init.statusText;
        }
        _this.error = init.error || null;
        return _this;
    }
    return HttpErrorResponse;
}(HttpResponseBase));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 */
function addBody(options, body) {
    return {
        body: body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Performs HTTP requests.
 *
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * @usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/http)
 *
 * @publicApi
 */
var HttpClient = /** @class */ (function () {
    function HttpClient(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an observable for a generic HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * You can pass an `HttpRequest` directly as the only parameter. In this case,
     * the call returns an observable of the raw `HttpEvent` stream.
     *
     * Alternatively you can pass an HTTP method as the first parameter,
     * a URL string as the second, and an options hash containing the request body as the third.
     * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
     * type of returned observable.
     *   * The `responseType` value determines how a successful response body is parsed.
     *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
     * object as a type parameter to the call.
     *
     * The `observe` value determines the return type, according to what you are interested in
     * observing.
     *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
     * progress events by default.
     *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
     * where the `T` parameter depends on the `responseType` and any optionally provided type
     * parameter.
     *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
     *
     */
    HttpClient.prototype.request = function (first, url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var req;
        // First, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = first;
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming `GET` unless a method is
            // provided.
            // Figure out the headers.
            var headers = undefined;
            if (options.headers instanceof HttpHeaders) {
                headers = options.headers;
            }
            else {
                headers = new HttpHeaders(options.headers);
            }
            // Sort out parameters.
            var params = undefined;
            if (!!options.params) {
                if (options.params instanceof HttpParams) {
                    params = options.params;
                }
                else {
                    params = new HttpParams({ fromObject: options.params });
                }
            }
            // Construct the request.
            req = new HttpRequest(first, url, (options.body !== undefined ? options.body : null), {
                headers: headers,
                params: params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        var events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (req) { return _this.handler.handle(req); }));
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        var res$ = events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof HttpResponse; }));
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        }));
                    case 'blob':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        }));
                    case 'text':
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        }));
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.body; }));
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error("Unreachable: unhandled observe type " + options.observe + "}");
        }
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `DELETE` request to execute on the server. See the individual overloads for
     * details on the return type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     */
    HttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('DELETE', url, options);
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `GET` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('GET', url, options);
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `HEAD` request to execute on the server. The `HEAD` method returns
     * meta information about the resource without transferring the
     * resource itself. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.head = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('HEAD', url, options);
    };
    /**
     * Constructs an `Observable` that, when subscribed, causes a request with the special method
     * `JSONP` to be dispatched via the interceptor pipeline.
     * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
     * API endpoints that don't support newer,
     * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
     * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
     * requests even if the API endpoint is not located on the same domain (origin) as the client-side
     * application making the request.
     * The endpoint API must support JSONP callback for JSONP requests to work.
     * The resource API returns the JSON response wrapped in a callback function.
     * You can pass the callback function name as one of the query parameters.
     * Note that JSONP requests can only be used with `GET` requests.
     *
     * @param url The resource URL.
     * @param callbackParam The callback function name.
     *
     */
    HttpClient.prototype.jsonp = function (url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    };
    /**
     * Constructs an `Observable` that, when subscribed, causes the configured
     * `OPTIONS` request to execute on the server. This method allows the client
     * to determine the supported HTTP methods and other capabilites of an endpoint,
     * without implying a resource action. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.options = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('OPTIONS', url, options);
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PATCH` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.patch = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PATCH', url, addBody(options, body));
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `POST` request to execute on the server. The server responds with the location of
     * the replaced resource. See the individual overloads for
     * details on the return type.
     */
    HttpClient.prototype.post = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('POST', url, addBody(options, body));
    };
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
     * with a new set of values.
     * See the individual overloads for details on the return type.
     */
    HttpClient.prototype.put = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PUT', url, addBody(options, body));
    };
    HttpClient = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [HttpHandler])
    ], HttpClient);
    return HttpClient;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
var HttpInterceptorHandler = /** @class */ (function () {
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    HttpInterceptorHandler.prototype.handle = function (req) {
        return this.interceptor.intercept(req, this.next);
    };
    return HttpInterceptorHandler;
}());
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * @publicApi
 */
var HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('HTTP_INTERCEPTORS');
var NoopInterceptor = /** @class */ (function () {
    function NoopInterceptor() {
    }
    NoopInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req);
    };
    NoopInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], NoopInterceptor);
    return NoopInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
var nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */
var JsonpCallbackContext = /** @class */ (function () {
    function JsonpCallbackContext() {
    }
    return JsonpCallbackContext;
}());
/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see `HttpHandler`
 * @see `HttpXhrBackend`
 *
 * @publicApi
 */
var JsonpClientBackend = /** @class */ (function () {
    function JsonpClientBackend(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     */
    JsonpClientBackend.prototype.nextCallback = function () { return "ng_jsonp_callback_" + nextRequestId++; };
    /**
     * Processes a JSONP request and returns an event stream of the results.
     * @param req The request object.
     * @returns An observable of the response events.
     *
     */
    JsonpClientBackend.prototype.handle = function (req) {
        var _this = this;
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            var callback = _this.nextCallback();
            var url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=" + callback + "$1");
            // Construct the <script> tag and point it at the URL.
            var node = _this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            var body = null;
            // Whether the response callback has been called.
            var finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            var cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            _this.callbackMap[callback] = function (data) {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete _this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            };
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            var cleanup = function () {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete _this.callbackMap[callback];
            };
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            var onLoad = function (event) {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // Cleanup the page.
                cleanup();
                // Check whether the response callback has run.
                if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new HttpErrorResponse({
                        url: url,
                        status: 0,
                        statusText: 'JSONP Error',
                        error: new Error(JSONP_ERR_NO_CALLBACK),
                    }));
                    return;
                }
                // Success. body either contains the response body or null if none was
                // returned.
                observer.next(new HttpResponse({
                    body: body,
                    status: 200,
                    statusText: 'OK', url: url,
                }));
                // Complete the stream, the response is over.
                observer.complete();
            };
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            var onError = function (error) {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error: error,
                    status: 0,
                    statusText: 'JSONP Error', url: url,
                }));
            };
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            _this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return function () {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            };
        });
    };
    JsonpClientBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [JsonpCallbackContext, Object])
    ], JsonpClientBackend);
    return JsonpClientBackend;
}());
/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see `HttpInterceptor`
 *
 * @publicApi
 */
var JsonpInterceptor = /** @class */ (function () {
    function JsonpInterceptor(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     * Identifies and handles a given JSONP request.
     * @param req The outgoing request object to handle.
     * @param next The next interceptor in the chain, or the backend
     * if no interceptors remain in the chain.
     * @returns An observable of the event stream.
     */
    JsonpInterceptor.prototype.intercept = function (req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle(req);
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    };
    JsonpInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [JsonpClientBackend])
    ], JsonpInterceptor);
    return JsonpInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 */
var XhrFactory = /** @class */ (function () {
    function XhrFactory() {
    }
    return XhrFactory;
}());
/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 *
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BrowserXhr);
    return BrowserXhr;
}());
/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see `HttpHandler`
 * @see `JsonpClientBackend`
 *
 * @publicApi
 */
var HttpXhrBackend = /** @class */ (function () {
    function HttpXhrBackend(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Processes a request and returns a stream of response events.
     * @param req The request object.
     * @returns An observable of the response events.
     */
    HttpXhrBackend.prototype.handle = function (req) {
        var _this = this;
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the JsonpClientModule
        if (req.method === 'JSONP') {
            throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
        }
        // Everything happens on Observable subscription.
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            var xhr = _this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach(function (name, values) { return xhr.setRequestHeader(name, values.join(',')); });
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                var detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                var responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = ((responseType !== 'json') ? responseType : 'text');
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            var reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            var headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            var partialFromXhr = function () {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
                var status = xhr.status === 1223 ? 204 : xhr.status;
                var statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                var headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                var url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers: headers, status: status, statusText: statusText, url: url });
                return headerResponse;
            };
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            var onLoad = function () {
                // Read response state from the memoized partial data.
                var _a = partialFromXhr(), headers = _a.headers, status = _a.status, statusText = _a.statusText, url = _a.url;
                // The body will be read out if present.
                var body = null;
                if (status !== 204) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                var ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (req.responseType === 'json' && typeof body === 'string') {
                    // Save the original body, before attempting XSSI prefix stripping.
                    var originalBody = body;
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        // Attempt the parse. If it fails, a parse error should be delivered to the user.
                        body = body !== '' ? JSON.parse(body) : null;
                    }
                    catch (error) {
                        // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                        // JSON response. Restore the original body (including any XSSI prefix) to deliver
                        // a better error response.
                        body = originalBody;
                        // If this was an error request to begin with, leave it as a string, it probably
                        // just isn't JSON. Otherwise, deliver the parsing error to the user.
                        if (ok) {
                            // Even though the response status was 2xx, this is still an error.
                            ok = false;
                            // The parse error contains the text of the body that failed to parse.
                            body = { error: error, text: body };
                        }
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                }
            };
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            var onError = function (error) {
                var url = partialFromXhr().url;
                var res = new HttpErrorResponse({
                    error: error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                    url: url || undefined,
                });
                observer.error(res);
            };
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            var sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            var onDownProgress = function (event) {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                var progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            };
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            var onUpProgress = function (event) {
                // Upload progress events are simpler. Begin building the progress
                // event.
                var progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            };
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                xhr.abort();
            };
        });
    };
    HttpXhrBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [XhrFactory])
    ], HttpXhrBackend);
    return HttpXhrBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('XSRF_COOKIE_NAME');
var XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */
var HttpXsrfTokenExtractor = /** @class */ (function () {
    function HttpXsrfTokenExtractor() {
    }
    return HttpXsrfTokenExtractor;
}());
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
var HttpXsrfCookieExtractor = /** @class */ (function () {
    function HttpXsrfCookieExtractor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * @internal for testing
         */
        this.parseCount = 0;
    }
    HttpXsrfCookieExtractor.prototype.getToken = function () {
        if (this.platform === 'server') {
            return null;
        }
        var cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    };
    HttpXsrfCookieExtractor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(XSRF_COOKIE_NAME)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, String, String])
    ], HttpXsrfCookieExtractor);
    return HttpXsrfCookieExtractor;
}());
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
var HttpXsrfInterceptor = /** @class */ (function () {
    function HttpXsrfInterceptor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    HttpXsrfInterceptor.prototype.intercept = function (req, next) {
        var lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        var token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    };
    HttpXsrfInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(XSRF_HEADER_NAME)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [HttpXsrfTokenExtractor, String])
    ], HttpXsrfInterceptor);
    return HttpXsrfInterceptor;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */
var HttpInterceptingHandler = /** @class */ (function () {
    function HttpInterceptingHandler(backend, injector) {
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
    }
    HttpInterceptingHandler.prototype.handle = function (req) {
        if (this.chain === null) {
            var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, this.backend);
        }
        return this.chain.handle(req);
    };
    HttpInterceptingHandler = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [HttpBackend, _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], HttpInterceptingHandler);
    return HttpInterceptingHandler;
}());
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */
var HttpClientXsrfModule = /** @class */ (function () {
    function HttpClientXsrfModule() {
    }
    HttpClientXsrfModule_1 = HttpClientXsrfModule;
    /**
     * Disable the default XSRF protection.
     */
    HttpClientXsrfModule.disable = function () {
        return {
            ngModule: HttpClientXsrfModule_1,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    };
    /**
     * Configure XSRF protection.
     * @param options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     */
    HttpClientXsrfModule.withOptions = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: HttpClientXsrfModule_1,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    };
    var HttpClientXsrfModule_1;
    HttpClientXsrfModule = HttpClientXsrfModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                HttpXsrfInterceptor,
                { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
            ],
        })
    ], HttpClientXsrfModule);
    return HttpClientXsrfModule;
}());
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
var HttpClientModule = /** @class */ (function () {
    function HttpClientModule() {
    }
    HttpClientModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            /**
             * Optional configuration for XSRF protection.
             */
            imports: [
                HttpClientXsrfModule.withOptions({
                    cookieName: 'XSRF-TOKEN',
                    headerName: 'X-XSRF-TOKEN',
                }),
            ],
            /**
             * Configures the [dependency injector](guide/glossary#injector) where it is imported
             * with supporting services for HTTP communications.
             */
            providers: [
                HttpClient,
                { provide: HttpHandler, useClass: HttpInterceptingHandler },
                HttpXhrBackend,
                { provide: HttpBackend, useExisting: HttpXhrBackend },
                BrowserXhr,
                { provide: XhrFactory, useExisting: BrowserXhr },
            ],
        })
    ], HttpClientModule);
    return HttpClientModule;
}());
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
var HttpClientJsonpModule = /** @class */ (function () {
    function HttpClientJsonpModule() {
    }
    HttpClientJsonpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                JsonpClientBackend,
                { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
            ],
        })
    ], HttpClientJsonpModule);
    return HttpClientJsonpModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/chess/chess.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/chess/chess.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-spinner class=\"progress\" *ngIf=\"progress\" name=\"circles\"></ion-spinner>\n<div [ngSwitch]=\"action\">\n    <div *ngSwitchCase=\"'signup'\">\n\n\n\n        <!-- singup -->\n\n        <div [ngSwitch]=\"view\" class=\"container\">\n            <ng-container *ngSwitchCase=\"'signup_chessMenSelect'\">\n                <div class=\"back-button\" (click)=\"onAction('signup')\">\n                    <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon> Back\n                </div>\n                <app-chessmen-select (chessmenSelected)=\"onChessmenSelected($event)\"></app-chessmen-select>\n            </ng-container>\n\n            <ng-container *ngSwitchCase=\"'signup_addSecreteObject'\">\n                <div class=\"back-button\" (click)=\"onAction('signup_chessMenAddToBoard')\">\n                    <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon> Back\n                </div>\n                <app-secret-add (selectedSecret)=\"onSelectedSecrete($event)\"></app-secret-add>\n            </ng-container>\n\n            <ng-container *ngSwitchCase=\"'signup_chessMenAddToBoard'\">\n                <div class=\"back-button\" (click)=\"onAction('signup_chessMenSelect')\">\n                    <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon> Back\n                </div>\n                <app-chessmen-add (chessmenAdded)=\"onChessmenAdded($event)\" [selectedChessMen]=\"selectedChessmen\">\n                </app-chessmen-add>\n            </ng-container>\n\n            <ng-container *ngSwitchCase=\"'signup_info'\">\n                <div class=\"back-button\" (click)=\"onAction('home')\">\n                    <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon> Back\n                </div>\n                <app-signup-info (userInfo)=\"onUserInfo($event)\"></app-signup-info>\n            </ng-container>\n        </div>\n    </div>\n    <div *ngSwitchCase=\"'login'\">\n        <div [ngSwitch]=\"view\" class=\"container\">\n\n            <ng-container *ngSwitchCase=\"'login_info'\">\n                <div class=\"back-button\" (click)=\"onAction('home')\">\n                    <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon> Back\n                </div>\n                <app-login-user-info (loginUserInfo)=\"onLoginUserInfo($event)\"></app-login-user-info>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"'login_otp'\">\n                <div class=\"back-button\" (click)=\"onAction('login_chessmenSequence')\">\n                    <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon> Back\n                </div>\n            \n                <app-otp (loginOtpCode)=\"onLoginOtpCode($event)\"></app-otp>\n            </ng-container>\n\n            <ng-container *ngSwitchCase=\"'login_chessmenSequence'\">\n                <div class=\"back-button\" (click)=\"onAction('login')\">\n                    <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon> Back\n                </div>\n                <app-chessmen-sequence (code)=\"onLoginChessCode($event)\" [loginChess]=\"loginChessState\">\n                </app-chessmen-sequence>\n            </ng-container>\n        </div>\n    </div>\n    <div *ngSwitchCase=\"'protected'\">\n        <div class=\"container\">\n            <div>\n                You are authenticated :)\n            </div>\n            <button class=\"button\" (click)=\"onAction('home')\">Home</button>\n        </div>\n    </div>\n    <ng-container *ngSwitchDefault>\n        <div class=\"logo\">\n            <img src=\"assets/logo.png\">\n        </div>\n        <div class=\"actions\">\n            <button class=\"button\" (click)=\"onAction('login')\">Login</button>\n            <button class=\"button\" (click)=\"onAction('signup')\">Sign Up</button>\n        </div>\n    </ng-container>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/chess/chessmen-add/chessmen-add.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/chess/chessmen-add/chessmen-add.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">Add your chessmen to the board</div>\n\n\n\n<div class=\"selected-chess-men\">\n  <div *ngFor=\"let piece of selectedChessMen; let i = index\" class=\"piece\" (click)=\"onChessMenIndexSelect(i)\"\n      [ngClass]=\"{selected: selectedChessMenIndex == i}\">\n      <span [innerHTML]=\"pieces[piece]\"></span>\n  </div>\n</div>\n\n<div  class=\"board\">\n  <!-- <ng-container *ngSwitchCase=\"4\"> -->\n      <ng-container *ngFor=\"let row of boardState; let i = index\">\n          <div class=\"row\" id=\"{{i}}\">\n              <div class=\"cell\" *ngFor=\"let col of boardState[i]; let j = index\" (click)=\"onPieceAdd(i,j)\">\n                  <div  [innerHTML]=\"pieces[col.value]\">\n                  </div>\n                  <span class=\"order\"> {{col.order}}</span>\n                </div>\n          </div>\n      <!-- </ng-container> -->\n  </ng-container>\n  <!-- <div *ngSwitchDefault>8x8</div> -->\n</div>\n\n<!-- <button (click)=\"onAction('done')\">Done</button> -->\n<div class=\"actions\">\n  <button class=\"button\" (click)=\"onReset()\">Reset</button>\n  <button class=\"button\" (click)=\"onDone()\">Done</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/chess/chessmen-select/chessmen-select.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/chess/chessmen-select/chessmen-select.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">Choose your chessmen and thier quantity</div>\n\n<div class=\"selection\">\n\n\n    <div style=\"text-align: center;\" *ngIf=\"current>=3 && current<=8\">Current selected chessmen :  {{current}}</div>\n    <div style=\"text-align: center;color:red\" *ngIf=\"current>=9\">Maximum chessmen to select {{max}}</div>\n    <div style=\"text-align: center;color:red\" *ngIf=\"current<3\">Minimum chessmen to select {{min}}</div>\n\n    <!-- <div style=\"text-align: center;\" *ngIf=\"current<3\">Max chessmen to select {{max}}</div> -->\n\n\n\n    <div class=\"piece\">\n        <div>Queen</div>\n        <div class=\"piece-icon\" [innerHTML]=\"pieces['queen']\"></div>\n        <!-- <input type=\"number\" [(ngModel)]=\"queen\"> -->\n        <select [(ngModel)]=\"queen\" (change)=\"onChange('queen',queen)\">\n            <option value=\"0\">0</option>\n            <option value=\"1\">1</option>\n            <option value=\"2\">2</option>\n            <option value=\"3\">3</option>\n            <option value=\"4\">4</option>\n          </select>\n    </div>\n    <div class=\"piece\">\n        <div>Bishop</div>\n        <div class=\"piece-icon\" [innerHTML]=\"pieces['bishop']\"></div>\n        <!-- <input type=\"number\" [(ngModel)]=\"bishop\"> -->\n        <select [(ngModel)]=\"bishop\" (change)=\"onChange('bishop',bishop)\" >\n            <option value=\"0\">0</option>\n            <option value=\"1\">1</option>\n            <option value=\"2\">2</option>\n            <option value=\"3\">3</option>\n            <option value=\"4\">4</option>\n          </select>\n    </div>\n    <div class=\"piece\">\n        <div>Knight</div>\n        <div class=\"piece-icon\" [innerHTML]=\"pieces['knight']\"></div>\n        <!-- <input type=\"number\" [(ngModel)]=\"knight\"> -->\n        <select [(ngModel)]=\"knight\" (change)=\"onChange('knight',knight)\">\n            <option value=\"0\">0</option>\n            <option value=\"1\">1</option>\n            <option value=\"2\">2</option>\n            <option value=\"3\">3</option>\n            <option value=\"4\">4</option>\n          </select>\n    </div>\n    <div class=\"piece\">\n        <div>Rook</div>\n        <div class=\"piece-icon\" [innerHTML]=\"pieces['rook']\"></div>\n        <!-- <input type=\"number\" [(ngModel)]=\"rook\"> -->\n        <select [(ngModel)]=\"rook\" (change)=\"onChange('rook',rook)\">\n            <option value=\"0\">0</option>\n            <option value=\"1\">1</option>\n            <option value=\"2\">2</option>\n            <option value=\"3\">3</option>\n            <option value=\"4\">4</option>\n          </select>\n    </div>\n</div>\n<div class=\"actions\">\n    <button class=\"button\" *ngIf=\"current>=3 && current<=8\" (click)=\"onAction()\">Next</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/chess/chessmen-sequence/chessmen-sequence.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/chess/chessmen-sequence/chessmen-sequence.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">Select valid moves on the chessboard </div>\n\n\n\n<div class=\"selected-chess-men\">\n  <div *ngFor=\"let piece of selectedChessMen; let i = index\" class=\"piece\" (click)=\"onChessMenIndexSelect(i)\"\n    [ngClass]=\"{selected: selectedChessMenIndex == i}\">\n    <span [innerHTML]=\"pieces[piece]\"></span>\n  </div>\n</div>\n\n<div class=\"board\">\n  <ng-container *ngFor=\"let row of boardState; let i = index\">\n    <div class=\"row\" id=\"{{i}}\">\n      <div class=\"cell\" *ngFor=\"let col of boardState[i]; let j = index\" id=\"{{i+'X'+j}}\"  [ngClass]=\"{selected: boardState[i][j].selected, 'secret' : col.isSecret}\" (click)=\"onPieceSelect(i,j)\">\n        <div [innerHTML]=\"col.value\">\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</div>\n\n<div class=\"actions\">\n  <button class=\"button\" (click)=\"onReset()\">Reset</button>\n  <button class=\"button\" (click)=\"onDone()\">Done</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/chess/login-user-info/login-user-info.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/chess/login-user-info/login-user-info.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n  <div class=\"row\">\n    <span class=\"col\">User Name</span><input class=\"col\" type=\"text\" [(ngModel)]=\"userName\" />\n  </div>\n</div>\n\n<div class=\"actions\">\n  <button class=\"button\" (click)=\"onNext()\">Next</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/chess/otp/otp.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/chess/otp/otp.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">Enter the OTP code sent to your phone</div>\n\n<div class=\"form\">\n  <div class=\"row\">\n    <span class=\"col\">OTP Code</span><input class=\"col\" type=\"text\" [(ngModel)]=\"otp\" />\n  </div>\n</div>\n\n<div class=\"actions\">\n  <button class=\"button\" (click)=\"onDone()\">Done</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/chess/secret-add/secret-add.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/chess/secret-add/secret-add.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">Choose your secret object</div>\n\n<div class=\"selection\">\n\n  <div class=\"piece\">\n    <div>Current Secret</div>\n    <select [(ngModel)]=\"secret\">\n      <option value=\"None\">None</option>\n      <option value=\"queen\">queen</option>\n      <option value=\"bishop\">bishop</option>\n      <option value=\"knight\">knight</option>\n      <option value=\"rook\">rook</option>\n    </select>\n  </div>\n\n\n</div>\n<div class=\"actions\">\n  <button class=\"button\" (click)=\"onAction()\">Next</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/chess/signup-info/signup-info.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/chess/signup-info/signup-info.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n  <div class=\"row\">\n    <span class=\"col\">User Name</span><input class=\"col\" type=\"text\" [(ngModel)]=\"userName\" />\n  </div>\n  <div class='row'>\n    <span class=\"col\">Phone Number</span><input class=\"col\" type=\"tel\" pattern=\"[0-9]{3}\" placeholder=\"+966XXXXXXX\" [(ngModel)]=\"phone\" />\n  </div>\n</div>\n\n<div class=\"actions\">\n  <button class=\"button\" (click)=\"onNext()\">Next</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <div class=\"ion-padding\">\n    The world is your oyster.\n    <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be your guide.</p> -->\n  <!-- </div> -->\n  <app-chess></app-chess>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/chess/chess.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/chess/chess.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.selected-chess-men {\n  height: 80px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.selected-chess-men .piece {\n  border: 1px solid #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  height: 70px;\n  width: 70px;\n  font-size: xx-large;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  cursor: pointer;\n}\n\n.selected-chess-men .piece.selected {\n  background-color: #c1c1c1;\n}\n\n.board {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 50%;\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  background-color: #f6f6f6f6;\n  justify-content: space-around;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.cell {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border: 1px solid #e2e2e2;\n  background-color: #fff;\n  font-size: xx-large;\n  margin: 5px;\n}\n\n.cell.even {\n  background-color: #e1e2e6;\n}\n\n.cell:hover {\n  background-color: #e2e2e2;\n  cursor: pointer;\n  -webkit-animation: background-color 3.5s ease-in-out infinite alternate;\n          animation: background-color 3.5s ease-in-out infinite alternate;\n}\n\n.logo {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n}\n\n.actions .button {\n  background-color: #ececec;\n  width: 100px;\n  height: 50px;\n  border-radius: 3px;\n  margin: 5px;\n}\n\n.back-button {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 5px;\n  margin: 12px;\n  font-size: smaller;\n}\n\n.progress {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbW9vbi9Eb2N1bWVudHMvaW9uaWNXb3Jrc3BhY2Uubm9zeW5jL2lvbmljLWZpcnN0L3NyYy9hcHAvaG9tZS9jaGVzcy9jaGVzcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9jaGVzcy9jaGVzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0FKOztBREVJO0VBQ0ksc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7QUNBUjs7QURHUTtFQUNJLHlCQUFBO0FDRFo7O0FETUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxXQUFBO0FDSEo7O0FETUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDSEo7O0FETUE7RUFJSSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUNQSjs7QURTSTtFQUNJLHlCQUFBO0FDUFI7O0FEVUk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFFQSx1RUFBQTtVQUFBLCtEQUFBO0FDVFI7O0FEaUJBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ2RKOztBRGlCQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxXQUFBO0FDZEo7O0FEZ0JJO0VBQ0kseUJBQUE7RUFDUixZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ2RBOztBRGtCQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0osa0JBQUE7QUNmQTs7QURvQkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsV0FBQTtBQ2pCSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2hlc3MvY2hlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zZWxlY3RlZC1jaGVzcy1tZW4ge1xuICAgIGhlaWdodDogODBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAucGllY2Uge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xuICAgICAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuXG4gICAgICAgICYuc2VsZWN0ZWR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYm9hcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDUwJTtcbn1cblxuLnJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjZmNjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBmbGV4OjE7XG59XG5cbi5jZWxsIHtcbiAgICAvLyB3aWR0aDogMTAwcHg7XG4gICAgLy8gaGVpZ2h0OiAxMDBweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZSA6IHh4LWxhcmdlO1xuXG4gICAgbWFyZ2luOiA1cHg7XG5cbiAgICAmLmV2ZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2UxZTJlNlxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmUyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgMHB4KTtcbiAgICAgICAgYW5pbWF0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIH1cbn1cblxuXG5cbi8vIGhvbWUgcGFnZVxuXG4ubG9nbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbndpZHRoOiAxMDBweDtcbmhlaWdodDogNTBweDtcbmJvcmRlci1yYWRpdXM6IDNweDtcbm1hcmdpbjogNXB4O1xuICAgIH1cbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIG1hcmdpbjogMTJweDtcbmZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuLy8gY29tbW9uXG5cbi5wcm9ncmVzcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn0iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc2VsZWN0ZWQtY2hlc3MtbWVuIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zZWxlY3RlZC1jaGVzcy1tZW4gLnBpZWNlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4IDVweDtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2VsZWN0ZWQtY2hlc3MtbWVuIC5waWVjZS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWMxYzE7XG59XG5cbi5ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogNTAlO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNmY2O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleDogMTtcbn1cblxuLmNlbGwge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgbWFyZ2luOiA1cHg7XG59XG4uY2VsbC5ldmVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTJlNjtcbn1cbi5jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbmltYXRpb246IGJhY2tncm91bmQtY29sb3IgMy41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFjdGlvbnMgLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uYmFjay1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDVweDtcbiAgbWFyZ2luOiAxMnB4O1xuICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbi5wcm9ncmVzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/chess/chess.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/chess/chess.component.ts ***!
  \***********************************************/
/*! exports provided: ChessComponent, Mode, Pieces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessComponent", function() { return ChessComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mode", function() { return Mode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pieces", function() { return Pieces; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chess_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/chess.service */ "./src/app/home/chess/services/chess.service.ts");



var ChessComponent = /** @class */ (function () {
    function ChessComponent(chessService) {
        this.chessService = chessService;
        this.mode = Mode.FOUR;
        this.action = 'home';
        this.view = 'home';
        // action = 'login'
        // view = 'login_otp'
        this.pieces = Pieces;
        this.progress = false;
        this.selectedChessmen = [];
        this.userInfo = null;
        //
        this.singup = {
            userName: 'XXXXX',
            phone: 'XXXXXXX',
            chessSize: 4,
            chessCode: [],
            secret: 'None'
        };
        this.login = {
            userName: 'XXXXX',
            sequenceCode: [],
            otpCode: 0
        };
        this.boardState = null;
        this.actions = {
            home: 0,
            signup_info: 1,
            signup_chessMenSelect: 2,
            signup_chessMenAddToBoard: 3,
            signup_addSecreteObject: 4,
            login_info: 1,
            login_chessmenSequence: 2
        };
        // services for sign up
        // taken
        this.selectedChessMenIndex = 1000;
    }
    ChessComponent.prototype.ngOnInit = function () { };
    // events // taken
    ChessComponent.prototype.onChessmenSelected = function ($event) {
        this.selectedChessmen = $event;
        this.onAction('signup_chessMenAddToBoard');
    };
    ChessComponent.prototype.onChessmenAdded = function ($event) {
        this.singup.chessCode = $event;
        this.onAction('signup_addSecreteObject');
        //this.progress = true
        // this.chessService.signupNewUser(this.singup).subscribe( (res : any) => {
        //   console.log(res)
        //   this.progress = false
        //   console.log(res)
        //   if(res.success){
        //     alert("You have been registered :)")
        //     this.onAction('home')
        //   }else {
        //     alert("Signup failed.")
        //   }
        // })
    };
    ChessComponent.prototype.onSelectedSecrete = function ($event) {
        var _this = this;
        this.singup.secret = $event == 'None' ? null : $event;
        this.progress = true;
        this.chessService.signupNewUser(this.singup).subscribe(function (res) {
            console.log(res);
            _this.progress = false;
            console.log(res);
            if (res.success) {
                alert("You have been registered :)");
                _this.onAction('home');
            }
            else {
                alert("Signup failed.");
            }
        });
    };
    ChessComponent.prototype.onUserInfo = function ($event) {
        var _this = this;
        this.progress = true;
        this.chessService.validateUserName($event.userName).subscribe(function (res) {
            _this.progress = false;
            if (!res.success) {
                console.log("USER_INFO: ", $event);
                _this.singup.userName = $event.userName;
                _this.singup.phone = $event.phone;
                _this.onAction('signup_chessMenSelect');
            }
            else {
                alert("User is already registred");
            }
        });
    };
    ChessComponent.prototype.onLoginUserInfo = function ($event) {
        var _this = this;
        this.progress = true;
        this.chessService.getUserChessmen($event.userName).subscribe(function (res) {
            _this.progress = false;
            if (res.success) {
                console.log("chessmen of user : ", res.body);
                _this.loginChessState = res.body[0];
                _this.login.userName = $event.userName;
                _this.onAction('login_chessmenSequence');
            }
            else {
                alert("user name is not found.");
            }
        });
    };
    ChessComponent.prototype.onLoginChessCode = function ($event) {
        var _this = this;
        console.log("onLoginChessCode: ", $event);
        this.progress = true;
        this.login.sequenceCode = $event;
        this.chessService.validateUserSequence(this.login).subscribe(function (res) {
            _this.progress = false;
            if (res.success) {
                _this.onAction('login_otp');
            }
            else {
                alert(res.message);
            }
        });
    };
    ChessComponent.prototype.onLoginOtpCode = function ($event) {
        var _this = this;
        console.log("onLoginOtpCode: ", $event);
        this.progress = true;
        this.login.otpCode = $event;
        this.chessService.validateUserOtp(this.login).subscribe(function (res) {
            _this.progress = false;
            if (res.success) {
                _this.onAction('protected');
            }
            else {
                alert("OTP code is not correct!");
            }
        });
    };
    // might be moved to service 
    ChessComponent.prototype.onAction = function (action) {
        console.log("AC:", action);
        switch (action) {
            case 'protected': {
                this.action = 'protected';
                this.view = 'protected';
                break;
            }
            case 'signup': {
                this.action = 'signup';
                this.view = 'signup_info';
                break;
            }
            case 'login': {
                this.action = 'login';
                this.view = 'login_info';
                break;
            }
            case 'login_chessmenSequence': {
                this.view = 'login_chessmenSequence';
                break;
            }
            case 'login_otp': {
                this.view = "login_otp";
                break;
            }
            case 'signup_chessMenSelect': {
                this.view = 'signup_chessMenSelect';
                break;
            }
            case 'signup_addSecreteObject': {
                this.view = 'signup_addSecreteObject';
                break;
            }
            case 'signup_chessMenAddToBoard': {
                this.view = 'signup_chessMenAddToBoard';
                break;
            }
            default: {
                this.view = '';
                this.action = '';
                break;
            }
        }
    };
    // tkane
    ChessComponent.prototype.onChessMenIndexSelect = function (index) {
        if (this.selectedChessMenIndex != index) {
            this.selectedChessMenIndex = index;
        }
        else {
            this.selectedChessMenIndex = 1000;
        }
    };
    ChessComponent.ctorParameters = function () { return [
        { type: _services_chess_service__WEBPACK_IMPORTED_MODULE_2__["ChessService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChessComponent.prototype, "mode", void 0);
    ChessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chess',
            template: __webpack_require__(/*! raw-loader!./chess.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/chess/chess.component.html"),
            styles: [__webpack_require__(/*! ./chess.component.scss */ "./src/app/home/chess/chess.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chess_service__WEBPACK_IMPORTED_MODULE_2__["ChessService"]])
    ], ChessComponent);
    return ChessComponent;
}());

var Mode;
(function (Mode) {
    Mode[Mode["FOUR"] = 4] = "FOUR";
    Mode[Mode["EIGHT"] = 8] = "EIGHT";
})(Mode || (Mode = {}));
var Pieces;
(function (Pieces) {
    Pieces["queen"] = "&#9813;";
    Pieces["bishop"] = "&#9815;";
    Pieces["knight"] = "&#9816;";
    Pieces["rook"] = "&#9814;";
})(Pieces || (Pieces = {}));


/***/ }),

/***/ "./src/app/home/chess/chessmen-add/chessmen-add.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/chess/chessmen-add/chessmen-add.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.selected-chess-men {\n  max-height: 100px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  flex-wrap: wrap;\n  display: flex;\n  align-items: center;\n}\n\n.selected-chess-men .piece {\n  border: 1px solid #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  height: 50px;\n  width: 50px;\n  font-size: xx-large;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  cursor: pointer;\n}\n\n.selected-chess-men .piece.selected {\n  background-color: #c1c1c1;\n}\n\n.board {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 50%;\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  background-color: #f6f6f6f6;\n  justify-content: space-around;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.title {\n  width: 100%;\n  text-align: left;\n  font-size: large;\n  font-weight: 600;\n  padding-bottom: 40px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.cell {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border: 1px solid #e2e2e2;\n  background-color: #fff;\n  font-size: xx-large;\n  position: relative;\n  margin: 5px;\n}\n\n.cell.even {\n  background-color: #e1e2e6;\n}\n\n.cell:hover {\n  cursor: pointer;\n  -webkit-animation: background-color 3.5s ease-in-out infinite alternate;\n          animation: background-color 3.5s ease-in-out infinite alternate;\n}\n\n.cell .order {\n  position: absolute;\n  right: 5px;\n  top: 0px;\n  font-size: small;\n}\n\n.actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n}\n\n.actions .button {\n  background-color: #ececec;\n  width: 100px;\n  height: 50px;\n  border-radius: 3px;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbW9vbi9Eb2N1bWVudHMvaW9uaWNXb3Jrc3BhY2Uubm9zeW5jL2lvbmljLWZpcnN0L3NyYy9hcHAvaG9tZS9jaGVzcy9jaGVzc21lbi1hZGQvY2hlc3NtZW4tYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2NoZXNzL2NoZXNzbWVuLWFkZC9jaGVzc21lbi1hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBRUosV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNEQTs7QURJSTtFQUNJLHNCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxlQUFBO0FDRlI7O0FES1E7RUFDSSx5QkFBQTtBQ0haOztBRFFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsV0FBQTtBQ0xKOztBRFFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ0xKOztBRFFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0osd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNMQTs7QURRQTtFQUlJLG1CQUFBO1VBQUEsT0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0FDVEo7O0FEV0k7RUFDSSx5QkFBQTtBQ1RSOztBRFlJO0VBRUksZUFBQTtFQUVBLHVFQUFBO1VBQUEsK0RBQUE7QUNaUjs7QURlSTtFQUNJLGtCQUFBO0VBQ1IsVUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ2JBOztBRG1CQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxXQUFBO0FDaEJKOztBRGtCSTtFQUNJLHlCQUFBO0VBQ1IsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNoQkEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NoZXNzL2NoZXNzbWVuLWFkZC9jaGVzc21lbi1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zZWxlY3RlZC1jaGVzcy1tZW4ge1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxud2lkdGg6IDEwMCU7XG5mbGV4LXdyYXA6IHdyYXA7XG5kaXNwbGF5OiBmbGV4O1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXG4gICAgLnBpZWNlIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMHB4IDVweDtcbiAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cblxuICAgICAgICAmLnNlbGVjdGVke1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJvYXJkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiA1MCU7XG59XG5cbi5yb3d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2ZjY7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZmxleDoxO1xufVxuXG4udGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jZWxsIHtcbiAgICAvLyB3aWR0aDogMTAwcHg7XG4gICAgLy8gaGVpZ2h0OiAxMDBweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZSA6IHh4LWxhcmdlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIG1hcmdpbjogNXB4O1xuXG4gICAgJi5ldmVuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICNlMWUyZTZcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDBweCk7XG4gICAgICAgIGFuaW1hdGlvbjogYmFja2dyb3VuZC1jb2xvciAzLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICB9XG5cbiAgICAub3JkZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5yaWdodDogNXB4O1xudG9wOiAwcHg7XG5mb250LXNpemU6IHNtYWxsO1xuXG4gICAgfVxufVxuXG5cbi5hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG53aWR0aDogMTAwcHg7XG5oZWlnaHQ6IDUwcHg7XG5ib3JkZXItcmFkaXVzOiAzcHg7XG5tYXJnaW4gOiA1cHg7XG4gICAgfVxufSIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zZWxlY3RlZC1jaGVzcy1tZW4ge1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2VsZWN0ZWQtY2hlc3MtbWVuIC5waWVjZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNlbGVjdGVkLWNoZXNzLW1lbiAucGllY2Uuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxO1xufVxuXG4uYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDUwJTtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjZmNjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXg6IDE7XG59XG5cbi50aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jZWxsIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmUyZTI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA1cHg7XG59XG4uY2VsbC5ldmVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTJlNjtcbn1cbi5jZWxsOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbmltYXRpb246IGJhY2tncm91bmQtY29sb3IgMy41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4uY2VsbCAub3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogMHB4O1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5hY3Rpb25zIC5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW46IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/chess/chessmen-add/chessmen-add.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/chess/chessmen-add/chessmen-add.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChessmenAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessmenAddComponent", function() { return ChessmenAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chess_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chess.component */ "./src/app/home/chess/chess.component.ts");



var ChessmenAddComponent = /** @class */ (function () {
    function ChessmenAddComponent() {
        this.selectedChessMen = [];
        this.mode = _chess_component__WEBPACK_IMPORTED_MODULE_2__["Mode"].FOUR;
        this.chessmenAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initSelectedChessmen = [];
        this.pieces = _chess_component__WEBPACK_IMPORTED_MODULE_2__["Pieces"];
        this.largeValue = 1000;
        this.selectedChessMenIndex = this.largeValue;
        this.boardState = null;
        this.currentSelected = [];
    }
    ChessmenAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.boardState = Array(this.mode).fill('Row').map(function (x) { return Array(_this.mode).fill({ value: '', selected: false }); });
        this.initSelectedChessmen = this.selectedChessMen;
    };
    ChessmenAddComponent.prototype.onReset = function () {
        var _this = this;
        this.selectedChessMen = this.initSelectedChessmen;
        this.boardState = Array(this.mode).fill('Row').map(function (x) { return Array(_this.mode).fill({ value: '', selected: false }); });
    };
    ChessmenAddComponent.prototype.onDone = function () {
        this.chessmenAdded.emit(this.currentSelected);
    };
    ChessmenAddComponent.prototype.onChessMenIndexSelect = function (index) {
        if (this.selectedChessMenIndex != index) {
            this.selectedChessMenIndex = index;
        }
        else {
            this.selectedChessMenIndex = 1000;
        }
    };
    ChessmenAddComponent.prototype.onPieceSelect = function (i, j, type) {
        alert("hello");
    };
    ChessmenAddComponent.prototype.onPieceAdd = function (i, j) {
        var _this = this;
        if (this.selectedChessMenIndex == this.largeValue) {
            this.boardState[i][j] = { value: this.currentSelected[0], selected: false };
        }
        else {
            this.boardState[i][j] = { value: this.selectedChessMen[this.selectedChessMenIndex], selected: false, order: (this.initSelectedChessmen.length - this.selectedChessMen.length) + 1 };
            this.currentSelected.push({ x: i, y: j, chessman: this.selectedChessMen[this.selectedChessMenIndex], order: (this.initSelectedChessmen.length - this.selectedChessMen.length) + 1 });
            this.selectedChessMen = this.selectedChessMen.filter(function (_, index) { return index != _this.selectedChessMenIndex; });
            this.selectedChessMenIndex = this.largeValue;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChessmenAddComponent.prototype, "selectedChessMen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChessmenAddComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChessmenAddComponent.prototype, "chessmenAdded", void 0);
    ChessmenAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chessmen-add',
            template: __webpack_require__(/*! raw-loader!./chessmen-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/chess/chessmen-add/chessmen-add.component.html"),
            styles: [__webpack_require__(/*! ./chessmen-add.component.scss */ "./src/app/home/chess/chessmen-add/chessmen-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChessmenAddComponent);
    return ChessmenAddComponent;
}());



/***/ }),

/***/ "./src/app/home/chess/chessmen-select/chessmen-select.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/home/chess/chessmen-select/chessmen-select.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  width: 100%;\n  text-align: left;\n  font-size: large;\n  font-weight: 600;\n  padding-bottom: 40px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.piece {\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.piece .piece-icon {\n  font-size: x-large;\n}\n\n.selection {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n}\n\n.actions .button {\n  background-color: #ececec;\n  width: 100px;\n  height: 50px;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbW9vbi9Eb2N1bWVudHMvaW9uaWNXb3Jrc3BhY2Uubm9zeW5jL2lvbmljLWZpcnN0L3NyYy9hcHAvaG9tZS9jaGVzcy9jaGVzc21lbi1zZWxlY3QvY2hlc3NtZW4tc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2NoZXNzL2NoZXNzbWVuLXNlbGVjdC9jaGVzc21lbi1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDSix3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0RBOztBRElBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNKLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNEQTs7QURHSTtFQUNJLGtCQUFBO0FDRFI7O0FES0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNGSjs7QURLQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxXQUFBO0FDRko7O0FESUk7RUFDSSx5QkFBQTtFQUNSLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNGQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2hlc3MvY2hlc3NtZW4tc2VsZWN0L2NoZXNzbWVuLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4udGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5waWVjZSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAucGllY2UtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTs7XG4gICAgfVxufVxuXG4uc2VsZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG53aWR0aDogMTAwcHg7XG5oZWlnaHQ6IDUwcHg7XG5ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxufSIsIi50aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5waWVjZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGllY2UgLnBpZWNlLWljb24ge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbi5zZWxlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5hY3Rpb25zIC5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/chess/chessmen-select/chessmen-select.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home/chess/chessmen-select/chessmen-select.component.ts ***!
  \*************************************************************************/
/*! exports provided: ChessmenSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessmenSelectComponent", function() { return ChessmenSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chess_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chess.component */ "./src/app/home/chess/chess.component.ts");



var ChessmenSelectComponent = /** @class */ (function () {
    function ChessmenSelectComponent() {
        this.pieces = _chess_component__WEBPACK_IMPORTED_MODULE_2__["Pieces"];
        this.knight = 0;
        this.queen = 0;
        this.bishop = 0;
        this.rook = 0;
        this.max = 8;
        this.min = 3;
        this.current = 0;
        this.current_knight = 0;
        this.current_queen = 0;
        this.current_bishop = 0;
        this.current_rook = 0;
        this.chessmen = [];
        this.chessmenSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ChessmenSelectComponent.prototype.ngOnInit = function () {
    };
    ChessmenSelectComponent.prototype.onAction = function () {
        console.log(this.knight, this.bishop, this.queen, this.rook);
        if (this.knight == 0 && this.bishop == 0 && this.queen == 0 && this.rook == 0) {
            alert("Please select at least one chessman");
            return;
        }
        else if (this.current > 8 && this.current < 3) {
            alert("You must select between 3 to 8 chessman");
        }
        else {
            console.log("Knight :", this.knight);
            for (var index = 0; index < this.knight; index++) {
                this.chessmen.push('knight');
            }
            for (var index = 0; index < this.queen; index++) {
                this.chessmen.push('queen');
            }
            for (var index = 0; index < this.bishop; index++) {
                this.chessmen.push('bishop');
            }
            for (var index = 0; index < this.rook; index++) {
                this.chessmen.push('rook');
            }
            this.chessmenSelected.emit(this.chessmen);
        }
    };
    ChessmenSelectComponent.prototype.onChange = function (type, value) {
        switch (type) {
            case 'knight':
                this.current_knight = value;
                break;
            case 'rook':
                this.current_rook = value;
                break;
            case 'queen':
                this.current_queen = value;
                break;
            case 'bishop':
                this.current_bishop = value;
                break;
        }
        this.current = Number(this.current_queen) + Number(this.current_bishop) + Number(this.current_knight) + Number(this.current_rook);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChessmenSelectComponent.prototype, "chessmenSelected", void 0);
    ChessmenSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chessmen-select',
            template: __webpack_require__(/*! raw-loader!./chessmen-select.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/chess/chessmen-select/chessmen-select.component.html"),
            styles: [__webpack_require__(/*! ./chessmen-select.component.scss */ "./src/app/home/chess/chessmen-select/chessmen-select.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChessmenSelectComponent);
    return ChessmenSelectComponent;
}());



/***/ }),

/***/ "./src/app/home/chess/chessmen-sequence/chessmen-sequence.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/home/chess/chessmen-sequence/chessmen-sequence.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.selected-chess-men {\n  height: 80px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  flex-wrap: wrap;\n  display: flex;\n  align-items: center;\n}\n\n.selected-chess-men .piece {\n  border: 1px solid #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0px 5px;\n  margin: 0px 5px;\n  height: 70px;\n  width: 70px;\n  font-size: xx-large;\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  cursor: pointer;\n}\n\n.selected-chess-men .piece.selected {\n  background-color: #c1c1c1;\n}\n\n.board {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 50%;\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  background-color: #f6f6f6f6;\n  justify-content: space-around;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.title {\n  width: 100%;\n  text-align: left;\n  font-size: large;\n  font-weight: 600;\n  padding-bottom: 40px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.cell {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border: 1px solid #e2e2e2;\n  background-color: #fff;\n  font-size: xx-large;\n  position: relative;\n  margin: 5px;\n}\n\n.cell.even {\n  background-color: #e1e2e6;\n}\n\n.cell:hover {\n  cursor: pointer;\n  -webkit-animation: background-color 3.5s ease-in-out infinite alternate;\n          animation: background-color 3.5s ease-in-out infinite alternate;\n}\n\n.cell.selected {\n  background-color: #e1e2e6;\n}\n\n.cell.secret {\n  color: red;\n}\n\n.cell .order {\n  position: absolute;\n  right: 5px;\n  top: 0px;\n  font-size: small;\n}\n\n.actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n}\n\n.actions .button {\n  background-color: #ececec;\n  width: 100px;\n  height: 50px;\n  border-radius: 3px;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbW9vbi9Eb2N1bWVudHMvaW9uaWNXb3Jrc3BhY2Uubm9zeW5jL2lvbmljLWZpcnN0L3NyYy9hcHAvaG9tZS9jaGVzcy9jaGVzc21lbi1zZXF1ZW5jZS9jaGVzc21lbi1zZXF1ZW5jZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9jaGVzcy9jaGVzc21lbi1zZXF1ZW5jZS9jaGVzc21lbi1zZXF1ZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUVKLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDREE7O0FESUk7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtBQ0ZSOztBREtRO0VBQ0kseUJBQUE7QUNIWjs7QURRQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFdBQUE7QUNMSjs7QURRQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNMSjs7QURRQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNKLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDTEE7O0FEUUE7RUFJSSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtBQ1RKOztBRFdJO0VBQ0kseUJBQUE7QUNUUjs7QURZSTtFQUVJLGVBQUE7RUFFQSx1RUFBQTtVQUFBLCtEQUFBO0FDWlI7O0FEZUk7RUFDSSx5QkFBQTtBQ2JSOztBRGVJO0VBQ0ksVUFBQTtBQ2JSOztBRGdCSTtFQUNJLGtCQUFBO0VBQ1IsVUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ2RBOztBRG9CQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxXQUFBO0FDakJKOztBRG1CSTtFQUNJLHlCQUFBO0VBQ1IsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNqQkEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NoZXNzL2NoZXNzbWVuLXNlcXVlbmNlL2NoZXNzbWVuLXNlcXVlbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc2VsZWN0ZWQtY2hlc3MtbWVuIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG53aWR0aDogMTAwJTtcbmZsZXgtd3JhcDogd3JhcDtcbmRpc3BsYXk6IGZsZXg7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuXG5cbiAgICAucGllY2Uge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xuICAgICAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuXG4gICAgICAgICYuc2VsZWN0ZWR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjMWMxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYm9hcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDUwJTtcbn1cblxuLnJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjZmNjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBmbGV4OjE7XG59XG5cbi50aXRsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNlbGwge1xuICAgIC8vIHdpZHRoOiAxMDBweDtcbiAgICAvLyBoZWlnaHQ6IDEwMHB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlMmUyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplIDogeHgtbGFyZ2U7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgbWFyZ2luOiA1cHg7XG5cbiAgICAmLmV2ZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogI2UxZTJlNlxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmUyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgMHB4KTtcbiAgICAgICAgYW5pbWF0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIH1cblxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMmU2O1xuICAgIH1cbiAgICAmLnNlY3JldCB7XG4gICAgICAgIGNvbG9yOiByZWRcbiAgICB9XG5cbiAgICAub3JkZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5yaWdodDogNXB4O1xudG9wOiAwcHg7XG5mb250LXNpemU6IHNtYWxsO1xuXG4gICAgfVxufVxuXG5cbi5hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG53aWR0aDogMTAwcHg7XG5oZWlnaHQ6IDUwcHg7XG5ib3JkZXItcmFkaXVzOiAzcHg7XG5tYXJnaW4gOiA1cHg7XG4gICAgfVxufSIsIi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zZWxlY3RlZC1jaGVzcy1tZW4ge1xuICBoZWlnaHQ6IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlbGVjdGVkLWNoZXNzLW1lbiAucGllY2Uge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZWxlY3RlZC1jaGVzcy1tZW4gLnBpZWNlLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzFjMTtcbn1cblxuLmJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2ZjY7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4OiAxO1xufVxuXG4udGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2VsbCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlMmUyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogNXB4O1xufVxuLmNlbGwuZXZlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWUyZTY7XG59XG4uY2VsbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYW5pbWF0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLmNlbGwuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMmU2O1xufVxuLmNlbGwuc2VjcmV0IHtcbiAgY29sb3I6IHJlZDtcbn1cbi5jZWxsIC5vcmRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiAwcHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFjdGlvbnMgLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbjogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/chess/chessmen-sequence/chessmen-sequence.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home/chess/chessmen-sequence/chessmen-sequence.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ChessmenSequenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessmenSequenceComponent", function() { return ChessmenSequenceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChessmenSequenceComponent = /** @class */ (function () {
    function ChessmenSequenceComponent() {
        //
        this.selectedValidChessmen = [];
        this.selectChessmen = 0;
        this.code = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.boardState = null;
    }
    Object.defineProperty(ChessmenSequenceComponent.prototype, "setLoginChess", {
        set: function (login) {
            var _this = this;
            console.log("Login:", login);
            this.mode = login.chessSize;
            this.boardState = Array(this.mode).fill('Row').map(function (x) { return Array(_this.mode).fill({ value: '', selected: false }); });
            login.chessCode.forEach(function (code) {
                _this.onPieceAdd(code.x, code.y, code.isSecret);
            });
        },
        enumerable: true,
        configurable: true
    });
    ChessmenSequenceComponent.prototype.ngOnInit = function () {
    };
    ChessmenSequenceComponent.prototype.onReset = function () {
        this.selectChessmen = 0;
        this.boardState = this.boardState.map(function (row) {
            return row.map(function (col) {
                if (col.selected) {
                    return { value: '', selected: false };
                }
                else {
                    return col;
                }
            });
        });
    };
    ChessmenSequenceComponent.prototype.onDone = function () {
        var providedCode = [];
        this.boardState.map(function (row, i) {
            return row.map(function (col, j) {
                if (col && col.selected) {
                    providedCode.push({ order: col.order, newMove: { x: i, y: j } });
                }
            });
        });
        providedCode.sort(function (a, b) { return a.order - b.order; });
        this.code.emit(providedCode);
    };
    ChessmenSequenceComponent.prototype.onPieceSelect = function (i, j) {
        if (this.boardState[i][j].value != '&#9679;') {
            this.boardState[i][j] = { order: this.selectChessmen, value: "", selected: true };
            this.selectChessmen++;
        }
    };
    ChessmenSequenceComponent.prototype.onPieceAdd = function (i, j, isSecret) {
        this.boardState[i][j] = { value: '&#9679;', selected: false, isSecret: isSecret };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('loginChess'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ChessmenSequenceComponent.prototype, "setLoginChess", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChessmenSequenceComponent.prototype, "code", void 0);
    ChessmenSequenceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chessmen-sequence',
            template: __webpack_require__(/*! raw-loader!./chessmen-sequence.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/chess/chessmen-sequence/chessmen-sequence.component.html"),
            styles: [__webpack_require__(/*! ./chessmen-sequence.component.scss */ "./src/app/home/chess/chessmen-sequence/chessmen-sequence.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChessmenSequenceComponent);
    return ChessmenSequenceComponent;
}());



/***/ }),

/***/ "./src/app/home/chess/login-user-info/login-user-info.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/home/chess/login-user-info/login-user-info.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 50%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 0px 50px;\n}\n\n.row .col {\n  -webkit-box-flex: 0.5;\n          flex: 0.5;\n}\n\n.actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n}\n\n.actions .button {\n  background-color: #ececec;\n  width: 100px;\n  height: 50px;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbW9vbi9Eb2N1bWVudHMvaW9uaWNXb3Jrc3BhY2Uubm9zeW5jL2lvbmljLWZpcnN0L3NyYy9hcHAvaG9tZS9jaGVzcy9sb2dpbi11c2VyLWluZm8vbG9naW4tdXNlci1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2NoZXNzL2xvZ2luLXVzZXItaW5mby9sb2dpbi11c2VyLWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBSjs7QURHQTtFQUVJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElJO0VBQ0kscUJBQUE7VUFBQSxTQUFBO0FDRlI7O0FET0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsV0FBQTtBQ0pKOztBRE1JO0VBQ0kseUJBQUE7RUFDUixZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSkEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NoZXNzL2xvZ2luLXVzZXItaW5mby9sb2dpbi11c2VyLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJvdyB7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwcHggNTBweDtcblxuXG4gICAgLmNvbCB7XG4gICAgICAgIGZsZXg6IC41O1xuICAgIH1cblxufVxuXG4uYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xud2lkdGg6IDEwMHB4O1xuaGVpZ2h0OiA1MHB4O1xuYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbn0iLCIuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDUwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4IDUwcHg7XG59XG4ucm93IC5jb2wge1xuICBmbGV4OiAwLjU7XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFjdGlvbnMgLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/chess/login-user-info/login-user-info.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home/chess/login-user-info/login-user-info.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoginUserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUserInfoComponent", function() { return LoginUserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginUserInfoComponent = /** @class */ (function () {
    function LoginUserInfoComponent() {
        this.userName = "";
        this.loginUserInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    LoginUserInfoComponent.prototype.ngOnInit = function () { };
    LoginUserInfoComponent.prototype.onNext = function () {
        if (this.userName.length == 0) {
            alert("Please enter username");
        }
        else {
            this.loginUserInfo.emit({ userName: this.userName });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginUserInfoComponent.prototype, "loginUserInfo", void 0);
    LoginUserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-user-info',
            template: __webpack_require__(/*! raw-loader!./login-user-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/chess/login-user-info/login-user-info.component.html"),
            styles: [__webpack_require__(/*! ./login-user-info.component.scss */ "./src/app/home/chess/login-user-info/login-user-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginUserInfoComponent);
    return LoginUserInfoComponent;
}());



/***/ }),

/***/ "./src/app/home/chess/otp/otp.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/chess/otp/otp.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  width: 100%;\n  text-align: left;\n  font-size: large;\n  font-weight: 600;\n  padding-bottom: 40px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 50%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 0px 50px;\n}\n\n.row .col {\n  -webkit-box-flex: 0.5;\n          flex: 0.5;\n}\n\n.actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n}\n\n.actions .button {\n  background-color: #ececec;\n  width: 100px;\n  height: 50px;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbW9vbi9Eb2N1bWVudHMvaW9uaWNXb3Jrc3BhY2Uubm9zeW5jL2lvbmljLWZpcnN0L3NyYy9hcHAvaG9tZS9jaGVzcy9vdHAvb3RwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2NoZXNzL290cC9vdHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDSix3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0hBOztBRE1BO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSEo7O0FETUE7RUFFSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsaUJBQUE7QUNKSjs7QURPSTtFQUNJLHFCQUFBO1VBQUEsU0FBQTtBQ0xSOztBRFVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLFdBQUE7QUNQSjs7QURTSTtFQUNJLHlCQUFBO0VBQ1IsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1BBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jaGVzcy9vdHAvb3RwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG4udGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJvdyB7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwcHggNTBweDtcblxuXG4gICAgLmNvbCB7XG4gICAgICAgIGZsZXg6IC41O1xuICAgIH1cblxufVxuXG4uYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xud2lkdGg6IDEwMHB4O1xuaGVpZ2h0OiA1MHB4O1xuYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbn0iLCIudGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDUwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4IDUwcHg7XG59XG4ucm93IC5jb2wge1xuICBmbGV4OiAwLjU7XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFjdGlvbnMgLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/chess/otp/otp.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/chess/otp/otp.component.ts ***!
  \*************************************************/
/*! exports provided: OtpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpComponent", function() { return OtpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OtpComponent = /** @class */ (function () {
    function OtpComponent() {
        this.otp = "";
        this.loginOtpCode = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    OtpComponent.prototype.ngOnInit = function () { };
    OtpComponent.prototype.onDone = function () {
        if (this.otp.length == 0) {
            alert("Please enter the OTP code");
        }
        else {
            this.loginOtpCode.emit(this.otp);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OtpComponent.prototype, "loginOtpCode", void 0);
    OtpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-otp',
            template: __webpack_require__(/*! raw-loader!./otp.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/chess/otp/otp.component.html"),
            styles: [__webpack_require__(/*! ./otp.component.scss */ "./src/app/home/chess/otp/otp.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OtpComponent);
    return OtpComponent;
}());



/***/ }),

/***/ "./src/app/home/chess/secret-add/secret-add.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/home/chess/secret-add/secret-add.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  width: 100%;\n  text-align: left;\n  font-size: large;\n  font-weight: 600;\n  padding-bottom: 40px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.piece {\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.piece .piece-icon {\n  font-size: x-large;\n}\n\n.selection {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n}\n\n.actions .button {\n  background-color: #ececec;\n  width: 100px;\n  height: 50px;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbW9vbi9Eb2N1bWVudHMvaW9uaWNXb3Jrc3BhY2Uubm9zeW5jL2lvbmljLWZpcnN0L3NyYy9hcHAvaG9tZS9jaGVzcy9zZWNyZXQtYWRkL3NlY3JldC1hZGQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvY2hlc3Mvc2VjcmV0LWFkZC9zZWNyZXQtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0osd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNEQTs7QURJQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDSiw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDREE7O0FER0k7RUFDSSxrQkFBQTtBQ0RSOztBREtBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDRko7O0FES0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBRElJO0VBQ0kseUJBQUE7RUFDUixZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRkEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NoZXNzL3NlY3JldC1hZGQvc2VjcmV0LWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4udGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5waWVjZSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAucGllY2UtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTs7XG4gICAgfVxufVxuXG4uc2VsZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG53aWR0aDogMTAwcHg7XG5oZWlnaHQ6IDUwcHg7XG5ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxufSIsIi50aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5waWVjZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGllY2UgLnBpZWNlLWljb24ge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cbi5zZWxlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5hY3Rpb25zIC5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/chess/secret-add/secret-add.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/chess/secret-add/secret-add.component.ts ***!
  \***************************************************************/
/*! exports provided: SecretAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretAddComponent", function() { return SecretAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chess_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chess.component */ "./src/app/home/chess/chess.component.ts");



var SecretAddComponent = /** @class */ (function () {
    function SecretAddComponent() {
        this.pieces = _chess_component__WEBPACK_IMPORTED_MODULE_2__["Pieces"];
        this.selectedSecret = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.secret = "None";
    }
    SecretAddComponent.prototype.ngOnInit = function () { };
    SecretAddComponent.prototype.onChange = function (type, value) {
        // switch (type) {
        //   case 'knight':
        //     this.current_knight = value
        //     break;
        //   case 'rook':
        //     this.current_rook = value
        //     break;
        //   case 'queen':
        //     this.current_queen = value
        //     break;
        //   case 'bishop':
        //     this.current_bishop = value
        //     break;
        // }
        // this.current = Number(this.current_queen) + Number(this.current_bishop) + Number(this.current_knight) + Number(this.current_rook)
    };
    SecretAddComponent.prototype.onAction = function () {
        this.selectedSecret.emit(this.secret);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SecretAddComponent.prototype, "selectedSecret", void 0);
    SecretAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-secret-add',
            template: __webpack_require__(/*! raw-loader!./secret-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/chess/secret-add/secret-add.component.html"),
            styles: [__webpack_require__(/*! ./secret-add.component.scss */ "./src/app/home/chess/secret-add/secret-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SecretAddComponent);
    return SecretAddComponent;
}());



/***/ }),

/***/ "./src/app/home/chess/services/chess.service.ts":
/*!******************************************************!*\
  !*** ./src/app/home/chess/services/chess.service.ts ***!
  \******************************************************/
/*! exports provided: ChessService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessService", function() { return ChessService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var ChessService = /** @class */ (function () {
    function ChessService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.SINGUP_NEW_USER = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + "/users/signup";
        this.GET_USER_CHESSMEN = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + "/users/get";
        this.VALIDATE_USER_SEQUENCE = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + "/users/validate/sequence";
        this.VALIDATE_USER_OTP = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + "/users/validate/otp";
        this.VALIDATE_USER_NAME = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + "/users/validate";
    }
    ChessService.prototype.signupNewUser = function (data) {
        return this.http
            .post(this.SINGUP_NEW_USER, data, this.httpOptions);
    };
    ChessService.prototype.validateUserSequence = function (data) {
        return this.http
            .post(this.VALIDATE_USER_SEQUENCE, data, this.httpOptions);
    };
    ChessService.prototype.validateUserOtp = function (data) {
        return this.http
            .post(this.VALIDATE_USER_OTP, data, this.httpOptions);
    };
    ChessService.prototype.getUserChessmen = function (userName) {
        return this.http.get(this.GET_USER_CHESSMEN + "/" + userName);
    };
    ChessService.prototype.validateUserName = function (userName) {
        return this.http.get(this.VALIDATE_USER_NAME + "/" + userName);
    };
    ChessService.prototype.ping = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + "/ping").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }));
    };
    ChessService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ChessService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ChessService);
    return ChessService;
}());



/***/ }),

/***/ "./src/app/home/chess/signup-info/signup-info.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/home/chess/signup-info/signup-info.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 50%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 0px 50px;\n}\n\n.row .col {\n  -webkit-box-flex: 0.5;\n          flex: 0.5;\n}\n\n.actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n}\n\n.actions .button {\n  background-color: #ececec;\n  width: 100px;\n  height: 50px;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbW9vbi9Eb2N1bWVudHMvaW9uaWNXb3Jrc3BhY2Uubm9zeW5jL2lvbmljLWZpcnN0L3NyYy9hcHAvaG9tZS9jaGVzcy9zaWdudXAtaW5mby9zaWdudXAtaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9jaGVzcy9zaWdudXAtaW5mby9zaWdudXAtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0FKOztBREdBO0VBRUksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUk7RUFDSSxxQkFBQTtVQUFBLFNBQUE7QUNGUjs7QURPQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxXQUFBO0FDSko7O0FETUk7RUFDSSx5QkFBQTtFQUNSLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNKQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2hlc3Mvc2lnbnVwLWluZm8vc2lnbnVwLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJvdyB7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwcHggNTBweDtcblxuXG4gICAgLmNvbCB7XG4gICAgICAgIGZsZXg6IC41O1xuICAgIH1cblxufVxuXG4uYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5idXR0b24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xud2lkdGg6IDEwMHB4O1xuaGVpZ2h0OiA1MHB4O1xuYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbn0iLCIuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDUwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4IDUwcHg7XG59XG4ucm93IC5jb2wge1xuICBmbGV4OiAwLjU7XG59XG5cbi5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFjdGlvbnMgLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/chess/signup-info/signup-info.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/chess/signup-info/signup-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: SignupInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupInfoComponent", function() { return SignupInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupInfoComponent = /** @class */ (function () {
    function SignupInfoComponent() {
        this.userName = "";
        this.phone = "";
        this.userInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SignupInfoComponent.prototype.ngOnInit = function () { };
    SignupInfoComponent.prototype.onNext = function () {
        if (this.userName.length == 0 || this.phone.length == 0) {
            alert("Please enter username and phone");
        }
        else if (!/^\+9665[0-9]{8}/.test(this.phone)) {
            alert("Please enter valid phone");
        }
        else {
            this.userInfo.emit({ userName: this.userName, phone: this.phone });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignupInfoComponent.prototype, "userInfo", void 0);
    SignupInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup-info',
            template: __webpack_require__(/*! raw-loader!./signup-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/chess/signup-info/signup-info.component.html"),
            styles: [__webpack_require__(/*! ./signup-info.component.scss */ "./src/app/home/chess/signup-info/signup-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignupInfoComponent);
    return SignupInfoComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _chess_chessmen_select_chessmen_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chess/chessmen-select/chessmen-select.component */ "./src/app/home/chess/chessmen-select/chessmen-select.component.ts");
/* harmony import */ var _chess_chess_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chess/chess.component */ "./src/app/home/chess/chess.component.ts");
/* harmony import */ var _chess_chessmen_add_chessmen_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chess/chessmen-add/chessmen-add.component */ "./src/app/home/chess/chessmen-add/chessmen-add.component.ts");
/* harmony import */ var _chess_signup_info_signup_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chess/signup-info/signup-info.component */ "./src/app/home/chess/signup-info/signup-info.component.ts");
/* harmony import */ var _chess_services_chess_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chess/services/chess.service */ "./src/app/home/chess/services/chess.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _chess_login_user_info_login_user_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chess/login-user-info/login-user-info.component */ "./src/app/home/chess/login-user-info/login-user-info.component.ts");
/* harmony import */ var _chess_chessmen_sequence_chessmen_sequence_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chess/chessmen-sequence/chessmen-sequence.component */ "./src/app/home/chess/chessmen-sequence/chessmen-sequence.component.ts");
/* harmony import */ var _chess_otp_otp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chess/otp/otp.component */ "./src/app/home/chess/otp/otp.component.ts");
/* harmony import */ var _chess_secret_add_secret_add_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./chess/secret-add/secret-add.component */ "./src/app/home/chess/secret-add/secret-add.component.ts");

















var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _chess_chess_component__WEBPACK_IMPORTED_MODULE_8__["ChessComponent"], _chess_chessmen_select_chessmen_select_component__WEBPACK_IMPORTED_MODULE_7__["ChessmenSelectComponent"], _chess_chessmen_add_chessmen_add_component__WEBPACK_IMPORTED_MODULE_9__["ChessmenAddComponent"], _chess_signup_info_signup_info_component__WEBPACK_IMPORTED_MODULE_10__["SignupInfoComponent"], _chess_login_user_info_login_user_info_component__WEBPACK_IMPORTED_MODULE_13__["LoginUserInfoComponent"], _chess_chessmen_sequence_chessmen_sequence_component__WEBPACK_IMPORTED_MODULE_14__["ChessmenSequenceComponent"], _chess_otp_otp_component__WEBPACK_IMPORTED_MODULE_15__["OtpComponent"], _chess_secret_add_secret_add_component__WEBPACK_IMPORTED_MODULE_16__["SecretAddComponent"]],
            providers: [_chess_services_chess_service__WEBPACK_IMPORTED_MODULE_11__["ChessService"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map