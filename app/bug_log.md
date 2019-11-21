# BUG LOG
## 1. Rollback error when trying to create new collection via "Create" button in `CollectionForm` component
* Location: /frontend/components/collections/collection_form.jsx

* Problem: Couldn’t create new collection

Error Message:
``` ruby
 ROLLBACK
  ↳ app/controllers/api/collections_controller.rb:20
Completed 500 Internal Server Error in 37ms (ActiveRecord: 19.5ms)

NoMethodError - undefined method `errors' for nil:NilClass:
  app/controllers/api/collections_controller.rb:23:in `create'
  ```


Bug Code:

``` javascript
handleSubmit(e) {
    e.preventDefault();
    const collection = Object.assign({}, this.state);
    this.props.action(collection).then(this.props.closeModal());
}
```

### HOW I DEBUGGED:
* Threw debuggers in everywhere (`handleSubmit()`, controllers, actions, reducer)
* Found out the problem had to do with the information getting to the front end to the backend; once it hit the `createCollection` method  in the `CollectionsController`, `collection_params` no longer had the information
* Also was getting an error that `:collection` was not permitted in collection params
* Put a debugger in collection_params and saw that the params were coming through as a nested object

`<ActionController::Parameters {"collection"=>{"collection"=>{"title"=>"Places to go", "description"=>""}, "errors"=>""}, "format"=>:json, "controller"=>"api/collections", "action"=>"create"} permitted: false>`
* Figured it had something to do with the way I was passing the information in my `handle submit()` function
* This was because I was using `Object.assign` and passing in a nested object to the action: `const collection = Object.assign({}, this.state);`

## SOLUTION:
Once deleted the `Object.assign({}, this.state}`, and passed in `(this.state.collection)`, it worked); The params now looked like this:

`<ActionController::Parameters {"collection"=><ActionController::Parameters {"title"=>"Places to go", "description"=>""} permitted: false>, "format"=>:json, "controller"=>"api/collections", "action"=>"create"} permitted: false>`


### Correct Code:
``` javascript
handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state.collection)
    .then(this.props.closeModal());
}
```
    