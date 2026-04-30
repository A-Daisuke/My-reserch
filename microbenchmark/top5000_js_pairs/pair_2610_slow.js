const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 100; VAR_3++) VAR_1.push(VAR_3);
        for (var VAR_4 = 0; VAR_3 < 100; VAR_3++) VAR_2.push(VAR_3);
        VAR_2 = VAR_1.reduce(function (VAR_5, VAR_6) {
          return VAR_5.concat(VAR_3);
        }, VAR_2);
    }
};