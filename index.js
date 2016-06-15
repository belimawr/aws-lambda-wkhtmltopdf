'use strict';

var wkhtmltopdf = require('wkhtmltopdf');
var fs = require('fs');
var AWS = require('aws-sdk');
var config = require('./config.js');

var s3 = new AWS.S3();

exports.handler = function (event, context, callback) {
    if (!event.data) {
        console.error('unable to get the data');
        callback('unable to get the data', {});
        return
    }

    var data = new Buffer(event.data, 'base64').toString('utf8');
    console.info('decoded data ' + data);

    var outputFilename = Math.random().toString(36).slice(2) + '.pdf';
    console.info('outputFilename=' + outputFilename);

    var output = '/tmp/' + outputFilename;
    var writeStream = fs.createWriteStream(output);

    wkhtmltopdf(data, { pageSize: 'letter' }, (err, stream) => {
        s3.putObject({
            Bucket: dstBucket,
            Key: outputFilename,
            Body: fs.createReadStream(output),
            ContentType: 'application/pdf'
        }, (error, data) => {
            if (error != null) {
                console.error('error=' + error);
                callback('unable to send file to S3', {});
            } else {
                console.info('upload done...');
                callback(null, { filename: outputFilename });
            }
        });
    }).pipe(writeStream);
};