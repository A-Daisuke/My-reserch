const Benchmark = {
    run: function() {
        [...Array(10000).keys()].map((VAR_1) => {
          const VAR_5 = VAR_1 + 1;
          const VAR_6 = VAR_5 + 1;
          const VAR_7 = VAR_6 + 1;
          return VAR_7 + 1;
        });
    }
};