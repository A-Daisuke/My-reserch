const Benchmark = {
    run: function() {
        var VAR_5 = "";
        for (var VAR_2 = 0; VAR_2 < 50; VAR_2++) {
          for (var VAR_3 = 0; VAR_3 < 50; VAR_3++) {
            VAR_5 += VAR_2.toString() + VAR_3.toString();
          }
        }
    }
};