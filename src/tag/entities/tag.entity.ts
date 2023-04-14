import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Article } from 'src/article/entities/article.entity';
import { User } from 'src/user/entities/user.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @UpdateDateColumn()
  update_time: number;

  @CreateDateColumn()
  create_time: number;

  @Column()
  state: number;

  // 这里需要多学习一些 sql数据库的知识，=> 一个tag只能由一个User创建，一个User可以拥有多个Tag
  //注意如果你的关系是一对一的，那么一般来说是由一个主表关联这些东西，采用官方为建议，添加返向关系
  // 对于tag来说 它和user 是 多对一的关系（Tag是一个抽象，） 一般来说 这边是ManyToOne
  @ManyToOne(() => User, (user) => user.tags)
  create_by: User;

  @ManyToMany(() => Article, (article) => article.tags)
  article: Article[];
}
