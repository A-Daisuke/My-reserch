const Benchmark = {
    run: function() {
        var VAR_1 = 12285;
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          VAR_2.push(VAR_3);
        }
        var VAR_4 = [];
        VAR_2.forEach(function (VAR_5) {
          VAR_4.push(VAR_5 + 1);
        });
    }
};