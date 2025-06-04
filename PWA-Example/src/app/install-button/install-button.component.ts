import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-install-button',
  templateUrl: './install-button.component.html',
  styleUrls: ['./install-button.component.scss']
})
export class InstallButton implements OnInit {
  private deferredPrompt: any;
  public showButton = false;

  constructor() { }

  ngOnInit(): void {
    // Verifica se o app já está rodando em modo standalone
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
      this.showButton = false;
      return;
    }
  }

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event) {
    // Previne o Chrome 67 e anteriores de mostrar automaticamente o prompt
    event.preventDefault();
    // Guarda o evento para que possa ser acionado mais tarde.
    this.deferredPrompt = event;
    // Atualiza a UI para notificar o usuário que ele pode adicionar à tela inicial
    this.showButton = true;
  }

  installPwa(): void {
    if (!this.deferredPrompt) {
      console.warn('O prompt de instalação do PWA não está disponível.');
      return;
    }
    // Mostra o prompt
    this.deferredPrompt.prompt();
    // Espera o usuário responder ao prompt
    this.deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuário aceitou o prompt de instalação do PWA');
      } else {
        console.log('Usuário dispensou o prompt de instalação do PWA');
      }
      // Não podemos usar o mesmo prompt novamente, ele precisa ser recriado
      this.deferredPrompt = null;
      this.showButton = false;
    });
  }
}
