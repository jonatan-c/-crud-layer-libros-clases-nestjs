import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { LibrosDTO } from './dto/librosDTO';
import { LibrosService } from './libros.service';

// https://localhost:3000/libros
@Controller('libros')
export class LibrosController {
  constructor(private libroService: LibrosService) {}

  @Get('/')
  async getLibros(@Res() res) {
    const libros = await this.libroService.getLibros();
    return res.status(HttpStatus.OK).json(libros);
  }

  @Get('/:id')
  async getLibro(@Res() res, @Param('id') id) {
    const libro = await this.libroService.getLibro(id);
    if (!libro) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'Libro no encontrado',
      });
    }
    return res.status(HttpStatus.OK).json(libro);
  }

  @Post('/')
  async createLibro(@Res() res, @Body() bookDTO: LibrosDTO) {
    const newLibro = await this.libroService.createLibro(bookDTO);
    if (!newLibro) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        message: 'Error al crear el libro',
      });
    }
    return res.status(HttpStatus.OK).json({
      message: 'Libro creado con éxito',
      newLibro,
    });
  }

  @Put('/:id')
  async updateLibro(@Res() res, @Param('id') id, @Body() bookDTO: LibrosDTO) {
    const updatedLibro = await this.libroService.updateLibro(id, bookDTO);
    if (!updatedLibro) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'Libro no encontrado',
      });
    }
    return res.status(HttpStatus.OK).json({
      message: 'Libro actualizado con éxito',
      updatedLibro,
    });
  }

  @Delete('/:id')
  async deleteLibro(@Res() res, @Param('id') id) {
    const deletedLibro = await this.libroService.deleteLibro(id);
    if (!deletedLibro) {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'Libro no encontrado',
      });
    }
    return res.status(HttpStatus.OK).json({
      message: 'Libro eliminado con éxito',
      deletedLibro,
    });
  }
}
