const Benchmark = {
    run: function() {
        [...Array(10000).keys()]
          .map((VAR_1) => VAR_1 + 1)
          .map((VAR_2) => VAR_2 + 1)
          .map((VAR_3) => VAR_3 + 1)
          .map((VAR_4) => VAR_4 + 1);
    }
};