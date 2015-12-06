/**
 * Configure RequireJs
 **/
requirejs.config({
    baseUrl: "",
    paths: {
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
    }

});

requirejs([

    // CORE
    "core/framework",

    // Routes
    "blog/route",

    "jquery"
],
function(
    Framework,
    Blog
){

    f = new Framework();

    // Add Routes
    f.routes.push(Blog);

    f.run();
});
