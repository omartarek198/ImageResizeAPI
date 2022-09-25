# ImageResizeAPI

## Project overview
#### User can access two endpoints
#### 1- '/' to access general instructions 
#### 2- '/images' to resize images based on url params
#### url example : http://127.0.0.1:3000/images?width=100&height=600&name=fjord.jpg
#### resized image is saved in /thumbnails
#### project supports multiple dimensions per image and uses caching to return resized images with the same dimensions specified in url

## Scripts
#### install dependencies  `npm run install` 
#### start server `npm run start`
#### compile typescript `npm run build`
#### run unit tests`npm run test`
#### run syntax checker`npm run lint`
#### format code `npx prettier --write .`
