const Benchmark = {
    run: function() {
        var VAR_1 = "999.999.999,00";
        var VAR_2 = new Array(500).join(VAR_1);
        while (VAR_2.indexOf("999,") !== -1) {
          VAR_2 = VAR_2.replace("999,", "x");
        }
    }
};