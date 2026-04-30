const Benchmark = {
    run: function() {
        var VAR_1 = {},
          VAR_2 = {},
          VAR_3 = 0,
          VAR_4 = 0;
        VAR_1[VAR_3++] = eval("console.log(" + Math.random() + ")");
    }
};