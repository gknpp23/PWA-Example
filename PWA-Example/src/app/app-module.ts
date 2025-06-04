import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app'; // Seu componente raiz, ex: app.component.ts

// Importações dos novos componentes
import { InstallButton } from './install-button/install-button.component';
import { OnlineStatusIndicator } from './online-status-indicator/online-status-indicator.component';

@NgModule({
  declarations: [
    App,
    InstallButton,    // Componente para o botão de instalação
    OnlineStatusIndicator // Componente para o indicador de status online/offline
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    
  ],
  bootstrap: [App]
})
export class AppModule { }
