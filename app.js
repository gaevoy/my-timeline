var express = require('express'),
    app = express();
app.use(express.static(__dirname));

app.listen(3000);
console.log('Express server started on port %s', 3000);
