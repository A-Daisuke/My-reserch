const Benchmark = {
    run: function() {
        const VAR_1 = Array.from(new Array(10000).keys());
        let VAR_2 = 0;
        for (let VAR_5 = VAR_1.length; VAR_5--; ) {
          VAR_2 += VAR_1[VAR_5];
        }
    }
};