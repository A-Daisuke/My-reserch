const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000);
        var VAR_2 = [];
        for (var VAR_3 = 0, VAR_4 = VAR_1.length; VAR_3 < VAR_4; VAR_3++) {
          VAR_2.push(VAR_3 + "");
        }
        var VAR_5 = VAR_2.join("");
    }
};