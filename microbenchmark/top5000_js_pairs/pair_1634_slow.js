const Benchmark = {
    run: function() {
        const VAR_1 = new Array(100000).fill(1);
        const VAR_2 = new Float32Array(100000).fill(1);
        let VAR_3 = 0;
        for (let VAR_4 of VAR_2) {
          VAR_3 += VAR_4;
        }
    }
};