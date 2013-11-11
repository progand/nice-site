define([
    'jquery',
    'underscore',
    'backbone',
    'thorax',
    'text!templates/page/index.handlebars',    
    'common'
], function($, _, Backbone, Thorax, indexTemplate, Common) {

    return Thorax.View.extend({
        // In a require.js application the name is primarily for
        // consistency and debugging purposes
        name: 'page',
        template: Handlebars.compile(""),
        // Delegated events
        events: {
        },
        // Setup app view
        initialize: function() {
            this.render();
        },
        changeTo: function(page) {
            
        }

    });

});
