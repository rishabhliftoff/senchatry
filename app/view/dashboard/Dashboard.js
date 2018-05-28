Ext.define('senchatry.view.dashboard.Dashboard', {
    extend: 'Ext.Component',
    xtype: 'admindashboard',

    // controller: 'dashboard',
    // viewModel: {
    //     type: 'dashboard'
    // },

    cls: 'dashboard',
    scrollable: true,

    defaults: {
        shadow: true
    },

    html: '<h1 class="banner">dashboard</h1>',
});
