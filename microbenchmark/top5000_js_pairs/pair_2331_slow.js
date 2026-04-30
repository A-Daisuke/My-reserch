const Benchmark = {
    run: function() {
        for (var VAR_1 = 0; VAR_1 < 10; VAR_1++) {
          try {
            undefined();
          } catch (VAR_2) {}
        }
    }
};