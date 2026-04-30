const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: { KEY_2: { KEY_3: { KEY_4: {} } } } };
        var VAR_2 = undefined;
        if (VAR_1.KEY_1 && VAR_1.KEY_1.c && VAR_1.KEY_1.c.KEY_3 && VAR_1.KEY_1.c.KEY_3.KEY_4) {
          VAR_2 = VAR_1.KEY_1.c.KEY_3.KEY_4;
        }
    }
};