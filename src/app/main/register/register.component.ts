import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Register: FormGroup;
  submitted = false;
  registerForm: any;
  constructor(private fb:FormBuilder,private ht:HttpClient,private s:DataService,private r:Router) { }
  
   

     

  
  get f() { return this.registerForm.controls; }
  
  
  ngOnInit() {
  
  this.registerForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', Validators.required],
    username: ['', Validators.required],
    mobileno: ['', Validators.required],
    courses: ['', Validators.required],
    
    addresses:this.fb.array([
        this.fb.group({
             city:['',Validators.required],
              state:['',Validators.required],
              village:['',Validators.required],
              pincode:['',Validators.required]
            })
          ])

}, 
);
}

  
  onSubmit() {
    this.submitted = true;

   
    if (this.registerForm.invalid) {
        return;
    }

    this.s.Data(this.registerForm.value).subscribe(resp=>console.log(resp))
    this.r.navigate(['/login'])
}

}
