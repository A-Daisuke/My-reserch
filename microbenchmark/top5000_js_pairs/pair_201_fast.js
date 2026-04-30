const Benchmark = {
    run: function() {
        var VAR_1 = [];
        while (VAR_1.length < 500000) {
          VAR_1.push(VAR_1.length);
        }
        for (var VAR_4 = 0; VAR_1[VAR_4]; VAR_4++) {
          var VAR_5 = VAR_1[VAR_4];
        }
    }
};