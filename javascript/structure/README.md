# how to javascript structure 

## returning by myself
excute function and return oneself. 
```javascript
var MyStructure = (function(){
    function MyStructure() {
        //constructor
    }

    MyStructure.prototype.func1 = function() {
        //method
    }

    return MyStructure;
})();
```

## making structure template 
excute template when calling template
```javascript
var MyStructure = function(){
    function MyStructure() {
        //constructor
    }

    this.func1 = function() {
        //method
    }

};
```