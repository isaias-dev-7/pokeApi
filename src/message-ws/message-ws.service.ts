import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';



interface ConnectedClients {
    [id: string]: Socket,
}

@Injectable()
export class MessageWsService {

    private connectedClients: ConnectedClients = {};

    registerClient(client: Socket){
        this.connectedClients[client.id] = client;
    }

    removeClient(client: Socket){
        delete this.connectedClients[client.id];
    }

    getConnectedClients(): string[] {
        return Object.keys( this.connectedClients );
      }
}
