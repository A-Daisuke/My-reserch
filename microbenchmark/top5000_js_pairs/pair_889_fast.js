const Benchmark = {
    run: function() {
        let VAR_1 = new Array(100000).fill(0);
        let VAR_2 = [1];
        VAR_2 = VAR_2.concat(VAR_1);
    }
};