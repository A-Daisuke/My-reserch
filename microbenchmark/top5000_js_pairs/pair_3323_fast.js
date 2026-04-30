const Benchmark = {
    run: function() {
        var VAR_1 = {};
        for (var VAR_2 = 10000; VAR_2 >= 0; VAR_2--)
          VAR_1["counter"] = VAR_1["counter"] ? VAR_1["counter"] + 1 : 1;
    }
};