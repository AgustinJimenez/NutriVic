const getImageUriFromEntity = ({ images = [] } = {}) =>
  images?.[0]?.['url'] || ''

export default getImageUriFromEntity
