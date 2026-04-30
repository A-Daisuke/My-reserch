const Benchmark = {
    run: function() {
        var VAR_1 = 5000;
        var VAR_2 = 0;
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          if (++VAR_2 >= VAR_1) {
            VAR_2 -= VAR_1;
          }
        }
    }
};