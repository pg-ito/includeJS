# includeJS
library to dynamically include the Javascript

_____

### How to use.

```js
<script src="include.js"></script>

<script>
	includeJS.load('./js/testload.js');
    
    includeJS.load('https://code.jquery.com/jquery-2.1.3.js',function(){
        // Someting callback when include Javascript file loaded.
    });
</script>

```