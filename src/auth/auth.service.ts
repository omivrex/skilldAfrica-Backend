import { Injectable } from '@nestjs/common';
import {AdminData, LoginDetails} from 'src/dtos/admin.dto';

@Injectable()
export class AuthService {
    registerUser(adminDetais:AdminData){
        return adminDetais
    }
    logingService(loginDetails:LoginDetails){
        return LoginDetails
    }
}
