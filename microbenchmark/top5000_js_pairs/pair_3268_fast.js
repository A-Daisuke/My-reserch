const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          if (VAR_1.length > 50) {
            VAR_1.shift();
          }
        }
    }
};