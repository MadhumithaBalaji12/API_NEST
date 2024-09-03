import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // Filter products by status, name, and price
  findAll(
    @Query('status') status?: number,
    @Query('name') name?: string,
    @Query('price') price?: number,
  ) {
    const filters = { status, name, price };
    return this.usersService.findAll(filters);
  }
}





