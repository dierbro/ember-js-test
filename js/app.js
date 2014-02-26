App = Ember.Application.create();

// System wide RESTAdapter assuming the header as to add to all the requests
App.ApplicationAdapter = DS.RESTAdapter.extend({
  // NEW WAY
  headers: {
    "AUTH_TOKEN": "xxxxxxxxx",
  }
  // OLD WAY
  /*
  ajax: function(url, type, hash) {
    hash.beforeSend = function (xhr){
      xhr.setRequestHeader("AUTH_TOKEN2", "XXXXXX");
    }
    return this._super(url, type, hash);
  }
  */
});

App.Employee = DS.Model.extend({
  name: DS.attr("string")
});

App.EmployeeSerializer = DS.RESTSerializer.extend({
  //Restructure the JSON using extract and/or normalize mehtods
  extractArray: function(store, type, payload, id, requestType){
  },

  // Create the JSON to send to the REST endpoint
  serialize: function(record, options){
    var obj = {};
    return obj;
  }
});

App.Router.map(function() {
  // the index route is created by default
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('employee'); ;
  }
});

