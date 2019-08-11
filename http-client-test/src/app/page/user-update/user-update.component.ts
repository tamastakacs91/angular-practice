import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: User = new User();
  userId: number;
  changeCounter: number = 0;


  constructor(
    private ar: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
    this.ar.params.forEach(params => this.userId = params.id);
    console.log('Az ID :', this.userId);
    this.userService.getOne(this.userId).forEach(
      user => {
        this.user = user;
      }
    )
  }


  ngOnInit() { }

  onSubmit(ev: Event): void {
    ev.preventDefault();
    this.userService.update(this.user).subscribe(
      user => {
        console.log('Changed:', user),
          this.changeCounter++;
      },
      err => console.error(err),
    );
    this.router.navigate(['/users']);
  }


}
