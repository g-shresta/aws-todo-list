# AWS Deployed Todo Application

## Overview
A simple Todo application built using HTML, CSS, and JavaScript.
The application is deployed using AWS S3 static website hosting and CloudFront to enable HTTPS.

## Tech Stack
- HTML, CSS, JavaScript
- AWS S3
- AWS CloudFront

## Features
- Add and delete tasks
- Mark tasks as completed
- Persist tasks using browser localStorage

## AWS Architecture
User → CloudFront (HTTPS) → S3 Bucket (Static Files)

## Deployment Steps
1. Created an S3 bucket (general purpose)
2. Enabled static website hosting
3. Uploaded frontend files to bucket root
4. Created CloudFront distribution
5. Set Default Root Object to index.html
6. Enabled HTTPS using CloudFront

## Learnings
- Difference between S3 website endpoint and bucket endpoint
- Why S3 static hosting does not support HTTPS
- How CloudFront enables HTTPS for static websites
- Importance of Default Root Object in CloudFront

## Live URL
https://YOUR_CLOUDFRONT_URL
