import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Message } from './models/message.model';

@Component({
  selector: 'app-root',
  imports: [FormsModule,DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  message = '';

  messages: Message[] = [
    {
      id: 1,
      sender: 'AI',
      text: 'Hello! How can I help you today?',
      timestamp: new Date(),
      type: 'text'
    }
  ];

  sendMessage() {

    if (this.message.trim() === '') {
      return;
    }

    const userMessage: Message = {
      id: this.messages.length + 1,
      sender: 'Moule',
      text: this.message,
      timestamp: new Date(),
      type: 'text'
    };

    this.messages.push(userMessage);

    this.message = '';

    setTimeout(() => {

      const aiMessage: Message = {
        id: this.messages.length + 1,
        sender: 'AI',
        text: 'Got it! Tell me more.',
        timestamp: new Date(),
        type: 'text'
      };

      this.messages.push(aiMessage);

    }, 500);
  }

}