const Benchmark = {
    run: function() {
        var VAR_1 = {};
        VAR_1.VAR_2 = {};
        VAR_1.VAR_2.VAR_3 = {};
        VAR_1.VAR_2.VAR_3.VAR_4 = {};
        VAR_1.VAR_2.VAR_3.VAR_4.VAR_5 = {
          KEY_1: function () {
            jQuery.noop();
          },
        };
        try {
          VAR_1.VAR_2.VAR_3.VAR_4.VAR_5.KEY_1();
        } catch (VAR_6) {}
    }
};