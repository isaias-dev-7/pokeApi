import { Controller, Get, Post, Body, UseGuards, Req, SetMetadata } from '@nestjs/common';

import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser, RawHeaders, Auth } from './decorators';
import { User } from './entities/user.entity';
import { UserRoleGuard } from './guards/user-role.guard';
import { RoleProtected } from './decorators/role-protected.decorator';
import { ValidRoles } from './interfaces';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  createUser(@Body() createUserDto: CreateUserDto ) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto ) {
    return this.authService.login(loginUserDto);
  }

  @Get('private')
  @UseGuards( AuthGuard() )
  testingPrivateRutes(
    @GetUser() user: User,
    @RawHeaders() rawHeaders: string[]
  ){
    console.log(rawHeaders);
    return {
      user,
      rawHeaders
    };
  }

  //@SetMetadata('roles',['admin','super-user'])
  @Get('private2')
  @RoleProtected(ValidRoles.user, ValidRoles.admin)
  @UseGuards( AuthGuard(), UserRoleGuard )
  privateRuth(
    @GetUser() user: User
  ){
    
    return { user };
  }

  @Get('private3')
  @Auth(ValidRoles.superUser)
  privateRuth3(
    @GetUser() user: User
  ){
    
    return { user };
  }
}
