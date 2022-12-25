import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  users:any;

  constructor(private service:UsersService){}

  ngOnInit() {
      this.service.getUsers()
        .subscribe(response => {
          this.users = response;
        });
  }
}
