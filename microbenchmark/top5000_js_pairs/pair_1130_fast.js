const Benchmark = {
    run: function() {
        var VAR_6 = 0,
          VAR_7 = 0;
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_6 += 60;
          VAR_7++;
          var VAR_8 = (VAR_6 / VAR_7) | 0;
        }
    }
};