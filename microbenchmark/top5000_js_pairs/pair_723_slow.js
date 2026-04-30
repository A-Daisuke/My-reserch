const Benchmark = {
    run: function() {
        var VAR_1 = Array(100000).fill(1);
        var VAR_2 = [];
        VAR_2.push(...VAR_1);
    }
};