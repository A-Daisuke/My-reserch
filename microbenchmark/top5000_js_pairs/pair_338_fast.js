const Benchmark = {
    run: function() {
        var VAR_1 = 1000000,
          VAR_2 = ["a", "b"];
        for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          for (var VAR_5 = 0; VAR_5 < VAR_2.length; VAR_5++) {
            VAR_2[VAR_5] + "x";
          }
        }
    }
};