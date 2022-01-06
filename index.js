let securities = [
  {
    close_price: 0.011,
    close_price_as_of: '2021-04-13',
    cusip: null,
    institution_id: null,
    institution_security_id: null,
    is_cash_equivalent: false,
    isin: null,
    iso_currency_code: 'USD',
    name: "Nflx Feb 01'18 $355 Call",
    proxy_security_id: null,
    security_id: '8E4L9XLl6MudjEpwPAAgivmdZRdBPJuvMPlPb',
    sedol: null,
    ticker_symbol: 'NFLX180201C00355000',
    type: 'derivative',
    unofficial_currency_code: null,
  },
  {
    close_price: 27,
    close_price_as_of: null,
    cusip: '577130834',
    institution_id: null,
    institution_security_id: null,
    is_cash_equivalent: false,
    isin: 'US5771308344',
    iso_currency_code: 'USD',
    name: 'Matthews Pacific Tiger Fund Insti Class',
    proxy_security_id: null,
    security_id: 'JDdP7XPMklt5vwPmDN45t3KAoWAPmjtpaW7DP',
    sedol: null,
    ticker_symbol: 'MIPTX',
    type: 'mutual fund',
    unofficial_currency_code: null,
  },
  {
    close_price: 2.11,
    close_price_as_of: null,
    cusip: '00448Q201',
    institution_id: null,
    institution_security_id: null,
    is_cash_equivalent: false,
    isin: 'US00448Q2012',
    iso_currency_code: 'USD',
    name: 'Achillion Pharmaceuticals Inc.',
    proxy_security_id: null,
    security_id: 'KDwjlXj1Rqt58dVvmzRguxJybmyQL8FgeWWAy',
    sedol: null,
    ticker_symbol: 'ACHN',
    type: 'equity',
    unofficial_currency_code: null,
  },
];
let obj = securities.find((o, i) => {
  console.log(i);
  if (o.security_id == 'JDdP7XPMklt5vwPmDN45t3KAoWAPmjtpaW7DP') {
    return true; // stop searching
  }
});
// console.log('--->>>>>', obj);
