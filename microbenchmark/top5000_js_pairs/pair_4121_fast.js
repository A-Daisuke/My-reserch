const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: { KEY_2: { KEY_3: { KEY_4: { KEY_5: "value" } } } },
        };
        if (
          VAR_1.KEY_1 &&
          VAR_1.KEY_1.KEY_2 &&
          VAR_1.KEY_1.KEY_2.tird &&
          VAR_1.KEY_1.KEY_2.tird.KEY_4 &&
          VAR_1.KEY_1.KEY_2.tird.KEY_4.KEY_5
        ) {
          VAR_2 = VAR_1.KEY_1.KEY_2.tird.KEY_4.KEY_5;
        } else {
          VAR_4 = null;
        }
    }
};