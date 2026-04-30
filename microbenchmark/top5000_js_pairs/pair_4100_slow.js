const Benchmark = {
    run: function() {
        VAR_1 = Array(1000).join("bla").split("");
        VAR_2 = "";
        for (var VAR_3 = 0; VAR_3 in VAR_1; ++VAR_3) {}
    }
};