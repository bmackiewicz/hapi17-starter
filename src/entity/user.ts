import { Entity, Column, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {

  @ObjectIdColumn()
  public id?: ObjectID;
  @Column()
  public login: string;
  @Column()
  public password: string;

}
