define([
    'jquery',
    'underscore',
    'backbone',
    'thorax',
    'collections/collection',
    'text!templates/app.handlebars',
    'common',
    'text!templates/page/index.handlebars'
], function($, _, Backbone, Thorax, Collection, appTemplate, Common, indexTemplate) {
   
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
        changeTo: function(page) {
            switch(page){
                case 'index':
                    var pageTemplate = Handlebars.compile(indexTemplate);
                    this.pageContent = pageTemplate({});
            }
        }

    });

});
