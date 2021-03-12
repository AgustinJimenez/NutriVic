import collect from 'collect.js'

const getDataset = (state: any, datasetName: string) => {
  let dataset = state[datasetName]
  return dataset
}
export const persistSelector = ({ _persist: any = null }) => {
  return (
    _persist || {
      version: null,
      rehydrated: false,
    }
  )
}
export const datasetSelector = (
  state: any,
  datasetName: string,
  {
    list_format = false,
    single_format = false,
    ids = [],
    id = 0,
    debug = false,
  } = {}
) => {
  if (!!debug)
    console.log('datasetSelector start ===> ', {
      datasetName,
      list_format,
      ids,
      id,
    })
  let selected_dataset: any = getDataset(state, datasetName)

  if (!!id && single_format) {
    return selected_dataset[id]
  } else if (single_format && !id) return null

  if (!!ids && ids.length) {
    let filtereds: any = {}
    for (let id of ids)
      if (!!selected_dataset[id]) {
        filtereds[id] = selected_dataset[id]
      }
    selected_dataset = filtereds
  }
  //console.log('datasetSelector mid ===> ', { selected_dataset })
  if (list_format) {
    selected_dataset = Object.keys(selected_dataset || []).map(
      (id) => selected_dataset[id]
    )
    selected_dataset = collect(selected_dataset)
    return selected_dataset
  }

  if (Array.isArray(selected_dataset))
    selected_dataset = collect(selected_dataset)

  return selected_dataset
}

export const productSelectedSelector = (state: any) => {
  let productSelected = null

  const selected_product_id = datasetSelector(state, 'selected_product_id')

  productSelected = datasetSelector(state, 'products', {
    id: selected_product_id,
  })

  return productSelected
}
