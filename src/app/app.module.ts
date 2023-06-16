import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenModelComponent } from './template-driven-model/template-driven-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ProductDrivenFormComponent } from './product-driven-form/product-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormFormbuilderComponent } from './reactive-form-formbuilder/reactive-form-formbuilder.component';
import { FormBuilder } from '@angular/forms';
import { SignupFormbuilderComponent } from './signup-formbuilder/signup-formbuilder.component';
import { ReactivePracticeComponent } from './reactive-practice/reactive-practice.component';
import { ReactiveFormbuilderPracticeComponent } from './reactive-formbuilder-practice/reactive-formbuilder-practice.component';
import { CustomValidatorComponent } from './custom-validator/custom-validator.component';
import { ProductReactiveFormComponent } from './product-reactive-form/product-reactive-form.component';
import { ProductReactiveFormbuilderComponent } from './product-reactive-formbuilder/product-reactive-formbuilder.component';
import { RegistrationTemplateFormComponent } from './registration-template-form/registration-template-form.component';
import { MockComponent } from './mock/mock.component';
import { RetrivetableComponent } from './retrivetable/retrivetable.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenModelComponent,
    TemplateDrivenFormComponent,
    ProductDrivenFormComponent,
    ReactiveFormComponent,
    ReactiveFormFormbuilderComponent,
    SignupFormbuilderComponent,
    ReactivePracticeComponent,
    ReactiveFormbuilderPracticeComponent,
    CustomValidatorComponent,
    ProductReactiveFormComponent,
    ProductReactiveFormbuilderComponent,
    RegistrationTemplateFormComponent,
    MockComponent,
    RetrivetableComponent,
    LoginComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
