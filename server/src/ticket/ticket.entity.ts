import { Subject } from './../subject/subject.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    transformer: {
      to: (value: Date) => value,
      from: (value: string) => new Date(value + 'Z'),
    },
  })
  dateCreated: Date;

  @ManyToOne(() => Subject, (subject) => subject.tickets)
  subject: Subject;

  @Column({ default: false })
  isConcluded: boolean;
}
