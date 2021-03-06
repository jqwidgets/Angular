import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxSchedulerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxscheduler.ts';

@NgModule({
    declarations: [AppComponent, jqxSchedulerComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        