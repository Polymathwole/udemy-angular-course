import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prjStatus = ['Stable', 'Critical', 'Finished'];
  formFill = new FormGroup(
    {
      'projectName': new FormControl(null, Validators.required, [this.valPrjName1]),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl(null)
    }
  );

  onSub() {
    console.log(this.formFill.value);
  }

  valPrjName(elem: FormControl): {[invalidProjectName:string]: boolean} {
    let forbid = 'Test';

    if (elem.value === forbid) {
      return {invalidProjectName: true}
    }
    else return null;
  }

  valPrjName1(elem: FormControl): Promise<any> | Observable<any> {
    let forbid = 'Test';

    const prom = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (elem.value === forbid) {
          resolve({invalidProjectName: true});
        }
        else resolve(null);
      }, 2000);
    });
    return prom;
  }
}
