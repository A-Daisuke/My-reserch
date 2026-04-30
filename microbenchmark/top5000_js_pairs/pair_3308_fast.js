const Benchmark = {
    run: function() {
        var VAR_1 = [];
        VAR_2 = {
          KEY_1: "1",
          KEY_2: "1",
        };
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1.push(VAR_2);
        }
        for (var VAR_7 = 0; VAR_3 < 10000; VAR_3++) {
          var VAR_8 = VAR_1[VAR_3];
          var VAR_9 = VAR_8.KEY_1;
          var VAR_10 = VAR_8.KEY_2;
        }
    }
};