import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users =[ // instead of table // properties
          {
            id: 1,
            name: "John Doe",
            email: "johndoe@example.com",
            role: "ADMIN"
          },
          
          {
            id: 2,
            name: "Jane Smith",
            email: "janesmith@example.com",
            role: "ENGINEER"
          },
          
          {
            id: 3,
            name: "Alice Johnson",
            email: "alicejohnson@example.com",
            role: "INTERN"
          },
          
            {
            id: 4,
            name: "Bob Brown",
            email: "bobbrown@example.com",
            role: "ENGINEER"
          },
          
            {
            id: 5,
            name: "Charlie Davis",
            email: "charliedavis@example.com",
            role: "INTERN"
          }
          
    ]
    findAll(role?: 'INTERN'|'ENGINEER'| 'ADMIN') // function definitions for function calls in different modules
    {
        if(role)
        {return this.users.filter(user => user.role ===role)}
        return this.users
    }
    findOne(id : number)
    {
        const user = this.users.find(user => user.id === id)
        return user
    }
    create(user : {name : string , email : string ,role : 'INTERN'|'ENGINEER'|'ADMIN'})
    {
        const userByHighestId = [...this.users].sort((a,b)=>b.id = a.id)
        const newUser =
        {
            id : userByHighestId[0].id+1,
            ...user 
        }
        this.users.push(newUser)
        return newUser
    }
    update(id : number , updatedUser : {name ?: string , email ?: string ,role ?: 'INTERN'|'ENGINEER'|'ADMIN'})
    {
        this.users=this.users.map(user => {
            if(user.id === id)
            {
                return {...user , ...updatedUser}
            }
            return user
        } )

        return this.findOne(id)
    }
    delete(id : number){
        const removedUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id)
        return removedUser
    }
}
