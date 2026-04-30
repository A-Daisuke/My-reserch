const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push({ KEY_1: Math.random() >= 0.5 ? true : false });
        }
        var VAR_7 = [];
        var VAR_8 = [];
        for (var VAR_9 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          if (VAR_1[VAR_2].KEY_1) {
            VAR_8.push(VAR_1[VAR_2]);
          } else {
            VAR_7.push(VAR_1[VAR_2]);
          }
        }
    }
};