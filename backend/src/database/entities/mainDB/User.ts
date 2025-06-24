import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  firstname!: string;

  @Column()
  lastname!: string;

  @Column()
  email!: string;

  @Column()
  authUID!: string;
}
