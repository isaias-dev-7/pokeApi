import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway } from '@nestjs/websockets';
import { MessageWsService } from './message-ws.service';

@WebSocketGateway({ cors: true})
export class MessageWsGateway implements  OnGatewayConnection, OnGatewayDisconnect {
  
  constructor(
    private readonly messageWsService: MessageWsService
  ) {}

  handleConnection(client: any, ...args: any[]) {
    
  }

  handleDisconnect(client: any) {
    
  }
}
