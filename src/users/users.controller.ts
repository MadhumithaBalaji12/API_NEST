import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
    // the routes we want to handle
    /*
    GET/users 
    GET/users/:id --using params
    POST/users
    PATCH/users/:id -- to identify the param that we want to patch
    DELETE/users/:id -- to know thw user we want to delete 
    */ 
   constructor(private readonly userService : UsersService){}
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
   findOne(@Param('id') id:string)
   {
    return this.userService.findOne(+id);//+ is addes to convert the string "1" in id to number 1 in ind
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
@Post()
create(@Body() user: {name : string , email : string ,role : 'INTERN'|'ENGINEER'|'ADMIN'}) // what to push
   {
    return this.userService.create(user)
   }
   @Patch(':id') // add 1 user
   update(@Param('id') id:string ,@Body() userUpdate :{name ?: string , email ?: string ,role ?: 'INTERN'|'ENGINEER'|'ADMIN'})
   {
    return this.userService.update(+id,userUpdate)
   }
   @Delete(':id') // delete 1 user
   delete(@Param('id') id:string)
   {
    return this.userService.delete(+id)
   }
// ALL THE FUNCTION DEFINITIONS ARE THERE IN  USERSERVICES.TS

}

