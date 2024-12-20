import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PartnersModule } from './partners/partners.module';
import { CoursesModule } from './courses/courses.module';
import { TenantModule } from './tenant/tenant.module';

@Module({
  imports: [PrismaModule, AuthModule, PartnersModule, CoursesModule, TenantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
