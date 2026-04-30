const Benchmark = {
    run: function() {
        var VAR_1 = {},
          VAR_2;
        for (VAR_2 = 0; VAR_2 < 20000; ++VAR_2) {
          VAR_1[VAR_2 + "asd"] = {
            KEY_1: VAR_2 + "asd",
            KEY_2: VAR_2 * 2,
          };
        }
        for (var VAR_3 in VAR_1) {
          if (VAR_1.hasOwnProperty(VAR_3));
        }
    }
};