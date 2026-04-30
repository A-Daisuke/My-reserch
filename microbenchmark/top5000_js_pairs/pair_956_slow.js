const Benchmark = {
    run: function() {
        const VAR_1 = Array.from(Array(100000).keys());
        const VAR_2 = VAR_1.map((VAR_3) => {
          return VAR_3 + 1;
        });
    }
};