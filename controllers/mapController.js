exports.compareDistance = function(req,res) {

   //get position of customer
   point_x = req.params.customer_lat;
   point_y = req.params.customer_lon;
    
   //get positions and name of starbucks
   starbucks = require('../starbucks_new_york.json');

   //caculate distance

   var distAndNameAndAddr = [];

   for(var i=0;i<starbucks.length;i++){

       var dist = getDistanceFromLatLonInKm(point_x,point_y,starbucks[i].location.latitude,starbucks[i].location.longitude);
       var starbuck = {

           distance:dist,
           name:starbucks[i].name,
           addr:starbucks[i].street

       };
       distAndNameAndAddr.push(starbuck);


   }



   function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
	  var R = 6371; // Radius of the earth in km
	  var dLat = deg2rad(lat2-lat1);  // deg2rad below
	  var dLon = deg2rad(lon2-lon1); 
	  var a = 
	    Math.sin(dLat/2) * Math.sin(dLat/2) +
	    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
	    Math.sin(dLon/2) * Math.sin(dLon/2)
	    ; 
	  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	  var d = R * c; // Distance in km
	  return d;
   }

   function deg2rad(deg) {
          return deg * (Math.PI/180)
   }


 
   //make array of starbuck objects consists of name and distance which is in variable DISTANDNAMEANDADDR
    
	

   //use sort method to sort starbuck objects ascendently
    

   

   //return starbucks object

    
   res.send(distAndNameAndAddr);

}
