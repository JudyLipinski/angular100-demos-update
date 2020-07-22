import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {
  transform(value: number, unit: string) {
    if (!isNaN(value)) {
      if (unit === 'C') {
        // console.log('converting to Celsius');
        const temperature = (value - 32) * 5.0 / 9.0;
        return temperature.toFixed(2);
      }
      if (unit === 'F') {
        // console.log('converting to Fahrenheit');
        const temperature = (9.0 / 5.0 * value) + 32;
        return temperature.toFixed(2);
      }
      console.log('no Unit');
    }
    return;
  }
}
