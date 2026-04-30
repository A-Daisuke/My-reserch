const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: { KEY_2: "Spew monster" } };
        var VAR_2 = { KEY_3: { KEY_4: VAR_1 } };
        typeof VAR_2.KEY_3 === "object" &&
          typeof VAR_2.KEY_3.KEY_4 === "object" &&
          typeof VAR_2.KEY_3.KEY_4.KEY_1 === "object" &&
          VAR_2.KEY_3.KEY_4.KEY_1.KEY_2;
    }
};