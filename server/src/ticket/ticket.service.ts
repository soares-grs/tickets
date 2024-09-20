import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Ticket } from './ticket.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTicketDto } from './dto/createTicketDto';
import { GetTicketDto } from './dto/getTicketDto';
import { UpdateTicketDto } from './dto/updateTicketDto';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,
  ) {}

  findAll(): Promise<Array<Ticket>> {
    return this.ticketRepository.find();
  }

  save(createTicketDto: CreateTicketDto): Promise<GetTicketDto> {
    return this.ticketRepository.save(createTicketDto);
  }

  delete(id: number) {
    return this.ticketRepository.delete({
      id: id,
    });
  }

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    return await this.ticketRepository.update(
      {
        id: id,
      },
      updateTicketDto,
    );
  }
}
