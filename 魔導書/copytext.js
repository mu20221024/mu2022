function copytext(obj) {
    $("#copy_content").append(obj.textContent);
    $("#copy_content").select();
    document.execCommand('copy');
    $("#copy_content").html("")
    alert("已複製:"+obj.textContent);
}
