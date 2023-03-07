import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from './servises/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multipleInputs';
  // InputField!:FormGroup;
  constructor(private fb: FormBuilder, private _employeservise: DataService,) { }

  InputField = this.fb.group({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    Experience: new FormControl(''),
    Education: new FormControl(''),
    Repeats: this.fb.array([]),
  })
  
  get Repeats():FormArray {
    return this.InputField.get('Repeats') as FormArray;
  }

  addRepeats() {
    const Education = this.fb.control('');
    this.Repeats.push(Education);

    // this.Repeats.push(this.fb.control(''));
  }

  onSubmit() {
    console.log(this.InputField.value,this.Repeats.value);
    this._employeservise.addEmployee(this.InputField.value).subscribe({
      next: (val: any) => {
        alert("data are saved")
      }
    });
  }
}

