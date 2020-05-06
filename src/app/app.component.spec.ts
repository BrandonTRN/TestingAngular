import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  beforeEach(async(()=>{
    app = new AppComponent();
  }));
it('Test suma resultado 4', async(()=>{
expect(app.add(6,2)).toEqual(4);
}

))
});
