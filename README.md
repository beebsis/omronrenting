# Files:
## public
    This is where our app gets rendered to
        - index.html
## Assets
    Assets, images etc
        - logo
## Components
    Components which we can use on multiple sites
    As well as toggle on/off based on our needs
        - infoLinks, login
## Css
    All our different CSS styles
    I've tried to individualise them in order to make it easier to
    change over time.
     # Components
        - This we can and will use more than once to keep it consitent.
    # premade 
        - A small premade CSS for things like themes
    # Rest of the files
        - Usually pages except navbar
## Data
    # Test data
        - This data is purely used to vizually help with the page creation currently, it'll be replaced with data from mongoDB.
## Pages
    # This is where we have all our pages placed
        - Change between contact, error404, home, inventory, managementlanding, myrents, rent, rented, unauthorized, users
## App
    - Where we handle our navlinks and current page routes.
## Index
    - Where we place our app inside, together with a couple of extra fiels such as styling files
    
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.