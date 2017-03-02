Ext.Loader.setConfig({
  enabled: true
});

Ext.Loader.setPath('AdeaProjects', 'app');

Ext.onReady(function() {
  Ext.application({
    name: 'AdeaProjects',

    views: [
      'AdeaProjects.view.login.Login',
      'AdeaProjects.view.main.Main',
      'AdeaProjects.view.demo.DemoMain'
    ],

    launch: function() {
      Ext.setGlyphFontFamily('FontAwesome');

      var loggedIn;

      loggedIn = localStorage.getItem("UserLoggedIn");

      Ext.create({
          xtype: loggedIn ? 'demo-main' : 'login'
        })
        //Ext.create('AdeaProjects.view.login.Login').show();
    }
  });
});