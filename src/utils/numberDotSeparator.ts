const numberDotSeparator = (number: number) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')

export default numberDotSeparator
