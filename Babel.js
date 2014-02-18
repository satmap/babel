(function(){

	var babel = function(options){
		
		this.language = {}
		this.options = options || {};
		
		this.options.dir = this.options.dir || './langs';
		this.options.format = this.options.format || 'standard';
		
		this.speak = function(lang){
			return this;
		}
		
		this.say = function(val){
			return this.language[val];
		}
		
		this.format = function(format){
			this.options.format = format;
			return this; 
		}
		
		this._propercase = function(){ }
		this._getlang = function(){ }
		this._format = function(){ }
		
		this.s = function(val){
			return this.say(val);
		}
		
		this.t = function(val){
			this.format('titlecase');
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