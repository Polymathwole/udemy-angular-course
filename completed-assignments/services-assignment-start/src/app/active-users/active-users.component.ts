import { Component, Input } from '@angular/core';
import { UsersService } from '../services/users.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[] = this.userService.activeUsers;

  constructor(private userService: UsersService, private counterService: CounterService) { 
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
    this.counterService.logStatus();
  }
}
