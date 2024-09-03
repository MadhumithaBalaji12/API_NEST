import { Injectable, Logger } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class UsersService {
  private readonly logger = new Logger('ProductsService');

  constructor(private readonly entityManager: EntityManager) {}

  async findAll(filters: { status?: number; name?: string; price?: number }) {
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
      this.logger.error('Error executing query', error.stack);
      throw new Error('Failed to fetch products due to database error');
    }
  }
}


