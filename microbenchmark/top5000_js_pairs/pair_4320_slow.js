const Benchmark = {
    run: function() {
        for (var VAR_1 = -10000; VAR_1 < 10000; ++VAR_1) {
          var VAR_2;
          if (VAR_1 < 0) VAR_2 = 0;
          else if (VAR_1 > 1000) VAR_2 = 1000;
          else VAR_2 = VAR_1;
        }
    }
};