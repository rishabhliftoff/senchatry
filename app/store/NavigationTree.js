Ext.define('senchatry.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            {
                text: 'Dashboard',
                iconCls: 'x-fa fa-desktop',
                rowCls: 'nav-tree-badge',
                // html: '<h1 class="banner">Route Map</h1>',
                viewType: 'admindashboard',
                routeId: 'dashboard', // routeId defaults to viewType
                leaf: true
            },
            {
                text: 'Email',
                iconCls: 'x-fa fa-send',
                rowCls: 'nav-tree-badge',
                // html: '<h1 class="banner">Route Map</h1>',
                viewType: 'email',
                leaf: true
            },
            // {
            //     text: 'Profile',
            //     iconCls: 'x-fa fa-user',
            //     // html: '<h1 class="banner">Route Map</h1>',
            //     viewType: 'profile',
            //     leaf: true
            // },
            // {
            //     text: 'Search results',
            //     iconCls: 'x-fa fa-search',
            //     // html: '<h1 class="banner">Route Map</h1>',
            //     viewType: 'searchresults',
            //     leaf: true
            // },
            // {
            //     text: 'FAQ',
            //     iconCls: 'x-fa fa-question',
            //     // html: '<h1 class="banner">Route Map</h1>',
            //     viewType: 'faq',
            //     leaf: true
            // }
        ]
    }
});
