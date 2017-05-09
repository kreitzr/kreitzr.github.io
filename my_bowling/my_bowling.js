"use strict"

// register the application module
b4w.register("my_bowling_main", function(exports, require) {

// import modules used by the app
var m_app       = require("app");
var m_cfg       = require("config");
var m_data      = require("data");
var m_preloader = require("preloader");
var m_ver       = require("version");
var m_scenes    = require("scenes");
var m_phys      = require("physics");
var m_log_nodes = require("logic_nodes");
    
// detect application mode
var DEBUG = (m_ver.type() == "DEBUG");

// automatically detect assets path
var APP_ASSETS_PATH = m_cfg.get_assets_path("my_bowling");

/**
 * export the method to initialize the app (called at the bottom of this file)
 */
exports.init = function() {
    m_app.init({
        canvas_container_id: "main_canvas_container",
        callback: init_cb,
        show_fps: DEBUG,
        console_verbose: DEBUG,
        autoresize: true
    });
}

/**
 * callback executed when the app is initialized 
 */
function init_cb(canvas_elem, success) {

    if (!success) {
        console.log("b4w init failure");
        return;
    }

    m_preloader.create_preloader();

    // ignore right-click on the canvas element
    canvas_elem.oncontextmenu = function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    };

    //Logic node callbacks
    m_log_nodes.append_custom_callback("startPhysics", startPhysics_cb);
    
    load();
}

/**
 * load the scene data
 */
function load() {
    m_data.load(APP_ASSETS_PATH + "my_bowling.json", load_cb, preloader_cb);
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
function load_cb(data_id, success) {

    if (!success) {
        console.log("b4w load failure");
        return;
    }

    m_app.enable_camera_controls();

    // place your code here

/**    
    var ball = m_scenes.get_object_by_name("Sphere");
    m_phys.apply_velocity_world(ball, 0, 15, 0)
*/
}


function startPhysics_cb(in_params, out_params) {
    var ball = in_params[0];
    m_phys.apply_velocity_world(ball, 0, 15, 0)
}

});

// import the app module and start the app by calling the init method
b4w.require("my_bowling_main").init();
