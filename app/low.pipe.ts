import { Pipe, PipeTransform} from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "pintServings",
  pure: false
})
export class LowPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var servingLevel = args[0];

    if(servingLevel === 124 || servingLevel > 10) {
      return input.filter((keg) => {
        return true;
      });
    } else if (servingLevel < 10) {
      return input.filter((keg) => {
        return false;
      });
    } else {
      return input;
    }
  }
}
