import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { JwtService } from '@nestjs/jwt';
import { Socket, Server } from 'socket.io';
import { MessageWsService } from './message-ws.service';
import { NewMessageDto } from './dtos/new-message.dto';
import { JwtPayload } from '../auth/interfaces';


@WebSocketGateway({ cors: true})
export class MessageWsGateway implements  OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() wss: Server;
  
  constructor(
    private readonly messageWsService: MessageWsService,

    private readonly jwtService: JwtService,
  ) {}

  async handleConnection(client: Socket) {
    const token = client.handshake.headers.authentication as string;
    let payload: JwtPayload;
    try{
      payload = this.jwtService.verify(token);
      await this.messageWsService.registerClient(client, payload.id);
    }catch(error){
      client.disconnect();
      return;
    }

    this.wss.emit('clients-updated', this.messageWsService.getConnectedClients());
  }

  handleDisconnect(client: Socket) {
    this.messageWsService.removeClient(client);
    this.wss.emit('clients-updated', this.messageWsService.getConnectedClients());        
  }

  @SubscribeMessage('menssage-from-client')
  onMessageFromClient(client: Socket, payload: NewMessageDto){
    
    //this is to emit an especifique client (param)
    // client.emit('message-from-server',{
    //   fullname: "Isaias",
    //   message: payload.message || "no message",
    // });

    //this is for emit to all clients with exception client (param)
    // client.broadcast.emit('message-from-server',{
    //   fullname: "Isaias",
    //   message: payload.message || "no message",
    // });

    //this is for all clients without exception
    this.wss.emit('message-from-server',{
       fullname: this.messageWsService.getUserFullName(client.id),
       message: payload.message || "no message",
     });
     
  }
  
}
