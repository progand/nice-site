define(function(require) {
    
    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var Thorax = require('thorax');
    var template = require('text!templates/page/index.handlebars');
    var Common = require('common');

    return Thorax.View.extend({
        // In a require.js application the name is primarily for
        // consistency and debugging purposes
        name: 'page',
        template: Handlebars.compile(template),
        // Delegated events
        events: {
        },
        // Setup app view
        initialize: function() {           
        },
        changeTo: function(page) {

        }

    });

});
