const Benchmark = {
    run: function() {
        var VAR_1 = 3;
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          Math.floor(VAR_2 / VAR_1);
        }
    }
};