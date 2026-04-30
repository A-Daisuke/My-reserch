const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: { KEY_2: "Spew monster" } };
        typeof VAR_1.KEY_1 === "object" && VAR_1.KEY_1.KEY_2;
    }
};