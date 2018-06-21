/*
* Config file for an elastic serach program
*
*
*
*/
const serverSettings = {
  port: "8080",
  mongoURL: "mongodb://isearch03-dev.qut.edu.au:27017/glass",
  maxFileSize: "2000000"
};

const appSettings = {
  title: "ELASTIC GLASS",
  heading: "SEARCH",
  font: 'Lato, Helvetica, sans-serif',
  primaryColor: '#949494',
  titleColor: 'white',
	secondaryColor: 'mediumseagreen',
  elasticURI: "",
  elasticApp: "gitxplore-app",
  credentials: "4oaS4Srzi:f6966181-1eb4-443c-8e0e-b7f38e7bc316",
  type: "gitxplore-latest"
}
/*
*  Change this to make changes to how the elastic search is mapped ot the database headings
*  For example if the name is stored under the title of username then change bellow to be
*  name: "username",
*
*  tags should be an array
*  picture should be a url
*/
const databaseMap = {
  id: "fullname",
  fullname: "fullname",
  picture: "avatar",
  title: "owner",
  name: "name",
  url: "url",
  info: "info",
  description: "description",
  tags: "topics"
};

export { serverSettings, databaseMap, appSettings };

// Samuel Henry 2018
