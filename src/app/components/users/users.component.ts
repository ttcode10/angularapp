import { UserService } from '../../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm', { static: false}) form: any;

  constructor(private userService: UserService) { }


  ngOnInit() {


    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

  }


  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if(!valid) {
      console.log('Form is invalid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = false;

      this.userService.addUsers(value);
      this.form.reset();
    }
  }




}
