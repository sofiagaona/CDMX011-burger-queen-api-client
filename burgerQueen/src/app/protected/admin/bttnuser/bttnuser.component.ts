import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-bttnuser',
  templateUrl: './bttnuser.component.html',
  styleUrls: ['./bttnuser.component.css']
})
export class BttnuserComponent implements OnInit {
  public bttnUserProduct:string[]=['Usuarios', 'Productos']
  constructor(private adminService:AdminService) { }

getUserOrProduct(option:string){
  if (option==='Usuarios'){
    //this.adminService.getUser();
  }
  if(option==='Productos'){
    //this.adminService.getProduct();
  }
}

  ngOnInit(): void {
  }

}
