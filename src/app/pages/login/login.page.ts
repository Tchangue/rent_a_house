import {Component, OnInit} from '@angular/core';
import {RegisterPage} from '../register/register.page';
import {Router} from '@angular/router';
import {LoadingController, NavController, Platform} from '@ionic/angular';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {HomePage} from '../home/home.page';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import UserCredential = firebase.auth.UserCredential;


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    user: Observable<firebase.User>;
    constructor(private router: Router,
                private  afAuth: AngularFireAuth,
                private gplus: GooglePlus,
                private platform: Platform) {
        this.user = this.afAuth.authState;

    }

    ngOnInit() {
    }

    googleLogin() {
        if (this.platform.is('cordova')) {
            this.nativeGoogleLogin();
        } else {
            this.webGoogleLogin();
        }
    }

    async nativeGoogleLogin(): Promise<UserCredential> {
        try  {
            const gplusUser = await this.gplus.login({
                webClientId: environment.webAppKey,
                offline: true,
                scopes: 'profile email'
            });
            return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken));
        } catch (e) {
            console.log(e);
        } finally {

        }


    }

    async webGoogleLogin(): Promise<void> {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const credential = await this.afAuth.auth.signInWithPopup(provider);

        } catch (err) {
            console.log(err);
        } finally {

        }
    }

    async signOut() {
        this.afAuth.auth.signOut();
        if (this.platform.is('cordova')) {
            this.gplus.logout();
        }
    }
}
