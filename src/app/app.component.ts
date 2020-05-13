import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('result') result: any;
  title = 'Suma-De-Numeros';

  public ngOInit(): void{

  }

  
  public add(num1: number, num2: number ): number{
    return Number(num1)+Number(num2);
  }

  public printadd(num1: number, num2:number): any{
    this.result.nativeElement.value= this.add(num1,num2);
  }
}
