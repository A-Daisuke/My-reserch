const Benchmark = {
    run: function() {
        var VAR_2 = {
          KEY_1: function () {},
          KEY_2: function () {},
          KEY_3: function () {},
        };
        var VAR_3 = VAR_2;
        VAR_3.KEY_1;
        VAR_3.KEY_2;
        VAR_3.KEY_3;
    }
};