import { Observable } from 'rxjs';
import { GenericResponse } from './generic-response';

export class User {
  constructor(
    public id_usuario: string,
    public nombre: string,
    public siglas: string,
    public hash: string,
    public token: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}

export abstract class UserData {
  abstract getUsers(): Observable<GenericResponse>;
  abstract getUser(user: string): Observable<GenericResponse>;
}
