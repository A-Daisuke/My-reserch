const Benchmark = {
    run: function() {
        var VAR_7 = { KEY_1: { KEY_2: { KEY_3: { KEY_4: { KEY_5: {} } } } } };
        var VAR_2 = ["a", "b", "c", "d", "e"];
        var VAR_3 = {};
        var VAR_8 =
          ((((VAR_7["a"] || {})["b"] || {})["c"] || {})["d"] || {})["e"] || undefined;
    }
};