const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 10100; VAR_3++) {
          VAR_2.push({
            KEY_1: Date.now(),
            KEY_2: 25,
          });
        }
        VAR_1 = VAR_2.slice();
        for (var VAR_4 = 0; VAR_3 < 10100; VAR_3++) {
          VAR_2 = VAR_2.slice(0, VAR_2.length - 1);
          VAR_2.unshift({
            KEY_3: Date.now(),
            KEY_4: 25,
          });
        }
    }
};