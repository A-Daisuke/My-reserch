const Benchmark = {
    run: function() {
        const VAR_5 = { KEY_1: { KEY_2: 42 } };
        const VAR_10 = VAR_5 && VAR_5.KEY_1 && VAR_5.KEY_1.KEY_2;
        const VAR_11 = VAR_5 && VAR_5.c && VAR_5.c.d;
    }
};