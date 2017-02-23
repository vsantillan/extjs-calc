Ext.define('AdeaProjects.view.login.Login', {
  extend: 'Ext.window.Window',
  xtype: 'login',

  requires: [
    'AdeaProjects.view.login.LoginController',
    'Ext.form.Panel'
  ],

  controller: 'login',
  bodyPadding: 10,
  title: 'Inicio de Sesión',
  closable: false,
  autoShow: true,
  draggable: false,
  resizable: false,

  items: {
    xtype: 'form',
    reference: 'form',
    items: [{
      xtype: 'textfield',
      name: 'username',
      fieldLabel: 'Nombre Usuario',
      allowBlank: false
    }, {
      xtype: 'textfield',
      name: 'password',
      inputType: 'password',
      fieldLabel: 'Contraseña',
      allowBlank: false
    }, {
      xtype: 'displayfield',
      hideEmptyLabel: false,
      value: 'Ingrese una contraseña válida.'
    }],
    buttons: [{
      text: 'Login',
      formBind: true,
      glyph: 0xf090,
      listeners: {
        click: 'onLoginClick'
      }
    }]
  }
});