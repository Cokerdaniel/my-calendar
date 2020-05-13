import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CalenderSectionModule } from "./calendar-section/calendar-section.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CalenderSectionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
