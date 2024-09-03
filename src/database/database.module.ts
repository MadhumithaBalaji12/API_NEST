import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Database type (e.g., mysql, postgres, etc.)
      host: 'localhost', // Database host
      port: 3306, // Database port
      username: 'root', // Database username
      password: 'M1M2M3M4M4M3M2M1', // Database password
      database: 'deliveryapp', // Database name
      entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Entities to be loaded
      synchronize: true, // Synchronize the database schema with entities (useful for development)
    }),
  ],
})
export class DatabaseModule {}
