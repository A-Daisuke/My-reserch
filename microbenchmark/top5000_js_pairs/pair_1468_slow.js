const Benchmark = {
    run: function() {
        var VAR_1 = {};
        for (var VAR_2 = 0; VAR_2 < 9999; VAR_2++) {
          if (VAR_1.hasOwnProperty("$" + VAR_2)) {
            VAR_1["$" + VAR_2];
          }
        }
    }
};