import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormSignalService } from '../../service/form-signal.service';

@Component({
  selector: 'app-form-signal',
  templateUrl: './form-signal.component.html',
  styleUrls: ['./form-signal.component.scss'],
})
export class FormSignalComponent {
  form: FormGroup;


  constructor(private formBuilder: FormBuilder, public FormSignalService:FormSignalService){}
  ngOnInit(){
    this.form=this.formBuilder.group({
      name:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      password:[null,Validators.required]
    })

  }

  onSubmit() {
    if(this.form.valid){
      const newForm = this.form.value;
      this.FormSignalService.sendForm(newForm);
      console.log("form submitted::",newForm)
      this.clearForm();
    }
  }
  clearForm() {
    this.form.reset();
  }
}


export interface Forms{
  name:string;
  email:string;
  password:string
}

