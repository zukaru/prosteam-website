import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export class Contact {
  constructor(
    public name: string,
    public email: string,
    public phone: string,
    public message: string
  ){}
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent implements OnInit {
  submitted = false;

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  submitEmail(name: string, phone: string, email: string, message: string) {
    const contactInfo: Contact = {name, phone, email, message};
    this.http.post<{message: string}>('http://prosteamcleaning.zacstock.com/assets/mail/contact_me.php', contactInfo)
    .subscribe((responseData) => {
      console.log(responseData);
    });
  }

  onSubmit(form: NgForm)  {
    if (form.invalid) {
      return;
    } else {
      this.submitEmail(
        form.value.name,
        form.value.phone,
        form.value.email,
        form.value.message,
      );
      form.resetForm();
      this.submitted = true;
      setTimeout(() => {
        this.submitted = false;
      }, 6000);
    }
  }

}
