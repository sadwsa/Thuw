
export interface LetterData {
  sender: string;
  recipient: string;
  title: string;
  message: string;
  additionalContent: string;
  date: string;
}

export enum AppState {
  CLOSED = 'CLOSED',
  OPENING = 'OPENING',
  REVEALED = 'REVEALED'
}
