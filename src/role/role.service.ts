import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RoleService {
    constructor(private readonly prisma: PrismaService) { }
    
    async craete(createRoleDto: CreateRoleDto) {
        try {
            const { role, context } = createRoleDto;
            return await this.prisma.roles.create({
                data: {
                role,
                context
              },
            });
          } catch (error) {
            console.error('Error creating role:', error);
            throw error;
          }
        
    }
}
