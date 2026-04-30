const Benchmark = {
    run: function() {
        const VAR_1 = [...Array(1000).keys()];
        let VAR_2 = 0;
        for (const VAR_4 of VAR_1) {
          VAR_2 = VAR_4;
        }
    }
};