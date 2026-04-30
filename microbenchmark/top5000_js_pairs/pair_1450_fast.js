const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0, VAR_3 = 1000; VAR_2 < VAR_3; VAR_2++) {
          VAR_1.push(Date.parse("2011-09-23T20:40:55." + VAR_2 + "+0000").toString());
        }
        VAR_1.forEach(function (VAR_4) {
          return VAR_1[0] > VAR_4;
        });
    }
};