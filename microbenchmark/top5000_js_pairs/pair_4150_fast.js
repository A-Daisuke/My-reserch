const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: { KEY_2: "Spew monster" } };
        Object(VAR_1.KEY_1).KEY_2;
    }
};