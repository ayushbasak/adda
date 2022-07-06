import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import GroupsDTO from './dto/groups.dto';
import { Groups } from './groups.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Groups)
    private groupsRepository: Repository<Groups>,
  ) {}

  async createGroup(groupsDTO: GroupsDTO): Promise<Groups> {
    const group = new Groups();
    group.id = uuid();
    group.name = groupsDTO.name;
    group.description = groupsDTO.description;
    group.subscriber_count = 0;

    return this.groupsRepository.save(group);
  }

  async getGroups(): Promise<Groups[]> {
    return this.groupsRepository.find();
  }
}
