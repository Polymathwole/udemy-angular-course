import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../services/users.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[] = this.userService.inactiveUsers;

  constructor(private userService: UsersService, private counterService: CounterService) { 
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
    this.counterService.logStatus();
  }
}
