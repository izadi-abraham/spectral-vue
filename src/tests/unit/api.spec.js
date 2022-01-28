import {
  assetsSet1Tree,
  assetsSet1,
  errorValues, measurementsSet1, values1, values2, values3, values8, assetsSet2, assetsSet2Tree
} from "../support/constants";
import { Api } from '../../data/Api'



class MockDataSet1Repository {
  getAssets() {
    return assetsSet1
  }
  getMeasurements() {
    return measurementsSet1
  }
}

class MockDataSet2Repository {
  getAssets() {
    return assetsSet2
  }
  getMeasurements() {
    return measurementsSet1
  }
}


const mockApi1 = new Api(new MockDataSet1Repository())
const mockApi2 = new Api(new MockDataSet2Repository())

describe("api functions", () => {
  it("getAssetsTree returns expected tree", () => {
    expect(mockApi1.getAssetsTree()).toStrictEqual(assetsSet1Tree);
    expect(mockApi2.getAssetsTree()).toStrictEqual(assetsSet2Tree);
  });
  it("getMeasurements function returns expected values", () => {
    expect(mockApi1.getMeasurements(1)).toStrictEqual(values1);
    expect(mockApi1.getMeasurements(2)).toStrictEqual(values2);
    expect(mockApi1.getMeasurements(3)).toStrictEqual(values3);
    expect(mockApi1.getMeasurements(8)).toStrictEqual(values8);
    expect(mockApi1.getMeasurements(Math.floor(Math.random() * 100) + 5)).toStrictEqual(errorValues);
  });

});
