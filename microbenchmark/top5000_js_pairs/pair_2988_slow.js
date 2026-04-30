const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push({
            KEY_1: VAR_2,
            KEY_2: "asdf",
          });
        }
        var VAR_3 = 9876;
        var VAR_4 = VAR_1.filter(function (VAR_5) {
          return VAR_5.KEY_1 !== VAR_3;
        });
    }
};