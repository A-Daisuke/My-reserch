const Benchmark = {
    run: function() {
        const VAR_1 = [];
        const VAR_2 = [];
        const VAR_3 = 10000;
        for (let VAR_4 = 0; VAR_4 < VAR_3; VAR_4++) {
          VAR_1.push(VAR_4);
          VAR_2.push(VAR_3 - VAR_4);
        }
        let VAR_5 = [...VAR_1, ...VAR_2];
    }
};