const Benchmark = {
    run: function() {
        var VAR_2 = Math.random() * 1000000;
        var VAR_3 = Math.random() * 1000000;
        for (var VAR_1 = 0; VAR_1 < 10000; VAR_1++) {
          var VAR_4 = VAR_2 / VAR_3;
        }
    }
};