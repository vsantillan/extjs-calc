Ext.Loader.setConfig({
  enabled: true
});

Ext.onReady(function() {
  Ext.application({
    name: 'AdeaProjects',

    views: [
      'AdeaProjects.view.login.Login',
      'AdeaProjects.view.main.Main'
    ],

    launch: function() {
      Ext.setGlyphFontFamily('FontAwesome');

      var loggedIn;

      loggedIn = localStorage.getItem("UserLoggedIn");

      Ext.create({
          xtype: loggedIn ? 'app-main' : 'login'
        })
        //Ext.create('AdeaProjects.view.login.Login').show();
    }
  });
});