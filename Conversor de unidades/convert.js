function convert(value, fromUnit, toUnit) {
  // Length
  if (fromUnit === 'm' && toUnit === 'ft') {
    return value * 3.28084;
  } else if (fromUnit === 'ft' && toUnit === 'm') {
    return value / 3.28084;
  } else if (fromUnit === 'km' && toUnit === 'mi') {
    return value / 1.609;
  } else if (fromUnit === 'mi' && toUnit === 'km') {
    return value * 1.609;
  }
  
  // Mass
  else if (fromUnit === 'kg' && toUnit === 'lb') {
    return value * 2.20462;
  } else if (fromUnit === 'lb' && toUnit === 'kg') {
    return value / 2.20462;
  } else if (fromUnit === 'g' && toUnit === 'oz') {
    return value / 28.35;
  } else if (fromUnit === 'oz' && toUnit === 'g') {
    return value * 28.35;
  }
  
  // Temperature
  else if (fromUnit === 'C' && toUnit === 'F') {
    return (value * 9/5) + 32;
  } else if (fromUnit === 'F' && toUnit === 'C') {
    return (value - 32) * 5/9;
  }
  
  // Volume
  else if (fromUnit === 'l' && toUnit === 'gal') {
    return value / 3.78541;
  } else if (fromUnit === 'gal' && toUnit === 'l') {
    return value * 3.78541;
  }
  
  // Speed
  else if (fromUnit === 'km/h' && toUnit === 'mph') {
    return value / 1.609;
  } else if (fromUnit === 'mph' && toUnit === 'km/h') {
    return value * 1.609;
  }
  
  // If units are not recognized
  else {
    return 'Units not recognized';
  }
}
