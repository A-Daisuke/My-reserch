const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: { KEY_2: { KEY_3: { KEY_4: true } } } };
        try {
          VAR_1.KEY_1.KEY_2.json.KEY_4;
        } catch (VAR_2) {}
    }
};