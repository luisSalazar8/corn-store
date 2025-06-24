import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Product } from "./Product";

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @OneToOne(() => User)
  @JoinColumn()
  user!: User;

  @OneToOne(() => Product)
  @JoinColumn()
  product!: Product;
}
