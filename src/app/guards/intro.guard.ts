import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(private storage: Storage) {}

  async canActivate() {
    const isIntroStorage = await this.storage.get('introShow');
    console.log(isIntroStorage)

    if (isIntroStorage) {
      return true;
    } else {
      return false;
    }
  }
  
}
