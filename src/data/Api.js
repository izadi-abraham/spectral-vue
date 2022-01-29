import LocalDataRepository from "./repository/LocalDataRepository";
import { LoggerRepository } from "./repository/LoggerRepository";

export class Api {
  constructor(dataRepository) {
    this.dataRepository = dataRepository;
  }

  getAssetsTree() {
    const assets = this.dataRepository.getAssets();
    let map = {}, roots = [], array = [];
    for (let i = 0; i < assets.length; i++) {
      map[assets[i].id] = i;
      array[i] = { ...assets[i] };
    }
    for (const node of array) {
      if (node.parentId !== null) {
        const parentIndex = map[node.parentId];
        if (!array[parentIndex].child)
          array[parentIndex].child = [];
        array[parentIndex].child.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
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
        meterReadings: {}, aggregated: false, error: true
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