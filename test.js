var Util = require('./util')

var path = Util.getDataPath()

console.log(path)
// -> should print the path to data.json from the home directory
// e.g. /home/talentbuddy/data.json
// e.g. C:\Users\Talentbuddy\data.json