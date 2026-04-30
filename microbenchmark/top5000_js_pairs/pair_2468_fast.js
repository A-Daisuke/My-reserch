const Benchmark = {
    run: function() {
        const VAR_1 = Array(10000).fill("test-data");
        for (let VAR_3 = 0; VAR_3 < VAR_1.length; VAR_3 += 1) {
          const VAR_4 = VAR_1[VAR_3];
        }
    }
};