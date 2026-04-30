const Benchmark = {
    run: function() {
        var VAR_1 = "a".repeat(100000).split("");
        for (var VAR_4 = 0; VAR_4 < VAR_1.length; VAR_4++) {
          var VAR_5 = VAR_1[VAR_4];
        }
    }
};