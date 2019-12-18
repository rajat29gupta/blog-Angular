import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {
  data;

  blogForm: FormGroup;

  message;
  menu : boolean = false;
  constructor(private router: Router,private fb: FormBuilder,    public snackBar: MatSnackBar) {
    if (localStorage.getItem("user") == null) {
      this.router.navigate(['']);
    }
    this.blogForm = this.fb.group({
      'title': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'content': ['', Validators.required],
      'blogImage': ['', [Validators.required]],
    });
  }

  //logging user out
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }

  home(){
    this.router.navigate(['']);
  }
  submitForm() {

    const data = this.blogForm.value;
    this.openSnackBar(
      "Blog Saved successfully"
    );
    localStorage.setItem('blog-data', JSON.stringify({ data }));
    // this.router.navigate(["/"]);

  }

  openSnackBar(message: string) {
    this.snackBar.open(message)._dismissAfter(2000);
  }

  ngOnInit() {
  }

}
