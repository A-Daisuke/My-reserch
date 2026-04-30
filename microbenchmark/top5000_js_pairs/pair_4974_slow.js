const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        for (; VAR_1--; ) {
          if (!VAR_1) {
            break;
          }
        }
    }
};