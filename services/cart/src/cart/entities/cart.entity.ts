import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CartEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;
}
