import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { MessageWsService } from './message-ws.service';


@WebSocketGateway({ cors: true})
export class MessageWsGateway implements  OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() wss: Server;
  
  constructor(
    private readonly messageWsService: MessageWsService
  ) {}

  handleConnection(client: Socket) {
    this.messageWsService.registerClient(client);
    this.wss.emit('clients-updated', this.messageWsService.getConnectedClients());
  }

  handleDisconnect(client: Socket) {
    this.messageWsService.removeClient(client);
    this.wss.emit('clients-updated', this.messageWsService.getConnectedClients());
  }

  
}
