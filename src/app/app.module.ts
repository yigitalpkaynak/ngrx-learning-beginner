import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonCreateComponent } from './components/lesson-create/lesson-create.component';
import { LessonReadComponent } from './components/lesson-read/lesson-read.component';
import { LessonCountComponent } from './components/lesson-count/lesson-count.component';
import { StoreModule } from '@ngrx/store';
import { lessonReducer } from './stateManagement/reducers/lesson.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LessonCreateComponent,
    LessonReadComponent,
    LessonCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      lesson: lessonReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
