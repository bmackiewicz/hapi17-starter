import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {

  @ObjectIdColumn()
  public _id?: ObjectID;
  @Column()
  public username: string;
  @Column()
  public password: string;

}
