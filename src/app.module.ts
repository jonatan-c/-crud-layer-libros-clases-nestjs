import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosModule } from './libros/libros.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/libros'), LibrosModule],
  // imports: [LibrosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
