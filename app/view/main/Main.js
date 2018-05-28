Ext.define('senchatry.view.main.Main', {
    extend: 'Ext.navigation.View',

    requires: [
        'Ext.Button',
        'Ext.list.Tree',
        'Ext.navigation.View'
    ],

    controller: 'main',
    navigationBar: false,
    userCls: 'main-container',

    // platformConfig: {
    //     phone: {
    //         controller: 'phone-main'
    //     }
    // },

    items: [
      {
        xtype: 'maintoolbar',
        docked: 'top',
        userCls: 'main-toolbar',
        shadow: true
      },
      {
        xtype: 'container',
        docked: 'left',
        userCls: 'main-nav-container x-shadow',
        reference: 'navigation',
        layout: 'fit',
        items: [{
            xtype: 'treelist',
            reference: 'navigationTree',
            scrollable: true,
            ui: 'nav',
            store: 'NavigationTree',
            expanderFirst: true,
            expanderOnly: true,
            listeners: {
                itemclick: 'onNavigationItemClick',
                selectionchange: 'onNavigationTreeSelectionChange'
            }
        }]
      }
    ]
});


// Ext.define('senchatry.view.main.Main', {
//     extend: 'Ext.tab.Panel',
//     fullscreen: true,
//     tabBarPosition: 'left',
//
//     cls: 'main',
//
//     items: [
//       {
//         title: 'Home',
//         iconCls: 'home',
//         cls: 'no-flex',
//         xtype: 'panel',
//         flex: 0,
//         html: '<h1 class="banner">Home</h1>',
//       },
//       {
//         title: 'Schedule',
//         xtype: 'panel',
//         cls: 'no-flex',
//         html: '<h1 class="banner">Schedule</h1>',
//       },
//       {
//         title: 'Inventory',
//         xtype: 'panel',
//         cls: 'no-flex',
//         html: '<h1 class="banner">Inventory</h1>',
//       },
//       {
//         title: 'Route Map',
//         xtype: 'panel',
//         cls: 'no-flex',
//         html: '<h1 class="banner">Route Map</h1>',
//       },
//       {
//         title: 'Time Card',
//         xtype: 'panel',
//         cls: 'no-flex',
//         html: '<h1 class="banner">Time Card</h1>',
//       }
//     ]
// });
