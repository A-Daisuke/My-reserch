const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push({
            KEY_1: "a",
            KEY_2: 2,
            KEY_3: true,
          });
        }
        VAR_1.forEach(function (VAR_5) {});
    }
};