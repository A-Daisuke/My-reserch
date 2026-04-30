const Benchmark = {
    run: function() {
        const VAR_1 = new Array(100000).fill(0).map((VAR_2, VAR_3) => {
          return VAR_3 % 100;
        });
        const VAR_5 = new Set();
        for (const VAR_6 of VAR_1) {
          if (!VAR_5.has(VAR_6)) {
            VAR_5.add(VAR_6);
          }
        }
        const VAR_7 = Array.from(VAR_5);
    }
};