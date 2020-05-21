import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let n= 0;

  beforeEach(async(()=>{

    TestBed.configureTestingModule({
      declarations:[
        AppComponent
      ],
      providers:[]
    }).compileComponents();
   
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .createComponent(AppComponent);
  }));

afterEach(async(()=>{
  n+1;
}))

  it('La suma debe ser igual a 2',async(()=>{

    (<HTMLInputElement>document.getElementById('num1')).value= n.toString();
    (<HTMLInputElement>document.getElementById('num2')).value= '2';
    document.getElementById('button').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('2');

  }));

  it('La suma debe ser igual a 3',async(()=>{
    //before each
        (<HTMLInputElement>document.getElementById('num1')).value= n.toString();
        (<HTMLInputElement>document.getElementById('num2')).value= '5';
        document.getElementById('button').click();
        expect((<HTMLInputElement>document.getElementById('result')).value).toBe('3');
    //after each
      }));

})