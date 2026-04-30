const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: { KEY_2: { KEY_3: { KEY_4: "foo" } } } };
        var VAR_2;
        try {
          VAR_2 = VAR_1.KEY_1.KEY_2.three.KEY_4;
        } catch (VAR_3) {
          VAR_2 = null;
        }
        if (VAR_2) throw "Error";
    }
};