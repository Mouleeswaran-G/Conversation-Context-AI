import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  message = '';

  messages = [
    {
      sender: 'AI',
      text: 'Hello! How can I help you today?'
    }
  ];

  sendMessage() {

  if (this.message.trim() === '') {
    return;
  }

  const userMessage = this.message;

  this.messages.push({
    sender: 'Moule',
    text: userMessage
  });

  this.message = '';

  setTimeout(() => {

    this.messages.push({
      sender: 'AI',
      text: 'Got it! Tell me more.'
    });

  }, 500);

}
}