# aws-lambda-wkhtmltopdf
Convert HTML to PDF using Webkit (QtWebKit) on AWS Lambda

## Input

```json
{
    "data" : "PGgxPlRlc3Q8L2gxPjxwPkhlbGxvIHdvcmxkPC9wPg=="
}
```

## Output

```json
{
    "filename": "8rqj9td0pvjf9a4i.pdf"
}
```

## Configuration

1. Open `config.js` and set `dstBucket` variable to name of S3 bucket where you want function to save output PDF files.
2. Make sure AWS Lambda function has `PutObject` access to S3 bucket

## Links

* http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html
* http://aws.amazon.com/documentation/apigateway/
* http://wkhtmltopdf.org/
* https://www.npmjs.com/package/wkhtmltopdf
* http://swagger.io/
* https://github.com/ashiina/lambda-local