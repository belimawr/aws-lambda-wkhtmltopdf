dstBucket = 'wkhtmltopdf-lambda';

process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'];

module.exports = function() {};
