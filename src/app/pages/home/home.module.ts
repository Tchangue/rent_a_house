import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';
import {SearchPage} from '../search/search.page';
import {FavouritesPage} from '../favourites/favourites.page';
import {AnnouncementsPage} from '../announcements/announcements.page';
import {HomePageRoutingModule} from './home.page.router.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule
    ],
    declarations: [HomePage]
})
export class HomePageModule {
}
