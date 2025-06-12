import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  saadetud = false;
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_okbdlyw', 'template_3aypcsr', e.target as HTMLFormElement, {
        publicKey: 'bDwXLGtyDipjAUp1O',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          this.saadetud = true;
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
