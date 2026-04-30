const Benchmark = {
    run: function() {
        var VAR_1 = {};
        for (VAR_2 = 9999; VAR_2 >= 0; VAR_2--) {
          if (!VAR_1.VAR_3) {
            VAR_1.VAR_3 = {};
          }
          VAR_1.VAR_3.VAR_4 = 42;
        }
    }
};