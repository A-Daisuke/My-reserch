const Benchmark = {
    run: function() {
        var VAR_1 = "ÿ",
          VAR_2,
          VAR_3,
          VAR_4,
          VAR_5,
          VAR_6 = /[\u007f-\uffff]/g;
        for (VAR_7 = 0; VAR_7 < 1024; VAR_7++) {
          VAR_2 += VAR_1;
          VAR_4 += " ";
        }
        VAR_3 = VAR_2 + VAR_2 + VAR_2 + VAR_2;
        VAR_5 = VAR_4 + VAR_4 + VAR_4 + VAR_4;
        JSON.stringify(VAR_3).replace(VAR_6, function (VAR_8) {
          return "\\u" + ("0000" + VAR_8.charCodeAt(0).toString(16)).slice(-4);
        });
    }
};