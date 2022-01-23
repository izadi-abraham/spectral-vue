import { api } from "../../data/Api";
import {
  defaultAssetsTree,
  assetsSet1Tree,
  assetsSet1,
  measurements0,
  measurements1,
  measurements4,
  measurementsError
} from "../support/constants";






describe("api functions", () => {
  it("getAssetsTree returns assets tree", () => {
    expect(api.getAssetsTree()).toStrictEqual(defaultAssetsTree);
  });
  // it("returns when passed", () => {
  //   expect(api.getAssetsTree(assetsSet1)).toStrictEqual(assetsSet1Tree);
  // });
  it("getMeasurements function returns relevant values", () => {
    expect(api.getMeasurements(1)).toStrictEqual(measurements1);
    expect(api.getMeasurements(0)).toStrictEqual(measurements0);
    expect(api.getMeasurements(4)).toStrictEqual(measurements4);
    expect(api.getMeasurements(Math.floor(Math.random() * 100) + 5)).toStrictEqual(measurementsError);
  });

});
