import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UlubAktorComponent } from './ulub-aktor/ulub-aktor.component';
import { TabliczkaComponent } from './tabliczka/tabliczka.component';
import { Zad5Component } from './zad5/zad5.component';
import { Zad6parentComponent } from './zad6parent/zad6parent.component';
import { Zad6childComponent } from './zad6child/zad6child.component';
import { KalkulatorComponent } from './kalkulator/kalkulator.component';


@NgModule({
  declarations: [
    AppComponent,
    UlubAktorComponent,
    TabliczkaComponent,
    Zad5Component,
    Zad6parentComponent,
    Zad6childComponent,
    KalkulatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
