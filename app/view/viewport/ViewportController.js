Ext.define('App.view.viewport.ViewportController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.viewport',

    listen: {
        controller: {
            '*': {
                login: 'onLogin',
                logout: 'onLogout',
                unmatchedroute: 'onUnmatchedRoute'
            }
        }
    },

    routes: {
        login: 'showLogin'
    },

    showLogin: function() {
        if (!this.loginView) {
            this.loginView = Ext.Viewport.add({
                xtype: 'app-login'
            });
        }

        Ext.Viewport.setActiveItem(this.loginView);
    },

    onLogin: function() {
        this.mainView = Ext.Viewport.add({
            xtype: 'app-main'
        });

        this.redirectTo(this.originalRoute || '#main');
    },

    onLogout: function() {
        this.mainView.destroy();
        this.mainView = null;
        this.originalRoute = location.hash;
        this.redirectTo('#login');
    },

    onUnmatchedRoute: function() {
        // If there is a main view allow it to handle the unmatched route.
        if (!this.mainView) {
            this.originalRoute = location.hash;
            this.redirectTo('#login');
        }
    }


});