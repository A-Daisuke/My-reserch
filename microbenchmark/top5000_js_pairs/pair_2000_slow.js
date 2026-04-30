const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 10000;
        while (VAR_2--) {
          VAR_1.push(" ");
        }
        var VAR_3 = VAR_1.join("");
    }
};