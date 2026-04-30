const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = Math.PI;
        for (var VAR_3 = 1, VAR_4 = 1000; VAR_3 <= VAR_4; VAR_3++) {
          VAR_1.push("Fundamental alert number " + VAR_3);
        }
        for (var VAR_6 = 0; VAR_3 < VAR_1.length; VAR_3++) {
          Math.random() * VAR_2;
        }
    }
};