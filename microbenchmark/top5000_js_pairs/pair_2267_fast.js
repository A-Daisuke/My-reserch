const Benchmark = {
    run: function() {
        let VAR_1 = [];
        const VAR_2 = [];
        for (let VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1.push(VAR_3);
          VAR_2.push(VAR_3);
        }
        VAR_1 = VAR_1.concat(VAR_2);
    }
};