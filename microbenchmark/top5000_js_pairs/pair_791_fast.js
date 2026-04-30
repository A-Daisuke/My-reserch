const Benchmark = {
    run: function() {
        const VAR_1 = new Float32Array(100000).fill(1);
        const VAR_5 = VAR_1.length;
        let VAR_6 = 0;
        for (let VAR_7 = 0; VAR_7 < VAR_5; VAR_7++) {
          VAR_6 += VAR_1[VAR_7];
        }
    }
};