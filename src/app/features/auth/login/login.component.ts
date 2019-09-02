import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../admin/users/user.service';
import{Router}from '@angular/router'
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isAuthenticated: boolean;
  constructor( private fb: FormBuilder,private usersevice:UserService,private router: Router) {
    this.loginForm = fb.group({
      email: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
    });
  }
 
  ngOnInit() {
    var data;
   //this.adduser(data)
  }
  onSubmit(data){
    this.usersevice.userlogin(data).subscribe((data:any)=>{
console.log(data)
if(data &&data.user){
this.router.navigate(['/exam/home'])
}
    })

  }

  adduser(data){
    var test={
      name:'VENKATESH CHAVVAKULA',
      email:'venkateshchavvakula198@gmail.com',
      password:'Venkatesh@123'
    }
    this.usersevice.createnewuser(test).subscribe(data=>{
      console.log(data)
    })
  }

}
