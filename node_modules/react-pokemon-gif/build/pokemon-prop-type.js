'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pokedexNumberToName = require('pokemon-gif/lib/pokedex-number-to-name');

var _pokedexNumberToName2 = _interopRequireDefault(_pokedexNumberToName);

var _pokemonNameToNumber = require('pokemon-gif/lib/pokemon-name-to-number');

var _pokemonNameToNumber2 = _interopRequireDefault(_pokemonNameToNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createValidatorWithRequired(validator) {
  var chainValidatorWithIsRequired = function chainValidatorWithIsRequired(isRequired, props, propName, componentName, location) {
    if (isRequired && props[propName] == null) {
      return new Error('Required prop `' + propName + '` was not specified in `' + componentName + '`.');
    }

    return validator(props, propName, componentName, location);
  };

  var validatorWithIsRequired = chainValidatorWithIsRequired.bind(null, false);
  validatorWithIsRequired.isRequired = chainValidatorWithIsRequired.bind(null, true);

  return validatorWithIsRequired;
}

function pokemonValidator(props, propName, componentName) {
  var prop = props[propName];

  if (typeof prop === 'string') {
    if (!_pokemonNameToNumber2.default.hasOwnProperty(prop.toLowerCase())) {
      return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`.\n        Prop `' + propName + '` must be a valid pokemon name.');
    }

    return null;
  } else if (typeof prop === 'number') {
    if (!_pokedexNumberToName2.default.hasOwnProperty(prop)) {
      return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`.\n        Prop `' + propName + '` must be a valid pokedex number.');
    }

    return null;
  }

  return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`.\n    Prop `' + propName + '` must be of type string or number.');
}

exports.default = createValidatorWithRequired(pokemonValidator);