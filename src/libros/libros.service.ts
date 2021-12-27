import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LibrosDTO } from './dto/librosDTO';
import { ILibro } from './interfaces/libros.interface';

@Injectable()
export class LibrosService {
  constructor(
    @InjectModel('Libro') private readonly libroModel: Model<ILibro>,
  ) {}

  async getLibros(): Promise<ILibro[]> {
    return await this.libroModel.find();
  }

  async getLibro(id: string): Promise<ILibro> {
    return await this.libroModel.findById(id);
  }

  async createLibro(libro: LibrosDTO): Promise<ILibro> {
    return await this.libroModel.create(libro);
  }

  async updateLibro(id: string, libro: LibrosDTO): Promise<ILibro> {
    return await this.libroModel.findByIdAndUpdate(id, libro, { new: true });
  }

  async deleteLibro(id: string): Promise<ILibro> {
    return await this.libroModel.findByIdAndDelete(id);
  }
}
