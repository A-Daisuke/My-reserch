const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: { KEY_2: { KEY_3: { KEY_4: true } } } };
        var VAR_2 = { KEY_5: { KEY_6: { KEY_7: { KEY_8: true } } } };
        try {
          VAR_2.KEY_1.KEY_2.KEY_3.KEY_4;
        } catch (VAR_3) {}
    }
};