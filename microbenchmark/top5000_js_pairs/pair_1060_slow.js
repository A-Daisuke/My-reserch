const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [],
          VAR_3,
          VAR_4 = 10000;
        for (VAR_3 = 0; VAR_3 < VAR_4; VAR_3 += 1) {
          var VAR_5 = { KEY_1: VAR_3 };
          VAR_1.push(VAR_5);
          VAR_2["i" + VAR_3] = VAR_5;
        }
        var VAR_6 = 0;
        var VAR_7;
        for (var VAR_8 = 0; VAR_8 < VAR_4; ++VAR_8) {
          VAR_7 = "i" + VAR_8;
          VAR_6 += VAR_2[VAR_7].KEY_1;
        }
    }
};