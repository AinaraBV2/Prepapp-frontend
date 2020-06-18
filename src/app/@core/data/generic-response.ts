export class GenericResponse {

    protected errors: string[] = [];

    constructor(
        protected success: boolean,
        protected response?: any,
        errors?: any,
    ) {
        this.errors = this.errors.concat([errors]);
        if (errors instanceof Array) {
            this.errors = errors;
        }
    }


    getDataResponse(): any {
        return this.response;
    }

    isSuccess(): boolean {
        return this.success;
    }

    getErrors(): string[] {
        return this.errors.filter(val => !!val);
    }

    isFailure(): boolean {
        return !this.success;
    }

}


