import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { User, UserData } from '../data/users';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { GenericResponse } from '../data/generic-response';
import 'rxjs/Rx';

@Injectable({
    providedIn: 'root',
})
export class UserService extends UserData {

    // Uri Calls
    private baseUrl = environment.usuariosBaseUrl;
    private withTokenUrl = environment.usuariosBaseUrl + 'token/';
    private withRolUrl = environment.usuariosBaseUrl + 'rol/';

    // Cookie parameters
    private cookieToken = 'token';
    private cookieRemember = 'recuerdame';
    private cookieIdentifier = 'id';

    /**
     * CONSTRUCTOR DEL SERVICIO DE USUARIOS
     * @param http -> Cliente para realizar las llamadas a la API
     * @param cookies -> Cookies para realizar la función de login
     */
    constructor(
        private http: HttpClient,
        private cookies: CookieService,
    ) { super(); }

    /**
     * Método que obtiene la información de todos los usuarios
     */
    getUsers(): Observable<GenericResponse> {
        return this.http.get<User[]>(this.baseUrl).pipe(
            map((data: User[]) => {
                return new GenericResponse(
                    true,
                    data,
                    null,
                );
            }),
            catchError((err: any) => {
                return this.handleResponseError(err);
            }),
        );
    }

    /**
     * Método que obtiene la información del usuario
     * a partir de su identificador
     * @param user -> identificador del usuario.
     */
    getUser(user: string): Observable<GenericResponse> {
        return this.http.get<User>(this.baseUrl + user).pipe(
            map((data: User) => {
                return new GenericResponse(
                    true,
                    data,
                    null,
                );
            }),
            catchError((err: any) => {
                return this.handleResponseError(err);
            }),
        );
    }


    // ######################################### COOKIES FUNCTIONS #################################################

    /**
     * Método que introduce el token del usuario en la cookie
     * @param token -> token del usuario
     */
    setToken(token: string) {
        this.cookies.set(this.cookieToken, token);
    }

    /**
     * Método que obtiene el token del usuario de la cookie
     */
    getToken() {
        return this.cookies.get(this.cookieToken);
    }

    /**
     * Método que introduce en la cookie el nombre de usuario
     * @param nombre del usuario
     */
    setIdentifier(id: string) {
        this.cookies.set(this.cookieIdentifier, id );
    }

    /**
     * Método que obtiene el nombre del usuario
     */
    getIdentifier() {
        return this.cookies.get(this.cookieIdentifier);
    }

    /**
     * Método que elimina las cookies del inicio de sesión
     */
    deleteCookies() {
        this.cookies.delete(this.cookieToken);
        this.cookies.delete(this.cookieIdentifier);
    }

    // ##############################################################################################################




    handleResponseError(res: any): Observable<GenericResponse> {
        let errors = [];

        if (res instanceof HttpErrorResponse && res.status !== 0) {
            errors = res.error?.errors;
        } else {
            errors.push('Algo ha ido mal');
        }
        return of(
          new GenericResponse(
            false,
            res,
            errors,
        ));
    }


}

