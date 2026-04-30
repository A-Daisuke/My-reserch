const Benchmark = {
    run: function() {
        var VAR_1 = "apple";
        while (VAR_1.length < 10000) {
          var VAR_2 = VAR_1.length;
          var VAR_3 = VAR_2 - 5;
          for (var VAR_4 = VAR_3; VAR_4 < VAR_2; VAR_4++) {
            VAR_1 += VAR_1[VAR_4];
          }
          var VAR_5 = VAR_1.length;
          var VAR_6 = VAR_5 - 5;
          for (var VAR_7 = VAR_6; VAR_4 < VAR_5; VAR_4++) {
            VAR_1 += VAR_1[VAR_4];
          }
        }
    }
};