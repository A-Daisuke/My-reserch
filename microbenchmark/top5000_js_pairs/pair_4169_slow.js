const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: { KEY_2: { KEY_3: { KEY_4: { KEY_5: "value" } } } },
        };
        try {
          VAR_2 = VAR_1.KEY_1.KEY_2.tird.KEY_4.KEY_5;
        } catch (VAR_3) {
          VAR_4 = null;
        }
    }
};