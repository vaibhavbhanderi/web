import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

const users = [];
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
@WebSocketGateway()
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  handleDisconnect(client: any) {
    console.log(`disconnect ${client.id}`);
  }
  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Connectention ${client.id}`);
    client.on('newuserjoin', (name) => {
      const aa = (users[client.id] = name);
      console.log(aa);

      const abc = client.broadcast.emit('userjoinevent', name);
      console.log(abc);
    });
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}



