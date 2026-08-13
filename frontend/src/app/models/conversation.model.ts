import { Message } from './message.model';

export interface Conversation {
  id: number;
  title: string;
  createdAt: Date;
  messages: Message[];
}