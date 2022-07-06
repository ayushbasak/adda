import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { GroupsService } from './groups.service';
import GroupsDTO from './dto/groups.dto';
import { Groups } from './groups.entity';
@Controller('groups')
export class GroupsController {
  constructor(private groupsService: GroupsService) {}

  @Post()
  async createGroup(@Body() groupsDTO: GroupsDTO) {
    return this.groupsService.createGroup(groupsDTO);
  }

  @Get()
  async findGroups(@Req() req): Promise<Groups[]> {
    return this.groupsService.getGroups();
  }
}
