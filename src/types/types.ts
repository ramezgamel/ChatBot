export type Switcher = {
  isChatting: boolean;
  setIsChatting: (value: boolean) => void;
};
export type Chat = {
  id: string;
  messages: Message[];
};
export type Message = {
  type: string;
  text: string;
  timeStamp: string;
};
