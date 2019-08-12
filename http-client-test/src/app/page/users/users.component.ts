import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  title = 'Data Table';
  userList: User[];
  userSubscription: Subscription;
  changeCounter: number = 0;
  filterPhrase: string = '';
  filterInput: string = '';
  orderKey: string = '';
  orderDirection: number = 1;




  constructor(
    private userService: UserService
  ) {

  }

  ngOnInit() {
    this.userSubscription = this.userService.getAll().subscribe(
      users => this.userList = users
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  setOrderKey(key: string): void {
    if (key === this.orderKey) {
      this.orderDirection = this.orderDirection == 1 ? -1 : 1;
    } else {
      this.orderDirection = 1;
    }
    this.orderKey = key;
    console.log(this.orderKey);
  }

  setfilterPhrase() {
    this.filterPhrase = this.filterInput;
  }
  resetSearch() {
    this.filterPhrase = '';
    this.filterInput = '';
  }

  onDelete(user: User) {
    if (confirm('Are you sure you want to delete?')) {
      this.userService.remove(user.id).subscribe(
        response => {
          let index = this.userList.indexOf(user);
          console.log(index, user);
          this.userList.splice(index, 1);
          this.changeCounter++;
        },
        err => console.error(err),
      );
    }
  }

}
