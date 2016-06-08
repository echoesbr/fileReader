var fs = require('fs');
var q = require('q');
var _ = require('lodash');

function readDir() {
    var deferred = q.defer();
    var promises = [];

    fs.readdir('files/', function (err, files) {
        if (err)
            throw err;

        // removing .DS_Store (MacOS)
        var i = files.indexOf('.DS_Store');
        if (i != -1)
            files.splice(i, 1);

        console.log('files found: ' + files);

        // array iterator
        _.each(files, function (file) {

            console.log('processing file: ' + file);

            var deferredFile = q.defer();
            promises.push(deferredFile.promise);

            fs.readFile('files/' + file, 'utf8', function (err, data) {
                var entry = data.split("\n");
                
                console.log('arquivo lido');
                
                _.each(entry, function (line) {

                    var array = line.split('	');
                    var json = array[9];
                    if (json) {
                        var string = new Buffer(json, 'base64').toString("ascii");
                        console.log(string);
                        
                        throw new Error("Stop!");

                        var regex = /"(registro)":\s*(\[.*?\])\s*\}\)"/gm;
                        var match = regex.exec(string);
                        console.log(match);
                        
                        //var obj = JSON.parse(match[2]);
                    }
                });
                deferredFile.resolve();
            });
        });

        q.all(promises).then(function () {
            deferred.resolve('All files have been read successfully');
        });
    });
    return deferred.promise;
}

readDir().then(function (result) {
    console.log(result);
});