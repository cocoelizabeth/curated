##  Posting Data with jQuery

###  `$.post(url, data, callback)`

`url`
- string
- points to the serverside program that will process the  form data (storing into db)
- Ex: `var  url = "http://website.com/posts"`

`data`: 
-  data from the form
- can pass it a JS object
`var data  = {
    firstName: "Dave",
    lastName: "Mac"
}`
- But more  commonly you'll want  to use data from a form. Use a `.submit` event handler to  the form, `preventDefault`, `serialize` the `formData`, then `post` the data
`$('form').submit(function(e) {
    e.preventDefault();
    var url = $(this).attr("action);
    var formData = $(this).serialize()
    $.post(url, formData, function(response) {
        $('#signup').html("<p>Thanks for signing up</p>)    })
})`

`callback`
- anonymous function  to handle the response from the server

`preventDefault`: user with an event obj to prevent the browswer from  responding normally to an event -- for example, it prevents a form from being submitted, or loading a new page when a link is clicked

`.attr`: can call on the form to get the "action" attribute to save  to a variable: `var url = $('form').attr.("action")'`

## The jQuery AJAX Method
All  of jQuery's shorthand AJAX methods are built on a more complex AJAX method -- `$.ajax`
- Has more options and provides greater control of the AJAX request 
- Lets you set a timeout to control how long you're willing to wait for a  response from the server
- Lets you send a username and password to resources that require user auth
- It's jQuery's low-level AJAX method, the one all the shorthand methods are built on
- Takes in 2 parameters: 
1. A url
2. A JS obj containing settings that control how the AJAX request is made


### Basic Structure:
`$.ajax(url,settings)`

`url`: same as other methods (url for the request)

`settings`:
- JS object containing one or more kv pairs that set various options for the request
Post Re-Written

`$.ajax(url, {
    data : formData,
    type: "POST",
    success: function(resonse) {
        $'('#signup').html("<p>Thanks!</p>")
    }
});`

- the `success` property is used to set a callback function that runs when the browswer sucessfully receives a response from the server

- Much more versatile!


## Handling Errors
`.fail()`: the jQuery method for  handling errors in an AJAX response
Chain this onto the `ajax`  request
`.fail(function(jqXHR) {
    alert(jqXHR.statusText)
})`
* Doesnt work for the  $.load or for JSONP (making requests to another site)

The callback for jQuery's `.fail()` method receives a jQuery XHR object as a parameter. The  `statusText` property of the jQuery XHR object  provides a text description of the response HTTP status code
`status`  provides the code;

# Ajax & APIs

## What is an API?
- API: Application Programing Interface
- Allows programmers to tap into a vast stockpile of tweets on Twitter, posts on Facebook, and photos on Flickr
- Allowing programmers to access certain content from another web server using a server-side programming language like PHP, Ruby, or Python
- An API provides the method for connecting your site to a 3rd party web service, like YouTube, Dropbox, Flickr 
- Defines what you can get from a web server and how you can get it
- Some sites provide JS API's, so you can access data directly from a site using AJAX, so you dont need to add any server side programming to your web server to get the content from other sites

## Flickr's API
- to  use API, you need to apply for an `API key`
- An API Key acts like a password, when you connect to a web server, it tells them who is making requests; 
- Google maps limits how often you make requests and will charge you if too much
- to get the XML in JSON format, add a query string `?format=json` to the end of the URL
- Get a JSON view extension

`JSONP`
- JSON with Padding
- A method for requesting data from another web server by bypassing a web browsers "same origin" policy
= A way of sending data in a JS file


