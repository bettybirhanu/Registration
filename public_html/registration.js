/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Submit(){
 var emailvalidationstring = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
 var email = $("#email").val();
 var fname = $("#fname").val();
 var lname = $("#lname").val();
  
  if($("#fname").val() === "" ){
   $("#fname").focus();
   $("#errorBox").html("Enter the First Name");
   return false;
  }else if($("#lname").val() === "" ){
    $("#lname").focus();
    $("#errorBox").html("Enter the Last Name");
    return false;
  }else if($("#email").val() === "" ){
    $("#email").focus();
    $("#errorBox").html("Enter the email");
    return false;
  }else if(!emailvalidationstring.test(email)){
    $("#email").focus();
    $("#errorBox").html("Enter the valid email");
    return false;
  }else {
   $("#errorBox").html("Form submitted successfully")
   }
   
 }
