const Benchmark = {
    run: function() {
        let VAR_1 = new Array(1000).fill(1);
        VAR_1.map((VAR_2) => VAR_2 * Math.random() * 1000).filter((VAR_3) => VAR_3 > 2);
    }
};