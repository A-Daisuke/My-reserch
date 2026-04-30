const Benchmark = {
    run: function() {
        var VAR_1 = "apple";
        var VAR_4 = "apple";
        while (VAR_1.length < 10000) {
          var VAR_2 = VAR_1.length - 5;
          for (var VAR_3 = VAR_2; VAR_3 < VAR_2 + 10; ++VAR_3) {
            VAR_1 += VAR_4[VAR_3 % 5];
          }
        }
    }
};