const Benchmark = {
    run: function() {
        var VAR_1 = "999.999.999,00";
        var VAR_2 = new Array(500).join(VAR_1);
        var VAR_3;
        while ((VAR_3 = VAR_2.indexOf("999,")) !== -1) {
          VAR_2 = VAR_2.slice(0, VAR_3) + "x" + VAR_2.slice(VAR_3 + 4);
        }
    }
};