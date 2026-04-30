const Benchmark = {
    run: function() {
        let VAR_1 = new Array(1000000);
        let VAR_2 = Array(100000).fill(1);
        let VAR_3 = 5;
        VAR_1.splice(VAR_3, 100000, ...VAR_2);
    }
};