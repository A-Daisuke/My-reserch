const Benchmark = {
    run: function() {
        var VAR_1 = true,
          VAR_2;
        for (var VAR_3 = 1000000; VAR_3--; ) {
          if (VAR_1 === false) {
            VAR_1 = true;
          } else {
            VAR_1 = false;
          }
        }
        VAR_2 = VAR_1;
    }
};