import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Column,
  Index,
} from "typeorm";
import { User } from "./User";

@Entity()
export class BucketRateLimit {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  tokensUsed!: number;

  @Column("datetime", { precision: 3 })
  refillTimestamp!: Date;

  @OneToOne(() => User)
  @JoinColumn()
  @Index({ unique: true })
  user!: User;
}
