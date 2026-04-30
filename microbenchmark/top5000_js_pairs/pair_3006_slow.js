const Benchmark = {
    run: function() {
        var VAR_1 = "";
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          VAR_1 += Math.random().toString(36).substring(2);
        }
        var VAR_3 = VAR_1.match(/(.)/gi);
    }
};