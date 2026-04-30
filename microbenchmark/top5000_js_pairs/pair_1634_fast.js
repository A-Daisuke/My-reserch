const Benchmark = {
    run: function() {
        const VAR_1 = new Array(100000).fill(1);
        const VAR_2 = new Float32Array(100000).fill(1);
        const VAR_5 = VAR_2.length;
        let VAR_3 = 0;
        for (let VAR_6 = 0; VAR_6 < VAR_5; VAR_6++) {
          VAR_3 += VAR_2[VAR_6];
        }
    }
};