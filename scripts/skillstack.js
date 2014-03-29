define(["skillstore"], function(skillstore) {
  return {
    skillstate: function() {

      var skillstoreArr = skillstore.skillstoreArray();
      for(var i=0; i<skillstoreArr.length; i++){
          var oldClass = document.getElementById(skillstoreArr[i]).getAttribute('class');
          document.getElementById(skillstoreArr[i]).setAttribute('class', oldClass + ' default');               
      }
    }
  }
});