export interface Message {
  id: number;
  sender: 'Moule' | 'AI';
  text: string;
  timestamp: Date;
  type: 'text' | 'voice';
}