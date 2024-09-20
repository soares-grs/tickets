import { GetTicketDto } from './dto/getTicketDto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Ticket } from './ticket.entity';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/createTicketDto';
import { UpdateTicketDto } from './dto/updateTicketDto';

@Controller('ticket')
export class TicketController {
  constructor(private ticketService: TicketService) {}

  @Get()
  findAll(): Promise<Ticket[]> {
    return this.ticketService.findAll();
  }

  @Post()
  save(@Body() createTickerDto: CreateTicketDto): Promise<GetTicketDto> {
    return this.ticketService.save(createTickerDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.update(id, updateTicketDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.ticketService.delete(id);
  }
}
