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
    │   │   ├── Api.js                       # Returns an instance of Api class which is a singleton
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
    ├── tailwind.config.js                   
    ├── vite.config.js                       
    ├── babel.config.js                      
    ├── index.html                          
    ├── jest.config.js                       
    ├── postcss.config.js                   
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

# Description

### Data
Considering the fact that the data would come from a REST API in a real world application,
a singleton class called Api was written here. The arbitrary repository can be injected to the class
instance.We actually could decouple our repository here which gives us: </br>
- **Adding a new repository easily with the least lines of code to change.**
- **The ability of easily testing our
  functions with mock repos as we are doing in test**

As can be seen, there is a mediator repo `LoggerRepository` which implements the proxy pattern.
It simply retrieves the data from the repo and serves it (as well as logging it to the console),
hiding who is the request initiator from repo.

### Store
Our global state uses a module called `theme` which handles:</br>
- **The state of app's theme (dark or light)**
- **Toggling the theme. We are dispatching it in ToggleSwitch**
- **Initiating the theme's state when app starts. Dispatching in App component.</br>**

We try to respect user's preference according to his OS/browser theme preference through
the Window interface's matchMedia() method.</br>
We also preserve the user preference from previous visits by storing the theme state in localStorage.

### Tests
#### api.spec:
making an instance of Api with a mock repo for testing the methods. Tests making the tree from assets
(`getAssetsTree` method) as well as returning the measurements relating to specific node (`getMeasurements` method)
#### sidebar-node.spe:
testing the number of nodes rendered by the component as well as received props, rendering a link ...</br>
- **we define a factory function for shallow mounting the component in different test cases**
- **we use the `[data-test]` selector considered as best practice in writing tests**

### Styles
Thanks to [tailwindcss](https://tailwindcss.com/), there is only a single lightweight CSS file (`index.css`).
No need to follow any extra css naming conventions like BEM.
### Components

#### Header
The header component simply renders a logo(linked to the home page), takes a `msg` prop and renders it.

#### Sidebar
Calls the api's `getAssetsTree` function and gets the tree structure of the assets in order to pass to
SidebarNode component which has the duty of rendering sidebar's menu items.

#### SidebarNode
Recursively renders the tree nodes and its children (if there's any).
Wraps menu items in a link which gets the related rout dynamically according to the item's id.

#### Chart
Gets the dates and values as prop to show in 2 axis of the chart component.
The Chart rendered here is a `highcharts-vue` component.

### Router
Define all our routs and creating our router.

### View Components for routs
#### Home
#### Page


