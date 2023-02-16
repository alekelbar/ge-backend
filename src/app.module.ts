import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CareerModule } from './career/career.module';
import { CommonModule } from './common/common.module';
import { appConfig } from './common/config/app.config';
import { joiValidation } from './common/config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      validationSchema: joiValidation,
    }),
    MongooseModule.forRoot(process.env.MONGODB),
    CareerModule,
    CommonModule,
  ],
  controllers: [],
  exports: [],
  providers: [],
})
export class AppModule {}
