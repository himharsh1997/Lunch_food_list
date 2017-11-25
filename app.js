require(['angular'],function($,angular){
angular.module('checkker',[])
.controller('mycontrol',function($scope){
$scope.name="";
$scope.checkf=function(){
 if(this.name==""||this.name==" ")
 {
   this.name="Please enter data first";
  }
else if(this.name!=""||this.name==" ")
{
    var x=this.name.split(",");
    var l=x.length;
     if(l>=3)
     {
      this.name="Enjoy!";
      }  
     else{
         this.name="Too much!";
       }
 }

}
});

})
