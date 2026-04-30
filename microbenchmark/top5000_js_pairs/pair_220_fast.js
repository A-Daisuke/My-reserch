const Benchmark = {
    run: function() {
        const VAR_1 = new Array(100000).fill(0).map((VAR_2, VAR_3) => {
          return VAR_3 % 100;
        });
        const VAR_6 = new Set();
        for (const VAR_5 of VAR_1) {
          if (!VAR_6.has(VAR_5)) {
            VAR_6.add(VAR_5);
          }
        }
        const VAR_7 = Array.from(VAR_6);
    }
};