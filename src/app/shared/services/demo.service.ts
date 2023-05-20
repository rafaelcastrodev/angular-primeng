import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DemoService {
  constructor() {}
}

/** SERVICE USE RECOMENDATION 

A) constructor injection

constructor(private demoService: DemoService){}

B) Injection through inject method

private demoService = inject(DemoService);
constructor(){}

*/
