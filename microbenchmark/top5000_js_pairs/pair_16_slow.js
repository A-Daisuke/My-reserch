const Benchmark = {
    run: function() {
        var VAR_1 = new RegExp("(.*)test(.*)", "");
        var VAR_2 = "0123456789";
        var VAR_3 = VAR_2 + VAR_2;
        var VAR_4 = VAR_3 + VAR_3 + VAR_2;
        var VAR_5 = VAR_4 + VAR_4;
        var VAR_6 = VAR_5 + VAR_5 + VAR_5 + VAR_5 + VAR_5;
        var VAR_7 = VAR_6 + VAR_6;
        var VAR_8 = VAR_7 + VAR_7 + VAR_7 + VAR_7 + VAR_7;
        VAR_1.test(VAR_8);
    }
};