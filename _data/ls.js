var fs = require('fs');
var list = fs.readdirSync('../img');
var res = '- "' + list.join('"\n- "') + '"\n';
fs.writeFileSync('list.yml', res, {encoding: 'utf-8'});
