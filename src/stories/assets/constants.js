
export const tree = [
  {
    "id": 0,
    "name": "Asset 0",
    "parentId": 0
  },
  {
    "id": 1,
    "name": "Asset 1",
    "parentId": 0
  }
]

export const treeWithChild = [
  {
    "id": 0,
    "name": "Asset 0",
    "parentId": 0,
    child: [
      {
        "id": 1,
        "name": "Asset 1",
        "parentId": 0,
        child: [
          {
            "id": 2,
            "name": "Asset 2",
            "parentId": 1,
          },
          {
            "id": 5,
            "name": "Asset 5",
            "parentId": 1,
            child: [
              {
                "id": 7,
                "name": "Asset 7",
                "parentId": 5,
              },
            ]
          },

        ]
      }
    ]
  }
]

export const seriesData = [
  141,
  125,
  113,
  151,
]

export const categories = [
  "January 01",
  "February 01",
  "March 01",
  "April 01",
]