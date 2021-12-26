import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConceptsComponent } from './concepts/components/concepts/concepts.component';
import { AddContactComponent } from './contacts/components/add-contact/add-contact.component';
import { ContactsComponent } from './contacts/components/contacts/contacts.component';
import { HomeComponent } from './home/components/home/home.component';

//configuring routes for the whole app
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/new', component: AddContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // registering the configured routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
