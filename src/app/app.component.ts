import { Component } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>

      <ngx-qrcode
        [elementType]="elementType"
        [errorCorrectionLevel]="correctionLevel"
        [value]="value"
        class="bshadow">
      </ngx-qrcode>

      <p>Insert your URL</p>
      <textarea [(ngModel)] = "value"></textarea>

    </div>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
    .content{
      background: coral;
      width: 100vw;
      height: 100vh;
    }
    .bshadow {
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(3px 3px 3px #222222);
      opacity: .5;
    }
    h1{
      margin-bottom: 35px;
      margin-top: 0px;
      padding-top: 20px;
      color: #fff;
    }
    p{
      color: #fff;
    }
    textarea {
        margin-top: 15px; 
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 250px;
        opacity: .5;
    }
    `
  ]
})
export class AppComponent {
  title = 'Angular QR Code Generator';

  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.youtube.com/watch?v=M5QY2_8704o';
}
