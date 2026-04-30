const Benchmark = {
    run: function() {
        var VAR_1 = Math.random() * (Math.PI * 2) - Math.PI;
        var VAR_2 = Math.random() * 100;
        var VAR_3 = 0;
        var VAR_4 = 10000;
        while (VAR_4--) VAR_3 += Math.pow(2, VAR_4);
    }
};