const Benchmark = {
    run: function() {
        var VAR_4,
          VAR_5,
          VAR_6 = /[\u007f-\uffff]/g;
        for (VAR_7 = 0; VAR_7 < 1024; VAR_7++) {
          VAR_4 += " ";
        }
        VAR_5 = VAR_4 + VAR_4 + VAR_4 + VAR_4;
        JSON.stringify(VAR_4).replace(VAR_6, function (VAR_8) {
          return "\\u" + ("0000" + VAR_8.charCodeAt(0).toString(16)).slice(-4);
        });
    }
};