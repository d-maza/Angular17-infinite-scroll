import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const handelErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      if (error.status === 0) {
        console.error('🤔 An error occurred:', error.error);
      } else {
        console.error(
          `⛔ Backend returned code ${error.status}, body was: `, error.error);
      }

      return throwError(() => new Error('🔄️ Something bad happened; please try again later.'));
    })
  );

};
