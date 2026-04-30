const Benchmark = {
    run: function() {
        VAR_1 = Array(1000).join("bla").split("");
        VAR_2 = "";
        for (var VAR_3 = 0, VAR_4 = VAR_1.length; VAR_3 < VAR_4; ++VAR_3) {}
    }
};