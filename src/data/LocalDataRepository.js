import assets from './assets.json'
import measurements from './measurements.json'


class LocalDataRepository {
  getAssets() {
    return assets
  }
  getMeasurements() {
    return measurements
  }
}


export default LocalDataRepository