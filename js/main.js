// Main Config

require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        'thorax': {
            deps: [
                'underscore',
                'backbone',
                'jquery',
                'handlebars'
            ],
            exports: 'Thorax'
        }
    },
    paths: {
        jquery: 'lib/jquery/jquery.min',
        underscore: 'lib/underscore/lodash.min',
        backbone: 'lib/backbone/backbone',
        localstorage: 'lib/backbone/localstorage',
        handlebars: 'lib/handlebars/handlebars.min',
        thorax: 'lib/thorax/thorax',
        text: 'lib/require/text'
    }
});

define(function(require) {    
    var AppView = require('views/app');
    var AppRouter = require('routers/approuter');
    
    // Initialize routing and start Backbone.history()
    var router = new AppRouter();

    // Initialize the application view
    var app = new AppView();
    $('#app-canvas').append(app.el);  
    
    app.listenTo(router, 'route', app.onRouteChanged);
    
    Backbone.history.start();

});
