const Benchmark = {
    run: function() {
        var VAR_1 = {};
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1[VAR_2 + ""] = VAR_2;
        }
        var VAR_3 = Object.getOwnPropertyNames(VAR_1);
        var VAR_4;
        for (var VAR_5 of VAR_3) {
          VAR_4 = VAR_1[VAR_2];
        }
    }
};