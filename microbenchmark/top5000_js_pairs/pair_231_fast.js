const Benchmark = {
    run: function() {
        const VAR_1 = new Array(100000).fill(0).map((VAR_2, VAR_3) => {
          return VAR_3 % 100;
        });
        const VAR_8 = new Set();
        for (const VAR_9 of VAR_1) {
          if (!VAR_8.has(VAR_9)) {
            VAR_8.add(VAR_9);
          }
        }
        const VAR_10 = Array.from(VAR_8);
    }
};