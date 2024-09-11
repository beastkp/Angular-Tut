import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
// this is a custom structural directive
export class TimesDirective {
  constructor(
    private viewContainer: ViewContainerRef, // this is a reference to the element that we applid a directive to, it is different from elementRef as it helps to create or remove the element in that template
    private templateRef: TemplateRef<any> // is a reference to whatever elements that are placed inside of the elements that we applies our directive to 
  ) {}

  @Input('appTimes') set render(times:number){
    this.viewContainer.clear();
    for(let i=0;i<times;i++){
      this.viewContainer.createEmbeddedView(this.templateRef,{
        // this is the context object 
        index:i // this allows us to access the index within the template, 
      });
    }
  }
}
