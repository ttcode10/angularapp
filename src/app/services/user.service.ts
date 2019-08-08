import { User } from '../models/User';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('2018-09-03 08:30:24'),
        hide: true,
      },
      {
        firstName: 'Mike',
        lastName: 'Miller',
        email: 'mike@gmail.com',
        isActive: false,
        registered: new Date('2011-12-05 19:25:48'),
        hide: true,
      },
      {
        firstName: 'Michael',
        lastName: 'Smith',
        email: 'michael@gmail.com',
        isActive: true,
        registered: new Date('2019/01/06 19:29:38'),
        hide: true,
      },
      {
        firstName: 'Jane',
        lastName: 'Yang',
        email: 'jane@gmail.com',
        isActive: false,
        registered: new Date('2014/03/28 07:42:51'),
        hide: true
      }
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUsers(user: User) {
    this.users.unshift(user);
  }

}
