import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appClass]'
  // to make use of this directive you have to add this word  
})
export class ClassDirective{
  // @Input() backgroundColor :string = 'yellow';
  // passing arguments to directives is similar to comunicating between parent and child components 
  constructor(private element:ElementRef) {
    // console.log("Directive called");
    // this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    // this.element is not the actual html element inside the directive you have to access one more property inside it called nativeElement to access the actual element
    
   }

  //  @Input() set backgroundColor(color:string) {
  //   this.element.nativeElement.style.backgroundColor = color;
  //  } // cleaner way of writing code 
   @Input('appClass') set backgroundColor(color:string) {
    this.element.nativeElement.style.backgroundColor = color;
   } // cleaner way of writing code 

  //  ngOnInit(): void {
  //    if(this.backgroundColor){
  //     this.element.nativeElement.style.backgroundColor = this.backgroundColor;
  //     // the input property is nmot available in the constructor, as they are typically available after the component or directive has been initialized
  //    }
   }



// there is another prefered way if doing this instead if using ngOnInit,

//whenever we define the class directive, angular internally has some code like this 
// const directive = new ClassDirective();
// directive.backgroundColor = 'yellow'; -> this is how the property is set by angular but the consturctor is initialized when the object is created,so no change to the proerty is made.

//instead there is this approach
// class Car{
//   set Color(newCOlor:string){
//     console.log(newCOlor);
//   }
// }

// const car = new Car();
// car.Color = 'blue'; // now the set method is called automatically with newColor as blue
// this is the same thing that has to be implemented here 
