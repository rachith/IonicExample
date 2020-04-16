import { Component } from '@angular/core';
import { Platform,App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ToastController } from 'ionic-angular';
import { Network } from '@ionic-native/network';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, public  app: App, splashScreen: SplashScreen,public network: Network,public toastCtrl: ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.


   let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        let toast = this.toastCtrl.create({
          message: 'No Internet connection',
          duration: 2000
        });
        toast.present();
      });

// stop disconnect watch
//disconnectSubscription.unsubscribe();


// watch network for a connection
let connectSubscription = this.network.onConnect().subscribe(() => {
  let toast = this.toastCtrl.create({
    message: ' Internet access',
    duration: 2000
  });
  toast.present();
  // We just got a connection but we need to wait briefly
   // before we determine the connection type. Might need to wait.
  // prior to doing any api requests as well.
  // setTimeout(() => {
  //   if (this.network.type === 'wifi') {
  //     console.log('we got a wifi connection, woohoo!');
  //   }
  // }, 3000);
});



platform.registerBackButtonAction(() => {

        var nav = app.getActiveNav();
        var activeView = nav.getActive();  

        console.log("activeView"+activeView); 


    //if(activeView.name === "DashboardPage") {
      if(activeView.component.name==""){
        //if(this.nav.last()==LoginPag
        //var val=this.nav.getViews()[0].name;
      
        }

  else {

          }
    //}
  });



   
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

