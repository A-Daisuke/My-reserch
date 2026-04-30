const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = Math.pow(10, 5);
        for (var VAR_3 = 0; VAR_3 < VAR_2; VAR_3++) {
          VAR_1.push("item number " + VAR_3);
        }
        var VAR_6 = [];
        for (var VAR_7 = 0; VAR_3 < VAR_1.length; VAR_3++) {
          VAR_6.push(VAR_1[VAR_3] + " mapped");
        }
    }
};