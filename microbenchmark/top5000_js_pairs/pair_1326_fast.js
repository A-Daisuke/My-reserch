const Benchmark = {
    run: function() {
        var VAR_1 = "",
          VAR_2 = "1234567890qwertyuiopasdfghjklzxcvbnnm";
        for (var VAR_3 = 0; VAR_3 < 50000; VAR_3++) VAR_1 += VAR_2[~~(Math.random() * VAR_2.length)];
        var VAR_4 = VAR_1.slice(~~(Math.random() * VAR_1.length));
    }
};