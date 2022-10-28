function addtolist(obj,obj1) {
    $("#list_content").append("<button class='btn btn-secondary btn-sm'onclick='clearthis(this)'style='margin-top:3px'><p style='display:none'>"+obj1.textContent+"</p>"+obj.textContent+"</button> ");
}
