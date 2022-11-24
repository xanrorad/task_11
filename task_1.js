var user = {
    name: "Tom" 
    };
    function format(beginMsg, endMsg) {
        console.log(beginMsg + this.name + endMsg);
    }
//var tomFormat = format.bind(user);// Ваш код
var tomFormat = function() {format.call(user,"<<<", ">>>")};
tomFormat("<<<", ">>>"); // "<<<Tom>>>"