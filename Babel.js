(function(){

	var babel = function(options){
		
		this.language = {}
		this.language.current = {}
		this.language.fallback = {}
		
		this.options = options || {};
		
		this.options.dir = this.options.dir || 'langs';
		this.options.format = this.options.format || 'standard';
		
		this.languageMap = [ ];
		
		this.speak = function(lang){
			if(typeof window[lang] == 'object'){
				this.language.current = window[lang];
			}
			return this;
		}
		
		this.fallback = function(lang){
			if(typeof window[lang] == 'object'){
				this.language.fallback = window[lang];
			}
			return this;
		}
		
		this.say = function(val){
			if(typeof this.language.current[val] == 'string'){
				val = this.language.current[val];
			} else if(typeof this.language.fallback[val] == 'string'){
				val = this.language.fallback[val];
			}
			
			return this._format(val);
		}
		
		this.format = function(format){
			this.options.format = format;
			return this; 
		}
		
		this._propercase = function(val){
			return val.substr(0,1).toUpperCase()+val.substr(1,val.length);
		}
		
		this._titlecase = function(val){
			var words = val.split(' ');
			for(word in words){
				words[word] = this._propercase(words[word]);
			}
			return words.join(' ');
		}
		
		this._getlang = function(){
			var req = new XMLHttpRequest();
			req.open('GET',this.options.dir + this.options.lang + '.json');
			req.send();
		}
		
		this._format = function(val){
			if(this.options.format == 'proper'){
				return this._propercase(val);
			} else if(this.options.format == 'upper'){
				return val.toUpperCase();
			} else if(this.options.format == 'lower'){
				return val.toLowerCase();
			} else if(this.options.format == 'title'){
				return this._titlecase(val);
			} else {
				return val;
			}
		}
		
		this.s = function(val){
			return this.say(val);
		}
		
		this.t = function(val){
			this.format('title');
			return this._format(this.say(val));
		}
		
		this.p = function(val){
			this.format('proper');
			return this._format(this.say(val));
		}
		
		this.l = function(val){
			this.format('lower');
			return this._format(this.say(val));
		}
		
		this.u = function(val){
			this.format('upper');
			return this._format(this.say(val));
		}
	}
	
	window.Babel = babel;
})();