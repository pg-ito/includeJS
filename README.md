# includeJS
library to dynamically include the Javascript

_____

### How to use.

```js
<script src="include.js"></script>

<script>
	var incl = new includeJS();
	incl.load('./js/testload.js')
    .load('https://code.jquery.com/jquery-2.1.3.js',function(){
        // Someting callback when include first augment Javascript file loaded.
    })
	.finish(function(){
		// Execute on all files loaded.
	});
</script>

```