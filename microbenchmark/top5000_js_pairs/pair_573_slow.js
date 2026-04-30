const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 100000;
        var VAR_3 = VAR_2;
        while (VAR_2--) VAR_1.push(0);
        var VAR_4 = 0;
        var VAR_5 = [];
        VAR_1.map(function (VAR_6) {
          VAR_4++;
        });
    }
};