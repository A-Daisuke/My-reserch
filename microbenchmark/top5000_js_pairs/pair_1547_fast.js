const Benchmark = {
    run: function() {
        var VAR_2 = {};
        var VAR_4 = {
          KEY_1: null,
          KEY_2: null,
        };
        for (var VAR_3 = 1; VAR_3 < 10000; VAR_3++) {
          var VAR_5 = {
            KEY_3: VAR_4,
            KEY_4: null,
            KEY_5: {},
          };
          VAR_4.KEY_2 = VAR_5;
          VAR_4 = VAR_5;
        }
    }
};