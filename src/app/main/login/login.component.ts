import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  val:boolean;
  constructor(private fb:FormBuilder,private ht:HttpClient,private r:Router) { }
  login=this.fb.group({
    username:['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]*')]],
    password:['',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z0-9@#$!]*')]],
    conpassword:['',Validators.required]

  },
  {validator:this.pwdchk});

pwdchk(g:FormGroup)
{
if(g.controls.password.value===g.controls.conpassword.value)
{
  return null;
}
else
return {
  'mismatch':true
}
}
  
  
sub(e)
{
  e.preventdefault;

this.ht.get("http://localhost:3000/posts?username="+e.username).subscribe(resp=>{console.log(resp)
if(resp==0){
  this.val=true;
 
}
else{

  this.r.navigate(['/dashboard']);
  this.val=false;

  }})

}
  ngOnInit() {
  }

}
