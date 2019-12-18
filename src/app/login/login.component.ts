import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message = "";
  data;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(8)]]

    });
  }
  /**  logging user in */
  login() {
    const credentials = this.loginForm.value;
    // console.log(credentials);
    localStorage.setItem('user', JSON.stringify({ credentials }));
    this.router.navigate(["create-new"]);
  }

  ngOnInit() {}
}
