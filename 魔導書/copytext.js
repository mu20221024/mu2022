function copytext(obj) {
    $("#copy_content").append(obj.textContent);
    $("#copy_content").select();
    document.execCommand('copy');
    $("#copy_content").html("")
    toastr["success"](obj.textContent, "已複製");
}
