Ext.define('App.Application', {
    extend: 'Ext.app.Application',
    
    name: 'App',

    defaultToken: 'login',

    launch: function () {
        Ext.Viewport.setController({
            type: 'viewport'
        });

        Ext.Viewport.getController().init();
    }

});
