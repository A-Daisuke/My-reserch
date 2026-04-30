const Benchmark = {
    run: function() {
        var VAR_1 = false;
        var VAR_2 = true;
        for (var VAR_3 = 0; VAR_3 < 10000; ++VAR_3) {
          if (VAR_2 && !VAR_1) VAR_1 = true;
        }
    }
};