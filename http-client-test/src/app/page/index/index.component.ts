import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit, OnDestroy {

  title = 'Dashboard';
  userList: User[];
  userSubscription: Subscription;
  numberOfUsers: number = 0;
  activeUsers: number = 0;
  inactiveUsers: number = 0;
  totalBalance: number = 0;
  appleLovers: number = 0;

  //fontAwesome icons
  faUsers = faUsers;
  faGlobe = faGlobe;
  faPowerOff = faPowerOff;
  faMoneyCheckAlt = faMoneyCheckAlt;
  faAppleAlt = faAppleAlt;

  constructor(
    private userService: UserService
  ) {

  }

  ngOnInit() {
    this.userSubscription = this.userService.getAll().subscribe(
      (users) => {
        this.userList = users;
        this.getNumberOfUsers();
        this.getUserStatus();
        this.getTotalBalance();
        //this.getAppleLovers();
      }
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  getNumberOfUsers() {
    for (let i = 0; i < this.userList.length; i += 1) {
      this.numberOfUsers += 1;
    }
    return this.numberOfUsers;
  }

  getUserStatus(): void {
    for (let i = 0; i < this.userList.length; i += 1) {
      if (this.userList[i].isActive == true) {
        this.activeUsers += 1;
      } else {
        this.inactiveUsers += 1;
      }
    }
  }

  getTotalBalance() {
    for (let i = 0; i < this.userList.length; i += 1) {
      this.userList[i].balance = Number(this.userList[i].balance.substr(1).replace(',', ''));
      this.totalBalance += this.userList[i].balance;
    }
    return this.totalBalance = Number(this.totalBalance.toFixed());
  }

  getAppleLovers() {
    for (let i = 0; i < this.userList.length; i += 1) {
      if (this.userList[i].favoriteFruit === 'apple') {
        this.appleLovers += 1
      }
    }
    return this.appleLovers;
  }

}