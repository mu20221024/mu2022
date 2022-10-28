function copytouser() {
    var x = $("p:hidden");
    var i;
    for (i = 0; i < x.length; i++) {
        $("#copy_content").append(x[i].textContent+",");
    }
    $("#copy_content").select();
    document.execCommand('copy');
    alert("已複製:"+$("#copy_content").text());
    $("#copy_content").html("")
    }