import { join } from 'path';
import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CarsModule, BrandsModule, SeedModule, AuthModule,
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') })
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule { }
