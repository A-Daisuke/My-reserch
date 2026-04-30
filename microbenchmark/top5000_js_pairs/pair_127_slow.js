const Benchmark = {
    run: function() {
        var VAR_1 = Array(1000 * 1000).fill(1);
        VAR_1[500000] = 5;
        var VAR_2 = VAR_1.indexOf(5);
        var VAR_3 = [...VAR_1.slice(0, VAR_2), ...VAR_1.slice(VAR_2 + 1)];
    }
};