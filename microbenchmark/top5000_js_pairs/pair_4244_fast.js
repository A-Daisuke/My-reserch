const Benchmark = {
    run: function() {
        var VAR_6 = { KEY_1: { KEY_2: { KEY_3: { KEY_4: { KEY_5: {} } } } } };
        var VAR_2 = ["a", "b", "c", "d", "e"];
        var VAR_1 = {};
        var VAR_7 =
          ((((VAR_6["a"] || VAR_1)["b"] || VAR_1)["c"] || VAR_1)["d"] || VAR_1)["e"] ||
          VAR_1;
    }
};