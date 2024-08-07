import { Component, OnDestroy, OnInit } from '@angular/core';
import { RxjsService } from '../../service/rxjs.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  userForm!: FormGroup;

  ofSkillString!: string;

  intervalSubscribation!: Subscription;

  constructor(private _rxjs: RxjsService) {}

  ngOnInit(): void {
    this.usernameForm();
    //  interval Subscribing and unsubscribing observable
    this.handlingInterval();

    // using pipeable operator  == numbers
    this.handlingPipeableNumber();

    // using pipeable operator  == string
    this.handlingPipeableString();
  }

  ngOnDestroy(): void {
    this.intervalSubscribation.unsubscribe();
  }

  handlingInterval() {
    this.intervalSubscribation = this._rxjs.interval$.subscribe(
      (num: number) => {
        console.log(`interval subscribtion ${num}`);
        // if(num > 12){
        //   console.log(`unlucky number`)
        // }
      }
    );
  }

  handlingPipeableNumber() {
    this._rxjs.ofNumber$.subscribe((num: number) => {
      console.log(`this is even number ${num}`);
    });
  }

  handlingPipeableString() {
    this._rxjs.ofString$.subscribe((skill) => {
      console.log(skill);
      this.ofSkillString = skill;
    });
  }



  usernameForm() {
    this.userForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
    });
  }

  onUsername() {
    if (this.userForm.valid) {
      let newUsername = this.userForm.value;
      this._rxjs.usernameSubject$.next(newUsername.username);
      this.userForm.reset();
    }
  }
}
