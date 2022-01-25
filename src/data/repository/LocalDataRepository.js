import assets from '../localData/assets.json'
import measurements from '../localData/measurements.json'


class LocalDataRepository {
  getAssets() {
    return assets
  }
  getMeasurements() {
    return measurements
  }
}


export default LocalDataRepository