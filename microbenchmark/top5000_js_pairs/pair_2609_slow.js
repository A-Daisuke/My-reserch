const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2,
          VAR_3,
          VAR_4,
          VAR_5;
        for (VAR_5 = 0; VAR_5 < 1000; VAR_5++) {
          VAR_2 = VAR_5 % 5;
          VAR_3 = (VAR_5 % 8) + 1;
          VAR_4 = (VAR_5 % 8) + 1;
          VAR_1.push("201" + VAR_2 + "-0" + VAR_3 + "-0" + VAR_4);
        }
        VAR_1.map(function (VAR_6) {
          return new Date(VAR_6);
        });
    }
};