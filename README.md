# spectral-app

## Project structure

    .
    ├── dist                                 # Compiled and minified files for production
    ├── src                                  # Source files
    │   ├── App.vue                          # Main/Root component which will be attached to the DOM
    │   ├── assets                           # Assets and static files of the project like logo
    │   ├── components                       # Global Components
    │   │   └── Chart                        # Chart component as an example
    │   │      └── index.vue                 # Every component has an index.vue file
    │   ├── data                             # All the files related to data
    │   │   ├── Api.js                       # Returns an instance of Api object which is a singleton. Import an instance from this file in order to access the methods for getting data.
    │   │   │
    │   │   ├── localData                    # Local data given for the assignment (including assets.json and ...) 
    │   │   └── repository                   # All repositories 
    │   │       ├── LocalDataRepository.js   # Our local repo with methods for returning the local data    
    │   │       └── LoggerRepository.js      # Our logger repo which acts as a proxy, here simply logs the data but can do anything
    │   ├── router                           # Routes of the application
    │   ├── store                            # Global state
    │   ├── tests
    │   │   ├── support                      # All supports relating to the tests
    │   │   │   └── constants.js             # Constants using in test cases
    │   │   └── unit                         # Unit tests
    │   │       ├── api.spec.js              # Tests of the methods of api
    │   │       ├── header.spec.js           # A single sample test for Header component
    │   │       └── sidebar-node.spec.js     # All test cases for SidebarNode component
    │   │
    │   └── views                            # All Vue components acting as Views for routing
    │       └── Home.vue                     # Home component as an example, every component has an index.vue file
    │
    │
    ├── tailwind.config.js                   #
    ├── vite.config.js                       #
    ├── babel.config.js                      #
    ├── index.html                           # The main Html file
    ├── jest.config.js                       #
    ├── postcss.config.js                    #
    └── README.md




## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### Run your tests
```
yarn test
```

### Customize configuration
See [Vite Configuration Reference](https://vitejs.dev/config/).
