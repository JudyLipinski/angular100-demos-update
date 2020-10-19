import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `<h2>Property Binding</h2>
            <p [hidden]="isHidden">Is it hidden?</p>
            <img [src]="'assets/Butterfly1.png'" /><br/>
            <img [src]="file2" /><br/>
            <img src={{file3}} /><br/>`
})
export class PropertyBindingComponent  {
  isHidden = false;
  file2 = "assets/Butterfly2.png";
  file3 = "assets/Butterfly3.png";

}
