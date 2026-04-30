const Benchmark = {
    run: function() {
        var VAR_1 = "data-";
        var VAR_2 = 10000;
        var VAR_3 = [];
        while (VAR_2) {
          VAR_3.push(VAR_1);
          VAR_2 -= 1;
        }
        VAR_3 = VAR_3.join("");
    }
};