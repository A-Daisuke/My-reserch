const Benchmark = {
    run: function() {
        var VAR_4 = {
          KEY_1: 1000,
          KEY_2: 2000,
        };
        var VAR_5 = "my_variable";
        var VAR_6 = "my_second_variable";
        VAR_4[VAR_5]++;
        VAR_4[VAR_6]++;
    }
};