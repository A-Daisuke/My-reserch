const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10000);
        var VAR_4 = 0;
        while (VAR_1[VAR_4++]) {
          var VAR_5 = VAR_1[VAR_4 - 1];
        }
    }
};