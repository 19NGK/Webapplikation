import { Component, OnInit, Input } from '@angular/core';

import { ChatService } from '../shared/services/chat-serice.service';
import { ChatMessage } from '../shared/models/chat-message';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css']
})
export class ChatHistoryComponent implements OnInit {
  @Input() history: string;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    setInterval(() => {
      this.getHistory();
    }, 2000);
  }

  private getHistory(): void {
    this.chatService.getHistory()
      .subscribe((response: ChatMessage[]) => {
        this.history = '';

        for (const history of response) {
          const dateWithoutSecond = new Date(history.date);

          this.history += `${history.nickname} - ${dateWithoutSecond.toLocaleTimeString(['de'], {hour: '2-digit', minute: '2-digit'})}:<br>${history.message}<hr/>`;
        }
      },
    (error: any) => {
      console.log(<any>error);
    });
  }
}