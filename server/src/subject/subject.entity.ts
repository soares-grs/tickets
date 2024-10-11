import { Ticket } from 'src/ticket/ticket.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Ticket, (ticket) => ticket.subject)
  tickets: Ticket[];
}
