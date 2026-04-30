const Benchmark = {
    run: function() {
        var VAR_1 = "1.2.3.4.5.6.7.8.9.0.".repeat(1000);
        var VAR_2 = /\./g;
        let VAR_3,
          VAR_4 = 0;
        let VAR_5 = "";
        while ((VAR_3 = VAR_1.indexOf(".", VAR_3 + 1)) !== -1) {
          VAR_5 += VAR_1.substr(VAR_4, VAR_3 - VAR_4) + ",";
          VAR_4 = VAR_3 + 1;
        }
    }
};