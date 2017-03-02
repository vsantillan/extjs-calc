Ext.define('AdeaProjects.view.demo.Demo', {
  extend: 'Ext.form.Panel',
  xtype: 'form-contact',
  controller: 'form-contact',

  title: 'Contact Us',
  width: 500,
  height: 300,
  bodyPadding: 20,

  dockedItems: [{
    xtype: 'toolbar',
    dock: 'top',
    border: 5,
    style: {
      borderColor: 'red',
      borderStyle: 'solid'
    },
    items: [{
      xtype: 'button',
      text: 'Button 1',
      handler: function() {
        this.up('panel').update(data);
      }
    }]
  }],

  items: [{
    margin: '0 0 20 0',
    xtype: 'component',
    html: [
      'Thank you for visiting our site! We welcome your feedback; ',
      'please click the button below to send us a message. We will ',
      'respond to your inquiry as quickly as possible.'
    ]
  }, {
    xtype: 'container',
    layout: {
      type: 'hbox',
      pack: 'center'
    },
    items: [{
      xtype: 'button',
      cls: 'contactBtn',
      scale: 'large',
      text: 'Contact Us',
      handler: 'showWindow'
    }]
  }]
});