import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("session")){
    return true;
  }
  inject(Router).navigateByUrl("/")
  return false;
};
