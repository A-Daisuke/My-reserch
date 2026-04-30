const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; ++VAR_2) VAR_1.push(VAR_2);
        var VAR_3 = {};
        for (var VAR_4 = 0, VAR_5 = VAR_1.length; VAR_2 < VAR_5; ++VAR_2) VAR_3[VAR_6] = true;
        var VAR_11 = VAR_1.map(function (VAR_12) {
          VAR_12 * 2;
        });
    }
};