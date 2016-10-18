Ext.define('App.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    listen: {
        controller: {
            '*': {
                unmatchedroute: 'onUnmatchedRoute'
            }
        }
    },

    routes: {
        main: 'showMain'
    },

    logout: function() {
        this.fireEvent('logout');
    },

    showMain: function() {
        Ext.Viewport.setActiveItem(this.getView());
    },

    onUnmatchedRoute: function() {
        // TODO
    }
});
