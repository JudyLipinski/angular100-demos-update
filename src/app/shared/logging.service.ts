import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class Logging {
  logs: string[] = []; // capture logs for testing
  log(message: string): void {
    this.logs.push(message);
    console.log(message);
  }
}
