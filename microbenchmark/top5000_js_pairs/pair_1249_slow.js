const Benchmark = {
    run: function() {
        var VAR_1 = new Array(10000).join("*").split("");
        var VAR_2 = VAR_1.slice(),
          VAR_3 = 9999,
          VAR_4;
        while (VAR_3--) VAR_4 = VAR_2.shift();
    }
};