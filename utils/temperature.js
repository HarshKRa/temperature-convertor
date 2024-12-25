const UNITS = {
  celcius: "°C",
  farahnit: "°F",
};

function convertTemperatureTo(temperature, unitTo) {
  if (unitTo == UNITS.celcius) {
    return ((temperature - 32) * 5) / 9;
  } else if (UNITS.farahnit == unitTo) {
    return (temperature * 9) / 5 + 32;
  } else {
    throw new Error("Invalid Unit");
  }
}

function getOppositeUnit(unit) {
  return unit == UNITS.celcius ? UNITS.farahnit : UNITS.celcius;
}

function isIceTemperature(temperature, unit) {
  if (unit === UNITS.celcius) return temperature <= 0;
  else if (unit === UNITS.farahnit) return temperature <= 32;
  else throw new Error("Invalid Unit");
}

export { UNITS, convertTemperatureTo, getOppositeUnit, isIceTemperature };
