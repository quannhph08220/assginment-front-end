import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AboutComponent } from './about/about.component';
import { ProductService } from './service/product.service';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, AboutComponent, CategoryComponent, HomeComponent, ProductDetailComponent, ProductListComponent, ProductEditComponent, ProductAddComponent, NotFoundComponent ],
  bootstrap:    [ AppComponent ],
  providers : [ProductService]
})
export class AppModule { }
