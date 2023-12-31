import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SharedServicesService } from './services/shared-services.service';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from './services/fireBaseCon';
getFirestore;
@NgModule({
  declarations: [AppComponent, FooterComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLinkActive,
    RouterLink,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [SharedServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
