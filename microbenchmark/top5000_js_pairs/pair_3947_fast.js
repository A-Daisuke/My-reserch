const Benchmark = {
    run: function() {
        var VAR_4 = new Array(2000),
          VAR_5 = 0;
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_4[VAR_5++] = "foobar";
        }
        VAR_4.VAR_3 = VAR_5;
    }
};