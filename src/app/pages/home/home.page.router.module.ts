import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule, Routes} from '@angular/router';

import {HomePage} from './home.page';
import {SearchPage} from '../search/search.page';
import {FavouritesPage} from '../favourites/favourites.page';
import {AnnouncementsPage} from '../announcements/announcements.page';

const routes: Routes = [
    {
        path: 'home',
        component: HomePage,
        children: [
            {
                path: 'search',
                loadChildren: '../search/search.module#SearchPageModule'
            },
            {
                path: 'favourites',
                loadChildren: '../favourites/favourites.module#FavouritesPageModule',
            },
            {
                path: 'messages',
                loadChildren: '../messages/messages.module#MessagesPageModule',
            },
            {
                path: 'announcements',
                loadChildren: '../announcements/announcements.module#AnnouncementsPageModule',
            }
        ]
    },
    {
        path: '',
        redirectTo: 'home/search',
        pathMatch: 'full'
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class HomePageRoutingModule {
}
