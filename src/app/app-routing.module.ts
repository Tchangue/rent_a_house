import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './pages/home/home.module#HomePageModule'
    },
    {
        path: 'home',
        loadChildren: './pages/home/home.module#HomePageModule'
    },
  { path: 'search', loadChildren: './pages/search/search.module#SearchPageModule' },
  { path: 'messages', loadChildren: './pages/messages/messages.module#MessagesPageModule' },
  { path: 'announcements', loadChildren: './pages/announcements/announcements.module#AnnouncementsPageModule' },
  { path: 'favourites', loadChildren: './pages/favourites/favourites.module#FavouritesPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'notifications', loadChildren: './pages/notifications/notifications.module#NotificationsPageModule' },
  { path: 'gcu', loadChildren: './pages/gcu/gcu.module#GcuPageModule' },
  { path: 'feedback', loadChildren: './pages/feedback/feedback.module#FeedbackPageModule' },
  { path: 'profil', loadChildren: './pages/profil/profil.module#ProfilPageModule' },  { path: 'language', loadChildren: './pages/language/language.module#LanguagePageModule' },
  { path: 'data-protection', loadChildren: './pages/data-protection/data-protection.module#DataProtectionPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' }






];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
