const Benchmark = {
    run: function() {
        const VAR_1 = new Array(10000).fill(1);
        let VAR_2 = 0;
        for (const VAR_5 of VAR_1) {
          VAR_2 += VAR_5;
        }
    }
};