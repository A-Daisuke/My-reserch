const Benchmark = {
    run: function() {
        var VAR_1 = "name";
        var VAR_2 = "bill";
        var VAR_3 = [];
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_3[VAR_3.VAR_5] = VAR_1 + VAR_4;
          VAR_3[VAR_3.VAR_6] = VAR_2;
        }
    }
};