import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';
import { MessageComponent } from './messages/message.component';
import { LoginComponent } from './user/login.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'home', component: WelcomeComponent },
            { path: 'welcome', redirectTo: 'home', pathMatch: 'full'},
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'products', component: ProductListComponent},
            { path: 'messages', component: MessageComponent},
            { path: 'login', component: LoginComponent},
            { path: '**', component: PageNotFoundComponent }
          ], {useHash: true})
    ],
   exports: [RouterModule]
})

export class AppRoutingModule {

}
