import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cats')
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'firstName', length: 50, nullable: false })
  firstName: string;

  @Column({ name: 'lastName', length: 50, nullable: false })
  lastName: string;

  @Column({ length: 200, nullable: true })
  achievements: string;

  @Column({ nullable: false })
  isActive: boolean;

  @Column({ type: 'float', nullable: true })
  rating: number;
}
