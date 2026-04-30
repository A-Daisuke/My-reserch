const Benchmark = {
    run: function() {
        var VAR_1 = true;
        for (var VAR_2 = 0; VAR_2 < 1000000; VAR_2++) {
          if (VAR_1) VAR_1 = false;
        }
    }
};