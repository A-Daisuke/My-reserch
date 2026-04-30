const Benchmark = {
    run: function() {
        var VAR_1 = new Array(100000).join("0").split("");
        var VAR_2 = 0;
        var VAR_4 = 0;
        var VAR_5 = VAR_1.length;
        while (VAR_4 < VAR_5) {
          VAR_4++;
          VAR_2++;
        }
    }
};