# Lab 5 

* Blog backend deployed on heroku 
* See https://allenlab5.herokuapp.com/api/posts

# Testing

* Get all posts
  `curl -X GET "https://allenlab5.herokuapp.com/api/posts"` 

* create new post
```
curl -X POST -H "Content-Type: application/json" -d '{
    "title": "first post",
    "tags": "words",
    "content":  "this is a test post",
    "cover_url": "https://media.giphy.com/media/uscuTAPrWqmqI/giphy.gif"
}' "https://allenlab5.herokuapp.com/api/posts"
```

* update by POSTID
```
curl -X PUT -H "Content-Type: application/json" -d '{
    "title": "Updated the Post"
}' "https://allenlab5.herokuapp.com/api/posts/POSTID"
```

* fetch one post by POSTID
```
curl -X GET "https://allenlab5.herokuapp.com/api/posts/POSTID"
```

*  delete by POSTID
```
curl -X DELETE -H "Content-Type: application/json" "https://allenlab5.herokuapp.com/api/posts/POSTID"
```


