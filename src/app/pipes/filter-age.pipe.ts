import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAge'
})
export class FilterAgePipe implements PipeTransform {

  transform(value: any, minAge:string, propName:string){
    console.log(value)
    if(value.length==0){
      console.log("i am working at beggining")
      return value
    }
    const filteredArray=[]
    for(const item of value){
      if(item[propName]>=Number(minAge)){
        filteredArray.push(item)
      }
    }
    console.log("i am working at end")
    return filteredArray
    
  }
  
}
