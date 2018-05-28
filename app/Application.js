Ext.define('senchatry.Application', {
    extend: 'Ext.app.Application',
    mainView: 'senchatry.view.main.Main',
    defaultToken: 'dashboard',
    stores: [
        'NavigationTree'
    ],
});
