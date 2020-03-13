import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { starComponent } from './shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent, 
    ProductListComponent, 
    ConvertToSpacesPipe,
    starComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    RouterModule.forRoot([
      {path:'welcome', component:WelcomeComponent},
      {path:'products', component:ProductListComponent},
      {
        path:'products/:id', 
        canActivate: [ProductDetailGuard],
        component:ProductDetailComponent
      },
      {path:'', redirectTo:'welcome', pathMatch:'full'},
      {path:'**', redirectTo:'welcome', pathMatch:'full'}
    ], {useHash: true})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
