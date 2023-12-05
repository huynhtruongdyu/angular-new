import { Injectable } from '@angular/core';
import *  as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private key = "P@ssw0rd";

  constructor() { }

  public encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, this.key).toString();
  }

  public decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }

}
