import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  isSaved = false;

  // Step 1: TS equivalent for form tag-- create an instance for FormGroup 
  addContactForm = new FormGroup({
    // Step 1: TS equivalent for inputs - create instances for FormControl
    name: new FormControl('', Validators.required), // Step 5: Working with Validators
    phone: new FormControl('', Validators.required), // goto HTML for step 6
    email: new FormControl('', [Validators.required, Validators.email]) //Work on email validations
  });

  constructor(private contactService: ContactService ) { }

  ngOnInit(): void {
  }

  handleAddContact(){
    console.log(this.addContactForm.value); // submitting the data
    // 2. send the above form data to service 
    this.contactService.createContact(this.addContactForm.value)
      .subscribe((res: any) => { // 3. get the response from the service
        console.log(res);
        if(res && res.id){
          this.isSaved= true;
        }        
      });
  }

}
