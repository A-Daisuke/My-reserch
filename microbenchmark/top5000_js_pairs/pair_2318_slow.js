const Benchmark = {
    run: function() {
        const VAR_1 = {};
        for (let VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1[Math.random() * VAR_2] = Math.random();
        }
        Object.keys(VAR_1);
        Object.keys(VAR_1);
    }
};