const Benchmark = {
    run: function() {
        var VAR_8 = Number.MAX_VALUE;
        var VAR_9 = 0;
        var VAR_10 = Number.MAX_VALUE;
        var VAR_11 = 0;
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          if (VAR_3 < VAR_8) VAR_8 = VAR_3;
          if (VAR_3 > VAR_9) VAR_9 = VAR_3;
          if (VAR_3 < VAR_10) VAR_10 = VAR_3;
          if (VAR_3 > VAR_11) VAR_11 = VAR_3;
        }
    }
};