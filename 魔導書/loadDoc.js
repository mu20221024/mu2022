$(document).ready(function(){
    $("#switch").load("info_finish.txt");
    $("#finish").click(function(){
      $("#switch").load("info_finish.txt");
    });
    $("#god").click(function(){
      $("#switch").load("info_god.txt");
    });
    $("#role").click(function(){
      $("#switch").load("info_role.txt");
    });
    $("#cg").click(function(){
      $("#switch").load("info_cg.txt");
    });
    $("#animal").click(function(){
      $("#switch").load("info_animal.txt");
    });
    $("#job").click(function(){
      $("#switch").load("info_job.txt");
    });
    $("#clothes").click(function(){
      $("#switch").load("info_clothes.txt");
    });
    $("#clothesstyle").click(function(){
      $("#switch").load("info_clothesstyle.txt");
    });
    $("#people").click(function(){
      $("#switch").load("info_people.txt");
    });
    $("#background").click(function(){
        $("#switch").load("info_background.txt");
      });
      $("#object").click(function(){
        $("#switch").load("info_object.txt");
      });      
      $("#other").click(function(){
        $("#switch").load("info_other.txt");
      });      
  });