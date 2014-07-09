var _nycda = _nycda || {};
_nycda.conditional = function (condition, runIfTrue) {
    if(runIfTrue){
    	if(condition == null){
       	return runIfTrue;
       }
    	
        return function() {if(condition.apply(null, arguments)) {return runIfTrue.apply(null, arguments) }
       						else{
       							return (function() {return undefined})();
       							}};
       
    }else{
    throw "Hey don't do that";
	}
};