const Benchmark = {
    run: function() {
        var VAR_1 = "helloWorld";
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1 += "x";
          var VAR_3 = VAR_1.length;
        }
    }
};