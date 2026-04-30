const Benchmark = {
    run: function() {
        var VAR_1 = {};
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1[VAR_2 + ""] = VAR_2;
        }
        var VAR_4;
        for (var VAR_7 in VAR_1) {
          if (VAR_1.hasOwnProperty(VAR_2)) {
            VAR_4 = VAR_1[VAR_2];
          }
        }
    }
};