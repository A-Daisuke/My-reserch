const Benchmark = {
    run: function() {
        const VAR_1 = Array.from(new Array(10000).keys());
        let VAR_2 = 0;
        for (const VAR_5 of VAR_1) {
          VAR_2 += VAR_5;
        }
    }
};