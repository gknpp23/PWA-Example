import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { fromEvent, merge, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-online-status-indicator',
  templateUrl: './online-status-indicator.component.html',
  styleUrls: ['./online-status-indicator.component.scss']
})
export class OnlineStatusIndicator implements OnInit, OnDestroy {
  public status: 'Online' | 'Offline' = 'Online';
  private onlineOfflineSubscription: Subscription | undefined;

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.updateOnlineStatus(); // Define o status inicial

    // Escuta os eventos online/offline
    // Executa fora da NgZone para não disparar change detection desnecessariamente em alguns casos,
    // mas reentra na zone para atualizar a UI.
    this.onlineOfflineSubscription = merge(
      fromEvent(window, 'online'),
      fromEvent(window, 'offline')
    ).pipe(
      map(() => navigator.onLine)
    ).subscribe(isOnline => {
      this.ngZone.run(() => { // Garante que a atualização da UI ocorra dentro da NgZone
        this.status = isOnline ? 'Online' : 'Offline';
        console.log(`Status alterado para: ${this.status}`);
      });
    });
  }

  private updateOnlineStatus(): void {
    this.status = navigator.onLine ? 'Online' : 'Offline';
  }

  ngOnDestroy(): void {
    if (this.onlineOfflineSubscription) {
      this.onlineOfflineSubscription.unsubscribe();
    }
  }
}
