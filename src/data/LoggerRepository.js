export class LoggerRepository {
  constructor(repository) {
    this.repository = repository;
  }

  getAssets() {
    const results = this.repository.getAssets();
    console.log("getAssets request", results);
    return results;
  }

  getMeasurements() {
    const results = this.repository.getMeasurements();
    console.log("getMeasurements request", results);
    return results;
  }

}