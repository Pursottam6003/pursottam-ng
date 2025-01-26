import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FeedComponent } from './feed/feed.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { GuestbookComponent } from './guestbook/guestbook.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home/feed', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
    { path: 'feed', component: FeedComponent },
    { path: 'about', component: AboutComponent },
    { path: 'content', component: ContentComponent },
    { path: 'guestbook', component: GuestbookComponent },
  ]},
  { path: '**', component: NotFoundComponent }
];
