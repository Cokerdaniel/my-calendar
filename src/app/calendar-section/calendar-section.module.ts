import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalenderSectionComponent } from "./calendar-section.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [CalenderSectionComponent],
  imports: [CommonModule, FormsModule],
  exports: [CalenderSectionComponent],
})
export class CalenderSectionModule {}
