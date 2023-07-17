import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(private storage: Storage,  private router: Router) {}

  async canActivate() {
    const isIntroStorage = await this.storage.get('introShow');
    console.log(isIntroStorage)

    if (isIntroStorage) {
      return true;
    } else {
      this.router.navigateByUrl('/index')
      return false;
    }
  }
  
}
