/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const LibroSchema = new Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editorial: { type: String, required: true },
  precio: { type: Number, required: true },
  categoria: { type: String, required: true },
  descripcion: { type: String, required: true },
});
