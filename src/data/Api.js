import LocalDataRepository from "./LocalDataRepository";
import { LoggerRepository } from "./LoggerRepository";

export class Api {
  constructor(dataRepository) {
    this.dataRepository = dataRepository;
  }

  getAssetsTree() {
    return ((menuItems) => {
      let output = [], array = [{ array: output, id: 0 }];
      for (let item of menuItems) {
        if (item.parentId === null)
          item.parentId = 0;
        let index = array.findIndex(arrayItem => {
          return arrayItem.id === item.parentId;
        });
        if (!Array.isArray(array[index].array)) {
          array[index].array = array[index].array.child = [];
        }
        let nv = Object.assign({}, item);
        array[index].array.push(nv);
        array[++index] = { array: nv, id: item.id };
      }
      return output;
    })(this.dataRepository.getAssets());
  }

  getMeasurements(id) {
    const assetsTree = this.getAssetsTree();
    const measurements = this.dataRepository.getMeasurements();
    const measurementsMap = {};
    measurements.forEach((val) => {
      measurementsMap[val.assetId] = val.measurements;
    });
    const findMeasurements = (assetsTree, measurementsMap, id) => {
      if (measurementsMap[id]) {
        return { aggregated: false, meterReadings: measurementsMap[id] };
      }

      const findAssetById = (roots, nodId) => {
        const nodeToSearch = [...roots];
        while (nodeToSearch.length) {
          let node = nodeToSearch.pop();
          if (node.id === nodId) return node;
          if (node.child) nodeToSearch.push(...node.child);
        }
        return null;
      };

      const asset = findAssetById(assetsTree, id);

      if (asset === null) return {
        meterReadings: {}, aggregated: false, error: "not found"
      };

      const values = asset.child.map((child) => findMeasurements(assetsTree, measurementsMap, child.id));

      const aggregate = values.reduce((prevValue, currentValue) => {
        const aggregate = { ...prevValue, aggregated: true };
        for (let date in currentValue.meterReadings) {
          if (aggregate.meterReadings[date]) aggregate.meterReadings[date] += currentValue.meterReadings[date];
          else aggregate.meterReadings[date] = currentValue.meterReadings[date];
        }
        return aggregate;
      }, { meterReadings: {} });

      return aggregate;
    };
    return findMeasurements(assetsTree, measurementsMap, id);
  }
}

export const api = new Api(new LoggerRepository(new LocalDataRepository()));