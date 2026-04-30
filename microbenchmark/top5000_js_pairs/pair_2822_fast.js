const Benchmark = {
    run: function() {
        const VAR_1 = 5000;
        const VAR_2 = new Array(VAR_1).fill(0);
        const VAR_3 = [];
        for (let VAR_5 = 0; VAR_5 < VAR_1; VAR_5++) {
          VAR_3.push(VAR_2[VAR_5]);
        }
    }
};