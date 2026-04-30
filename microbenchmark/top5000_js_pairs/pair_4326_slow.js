const Benchmark = {
    run: function() {
        let VAR_1 = new Array(1000).fill(0).map((VAR_2, VAR_3) => VAR_3);
        let VAR_4 = new Set();
        VAR_4.add(VAR_1);
        VAR_1.forEach((VAR_5) => VAR_4.add(VAR_5));
    }
};