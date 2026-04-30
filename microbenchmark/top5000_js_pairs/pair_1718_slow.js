const Benchmark = {
    run: function() {
        var VAR_1 = 1000000,
          VAR_2 = 0;
        while (VAR_1--) {
          try {
            VAR_2 = VAR_2 + (Math.random() % 7);
          } catch (VAR_3) {}
        }
        VAR_2 = VAR_2 + 1;
    }
};