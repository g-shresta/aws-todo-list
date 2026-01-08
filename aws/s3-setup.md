## S3 Setup

- Created a general purpose S3 bucket
- Disabled block public access
- Enabled static website hosting
- Uploaded index.html, style.css, script.js to bucket root
- Added a bucket policy to allow public read access (`s3:GetObject`) so CloudFront can serve static files
