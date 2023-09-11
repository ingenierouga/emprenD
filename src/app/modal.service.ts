import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationModalComponent } from './shared/notification-modal/notification-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private dialog: MatDialog) {}

  openNotificationModal(statusParam: string, mensageParam: string): void {
    this.dialog.open(NotificationModalComponent, {
      data: { status: statusParam, mensaje: mensageParam }, // You can pass data to the modal component if needed
    });
  }
}
