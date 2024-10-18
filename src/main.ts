import { ApplicationConfig } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';


const config: ApplicationConfig = { providers: [] };

bootstrapApplication(AppComponent, config)
  .catch((err) => console.error(err));
