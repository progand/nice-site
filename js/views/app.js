define(function(require) {
   
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var Thorax = require('thorax');
    var Collection = require('collections/collection');
    var appTemplate = require('text!templates/app.handlebars');
    var Common = require('common');
    var indexTemplate = require('text!templates/page/index.handlebars');

   
    return Thorax.View.extend({
        // In a require.js application the name is primarily for
        // consistency and debugging purposes
        name: 'app',    
        pageContent: "", 
        template: Handlebars.compile(appTemplate),
        // Delegated events
        events: {
        },
        // Setup app view
        initialize: function() {            
            this.render();
        },       
        onRouteChanged: function(route, params){
            
        }
        

    });

});
