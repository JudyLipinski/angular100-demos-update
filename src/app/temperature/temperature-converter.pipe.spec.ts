import { TemperatureConverterPipe } from './temperature-converter.pipe';

describe('TemperatureConverterPipe', () => {
  it('create an instance', () => {
    const pipe = new TemperatureConverterPipe();
    expect(pipe).toBeTruthy();
  });

  it('converts to Fahrenheit', () => {
    const pipe = new TemperatureConverterPipe();
    console.log(`pipe.transform(0, 'F')`,pipe.transform(0, 'F'))
    expect(pipe.transform(0, 'F')).toBeCloseTo(32);
  });

  it('converts to Celsius', () => {
    const pipe = new TemperatureConverterPipe();
    console.log(`pipe.transform(0, 'C')`,pipe.transform(0, 'F'))
    expect(pipe.transform(32, 'C')).toBeCloseTo(0);
  });


});
