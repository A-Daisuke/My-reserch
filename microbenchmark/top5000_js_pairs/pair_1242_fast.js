const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          try {
            VAR_1.push(VAR_2);
          } catch (VAR_3) {}
        }
    }
};