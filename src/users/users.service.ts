import { Injectable } from '@nestjs/common';
import { User} from './user.entity';

@Injectable()
export class UsersService {
    private readonly users:User[]=[
        {
            id:1,
            name:"lina",
            email:"lina@gmail.com"
        },
        {
            id:2,
            name:"saly",
            email:"saly@gmail.com"
        }
    ];

    findOneByEmail(email:string): User | undefined {
        return this.users.find(user => user.email === email);

    }
}
