define(function(require) {

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var Thorax = require('thorax');
    var Collection = require('collections/collection');
    var Page = require('views/page');
    var appTemplate = require('text!templates/app.handlebars');
    var Common = require('common');  

    return Thorax.View.extend({
        // In a require.js application the name is primarily for
        // consistency and debugging purposes
        name: 'app',
        pageContent: "",
        page: new Page(),
        //template: Handlebars.compile(appTemplate),        
        // Delegated events
        events: {
        },
        // Setup app view
        initialize: function() {   
            this.template = Handlebars.compile(appTemplate);
        },
        onRouteChanged: function(route, params) {

        }


    });

});
