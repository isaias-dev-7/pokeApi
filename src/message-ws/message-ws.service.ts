import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { User } from '../auth/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';



interface ConnectedClients {
    [id: string]: {
        socket: Socket,
        user: User,
    }
}

@Injectable()
export class MessageWsService {

    private connectedClients: ConnectedClients = {};

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ){}

    async registerClient(client: Socket, userId: string){
        const user = await this.userRepository.findOneBy({ id: userId });
        if(!user) throw new Error('User not foud');
        
        this.connectedClients[client.id] = {
            socket: client,
            user,
        };
    }

    removeClient(client: Socket){
        delete this.connectedClients[client.id];
    }

    getConnectedClients(): string[] {
        return Object.keys( this.connectedClients);
      }

    getUserFullName(socketId: string){
        return this.connectedClients[socketId].user.fullname;
    }
}
