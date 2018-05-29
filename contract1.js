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
    save: function(title,content) {//����
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
	
    getAll: function() {//��ʾ
		var from = Blockchain.transaction.from;
        var myArr = [];
		for(var i=0; i<this.size; i++){
			var tempObj = JSON.parse(this.dataMap.get(i));
			myArr.push(tempObj);
		}

        return myArr;
    }	
};
module.exports = Mark;
	