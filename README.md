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
