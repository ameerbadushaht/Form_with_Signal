import { Injectable, signal } from '@angular/core';
import { Forms } from '../components/form-signal/form-signal.component';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormSignalService {
  public formData = signal<Forms[]>([]);

  constructor() {}

   //first Method

  // sendForm(newForm: Forms) {
  //   this.formData.update((data) => {
  //     return [...data, newForm];
  //   });
  //   console.log("formData::Service", this.formData())
  // }


  // Second Method
  
  sendForm(form:Forms){
    this.formData.mutate((data)=>{
      data.push(form)
    })
    console.log("formData::Service", this.formData())
  }
}
