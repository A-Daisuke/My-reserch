const Benchmark = {
    run: function() {
        var VAR_1 = "";
        var VAR_2 = [];
        var VAR_3 = 0;
        var VAR_4 = 100000;
        VAR_2 = [];
        for (; VAR_3 < VAR_4; VAR_3++) {
          VAR_2.push(VAR_3);
        }
        VAR_1 = VAR_2.join("");
    }
};