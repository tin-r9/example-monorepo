import { Component } from "@angular/core";
import { example1 } from '@example-monorepo/utilities';

@Component({
  selector: "example-monorepo-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = `${example1}`;
}
