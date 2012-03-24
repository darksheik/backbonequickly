App = {
  start: function() {
    new App.SearchView()
  }
}

App.SearchView = Backbone.View.extend({
  el: '#search',
  events: {
    'keypress' : 'handleEnter'
  },
  initialize: function() {
      $(this.el).focus()
  },
  handleEnter: function(e) {
    if (e.keyCode == 13) {
      console.log('enter pressed')
    }
  }
})