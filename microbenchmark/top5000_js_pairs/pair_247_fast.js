const Benchmark = {
    run: function() {
        const VAR_1 = new Array(100000).fill(0).map((VAR_2, VAR_3) => {
          return VAR_3 % 100;
        });
        const VAR_4 = [...new Set(VAR_1)];
    }
};