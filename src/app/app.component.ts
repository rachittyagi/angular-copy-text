import { Component } from '@angular/core';
import { CopyContentService } from './copy-content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'copyText';
  copyText: string = "Copy this text."
  constructor(private copyContentService: CopyContentService) {}
  copyContent(content: string) {
    this.copyContentService.copyContent(content);
    alert("Copied to clipboard");
  }
}
