import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  toActive = 0;
  toInactive = 0;

  constructor(private userService: UsersService) {
    this.userService.statusChanged.subscribe((s: string) => {
      if (s === 'toActive') {
        this.toActive++;
      } else if (s === 'toInactive') {
        this.toInactive++;
      }
    });
  }

  logStatus () {
    console.log(`Inactive to active: ${this.toActive}, active to inactive: ${this.toInactive}`);
  }
}
