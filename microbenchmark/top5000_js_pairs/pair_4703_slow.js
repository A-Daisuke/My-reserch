const Benchmark = {
    run: function() {
        VAR_1 = { KEY_1: 10000 };
        for (let VAR_2 = VAR_1.KEY_1 - 1; VAR_2 >= 0; VAR_2--) {}
    }
};