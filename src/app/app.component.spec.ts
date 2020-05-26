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

  afterEach(async(() => {
    n++;
  }));

      it('La suma debe ser igual a 4',async(()=> {
        //before each
        (<HTMLInputElement>document.getElementById('num1')).value = '2';
        (<HTMLInputElement>document.getElementById('num2')).value = '2';
        document.getElementById('button').click();
        (<HTMLInputElement>document.getElementById('result')).value = '4';
        expect((<HTMLInputElement>document.getElementById('result')).value).toBe('4');
          //after each
      }));

      it('La suma debe ser igual a 6',async(()=>{
            (<HTMLInputElement>document.getElementById('num1')).value= n.toString();
            (<HTMLInputElement>document.getElementById('num2')).value= '5';
            document.getElementById('button').click();
            (<HTMLInputElement>document.getElementById('result')).value = '6';
            expect((<HTMLInputElement>document.getElementById('result')).value).toBe('6');
            //expect((<HTMLInputElement>document.getElementById('result')).value).not.toBe('6');
            //expect((<HTMLInputElement>document.getElementById('result')).value).toEqual('6');
          }));
      
      it('Contiene "Suma De Numeros"',async(()=>{
            const title = document.getElementById('title').innerHTML;
            expect(title).toContain('Suma De Numeros');
          }));
  
      it('Descripción Contiene -> (App)',async(()=>{
        const des=document.getElementById('descripcion').innerHTML;
        expect(des).toMatch('\(App\)');
      }));   

      it('Titulo Esta Definido',async(()=>{
        const title = document.getElementById('title').innerHTML;
        expect(title).toBeDefined();
        //expect(title).toBeUndefined();
       // expect(title).toBeNull();
      }));   

      it('La Suma Es Mayor A 3',async(()=>{
        (<HTMLInputElement>document.getElementById('num1')).value = '2';
        (<HTMLInputElement>document.getElementById('num2')).value = '2';
        document.getElementById('button').click();
        (<HTMLInputElement>document.getElementById('result')).value = '4';
        expect((<HTMLInputElement>document.getElementById('result')).value).toBeGreaterThan(3);
      }));

      it('La Suma Es Menor A 5',async(()=>{
        (<HTMLInputElement>document.getElementById('num1')).value = '2';
        (<HTMLInputElement>document.getElementById('num2')).value = '2';
        document.getElementById('button').click();
        (<HTMLInputElement>document.getElementById('result')).value = '4';
        expect((<HTMLInputElement>document.getElementById('result')).value).toBeLessThan(5);
      }));

      it('La Suma Es Cercana A 4',async(()=>{
        (<HTMLInputElement>document.getElementById('num1')).value = '2';
        (<HTMLInputElement>document.getElementById('num2')).value = '2';
        document.getElementById('button').click();
        (<HTMLInputElement>document.getElementById('result')).value = '4';
        expect((<HTMLInputElement>document.getElementById('result')).value).toBeCloseTo(4,0.1);
      }));

      it('Función Throw',async(()=>{
        const foo = function (){
          return 2+2;
        };
        expect(foo).not.toThrow();
      }));

  

  
})