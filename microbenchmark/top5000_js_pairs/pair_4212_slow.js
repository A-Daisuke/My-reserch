const Benchmark = {
    run: function() {
        VAR_1 = Array(1000).fill(1);
        VAR_2 = Array(1000).fill(2);
        VAR_3 = [...VAR_1, ...VAR_2];
    }
};