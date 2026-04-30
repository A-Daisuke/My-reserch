const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        for (var VAR_3 = 0; VAR_3 < 1000000; VAR_3++) {
          if (VAR_3 % 10) VAR_1++;
        }
    }
};