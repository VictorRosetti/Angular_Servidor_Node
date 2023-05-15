console.log("passei aqui 1");
function astrobaldo(){
    $http.get("https://qtxo23-3000.csb.app/").success(function(resultado)
    {
        console.log(resultado);
    });
}

function Clique()
{
    console.log("passei aqui 2");
    $.get("https://qtxo23-3000.csb.app/", function(resultado)
    {
        console.log(resultado);
    });
}
