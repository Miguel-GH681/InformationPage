import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AnexoComponent } from './anexo/anexo.component';
import { AppRoutingModule } from './app-routing.module';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { VersusTableComponent } from './versus-table/versus-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    HeaderComponent,
    FooterComponent,
    AnexoComponent,
    AccesoriosComponent,
    VersusTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
