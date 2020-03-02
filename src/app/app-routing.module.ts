import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/* Feature Modules */

import { ProductData } from './products/product-data';
import { PageNotFoundComponent } from './page-not-found.component';
import { WelcomeComponent } from './home/welcome.component';

const Routes = [
    {path: 'welcome', component: WelcomeComponent },
    { path: 'products', component: ProductData},
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(Routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}