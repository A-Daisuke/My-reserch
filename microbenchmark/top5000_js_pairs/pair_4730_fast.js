const Benchmark = {
    run: function() {
        var VAR_2 = "lorem ipsum";
        var VAR_3 = "lorem ipsum";
        var VAR_4 = "lorem ipsum";
        var VAR_6 = {};
        for (var VAR_5 = 1; VAR_5 < 1000; VAR_5++) {
          VAR_6 = {
            KEY_4: VAR_2,
            KEY_5: VAR_3,
            KEY_6: VAR_4,
          };
        }
    }
};