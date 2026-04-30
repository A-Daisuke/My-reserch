const Benchmark = {
    run: function() {
        var VAR_3 = ["Hello you", "there"],
          VAR_4;
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_4 = VAR_3[0] + " v " + VAR_3[1];
        }
    }
};