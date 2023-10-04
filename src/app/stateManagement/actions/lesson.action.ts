import { createAction, props } from "@ngrx/store";
import { Lesson } from "src/app/models/lesson";

//Action Type
export const ADD_LESSON = '[ADD LESSON] Lesson';

//Action Type
export const REMOVE_LESSON = '[REMOVE LESSON] Lesson';

//Action
export const addLesson = createAction(ADD_LESSON, props<Lesson>());

//Action
export const removeLesson = createAction(REMOVE_LESSON, props<Lesson>());