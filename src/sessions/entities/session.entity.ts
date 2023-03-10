import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { number, string } from 'joi';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/auth/entities/user.entity';

export type SessionDocument = HydratedDocument<Session>;
export enum SESSION_TYPES {
  WORKING = 'Trabajo',
  RESTING = 'Descanso',
}

@Schema()
export class Session {
  @Prop({
    required: true,
  })
  name: string; // nombre de la sesión

  @Prop({
    required: true,
  })
  duration: number; // duración en minutos

  @Prop({
    enum: [SESSION_TYPES.WORKING, SESSION_TYPES.RESTING],
    required: true,
  })
  type: string; // tipo de sesión; por ejemplo "trabajo" o "descanso"

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  })
  user: User; // Usuario dueño de esta sesión
}

export const SessionSchema = SchemaFactory.createForClass(Session);
