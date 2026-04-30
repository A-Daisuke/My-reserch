const Benchmark = {
    run: function() {
        var VAR_1 = new RegExp("px", "i");
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) VAR_2.push(Math.random() * 1000 + "");
        var VAR_4 = 0;
        for (var VAR_5 = 0; VAR_3 < VAR_2.length; VAR_3++) {
          VAR_4 += parseInt(VAR_2[VAR_3], 10);
        }
    }
};