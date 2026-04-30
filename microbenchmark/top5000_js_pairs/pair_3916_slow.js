const Benchmark = {
    run: function() {
        var VAR_1 = "Texto de prueba";
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          var VAR_3 = "<strong>{{text}}</strong>";
          VAR_3 = VAR_3.replace("{{text}}", VAR_1);
        }
        console.log(VAR_3);
    }
};