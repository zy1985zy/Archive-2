"use strict";

/*var WeaTher = function() {
    LocalContractStorage.defineMapProperty(this, "dataMap");
//	LocalContractStorage.defineMapProperty(this, "likeMap");
	LocalContractStorage.defineProperty(this, "size");
};*/
var LetterItem = function(text){
	if(text){
		var obj = JSON.parse(text);
		this.title = obj.title;
		this.content = obj.content;
		this.author = obj.author;
	}
};
LetterItem.prototype = {
	toString : function(){
		return JSON.stringify(this)
	}
};

var TheLetter = function() 
{
	LocalContractStorage.defineMapProperty
	(this,"data",
		{
		parse: function(text) {
			return new LetterItem(text);
		},
		stringify: function(o) {
			return o.toString();
		}
	}
	);
};

TheLetter.prototype =
 {
	init:function()
	{

	},

	save:function(title,content)
	 {
		if(!title || !content){
			throw new Error("empty title or content")
		}

		var from = Blockchain.transaction.from;
		var Lettertitle = this.data.get(title);
		if(Lettertitle){
			throw new Error("letter has been exist");
		}

		LetterItem = new LetterItem();
		LetterItem.author = from;
		LetterItem.title = title;
		LetterItem.content = content;

		this.data.put(title,LetterItem);
	},

	get:function(title)
	{
		if(!title)
		{
			throw new Error ("emptu title")
		}
		return this.data .get(title);
	}
}
module.exports = TheLetter;