webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  background-color: #000;\r\n  margin: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n#main_canvas_container {\r\n  position: absolute;\r\n  left: 0px;\r\n  top: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: green;\r\n}\r\n\r\n#data {\r\n  position: absolute;\r\n  width: 100%;\r\n  left: 5%;\r\n  bottom: 4%;\r\n  z-index: 1;\r\n  font-size: x-large;\r\n}\r\n\r\n .controls {\r\n  position: absolute;\r\n  width: 100%;\r\n  left: 20%;\r\n  bottom: 4%; \r\n  z-index: 2; \r\n} \r\n\r\n#Color1 {\r\n  direction: rtl;\r\n  width:30%;\r\n}\r\n\r\n#Color2 {\r\n  direction: rtl;\r\n  width:30%;\r\n}\r\n\r\ninput[type=range]:focus {\r\n  outline: none;\r\n}\r\n\r\ninput[type=range]::-webkit-slider-runnable-track {\r\n  width: 100%;\r\n  height: 8px;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n  border: 2px solid rgba(98, 98, 98, .2);\r\n  box-shadow: 0px 0px 4px 0px rgba(98, 98, 98, .8);\r\n}\r\n\r\ninput[type=range]::-ms-track {\r\n  width: 100%;\r\n  height: 8px;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n  border: 2px solid rgba(98, 98, 98, .2);\r\n  box-shadow: 0px 0px 4px 0px rgba(98, 98, 98, .8);\r\n}\r\n\r\ninput[type=range]::-moz-range-track {\r\n  height: 8px;\r\n  width: 100%;\r\n  cursor: pointer;\r\n  background-color: #fff;\r\n  border: 2px solid rgba(98, 98, 98, .2);\r\n  box-shadow: 0px 0px 4px 0px rgba(98, 98, 98, .8);\r\n}\r\n\r\ninput[type=range]::-webkit-slider-thumb {\r\n  box-shadow: 0px 0px 4px 0px rgba(98, 98, 98, .8);\r\n  height: 30px;\r\n  width: 16px;\r\n  border-radius: 2px;\r\n  background-color: #323232;\r\n  cursor: pointer;\r\n  margin-top: -13px;\r\n  -webkit-appearance: none;\r\n}\r\n\r\ninput[type=range]::-ms-thumb {\r\n  box-shadow: 0px 0px 4px 0px rgba(98, 98, 98, .8);\r\n  height: 30px;\r\n  width: 16px;\r\n  border-radius: 2px;\r\n  background-color: #323232;\r\n  cursor: pointer;\r\n  margin-top: -13px;\r\n  -webkit-appearance: none;\r\n}\r\n\r\ninput[type=range]::-moz-range-thumb {\r\n  box-shadow: 0px 0px 4px 0px rgba(98, 98, 98, .8);\r\n  height: 30px;\r\n  width: 16px;\r\n  border-radius: 2px;\r\n  background-color: #323232;\r\n  cursor: pointer;\r\n  margin-top: -13px;\r\n  border: 0;\r\n  -webkit-appearance: none;\r\n}\r\n\r\ninput[type=range]:focus::-webkit-slider-runnable-track {\r\n  background: #5276cf;\r\n}\r\n\r\ninput[type=range]:focus::-ms-track {\r\n  background: #5276cf;\r\n}\r\n\r\ninput[type=range]:focus::-webkit-slider-thumb {\r\n  box-shadow: 0px 0px 6px 0px rgba(98, 98, 98, 1);\r\n}\r\n\r\ninput[type=range]:focus::-moz-range-track {\r\n  background: #5276cf;\r\n  outline-color: transparent;\r\n  border-color: transparent;\r\n}\r\n\r\ninput[type=range]:focus::-moz-range-thumb {\r\n  box-shadow: 0px 0px 6px 0px rgba(98, 98, 98, 1);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"controls\">\r\n    <div (input)=\"sliderChanged($event)\">\r\n        <input type=\"range\" id=\"Color1\" [value]=\"interval1\" (input)=\"interval1=$event.target.value\" min=\"10\" max=\"500\">\r\n        <input type=\"range\" id=\"Color2\" [value]=\"interval2\" (input)=\"interval2=$event.target.value\" min=\"10\" max=\"500\">\r\n    </div>\r\n     <label class=\"switch\">\r\n        <input type=\"checkbox\" [(ngModel)]=\"recordEnabled\" (ngModelChange)=\"recordModeChanged()\"/>\r\n    </label> \r\n     <!-- <audio autoplay></audio>  -->\r\n</div>\r\n<div id=\"main_canvas_container\"></div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__b4w_balls_module__ = __webpack_require__("../../../../../src/app/b4w-balls-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__b4w_service__ = __webpack_require__("../../../../../src/app/b4w.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(b4w) {
        var _this = this;
        this.b4w = b4w;
        this.name = 'Blend4Web Test';
        this.interval1 = 1000;
        this.interval2 = 1000;
        this.recordEnabled = false;
        // private subs = {};
        this.ballTimers = {};
        this.balls = new __WEBPACK_IMPORTED_MODULE_0__b4w_balls_module__["a" /* BallsModule */]();
        this.initScene = function () {
            _this.setBallTimer('Color1', _this.interval1);
            _this.setBallTimer('Color2', _this.interval2);
            // this.subs['Color1'] = Observable.timer(0, 2000).subscribe(() => {
            //   this.balls.genBall('Color1');
            // });
            // this.subs['Color2'] = Observable.timer(1000, 2000).subscribe(() => {
            //   this.balls.genBall('Color2');
            // });
        };
        this.enableAudioCapture = function () {
            // let audio = document.querySelector('audio');
            if (_this.recordEnabled) {
                navigator.getUserMedia({
                    audio: true
                }, function (stream) {
                    // audio.src = URL.createObjectURL(stream);
                    // audio.play();
                    _this.audioStream = stream;
                    var source = _this.audioContext.createMediaStreamSource(stream);
                    source.connect(_this.analyser);
                    // analyser.connect(this.audioContext.destination);
                    _this.visualize();
                }, function (err) {
                    console.log('Error!');
                });
            }
            else {
                _this.audioStream.getAudioTracks().forEach(function (track) {
                    track.stop();
                });
            }
        };
        this.visualize = function () {
            if (_this.recordEnabled) {
                requestAnimationFrame(_this.visualize);
            }
            _this.analyser.fftSize = 32;
            // this.analyser.minDecibels = -70;
            // this.analyser.maxDecibels = 0;
            var bufferLength = _this.analyser.frequencyBinCount;
            var dataArray = new Uint8Array(bufferLength);
            // let dataArray = new Float32Array(bufferLength);
            _this.analyser.getByteFrequencyData(dataArray);
            // this.analyser.getFloatFrequencyData(dataArray);
            var avg = function () {
                var sum = 0;
                for (var i = 0; i < dataArray.length; i++) {
                    sum += dataArray[i];
                    return sum / dataArray.length;
                }
                ;
            };
            // if (avg > 0 && avg < 6.5) {
            //   // console.log(avg);
            //   this.balls.genBall('Color1');
            // } else if (avg > 6.5) {
            //   this.balls.genBall('Color2');
            // }
            _this.setBallTimer('Color1', avg());
        };
        this.balls.onLoadCallback$.subscribe(this.initScene);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.audioContext = new AudioContext();
        this.analyser = this.audioContext.createAnalyser();
        this.b4w.InitModule(this.balls);
    };
    // private initTimers(id: string, value: number) {
    //   this.subs[id].unsubscribe();
    //   this.subs[id] = Observable.timer(value / 2, value).subscribe(() => {
    //     this.balls.genBall(id);
    //   });
    // }
    AppComponent.prototype.setBallTimer = function (id, value) {
        clearInterval(this.ballTimers[id]);
        this.ballTimers[id] = setInterval(this.balls.genBall, value, id);
    };
    AppComponent.prototype.sliderChanged = function (e) {
        // this.initTimers(e.target.id, e.target.value);
        this.setBallTimer(e.target.id, e.target.value);
    };
    AppComponent.prototype.recordModeChanged = function () {
        var _this = this;
        if (this.recordEnabled) {
            // Clear ball timers
            Object.keys(this.ballTimers).forEach(function (key) {
                clearInterval(_this.ballTimers[key]);
            });
        }
        else {
            this.initScene();
        }
        this.enableAudioCapture();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        console.log('Destroy timer');
        // this.sub1.unsubscribe();
        // this.sub2.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__b4w_service__["a" /* Blend4WebService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__b4w_service__["a" /* Blend4WebService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__b4w_service__["a" /* Blend4WebService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/b4w-balls-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BallsModule; });

var BallsModule = (function () {
    function BallsModule() {
        var _this = this;
        this.onLoadCallbackSource = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.onLoadCallback$ = this.onLoadCallbackSource.asObservable();
        this.name = 'balls';
        this.context = function (exports, require) {
            // import modules used by the app
            var m_app = b4w.require('app');
            var m_cfg = b4w.require('config');
            var m_data = b4w.require('data');
            var m_mouse = b4w.require('mouse');
            var m_preloader = b4w.require('preloader');
            var m_ver = b4w.require('version');
            var m_scenes = b4w.require('scenes');
            var m_trans = b4w.require('transform');
            var m_obj = b4w.require('objects');
            var m_phys = b4w.require('physics');
            var m_mat = b4w.require('material');
            var m_rgba = b4w.require('rgba');
            var mainBall;
            var plane;
            var ballCount = 0;
            var balls = [];
            // detect application mode
            var DEBUG = (m_ver.type() === 'DEBUG');
            // automatically detect assets path
            var APP_ASSETS_PATH = m_cfg.get_assets_path('balls');
            /**
             * export the method to initialize the app (called at the bottom of this file)
             */
            exports.init = function () {
                m_app.init({
                    canvas_container_id: 'main_canvas_container',
                    callback: init_cb,
                    show_fps: false,
                    console_verbose: DEBUG,
                    autoresize: true
                });
            };
            exports.genBall = function (color) {
                var newBall = m_obj.copy(mainBall, 'Ball.' + ballCount++);
                var rand_x = (Math.random() * (1 - 0.100) + 0.0200).toFixed(2);
                var rand_y = (Math.random() * (1 - 0.100) + 0.0200).toFixed(2);
                m_trans.set_translation(newBall, rand_x, rand_y, 5);
                m_scenes.append_object(newBall);
                balls.push(newBall);
                m_mat.inherit_material(plane, color, newBall, 'Sphere');
                m_phys.enable_simulation(newBall);
                // Start removing balls if count exceeds n-balls
                if (balls.length > 200) {
                    var oldBall = balls.shift();
                    m_scenes.remove_object(oldBall);
                }
            };
            /**
             * callback executed when the app is initialized
             */
            function init_cb(canvas_elem, success) {
                if (!success) {
                    console.log('b4w init failure');
                    return;
                }
                m_preloader.create_preloader();
                // ignore right-click on the canvas element
                canvas_elem.oncontextmenu = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                };
                load();
            }
            /**
             * load the scene data
             */
            function load() {
                m_data.load(APP_ASSETS_PATH + 'balls' + '.json', load_cb, preloader_cb);
            }
            /**
             * update the app's preloader
             */
            function preloader_cb(percentage) {
                m_preloader.update_preloader(percentage);
            }
            /**
             * callback executed when the scene data is loaded
             */
            var load_cb = function (data_id, success) {
                if (!success) {
                    console.log('b4w load failure');
                    return;
                }
                m_app.enable_camera_controls();
                // place your code here...
                mainBall = m_scenes.get_object_by_name('Sphere');
                plane = m_scenes.get_object_by_name('Plane');
                _this.onLoadCallbackSource.next();
            };
        };
    }
    // onLoadCallback(obj: any) {
    //     console.log('onLoadCallback');
    // }
    BallsModule.prototype.genBall = function (color) {
        var content = b4w.require('balls_main');
        content.genBall(color);
    };
    return BallsModule;
}());

//# sourceMappingURL=b4w-balls-module.js.map

/***/ }),

/***/ "../../../../../src/app/b4w.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Blend4WebService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Blend4WebService = (function () {
    function Blend4WebService() {
    }
    Blend4WebService.prototype.GetModule = function (moduleName) {
        return b4w.require(moduleName + '_main');
    };
    Blend4WebService.prototype.InitModule = function (module) {
        b4w.register(module.name + '_main', module.context);
        b4w.require(module.name + '_main').init();
    };
    return Blend4WebService;
}());
Blend4WebService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], Blend4WebService);

//# sourceMappingURL=b4w.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map