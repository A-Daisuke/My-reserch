const Benchmark = {
    run: function() {
        const VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 10000; ++VAR_2) {
          VAR_1.unshift("apple" + String(VAR_2));
        }
    }
};