const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) VAR_1.push({});
        var VAR_3 = {};
        VAR_3.VAR_4 = 10000;
        for (var VAR_5 = 0; VAR_2 < 10000; VAR_2++) VAR_3[VAR_6] = {};
        var VAR_7 = [];
        VAR_7.VAR_8 = 1;
        for (var VAR_9 = 0; VAR_2 < 10000; VAR_2++) VAR_7[VAR_10] = {};
        for (var VAR_11 = 0; VAR_2 < 10000; VAR_2++)
          (function (VAR_12) {
            VAR_12.VAR_13 = 1;
          })(VAR_1[VAR_2]);
    }
};