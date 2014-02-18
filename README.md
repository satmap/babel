# SatMap Language Lib

This JSlib handles multi-language support.

# Kitchen Sink

```

	var lang = new Bable();
	lang.speak('german');
	
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

Language File ``./langs/german.json``

```js
{
	"navigation":"steuerung",
	"home":"zuhause",
	"route-add":"route planen"
}
```
