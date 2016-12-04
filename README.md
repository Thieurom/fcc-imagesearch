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
```
[
  {
    "url": "https://img.rcgroups.com/http://i733.photobucket.com/albums/ww338/guapoman2000/not_again_cat-1_zps9f82dab7.jpg?h=-vXVh7ey5LJ6TUmYLkYPpg",
    "snippet": "Parkzone P47 - Page 1106 - RC ...",
    "thumbnail": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT9eeu1mgE1677-Z4MUo6GcyP0iyaDXKolmGwNygpR1OWNfWcvdu0Ap8A",
    "context": "https://www.rcgroups.com/forums/showthread.php?t=1325884&page=1106"
  },
  {
    "url": "http://justfurlaughs.com/wp-content/uploads/2013/04/Not-again-500x666.jpg",
    "snippet": "Not Again",
    "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxaXJ9_9GTmyvWM7tS9PfSzZsplY8VzOoExAyyjRn5ZWzXtcuMzw5rEo",
    "context": "http://justfurlaughs.com/not-again/"
  },
  ... (more 8 results)
]
```

### Example latest output
```
[
  {
    "term": "not cat again",
    "when": "2016-12-04T06:47:45.951Z"
  },
  {
    "term": "macbook",
    "when": "2016-12-04T06:47:20.968Z"
  }
]
```

### About Free Code Camp
Free Code Camp is a friendly open source community where you learn to code and help nonprofits.

Website: [https://www.freecodecamp.com](https://www.freecodecamp.com)

Github: [https://github.com/FreeCodeCamp/FreeCodeCamp](https://github.com/FreeCodeCamp/FreeCodeCamp)
