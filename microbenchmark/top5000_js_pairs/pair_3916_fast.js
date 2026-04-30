const Benchmark = {
    run: function() {
        var VAR_1 = "Texto de prueba";
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          var VAR_3 = "";
          VAR_3 += "<strong>";
          VAR_3 += VAR_1;
          VAR_3 += "</strong>";
        }
        console.log(VAR_3);
    }
};