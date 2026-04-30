const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 1000; VAR_2--; ) {
          VAR_1.push({ KEY_1: VAR_2 });
        }
        var VAR_5 = [];
        VAR_1.forEach(function (VAR_4) {
          VAR_5.push(VAR_4.KEY_1);
        });
    }
};