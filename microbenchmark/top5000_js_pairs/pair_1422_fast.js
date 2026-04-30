const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 50000; VAR_2++) {
          VAR_1.push({
            KEY_1: "prop" + VAR_2,
            KEY_2: "prop" + (VAR_2 + 2),
          });
        }
        for (var VAR_4 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          var VAR_5 = VAR_1[VAR_2];
          for (var VAR_3 in VAR_5) {
            var VAR_6 = VAR_5[VAR_3];
          }
        }
    }
};