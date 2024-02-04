# What is the Facebook Graph API?

Is an HTTP based API that apps can use to programatically query data or perform actions in facebook products.

Is named as the "Graph" API due to the idea of a social graph, which is the way Facebook represents their main product.

The graph is composed by the following properties:

- Nodes
- Edges
- Fields

In the documentation, both "node" and "edge" are usually referred to as an "endpoint".

## Nodes

A node, is an object with an unique ID.
An object, in the Graph API, could be an User, a Page, an Ad Account, a Post, a Group, and so on.

Example of a node:

```curl
curl -i -X GET \
  "https://graph.facebook.com/USER-ID?access_token=ACCESS-TOKEN"
```

### Adding metadata to the response

If you make the request above, the object you will get, will look like this:

```
{
  "name": "Your Name",
  "id": "YOUR-USER-ID"
}
```

If you want all fields, including properties like name, description, data type, and more, you can use the `metadata=1` parameter:

```
curl -i -X GET \
  "https://graph.facebook.com/USER-ID?
    metadata=1&access_token=ACCESS-TOKEN"
```

You will get a response that looks like this:

```json
{
  "name": "Jane Smith",
  "metadata": {
    "fields": [
      {
        "name": "id",
        "description": "The app user's App-Scoped User ID. This ID is unique to the app and cannot be used by other apps.",
        "type": "numeric string"
      },
      {
        "name": "age_range",
        "description": "The age segment for this person expressed as a minimum and maximum age. For example, more than 18, less than 21.",
        "type": "agerange"
      },
      {
        "name": "birthday",
        "description": "The person's birthday.  This is a fixed format string, like `MM/DD/YYYY`.  However, people can control who can see the year they were born separately from the month and day so this string can be only the year (YYYY) or the month + day (MM/DD)",
        "type": "string"
      },
...
```

### The special endpoint /me

This endpoint is special, because it is tied to whatever node access token is being used to perform the request. If you're using an access token from a page, then the `/me` endpoint will retrieve information related to the node being used for the request.

## Edges

An edge is the relationship between two nodes.
An user could have multiple pictures.
A picturse could have multiple comments.

Let's say that you want the pictures that someone has posted in their facebook.

This endpoint could help you:

```curl
curl -i -X GET \
  "https://graph.facebook.com/USER-ID/photos?access_token=ACCESS-TOKEN"
```

## Fields

Probably you could have noticed that everytime we request something, we only get 2 fields, an ID and a name, or probably an ID and a created_at property.

This is not very useful, we want the actual contents of the picture! Or maybe we want other properties as well!

That's what fields are useful.

If you want more fields to be retrieved on the server's response, you can specify them using the `fields` parameter.

```curl
curl -i -X GET \
  "https://graph.facebook.com/USER-ID?fields=id,name,email,picture&access_token=ACCESS-TOKEN"
```

That request would get you an object that would look like this one:

```json
{
  "id": "USER-ID",
  "name": "EXAMPLE NAME",
  "email": "EXAMPLE@EMAIL.COM",
  "picture": {
    "data": {
      "height": 50,
      "is_silhouette": false,
      "url": "URL-FOR-USER-PROFILE-PICTURE",
      "width": 50
    }
  }
}
```

### Complex Parameters

// Need more info here

## Access Tokens

Almost all Graph API endpoints require an access token of some kind, so each time you access an endpoint, you will need an access token.

-- MORE

** HTTP
** HSTS

```

```
