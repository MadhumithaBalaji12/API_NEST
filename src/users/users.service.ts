import { Injectable } from '@nestjs/common';
import { start } from 'repl';
import {EntityManager} from 'typeorm'

@Injectable()
export class UsersService {
  constructor(private entityManager: EntityManager){}
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
/*     async findAll(role?: 'INTERN'|'ENGINEER'| 'ADMIN', name?:string) // function definitions for function calls in different modules
    {   // new DB Is connected . data is taken only from there 
        // if(role)
        // {return this.users.filter(user => user.role ===role)}
        // return this.users
        const query = `SELECT * FROM deliveryapp.product WHERE status_ = ?`
        const users = await this.entityManager.query(query, [name]);
        return users;
    }
 */

/*     async findAllByStatus() {
      const query = `SELECT * FROM deliveryapp.product WHERE status_ = ?`;
      const products = await this.entityManager.query(query, [1]);
      return products;
    }

    async findAllByName(name: string) {
      const query = `SELECT * FROM deliveryapp.product WHERE name LIKE ?`;
      const products = await this.entityManager.query(query, [`%${name}%`]);
      return products;
    }
    async findAllByPrice(price: number) {
      const query = `SELECT * FROM deliveryapp.product WHERE price <= ?`;
      const products = await this.entityManager.query(query, [price]);
      return products;
    }
    async findAllByCategory(category: string) {
      const query = `SELECT * FROM deliveryapp.product WHERE category = ?`;
      const products = await this.entityManager.query(query, [category]);
      return products;
    }
    async findAllByLaunchDate(launchDate: string) {
      const query = `SELECT * FROM deliveryapp.product WHERE launch_date = ?`;
      const products = await this.entityManager.query(query, [launchDate]);
      return products;
    } */


      /*
      async findAll(filters: {
        status?: number;
        name?: string;
        price?: number;
      }) {
        let query = `SELECT * FROM deliveryapp.product WHERE 1=1`;
        const queryParams: any[] = [];
      
        if (filters.status !== undefined) {
          query += ` AND status_ = ?`;
          queryParams.push(filters.status);
        }
      
        if (filters.name) {
          query += ` AND name LIKE ?`;
          queryParams.push(`%${filters.name}%`);
        }
      
        if (filters.price !== undefined) {
          query += ` AND price <= ?`;
          queryParams.push(filters.price);
        }
        const products = await this.entityManager.query(query, queryParams);
        return products;
      }*/
      
        
    



   /*  findOne(id : number)
    {
        const user = this.users.find(user => user.id === id)
        return user
    }
    async create(user : {name : string , price : number,launch_data : Date,category : string ,description : string ,status : number})
    {
        const userByHighestId = [...this.users].sort((a,b)=>b.id - a.id)
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
    } */
}

/*
task
get all products whose status is 1.
filter based on product name
filter based on product price eg: i have entered rs.40 less than  and equal to 40 product should be listed
category based filters
based on launch date filter
*/

 /*
//VALIDATION
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
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
    create(createUserDto : CreateUserDto)
    {
        const userByHighestId = [...this.users].sort((a,b)=>b.id - a.id)
        const newUser =
        {
            id : userByHighestId[0].id+1,
            ... createUserDto
        }
        this.users.push(newUser)
        return newUser
    }
    update(id : number , updatedUserDto : UpdateUserDto)
    {
        this.users=this.users.map(user => {
            if(user.id === id)
            {
                return {...user , ...updatedUserDto}
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
 

/*
import { Logger } from '@nestjs/common';

async findAll(filters: { status?: number; name?: string; price?: number }) {
  const logger = new Logger('ProductsService');
  let query = `SELECT * FROM deliveryapp.product WHERE 1=1`;
  const queryParams: any[] = [];

  if (filters.status !== undefined) {
    query += ` AND status_ = ?`;
    queryParams.push(filters.status);
  }

  if (filters.name) {
    query += ` AND name LIKE ?`;
    queryParams.push(`%${filters.name}%`);
  }

  if (filters.price !== undefined) {
    query += ` AND price <= ?`;
    queryParams.push(filters.price);
  }

  try {
    const products = await this.entityManager.query(query, queryParams);
    return products;
  } catch (error) {
    logger.error('Error executing query', error.stack);
    throw new Error('Failed to fetch products due to database error');
  }
}
*/
import { Injectable, Logger } from '@nestjs/common';
import { EntityManager } from 'typeorm'; // Assuming you're using TypeORM

@Injectable()
export class UsersService {
  constructor(private readonly entityManager: EntityManager) {}

  // Place the method here
  async findAll(filters: { status?: number; name?: string; price?: number }) {
    const logger = new Logger('ProductsService');
    let query = `SELECT * FROM deliveryapp.product WHERE 1=1`;
    const queryParams: any[] = [];

    if (filters.status !== undefined) {
      query += ` AND status_ = ?`;
      queryParams.push(filters.status);
    }

    if (filters.name) {
      query += ` AND name LIKE ?`;
      queryParams.push(`%${filters.name}%`);
    }

    if (filters.price !== undefined) {
      query += ` AND price <= ?`;
      queryParams.push(filters.price);
    }

    try {
      const products = await this.entityManager.query(query, queryParams);
      return products;
    } catch (error) {
      logger.error('Error executing query', error.stack);
      throw new Error('Failed to fetch products due to database error');
    }
  }
}

