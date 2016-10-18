Ext.define('App.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

    items: [{
        type: 'toolbar',
        docked: 'top',
        items: [{
            xtype: 'button',
            text: 'Logout',
            handler: 'logout'
        }]
    }],

    html: 'Main View'
});
