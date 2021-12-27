/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface ILibro extends Document {
  readonly titulo: string;
  readonly autor: string;
  readonly editorial: string;
  readonly precio: number;
  readonly categoria: string;
  readonly descripcion: string;
}
