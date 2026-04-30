const Benchmark = {
    run: function() {
        var VAR_1 = {
          KEY_1: function () {},
        };
        try {
          VAR_1["blow"]();
        } catch (VAR_2) {}
        try {
          VAR_1["unexists"]();
        } catch (VAR_3) {}
    }
};