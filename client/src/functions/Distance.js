const distance = (point1, point2) => {
    let lat1 = Number(point1.latitude)
    let lat2 = Number(point2.latitude)
    let lon1 = Number(point1.longitude)
    let lon2 = Number(point2.longitude)
  
  
      if ((lat1 === lat2) && (lon1 === lon2)) {
          return 0;
      }
      else {
          var radlat1 = Math.PI * lat1/180;
          var radlat2 = Math.PI * lat2/180;
          var theta = lon1-lon2;
          var radtheta = Math.PI * theta/180;
          var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
          if (dist > 1) {
              dist = 1;
          }
          dist = Math.acos(dist);
          dist = dist * 180/Math.PI;
          dist = dist * 60 * 1.1515;
          return dist;
      }
  }

  export default distance