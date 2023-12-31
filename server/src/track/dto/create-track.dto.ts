import { ObjectId } from 'mongoose';

export class CreateTrackDto {
  readonly name;
  readonly artist;
  readonly text;
  albumId: ObjectId | null;
}
