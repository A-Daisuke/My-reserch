const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: { KEY_2: { KEY_3: [{ KEY_4: "blah" }] } } };
        var VAR_2 = {};
        var VAR_3, VAR_4;
        try {
          VAR_3 = VAR_2.KEY_1.KEY_2.KEY_3[0].KEY_4;
        } catch (VAR_5) {
          VAR_3 = "whatever some text";
        }
    }
};