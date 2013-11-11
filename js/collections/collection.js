define(function(require) {
    var _ = require('underscore');
    var Backbone = require('backbone');
    var Store = require('localstorage');
    var Model = require('models/model');

    var Collection = Backbone.Collection.extend({
        // Reference to this collection's model.
        model: Model,
        // Save all of the model items under the "models" namespace.
        localStorage: new Store('models-backbone'),
    });

    return new Collection();
});
