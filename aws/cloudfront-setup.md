## CloudFront Setup

- Created CloudFront distribution with S3 as origin
- Used S3 bucket endpoint (not website endpoint)
- Set Default Root Object to `index.html`
- Enabled HTTP to HTTPS redirect
- Used CloudFront to provide HTTPS support, since S3 static website endpoints do not support HTTPS and modern browsers (especially on iOS) restrict HTTP access
