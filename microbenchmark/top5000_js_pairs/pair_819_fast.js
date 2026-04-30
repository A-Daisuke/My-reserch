const Benchmark = {
    run: function() {
        var VAR_1 = "amarelo verde encarnado azul branco";
        var VAR_4 = /azul/;
        for (var VAR_2 = 0; VAR_2 < 50000; VAR_2++) {
          var VAR_3 = VAR_1.replace(VAR_4, "verde");
        }
    }
};