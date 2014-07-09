var _nycda = _nycda || {};
_nycda.get = function (item, property) {
    if(item){
    	if(property){
			prop_parse = property.split(".")
			prop_parse_length = prop_parse.length
			for(a=0; a<prop_parse_length; a++ ){
			    if(item.hasOwnProperty(prop_parse[a])){ 
			    	item = item[prop_parse[a]]}
			    	else{
			    		return undefined
			    	}
			    	if(a==prop_parse_length-1){
			    return item}}}
			
			else{
			return item
		}}
			 
	else{
		return item
		}
	
}
