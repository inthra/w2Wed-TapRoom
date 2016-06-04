import { Pipe, PipeTransform} from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "pintServings",
  pure: false
})
export class LowPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var servingLevel = args[0];

    if(servingLevel === "high") {
      return input.filter((keg) => {
        return keg.pintServings >= 10;
      });
    } else if (servingLevel === "low") {
      return input.filter((keg) => {
        return keg.pintServings < 10;
      });
    } else {
      return input;
    }
  }
}
