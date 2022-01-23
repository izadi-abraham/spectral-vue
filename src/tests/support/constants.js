import assets from "../../data/assets.json"


export const defaultAssets = assets
export const defaultAssetsTree = [
  {
    "id": 0,
    "name": "Asset 0",
    "parentId": 0
  },
  {
    "id": 1,
    "name": "Asset 1",
    "parentId": 0,
    child: [
      {
        "id": 2,
        "name": "Asset 2",
        "parentId": 1
      },
      {
        "id": 3,
        "name": "Asset 3",
        "parentId": 1,
        child: [
          {
            "id": 4,
            "name": "Asset 4",
            "parentId": 3
          }
        ]
      },
    ]
  },
]

export const assetsSet1 = [
  {
    "id": 1,
    "name": "Asset 1",
    "parentId": null,
  },
  {
    "id": 2,
    "name": "Asset 2",
    "parentId": 1
  },
  {
    "id": 3,
    "name": "Asset 3",
    "parentId": 2
  },
  {
    "id": 4,
    "name": "Asset 4",
    "parentId": 2
  },
  {
    "id": 8,
    "name": "Asset 8",
    "parentId": 1
  }
]
export const assetsSet1Tree = [
  {
    "id": 1,
    "name": "Asset 1",
    "parentId": 0,
    child: [
      {
        "id": 2,
        "name": "Asset 2",
        "parentId": 1,
        child: [
          {
            "id": 3,
            "name": "Asset 3",
            "parentId": 2
          },
          {
            "id": 4,
            "name": "Asset 4",
            "parentId": 2
          },
        ]
      },
      {
        "id": 8,
        "name": "Asset 8",
        "parentId": 1
      },
    ]
  },

]

export const measurements1 = {
    "meterReadings": {
      "2020-01-01T00:00:00.000Z": 283,
      "2020-02-01T00:00:00.000Z": 289,
      "2020-03-01T00:00:00.000Z": 225,
      "2020-04-01T00:00:00.000Z": 265,
      "2020-05-01T00:00:00.000Z": 277,
      "2020-06-01T00:00:00.000Z": 246,
      "2020-07-01T00:00:00.000Z": 257,
      "2020-08-01T00:00:00.000Z": 275,
      "2020-09-01T00:00:00.000Z": 258,
      "2020-10-01T00:00:00.000Z": 254,
      "2020-11-01T00:00:00.000Z": 261,
      "2020-12-01T00:00:00.000Z": 316
    },
    "aggregated": true
  }
export const measurements0 = {
  "aggregated": false,
  "meterReadings": {
    "2020-01-01T00:00:00.000Z": 156,
    "2020-02-01T00:00:00.000Z": 123,
    "2020-03-01T00:00:00.000Z": 128,
    "2020-04-01T00:00:00.000Z": 159,
    "2020-05-01T00:00:00.000Z": 178,
    "2020-06-01T00:00:00.000Z": 290,
    "2020-07-01T00:00:00.000Z": 276,
    "2020-08-01T00:00:00.000Z": 250,
    "2020-09-01T00:00:00.000Z": 156,
    "2020-10-01T00:00:00.000Z": 176,
    "2020-11-01T00:00:00.000Z": 134,
    "2020-12-01T00:00:00.000Z": 111
  }
}
export const measurements4 = {
  "aggregated": false,
  "meterReadings": {
    "2020-01-01T00:00:00.000Z": 142,
    "2020-02-01T00:00:00.000Z": 164,
    "2020-03-01T00:00:00.000Z": 112,
    "2020-04-01T00:00:00.000Z": 114,
    "2020-05-01T00:00:00.000Z": 170,
    "2020-06-01T00:00:00.000Z": 130,
    "2020-07-01T00:00:00.000Z": 132,
    "2020-08-01T00:00:00.000Z": 129,
    "2020-09-01T00:00:00.000Z": 157,
    "2020-10-01T00:00:00.000Z": 128,
    "2020-11-01T00:00:00.000Z": 110,
    "2020-12-01T00:00:00.000Z": 168
  }
}
export const measurementsError = {
  "meterReadings": {},
  "aggregated": false,
  "error": "not found"
}
