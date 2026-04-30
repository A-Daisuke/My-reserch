const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: { KEY_2: null } };
        var VAR_2 = { KEY_3: { KEY_4: { KEY_5: "result" } } };
        var VAR_3 = null;
        try {
          VAR_3 = VAR_1.KEY_1.KEY_2.KEY_5;
        } catch (VAR_4) {}
    }
};