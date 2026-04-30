const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push({
            KEY_1: VAR_2,
            KEY_2: "Title " + VAR_2,
            KEY_3: 50,
          });
        }
        var VAR_3 = 0;
        for (var VAR_4 in VAR_1) {
          VAR_3 = VAR_3 + VAR_1[VAR_4].KEY_3;
        }
    }
};