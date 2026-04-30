const Benchmark = {
    run: function() {
        var VAR_1 = "apple";
        var VAR_5 = "apple";
        while (VAR_1.length < 10000) {
          var VAR_2 = VAR_1.length - 5;
          for (var VAR_4 = VAR_2; VAR_4 < VAR_2 + 10; ++VAR_4) {
            VAR_1 += VAR_5[VAR_4 % 5];
          }
        }
    }
};