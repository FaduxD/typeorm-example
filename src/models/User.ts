import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  constructor(login: string, password: string, name: string, age?: number) {
    this.login = login;
    this.password = password;
    this.name = name;
    this.age = age;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  age?: number;

  @Column()
  password: string;
}
