const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: {} };
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          VAR_1.KEY_1 = null;
          if (VAR_1.KEY_1 === null) {
            VAR_1.KEY_1 = {};
            continue;
          }
        }
    }
};