const Benchmark = {
    run: function() {
        let VAR_1 = new Array(1000000);
        let VAR_2 = Array(100000).fill(1);
        let VAR_3 = 5;
        for (let VAR_4 = 0; VAR_4 < VAR_2.length; VAR_4++) VAR_1[VAR_4 + VAR_3] = VAR_2[VAR_4];
    }
};