Ext.define('App.view.login.Login', {
    extend: 'Ext.Container',
    xtype: 'app-login',

    controller: 'login',

    layout: {
        type: 'hbox',
        align: 'center',
        pack: 'center'
    },

    items: [{
        xtype: 'formpanel',
        width: 400,
        border: true,
        bodyPadding: 15,
        title: 'Login',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'textfield',
            label: 'Username'
        }, {
            xtype: 'passwordfield',
            label: 'Password'
        }, {
            xtype: 'toolbar',
            layout: {
                pack: 'end'
            },
            items: [{
                xtype: 'button',
                text: 'Login',
                handler: 'login'
            }]
        }]
    }]
});