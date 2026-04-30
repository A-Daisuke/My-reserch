const Benchmark = {
    run: function() {
        var VAR_7 = { KEY_1: { KEY_2: { KEY_3: { KEY_4: { KEY_5: {} } } } } };
        var VAR_2 = ["a", "b", "c", "d", "e"];
        var VAR_3 = {};
        var VAR_8, VAR_9, VAR_10, VAR_11;
        var VAR_6 = undefined;
        if ((VAR_8 = VAR_7["a"]) && (VAR_9 = KEY_1["b"]) && (VAR_10 = KEY_2["c"]) && (VAR_11 = KEY_3["d"])) {
          VAR_6 = KEY_4["e"];
        }
    }
};