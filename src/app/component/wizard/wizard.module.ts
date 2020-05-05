import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WizardComponent } from './wizard.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from '../user/register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddAmazonProductComponent } from './add-amazon-product/add-amazon-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { AddBirthdateWizardComponent } from './add-birthdate-wizard/add-birthdate-wizard.component';

const wizardRoutes: Routes = [
    {
        path: '',
        component: WizardComponent,
        children: [
            {
                path: '',
                component: WelcomeComponent,
            },
            {
                path: 'signup',
                component: SignupComponent,
            }
            ,
            {
                path: 'addBirthdate',
                component: AddBirthdateWizardComponent,
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(wizardRoutes), ReactiveFormsModule, ReactiveFormsModule
    ],
    declarations: [WizardComponent, WelcomeComponent, AddAmazonProductComponent, SearchProductComponent, AddBirthdateWizardComponent],
    providers: []
})
export class WizardModule { }
