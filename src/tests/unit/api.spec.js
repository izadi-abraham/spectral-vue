import {
  assetsSet1Tree,
  assetsSet1,
  errorValues, measurementsSet1, values1, values2, values3, values8
} from "../support/constants";
import { Api } from '../../data/Api'



class MockDataRepository {
  getAssets() {
    return assetsSet1
  }
  getMeasurements() {
    return measurementsSet1
  }
}


const mockApi = new Api(new MockDataRepository())

describe("api functions", () => {
  it("getAssetsTree returns expected tree", () => {
    expect(mockApi.getAssetsTree()).toStrictEqual(assetsSet1Tree);
  });
  it("getMeasurements function returns expected values", () => {
    expect(mockApi.getMeasurements(1)).toStrictEqual(values1);
    expect(mockApi.getMeasurements(2)).toStrictEqual(values2);
    expect(mockApi.getMeasurements(3)).toStrictEqual(values3);
    expect(mockApi.getMeasurements(8)).toStrictEqual(values8);
    expect(mockApi.getMeasurements(Math.floor(Math.random() * 100) + 5)).toStrictEqual(errorValues);
  });

});
