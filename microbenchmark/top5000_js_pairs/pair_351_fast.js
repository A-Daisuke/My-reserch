const Benchmark = {
    run: function() {
        var VAR_4 = "Hello World";
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_4 += "Hello World";
        }
        var VAR_5 = VAR_4;
    }
};