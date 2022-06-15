import { Controller, Post, Body } from '@nestjs/common';
import {AdminData, LoginDetails} from 'src/dtos/admin.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService:AuthService){}
    @Post('/register')
    reqister(@Body() adminDetais:AdminData){
        console.log(adminDetais)
        this.AuthService.registerUser(adminDetais)
    }

    @Post('/login')
    login(@Body() loginDetails:LoginDetails){
        this.AuthService.logingService(loginDetails)
    }
}
