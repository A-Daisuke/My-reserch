const Benchmark = {
    run: function() {
        const VAR_1 = [];
        for (let VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        VAR_1.flatMap((VAR_3) => (Number.isInteger(VAR_3 / 2) ? [VAR_3 / 2] : []));
    }
};