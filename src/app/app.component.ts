import { Component } from '@angular/core';
// import { ServeService } from './serve.service';
import { CommonModule } from '@angular/common';
import { ServService } from './serv.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: any;

  constructor( private dataservice:ServService) { }

  getDat() {
    this.dataservice.getuser().subscribe((res:any) => {
      console.log('GET', res[2].name);
      this.users = res;
    });
  }

  addDat() {
    const user = {
      name: 'John',
      age: 30
    };

    this.dataservice.adduser(user).subscribe((res:any) => {
      console.log('POST', res);
    });
  }

  updateDat() {
    const user = {
          name: 'David',
      age: 35
    };

    this.dataservice.edituser('4c6b', user).subscribe((res:any) => {
      console.log('PUT', res);
    });
  }

  deleteDat() {
    this.dataservice.deleteuser(`4c6b`).subscribe((res:any) => {
      console.log('DELETE', res);
    });
  }
}