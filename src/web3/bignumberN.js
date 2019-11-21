import {BigNumber } from '@melonproject/melonjs';

const SafeBigNumber = BigNumber.clone({
    EXPONENTIAL_AT: [-1e9, 1e9]
  })
  
  // Prevent use in primitive operations.
  // See https://mikemcl.github.io/bignumber.js/#type-coercion
  SafeBigNumber.prototype.valueOf = function() {
    throw Error('Conversion to primitive type is prohibited')
  }