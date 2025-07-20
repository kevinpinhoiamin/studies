import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messages = signal<string[]>([]);

  get allMessages() {
    return this.messages.asReadonly();
  }

  addMessage(message: string) {
    this.messages.update((oldMessages) => [...oldMessages, message]);
  }
}
