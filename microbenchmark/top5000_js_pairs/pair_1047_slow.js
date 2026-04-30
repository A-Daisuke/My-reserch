const Benchmark = {
    run: function() {
        var VAR_1 = new Array(100000).join("0").split("");
        var VAR_2 = 0;
        VAR_1.forEach(function (VAR_3) {
          VAR_2++;
        });
    }
};