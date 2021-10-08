import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
// import { appendFile } from 'fs';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>{{title}}</h1>
    <p>This app is to help learn forms with formly</p>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
      <button type="submit" mat-raised-button color="primary">Submit</button>
    </form>
    <pre>{{model | json}}</pre>
  </div>
  `,
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = "Formly Practice"
  form = new FormGroup({});
  model = {
    email: 'email@gmail.com',
    terms_1: false,
    terms: true,
    date_of_birth: new Date(),
    amount: 500,
    name: "Kent C. Strait",
    description: "Put Your Description Here",
    era: 1,
    ip: "2.148.3.2",
 }

  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter name',
        required: true,
      }
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email',
        placeholder: 'Enter email',
        minLength: 3,
        maxLength: 50,
      }
    },
    {
      key: 'amount',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Amount',
        placeholder: 'Enter Amount $0.00',
        min: 1,
        max: 500,
      }
    },
    {
      key: 'date_of_birth',
      type: 'datepicker',
      templateOptions: {
        label: 'Date of Birth',
        placeholder: 'Enter DOB',
        description: 'Description',
        required: true,
      }
    },
    {
      key: 'ip',
      type: 'input',
      templateOptions: {
        label: 'Enter Ip Address',
        required: true,
      },
      validators: {
        validation: ['ip']
      },
    },
    {
      key: 'terms',
      type: 'checkbox',
      templateOptions: {
        label: 'Accept terms',
        description: 'Please accept out terms of use',
        required: true
      }
    },
    {
      key: 'terms2',
      type: 'toggle',
      templateOptions: {
        label: 'Accept terms2',
        description: 'Please double accept out terms of use',
        required: true,
      }
    },
    {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        label: 'Description',
        placeholder: 'Enter description',
      }
    },
    {
      key: 'era',
      type: 'radio',
      templateOptions: {
        label: 'Era',
        placeholder: 'Year of publication',
        description: 'Pick the proper Age',
        options: [
          {value: 1, label: 'Modern'},
          {value: 2, label: 'Copper'},
          {value: 3, label: 'Bronze'},
          {value: 4, label: 'Silver'},
          {value: 5, label: 'Gold'},
        ]
      }
    },
    // Repeatable Sections
    {
      key: 'comics',
      type: 'repeat',
      templateOptions: {
        addText: 'Add Comics',
      },
      fieldArray: {
        fieldGroup: [
          {
            type: 'input',
            key: 'comicName',
            templateOptions: {
              label: 'Name and Issue Number',
              required: true,
            },
          },
          {
            type: 'datepicker',
            key: 'comicDate',
            templateOptions: {
              label: 'Cover Date',
            },
          },
          {
            type: 'input',
            key: 'amount',
            templateOptions: {
              type: 'number',
              label: 'Amount',
              placeholder: 'Enter Value',
              min: 1,
              max: 30000,
            },
          },
        ]
      }
    }
  ];

  onSubmit() {
    console.log(this.model);
  }
}
