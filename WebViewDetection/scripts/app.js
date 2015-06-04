
(function () {

    // store a reference to the application object that will be created
    // later on so that we can use it if need be
    var app;

    // create an object to store the models for each view
    window.APP = {
      models: {
        home: {
          title: 'USE ON ACTUAL DEVICE',
          userAgent : navigator.userAgent ,
          isIOS : function() {
              var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);
              return iOS;
          },
          webView: function() {
            if (this.get("isIOS") == false) {
                if (this.get("userAgent").indexOf("Crosswalk") !=-1) {
                    return "THIS IS CROSSWALK WEBVIEW (android)";
                } else {
                    return "THIS IS DEFAULT  WEBVIEW (android)";
                }
            } else {
                if (window.webkit && window.webkit.messageHandlers) {
                    return "THIS IS WKWEBVIEW WEBVIEW (ios)";
                  } else {
                    return "THIS IS DEFAULT UIWEBVIEW (ios)";
                  }
            }
         }
      
        },
        settings: {
          title: 'Settings'
        },
        contacts: {
          title: 'Contacts',
          ds: new kendo.data.DataSource({
            data: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Mary' }, { id: 3, name: 'John' }]
          }),
          alert: function(e) {
            alert(e.data.name);
          }
        }
      }
    };

    // this function is called by Cordova when the application is loaded by the device
    document.addEventListener('deviceready', function () {  
      
      // hide the splash screen as soon as the app is ready. otherwise
      // Cordova will wait 5 very long seconds to do it for you.
      navigator.splashscreen.hide();

      app = new kendo.mobile.Application(document.body, {
        
        // you can change the default transition (slide, zoom or fade)
        transition: 'slide',
        
        // comment out the following line to get a UI which matches the look
        // and feel of the operating system
        skin: 'flat',

        // the application needs to know which view to load first
        initial: 'views/home.html'
      });

    }, false);


}());