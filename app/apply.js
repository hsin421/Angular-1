var _nycda = _nycda || {};
_nycda.apply = function (item, property, value) {
    if(item){
    	if(property){
			prop_parse = property.split(".");
			prop_parse_length = prop_parse.length;
			myarray=[];
			myarray[0]=item;
			ct =0;
			for(a=0; a<prop_parse_length; a++ ){
			    if(!item.hasOwnProperty(prop_parse[a])){ 
			    	ct ++;
                    if(ct >= 2) throw "Error";
			      }
			    else{
			    	myarray[a+1] = item[prop_parse[a]]
			    	item = item[prop_parse[a]]
			    }			    	
			    if(a==prop_parse_length-1){
			        myarray[a+1]=value;
			    }}
			for(b=prop_parse_length-1; b >= 0; b--){
                myarray[b][prop_parse[b]]=myarray[b+1]
			}
			return myarray[0]    
			    
			}
			else{
			return item
		}}
			 
	else{
		return item
		}
};