const Benchmark = {
    run: function() {
        var VAR_1 = "amarelo verde encarnado azul branco";
        for (var VAR_2 = 0; VAR_2 < 50000; VAR_2++) {
          var VAR_3 = VAR_1.replace("azul", "verde");
        }
    }
};