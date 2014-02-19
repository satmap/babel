# SatMap Language Lib

This JSlib handles multi-language support.

# Kitchen Sink

```js

var lang = new Babel();
lang.speak('german');
lang.fallback('english');

lang.format('uppercase').say('navigation');
lang.format('lowercase').say('navigation');
lang.format('titlecase').say('navigation');
lang.format('propercase').say('navigation');

// there are shorthand functions too
lang.s('navigation') // navigation as is
lang.t('navigation') // navigation in title case
lang.p('navigation') // navigation in proper case
lang.l('navigation') // navigation in lower case
lang.u('navigation') // navigation in uppercase
	
```

Language File ``./langs/german.js``

```js
var german = {
	"navigation":"steuerung",
	"home":"zuhause",
	"route-add":"route planen"
}
```
You have to include all language files you wish to use in script tags. 

```html
<script src='./langs/default.js'></script>
<script src='./langs/german.js'></script>
```

# DOM binding
you can bind a language value to a dom, you must give the dom an ID of ``babel-{key}`` you can also pass a data attribute to set the format of the value.

```js
var lang = new Babel();
lang.speak('german');
lang.fallback('english');

// using jquery to make sure we have a dom..
$(window).load(function(){
	lang.auto();
});

```

```html
<h1 id='babel-navigation' data-format='title'></h1>
```

if you use ``auto``, it will be re-triggered when ever you you use ``speak`` so auto binding will automatically update values if you switch language.

