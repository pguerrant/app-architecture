Ext.define('App.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    login: function() {
        // authenticate

        this.fireEvent('login');
    }
});