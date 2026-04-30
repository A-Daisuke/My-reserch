const Benchmark = {
    run: function() {
        var VAR_1 = 533332800000;
        var VAR_2 = new Intl.NumberFormat();
        VAR_2.format(VAR_1);
    }
};