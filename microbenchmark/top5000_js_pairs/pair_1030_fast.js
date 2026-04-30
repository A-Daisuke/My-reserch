const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (VAR_4 = 0, VAR_3 = 20000; VAR_4 < VAR_3; VAR_4++) {
          VAR_1.push(VAR_4);
        }
        for (var VAR_4 = 0; VAR_4 < VAR_1.length; VAR_4++) {}
    }
};