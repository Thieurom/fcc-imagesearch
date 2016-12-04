# Image Search Abstraction Layer
A Free Code Camp API project.

### Description
This is an implemetation of Image Search Abstraction Layer, one of Free Code Camp API projects.

### Usage
- Get the image URLs, alt text, thumbnail link and page urls for a set of images relating to a given search string.

`https://u-imagesearch.herokuapp.com/api/search/not%20cat%20again`

- Each response contains 10 results for given search string.

- User can paginate to get 100 results by adding a `?offset={number}` parameter to the search URL, provided that 'number' is of 1 - 10.

`https://u-imagesearch.herokuapp.com/api/search/not%20cat%20again?offset=2`

- User can get a list of the most recently submitted search strings.

`https://u-imagesearch.herokuapp.com/api/latest`

### Example search output


### About Free Code Camp
Free Code Camp is a friendly open source community where you learn to code and help nonprofits.

Website: [https://www.freecodecamp.com](https://www.freecodecamp.com)

Github: [https://github.com/FreeCodeCamp/FreeCodeCamp](https://github.com/FreeCodeCamp/FreeCodeCamp)
