const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100; ++VAR_2) VAR_1 = [].concat(VAR_1, "asfaf");
        VAR_1 = VAR_1.join("");
    }
};