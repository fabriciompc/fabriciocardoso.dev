import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CasePageComponent } from './case-page/case-page.component';
import { HomeComponent } from './home/home.component';
import { CaseService } from './shared/case.service';

@NgModule({
  declarations: [AppComponent, CasePageComponent, HomeComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, HttpClientModule],
  providers: [CaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
