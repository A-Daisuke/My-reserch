const Benchmark = {
    run: function() {
        const VAR_1 = new Array(100000).fill(1);
        const VAR_2 = new Float32Array(100000).fill(1);
        const VAR_6 = VAR_1.length;
        let VAR_7 = 0;
        for (let VAR_8 = 0; VAR_8 < VAR_6; VAR_8++) {
          VAR_7 += VAR_1[VAR_8];
        }
    }
};