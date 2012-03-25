App = {
  start: function() {
    new App.SearchRouter()
  }
}

App.SearchRouter = Backbone.Router.extend({
  routes: {
    'search/:term' : 'search'
  },
  initialize: function() {
    new App.SearchView({router : this})
  },
  search: function(term) {
    App.SearchController.search(term)
  }
})

App.SearchResult = Backbone.Model.extend({})
App.SearchResultList = Backbone.Collection.extend({
  model: App.SearchResult
})
App.searchResults = new App.SearchResultList()

App.SearchController = {
  search: function(term) {
    App.searchResults.add({term : term })
  }
}
App.SearchView = Backbone.View.extend({
  el: '#search',
  events: {
    'keypress' : 'handleEnter'
  },
  initialize: function() {
      this.router = this.options.router
      $(this.el).focus()
  },
  handleEnter: function(e) {
    if (e.keyCode == 13) {
      this.router.navigate('search/' + $(this.el).val(),true)
    }
  }
})