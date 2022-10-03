import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  private config: MatSnackBarConfig;

  constructor(private snackbar: MatSnackBar, private zone: NgZone) {
    this.config = new MatSnackBarConfig();
    this.config.panelClass = ['snackbar-container'];
    this.config.verticalPosition = 'bottom';
    this.config.horizontalPosition = 'left';
    this.config.duration = 4000;
  }

  notification(
    message: string,
    verticalPosition?: any,
    horizontalPosition?: any
  ) {
    this.setVerticalPosition(verticalPosition);
    this.setHorizontalPosition(horizontalPosition);
    this.config.panelClass = ['snackbar-container', 'success'];
    this.show(message);
  }

  error(message: string) {
    this.config.panelClass = ['snackbar-container', 'error'];
    this.show(message);
  }

  success(message: string, position?: any) {
    this.setVerticalPosition(position);
    this.config.panelClass = ['snackbar-container', 'success'];
    this.show(message);
  }

  warning(message: string) {
    this.config.panelClass = ['snackbar-container', 'warning'];
    this.show(message);
  }

  private show(message: string, config?: MatSnackBarConfig) {
    config = config || this.config;
    this.zone.run(() => {
      this.snackbar.open(message, 'x', config);
    });
  }

  private setVerticalPosition(position: any) {
    if (position !== undefined) {
      this.config.verticalPosition = position;
    }
  }

  private setHorizontalPosition(horizontalPosition: any) {
    if (horizontalPosition !== undefined) {
      this.config.horizontalPosition = horizontalPosition;
    }
  }
}
