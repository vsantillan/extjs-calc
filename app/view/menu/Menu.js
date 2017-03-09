Ext.define('AdeaProjects.view.menu.Menu', {
  extend: 'Ext.panel.Panel',
  xtype: 'tree-list',
  width: '100%',
  height: 500,
  title: 'TreeList',
  controller: 'tree-list',

  requires: [
    'AdeaProjects.view.menu.MenuController',
    'AdeaProjects.view.menu.MenuView'
  ],

  iconCls: 'fa fa-gears',
  layout: 'border',

  viewModel: {
    type: 'tree-list'
  },

  header: {
    items: [{
      xtype: 'button',
      text: 'Options',
      menu: [{
        text: 'Expander Only',
        checked: true,
        handler: 'onToggleConfig',
        config: 'expanderOnly'
      }, {
        text: 'Single Expand',
        checked: false,
        handler: 'onToggleConfig',
        config: 'singleExpand'
      }]
    }, {
      xtype: 'button',
      text: 'Nav',
      enableToggle: true,
      reference: 'navBtn',
      toggleHandler: 'onToggleNav'
    }, {
      xtype: 'button',
      text: 'Micro',
      enableToggle: true,
      toggleHandler: 'onToggleMicro'
    }]
  },

  items: [{
    region: 'west',
    width: 250,
    split: true,
    reference: 'treelistContainer',
    layout: {
      type: 'vbox',
      align: 'stretch'
    },
    border: false,
    scrollable: 'y',
    items: [{
      xtype: 'treelist',
      reference: 'treelist',
      bind: '{navItems}'
    }]
  }, {
    region: 'center',
    bodyPadding: 10,
    bind: {
      html: '{selectionText}'
    }
  }]
});