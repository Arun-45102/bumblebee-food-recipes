import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  private apiHost: string = environment.rapidApi.nutritionApiHost;
  private apiKey: string = environment.rapidApi.nutritionServiceKey;
  private spApiKey: string = environment.spoonacular.apiKey;

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (environment.useRapidApi) {
      request = request.clone({
        setHeaders: {
          'x-rapidapi-host': this.apiHost,
          'x-rapidapi-key': this.apiKey,
        },
      });
    } else {
      request = request.clone({
        setHeaders: {
          'x-api-key': this.spApiKey,
        },
      });
    }
    return next.handle(request);
  }
}
