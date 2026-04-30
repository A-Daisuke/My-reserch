const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push({
            KEY_1: "User " + VAR_2,
            KEY_2: 0,
          });
        }
        VAR_1 = VAR_1.map(function (VAR_3) {
          return Object.assign(VAR_3, { KEY_3: null });
        });
    }
};