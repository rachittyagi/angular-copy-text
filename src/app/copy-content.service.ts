import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CopyContentService {
  constructor() { }  

  copyContent(content: any) {    
    const copyElem: HTMLTextAreaElement | null = document.createElement('textarea');
    copyElem.setAttribute('readonly', '')
    copyElem.value = content;
    copyElem.style.position = 'absolute';
    copyElem.style.left = '-9999px';
    document.body.appendChild(copyElem);
    copyElem.select();
    document.execCommand('copy');
    document.body.appendChild(copyElem);
  }

}
