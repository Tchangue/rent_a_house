import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public settings = [
        {
            title: 'Login',
            url: '/login',
            icon: 'log-in'
        },
        {
            title: 'Notifications',
            url: '/notifications',
            icon: 'notifications'
        },
        {
            title: 'Language',
            url: '/languages',
            icon: ''
        },
        {
            title: 'Recommand',
            url: '/recommand',
            icon: 'share'
        },
        {
            title: 'Feedback',
            url: '/feedback',
            icon: ''
        },
        {
            title: 'Data protection',
            url: '/data-protection',
            icon: ''
        },
        {
            title: 'Logout',
            url: '/logout',
            icon: 'log-out'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    presentModal() {
        return  console.log('JJZ');
        /*const modal = await this.modalCtrl.create({
            component: LanguagePage,
            componentProps: {}
        });
        return await modal.present();*/
    }

}
