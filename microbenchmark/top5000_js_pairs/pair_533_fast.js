const Benchmark = {
    run: function() {
        var VAR_5 = [];
        for (var VAR_6 = 0; VAR_6 < 100000; VAR_6++) {
          VAR_5.push(VAR_6);
        }
        var VAR_7;
        while ((VAR_7 = VAR_5.pop())) {
          VAR_7 = VAR_7 * 2;
        }
    }
};