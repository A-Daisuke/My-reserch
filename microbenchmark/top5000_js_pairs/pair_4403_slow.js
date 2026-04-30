const Benchmark = {
    run: function() {
        var VAR_1 = {
            KEY_1: null,
            KEY_2: null,
            KEY_3: null,
          },
          VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2.push(Object.create(VAR_1));
        }
    }
};