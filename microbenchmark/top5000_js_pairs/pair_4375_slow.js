const Benchmark = {
    run: function() {
        var VAR_1 = "lorem ipsum";
        var VAR_2 = "lorem ipsum";
        var VAR_3 = "lorem ipsum";
        var VAR_4 = {};
        for (var VAR_5 = 1; VAR_5 < 1000; VAR_5++) {
          VAR_4.VAR_6 = VAR_1;
          VAR_4.VAR_7 = VAR_2;
          VAR_4.VAR_8 = VAR_3;
        }
    }
};