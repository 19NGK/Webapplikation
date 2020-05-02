import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/models/nickname';

@Component({
  selector: 'app-nick-name',
  templateUrl: './nick-name.component.html',
  styleUrls: ['./nick-name.component.css']
})
export class NickNameComponent implements OnInit {

  public nickname: string;
  public isVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public createNickname(name: string): void {
    Person.Nickname = name;
  }

  showAlert() : void {
    if (this.isVisible) {
      return
    }
    this.isVisible = true;
    setTimeout(()=> this.isVisible = false,2500)
  }
}