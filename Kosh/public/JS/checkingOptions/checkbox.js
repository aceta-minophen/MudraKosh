$(document).ready(function () {
    $("input[name='proofOfAdd1']").change(function () {
        var maxAllowed = 2;
        var cnt = $("input[name='proofOfAdd1']:checked").length;
        if (cnt > maxAllowed) {
            $(this).prop("checked", "");
            alert('You can select maximum ' + maxAllowed + ' options');
        }
        if (cnt == maxAllowed) {
            var items = document.getElementsByName("proofOfAdd1");
            var selectedItems = "";
            for (var i = 0; i < items.length; i++) {
                if (items[i].type == "checkbox" && items[i].checked == true) selectedItems += items[i].value + "\n";
            }
            console.log(selectedItems);
        }
    });
});

$(document).ready(function () {
    $("input[name='proofOfAdd2']").change(function () {
        var maxAllowed = 2;
        var cnt = $("input[name='proofOfAdd2']:checked").length;
        if (cnt > maxAllowed) {
            $(this).prop("checked", "");
            alert('You can select maximum ' + maxAllowed + ' options');
        }
        if (cnt == maxAllowed) {
            var items = document.getElementsByName("proofOfAdd2");
            var selectedItems = "";
            for (var i = 0; i < items.length; i++) {
                if (items[i].type == "checkbox" && items[i].checked == true) selectedItems += items[i].value + "\n";
            }
            console.log(selectedItems);
        }
    });
});