const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: 500 };
        const VAR_2 = new Array(VAR_1.KEY_1);
        const VAR_3 = new Array(VAR_1.KEY_1).fill(0);
        for (let VAR_4 = 0; VAR_4 < VAR_2.KEY_1; VAR_4++) {
          VAR_2[VAR_5] = VAR_3.slice(0);
        }
    }
};