const Benchmark = {
    run: function() {
        var VAR_1 = "Hello you v there",
          VAR_2;
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2 = VAR_1.split(" v ");
        }
    }
};