import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // continue if not cacheable.

    return next.handle(req);
  }
  // return of();
}
