const Benchmark = {
    run: function() {
        var VAR_1 = new Number(123456789);
        var VAR_2 = 0;
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) VAR_2 += VAR_1.valueOf();
        console.log(VAR_2);
    }
};