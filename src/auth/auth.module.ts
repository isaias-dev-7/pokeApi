import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from './entities/user.entity';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy:'jwt' }),
    JwtModule.registerAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory: (configService: ConfigService) => {
        console.log(`jwt secret ${configService.get('JWT_SECRET')}`); 
        return {
          secret: process.env.JWT_SECRET,
          signOptions:{
           expiresIn:'2h'
          }
        }
      }
    }),
    // JwtModule.register({
    //   secret: process.env.JWT_SECRET,
    //   signOptions:{
    //     expiresIn:'2h'
    //   }
    // })
  ],
  exports:[ TypeOrmModule ]
})
export class AuthModule {}
