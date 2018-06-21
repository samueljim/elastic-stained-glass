# Client side elastic serach engine made with react/next.js
![demo](/image1.gif "Demo of serach filters")

[https://elastic-glass-jbtrhfwliy.now.sh/](https://elastic-glass-jbtrhfwliy.now.sh/)

This project takes advantage of many new web technologies such as:
* [nextjs - server side rendered offline react](https://nextjs.org/)
* [Elasticsearch - database for serach engine](https://www.elastic.co/)
* [reactivesearch - ui framework for elastic search and react](https://opensource.appbase.io/reactivesearch/)

Be sure to make changes to the config.js file to connect this project to your own elastics bucket.
## How to edit the config.js file
Do not edit the json files in /components as they will be updated when you start node app
The config.js has three main parts
1. serverSettings
  The server setting is where you set information like port number
2. appSettings
  app settings is where you set the title, font, colours and give the elastic database information.
  The following is better documented [here](https://opensource.appbase.io/reactive-manual/getting-started/reactivebase.html)
    * elasticApp - name of database
    * credentials - username:password if required
    * elasticURI - the url of the server if needed
    * type - the type of database you are using

3. databaseMap
    Database map is where you can bind the content of the database to the GUI
    the only required field is fullname which has to be unique.
    For example if there is a variable called picture  and you want to show it then set
    ```javascript
    avatar: 'picture',
    ```
## Autofill
the project autofills your serach as your filters

![autofill](/image3.gif "Autofill demo")
## Setup
To set up please make sure you have [node](https://nodejs.org/en/) higher than version 8 installed and build tools
To install the project
```
npm install
```
To start development run the following and the project should restart the react app when a change is made to it
You will need to reboot manually if config or server side changes are made
```
npm run dev
```
you need to build a production copy of the project. This is done to increase performance
```
npm run build
```
after you have build the project you can start with the following
```
npm run start
```
or use the following command to start with pm2 which will load balance the project
```
npm run pm2
```
If you are having issues running on window you might need to run the following command in administrator powershell then reboot. This will fix most node issues on windows but if issues remain try changing node version and installing again.
```
npm install --global --production windows-build-tools
```
## Mobile Friendly
![mobile](/image2.gif "Demo of serach filters on mobile")

