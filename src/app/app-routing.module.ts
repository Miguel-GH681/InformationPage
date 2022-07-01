import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoriosComponent } from './accesorios/accesorios.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'home/:id', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}