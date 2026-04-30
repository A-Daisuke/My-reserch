const Benchmark = {
    run: function() {
        var VAR_5 = "";
        var VAR_2 = ["this", "is", "a", "test"];
        VAR_5 = VAR_2[0];
        for (var VAR_3 = 1; VAR_3 < 10000; ++VAR_3) {
          VAR_5 += " " + VAR_2[VAR_3 & 3];
        }
    }
};