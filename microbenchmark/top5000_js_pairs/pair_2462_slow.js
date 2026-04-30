const Benchmark = {
    run: function() {
        var VAR_1 = false;
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          if (VAR_1) VAR_1 = true;
        }
    }
};