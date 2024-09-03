/*import { Body, Controller, Delete, Get, Param, Patch, Post, Query,ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {*/
    // the routes we want to handle
    /*
    GET/users 
    GET/users/:id --using params
    POST/users
    PATCH/users/:id -- to identify the param that we want to patch
    DELETE/users/:id -- to know thw user we want to delete 
    */ 
  /* constructor(private readonly userService : UsersService){}
   @Get() // get all user
   findAll(@Query('role') role ?:'INTERN'|'ENGINEER'|'ADMIN',@Query('name') name?:string )//query params are optional
   {
      console.log(name)
    return this.userService.findAll(role, name)
   }
    @Get('interns') // get all interns
   findAllInterns()
   {
    return []
   } 
   "output in postman:[]"
   @Get(':id') // get 1 user
   findOne(@Param('id',ParseIntPipe) id:number)
   {
    return this.userService.findOne(id);//+ is addes to convert the string "1" in id to number 1 in ind
   }

  
   // whatever comes after the slash is read as id so after this call don't place any call without param
   
/*    @Get('interns') // get all interns
   findAllInterns()
   {
    return []
   } 
   output in thunder client:
  {
    "id": "interns"
  }
 */
/*@Post()
create(@Body() user: {name : string , email : string ,role : 'INTERN'|'ENGINEER'|'ADMIN'}) // what to push
   {
    return this.userService.create(user)
   }
   @Patch(':id') // add 1 user
   update(@Param('id',ParseIntPipe) id:number ,@Body() userUpdate :{name ?: string , email ?: string ,role ?: 'INTERN'|'ENGINEER'|'ADMIN'})
   {
    return this.userService.update(id,userUpdate)
   }
   @Delete(':id') // delete 1 user
   delete(@Param('id',ParseIntPipe) id:number)
   {
    return this.userService.delete(id)
   } */
// ALL THE FUNCTION DEFINITIONS ARE THERE IN  USERSERVICES.TS


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DTOS
/*import { Body, Controller, Delete, Get, Param, Patch, Post, Query,ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
@Controller('users')
export class UsersController 
{
    // the routes we want to handle
    /*
    GET/users 
    GET/users/:id --using params
    POST/users
    PATCH/users/:id -- to identify the param that we want to patch
    DELETE/users/:id -- to know thw user we want to delete 
    */ 
   /*constructor(private readonly userService : UsersService){}
   @Get() // get all user
   findAll(@Query('role') role ?:'INTERN'|'ENGINEER'|'ADMIN')//query params are optional
   {
    return this.userService.findAll(role)
   }
    @Get('interns') // get all interns
   findAllInterns()
   {
    return []
   } 
   "output in postman:[]"
   @Get(':id') // get 1 user
   findOne(@Param('id',ParseIntPipe) id:number)
   {
    return this.userService.findOne(id);//+ is addes to convert the string "1" in id to number 1 in ind
   }

   
   // whatever comes after the slash is read as id so after this call don't place any call without param
/*    @Get('interns') // get all interns
   findAllInterns()
   {
    return []
   } 
   output in thunder client:
  {
    "id": "interns"
  }
 */
  /* @Post() // using createUserDto instead of user just because of pattern .
   create(@Body() createUserDto : CreateUserDto) // using DTO instead of types
   {
    return this.userService.create(createUserDto)
   }
   @Patch(':id') // add 1 user
   update(@Param('id',ParseIntPipe) id:number ,@Body() userUpdateDto :UpdateUserDto)
   {
    return this.userService.update(id,userUpdateDto)
   }
   @Delete(':id') // delete 1 user
   delete(@Param('id',ParseIntPipe) id:number)
   {
    return this.userService.delete(id)
   }
}*/
import { Controller, Get, Query, Param, Post, Body, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('status') // Get all products with status 1
  findAllByStatus() {
    return this.usersService.findAllByStatus();
  }

  @Get('names') // Filter products by name
  findAllByName(@Query('name') name: string) {
   console.log('hiii')
    return this.usersService.findAllByName(name);
  }

  @Get('price') // Filter products by price (<= 40)
  findAllByPrice(@Query('price') price: number) {
    return this.usersService.findAllByPrice(price);
  }

  @Get('category') // Filter products by category
  findAllByCategory(@Query('category') category: string) {
    return this.usersService.findAllByCategory(category);
  }

  @Get('launch-date') // Filter products by launch date
  findAllByLaunchDate(@Query('launchDate') launchDate: string) {
    return this.usersService.findAllByLaunchDate(launchDate);
  }

}
 
/* import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service'; // Adjust the import path as needed

@Controller('products')
export class ProductsController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll(
    @Query('status') status?: number,
    @Query('name') name?: string,
    @Query('price') price?: number,
  ) {
    // Create filters object from query parameters
    const filters = { status, name, price };
    
    try {
      // Call the service method with filters
      const products = await this.userService.findAll(filters);
      return products;
    } catch (error) {
      // Handle potential errors
      throw new Error(`Error fetching products: ${error.message}`);
    }
  }
}
export { Controller }; */
/////////////////////////////
/*import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service'; // Adjust the import path as needed

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async findAll(
    @Query('status') status?: number,
    @Query('name') name?: string,
    @Query('price') price?: number,
  ) {
    const filters = { status, name, price };
    try {
      const users = await this.userService.findAll(filters);
      return users;
    } catch (error) {
      throw new Error(`Error fetching users: ${error.message}`);
    }
  }
}




