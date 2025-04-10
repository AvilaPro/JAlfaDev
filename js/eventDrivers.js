$( "#selectPrice" ).on( "change", function() {
    document.getElementById("bs").value = valoresDolar[parseInt($("select").val())];
} );