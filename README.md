# Installation
* Download the repository and keep the contents of it in the directory where you want to create your react app.
* Run ```npm install``` to install all the dependencies defined in package.json file.

# Usage
* Create a div where you want the react app to be rendered. Make sure it has the id ```react-js-in-wp```
```
<div id="react-js-in-wp"></div>
```
* Write your react component code in the ```src/components``` folder. Entry point is the file ```App.js```
* Run ```npm run build``` - It will constantly watch your code and build a single javascript build file called ```build/index.js```. 
* Enqueue the ```build/index.js``` file in your WordPress plugin or theme via ```wp_enqueue_script()```
* Run ```npm run prod``` to make a final minified production build.

