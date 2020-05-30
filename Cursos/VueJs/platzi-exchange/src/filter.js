import numeral from 'numeral'

const rankFilter = function(value) {
  if (value < 10) {
    return `#0${Number(value)}`
  }

  return `#${Number(value)}`
}

const dollarFilter = function(value) {
  if (!value) {
    return '$ 0'
  }

  return numeral(value).format(' ($0.00a)')
}

const percentFilter = function(value) {
  if (!value) {
    return '0%'
  }

  return `${Number(value).toFixed(2)}%`
}

export { rankFilter, dollarFilter, percentFilter }
