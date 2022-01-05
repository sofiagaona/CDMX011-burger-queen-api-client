import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { User } from '../../../auth/interfaces/interface.auth';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
public getUser:User[]=[];
  constructor(private adminService:AdminService) { 
    this.getUser=JSON.parse(localStorage.getItem('users')!)||[];
  }

  ngOnInit(): void {
    this.adminService.getUser()
    .subscribe(resp=>{ 
      this.getUser=resp;
      localStorage.setItem('users', JSON.stringify(this.getUser))
      
    })
  }

}
