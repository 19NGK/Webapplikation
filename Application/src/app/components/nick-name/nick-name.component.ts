import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/models/nickname';

@Component({
  selector: 'app-nick-name',
  templateUrl: './nick-name.component.html',
  styleUrls: ['./nick-name.component.css']
})
export class NickNameComponent implements OnInit {

  public message: string;
  public nickname: string;

  constructor() { }

  ngOnInit() {
  }

  public createNickname(name: string): void {
    Person.Nickname = name;

    // this.message = `Benutzername: '${name}' erstellt`;
  }
}
