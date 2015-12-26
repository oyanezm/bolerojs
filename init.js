/**
 * Configure RequireJs
 **/
requirejs.config({
    baseUrl: "http://www.llamin.cl:8080",

    paths: {
        "mustache": "system/lib/mustache",
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
    },

    shim: {
        'mustache': {
            exports: 'Mustache'
        }
    }

});

requirejs([

    // CORE
    "system/core/framework",
    "system/core/view",

    // Routes
    "app/popular/route",
    "app/blog/route",

    "mustache",
    "jquery"
],
function(
    // Core
    Framework,
    View,

    // Routes
    Popular,
    Blog,

    Mustache
){

    // Globals
    window.Mustache = Mustache;
    window.View = View;

    f = new Framework();

    // Add Routes
    f.routes.push(Popular);
    f.routes.push(Blog);

    f.run();
});
