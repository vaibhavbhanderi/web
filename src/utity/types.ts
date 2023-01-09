export type CreateChatParams = {
  name: string;
  Senderid: string;
  Receiverid: string;
};

export type CreateMessageParams = {
    conversationid: string;
    sender: string;
    text: string;
};
