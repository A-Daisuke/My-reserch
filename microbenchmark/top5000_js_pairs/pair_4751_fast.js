const Benchmark = {
    run: function() {
        var VAR_8 = {
          KEY_1: function () {},
          KEY_2: function () {},
          KEY_3: function () {},
        };
        var VAR_9 = {
          KEY_4: VAR_8.KEY_4,
          KEY_5: VAR_8.KEY_5,
          KEY_6: VAR_8.KEY_6,
          KEY_7: 777,
          KEY_8: "str",
          KEY_9: {},
        };
    }
};