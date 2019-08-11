import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  userList: User[];
  newUser: User = new User();
  changeCounter: number = 0;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getAll().subscribe(
      users => this.userList = users
    )
  }

  onCreate() {
    this.userService.create(this.newUser).subscribe(
      response => {
        this.userList.push(response);
        this.changeCounter++;
        this.newUser = new User();
      },
      err => console.error(err)
    )
  }

  onCancel() {
    this.newUser = new User();
    this.router.navigate(['/users']);
  }


  onSubmit(ev: Event): void {
    ev.preventDefault();
    this.userService.create(this.newUser).subscribe(
      response => {
        this.userList.push(response);
        this.changeCounter++;
        this.newUser = new User();
      },
      err => console.error(err)
    );
    this.router.navigate(['/users']);
  }


}
