// contact-info.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  template: `
    <div class="contact-info">
      <a href="tel:+96176933899" class="contact-link">
        <i class="fa fa-phone"></i> Call Us: 76/933899
      </a>
      <a
        href="http://facebook.com/profile.php?id=61552944133124"
        target="_blank"
        class="contact-link"
      >
        <i class="fa fa-facebook"></i> Facebook
      </a>
      <a
        href="https://www.instagram.com/royalchicken_23?igsh=MWlteHk4aWI5bXBzbw=="
        target="_blank"
        class="contact-link"
      >
        <i class="fa fa-instagram"></i> Instagram
      </a>
      <a
        href="http://tiktok.com/@royal_chicken94?_t=8iMwI0b3g2c&_r=1"
        target="_blank"
        class="contact-link"
      >
        <img src="../../../assets/icons8-tiktok-24.png" alt="" />&nbsp; TikTok
      </a>
    </div>
  `,
  styles: [
    `
      .contact-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        background-color: #333; /* Dark background color */
        color: #fff; /* White text color */
        border-radius: 10px; /* Rounded corners */
      }

      .contact-link {
        text-decoration: none;
        color: #fff; /* White text color */
        margin: 10px;
        display: flex;
        align-items: center;
        transition: color 0.3s; /* Smooth color transition on hover */
      }

      .contact-link i {
        margin-right: 10px;
      }

      .contact-link:hover {
        color: orange; /* Change color on hover */
      }
    `,
  ],
})
export class ContactInfoComponent {}
