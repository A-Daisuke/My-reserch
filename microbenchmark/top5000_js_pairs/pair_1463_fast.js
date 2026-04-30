const Benchmark = {
    run: function() {
        const VAR_1 = new Map();
        const VAR_2 = {};
        const VAR_3 = [];
        for (let VAR_4 = 0, VAR_5 = 5000; VAR_4 < VAR_5; VAR_4 += 1) {
          const VAR_6 = VAR_1.get(VAR_4);
        }
    }
};