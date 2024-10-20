import { Controller, Get } from '@nestjs/common';
import { Subject } from './subject.entity';
import { SubjectService } from './subject.service';

@Controller('subject')
export class SubjectController {
  constructor(private subjectService: SubjectService) {}

  @Get()
  findAll(): Promise<Subject[]> {
    return this.subjectService.findAll();
  }
}
