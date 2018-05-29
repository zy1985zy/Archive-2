"use strict";

var Mark = function() {
    LocalContractStorage.defineMapProperty(this, "dataMap");
//	LocalContractStorage.defineMapProperty(this, "likeMap");
	LocalContractStorage.defineProperty(this, "size");
};
Mark.prototype = {
    init: function() {
		this.size = 0;
	},
    save: function(title,content) {//∑¢±Ì
        content = content.trim();

        if (content === "") {
            throw new Error("empty content");
        }

        
        var key = this.size;
        var obj = new Object();
		obj.index = key;
		obj.title = title;
        obj.content = content;
        obj.author = Blockchain.transaction.from;
		obj.createdDate = Blockchain.transaction.timestamp;
		
        this.dataMap.set(key, JSON.stringify(obj));
		
		this.size += 1;
    },
	
    getAll: function() {//œ‘ æ
		var from = Blockchain.transaction.from;
        var myArr = [];
		for(var i=0; i<this.size; i++){
			var tempObj = JSON.parse(this.dataMap.get(i));
			myArr.push(tempObj);
		}

        return myArr;
    },	

module.exports = iShare;
	
	
/*var LetterItem = function(text){
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
module.exports = TheLetter;*/